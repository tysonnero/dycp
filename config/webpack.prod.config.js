'use strict';

const path = require('path');
const webpack = require('webpack');
const paths = require('./paths');

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  // Don't attempt to continue if there are any errors.
  bail: true,
  devtool: 'source-map',
  output: {
    // Generated JS file names (with nested folders).
    // There will be one main bundle, and one file per asynchronous chunk.
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
    publicPath: ''
  },
  module: {
    rules: [
      // Process JS with Babel
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          // Do not include superfluous whitespace characters and line terminators
          // https://blog.mariusschulz.com/2016/07/12/speeding-up-babel-transpilation-with-compact-mode
          compact: true,
        }
      },
      {
        test: /\.(css|scss)/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 1 },
            },
            { loader: 'sass-loader' },
            { loader: 'postcss-loader', options: { config: { path: paths.configPostCSS } } }
          ]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.appHtml,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // Minify the code
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
    // Note: this won't work without ExtractTextPlugin.extract(..) in `loaders`.
    // TODO: When ready for CommonChunks see:
    // https://github.com/webpack/webpack/tree/master/examples/multiple-entry-points-commons-chunk-css-bundle
    new ExtractTextPlugin({
      filename: 'css/[name].[contenthash:8].css'
    }),
    // Generate a manifest file which contains a mapping of all asset file names
    // to their corresponding output file so that tools can pick it up without
    // having to parse `index.html`.
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
  ]
};
