var arr = require('./data/data.json');

var quote={};

function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

module.exports.getRandomQuote = function () { 
    var index = randomInt(0, arr.length);
    return arr[index].text;
};

module.exports.getQuote = function (name) { 
    var index = randomInt(0, arr.length);
    quote.text=arr[index].text;
    quote.author=arr[index].from;
    return quote;
};