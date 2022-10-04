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

        db.Category.findAll()
        .then(category =>{
            
            res.render('create', {category:category, countries:countries})
        })
    }, 
    create: async (req, res) => {
        let features = req.body.feature.map((e) => {
            return {
                name: e
            }
        })
        // let feature_value = req.body.feature_value
        let create_feature = await db.Feature.bulkCreate(features)
        res.send(create_feature)
    },
    edit: async (req, res) => {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();

        let countries = data

        db.Category.findAll()
        .then(category =>{
            
            res.render('edit', {category:category, countries:countries})
        })
    }
}