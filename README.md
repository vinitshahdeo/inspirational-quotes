# Inspirational Quotes

> A simple node module which returns Inspiring Quotes. It provides awesome quotes to display in your application. Get your daily quote and stay motivated!

[![NPM VERSION](http://img.shields.io/npm/v/insirational-quotes.svg?style=flat)](https://www.npmjs.org/package/inspirational-quotes) [![GitHub license](https://img.shields.io/github/license/vinitshahdeo/inspirational-quotes.svg?style=flat)](https://github.com/vinitshahdeo/inspirational-quotes/blob/master/LICENSE) [![LICENSE](http://img.shields.io/badge/inspirational-quotes-orange.svg?style=flat)](https://github.com/vinitshahdeo/inspirational-quotes)

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

- getQuote() method returns an object containing ***text*** and ***author***.

```json
 {  
    "text":"My number one piece of advice is: you should learn how to program.",
    "from":"Mark Zuckerberg, founder of Facebook"
 }
 
 ```
 
 

- getRandomQuote() method returns a random **inspirational** quote : *`You miss 100 percent of the shots you don’t take.`*



```js

const Quote = require('inspirational-quotes');
console.log(Quote.getRandomQuote());

/*

getRandomQuote() returns a random quote.

"One day your life will flash before your eyes. Make sure it is worth watching."

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
$ git clone https://github.com/vinitshahdeo/inspirational-quotes.git
$ cd examples
$ npm install
```

Then run the **demo.js**:

```bash
$ node demo.js
```

## License

**MIT &copy; [Vinit Shahdeo](https://github.com/vinitshahdeo/inspirational-quotes/blob/master/LICENSE)**

[![Stay Motivated](https://img.shields.io/badge/Stay-Motivated-teal.svg?style=for-the-badge)](https://github.com/vinitshahdeo/inspirational-quotes) 
[![Think Big](https://img.shields.io/badge/Think-Big-orange.svg?style=for-the-badge)](https://github.com/vinitshahdeo/GetQuotes)
[![Work Hard](https://img.shields.io/badge/Work-Hard-blue.svg?style=for-the-badge)](https://github.com/vinitshahdeo/)