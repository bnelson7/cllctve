const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: "projects",
    required: true
  },
  commentContent: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Comment = mongoose.model("comment", CommentSchema);
