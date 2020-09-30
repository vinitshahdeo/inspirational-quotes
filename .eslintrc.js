module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",

    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {

      //remove prefix "//" from front of these line to enable those features.

      //  "no-console": "off",
      //  "semi": ["error", "always"],
      // "quotes": ["error", "double"],
    }
};