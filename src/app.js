const express = require("express");
const connetDB = require("./config/database");

const app = express();

const User = require("./models/user");
app.use(express.json());

app.post("/signup", async (req, res) => {
  console.log(req.body);

  const user = new User(req.body);
  // const userObj = {
  //   firstName:"dev",
  //   lastName: "oza",
  //   password: "23423",
  //   age: "34"
  // }
  // // creating new instance of user model
  // const user = new User(userObj);

  // const user = new User({
  //   firstName: "vaibhavi",
  //   lastName: "oza",
  //   emailId: "def@1232",
  // });

  try {
    await user.save();
    res.send("Data added succesfully");
  } catch (err) {
    res.status(403).res.send("Error to add some data");
  }
});

connetDB()
  .then(() => {
    console.log("databasse connetion establisted");
    app.listen(7777, () => {
      console.log("server is successfully listerning");
    });
  })
  .catch((err) => {
    console.log("database in not connceted");
  });
