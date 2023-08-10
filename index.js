const express = require("express");
const mongoose = require("mongoose");
const {
  MONGO_PASSWORD,
  MONGO_USER,
  MONGO_IP,
  MONGO_PORT,
} = require("./config/config");

const app = express();

const PostsRouter = require("./routes/posts");
const UsersRouter = require("./routes/users");

app.use(express.json());

// Define a basic route
app.get("/", (req, res) => {
  res.send("Hello, Express ");
});

// routes

app.use("/api/v1/posts", PostsRouter);
app.use("/api/v1/users", UsersRouter);

mongoose
  .connect(
    `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`
  )
  .then(() => console.log("Succesfully connected to db"))
  .catch((e) => console.log(e));

const port = process.env.PORT || 3000; // Use environment variable or default to port 3000
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
