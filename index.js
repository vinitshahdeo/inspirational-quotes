const qoutesData = require('./data/data.json');

const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomQuote = () => {
    var index = randomInt(0, 324);
    return qoutesData[index].text;
};

const getQuote = (name) => {
    const qoutes = qoutesData.filter(item => item.from === name);
    return qoutes[0].text;
};

const startJob = () => {
    console.log(getQuote);
};

const getQuoteForEveryHour = () => {
    setInterval(startJob, 600000);
};

module.exports = {
    getQuote,
    getRandomQuote,
    getQuoteForEveryHour,
};
