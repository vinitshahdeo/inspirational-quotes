var arr = require('./data/data.json');

var quote = {};
let authorQuotes = [];
let len = arr.length - 1;

randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

module.exports.getRandomQuote = () => arr[randomInt(0, len)].text;

module.exports.getQuote = name => {
  var index = randomInt(0, len);
  quote.text = arr[index].text;
  quote.author = arr[index].from;
  return quote;
};

module.exports.getAuthorQuotes = name => {
  for (const quote of arr) {
    if (name === quote.from) authorQuotes.push(quote);
  }
  return authorQuotes;
};
