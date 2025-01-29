require("dotenv").config();
const express = require("express");

const postRoute = require("./routes/post-routes");
const userRoute = require("./routes/user-routes");
const authRoute = require("./routes/auth-routes");
const app = express();

app.use(express.json());

app.use("/post", postRoute);
app.use("/user", userRoute);
app.use("/auth", authRoute);

app.listen("8000", () => console.log("Server is running on port 8000"));
