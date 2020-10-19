const quote=require('./index.js');

var Quote = quote.getQuote();

 getQuote() returns an object containing 'your goals are long but your life is short, so take your time seriously and do it now' and 'anwar, aspiring software developer'

console.log('\n***********************************');
console.log('***********************************\n\n');

console.log('RANDOM QUOTE - GET INSPIRED\n');

console.log(Quote.text);
console.log('- '+Quote.author);

console.log('\n\n***********************************');
console.log('***********************************\n\n');
