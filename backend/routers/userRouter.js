const express = require('express');
const controller = require('../controllers/userController')
const user = express.Router();

user.post('/', controller.addUser);

module.exports = user;