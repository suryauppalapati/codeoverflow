/** @type {import('prettier').Config} */
const config = {
  trailingComma: "es5",
  semi: true,
  tabWidth: 2,
  printWidth: 120,
  endOfLine: "auto",
  arrowParens: "always",
  proseWrap: "preserve",
  plugins: ["prettier-plugin-tailwindcss"],

  // Tailwind CSS specific options
  tailwindFunctions: ["cn", "clsx", "cva"],
  tailwindAttributes: ["className", "class"],
};

export default config;
