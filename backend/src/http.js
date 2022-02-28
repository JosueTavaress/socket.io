const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const routerNewUser = require('./routers/signupUserRouter');
const erroJoi = require('./middlewares/middlewareErroJoi');
const domainErro = require('./middlewares/middlewareDomainErro');
const badyParse = require('body-parser');

const PORT = process.env.PORT || '5050';

const app = express();

app.use(badyParse.json());

app.use('/signup', routerNewUser);
app.use(erroJoi);
app.use(domainErro);

const server = http.createServer(app);
const io = new Server(server);

module.exports = { server, PORT, io };