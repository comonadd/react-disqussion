/* File: config.js */
/* Creation date: 2017-06-11 */
/* Creator: Dmitry Guzeev <dmitry.guzeev@yahoo.com> */
/* Description: */
/* This file contains the configuration of the project */

const path = require('path');

const DEV_BUNDLE_FILE_NAME = 'lib.js';
const RELEASE_BUNDLE_FILE_NAME = 'lib.min.js';
const TESTS_BUNDLE_FILE_NAME = 'lib-tests.js';

const TOOLS_DIR_PATH = __dirname;
const PROJECT_DIR_ROOT_PATH = path.resolve(TOOLS_DIR_PATH, '..');
const SRC_DIR_PATH = path.resolve(PROJECT_DIR_ROOT_PATH, 'src');
const OUT_DIR_PATH = path.resolve(PROJECT_DIR_ROOT_PATH, 'dist');
const ENTRY_FILE_PATH = path.resolve(SRC_DIR_PATH, 'index.js');
const DEV_BUNDLE_FILE_PATH = path.resolve(OUT_DIR_PATH, DEV_BUNDLE_FILE_NAME);
const RELEASE_BUNDLE_FILE_PATH = path.resolve(OUT_DIR_PATH, RELEASE_BUNDLE_FILE_NAME);
const TEST_BUNDLE_FILE_PATH = path.resolve(OUT_DIR_PATH, TESTS_BUNDLE_FILE_NAME);
const NODE_MODULES_DIR_PATH = path.resolve(PROJECT_DIR_ROOT_PATH, 'node_modules');
const TESTS_DIR_PATH = path.resolve(PROJECT_DIR_ROOT_PATH, 'tests');
const TMP_DIR_PATH = path.resolve(PROJECT_DIR_ROOT_PATH, 'tmp');
const TESTS_ENTRY_FILE_PATH = path.resolve(TESTS_DIR_PATH, 'index.js');

module.exports = {
  libName: 'ReactDisqussion',
  devBundleFileName: DEV_BUNDLE_FILE_NAME,
  releaseBundleFileName: RELEASE_BUNDLE_FILE_NAME,
  testsBundleFileName: TESTS_BUNDLE_FILE_NAME,
  paths: {
    toolsDir: TOOLS_DIR_PATH,
    rootDir: PROJECT_DIR_ROOT_PATH,
    srcDir: SRC_DIR_PATH,
    outDir: OUT_DIR_PATH,
    entryFile: ENTRY_FILE_PATH,
    devBundleFile: DEV_BUNDLE_FILE_PATH,
    releaseBundleFile: RELEASE_BUNDLE_FILE_PATH,
    testsBundleFile: TEST_BUNDLE_FILE_PATH,
    nodeModulesDir: NODE_MODULES_DIR_PATH,
    testsDir: TESTS_DIR_PATH,
    tmpDir: TMP_DIR_PATH,
  },
};
