const arr = require('./data/data.json');

var quote={};

async randomInt=(min,max)=>
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

module.exports.getRandomQuote = async ()=> { 
    var index =await randomInt(0,324);
    return arr[index].text;
};

module.exports.getQuote = async = (name) =>{ 
    var index =await randomInt(0,324);
    quote.text=arr[index].text;
    quote.author=arr[index].from;
    return quote;
};
