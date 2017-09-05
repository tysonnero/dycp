'use strict';

const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const merge = require('webpack-merge');
const paths = require('./paths');

// Plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

// Env configs
const devConfig = require('./webpack.dev.config');
const prodConfig = require('./webpack.prod.config');

// Load dotenv
https://github.com/motdotla/dotenv
if (fs.existsSync('.env')) {
  require('dotenv').config();
}

const commonConfig = {
  entry: {
    main: ['es6-promise', 'whatwg-fetch', paths.appIndexJs]
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: paths.appBuild,
    publicPath: '/'
  },
  module: {
    rules: [
      // First, run the linter.
      // It's important to do this before Babel processes the JS.
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          configFile: paths.configESLint
        }
      },
      // "url" loader works like "file" loader except that it embeds assets
      // smaller than specified limit in bytes as data URLs to avoid requests.
      // A missing `test` is equivalent to a match.
      {
        test: /\.(png|svg|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([paths.appBuild], { root: paths.appRoot }),
    new StyleLintPlugin({
      configFile: paths.configStyleLint,
      context: paths.appSrc
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
};

module.exports = () => {
  console.log('NODE_ENV', process.env.NODE_ENV);

  if (process.env.NODE_ENV === 'production') {
    return merge(commonConfig, prodConfig);
  }

  return merge(commonConfig, devConfig);
};
