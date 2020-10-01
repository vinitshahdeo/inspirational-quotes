var arr = require("./data/data.json");

var quote = {};

function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports.getRandomQuote = function () {
  var index = randomInt(arr.length);
  return arr[index].text;
};

module.exports.getQuote = function (name) {
  var index = randomInt(arr.length);
  quote.text = arr[index].text;
  quote.author = arr[index].from;
  return quote;
};
