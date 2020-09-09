#!/usr/bin/env node

const yargs = require('yargs');
const {clean, build} = require('./');
const {name} = require('../package.json');

yargs
  .scriptName(name)
  .usage('Usage: $0 command [options]')
  .command({
    command: 'clean',
    describe: 'Clean up.',
    handler: clean
  })
  .command({
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
  .demandCommand()
  .options({
    input: {
      type: 'string',
      default: 'src'
    },
    output: {
      type: 'string',
      default: 'dist'
    }
  })
  .alias('v', 'version')
  .alias('h', 'help')
  .version()
  .help()
  .parse();
