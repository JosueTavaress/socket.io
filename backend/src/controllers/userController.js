const service = require('../services/userService');
const validateReq = require('../error/joiError');
const schemaUser = require('../schemas/userSchema');

const addUser = async (req, res) => {
  const dataUser = req.body;

  validateReq(schemaUser, dataUser);

  const newUser = await service.addUser(dataUser);

  res.status(201).json({ message: newUser });
}

module.exports = { addUser };