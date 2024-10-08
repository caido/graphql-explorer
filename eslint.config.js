import typescriptEslint from "typescript-eslint";
import eslintjs from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  eslintjs.configs.recommended,
  ...typescriptEslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      parser: typescriptEslint.parser,
      parserOptions: {
        parser: typescriptEslint.parser,
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },

    rules: {
      // Disabled
      "no-empty-pattern": "off",
      "@typescript-eslint/ban-ts-ignore": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-implied-eval": "off",
      "@typescript-eslint/unbound-method": "off",

      // Disabled for performance issues
      // Reference: https://typescript-eslint.io/linting/troubleshooting/performance-troubleshooting/#eslint-plugin-import
      "import/namespace": "off",

      // Disable no-unused-vars and uses noUnusedLocals: true in tsconfig.json instead
      // Reference: https://github.com/johnsoncodehk/volar/issues/47
      "@typescript-eslint/no-unused-vars": "off",

      // Enabled
      "sort-imports": [
        "warn",
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
        },
      ],
      // "import/order": [
      //   "warn",
      //   {
      //     "newlines-between": "always",
      //     warnOnUnassignedImports: true,
      //     groups: [
      //       "builtin",
      //       "external",
      //       "internal",
      //       "parent",
      //       "sibling",
      //       "index",
      //     ],
      //     alphabetize: {
      //       order: "asc",
      //       caseInsensitive: true,
      //     },
      //   },
      // ],
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/switch-exhaustiveness-check": "error",
      "@typescript-eslint/no-restricted-types": [
        "error",
        {
          types: {
            null: "Use 'undefined' instead of 'null'",
          },
        },
      ],
    },
  },
  {
    files: ["src/@types/**"],
    rules: {
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "sort-imports": "off",
      "import/order": "off",
    },
  },
];
