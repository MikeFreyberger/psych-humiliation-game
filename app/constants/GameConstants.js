/**
 * Created by michael.freyberger on 11/16/15.
 */
module.exports = {
  game1: {
    title: "GAME 1: Daffy Duck looks irritated - because Bugs Bunny has been laughing at him all day!! Poke Daffy and see how quickly you can get him angry - you need fifteen pokes to win!",
    nextPage: 'game2',
    alertMessage: 'Great job! That was just practice. The next round will be faster. Get ready',
    clickCount: 2,
    getMessage: function() {

      return this.alertMessage;
    },
    nextLinkText: "Next Game",
    interval: 2000,
    gameTitle: "game1"
  },
  game2: {
    title: "GAME 2: Daffy Duck looks irritated - because Bugs Bunny has been laughing at him all day!! Poke Daffy and see how quickly you can get him angry - you need fifteen pokes to win!",
    nextPage: 'game3',
    alertMessage1: "You are worse than 50% Princeton students. ",
    alertMessage2: "You are better than 50% Princeton students. ",
    clickCount: 1,
    getMessage: function() {
      return Math.random() > .5 ? this.alertMessage1 : this.alertMessage2;
    },
    nextLinkText: "Next Game",
    interval: 1000,
    gameTitle: "game2"

  },
  game3: {
    title: "GAME 3: Daffy Duck looks irritated - because Bugs Bunny has been laughing at him all day!! Poke Daffy and see how quickly you can get him angry - you need fifteen pokes to win!",
    nextPage: 'survey',
    alertMessage: "Great job. Please continue on to the simple survey",
    clickCount: 1,
    getMessage: function() {
      return this.alertMessage;
    },
    nextLinkText: "Survey",
    interval: 800,
    gameTitle: "game3"
  }
};

