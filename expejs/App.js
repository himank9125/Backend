// const express = require("express");
// const app = express();
// const port = 1234;
// app.set("view engine", "ejs");
// app.get("/about", (req, res) => {
//   res.render("index", { name: "Manish" });
// });
// app.listen(port);

const express = require("express");
const app = express();
const port = 1234;
const arr = ["love", "the", "Panga"];
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index", { name: "Manish", arr: arr });
});
app.listen(port);
