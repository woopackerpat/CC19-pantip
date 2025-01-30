const createError = require("../utils/createError");

exports.resgister = (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return createError(400, "Email and Password are required");
    }

    res.json({ message: "Register" });
  } catch (err) {
    next(err);
  }
};

exports.login = (req, res, next) => {
  res.json({ message: "Login " });
};
