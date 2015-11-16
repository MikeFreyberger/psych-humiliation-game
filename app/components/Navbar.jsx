'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var navbarInstance = React.createClass({

  render: function() {
    return (
      <div className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Click me if you can</Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-left">
              <li>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = navbarInstance;
