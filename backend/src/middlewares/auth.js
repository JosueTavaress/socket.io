const jwt = require('jsonwebtoken');
const schemaAuth = require('../schemas/authorization');
const validateHeaders = require('../error/joiError');
require('dotenv').config();

const auth = (req, _res, next) => {
 const { authorization } = req.headers;

 validateHeaders(schemaAuth, {authorization});

 try {

 jwt.verify(authorization, process.env.PASS_JWT);
 next();

 } catch (err) {
 const erro = { status: 401, message: 'token invalid' };
 throw erro;
 }

}

module.exports = auth;