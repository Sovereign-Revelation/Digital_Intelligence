const Ajv = require('ajv');
const fs = require('fs');
const path = require('path');
const ajv = new Ajv({ allErrors: true });

/**
 * Loads and validates input data against a JSON schema.
 */
exports.validateSchema = (data, schemaPath) => {
  try {
    const schema = JSON.parse(fs.readFileSync(path.resolve(schemaPath)));
    const validate = ajv.compile(schema);
    const valid = validate(data);
    return {
      valid,
      errors: validate.errors || []
    };
  } catch (err) {
    return {
      valid: false,
      errors: [`Schema error: ${err.message}`]
    };
  }
};