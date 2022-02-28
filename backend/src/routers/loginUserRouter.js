const express = require('express');
const controller = require('../controllers/loginController');
const { generateAuth } = require('../middlewares/generateAuth')
const login = express.Router();
const rescue = require('express-rescue');

login.post('/', rescue(controller.login), generateAuth);

module.exports = login;