const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const routerNewUser = require('./routers/signupUserRouter');
const routerLoginUser = require('./routers/loginUserRouter');
const routerChanels = require('./routers/chanelRouter');
const erroJoi = require('./middlewares/middlewareErroJoi');
const domainErro = require('./middlewares/middlewareDomainErro');
const badyParse = require('body-parser');

const PORT = process.env.PORT || '5050';

const app = express();

app.use(badyParse.json());
app.use(cors());

app.use('/signup', routerNewUser);
app.use('/login', routerLoginUser);
app.use('/chanels', routerChanels);
app.use(erroJoi);
app.use(domainErro);

const server = http.createServer(app);
const io = new Server(server);

module.exports = { server, PORT, io };