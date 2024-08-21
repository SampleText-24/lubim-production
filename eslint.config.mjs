import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import i18next from "eslint-plugin-i18next";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";


export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended,
  {
    plugins: {
      i18next, // Подключает плагин для работы с i18next
    },
    rules: {
      "react/jsx-filename-extension": [
        2,
        {
          extensions: ['.js', '.jsx', '.tsx'], // Разрешает JSX в указанных типах файлов
        },
      ],
      "react/react-in-jsx-scope": "off", // Отключает требование импортировать React в файлах с JSX (не нужно с React 17+)
      "react/prop-types": "off", // Отключает требование импортировать PropTypes в файлах с JSX
      "react/jsx-max-props-per-line": ["error", { maximum: 3 }], // Ограничивает максимальное количество свойств в одной строке
      "no-unused-vars": "off", // Отключает правило о неиспользуемых переменных (для лучшей работы с TypeScript)
      "@typescript-eslint/no-unused-vars": "warn", // Включает предупреждения для неиспользуемых переменных в TypeScript
      "i18next/no-literal-string": 2, // Запрещает строки без перевода в JSX
    }
  },
];