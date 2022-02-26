const service = require('../services/userService');

const addUser = (req, res) => {
  res.status(201).json({ message: 'rota add user' });
}

module.exports = { addUser };