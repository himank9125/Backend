const express = require("express");
const app = express();
const port = 8080;
const arr = ["i", "love", "my", "india"];
app.set("view engine", "hbs");
app.get("/", (req, res) => {
  res.render("index", { name: "Himanshu", arr: arr });
});
app.listen(port);
