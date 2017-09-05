'use strict';

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appBuild: resolveApp('dist'),
  appHtml: resolveApp('src/index.html'),
  appIndexJs: resolveApp('src/index.js'),
  appPublic: resolveApp('public'),
  appRoot: resolveApp(''),
  appSrc: resolveApp('src'),
  configESLint: resolveApp('config/eslint.config.js'),
  configPostCSS: resolveApp('config/postcss.config.js'),
  configStyleLint: resolveApp('config/stylelint.config.js')
};
