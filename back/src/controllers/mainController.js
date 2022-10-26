const bcrypt = require("bcryptjs")
const db = require('../database/models');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
var loginMsg = null 
module.exports = {
    all: async (req, res) => {
        let properties = await db.Property.findAll({
            include: [
               { association: 'images'},
               { association: 'category'}
            ]
        })
        return res.render('all', {properties:properties})
    },
    login: (req, res) => {
        res.render('login', {loginMsg: loginMsg})
    },
    enter: (req, res) => {
        db.User.findOne({
            where: {
                mail: req.body.mail
            }
        })
        .then((user) => {
            if(user) {
                if(bcrypt.compareSync(req.body.password, user.password)){
                    req.session.userSession = user.id
                    res.locals.userLogged = user.id 
                    console.log(res.locals.userLogged)
                    console.log(req.session.userSession)
                    return res.redirect('/all')
                } else {
                    loginMsg = 'Credenciales Invalidas'
                    return res.redirect('/')
                }
            } else {
                loginMsg = 'Credenciales Invalidas'
                return res.redirect('/')
            }
            
            
        })
        .catch((e) => {
            return res.send(e)
        })
    },
    create_form: async (req,res) => {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();

        let countries = data
        let category = await db.Category.findAll()
        let feature = await db.Feature.findAll()

        return res.render('create', {category:category, countries:countries, feature:feature})
    }, 
    create: async (req, res) => {
        let features = req.body.feature.map((e) => {
            return {
                name: e
            }
        })
        let previous_feature = await db.Feature.findAll()
        for (let i = 0 ; i < previous_feature.length ; i++){
            for (let j = 0 ; j < features.length ; j++){
                if(previous_feature[i].name == features[j].name){
                    features.splice(j, 1)
                }
            }
        }
        let create_feature = await db.Feature.bulkCreate(features)
        let create_property = await db.Property.create({
            name: req.body.name,
            description: req.body.description,
            zone: req.body.zone,
            country: req.body.country,
            video: req.body.video,
            price: req.body.price,
            category_id: req.body.category,
            keyword: req.body.keywords,
        })
        let image_array = req.body.image
        image_array.push(req.body.portrait)
        let images = req.body.image.map((e) => {
            return {
                url: e, 
                property_id: create_property.id,
                detail_portrait: (image_array.lastIndexOf(e) == image_array.length-1)?1:0,
                home_portrait: (req.body.home_portrait == 1 && image_array.lastIndexOf(e) == image_array.length-1)?1:0
            }
        })
        let create_images = await db.Image.bulkCreate(images)
        let feature_values = []
        for (let i = 0; i < req.body.feature_value.length; i++){
            if(req.body.feature_value[i]!=''){
                feature_values.push({
                    property_id: create_property.id,
                    feature_id: create_feature[i].id,
                    value: req.body.feature_value[i]
                })
            }
        }
        let create_feature_values = await db.Feature_Property.bulkCreate(feature_values)

        res.send(req.body)
    },
    edit: async (req, res) => {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        let countries = data
        let feature = await db.Feature.findAll()
        let category = await db.Category.findAll()
        let property = await db.Property.findOne({
            where : {
                id: req.params.id_property
            }
        })
        let image = await db.Image.findAll({
            where:{
                property_id: req.params.id_property
            }
        })
        let feature_property = await db.Feature_Property.findAll({
            where: {
                property_id: req.params.id_property
            }, 
            include: [
                {association: 'feature'}
            ]
        })

        let isHome = false
        for (let i = 0 ; i < image.length ; i ++ ){
            if (image[i].home_portrait == 1){
                isHome = true
            }
        }
        let feature_cut = feature
        let feature_cut2 = []
        for (let k = 0 ; k < feature_property.length ; k++){
            for(let i = 0 ; i < feature.length ; i ++) {
                if (feature[i].id == feature_property[k].feature_id){
                    feature_cut.splice(i, 1)
                    feature_cut2.push({
                        id: feature_property[k].feature_id,
                        name: feature_property[k].feature.name,
                        hidden: true, 
                        value: feature_property[k].value, 
                        value_id: feature_property[k].id
                    })
                } 
            }
        }
        for(let i = 0 ; i < feature_cut.length ; i ++ ){
            feature_cut[i] = {
                id: feature_cut[i].id,
                name: feature_cut[i].name,
                hidden: false, 
                value: null, 
                value_id: null
            }
        }
        let front_feature = feature_cut.concat(feature_cut2)
        return res.render('edit', {
            category:category, 
            countries:countries,
            feature: front_feature,
            property:property,
            image:image,
            isHome:isHome
        })
    },
    update: async (req, res) => {
        /* UPDATE PROPERTY -------------------------------- */
        let property = {
            name: req.body.name,
            description: req.body.description,
            zone: req.body.zone,
            country: req.body.country,
            price: req.body.price,
            video: req.body.video, 
            category_id: req.body.category_id,
            keyword: req.body.keywords
        }

        let property_update = await db.Property.update(property, {
            where: {
                id: req.params.id_property
            }
        })


        /* CREATE NEW FEATURE AND NEW FEATURE VALUE ----------------------------- */
        let new_feature = null
        let new_body_feature_value = null
        let body_feature = req.body.new_feature
        let body_feature_value = req.body.new_feature_value
        if(body_feature){
            if(Array.isArray(body_feature)){
                let new_feature_arr = body_feature.map((e)=> {
                    return {
                        name : e
                    }
                })
                new_feature = await db.Feature.bulkCreate(new_feature_arr)
                if(body_feature_value){
                    for ( let i = 0 ; i < body_feature.length ; i ++ ){
                        if(body_feature_value[i] != ""){
                            new_body_feature_value = await db.Feature_Property.create({
                                property_id : req.params.id_property,
                                feature_id : new_feature[i].id,
                                value: body_feature_value[i]
                            })
                        }
                    }
                }
            }else{
                new_feature = await db.Feature.create({
                    name : body_feature
                })
                if(body_feature_value){
                    new_body_feature_value = await db.Feature_Property.create({
                        property_id: req.params.id_property,
                        feature_id: new_feature.id,
                        value: body_feature_value
                    })
                }
            }
        }
 
        /* UPDATE FEATURE VALUE ----------------------------------- */
        let feature_value_map = req.body.feature_value.map((e, i) => {
            return {
                feature: req.body.feature[i],
                feature_id: Number(req.body.feature_id[i]),
                feature_value: (e != '') ? e : null, 
                feature_value_id: (req.body.feature_value_id[i] != '') ? Number(req.body.feature_value_id[i]) : null
            }
        })

        for( let i = 0 ; i < feature_value_map.length ; i ++ ){
            if( feature_value_map[i].feature_value != null){
                let feature_value_update = await db.Feature_Property.upsert({
                    id: feature_value_map[i].feature_value_id,
                    value: feature_value_map[i].feature_value,
                    property_id: req.params.id_property,
                    feature_id: feature_value_map[i].feature_id
                }, {
                    where: {
                        id: feature_value_map[i].feature_value_id
                    }
                })
            }
        }

        /* CREATE NEW IMAGE ------------------------------- */
        let new_image_arr = []
        if(req.body.new_image){
            if(Array.isArray(req.body.new_image)){
                req.body.new_image.forEach((e)=> {
                    console.log(e)
                    new_image_arr.push({
                        url: e,
                        property_id: req.params.id_property,
                        home_portrait:0,
                        detail_portrait: 0
                    })
                })
                let new_image = await db.Image.bulkCreate(new_image_arr)            
            } else {
                let new_image = await db.Image.create({
                    url: req.body.new_image,
                    property_id: req.params.id_property,
                    home_portrait: 0,
                    detail_portrait: 0
                })
            }
        }

        /* UPDATE IMAGE ------------------------ */
        let image_update = null
        for(let i = 0 ; i < req.body.image.length ; i ++) {
                image_update = await db.Image.update({
                url: req.body.image[i], 
                property_id: req.params.id_property, 
                home_portrait: (req.body.portrait_id == req.body.image_id[i] && req.body.home_portrait == 1 ) ? 1 : 0,
                detail_portrait: (req.body.portrait_id == req.body.image_id[i]) ? 1 : 0
            }, {
                where: {
                    id: req.body.image_id[i]                }
            }) 
        } 
        return res.redirect('/all')   
    }, 
    logout: (req, res) => {
        req.session.destroy()
        res.locals.userLogged = undefined
        res.redirect('/')
    }
}