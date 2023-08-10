const express = require("express");

const router = express.Router();

const {
  createPost,
  getPosts,
  getSinglePost,
  updatePost,
  deletePost,
} = require("../controllers/Posts");

router.route("/").post(createPost).get(getPosts);
router.route("/:id").get(getSinglePost).patch(updatePost).delete(deletePost);

module.exports = router;
