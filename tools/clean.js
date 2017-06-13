/* File: clean.js */
/* Creation date: 2017-06-13 */
/* Creator: Dmitry Guzeev <dmitry.guzeev@yahoo.com> */
/* Description: */
/* The script that cleans the project tree */

const rimraf = require("rimraf");

const config = require("./config");

/* Remove the temporary directory */
rimraf(config.paths.tmpDir, () => {});

/* Remove the output directory */
rimraf(config.paths.outDir, () => {});
