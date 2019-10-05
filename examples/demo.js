const quote = require('inspirational-quotes');
var q={};
q=quote.getQuote();
console.log(' ');
console.log(q.text);
console.log('~'+q.author);
console.log(' ');
console.log(quote.getRandomQuote());
