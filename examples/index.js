const { getQuote, getRandomQuote } = require('../lib/index'),
    quote = getQuote();

console.log(`Here's a quote by "${quote.author}": "${quote.text}"\n`); // will return quote with author

console.log(getRandomQuote()); // will return a random quote

console.log(getQuote({ author: false })); // will return quote without author
