const express = require("express");

const app = express();

app.get("/user/:userId/:name/:passwrod", (req, res) => {
  console.log(req.params);
  res.send({ firstname: "dev", lastname: "oza" });
});
// only handles get call /user
// app.get("/user", (req, res) => {
//   res.send({ firstname: "dev", lastname: "oza" });
// });

app.post("/user", (req, res) => {
  res.send("Data saved succesfully");
});

app.delete("/user", (req, res) => {
  res.send("data deleted!");
});

app.patch("/user", (req, res) => {
  res.send("data updated");
});
// this will match all the http methods calls on /test if you use it in /user and write it above all then you can check
//all the /user information will be shadowed by app.use("/user") it always prints this code rather then post, get, delete
app.use("/test", (req, res) => {
  res.send("Hello second path");
});

app.listen(7777, () => {
  console.log("server is successfully listerning");
});
