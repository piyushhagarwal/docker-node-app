const mongoose = require("mongoose");

const PostsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide title"],
  },
  body: {
    type: String,
    required: [true, "Please provide body"],
  },
});

module.exports = mongoose.model("Post", PostsSchema);
