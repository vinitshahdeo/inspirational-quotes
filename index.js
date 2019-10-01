const arr = require('./data/data.json')

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
const index = randomInt(0, 324)

const getRandomQuote = () => arr[index].text

const getQuote = () => {
    const quote = {}
    quote.text = arr[index].text
    quote.author = arr[index].from
    return quote
}

module.exports = {
    getRandomQuote,
    getQuote
}
