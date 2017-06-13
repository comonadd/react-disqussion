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

const buildEnvConfig = {
  'commonjs': {
    outputPath: config.paths.commonJsBuildOutDir,
    outputFilename: 'index.js',
    outputLibraryTarget: 'commonjs',
  },
  'es': {
    outputPath: config.paths.esBuildOutDir,
    outputFilename: "index.js",
    outputLibraryTarget: 'var',
  },
  'umd': {
    outputPath: config.paths.umdBuildOutDir,
    outputFilename: "lib.js",
    outputLibraryTarget: 'umd',
  },
  'umd-min': {
    outputPath: config.paths.umdBuildOutDir,
    outputFilename: "lib.min.js",
    outputLibraryTarget: 'umd',
  },
  'test': {
    outputPath: config.paths.tmpDir,
    outputFilename: "lib.js",
    outputLibraryTarget: 'var',
  },
};

const buildWebpackConfig = () => {
  const buildEnv = process.env.BUILD_ENV;
  const buildingCommonJs = buildEnv == 'commonjs';
  const buildingEs = buildEnv == 'es';
  const buildingUmd = buildEnv == 'umd';
  const buildingUmdMin = buildEnv == 'umd-min';
  const buildingTests = buildEnv == 'test';

  const buildEnvCurrentConfig = buildEnvConfig[buildEnv];

  return {
    entry: buildingTests ? null : config.paths.entryFile,
    devtool: buildingTests ? 'inline-source-map' : false,
    output: {
      path: buildEnvConfig[buildEnv].outputPath,
      filename: buildEnvConfig[buildEnv].outputFilename,
      library: config.libName,
      libraryTarget: buildEnvConfig[buildEnv].outputLibraryTarget,
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
    plugins: [
      ...(buildingUmdMin ? [new UglifyJSWebpackPlugin({
        minimize: true,
      })] : []),
    ],
  };
};

module.exports = buildWebpackConfig();
