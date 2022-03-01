const Joi = require('joi');

module.exports = Joi.object({
  authorization: Joi.required(),
});