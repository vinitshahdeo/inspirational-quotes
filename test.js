const quote=require('./index.js');

const chai = require("chai");
const should = chai.should();

describe(`---------------- Enter the "inspirational" tests :) ----------------------- \n\n`, () => {
    it("Test: getQuote() middleware\n", (done) => {
        var Quote = quote.getQuote();

        Quote.text.should.be.a("string");
        Quote.author.should.be.a("string");

        done();
    });

    it("Test: getRandomQuote() middleware\n", (done) => {
        var Quote = quote.getRandomQuote();

        Quote.should.be.a("string");

        done();
    });
});