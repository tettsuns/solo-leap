const router = require("express").Router();
let User = require("../models/user.model");

// Register a new user
router.route("/register").post((req, res) => {
  const {
    accType,
    firstName,
    lastName,
    country,
    email,
    password,
    workType,
    hoursPerWeek,
  } = req.body;

  const newUser = new User({
    accType,
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

// Login user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && user.password === password) {
      const token = "user-token";
      const userData = {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        country: user.country,
        workType: user.workType,
        hoursPerWeek: user.hoursPerWeek,
      };

      res.status(200).json({ token, userData });
    } else {
      res.status(401).json({ message: "Invalid credentials!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to login", error: error.message });
  }
});

module.exports = router;
