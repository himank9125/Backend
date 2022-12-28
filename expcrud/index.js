const express = require("express");
let data = [];
const app = express();
const port = 8080;
app.use(express.json());
//-------------------GET---------------------------------------
app.get("/test", (req, res) => {
  res.json(data);
});
//-------------------POST----------------------------------------
app.post("/test", (req, res) => {
  const user = {
    id: data.length + 1,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
  };

  data.push(user);
  res.json(user);
});
//------------------------PUT---------------------
app.put("/test/:id", (req, res) => {
  let id = req.params.id;
  let index = data.findIndex((elm) => {
    return Number.parseInt(id) === elm.id;
  });
  if (index >= 0) {
    let item = data[index];
    item.first_name = req.body.first_name;
    item.last_name = req.body.last_name;
    item.email = req.body.email;
    res.json(item);
  }
});

//------------------------DELETE---------------------
app.delete("/test/:id", (req, res) => {
  let id = req.params.id;
  let index = data.findIndex((elm) => {
    return elm.id === Number.parseInt(id);
  });
  data.splice(index, 1);
  res.json(data);
});
app.listen(port);
