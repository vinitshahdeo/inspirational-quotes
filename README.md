# celeb-diwali

> A simple node module which returns Inspiring Quotes. It provides awesome quotes to display in your application. Get your daily quote and stay motivated!

[![NPM VERSION](http://img.shields.io/npm/v/celeb-diwali.svg?style=flat)](https://www.npmjs.org/package/celeb-diwali)
[![LICENSE](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://github.com/vinitshahdeo/celeb-diwali/blob/master/LICENSE)

## Getting started

```
$ npm install --save celeb-diwali
```

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install celeb-diwali
```

## Usage

```js

const diwali = require('celeb-diwali');
console.log(diwali.getRandomWish());

/*
 May millions of lamps illuminate your life with endless prosperity, health, and wealth forever!
 Wishing you & your family a very Happy Diwali!
*/

console.log(diwali.sendRandomWish("Vinit"));

/*
May you have all the joy your heart can hold, 
All the smiles a day can bring, 
All the blessings a life can unfold, 
May you get the world’s best in everything. 
Wishing You Happy Diwali.
Regards - Vinit
*/

console.log(diwali.sendDiwaliWish("Shreya","Vinit"));

/*
Hey Shreya,
A true and caring relation doesn’t have to speak loud, 
a soft SMS is just enough to express the heartiest feelings. 
Enjoy the festival of Diwali with lots of fun.
Wishing You Happy Diwali.
- Vinit
*/

```

## Examples

  To view the examples, clone the **celeb-diwali** repo and install the dependencies:

```bash
$ git clone https://github.com/vinitshahdeo/celeb-diwali.git
$ cd examples
$ npm install
```

  Then run whichever example you want:

```bash
$ node demo.js
```

## License

MIT &copy; [Vinit Shahdeo](http://vinitshahdeo.com)