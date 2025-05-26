const express = require("express");
const router = express.Router();
const { checkAudibility } = require("../controllers/audibilityController");

router.post("/audibility", checkAudibility);

module.exports = router;