const express = require('express');
const controller = require('../controllers/userController')
const user = express.Router();
const rescue = require('express-rescue');

user.post('/', rescue(controller.addUser));

module.exports = user;