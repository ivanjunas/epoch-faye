
var faye = require('faye');


function getTimeValue() {
  var dateBuffer = new Date();
  var Time = dateBuffer.getTime();
  return Time;
}

function getRandomValue() {
  var randomValue = Math.random() * 100;
  return randomValue;
}


var endpoint = process.argv[2] || 'http://localhost:8000/bayeux',
    client   = new faye.Client(endpoint),
    n        = 0;

// send out every second one message 
setInterval(function() {
  client.publish('/chat/tick', {
  	user: 'ivan', 
  	data: [{time: getTimeValue(), y:getRandomValue()}]
  });
}, 1000);