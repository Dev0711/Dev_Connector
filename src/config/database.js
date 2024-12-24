const mongoose = require("mongoose");

const connetDB = async () => {
  await mongoose.connect("mongodb+srv://Dev:p6dXlZU9g0rSDfwK@cluster0.pkez1.mongodb.net/devConnector");
};

module.exports = connetDB;
