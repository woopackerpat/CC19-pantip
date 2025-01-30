const express = require("express");
const authenticate = require("../middlewares/authenticate");
const postControllers = require("../controllers/post-controllers");
const router = express.Router();

router.get("/list", postControllers.getPostList);

router.get("/:id", postControllers.getPost);

router.post("/", postControllers.createPost);

router.put("/", authenticate, postControllers.updatePost);

router.delete("/", authenticate, postControllers.deletePost);

module.exports = router;
