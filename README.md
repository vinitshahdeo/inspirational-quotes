# Inspirational Quotes

[![NPM VERSION](http://img.shields.io/npm/v/inspirational-quotes.svg?style=flat&logo=npm)](https://www.npmjs.org/package/inspirational-quotes) [![GitHub license](https://img.shields.io/github/license/vinitshahdeo/inspirational-quotes.svg?style=flat&logo=github)](https://github.com/vinitshahdeo/inspirational-quotes/blob/master/LICENSE) [![npm collaborators](https://img.shields.io/npm/collaborators/inspirational-quotes.svg?logo=npm)](https://www.npmjs.com/package/inspirational-quotes) [![Snyk Vulnerabilities for npm package version](https://img.shields.io/snyk/vulnerabilities/npm/inspirational-quotes.svg?color=9cf&logo=snyk)](https://www.npmjs.com/package/inspirational-quotes) [![npm](https://img.shields.io/npm/dy/inspirational-quotes.svg?logo=npm&color=yellow)](https://www.npmjs.com/package/inspirational-quotes) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat&logo=github)](https://github.com/vinitshahdeo/inspirational-quotes/pulls)

**A simple [NPM](https://www.npmjs.com/package/inspirational-quotes) Package which returns random [Inspirational Quotes](https://vinitshahdeo.github.io/inspirational-quotes/). It provides awesome quotes to display in your application. Get your daily quote and stay motivated!**

Click [here](https://www.npmjs.com/package/inspirational-quotes) to view this package on NPM registry. Check the homepage [here](https://vinitshahdeo.github.io/inspirational-quotes/).

## Getting started

[![NPM](https://nodei.co/npm/inspirational-quotes.png?compact=true)](https://nodei.co/npm/inspirational-quotes/)

```
$ npm install --save inspirational-quotes
```

## Installation


This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

Installation is done using the
**[`npm install`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)** command:

```bash
$ npm install inspirational-quotes
```

## Usage

```js

const Quote = require('inspirational-quotes');

console.log(Quote.getQuote()); // returns quote (text and author)
console.log(Quote.getQuote({ author: false }); // return quote without author
console.log(Quote.getRandomQuote()); // return any random quote

```

- ***getQuote()*** method returns an object containing ***text*** and ***author***.

```json
 {  
    "text":"My number one piece of advice is: you should learn how to program.",
    "author":"Mark Zuckerberg, founder of Facebook"
 }
 ```

- ***getRandomQuote()*** method returns a random **inspirational** quote : *`You miss 100 percent of the shots you don’t take.`*

### Options

Additionally you can provide `options` to `getQuote` method. By default `{ author: true }` is used. 

```js

getQuote({ author: false });

```

-  `{ author: true }`: Returns a quote with author information
-  `{ author: false }`: Returns a quote without author information

> **Note**: Recommended to use `getQuote` with `{ author: false}` option instead of `getRandomQuote` as it will be deprecated in the further versions. It's available just to ensure the backward compatability.

## Examples

To view the examples, clone the **inspirational-quotes** repo and install the dependencies:

```bash
$ git clone https://github.com/vinitshahdeo/inspirational-quotes.git
$ cd inspirational-quotes
$ npm install
```

Then run the [`examples/index.js`](./examples/index.js):

```bash
$ node examples
```

## Tests

- `npm run test`: Runs unit tests
- `npm run test-lint`: Run lint tests

## Contributing

Do you know any inspirational quotes so one can start working by taking control over thoughts, thinking positively and setting new goals?
Append your quote to `data.json` inside the `data/` directory and raise the PR.

> Please check **[ISSUE [#4](https://github.com/vinitshahdeo/inspirational-quotes/issues/4)]** : **[Add More Inspirational Quotes](https://github.com/vinitshahdeo/inspirational-quotes/issues/4)** (Recommended for beginners)

Steps to follow:

- Clone the repository and create a new branch

```bash
git clone https://github.com/vinitshahdeo/inspirational-quotes.git
git checkout feature/new-quote
```

- Head to [`data/data.json`](./data/data.json)

```bash
cd data
vi data.json
```

- Add a quote at random index (just to avoid conflicts if every PR appends a quote at the last)

```js
 {  
    "text":"Your new awesom quote",
    "from":"Name of author"
 }
```

- Run tests locally

```bash
npm run test-lint
npm run test
```

- Tests passed successfully?
   - If yes, please [raise a pull request](https://github.com/vinitshahdeo/inspirational-quotes/pulls) to add the quote
   - Otherwise, fix the tests and run the tests again

- Sit and relax! You've made your contribution. :tada:

> **Disclaimer**: There're so many open pull requests. It's not possible for me to merge them all manually. I will write an automation script if that's possible. If you've an idea, please feel free to share it on [discussions](https://github.com/vinitshahdeo/inspirational-quotes/discussions/2021). Happy to take it forward from there.


## Related Works

- Checkout [Quotter](https://vinitshahdeo.github.io/Quotter/) - A twitter bot which tweets random quotes with image and #hashtags!

- Click [here](https://github.com/vinitshahdeo/inspirational-quotes/network/dependents?package_id=UGFja2FnZS0yMTk1NjcyNDQ%3D) to view applications created by open-source community using this module.

> I'll be more than happy to know if you build something using [this](https://www.npmjs.com/package/inspirational-quotes) module. Tweet your work at [@Vinit_Shahdeo](https://twitter.com/Vinit_Shahdeo)

[![Twitter Follow](https://img.shields.io/twitter/follow/Vinit_Shahdeo.svg?style=social)](https://twitter.com/Vinit_Shahdeo)

## Author 

|                                                                                         <a href="https://vinitshahdeo.dev"><img src="https://raw.githubusercontent.com/vinitshahdeo/vinitshahdeo/master/images/vinitshahdeo-dp.png" width="150px " height="150px" /></a>                                                                                         |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                                                                        **[Vinit Shahdeo](https://github.com/vinitshahdeo)**                                                                                                                                        |
| <a href="https://twitter.com/Vinit_Shahdeo"><img src="https://raw.githubusercontent.com/vinitshahdeo/Water-Monitoring-System/master/assets/twitter.png" width="32px" height="32px"></a> <a href="https://www.facebook.com/vinit.shahdeo"><img src="https://raw.githubusercontent.com/vinitshahdeo/Water-Monitoring-System/master/assets/facebook.png" width="32px" height="32px"></a> <a href="https://www.linkedin.com/in/vinitshahdeo/"><img src="https://raw.githubusercontent.com/vinitshahdeo/Water-Monitoring-System/master/assets/linkedin.png" width="32px" height="32px"></a> |

## Support

[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/vinitshahdeo) [![GitHub followers](https://img.shields.io/github/followers/vinitshahdeo.svg?label=vinitshahdeo&logo=github)](https://github.com/vinitshahdeo/)

Thank you for being here! **One day your life will flash before your eyes. Make sure it is worth watching!** 

- You can find my other NPM Packages **[here](https://www.npmjs.com/~vinitshahdeo)**.
- Find my blog [here](https://vinitshahdeo.dev/).

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/vinitshahdeo)


```

   _____ _                _____                 _              _ 
  / ____| |              |_   _|               (_)            | |
 | (___ | |_ __ _ _   _    | |  _ __  ___ _ __  _ _ __ ___  __| |
  \___ \| __/ _` | | | |   | | | '_ \/ __| '_ \| | '__/ _ \/ _` |
  ____) | || (_| | |_| |  _| |_| | | \__ \ |_) | | | |  __/ (_| |
 |_____/ \__\__,_|\__, | |_____|_| |_|___/ .__/|_|_|  \___|\__,_|
                   __/ |                 | |                     
                  |___/                  |_|                     

```
