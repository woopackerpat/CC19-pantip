const express = require("express");
const authController = require("../controllers/auth-controllers");
const router = express.Router();
router.post("/register", authController.resgister);

router.post("/login", authController.login);
module.exports = router;
