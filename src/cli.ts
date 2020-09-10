#!/usr/bin/env node

import yargs from 'yargs';
import {build, clean, Options} from './';

yargs
  .scriptName('node-app-scripts')
  .usage('Usage: $0 command [options]')
  .command<Options>({
    command: 'clean',
    describe: 'Clean up.',
    handler: clean
  })
  .command<Options>({
    command: 'build',
    describe: 'Build sources.',
    builder: args => args.options({
      prod: {
        type: 'boolean',
        desc: 'Enable production mode.',
        default: false
      },
      node: {
        type: 'boolean',
        desc: 'Enable node environment.',
        default: false
      }
    }),
    handler: build
  })
  .options({
    input: {
      type: 'string',
      desc: 'Input directory.',
      default: 'src'
    },
    output: {
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
