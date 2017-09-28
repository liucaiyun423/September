const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
//const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(cookieSession({
  maxAge: 30*24*60*60*1000,
  keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongoURI);
require('./config/passport');
require('./routes/index')(app, passport);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
