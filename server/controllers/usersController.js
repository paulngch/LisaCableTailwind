const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

router.get("/seed", async (req, res) => {
  const users = [
    {
      email: "admin@test.com",
      password: bcrypt.hashSync("password123123", 10),
      admin: true,
    },
  ];
  try {
    await User.deleteMany({}); //* delete all users
    const newUsers = await User.create(users);
    res.json(newUsers);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
