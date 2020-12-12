const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const busboy = require('connect-busboy');
const mongoSanitize = require('express-mongo-sanitize');
var xss = require('xss-clean')

require('dotenv').config()

const ipTrackerRouter = require('./routes/ip-tracker.js');

const app = express();
app.use(cors());
app.use(busboy());


app.use(logger('dev'));
app.use(express.json());
// app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: false }));

app.use('/', ipTrackerRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404);
  if (req.accepts('json')) {
    //   res.sendFile(__dirname + '/public/404.html');
    res.status(404).send({ message: 'Page not found' });
    return;
  }
})  

module.exports = app;
