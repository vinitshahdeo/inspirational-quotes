/**
 * 
 * @author Vinit Shahdeo <https://github.com/vinitshahdeo>
 */
const arr = require('../data/data.json'),

    // utility to generate a random number
    randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min),
    index = randomInt(0, arr.length), // random index to be used
    
    /**
     * 
     * Kept `getRandomQuote` method to ensure the backward compatibility as
     * All the version <= `v1.0.8` has this method
     * 
     * TO BE DEPRECATED SOON
     */
    getRandomQuote = () => arr[index].text,

    /**
     * 
     * By default, { author: true },
     * To hide author, pass options as { author: false }
     */
    getQuote = (options) => {
        !options && (options = {author: true}); // default option
        return {
            text: arr[index].text,
            ...(options && options.author ? { author: arr[index].from } : {})
        };
    };

    /**
     *
     * By default, { author: true, ignoreCase: false },
     * To hide author, pass options as { author: false }
     * To ignore case sensitive of author name, pass options as { ignoreCase: true }
     */
     getQuoteByAuthorName = (name, {
        author = true,
        ignoreCase = false,
     } = {}) => {
        if (name && name.length > 0) {
            const resultArr = arr.filter((quote) => {
                if (ignoreCase) {
                    return quote.from.toLowerCase() === name.toLowerCase();
                } else {
                    return quote.from === name;
                }
            });

            if (!author) {
                return resultArr.map((quote) => ({
                    text: quote.text
                }));
            } else {
                return resultArr;
            }
        } else {
            return [];
        }
    };

module.exports = {
    getRandomQuote,
    getQuote
};
