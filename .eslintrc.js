module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    commonjs: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:compat/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["import", "react", "react-hooks", "jsx-a11y", "@typescript-eslint", "prettier"],
  globals: {
    nodecg: true,
    NodeCG: true,
    React: true,
  },
  rules: {
    "array-callback-return": "off",
    "no-shadow": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "global-require": "off",
    "no-use-before-define": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/triple-slash-reference": "off",
    "prettier/prettier": "error",
  },
  settings: {
    react: {
      version: "18.2.0",
    },
    "import/resolver": {
      [require.resolve("eslint-import-resolver-node")]: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
      [require.resolve("eslint-import-resolver-typescript")]: {
        alwaysTryTypes: true,
      },
    },
  },
};
