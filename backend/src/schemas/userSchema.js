const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string().min(3).required(),
  lastName: Joi.string().min(3).required(),
  password: Joi.string().min(4).required(),
  email: Joi.string().min(13).required(),
});