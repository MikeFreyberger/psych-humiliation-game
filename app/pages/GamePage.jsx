'use strict';

var React = require('react');
var Game = require('../components/Game.jsx');

var GamePage = React.createClass({

  render: function () {
    return (
      <div className="cont-frame">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Game />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = GamePage;
