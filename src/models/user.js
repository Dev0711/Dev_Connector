const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
      minlength: 2,
    },
    lastName: {
      type: String,
    },
    emailId: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("invalid email" + value);
        }
      },
    },
    password: {
      type: String,
      require: true,
      trim: true,
    },
    age: {
      type: Number,
      min: 18,
    },
    gender: {
      type: String,
      require: true,

      validate(value) {
        if (!["male", "female", "other"].includes(value)) {
          throw new Error("invalid gender");
        }
      },
    },
    photoUrl: {
      type: String,
      default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error("invalid url" + value);
        }
      },
    },
    about: {
      type: String,
      default: "Defult about",
    },
    skills: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("USer", userSchema);
