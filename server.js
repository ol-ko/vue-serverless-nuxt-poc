const express = require('express');
const {Nuxt} = require('nuxt');
const path = require('path');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

// Create App
const app = express();

// Set API Gateway Middleware
app.use(awsServerlessExpressMiddleware.eventContext());

// Provide Assets
app.use('/dev/', express.static(path.join(__dirname, '.nuxt', 'dist')));

// Add Nuxt
let config = require('./nuxt.config.js');
const nuxt = new Nuxt(config);
app.use(nuxt.render);

module.exports = app;
