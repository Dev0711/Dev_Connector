const express = require("express");

const app = express();
app.use("/", (req, res) => {
  res.send("Hello from server");
});

app.use("/hello", (req, res) => {
  res.send("Hello new path ");
});

app.use("/test", (req, res) => {
  res.send("Hello second path");
});

app.listen(7777, () => {
  console.log("server is successfully listerning");
});
