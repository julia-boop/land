const db = require('../database/models');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = {
    main: (req, res) => {
        res.render('login')
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
            }
        })

        return res.render('edit', {
            category:category, 
            countries:countries,
            feature: feature,
            property:property,
            image:image,
            feature_property:feature_property
        })
    }
}