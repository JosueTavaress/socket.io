const jwt = require('jsonwebtoken');

const decodeJWT = (token) => {
  const decode = jwt.decode(token, {complete: true });
  return decode;
};

module.exports = decodeJWT;