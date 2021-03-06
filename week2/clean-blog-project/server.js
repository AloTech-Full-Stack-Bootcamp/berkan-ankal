const express = require("express");
const mongoose = require("mongoose");
const Post = require("./models/Post");

const app = express();
const PORT = 5010;

// Connect DB
mongoose.connect("mongodb://localhost/cleanblog-test-db");

// Template Engine
app.set("view engine", "ejs");

// Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  const posts = await Post.find({});
  res.render("index", { posts });
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

app.post("/posts", async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
});

app.get("/posts/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);

  res.render("post", { post });
});

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);
