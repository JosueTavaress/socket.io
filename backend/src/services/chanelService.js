const model = require('../models/chanelsModel');

const getAllChenels = async () => {
 const chanels = await model.getAllChanels();
 return chanels;
}

const getChanelById = async (id) => {
 const channel = await model.getChennelId(id);
 return channel;
};

module.exports = { getAllChenels, getChanelById };