const service = require('../services/chanelService');

const getChanels = async (_req, res) => {
  const chanels = await service.getAllChenels();
  res.status(200).json({ chanels });
};

module.exports = { getChanels };