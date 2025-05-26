const express = require("express");
const app = express();
const audibilityRoutes = require("./routes/audibilityRoutes");

app.use(express.json());
app.use("/api", audibilityRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🔊 Audibility system live on port ${PORT}`);
});

module.exports = app;