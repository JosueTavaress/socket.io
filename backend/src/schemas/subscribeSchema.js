const Joi = require('joi');

module.exports = Joi.object({
 idUser: Joi.required(),
 idChannel: Joi.required(),
});