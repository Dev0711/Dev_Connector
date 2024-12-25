const express = require("express");
const connetDB = require("./config/database");

const app = express();

const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  const users = new User(req.body);
  try {
    await users.save();
    res.send("Data added succesfully");
  } catch (err) {
    console.log(err);
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

app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId;

  try {
    const ALLOWED_UPDATE_FIELDS = ["userId", "photoUrl", "about", "gender", "age", "skills"];
    const isApdateAllowed = Object.keys(req.body).every((update) => ALLOWED_UPDATE_FIELDS.includes(update));

    if (!isApdateAllowed) {
      throw new Error("not allowed to update");
    }
    if (data?.skills.length > 5) {
      throw new Error("not allowed to update");
    }
    const users = await User.findByIdAndUpdate(userId, req.body);
    if (!users) {
      res.status(404).send("user not found");
    } else {
      console.log(users);
      res.send("user updated");
    }
  } catch (err) {
    res.status(500).send("internal server error");
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
