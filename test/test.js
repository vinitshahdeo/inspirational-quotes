const expect = require('chai').expect,
    { getQuote, getRandomQuote } = require('../lib/index');

describe('Running tests for methods of inspirational-quotes', () => {
    describe('getQuote', () => {
        it('should return an object', (done) => {
            const randomQuote = getQuote();
            expect(randomQuote).to.be.an('object');
            done();
        });
        it('should contain text and author', (done) => {
            const randomQuote = getQuote();
            expect(randomQuote).to.have.property('author');
            expect(randomQuote).to.have.property('text');
            done();
        });
        it('should not contain empty text', (done) => {
            const randomQuote = getQuote();
            expect(randomQuote.text).to.not.be.empty;
            done();
        });
        it('should not contain empty author', (done) => {
            const randomQuote = getQuote();
            expect(randomQuote.author).to.not.be.empty;
            done();
        });
        it('should not return author field if author: false is passed', (done) => {
            const randomQuote = getQuote({author: false});
            expect(randomQuote).to.not.have.property('author');
            expect(randomQuote).to.have.property('text');
            done();
        });
    });
    describe('getQuoteByAuthorName', () => {
        it('should return an array', (done) => {
            const quotes = getQuoteByAuthorName();
            expect(quotes).to.be.an('array');
            done();
        });
        it('should contain text and author', (done) => {
            const quotes = getQuoteByAuthorName('Ilka Chase');
            expect(quotes).to.have.deep.members([{  
                "text":"The only people who never fail are those who never try.",
                "from":"Ilka Chase"
            }]);
            done();
        });
        it('should return empty array if name not match', (done) => {
            const quotes = getQuoteByAuthorName('ilka chase');
            expect(quotes).to.be.an('array');
            expect(quotes).to.be.empty;
            done();
        });
        it('should return array of object if name match by ignoreCase option', (done) => {
            const quotes = getQuoteByAuthorName('ilka chase', {ignoreCase: true});
            expect(quotes).to.have.deep.members([{  
                "text":"The only people who never fail are those who never try.",
                "from":"Ilka Chase"
            }]);
            done();
        });
        it('should not return author field if author: false is passed', (done) => {
            const quotes = getQuoteByAuthorName('Ilka Chase', {author: false});
            expect(quotes).to.have.deep.members([{  
                "text":"The only people who never fail are those who never try."
             }]);
            done();
        });
    });
    describe('getRandomQuote', () => {
        it('should return a string', (done) => {
            const randomQuote = getRandomQuote();
            expect(randomQuote).to.be.an('string');
            done();
        });
        it('should have length greater than 5', (done) => {
            const randomQuote = getRandomQuote();
            expect(randomQuote).to.have.length.greaterThan(5);
            done();
        });
    });
});
