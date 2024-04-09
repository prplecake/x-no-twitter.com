module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
  },
  "parser": "@typescript-eslint/parser",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "next"
  ],
  "parserOptions": {
    "ecmaVersion": 11,
    "sourceType": "module"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "plugins": ["react", "react-hooks"],
  "rules": {
    // NextJs specific fix: suppress errors for missing 'import React' in files for nextjs
    "react/react-in-jsx-scope": "off",
    // NextJs specific fix: allow jsx syntax in js files
    "react/jsx-filename-extension": [1, { "extensions": [".jsx", ".tsx"] }], //should add ".ts" if typescript project
    "react/display-name": 1,
    "quotes": ["warn", "double"],
    "semi": "warn"
  }
};