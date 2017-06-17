/* File: webpack_config.js */
/* Creation date: 2017-06-11 */
/* Creator: Dmitry Guzeev <dmitry.guzeev@yahoo.com> */
/* Description: */
/* This file defines the Webpack configuratio */

const path = require('path');

const webpack = require('webpack');

const config = require('./config');

/**
 * @summary
 * Build the `module` Webpack configuration object based
 * on the given build mode config.
 *
 * @param {object} buildModeConfig - Build mode configuration.
 *
 * @return {object}
 */
const buildModuleWebpackConfig = (buildModeConfig) => ({
  rules: [
    {
      test: /\.js$/,
      exclude: config.NODE_MODULES_DIR_PATH,
      use: [
        {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['react', 'es2015', 'stage-2'],
            plugins: ['transform-react-jsx', ['babel-plugin-root-import', {
              rootPathSuffix: config.SRC_DIR_PATH,
            }]],
          },
        },
      ],
    },
  ],
});

/**
 * @summary
 * Build the Webpack configuration based on a given build mode.
 *
 * @param {number} buildMode - The build mode.
 *
 * @return {object}
 */
module.exports = (buildMode) => {
  const buildModeConfig = config.BUILD_MODE[buildMode];

  return {
    entry: buildModeConfig.entry,
    devtool: buildModeConfig.devtool,
    output: {
      path: buildModeConfig.outputPath,
      filename: buildModeConfig.outputFilename,
      library: config.libName,
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },
    module: buildModuleWebpackConfig(buildModeConfig),
    resolve: {
      extensions: ['.js'],
      modules: [
        __dirname,
        config.SRC_DIR_PATH,
        config.NODE_MODULES_DIR_PATH
      ],
      alias: {
        util: path.resolve(config.SRC_DIR_PATH, 'util'),
      },
    },
    externals: {
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true,
      'react/addons': true,
    },
    plugins: [
      ...(buildModeConfig.minimizeJs ? [new webpack.optimize.UglifyJsPlugin({
        minimize: true,
      })] : []),
    ],
  };
};
