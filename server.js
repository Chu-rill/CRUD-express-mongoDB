const express = require("express");
const app = express();

//routes
app.get("/", (req, res) => {
  res.send("Hello node api");
});

app.listen(3002, () => {
  console.log("listenting to port 3002");
});
