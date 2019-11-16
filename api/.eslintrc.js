module.exports = {
  "env": {
    "node": true,
    "es6": true
  },
  "extends": "airbnb-base",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "no-console": "off",
    "max-len": "off",
    "prefer-destructuring": "off",
    "consistent-return": "off"
  }
};
