/* File: config.js */
/* Creation date: 2017-06-11 */
/* Creator: Dmitry Guzeev <dmitry.guzeev@yahoo.com> */
/* Description: */
/* This file contains the configuration of the project */

const path = require('path');

const constants = require('./constants');

const LIB_NAME = module.exports.LIB_NAME = 'ReactDisqussion';

const TOOLS_DIR_PATH =
  module.exports.TOOLS_DIR_PATH = __dirname;

const ROOT_DIR_PATH =
  module.exports.ROOT_DIR_PATH =
    path.resolve(TOOLS_DIR_PATH, '..');

const SRC_DIR_PATH =
  module.exports.SRC_DIR_PATH =
    path.resolve(ROOT_DIR_PATH, 'src');

const BUILD_DIR_PATH =
  module.exports.BUILD_DIR_PATH =
    path.resolve(ROOT_DIR_PATH, 'build');

const ENTRY_FILE_PATH =
  module.exports.ENTRY_FILE_PATH =
    path.resolve(SRC_DIR_PATH, 'index.js');

const NODE_MODULES_DIR_PATH =
  module.exports.NODE_MODULES_DIR_PATH =
    path.resolve(ROOT_DIR_PATH, 'node_modules');

const TESTS_DIR_PATH =
  module.exports.TESTS_DIR_PATH =
    path.resolve(ROOT_DIR_PATH, 'tests');

const TMP_DIR_PATH =
  module.exports.TMP_DIR_PATH =
    path.resolve(ROOT_DIR_PATH, 'tmp');

const TESTS_ENTRY_FILE_PATH =
  module.exports.TESTS_ENTRY_FILE_PATH =
    path.resolve(TESTS_DIR_PATH, 'index.js');

const DOCUMENTS_DIR_PATH =
  module.exports.DOCUMENTS_DIR_PATH =
    path.resolve(ROOT_DIR_PATH, 'docs');

const DOCUMENTATION_DIR_PATH =
  module.exports.DOCUMENTATION_DIR_PATH =
    path.resolve(DOCUMENTS_DIR_PATH, 'documentation');

const MODULES_DOCUMENTATION_DIR_PATH =
  module.exports.MODULES_DOCUMENTATION_DIR_PATH =
    path.resolve(DOCUMENTATION_DIR_PATH, 'modules');

const DEFAULT_BUILD_MODE =
  module.exports.DEFAULT_BUILD_MODE =
    constants.buildMode.UMD;

/**
 * @summary
 * The configuration of the build modes.
 */
module.exports.BUILD_MODE = {
  [constants.buildMode.COMMONJS]: {
    entry: path.resolve(SRC_DIR_PATH, 'index.js'),
    devtool: false,
    outputPath: path.resolve(BUILD_DIR_PATH, 'lib'),
    outputFilename: 'index.js',
    minimizeJs: false,
  },
  [constants.buildMode.ES_MODULES]: {
    entry: path.resolve(SRC_DIR_PATH, 'index.js'),
    devtool: false,
    outputPath: path.resolve(BUILD_DIR_PATH, 'es'),
    outputFilename: 'index.js',
    minimizeJs: false,
  },
  [constants.buildMode.UMD]: {
    entry: path.resolve(SRC_DIR_PATH, 'index.js'),
    devtool: false,
    outputPath: BUILD_DIR_PATH,
    outputFilename: 'lib.js',
    minimizeJs: false,
  },
  [constants.buildMode.UMD_MIN]: {
    entry: path.resolve(SRC_DIR_PATH, 'index.js'),
    devtool: false,
    outputPath: BUILD_DIR_PATH,
    outputFilename: 'lib.min.js',
    minimizeJs: true,
  },
  [constants.buildMode.TEST]: {
    entry: null,
    outputPath: TMP_DIR_PATH,
    devtool: 'inline-source-map',
    outputFilename: 'lib.js',
    minimizeJs: false,
  },
};
