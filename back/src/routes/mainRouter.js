const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController.js')

router.get('/', mainController.main);
router.get('/create', mainController.create_form);
router.post('/create', mainController.create);
router.get('/edit', mainController.edit);

module.exports = router