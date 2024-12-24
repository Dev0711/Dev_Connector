const adminAuth = (req, res, next) => {
  const token = "xyz";
  const isAdminauthorized = token === "xyz";
  if (!isAdminauthorized) {
    res.status(401).res.send("This is anAuthorized");
  } else {
    next();
  }
};
const userAuth = (req, res, next) => {
  const token = "xyz";
  const isAdminauthorized = token === "xyz";
  if (!isAdminauthorized) {
    res.status(401).res.send("This is anAuthorized");
  } else {
    next();
  }
};
module.exports = {
  adminAuth,
  userAuth,
};
