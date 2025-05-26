const express = require('express');
const router = express.Router();
const controller = require('../controllers/factualAutomationController');

// POST /api/factual-evaluation
router.post('/factual-evaluation', controller.runEvaluation);

module.exports = router;