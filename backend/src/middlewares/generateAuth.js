const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateAuth = (req, res) => {

  const newUser = req.body

  const token = jwt.sign(newUser, process.env.PASS_JWT);

  res.status(201).json({ token });
};

module.exports = { generateAuth };