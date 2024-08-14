import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {

    rules: {
      "react/jsx-filename-extension": [
        2,
        {
          extensions: ['.js', '.jsx', '.tsx'],
        },
      ],
      indent: [2, 4],
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "max-len": [
        "error",
        {
          ignoreComments: true,
          code: 131,
        },
      ],
    }
  }
];