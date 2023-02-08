const db = require('../../../back/src/database/models');

async function createLocals(req, res, next) {
    if(req.session.userSession != undefined) {
        let user = await db.User.findByPk(req.session.userSession)
        if(user) {
            res.locals.userLogged = user.id
        }
    }
    console.log(req.session.userSession)
    console.log(res.locals.userLogged)
    next()
}

module.exports = createLocals;