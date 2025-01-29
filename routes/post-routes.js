const express = require("express");
const authenticate = require("../middlewares/authenticate");
const router = express.Router();

router.get("/list", (req, res) => {
  res.status(200).json({ message: "Send post list" });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  res.json({ postId: id });
});

router.post("/", authenticate, (req, res) => {
  // console.log(req.user);
  res.json({ message: "Create post" });
});

router.put("/", authenticate, (req, res) => {
  res.json({ message: "Update post" });
});

router.delete("/", authenticate, (req, res) => {
  res.json({ message: "Delete post" });
});

module.exports = router;
