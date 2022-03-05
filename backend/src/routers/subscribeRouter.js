const express = require('express');
const controller = require('../controllers/subscribeController');
const subscribe = express.Router();
const rescue = require('express-rescue');
const auth = require('../middlewares/auth');
const decodeJWT = require('../middlewares/decodeJWT');

subscribe.post('/', rescue(auth), decodeJWT, rescue(controller.subscribe));
subscribe.get('/:id', rescue(auth), controller.getSubs);
subscribe.delete('/:id', rescue(auth), controller.unsubscribe);
module.exports = subscribe;