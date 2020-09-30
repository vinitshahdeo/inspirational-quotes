const quote=require('./index.js');

const should = require("should");

describe(`---------------- Enter the "inspirational" tests :) ----------------------- \n\n`, () => {
    it("Test: getQuote() middleware\n", (done) => {
        var Quote = quote.getQuote();
        should(Quote.text).be.a.String();
        should(Quote.author).be.a.String();
        

        done();
    });

    it("Test: getRandomQuote() middleware\n", (done) => {
        var Quote = quote.getRandomQuote();

        should(Quote).be.a.String();

        done();
    });
});