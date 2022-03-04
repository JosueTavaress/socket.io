const model = require('../models/messageModel');

const addMessage = async (message) => {
  await model.addMessage(message);
};

const getMessageByForeignKey = async (id) => {
  const msg = await model.getMessageByForeignKey(id);
  return msg;
}

module.exports = { addMessage, getMessageByForeignKey };