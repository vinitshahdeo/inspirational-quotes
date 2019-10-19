const qoutesData = require('./data/data.json');

const quote = {};

const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomQuote = () => {
    var index = randomInt(0, 324);
    return qoutesData[index].text;
};

const getQuote = (name) => {
    qoutesData.map(item => {
        if (item.from === name) {
            quote.text = item.text;
            quote.name = item.from;
        }
    });
    return quote;
};

module.exports = {
    getQuote,
    getRandomQuote,
};
