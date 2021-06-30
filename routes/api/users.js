const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

// create new user
router.post("/", (req, res) => {
  const newUser = new User({
    firstName: req.body.name
  });
  newUser
    .save()
    .then(user => res.json(user))
    .catch(err => res.status(500).json(err.message));
});

module.exports = router;
