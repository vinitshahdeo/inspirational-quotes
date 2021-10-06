const expect = require("chai").expect,
  { getQuote, getRandomQuote } = require("../lib/index");

allQuotes = require("../data/data.json");

describe("Running tests for methods of inspirational-quotes", () => {
  describe("getQuote", () => {
    it("should return an object", (done) => {
      const randomQuote = getQuote();
      expect(randomQuote).to.be.an("object");
      done();
    });
    it("should contain text and author", (done) => {
      const randomQuote = getQuote();
      expect(randomQuote).to.have.property("author");
      expect(randomQuote).to.have.property("text");
      done();
    });
    it("should not contain empty text", (done) => {
      const randomQuote = getQuote();
      expect(randomQuote.text).to.not.be.empty;
      done();
    });
    it("should not contain empty author", (done) => {
      const randomQuote = getQuote();
      expect(randomQuote.author).to.not.be.empty;
      done();
    });
    it("should not return author field if author: false is passed", (done) => {
      const randomQuote = getQuote({ author: false });
      expect(randomQuote).to.not.have.property("author");
      expect(randomQuote).to.have.property("text");
      done();
    });
  });
  describe("getRandomQuote", () => {
    it("should return a string", (done) => {
      const randomQuote = getRandomQuote();
      expect(randomQuote).to.be.an("string");
      done();
    });
    it("should have length greater than 5", (done) => {
      const randomQuote = getRandomQuote();
      expect(randomQuote).to.have.length.greaterThan(5);
      done();
    });
  });
  describe("data.json", () => {
    it("should not have any duplicate quotes", (done) => {
      let duplicates = [
        ...allQuotes
          .reduce((accumulator, current) => {
            let text = current.text;
            accumulator.set(text, (accumulator.get(text) || 0) + 1);
            return accumulator;
          }, new Map())
          .entries(),
      ]
        .filter(([_, occurance]) => occurance > 1)
        .map(([text, occurance]) => ({
          text,
          occurance,
        }));

        if(duplicates.length>0){
            console.log(duplicates);
        }

      const hasDuplicates = duplicates.length > 0;
      expect(hasDuplicates).to.be.false;
      done();
    });
  });
});
