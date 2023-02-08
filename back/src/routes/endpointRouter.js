const express = require('express');
const router = express.Router();
const endpointController = require('../controllers/endpointController.js');

router.get('/fetch_home', endpointController.fetchHome);
router.post('/fetch_categories', endpointController.fetchCategories);
router.post('/fetch_detail', endpointController.fetchDetail);
router.post('/fetch_related', endpointController.fetchRelated);

module.exports = router;