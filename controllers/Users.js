const User = require("../models/User");

const signUp = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({
      status: "success",
      user,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error,
    });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    let user = await User.findOne({ username: username });
    if (!user) {
      res.status(500).json({
        status: "fail",
        error: "Login with correct username",
      });
    }
    if (user.password != password) {
      res.status(500).json({
        status: "fail",
        error: "Login with correct password",
      });
    }
    res.status(200).json({
      status: "success",
      user,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error,
    });
  }
};

module.exports = { signUp, login };
