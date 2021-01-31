const express = require('express');
const app = express();

const errorMiddleware = require('./middlewares/errors');

app.use(express.json());

// Import all routes
const products = require('./routers/product');

app.use('/api/v1', products);

//Middleware For Handle Errors
app.use(errorMiddleware);

module.exports = app;