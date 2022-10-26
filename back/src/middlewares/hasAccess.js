function hasAccess(req, res, next){
    if(typeof(req.session.adminSession) == undefined) {
        res.redirect('/')
    }else{
        next()
    }
}
module.exports = hasAccess