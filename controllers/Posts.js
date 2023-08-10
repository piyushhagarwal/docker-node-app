const Post = require("../models/Post");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({
      status: "success",
      posts,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error,
    });
  }
};

const getSinglePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json({
      status: "success",
      post,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error,
    });
  }
};

const createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(200).json({
      status: "success",
      post,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error,
    });
  }
};

const updatePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findOneAndUpdate({ _id: postId }, req.body, {
      new: true,
      //new: true specifies that the method should return the updated document after the update operation is applied. By default, if new is not set to true, it will return the original document before the update.
      runValidators: true,
      //runValidators: true instructs Mongoose to run the model's validation rules on the update operation. This ensures that the updated document complies with the specified schema and any defined validation rules.
    });
    res.status(200).json({
      status: "success",
      post,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error,
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      post,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error,
    });
  }
};

module.exports = {
  getPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
};
