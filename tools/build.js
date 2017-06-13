/* File: build.js */
/* Creation date: 2017-06-11 */
/* Creator: Dmitry Guzeev <dmitry.guzeev@yahoo.com> */
/* Description: */
/* `build()` function */

const fs = require('fs');

const webpack = require('webpack');

const config = require('./config');
const logger = require('./logger');
const webpackConfig = require('./webpack_config');

/**
 * Build the project
 *
 * This function builds the project.
 *
 * @return {undefined}
 */
const build = () => {
  /* Make the output directory and build library bundle into it */
  fs.mkdir(config.paths.outDir, () => {
    /* Run Webpack */
    webpack(webpackConfig, (err, stats) => {
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
  });
};

build();
