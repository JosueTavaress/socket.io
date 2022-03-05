const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const routerNewUser = require('./routers/signupUserRouter');
const routerLoginUser = require('./routers/loginUserRouter');
const routerChanels = require('./routers/chanelRouter');
const routerSubscribe = require('./routers/subscribeRouter');
const erroJoi = require('./middlewares/middlewareErroJoi');
const domainErro = require('./middlewares/middlewareDomainErro');
const badyParse = require('body-parser');

const PORT = process.env.PORT || '5050';

const app = express();

app.use(badyParse.json());
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5000",
    methods: ["GET", "POST"]
  }
});

app.use('/signup', routerNewUser);
app.use('/login', routerLoginUser);
app.use('/chanels', routerChanels);
app.use('/subscribe', routerSubscribe);
app.use(erroJoi);
app.use(domainErro);

module.exports = { server, PORT, io };