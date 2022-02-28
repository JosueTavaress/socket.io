const Joi = require('joi');

module.exports = Joi.object({
  email: Joi.string().min(13).required(),
  password: Joi.string().min(4).required(),
});