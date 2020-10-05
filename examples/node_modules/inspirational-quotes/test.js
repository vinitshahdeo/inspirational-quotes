const quote=require('./index.js');

var Quote = quote.getQuote();

/* getQuote() returns an object containing 'text' and 'author' */

console.log('\n***********************************');
console.log('***********************************\n\n');

console.log('RANDOM QUOTE - GET INSPIRED\n');

console.log(Quote.text);
console.log('- '+Quote.author);

console.log('\n\n***********************************');
console.log('***********************************\n\n');