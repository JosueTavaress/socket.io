const express = require('express');
const PORT = process.env.PORT || '5050';
const routerUser = require('./routers/userRouter');

const app = express();

app.use('/user', routerUser);

app.listen(PORT, console.log(`online port ${PORT}`));
