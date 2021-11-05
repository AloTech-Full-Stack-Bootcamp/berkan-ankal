const express = require("express");
const path = require("path");

const app = express();
const PORT = 5010;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/post", (req, res) => {
  res.render("post");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/add", (req, res) => {
  res.render("add_post");
});

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);
