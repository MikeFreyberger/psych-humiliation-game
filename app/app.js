'use strict';

// enables JSX requires
require('node-jsx').install({ extension: '.jsx' });

var debug        = require('debug')('app');
var express      = require('express');
var path         = require('path');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var cachebuster  = require('../cachebuster');
var serverRender = require('./server');
var compression  = require('compression');
var favicon      = require('serve-favicon');
var app = express();
var db = {};

app.use(logger(app.get('env') === 'production' ? 'combined' : 'dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());

// static files with cache buster
var publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));
if (app.get('env') === 'production') {
  app.get(cachebuster.path, cachebuster.remove, express.static(publicPath), cachebuster.restore);
}

if (app.get('env') === 'development') {
  // run livereload and webpack dev server
  require('../dev-tools');
  // use webpack dev server for serving js files
  app.use('/js', function (req, res) {
    res.redirect('http://localhost:3001/js' + req.path);
  });
}

function writeDB(data) {

  console.log("New game data: " + data);
  if (!db[data.id])
    db[data.id] = {};
  db[data.id][data.game] = data.time;
  if (data.game === 'game2')
    db[data.id].humiliated = data.humiliated;
  console.log('CURRENT DATABASE')
  console.log(db);
}

function writeSurvey(data) {
  console.log("New survey data: " + data);
  if (!db[data.id])
    db[data.id] = {}
  db[data.id].survey = data.survey;
  console.log('CURRENT DATABASE')
  console.log(db);
}

app.post('/api/time', function(req, res, next) {
  writeDB(req.body);
});

app.post('/api/survey', function(req, res, next) {
  writeSurvey(req.body);
});

// use react routes
app.use('/', serverRender);

// error pages
app.use(function (err, req, res, next) {
  res.status(500);
  res.send('<pre>' + err.stack + '</pre>');
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
  debug('Express ' + app.get('env') + ' server listening on port ' + this.address().port);
});
