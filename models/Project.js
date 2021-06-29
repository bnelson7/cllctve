const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

module.exports = Project = mongoose.model("Project", ProjectSchema);
