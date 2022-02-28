const model = require('../services/userService');
const loginSchema = require('../schemas/loginSchema');
const validateReq = require('../error/joiError');

const login = async (req, _res, next) => {
  const dateUser = req.body;

  validateReq(loginSchema, dateUser);

  const user = await model.login(dateUser);

  req.body = user;

  next();
};

module.exports = { login };