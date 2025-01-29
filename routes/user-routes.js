const express = require("express");
const authenticate = require("../middlewares/authenticate")
const cloudinary = require("../configs/cloudinary")
const fs = require("fs")
const upload = require("../middlewares/upload")
const router = express.Router();

router.get("/", authenticate, (req, res) => {
  res.json({ message: "Get my user profile" });
});

router.put(
  "/",
  authenticate,
  upload.single("profile"),
  async (req, res) => {
    try {
      const image = await cloudinary.uploader.upload(req.file.path);
      console.log(image);

      res.json({ message: "My profile updated" });
    } catch (err) {
      console.log(err);
    } finally {
      if (req.file) {
        fs.unlinkSync(req.file.path);
      }
    }
  }
);

module.exports = router;
