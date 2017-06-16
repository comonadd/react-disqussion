/* File: karma.conf.js */
/* Creation date: 2017-06-11 */
/* Creator: Dmitry Guzeev <dmitry.guzeev@yahoo.com> */
/* Description: */
/* Karma configuration */

const projectConfig = require('./config');
const buildWebpackConfig = require('./build_webpack_config');
const constants = require('./constants');

module.exports = config => {
  config.set({
    /* The base path */
    basePath: projectConfig.ROOT_DIR_PATH,

    /* Browsers to use */
    browsers: ['PhantomJS'],

    /* Testing frameworks to use */
    frameworks: ['mocha', 'chai'],

    /* Tests entry points */
    files: [
      'tests/index.js',
    ],

    /* Excluded files */
    exclude: [],

    /* Preprocessors to use for each test file */
    preprocessors: {
      'tests/index.js': ['webpack', 'sourcemap'],
    },

    /* Plugins to use */
    plugins: [
      'karma-chai',
      'karma-mocha',
      'karma-phantomjs-launcher',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-nyan-reporter',
    ],

    /* Reporters */
    reporters: ['nyan'],

    /* Nyan reporter configuration */
    nyanReporter: {
      suppressErrorHighlighting: true,
    },

    /* Webpack preprocessor configuration */
    webpack: buildWebpackConfig(constants.buildMode.TESTS),
    webpackMiddleware: {
      noInfo: false,
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
  })
}
