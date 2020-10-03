var arr = require('./data/data.json');

var quote={};

function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

module.exports.getRandomQuote = function () { 
    var index = randomInt(0,324);
    return arr[index].text;
};

module.exports.getQuote = function () { 
    var index = randomInt(0,324);
    quote.text=arr[index].text;
    quote.author=arr[index].from;
    return quote;
};

module.exports.getQuoteByAuthor = function (name) { 
    var value = name.toString();
    var items = arr.filter((item) => {
        if (item.from.includes(value))
        {
            return item;
        } 
    });
    var index = randomInt(0,items.length-1);
    quote.text=items[index].text;
    quote.author=items[index].from;
    return quote;
};