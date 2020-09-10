import {remove} from 'fs-extra';
import {prepare} from './common';
import logger from './logger';
import {Options} from './model';

export default async function (options: Options): Promise<void> {
  logger.info('clean');
  let opts = prepare(options);
  await remove(opts.output);
}
