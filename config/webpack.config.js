const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, '../app'),
  entry: './entry.jsx',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '../dist'),
    filename: 'watchthis.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },
  module: {
    loaders: [
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        query: {
          name: 'img/[name]-[hash].[ext]'
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
        }
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin('watchthis.css')
  ],
  devtool: 'source-map',
};
