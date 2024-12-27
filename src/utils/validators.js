const validator = require("validator");

const validateSingupData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;
  if (!firstName || !lastName) {
    throw new Error("all fields are required");
  }
  if (!validator.isEmail(emailId)) {
    throw new Error("invalid email");
  }
  // if (!validator.isStrongPassword(password)) {
  //   throw new Error("password is not strong enough");
  // }
};

module.exports = { validateSingupData };
