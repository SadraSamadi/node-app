import {promisify} from 'util';
import webpack from 'webpack';
import {prepare, print} from './common';
import config from './config';
import logger from './logger';
import {Options} from './model';

export default async function (options: Options): Promise<void> {
  logger.info('build');
  let opts = prepare(options);
  let cfg = await config(opts);
  let compiler = webpack(cfg);
  let run = compiler.run.bind(compiler);
  let stats = await promisify(run)();
  print(stats);
}
