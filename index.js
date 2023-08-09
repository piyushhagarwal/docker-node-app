const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongodb://root:example@mongo:27017/?authSource=admin")
  .then(() => console.log("Succesfully connected"))
  .catch((e) => console.log(e));

// Serve static files from the "public" folder
app.use(express.static("public"));

// Define a basic route
app.get("/", (req, res) => {
  res.send("Hello, Express ");
});

const port = process.env.PORT || 3000; // Use environment variable or default to port 3000
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
