/**
 * ************************************
 *
 * @module Server
 * @author Andy Kahn, Angela Franco, Cameron Simmons, Lorenzo Guevara, Mika Todd
 * @date 7/6/2021
 * @description Server listens on port 3000 and routes all incoming requests, handles global middleware errors and unknown endpoint errors
 *
 * ************************************
 */
// NPM Module Imports
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
// const google = require('googleapis').google;
// const jwt = require('jsonwebtoken');
// const fetch = require('node-fetch');

// Google's OAuth2 client
// const OAuth2 = google.auth.OAuth2;

// Including our Oauth2 config file
// const CONFIG = require('../config');

// // Router Imports
// const db = require('./models/models');
// const apiRouter = require('./routes/apiRouter');


const app = express();
const PORT = 3000;

// Parses incoming requests
app.use(express.json()); // parses request body
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // parse cookie header and populate the property req.cookies
app.use(express.static(path.resolve(__dirname, '../docs')));

// Setting up EJS Views
// app.set('view engine', 'ejs');
// app.set('views', __dirname);

/** ****************** Server Route Handlers *********************** */

app.use(express.static(path.resolve(__dirname, '../public'))); // potentially unecessary


app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../home.html'));
});

/// ///////////////////////////////
// Unknown Endpoint Error Handler
app.use('/', (req, res) => {
  return res.status(404).json('404 Endpoint Not Found');
});

// Global Error Handler
app.get('/', (req, res, next, err) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occured' },
  };
  const errorObj = Object.assign(defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

// Open up server on PORT
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});

module.exports = app;
