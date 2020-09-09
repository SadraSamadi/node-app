const {promisify} = require('util');
const webpack = require('webpack');
const {prepare, print} = require('./common');
const config = require('./config');
const logger = require('./logger');

module.exports = async function (options) {
  logger.info('build');
  let opts = prepare(options);
  let cfg = await config(opts);
  let compiler = webpack(cfg);
  let run = compiler.run.bind(compiler);
  let stats = await promisify(run)();
  print(stats);
};
