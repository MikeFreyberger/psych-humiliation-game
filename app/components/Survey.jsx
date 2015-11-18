'use strict';

var React = require('react');
var serialize = require('form-serialize');
var Router = require('react-router');
var Link = Router.Link;
var ObjectActionCreators = require('../actions/ObjectActionCreators');
var ObjectStore = require('../stores/ObjectStore');


var Survey = React.createClass({

  getInitialState: function() {
    return {
      age: 0
    }
  },

  handleOnSubmit: function(event) {
    var form = document.getElementById('main-survey');
    var obj = serialize(form, { hash: true });
    ObjectActionCreators.inputSurvey(ObjectStore.getUserId(), obj);
    form.style.display = 'none';
    document.getElementById('goodbye').style.display = 'block';
    event.preventDefault();
  },

  handleChange: function(event) {
    this.setState(
      {
        age: event.target.value
      }
    );
  },

  render: function() {
    return (
      <div className="col-md-12">
        <form id="main-survey" onSubmit={this.handleOnSubmit}>
          <h1>Survey</h1>
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
          <h4>Age?</h4>
          <div className='radio'>
            <input type="number" name="age" value={this.state.age} onChange={this.handleChange}></input>
          </div>
          <br />
          <h4>How motivated were you to improve your score on Game 3 after seeing your results of Game 2?</h4>
          <div className='radio'>
            <input type="radio" name="reaction" value="very-motivated">Very Motivated</input>
          </div>
          <div className='radio'>
            <input type="radio" name="reaction" value="motivated">Motivated</input>
          </div>
          <div className='radio'>
            <input type="radio" name="reaction" value="indifferent">Indifferent</input>
          </div>
          <div className='radio'>
            <input type="radio" name="reaction" value="not-motivated">Not Motivated</input>
          </div>
          <div className='radio'>
            <input type="radio" name="reaction" value="gave-up">Gave Up</input>
          </div>
          <br />
          <h4>Was this your first time playing this game?</h4>
          <div className='radio'>
            <input type="radio" name="first-time-game" value="yes">Yes</input>
          </div>
          <div className='radio'>
            <input type="radio" name="first-time-game" value="no">No</input>
          </div>
          <br />
          <input type="submit" value="Submit"></input>
          </form>
        <div id="goodbye">
          <p>The purpose of this experiment was to test the effect of humiliation on motivation and task performance. There were two conditions, in one participants were told after the second game that they had score worse than 50% of Princeton Students.  In the other, they were told that they had done better than 50% of Princeton Students. In reality, the conditions were completely random. Thank you. Have a nice day!</p>
        </div>
      </div>
    );
  }
});

module.exports = Survey;
