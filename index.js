const express = require("express");

const app = express();

app.get("/sameer", (req, res) => {
  res.json({ success: "aws testing done by sameer" });
});

app.listen(3000, () => {
  console.log("started on prit 3000");
});
