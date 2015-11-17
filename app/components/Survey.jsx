'use strict';

var React = require('react');
var serialize = require('form-serialize');
var Router = require('react-router');
var Link = Router.Link;
var ObjectActionCreators = require('../actions/ObjectActionCreators');
var ObjectStore = require('../stores/ObjectStore');


var Survey = React.createClass({

  handleOnSubmit: function() {
    var form = document.getElementById('main-survey');
    var obj = serialize(form, { hash: true });
    ObjectActionCreators.inputSurvey(ObjectStore.getUserId(), obj);
    form.style.display = 'none';
    document.getElementById('goodbye').style.display = 'block';
    event.preventDefault();
  },

  render: function() {
    return (
      <div className="col-md-12">
        <h1>Survey</h1>
        <form id="main-survey" onSubmit={this.handleOnSubmit}>
          <h4>What type of device were you using?</h4>
          <div className='radio'>
            <input type="radio" name="device" value="trackpad">Laptop trackpad</input>
          </div>
          <div className='radio'>
            <input type="radio" name="device" value="mouse">Computer Mouse</input>
          </div>
          <div className='radio'>
            <input type="radio" name="device" value="other">Other</input>
          </div>
          <br />
          <h4>Gender?</h4>
          <div className='radio'>
            <input type="radio" name="gender" value="male">Male</input>
          </div>
          <div className='radio'>
            <input type="radio" name="gender" value="female">Female</input>
          </div>
          <div className='radio'>
            <input type="radio" name="gender" value="other">Prefer not to answer</input>
          </div>
          <br />
          <h4>If you were in the bottom 50% of Princeton students, what was your reaction?</h4>
          <div className='radio'>
            <input type="radio" name="reaction" value="try-harder">Try Harder</input>
          </div>
          <div className='radio'>
            <input type="radio" name="reaction" value="give-up">Give Up</input>
          </div>
          <div className='radio'>
            <input type="radio" name="reaction" value="none">No Reaction</input>
          </div>
          <div className='radio'>
            <input type="radio" name="reaction" value="n/a">I was not in the bottom 50%</input>
          </div>
          <br />
          <input type="submit" value="Submit"></input>
          </form>
        <h2 id="goodbye">Thank you. Have a nice day!</h2>
      </div>
    );
  }
});

module.exports = Survey;
