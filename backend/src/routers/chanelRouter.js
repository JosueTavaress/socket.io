const chanel = require('express').Router();
const rescue = require('express-rescue');
const controller = require('../controllers/chanelController');
const auth = require('../middlewares/auth');

chanel.get(
  '/',
  rescue(auth),
  rescue(controller.getChanels)
  );

chanel.get(
 '/messages/:id',
 rescue(auth),
 controller.verifySubscribe,
 controller.getMessagesChannel,
 );

module.exports = chanel;