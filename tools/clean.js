/* File: clean.js */
/* Creation date: 2017-06-13 */
/* Creator: Dmitry Guzeev <dmitry.guzeev@yahoo.com> */
/* Description: */
/* The script that cleans the project tree */

const rimraf = require('rimraf');

const config = require('./config');

const removePath = (path) => rimraf(path, () => {});

/* Remove the temporary directory */
removePath(config.TMP_DIR_PATH);

/* Remove the dist directory */
removePath(config.BUILD_DIR_PATH);
