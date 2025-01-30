const express = require("express");
const createError = require("../utils/createError");
const router = express.Router();
router.post("/register", (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return createError(400, "Email and Password are required");
    }

    res.json({ message: "Register" });
  } catch (err) {
    next(err);
  }
});

router.post("/login", (req, res) => {
  res.json({ message: "Login" });
});
module.exports = router;
