'use strict';

var React = require('react');
var Router = require('react-router');
var GameConstants = require('../constants/GameConstants');
var ObjectActionCreators = require('../actions/ObjectActionCreators');
var ObjectStore = require('../stores/ObjectStore');

var Link = Router.Link;

var Game = React.createClass({
  mixins: [ Router.State, Router.Navigation ],
  getInitialState: function() {
    var path = this.getPath();
    console.log(path);
    var gameInfo = path == "/game1" ? GameConstants.game1 : (path == "/game2" ? GameConstants.game2 : GameConstants.game3);
    var hitCount = 0;
    var startTime = 0;
    var endTime = 0;
    var gameOn = 0;
    var userId = (new Date()).getTime();
    var elapsedTime;
    var interval;
    return {
      hitCount: hitCount,
      startTime: startTime,
      gameOn: gameOn,
      endTime: endTime,
      gameInfo: gameInfo,
      elapsedTime: elapsedTime,
      interval: interval,
      userId: userId
    };
  },

  movePicture: function() {
    document.getElementById("duck").style.left = 900 * Math.random() + "px";
    document.getElementById("duck").style.top = 600 * Math.random() + "px";
  },

  handleNewGame: function() {
    clearInterval(this.state.interval);
    var hitCount = 0;
    var gameOn = 1;
    this.state.interval = setInterval(this.movePicture, this.state.gameInfo.interval);
    var startTime = (new Date()).getTime();
    this.setState(
      {
        hitCount: hitCount,
        startTime: startTime,
        gameOn: gameOn
      }
    );
  },

  handlePictureClick: function() {
    this.movePicture();
    clearInterval(this.state.interval);
    this.state.interval = setInterval(this.movePicture, this.state.gameInfo.interval);
    var hitCount = this.state.hitCount;
    hitCount += 1;
    this.setState(
      {
        hitCount: hitCount
      }
    );
  },

  componentWillMount: function() {
    ObjectStore.saveId(this.state.userId);
  },

  componentDidUpdate: function() {
    if (this.state.hitCount == this.state.gameInfo.clickCount) {
      clearInterval(this.state.interval);
      var endTime = (new Date()).getTime();
      var elapsedTime = ((endTime - this.state.startTime) / 1000);
      this.setState(
        {
          endTime: endTime,
          elapsedTime: elapsedTime
        }
      );
      var message = this.state.gameInfo.getMessage();
      alert("It took you " + elapsedTime + " seconds." + message);
      ObjectActionCreators.updateDB(this.state.userId, this.state.gameInfo.gameTitle, elapsedTime, message == GameConstants.game2.alertMessage1)
      this.transitionTo(this.state.gameInfo.nextPage);
      this.resetState();
    }
  },

  resetState: function() {
    var hitCount = 0;
    var startTime = 0;
    var endTime = 0;
    var elapsedTime = 0;
    var path = this.getPath();
    var gameInfo = path == "/game1" ? GameConstants.game2 : GameConstants.game3;
    this.setState( {
      hitCount: hitCount,
      startTime: startTime,
      endTime: endTime,
      gameInfo: gameInfo,
      elapsedTime: elapsedTime,
      gameOn: 0
    });

  },

  render: function() {
    return (
      <div>
        <div className="game">
          <img id="duck" src='/images/dash.jpg' onClick={this.handlePictureClick}></img>
          <p>{this.state.gameInfo.title}</p>
          <form>
            <input type="button" value={"GO"} onClick={this.handleNewGame} />
          </form>
          <p>HIT COUNT: {this.state.hitCount}</p>
          <p>Game status: {this.state.gameOn ? "Going!" : "Stopped"}</p>
        </div>
      </div>
    );
  }
});

module.exports = Game;
