const express = require('express');
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

app.listen(PORT, console.log(`online port ${PORT}`));