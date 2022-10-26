const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController.js')

router.get('/', mainController.login);
router.get('/all', mainController.all);
router.post('/login', mainController.enter);
router.get('/create', mainController.create_form);
router.post('/create', mainController.create);
router.get('/edit/:id_property', mainController.edit);
router.put('/edit/:id_property', mainController.update);
router.get('/logout', mainController.logout); 

module.exports = router