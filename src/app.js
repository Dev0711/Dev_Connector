const express = require("express");
const connetDB = require("./config/database");

const app = express();

const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  const users = new User(req.body);
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
    await users.save();
    res.send("Data added succesfully");
  } catch (err) {
    res.status(403).send("Error to add some data");
  }
});
app.get("/user", async (req, res) => {
  const userEmail = req.body.firstName;
  try {
    const users = await User.find({ firstName: userEmail });
    if (users.length === 0) {
      res.status(404).send("user not found");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(404).send("user not found");
  }
});

app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const users = await User.findByIdAndDelete(userId);

    res.send("user deleted");
  } catch (err) {
    res.status(404).send("user not found");
  }
});

app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const users = await User.findByIdAndUpdate(userId, req.body);
    res.send("user updated");
  } catch (err) {
    res.status(404).send("user not found");
  }
});

// app.get("/feed", async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.send(users);
//   } catch (err) {
//     res.status(403).send("Error to add some data");
//   }
// });

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
