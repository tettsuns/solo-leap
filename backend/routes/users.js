const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
  const {
    firstName,
    lastName,
    country,
    email,
    password,
    workType,
    hoursPerWeek,
  } = req.body;

  const newUser = new User({
    firstName,
    lastName,
    country,
    email,
    password,
    workType,
    hoursPerWeek,
  });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
