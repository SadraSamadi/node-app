#!/usr/bin/env node

import yargs from 'yargs';
import {build, clean, Options} from './';

yargs
  .scriptName('node-app-scripts')
  .usage('Usage: $0 command [options]')
  .command<Options>({
    command: 'clean',
    aliases: 'c',
    describe: 'Clean up.',
    handler: clean
  })
  .command<Options>({
    command: 'build',
    aliases: 'b',
    describe: 'Build sources.',
    builder: args => args.options({
      override: {
        alias: 'r',
        type: 'string',
        desc: 'Webpack configuration overrider.',
        default: 'webpack.override.js'
      },
      prod: {
        alias: 'p',
        type: 'boolean',
        desc: 'Enable production mode.',
        default: false
      },
      node: {
        alias: 'n',
        type: 'boolean',
        desc: 'Enable node environment.',
        default: false
      }
    }),
    handler: build
  })
  .options({
    input: {
      alias: 'i',
      type: 'string',
      desc: 'Input directory.',
      default: 'src'
    },
    output: {
      alias: 'o',
      type: 'string',
      desc: 'Output directory.',
      default: 'dist'
    }
  })
  .demandCommand()
  .alias('v', 'version')
  .alias('h', 'help')
  .version()
  .help()
  .parse();
