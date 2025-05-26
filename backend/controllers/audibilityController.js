const { evaluateAudibility } = require("../services/audibilityService");

function checkAudibility(req, res) {
  try {
    const context = req.body;
    const result = evaluateAudibility(context);
    res.status(200).json({ actions: result });
  } catch (error) {
    console.error("Error in audibility check:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = { checkAudibility };