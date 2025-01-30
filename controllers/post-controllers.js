exports.getPostList = (req, res, next) => {
  res.status(200).json({ message: "Send post list" });
};

exports.getPost = (req, res, next) => {
  const { id } = req.params;

  res.json({ postId: id });
};

exports.createPost = (req, res, next) => {
  res.json({ message: "Create post" });
};

exports.updatePost = (req, res, next) => {
  res.json({ message: "Update post" });
};

exports.deletePost = (req, res, next) => {
  res.json({ message: "Delete post" });
};
