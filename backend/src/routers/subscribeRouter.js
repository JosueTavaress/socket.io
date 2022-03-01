const express = require('express');
const controller = require('../controllers/subscribeController');
const subscribe = express.Router();
const rescue = require('express-rescue');
const auth = require('../middlewares/auth');
const decodeJWT = require('../middlewares/decodeJWT');

subscribe.post('/', rescue(auth), decodeJWT, rescue(controller.subscribe));

module.exports = subscribe;