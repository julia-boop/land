const db = require('../database/models');

module.exports = {
    main: (req,res) => {
        db.Name.findAll()
        .then((result)=>{
            res.send(result)
        })
    }
}