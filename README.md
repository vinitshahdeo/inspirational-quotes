# Inspirational Quotes

> A simple node module which returns Inspiring Quotes. It provides awesome quotes to display in your application. Get your daily quote and stay motivated!

[![NPM VERSION](http://img.shields.io/npm/v/celeb-diwali.svg?style=flat)](https://www.npmjs.org/package/celeb-diwali)
[![LICENSE](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://github.com/vinitshahdeo/celeb-diwali/blob/master/LICENSE)

## Getting started

```
$ npm install --save inspirational-quotes
```

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install inspirational-quotes
```

## Usage

```js

const Quote = require('inspirational-quotes');
console.log(Quote.getRandomQuote());

/*

`getRandomQuote()` returns a random quote.

 > One day your life will flash before your eyes. Make sure it is worth watching

*/

console.log(Quote.getQote());

/*

Each returned quote is a object containing:

- text
- author

{  
  "text":"Don’t worry about failure; you only have to be right once.",
  "from":"Drew Houston, founder of Dropbox"
}


*/

```

## Examples

To view the examples, clone the **inspirational-quotes** repo and install the dependencies:

```bash
$ git clone https://github.com/vinitshahdeo/celeb-diwali.git
$ cd examples
$ npm install
```

Then run the **demo.js**:

```bash
$ node demo.js
```

## License

MIT &copy; [Vinit Shahdeo](https://)