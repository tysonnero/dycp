'use strict';

const path = require('path');
const webpack = require('webpack');
const paths = require('./paths');

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      // Process JS with Babel
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true,
        }
      },
      // "postcss" loader applies autoprefixer to our CSS.
      // "css" loader resolves paths in CSS and adds assets as dependencies.
      // "style" loader turns CSS into JS modules that inject <style> tags.
      // In production, we use a plugin to extract that CSS to a file, but
      // in development "style" loader enables hot editing of CSS.
      {
        test: /\.(css|scss)/,
        use: [
          { loader: 'style-loader', options: { sourceMap: true } },
          {
            loader: 'css-loader',
            options: { importLoaders: 1, sourceMap: true },
          },
          { loader: 'sass-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { config: { path: paths.configPostCSS } } }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.appHtml
    }),
    // Enable HMR
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],
  devServer: {
    contentBase: paths.appPublic,
    // serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true,
    // Tell the dev-server we're using HMR
    hot: true,
    port: 9000
  }
};
