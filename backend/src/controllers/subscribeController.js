const service = require('../services/subscribeService');
const schemaSub = require('../schemas/subscribeSchema');
const validateSub = require('../error/joiError');
const decodeJWT = require('../utils/decodeJWT');

const subscribe = async (req, res) => {
  const newSub = req.body;

  validateSub(schemaSub, newSub);

  const sub = await service.subscribe(newSub);
  
  res.status(201).json({ id: sub });
};

const getSubs = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;

  const user = decodeJWT(authorization);

  const subs = await service.getUserSubscribe({ idUser: user.payload.id, idChannel: id });

  res.status(200).json({ subscribe: subs });
}

const unsubscribe = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;

  const user = decodeJWT(authorization);

  await service.unsubscribe(user.payload.id, id);

  res.status(200).end();

}

module.exports = { subscribe, getSubs, unsubscribe };