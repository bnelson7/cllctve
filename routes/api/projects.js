const express = require("express");
const router = express.Router();
const Project = require("../../models/Project");

router.get("/test", (req, res) => {
  res.json({ msg: "This is the projects route" });
});

// create new project
router.post("/", (req, res) => {
  const newProject = new Project({
    owner: req.body.owner,
    name: req.body.name
  });

  newProject
    .save()
    .then(project => res.json(project))
    .catch(err => res.status(500).json(err.message));
});

// get all projects
router.get("/", (req, res) => {
  Project.find()
    .then(projects => res.json(projects))
    .catch(err =>
      res.status(404).json({ noProjectsFound: "No Projects Found" })
    );
});

module.exports = router;
