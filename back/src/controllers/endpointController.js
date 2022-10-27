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
    }
}