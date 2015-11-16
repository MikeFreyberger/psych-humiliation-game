'use strict';

var React = require('react');
var Survey = require('../components/Survey.jsx');

var HomePage = React.createClass({

  render: function () {
    return (
      <div className="cont-frame">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Survey />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = HomePage;
