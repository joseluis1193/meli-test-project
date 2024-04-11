const express = require("express");

const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("Check");
});

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
