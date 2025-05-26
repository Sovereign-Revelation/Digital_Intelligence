const express = require('express');
const router = express.Router();
const controller = require('../controllers/digitalIntelligenceController');

router.post('/evaluate', controller.evaluate);

module.exports = router;