const {
    getRandomQuote,
    getQuote,
} = require('./index');

console.log('\n***********************************');
console.log('***********************************\n\n');
console.log('RANDOM QUOTE - GET INSPIRED\n');
console.log(getRandomQuote());

console.log('\n***********************************');
console.log('***********************************\n\n');
console.log('LIKELY QOUTE - GET INSPIRED\n');
console.log(getQuote('Chinese Proverb'));
