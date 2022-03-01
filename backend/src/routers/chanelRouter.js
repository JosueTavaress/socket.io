const chanel = require('express').Router();
const rescue = require('express-rescue');
const controller = require('../controllers/chanelController');
const auth = require('../middlewares/auth');

chanel.get('/', rescue(auth), rescue(controller.getChanels));

module.exports = chanel;