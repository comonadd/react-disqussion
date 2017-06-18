/* File: build.js */
/* Creation date: 2017-06-11 */
/* Creator: Dmitry Guzeev <dmitry.guzeev@yahoo.com> */
/* Description: */
/* Script that builds the project */

const fs = require('fs');
const path = require('path');
const process = require('process');

const webpack = require('webpack');
const babel = require('babel-core');

const constants = require('./constants');
const config = require('./config');
const logger = require('./logger');
const util = require('./util');
const buildWebpackConfig = require('./build_webpack_config');

/**
 * @summary
 * Build the ES modules.
 *
 * @description
 * This function will just run the babel on the whole project source tree
 * and output that in a directory that is specified in a configuration file.
 *
 * @return {undefined}
 */
const buildEsModules = () => {
  const destDir = config.BUILD_MODE[constants.buildMode.ES_MODULES].outputPath;
  fs.mkdir(destDir, () => {
    const babelOptions = {
      ...config.BABEL_OPTIONS,
      compact: false,
      comments: false,
      /* sourceType: 'module',*/
      sourceRoot: config.SRC_DIR_PATH,
      babelrc: false,
      presets: ["react", "stage-2"],
      plugins: [
        ["babel-plugin-root-import", {
          rootPathSuffix: config.SRC_DIR_PATH,
        }],
        ["transform-es2015-template-literals", { loose: true }],
        "transform-es2015-literals",
        "transform-es2015-function-name",
        "transform-es2015-arrow-functions",
        "transform-es2015-block-scoped-functions",
        ["transform-es2015-classes", { loose: true }],
        "transform-es2015-object-super",
        "transform-es2015-shorthand-properties",
        ["transform-es2015-computed-properties", { loose: true }],
        ["transform-es2015-for-of", { loose: true }],
        "transform-es2015-sticky-regex",
        "transform-es2015-unicode-regex",
        "check-es2015-constants",
        ["transform-es2015-spread", { loose: true }],
        "transform-es2015-parameters",
        ["transform-es2015-destructuring", { loose: true }],
        "transform-es2015-block-scoping",
        "transform-object-rest-spread",
        "transform-es3-member-expression-literals",
        "transform-es3-property-literals",
      ],
    };
    util.mirrorDir(config.SRC_DIR_PATH, destDir, (srcFilePath, destFilePath) => {
      logger.log(logger.msgKind.Info, `transforming ${destFilePath}`);
      babel.transformFile(srcFilePath, babelOptions, (err, res) => {
        if (!err) {
          /* Babel successfully transformed a file.
             Write resulting code to the disk. */
          fs.writeFile(
            destFilePath,
            res.code,
            util.writeCheckingCallback(() => process.exit(1)));
        } else {
          /* Babel failed to transform a file.  */
          logger.log(logger.msgKind.Error, `babel failed to transform a file:\n${err}`);
          process.exit(1);
        }
      });
    });
  });
};

/**
 * @summary
 * Build the project with a given build mode.
 *
 * @return {undefined}
 */
const build = (buildMode) => {
  /* Make the output directory and build library into it */
  fs.mkdir(config.BUILD_DIR_PATH, () => {
    if (buildMode == constants.buildMode.ES_MODULES) {
      logger.log(logger.msgKind.Info, 'building es modules');
      /* Just run the babel on each file in the source tree */
      buildEsModules();
    } else {
      /* Run Webpack */
      webpack(buildWebpackConfig(buildMode), (err, stats) => {
        if (!err) {
          /* All is good. There were no errors */
          logger.log(
            logger.msgKind.Info,
            'webpack:\n\n' +
            stats.toString({
              chunks: false,
              colors: true,
            })
          );
        } else {
          /* There were some errors */
          logger.log(
            logger.msgKind.Error,
            'webpack reported some errors while compiling:\n' + err);
        }
      });
    }
  });
};

/**
 * @summary
 * Print "invalid build mode" message and exit.
 *
 * @return {undefined}
 */
const printInvalidBuildModeMessageAndExit = () => {
  logger.log(
    logger.msgKind.Error,
    `invalid build mode: "${givenBuildMode}" specified.`);
  console.info('Try the following:\n');
  for (propName in constants.buildModeNameMapping) {
    console.info(`\t-t ${propName}`);
  }
  exit(1);
}

/**
 * @summary
 * The main function.
 *
 * @return {React.Component}
 */
(() => {
  /* Retrieve the build mode */
  const givenBuildMode = process.argv[2];
  const buildMode = (givenBuildMode === undefined) ? config.DEFAULT_BUILD_MODE :
                    constants.buildModeNameMapping[process.argv[2]];
  if (buildMode === undefined) printInvalidBuildModeMessageAndExit();

  /* Build with a given build mode */
  build(buildMode);
})();
