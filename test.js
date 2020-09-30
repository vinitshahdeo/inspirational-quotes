const quote = require('./index.js');

let Quote = quote.getQuote();
let authorQuote = quote.getAuthorQuotes('Chinese Proverb');
let randomQuote = quote.getRandomQuote();

/* getQuote() returns an object containing 'text' and 'author' */

console.log('\n***********************************');
console.log('***********************************\n\n');

console.log('RANDOM QUOTE - GET INSPIRED\n');

console.log('getQuote() function -\n');
console.log(Quote.text);
console.log('- ' + Quote.author);

console.log('\ngetRandomQuote() function -\n');
console.log(randomQuote);

console.log('\ngetAuthorQuotes() function -\n');
console.log(authorQuote);

console.log('\n\n***********************************');
console.log('***********************************\n\n');
