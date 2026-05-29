module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],

  parser: "@typescript-eslint/parser",

  plugins: ["@typescript-eslint", "react", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "multiline-ternary": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "prettier/prettier": "off",
    "@typescript-eslint/semi": "off",
    "no-trailing-spaces": "off"
  },
};
