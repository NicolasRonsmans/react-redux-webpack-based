'user strict';

var webpack = require('webpack');

module.exports = {
  entry: [
    './src.es6/main.js'
  ],
  output: {
    path: './dist',
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.(js|jsx)?$/,
      exclude: /(node_modules|bower_components)/,
      loader: ['babel'],
      query: {
        presets: ['es2015', 'stage-0', 'react']
      }
    }]
  },
  devServer: {
    inline: true,
    port: 8081,
    historyApiFallback: true
  },
  stats: {
    colors: true
  }
};
