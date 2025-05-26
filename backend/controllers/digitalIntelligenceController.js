const { validateSchema } = require('../services/validationService');
const digitalIntelligenceService = require('../services/digitalIntelligenceService');

exports.processInput = async (req, res) => {
  const input = req.body;

  // Validate against schema
  const isValid = validateSchema(input, 'schemas/intelligence/digitalIntelligence.schema.json');
  if (!isValid.valid) {
    return res.status(400).json({ error: 'Invalid input', details: isValid.errors });
  }

  const result = await digitalIntelligenceService.train(input);
  res.json(result);
};