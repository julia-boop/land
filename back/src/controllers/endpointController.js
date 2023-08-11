const db = require('../database/models')
const axios = require('axios').default;

module.exports = {
    fetchHome: async (req, res) => {
        let properties = await db.Property.findAll({
            include: [
                {association: 'images', 
                where: {
                    home_portrait: 1
                }}
            ]
        })
        return res.json(properties)
    }, 
    fetchCategories: (req, res) => {
        let params = Number(req.body.cat_id)
        if(params == 0) {
            db.Property.findAll()
            .then((data) => {
                res.json({data:data})
            })
        } else if (params == 5) {
            db.Property.findAll({
                where: {
                    country: 'Argentina'
                }
            })
            .then((data) => {
                res.json({data:data})
            })
        } else {
            db.Property.findAll({
                where: {
                    category_id: params
                }
            })
            .then((data) => {
                res.json({data:data})
            })
        }
    }, 
    fetchDetail: async (req, res) => {
        let params = req.body.id
        let data = await db.Property.findByPk(params, {
            include: [
                {association: 'images'}            ]
        })
        let features = await db.Feature_Property.findAll({
           include: [
               {association: 'feature'}
           ]
        })
        let filter_features = features.filter((e) => e.property_id == params)
        let images = []
        for(let i = 0 ; i < data.images.length ; i ++) {
            images.push(data.images[i])
        }
        let sorted_im = images.sort((a, b) => b.home_portrait - a.home_portrait)
        let test = {
            id: data.id,
            category_id: data.category_id,
            country: data.country,
            description: data.description,
            images: sorted_im,
            keyword: data.keyword,
            map_url: data.map_url,
            name: data.name,
            price: data.price,
            video: data.video,
            zone: data.zone,
            portrait: data.portrait_url
        }
        return res.json({data:test, images:sorted_im, features:filter_features})
        
    }, 
    fetchRelated: (req, res) => {
        console.log('=========================================')
        console.log(req.body)
        if(req.body.cat != 0) {
            db.Property.findAll({
                where: {
                    category_id: req.body.params
                }, 
                include: [
                    {association: 'images'}
                ]
            })
            .then((data) => {
                return res.json(data)
            })
        } else {
            db.Property.findAll({ 
                include: [
                    {association: 'images'}
                ]
            })
            .then((data) => {
                return res.json(data)
            })
        }
    }
}








