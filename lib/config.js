const TerserPlugin = require('terser-webpack-plugin');
const {ProgressPlugin} = require('webpack');
const externals = require('webpack-node-externals');
const logger = require('./logger');

module.exports = async function (opts) {
  logger.info('config');
  return {
    context: opts.input,
    entry: './',
    mode: opts.prod ? 'production' : 'development',
    output: {
      filename: 'index.js'
    },
    module: {
      rules: [
        {
          test: /\.[jt]s$/,
          include: opts.input,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/env', {
                useBuiltIns: 'usage',
                corejs: 3
              }],
              ['@babel/preset-typescript']
            ],
            plugins: [
              ['babel-plugin-transform-typescript-metadata'],
              ['@babel/plugin-proposal-decorators', {
                legacy: true
              }],
              ['@babel/plugin-proposal-class-properties', {
                loose: true
              }],
              ['@babel/plugin-transform-runtime']
            ],
            inputSourceMap: true,
            sourceMaps: true
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.ts']
    },
    optimization: {
      minimize: opts.prod,
      minimizer: [
        new TerserPlugin({
          sourceMap: true
        })
      ]
    },
    plugins: [
      new ProgressPlugin()
    ],
    devtool: opts.prod ? false : 'cheap-module-source-map',
    target: opts.node ? 'node' : undefined,
    externals: opts.node ? externals() : undefined,
    node: opts.node ? false : undefined
  };
};
