const { codes } = require('../statusCode/codesHttp');

const erroJoi = (err, _req, res, next) => {
  if (err.isJoi) {
    const key = err.details[0].type;

    return res.status(codes[key]).json({ error: err.message })
  }
  next(err)
}

module.exports = erroJoi;