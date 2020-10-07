const arr = require("./data/data.json");
const MAX_NUMBER = 324;
const RANDOM_INTEGER = randomInt(0, MAX_NUMBER);

function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports.getRandomQuote = function () {
	return arr[RANDOM_INTEGER].text;
};

module.exports.getQuote = function (name) {
	return { text: arr[RANDOM_INTEGER].text, author: arr[RANDOM_INTEGER].from };
};
