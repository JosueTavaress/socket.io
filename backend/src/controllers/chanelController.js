const service = require('../services/chanelService');
const serviceSubscribe = require('../services/subscribeService')
const messageService = require('../services/messageService');
const decodeJWT = require('../utils/decodeJWT')

const getChanels = async (_req, res) => {
  const chanels = await service.getAllChenels();
  res.status(200).json({ chanels });
};

const verifySubscribe = async (req, res, next) => {

  const { authorization } = req.headers;
  
  const { id } = req.params;

  const user = decodeJWT(authorization);

  const idUser = user.payload.id;

  const verifySubscribe = await serviceSubscribe.getUserSubscribe({ idUser, idChannel: id });

  if (!verifySubscribe.length) return res.status(404).json({ message: 'user not subscribe' });

  next()
}

const getMessagesChannel = async (req, res) => {
  const { id } = req.params;

  const allMessages = await messageService.getMessageByForeignKey(id);

  res.status(200).json({ messages: allMessages });
};

module.exports = { getChanels, getMessagesChannel, verifySubscribe };