const path = require('path');

const webpackConfig = require('./webpack.config');
const appConfig = require('./app.config');

webpackConfig.entry.devjs = './javascripts/dev.js';
webpackConfig.entry.devcss = './stylesheets/dev.css';

webpackConfig.output = {
  path: path.resolve('', `./${appConfig.paths.dist.path}`),
  publicPath: '/',
  filename: `${appConfig.paths.dist.javascriptsPath}/${appConfig.bundleNames.js}`,
};

webpackConfig.devtool = 'eval-source-map';

webpackConfig.devServer = {
  contentBase: `${appConfig.paths.dist.path}/`,
  inline: true,
  https: false,
  stats: {
    assets: true,
    chunks: false,
    errors: true,
    errorDetails: true,
    performance: true,
    timings: true,
    warnings: true,
  },
};

module.exports = webpackConfig;
