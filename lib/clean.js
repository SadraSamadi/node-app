const {remove} = require('fs-extra');
const {prepare} = require('./common');
const logger = require('./logger');

module.exports = async function (options) {
  logger.info('clean');
  let opts = prepare(options);
  await remove(opts.output);
};
