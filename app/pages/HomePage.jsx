'use strict';

var React = require('react');
var Router = require('react-router');

var HomePage = React.createClass({

  mixins: [ Router.State, Router.Navigation ],

  handleButtonClick: function() {
    this.transitionTo('game1');
  },

  render: function () {
    return (
      <div className="cont-frame">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>The Best Psych Game Ever!</h3>
              <div className="next-page-link col-md-4 center-block">
                <button onClick={this.handleButtonClick}className="next-game-button">Play Game</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = HomePage;
/**
 * Created by michael.freyberger on 11/16/15.
 */
