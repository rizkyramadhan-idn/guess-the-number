const path = require('path');

const webpackConfig = require('./webpack.config');
const appConfig = require('./app.config');

webpackConfig.entry.dev = './javascripts/dev.js';

webpackConfig.output = {
  path: path.resolve('', `./${appConfig.paths.dist.path}`),
  publicPath: '/',
  filename: `${appConfig.paths.dist.javascriptsPath}/${appConfig.bundleNames.js}`,
};

webpackConfig.devtool = 'eval-source-map';

webpackConfig.devServer = {
  noInfo: false,
  hot: true,
  contentBase: `${appConfig.paths.dist.path}/`,
};

module.exports = webpackConfig;
