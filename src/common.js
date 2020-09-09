const _ = require('lodash');
const {resolve} = require('path');
const logger = require('./logger');

exports.prepare = function (opts) {
  logger.info('prepare');
  return _.assign({}, opts, {
    input: resolve(opts.input),
    output: resolve(opts.output)
  });
};

exports.print = function (stats) {
  let str = stats.toString({
    colors: true
  });
  console.log(str);
};
