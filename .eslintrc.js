module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
  },
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
  ],
  plugins: [

  ],
  rules: {
    "no-console": 0,
    semi: [2, "never"]
  },
};
