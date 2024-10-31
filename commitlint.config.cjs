// prettier-ignore
/** @type {import('czg').UserConfig} */

module.exports = {
  extends: ['@commitlint/config-conventional'],
  prompt: {
    issuePrefixes: [
      { value: 'TICKET',          name: 'TICKET:          reference ticket #\'s' },
      { value: 'BREAKING CHANGE', name: 'BREAKING CHANGE: a breaking change' },
      { value: 'CLOSE',           name: 'CLOSE:           close a ticket' },
    ],
    scopes: [
      { value: 'components', name: 'components: component specific work' },
      { value: 'storybook',  name: 'storybook:  add or update storybook documents' },
      { value: 'style',      name: 'style:      work on global or component specific styles' },
      { value: 'repo',       name: 'repo:       anything related to managing the repo itself' },
      { value: 'misc',       name: 'misc:       misc stuff ie. does not fit in any other category' },
    ],
    enableMultipleScopes: true,
  },
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
    'body-max-line-length': [2, 'always', 100],
    'header-full-stop': [0],
    'scope-case': [2, 'always', 'lower-case'],
    'scope-max-length': [2, 'always', 20],
  },
};
