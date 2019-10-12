var expect = require('chai').expect;

var iq = require('../index');
var getRandomQuote = iq.getRandomQuote;
var getQuote = iq.getQuote;

describe('#getRandomQuote()', function () {

  context('without arguments', function () {
    it('should return a string', function () {
      expect(getRandomQuote()).to.be.a('string');
    });

    it('should return a non-empty string', function () {
      expect(getRandomQuote()).to.not.be.empty;
    });
  });

});

describe('#getQuote()', function () {

  context('without arguments', function () {
    it('should return an object', function () {
      expect(getQuote()).to.be.a('object');
    });

    it('should return a non-empty object', function () {
      expect(getQuote()).to.not.be.empty;
    });

    it('should return a object with a "text" key', function () {
      expect(getQuote()).to.have.property('text');
    });

    it('should return a object with an "author" key', function () {
      expect(getQuote()).to.have.property('author');
    });

    it('should return a object with a "text" key, that has a string value', function () {
      expect(getQuote()['text']).to.be.a('string');
    });

    it('should return a object with a "text" key, that has a non-empty string value', function () {
      expect(getQuote()['text']).to.not.be.empty;
    });

    it('should return a object with an "author" key, that has a string value', function () {
      expect(getQuote()['author']).to.be.a('string');
    });

    it('should return a object with an "author" key, that has a non-empty string value', function () {
      expect(getQuote()['author']).to.not.be.empty;
    });

  });

});
