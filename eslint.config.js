import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node,
        process: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
  },
  {
    ...pluginJs.configs.recommended,
  },
];
