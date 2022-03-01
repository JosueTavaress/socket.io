const service = require('../services/subscribeService');
const schemaSub = require('../schemas/subscribeSchema');
const validateSub = require('../error/joiError');

const subscribe = async (req, res) => {
  const newSub = req.body;

  validateSub(schemaSub, newSub);

  const sub = await service.subscribe(newSub);
  
  res.status(201).json({ id: sub });
};

module.exports = { subscribe };