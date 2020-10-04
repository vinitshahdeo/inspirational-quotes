var arr = require('./data/data.json');

var quote = {};

function randomInt() {
    return Math.floor(Math.random() * (arr.length + 1));
}

module.exports.getRandomQuote = function () {
    const index = randomInt();
    return arr[index].text;
};

module.exports.getQuote = function () {
    const index = randomInt();
    quote.text = arr[index].text;
    quote.author = arr[index].from;
    return quote;
};