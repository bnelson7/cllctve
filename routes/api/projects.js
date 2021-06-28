const express = require("express");
const router = express.Router();
const Project = require("../../models/Project");

router.get("/test", (req, res) => {
  res.json({ msg: "This is the projects route" })
});

router.post("/", (req, res) => {
  const newProject = new Project({
    owner: req.body.ownerId,
    name: req.body.name
  });

  newProject.save().then(project => res.json(project))
});

router.get("/", (req, res) => {
  Project.find().then(projects => res.json(projects));
});

module.exports = router;
