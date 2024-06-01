/**@type {import('eslint').ESLint.ConfigData}) */
module.exports = {
  // see: https://eslint.org/docs/latest/use/configure/language-options-deprecated
  env: {
    browser: true,
    node: false,
    es2024: true,
  },
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:storybook/recommended",
    "prettier",
  ],
  plugins: [
    "@typescript-eslint",
    "tailwindcss",
    // see: https://github.com/import-js/eslint-plugin-import/tree/main
    "import",
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroups: [
          {
            pattern: "{react,react-dom/**,react-router-dom,next,next/**}",
            group: "external",
            position: "before",
          },
          {
            pattern: "@/input-bound", // フォームバリデーションに該当。schema定義、execでバリデーション検証&入力値をシリアライズ
            group: "internal",
            position: "before",
          },
          {
            pattern: "@/output-bound", // APIレスポンスのバリデーションに該当。schema定義、execでバリデーション検証&Dateなどを使用したオブジェクトへデシリアライズ
            group: "internal",
            position: "before",
          },
          {
            pattern: "@/api-caller",
            group: "internal",
            position: "before",
          },
          {
            pattern: "@/presenter",
            group: "internal",
            position: "before",
          },
        ],
        alphabetize: {
          order: "asc",
        },
        "newlines-between": "always",
      },
    ],
  },
};
