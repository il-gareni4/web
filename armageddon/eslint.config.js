import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks"
import pluginJsxA11y from "eslint-plugin-jsx-a11y"
import pluginImport from "eslint-plugin-import"
import pluginPrettierConfig from "eslint-plugin-prettier/recommended"

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReactHooks.configs.recommended,
  pluginJsxA11y.configs.recommended,
  pluginImport.flatConfigs.recommended,
  pluginPrettierConfig
];
