var when = require('when');
var superagent = require('superagent');


function makePromise(url) {

}

var CoreAPI = {

  update: function (id, game, time, humiliated) {
      superagent.post('/api/time')
        .send({id: id, game: game, time: time, humiliated: humiliated})
        .set('Access-Control-Allow-Origin', 'http://localhost')
        .set('Access-Control-Allow-Headers', 'X-Requested-With')
        .set('Access-Control-Allow-Credentials', 'true')
        .end(function(err, res){
          if (res.ok) {
            alert('yay got ' + JSON.stringify(res.body));
          } else {
            alert('Oh no! error ' + res.text);
          }
        });

  }
};

module.exports = CoreAPI;
