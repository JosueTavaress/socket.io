const model = require('../models/subscribeModel');
const channelModel = require('../models/chanelsModel');
const userModel = require('../models/userModel');

const getUserSubscribe = async ({idUser, idChannel}) => {
   const sub = await model.getSubUser({idUser, idChannel});
   return sub;
};

const subscribe = async ({idUser, idChannel}) => {
  const userExist = await userModel.getUserById(idUser);
  const channelExist = await channelModel.getChennelId(idChannel);
  const subExist = await getUserSubscribe({idUser, idChannel});

  if (!userExist.length) {
    const erro = { status: 404, message: 'user not found' };
    throw erro
  };

  if (!channelExist.length) {
    const erro = { status: 404, message: 'Channel not found' };
    throw erro;
  };

  if (subExist.length) {
    const erro = { status: 409, message: 'user is already registered' };
    throw erro;
  }

  const sub = await model.subscribe({ idUser, idChannel });

  return sub;
};

module.exports = { subscribe, getUserSubscribe };