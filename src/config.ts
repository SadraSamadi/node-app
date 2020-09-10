import TerserPlugin from 'terser-webpack-plugin';
import {Configuration, ProgressPlugin} from 'webpack';
import externals from 'webpack-node-externals';
import logger from './logger';
import {Options} from './model';

export default async function (opts: Options): Promise<Configuration> {
  logger.info('config');
  return {
    context: opts.input,
    entry: './',
    mode: opts.prod ? 'production' : 'development',
    output: {filename: 'index.js'},
    module: {
      rules: [
        {
          test: /\.[jt]s$/,
          include: opts.input,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/env', {useBuiltIns: 'usage', corejs: 3}],
              ['@babel/preset-typescript']
            ],
            plugins: [
              ['babel-plugin-transform-typescript-metadata'],
              ['@babel/plugin-proposal-decorators', {legacy: true}],
              ['@babel/plugin-proposal-class-properties', {loose: true}],
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
        new TerserPlugin({sourceMap: true})
      ]
    },
    plugins: [
      new ProgressPlugin()
    ],
    devtool: opts.prod ? false : 'cheap-module-source-map',
    target: opts.node ? 'node' : void 0,
    externals: opts.node ? externals() : void 0,
    node: opts.node ? false : void 0
  };
}
