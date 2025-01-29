const express = require("express");
const router = express.Router();
router.post("/register", (req, res) => {
  res.json({ message: "Register" });
});

router.post("/login", (req, res) => {
  res.json({ message: "Login" });
});
module.exports = router;
