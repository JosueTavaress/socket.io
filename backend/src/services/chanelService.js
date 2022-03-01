const model = require('../models/chanelsModel');

const getAllChenels = async () => {
 const chanels = await model.getAllChanels();
 return chanels;
}

module.exports = { getAllChenels };