const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateAuth = (req, res) => {
  const user = req.body

  const token = jwt.sign(user, process.env.PASS_JWT);

  res.status(201).json({ token });
};

module.exports = { generateAuth };