const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide title"],
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
  },
});

module.exports = mongoose.model("User", UsersSchema);
