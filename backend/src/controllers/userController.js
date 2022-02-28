const service = require('../services/userService');
const validateReq = require('../error/joiError');
const schemaUser = require('../schemas/userSchema');

const addUser = async (req, _res, next) => {
  const dataUser = req.body;

  validateReq(schemaUser, dataUser);

  const newUser = await service.addUser(dataUser);

  req.body = newUser

  next();
}

module.exports = { addUser };