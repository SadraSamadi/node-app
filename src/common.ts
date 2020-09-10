import _ from 'lodash';
import {resolve} from 'path';
import {Stats} from 'webpack';
import logger from './logger';
import {Options} from './model';

export function prepare(opts: Options): Options {
  logger.info('prepare');
  return _.assign({}, opts, {
    input: resolve(opts.input),
    output: resolve(opts.output),
    override: opts.override && resolve(opts.override)
  });
}

export function print(stats: Stats): void {
  let str = stats.toString({colors: true});
  console.log(str);
}
