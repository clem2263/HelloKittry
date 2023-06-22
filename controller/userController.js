const express = require('express');
const router = express.Router();
const userRepository = require('../repository/userRepository');
const User = require("../model/User");

router.post('/', async(req, res) => {
  let newUser = new User(null, req.body.username, req.body.password, req.body.email, req.body.phoneNumber, req.body.avatar);
  res.send(await userRepository.create(newUser));
})

router.get('/', async (req, res) => {
  res.send(await userRepository.getAll());
})

module.exports = router;