const express = require("express");
const router = express.Router();
const Comment = require("../../models/Comment");

router.get("/test", (req, res) => {
  res.json({ msg: "This is the comments route" });
});

router.post("/", (req, res) => {
  const newComment = new Comment({
    author: req.body.authorId,
    project: req.body.projectId,
    commentContent: req.body.content
  });

  newComment.save().then(comment => res.json(comment));
});

router.get("/project/:project_id", (req, res) => {
  Comment.find({ project: req.params.projectId }).then(comments => {
    res.json(comments);
  });
});

module.exports = router;
