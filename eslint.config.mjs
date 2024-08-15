import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import i18next from "eslint-plugin-i18next";


export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
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
      indent: [2, 4], // Устанавливает отступы в 4 пробела
      "react/react-in-jsx-scope": "off", // Отключает требование импортировать React в файлах с JSX (не нужно с React 17+)
      "no-unused-vars": "off", // Отключает правило о неиспользуемых переменных (для лучшей работы с TypeScript)
      "@typescript-eslint/no-unused-vars": "warn", // Включает предупреждения для неиспользуемых переменных в TypeScript
      "max-len": [
        "error",
        {
          code: 131, // Устанавливает максимальную длину строки в 131 символ
          ignoreComments: true, // Игнорирует длину строк в комментариях
        },
      ],
      "i18next/no-literal-string": 2, // Запрещает строки без перевода в JSX
    }
  }
];