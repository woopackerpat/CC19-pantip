const express = require("express");
const authenticate = require("../middlewares/authenticate");
const cloudinary = require("../configs/cloudinary");
const fs = require("fs");
const upload = require("../middlewares/upload");
const userController = require("../controllers/user-controllers");

const router = express.Router();

router.get("/", authenticate, userController.getProfile);

router.put(
  "/",
  authenticate,
  upload.single("profile"),
  userController.updateProfile
);

module.exports = router;
