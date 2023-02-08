const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController.js')
const hasAccess = require('../middlewares/hasAccess')

router.get('/', mainController.login);
router.get('/all', hasAccess, mainController.all);
router.post('/login', mainController.enter);
router.get('/create', hasAccess, mainController.create_form);
router.post('/create', hasAccess, mainController.create);
router.get('/edit/:id_property', hasAccess, mainController.edit);
router.put('/edit/:id_property', hasAccess, mainController.update);
router.get('/logout', mainController.logout); 

module.exports = router