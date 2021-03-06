const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    port: 8000,
    historyApiFallback: true,
    open: true
  },
  plugins: [
    new Dotenv()
  ]
});