const express = require('express');
const router = express.Router();
const endpointController = require('../controllers/endpointController.js');

router.get('/fetch_home', endpointController.fetchHome);

module.exports = router;