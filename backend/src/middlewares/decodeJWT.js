const jwt = require('jsonwebtoken');

const payloadUser = (req, _res, next) => {

  const { authorization } = req.headers;

  const decode = jwt.decode(authorization, {complete: true });

  req.body.idUser = decode.payload.id;

  next()

}

module.exports = payloadUser;