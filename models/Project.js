const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String,
    required: true
  }
//   comments: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "comments"
//     }
//   ],
//   date: {
//     type: Date,
//     default: Date.now
//   }
});

module.exports = Project = mongoose.model("Project", ProjectSchema);
