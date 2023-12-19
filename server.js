const express = require("express");
const mongoose = require("mongoose");
const app = express();

//routes
app.get("/", (req, res) => {
  res.send("Hello node api");
});

app.post("/product", (req, res) => {
  console.log(req.body);
});

mongoose
  .connect(
    "mongodb+srv://churchillrimamskep:11235813@cluster0.kutqosa.mongodb.net/node=API?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(3002, () => {
      console.log("listenting to port 3002");
    });

    console.log("connected to mongoDB");
  })
  .catch((error) => {
    console.log(error);
  });
