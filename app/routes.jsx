'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var App = require('./components/App.jsx');
var GamePage = require('./pages/GamePage.jsx');
var HomePage = require('./pages/HomePage.jsx');
var Survey = require('./pages/Survey.jsx');



module.exports = (
  <Route name='root' path='/' handler={App}>
    <DefaultRoute handler={HomePage} />
    <Route name='home' path='/' handler={HomePage} />
    <Route name='game1' path='/game1' handler={GamePage} />
    <Route name='game2' path='/game2' handler={GamePage} />
    <Route name='game3' path='/game3' handler={GamePage} />
    <Route name='survey' path='/survey' handler={Survey} />

  </Route>
);
