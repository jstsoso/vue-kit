module.exports = {
  'extends': [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:vue/strongly-recommended',
  ],

  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'parser': 'babel-eslint',
    'sourceType': 'module',
    'ecmaFeatures': {
      'legacyDecorators': true,
      'jsx': true,
    },
  },

  'env': {
    'es6': true,
    'browser': true,
    'node': true,
  },

  'rules': {
    'import/no-unresolved': 0,
    'import/no-duplicates': 2,
    'array-bracket-spacing': 2,
    'arrow-spacing': 2,
    'block-spacing': 2,
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
    'comma-dangle': [2, 'always-multiline'],
    'comma-spacing': 2,
    'computed-property-spacing': 2,
    'dot-location': [2, 'property'],
    'dot-notation': 2,
    'eol-last': 2,
    'eqeqeq': 2,
    'for-direction': 2,
    'func-call-spacing': 2,
    'generator-star-spacing': [2, 'after'],
    'indent': [2, 2, { 'SwitchCase': 1 }],
    'keyword-spacing': 2,
    'key-spacing': 2,
    'linebreak-style': 2,
    'lines-between-class-members': [2, 'always', { 'exceptAfterSingleLine': true }],
    'multiline-ternary': [2, 'never'],
    'no-alert': 2,
    'no-console': 2,
    'no-empty': [2, { 'allowEmptyCatch': true }],
    'no-lone-blocks': 2,
    'no-multiple-empty-lines': [2, { 'max': 1, 'maxEOF': 0, 'maxBOF': 0 }],
    'no-multi-spaces': 2,
    'no-new-wrappers': 2,
    'no-return-await': 2,
    'no-self-compare': 2,
    'no-trailing-spaces': 2,
    'no-unused-vars': 2,
    'no-useless-concat': 2,
    'no-var': 2,
    'no-void': 2,
    'no-whitespace-before-property': 2,
    'object-curly-spacing': [2, 'always'],
    'prefer-template': 2,
    'quotes': [2, 'single'],
    'require-await': 2,
    'rest-spread-spacing': 2,
    'semi': [2, 'never', { 'beforeStatementContinuationChars': 'never' }],
    'semi-style': [2, 'last'],
    'space-before-blocks': 2,
    'space-before-function-paren': [2, { 'named': 'never', 'anonymous': 'never' }],
    'space-infix-ops': 2,
    'space-in-parens': 2,
    'switch-colon-spacing': 2,
    'template-curly-spacing': 2,

    /* 覆盖 eslint-plugin-vue 的规则 */
    'vue/component-name-in-template-casing': [2, 'kebab-case'],
    'vue/html-self-closing': [2, { 'html': { 'void': 'always' } }],
    'vue/max-attributes-per-line': 0,
    'vue/name-property-casing': [2, 'kebab-case'],
    'vue/script-indent': [2, 2, { 'baseIndent': 1 }],
    'vue/singleline-html-element-content-newline': 0,
    'vue/multiline-html-element-content-newline': [2, { 'allowEmptyLines': true }]
  },

  'overrides': [{
    'files': ['*.vue'],
    'rules': { 'indent': 'off' },
  }],

  'globals': {
    'axios': true,
    'dayjs': true,
    'Big': true,
  },
}
