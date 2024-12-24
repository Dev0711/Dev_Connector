const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./Middlewares/auth");

app.use("/admin", adminAuth);

app.get("/admin/getAlldata", (req, res) => {
  res.send("admin data");
});
app.get("/user", userAuth, (req, res) => {
  // we can write userAuth, pass like this aslo
  res.send("this is user auth");
});
app.listen(7777, () => {
  console.log("server is successfully listerning");
});
