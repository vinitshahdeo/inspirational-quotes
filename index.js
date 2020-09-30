const arr = require('./data/data.json');
// get the size of data so that we don't have to update the max value on randomInt method every time the quotes are added to data.json.
let size = Object.keys(arr).length;
let quote={};

function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

module.exports.getRandomQuote = function () {
    
    let index = randomInt(0, size);
    return arr[index].text;
};

module.exports.getQuote = function (name) { 
    let index = randomInt(0, size);
    quote.text=arr[index].text;
    quote.author=arr[index].from;
    return quote;
};
