const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
   mode: 'production',
   devtool: 'source-map',
   plugins: [
      new webpack.DefinePlugin({
         'process.env.REACT_APP_GOOGLE_MAP_URL': JSON.stringify(process.env.REACT_APP_GOOGLE_MAP_URL),
         'process.env.REACT_APP_GOOGLE_API_KEY': JSON.stringify(process.env.REACT_APP_GOOGLE_API_KEY),
         'process.env.REACT_APP_API_HOST': JSON.stringify(process.env.REACT_APP_API_HOST),
         'process.env.REACT_APP_PRIVATE_KEY': JSON.stringify(process.env.REACT_APP_PRIVATE_KEY),
      })
   ]
});