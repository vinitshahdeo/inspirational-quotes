/**
 * 
 * @author Vinit Shahdeo <https://github.com/vinitshahdeo>
 */
const arr = require('../data/data.json'),

    // utility to generate a random number
    randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min),
    
    /**
     * 
     * Kept `getRandomQuote` method to ensure the backward compatibility as
     * All the version <= `v1.0.8` has this method
     * 
     * TO BE DEPRECATED SOON
     */
    getRandomQuote = () => arr[randomInt(0, arr.length)].text,

    /**
     * 
     * By default, { author: true },
     * To hide author, pass options as { author: false }
     */
    getQuote = (options) => {
        !options && (options = {author: true}); // default option
        let index = randomInt(0, arr.length);
        return {
            text: arr[index].text,
            ...(options && options.author ? { author: arr[index].from } : {})
        };
    };

module.exports = {
    getRandomQuote,
    getQuote
};
