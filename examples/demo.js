const quote = require('inspirational-quotes');
var seen = new Set()

var newQuote = quote.getRandomQuote()
while(seen.has(newQuote))
{
  newQuote = quote.getRandomQuote()
}
seen.add(newQuote)

console.log(quote.getQuote());
console.log(newQuote) //generating the unvisited random quote
