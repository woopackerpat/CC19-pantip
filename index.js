const express = require("express");

const app = express();

app.get("/post/list", (req, res) => {
  res.status(200).json({ message: "Send post list" });
});

app.get("/post/:id", (req, res) => {
  const { id } = req.params;

  res.json({ postId: id });
});

// app.get("/product/price/:price/discount/:discount", (req, res) => {
//   const { price, discount } = req.params;

//   res.json({ price, discount });
// });

app.post("/", (req, res) => {
  res.json({ message: "Create post" });
});

app.put("/", (req, res) => {
  res.json({ message: "Update post" });
});

app.patch("/", (req, res) => {
  res.json({ message: "Update post 2" });
});

app.delete("/", (req, res) => {
  res.json({ message: "Delete post" });
});

app.listen("8000", () => console.log("Server is running on port 8000"));
