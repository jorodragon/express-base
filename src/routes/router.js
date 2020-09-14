const express = require('express');

const routes = require('./index.routers');
const userRouter = require('./users.routers');

const apiRoute = express();

apiRoute.use('/', routes);
apiRoute.use('/users', userRouter);

module.exports = apiRoute;
