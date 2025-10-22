import path from "node:path";

import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";
import { configs, plugins, rules } from "eslint-config-airbnb-extended";
import { rules as prettierConfigRules } from "eslint-config-prettier";
import betterTailwind from "eslint-plugin-better-tailwindcss";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";

const gitignorePath = path.resolve(".", ".gitignore");

// --- JavaScript Config ---
const jsConfig = [
  {
    name: "js/config",
    ...js.configs.recommended,
  },
  plugins.stylistic,
  plugins.importX,
  ...configs.base.recommended,
];

// --- Next.js Config ---
const nextConfig = [
  plugins.react,
  plugins.reactHooks,
  plugins.reactA11y,
  plugins.next,
  ...configs.next.recommended,
];

// --- Import Order Config ---
const importOrderConfig = [
  {
    name: "import/order/config",
    plugins: { import: importPlugin },
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "import/newline-after-import": ["error", { count: 1 }],
      "import/no-duplicates": "error",
    },
  },
];

// --- TypeScript Config ---
const typescriptConfig = [
  plugins.typescriptEslint,
  ...configs.base.typescript,
  rules.typescript.typescriptEslintStrict,
  ...configs.next.typescript,
  {
    rules: {
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  },
];

// --- Better TailwindCSS Config ---
const tailwindConfig = [
  {
    name: "better-tailwindcss/config",
    plugins: { "better-tailwindcss": betterTailwind },
    rules: {
      "better-tailwindcss/enforce-consistent-line-wrapping": "warn",
      "better-tailwindcss/enforce-consistent-class-order": "error",
      "better-tailwindcss/enforce-consistent-variable-syntax": "warn",
      "better-tailwindcss/enforce-consistent-important-position": "warn",
      "better-tailwindcss/enforce-shorthand-classes": "warn",
      "better-tailwindcss/no-duplicate-classes": "error",
      "better-tailwindcss/no-unnecessary-whitespace": "error",
      "better-tailwindcss/no-unregistered-classes": "warn",
      "better-tailwindcss/no-conflicting-classes": "error",
    },
    settings: {
      tailwindcss: {
        config: "tailwind.config.js",
        callees: ["clsx", "classnames"],
      },
    },
  },
];

// --- Prettier Config ---
const prettierConfig = [
  {
    name: "prettier/config",
    plugins: { prettier: prettierPlugin },
    rules: {
      ...prettierConfigRules,
      "prettier/prettier": "error",
    },
  },
];

// --- Combined Config Export ---
export default [
  includeIgnoreFile(gitignorePath),
  ...jsConfig,
  ...nextConfig,
  ...typescriptConfig,
  ...tailwindConfig,
  ...prettierConfig,
  ...importOrderConfig,
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "dist/**",
      "next-env.d.ts",
    ],
  },
];
