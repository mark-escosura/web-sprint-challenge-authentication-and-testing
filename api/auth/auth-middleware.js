const User = require("../users/users-model.js");
const checkUsernameExists = async (req, res, next) => {
  const [user] = await User.getBy({ username: req.body.username });
  if (!user) {
    next({ status: 401, message: "Invalid credentials" });
  } else {
    req.user = user;
    next();
  }
};

const checkUsernameFree = async (req, res, next) => {
  try {
    const user = await User.getBy({ username: req.body.username });
    if (user.length === 0) {
      next();
    } else {
      next({ status: 401, message: "Username taken" });
    }
  } catch (err) {
    next(err);
  }
};

const checkPasswordLength = (req, res, next) => {
  if (!req.body.password || req.body.password.length > 3) {
    next();
  } else {
    next({ status: 422, message: "Password is too short!" });
  }
};

module.exports = {
  checkUsernameExists,
  checkUsernameFree,
  checkPasswordLength
};
