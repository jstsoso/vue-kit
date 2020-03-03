module.exports = {
  presets: ['@babel/preset-env'],
  comments: false,
  plugins: [
    'lodash',
    ['component', { 'libraryName': 'element-ui', 'styleLibraryName': 'theme-chalk' }],
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    ['@babel/plugin-transform-runtime', { 'corejs': { 'version': 3, 'proposals': true } }],
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    ['@babel/plugin-proposal-class-properties', { 'loose': true }],
  ]
}