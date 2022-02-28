const express = require('express');
const controller = require('../controllers/userController');
const { generateAuth } = require('../middlewares/generateAuth');
const user = express.Router();
const rescue = require('express-rescue');

user.post('/', rescue(controller.addUser), generateAuth);

module.exports = user;