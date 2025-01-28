const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Send post list" });
});

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
