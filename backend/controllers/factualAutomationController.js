const service = require('../services/factualAutomationService');
const { validateSchema } = require('../services/validationService');

exports.runEvaluation = async (req, res) => {
  try {
    const input = req.body;

    // Validate input schema before processing
    const validation = validateSchema(input, 'schemas/automation/factualMaturity.schema.json');
    if (!validation.valid) {
      return res.status(400).json({ error: 'Invalid input structure', details: validation.errors });
    }

    const result = await service.evaluate(input);
    return res.status(200).json({ success: true, result });
  } catch (err) {
    console.error('Evaluation Error:', err);
    return res.status(500).json({ error: 'Internal server error', details: err.message });
  }
};