/**
 * Library entry for inspirational-quotes
 * Contributed by Basuki
 * Original author: Vinit Shahdeo <https://github.com/vinitshahdeo>
 */
const arr = require('../data/data.json');

// utility to generate a random integer between min and max (inclusive)
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

/**
 * Kept `getRandomQuote` method to ensure backward compatibility.
 * Returns the text of a random quote.
 * NOTE: choose a new random index on each call (previous behaviour chose it once at module load).
 */
function getRandomQuote() {
    const index = randomInt(0, arr.length - 1);
    return arr[index].text;
}

/**
 * getQuote(options)
 * By default returns both text and author. To hide author, pass { author: false }.
 */
function getQuote(options) {
    if (!options) options = { author: true };
    const index = randomInt(0, arr.length - 1);
    const quote = { text: arr[index].text };
    if (options && options.author) quote.author = arr[index].from;
    return quote;
}

module.exports = {
    getRandomQuote,
    getQuote
};
