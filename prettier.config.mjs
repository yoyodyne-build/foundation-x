/** @type {import("prettier").Options} */

export default {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: true,
  endOfLine: 'lf',
  jsxSingleQuote: false,
  overrides: [
    {
      files: ['*.json5'],
      options: {
        quoteProps: 'preserve',
        singleQuote: false,
      },
    },
  ],
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 80,
  proseWrap: 'never',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  tailwindFunctions: ['clsx', 'cva'],
  trailingComma: 'all',
  useTabs: false,
};
