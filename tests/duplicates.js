const fs = require("fs");
const expect = require("chai").expect;
const inputQuotesJson = require("../data/data.json");

const formatQuote = (quote) => {
  return quote.replace(/\W/g, "").toLowerCase().trim();
};

describe("Quotes", () => {
  const duplicateQuotes = [];
  it("Checks for duplicate quotes", () => {
    const quoteSet = new Set();
    inputQuotesJson.map((mockQuote) => {
      let setSize = quoteSet.size;
      const formattedQuote = formatQuote(mockQuote.text);
      quoteSet.add(formattedQuote);
      if (setSize === quoteSet.size) {
        duplicateQuotes.push(mockQuote);
      }
    });

    fs.writeFile(
      "duplicates.json",
      JSON.stringify(duplicateQuotes),
      "utf8",
      (err) => {
        if (err) console.log(err);
      }
    );

    expect(quoteSet.size).to.equal(inputQuotesJson.length);
  });
});
