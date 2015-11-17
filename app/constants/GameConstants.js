/**
 * Created by michael.freyberger on 11/16/15.
 */
module.exports = {
  game1: {
    title: "GAME 1: Poke Dash to win!”,
    nextPage: 'game2',
    alertMessage: 'Great job! That was just practice. The next round will be faster. Get ready.’,
    clickCount: 5,
    getMessage: function() {

      return this.alertMessage;
    },
    nextLinkText: "Next Game",
    interval: 2000,
    gameTitle: "game1"
  },
  game2: {
    title: "GAME 2: Poke Dash 15 times to win!”,
    nextPage: 'game3',
    alertMessage1: "You are worse than 50% of Princeton students. ",
    alertMessage2: "You are better than 50% of Princeton students. ",
    clickCount: 15,
    getMessage: function() {
      return Math.random() > .5 ? this.alertMessage1 : this.alertMessage2;
    },
    nextLinkText: "Next Game",
    interval: 1000,
    gameTitle: "game2"

  },
  game3: {
    title: "GAME 3: Try again! Poke Dash 15 times to win.”,
    nextPage: 'survey',
    alertMessage: "Great job. Please continue on to a quick survey",
    clickCount: 15,
    getMessage: function() {
      return this.alertMessage;
    },
    nextLinkText: "Survey",
    interval: 800,
    gameTitle: "game3"
  }
};

