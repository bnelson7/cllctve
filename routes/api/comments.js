const express = require("express");
const router = express.Router();
const Comment = require("../../models/Comment");
const validateCommentContent = require("../../validation/comments");

router.get("/test", (req, res) => {
  res.json({ msg: "This is the comments route" });
});

// create new comment checking if it passes validations
router.post("/", (req, res) => {
  const { errors, isValid } = validateCommentContent(req.body);

  if (!isValid) return res.status(400).json(errors);

  const newComment = new Comment({
    author: req.body.author,
    project: req.body.project,
    commentContent: req.body.content
  });

  newComment.save().then(comment => res.json(comment));
});

// get all comments for a particular project
router.get("/project/:projectId", (req, res) => {
  Comment.find({ project: req.params.projectId })
    .sort({ date: -1 })
    .then(comments => {
      res.json(comments);
    })
    .catch(err =>
      res
        .status(404)
        .json({ noCommentsFound: "No comments found for that project" })
    );
});

module.exports = router;
