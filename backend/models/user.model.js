const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  workType: {
    type: String,
    required: true,
    enum: ["remote", "on-site", "any"],
  },
  hoursPerWeek: {
    type: String,
    required: true,
    enum: ["more-than-30", "less-than-30", "as-needed"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
