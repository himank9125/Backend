const exp = require("express");
const port = 5000;
const express = exp();
express.listen(port, (err) => {
  if (!err) {
    console.log("Succes");
  } else {
    console.log(err);
  }
});
