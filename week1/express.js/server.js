const express = require("express");

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("<h1>Anasayfa</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>Hakkımızda</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>İletişim</h1>");
});

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);