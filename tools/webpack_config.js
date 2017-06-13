/* File: webpack_config.js */
/* Creation date: 2017-06-11 */
/* Creator: Dmitry Guzeev <dmitry.guzeev@yahoo.com> */
/* Description: */
/* This file defines the Webpack configuratio */

const process = require('process');
const path = require('path');

const webpack = require('webpack');
const UglifyJSWebpackPlugin = webpack.optimize.UglifyJsPlugin;

const config = require('./config');

const buildWebpackConfig = () => {
  const buildingDev = process.env.BUILD_ENV == 'dev';
  const buildingRelease = process.env.BUILD_ENV == 'release';
  const buildingTests = process.env.BUILD_TESTS == '1';

  return {
    entry: buildingTests ? null : config.paths.entryFile,
    devtool: buildingDev ? (buildingTests ? 'inline-source-map' : 'source-map') : false,
    output: {
      path: config.paths.outDir,
      filename: buildingDev ? config.devBundleFileName :
                (buildingTests ? config.testsBundleFileName :
                 config.releaseBundleFileName),
      library: config.libName,
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: config.paths.nodeModulesDir,
          use: [
            {
              loader: 'babel-loader',
              options: {
                babelrc: false,
                presets: ['react', 'es2015', 'stage-2'],
                cacheDirectory: true,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js'],
      modules: [
        __dirname,
        config.paths.srcDir,
        config.paths.nodeModulesDir
      ],
      alias: {
        util: path.resolve(config.paths.srcDir, "util"),
      },
    },
    externals: {
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true,
      'react/addons': true,
    },
    plugins: buildingTests ? undefined : [
      ...(buildingRelease ? [new UglifyJSWebpackPlugin({
        minimize: true,
      })] : []),
    ],
  };
};

module.exports = buildWebpackConfig();
