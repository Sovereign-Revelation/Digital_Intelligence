const jsonLogic = require("json-logic-js");
const fs = require("fs");
const path = require("path");

function loadRules() {
  const filePath = path.join(__dirname, "../../schemas/audibilityRules.json");
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw).rules;
}

function evaluateAudibility(context) {
  const rules = loadRules();
  const results = [];

  rules.forEach(({ condition, action }) => {
    if (jsonLogic.apply(condition, context)) {
      results.push(action);
    }
  });

  return results.length ? results : ["no_action"];
}

module.exports = { evaluateAudibility };