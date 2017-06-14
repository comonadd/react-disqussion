/* File: documentation-manager.js */
/* Creation date: 2017-06-13 */
/* Creator: Dmitry Guzeev <dmitry.guzeev@yahoo.com> */
/* Description: */
/* This script manages the documentation of the project */

const process = require('process');

const rimraf = require('rimraf');
const jsdoc2md = require('jsdoc-to-markdown');
const readdirRec = require('readdir-recursive');
const fs = require('fs');
const path = require('path');

const config = require('./config');
const util = require('./util');
const logger = require('./logger');

const mapSourcePathToDocPath = (path) =>
  path.replace(config.paths.srcDir, config.paths.documentationDir);

/**
 * @summary
 * Generate the documentation for the project
 *
 * @description
 * This function generates the documentation in the Markdown format
 *
 *
 * @return {undefined}
 */
const gen = () => {
  fs.mkdir(config.paths.documentationDir, () => {
    /* Generate the full documentation file */
    jsdoc2md.render({ files: path.resolve(config.paths.srcDir, '**/*.js') }).then((documentation) =>
      fs.writeFile(path.resolve(config.paths.documentationDir, 'full.md'), documentation, (err) => {
        // TODO: Handle error
        if (!err) {
          logger.log(logger.msgKind.Info, 'generated full documentation file');
        }
      }));

    /* Generate documentation for each source file */
    fs.mkdir(config.paths.modulesDocumentationDir, () => {
      util.mirrorDir(config.paths.srcDir, config.paths.modulesDocumentationDir, (srcPath, destPath) => {
        jsdoc2md.render({ files: srcPath }).then((documentation) => {
          destPath = destPath.replace(path.extname(destPath), '.md');
          fs.writeFile(destPath, documentation, (err) => {
            // TODO: Handle error
            if (!err) {
              logger.log(
                logger.msgKind.Info,
                'generated documentation for "' + path.relative('.', srcPath) + '"');
            }
          });
        });
      });
    });
  });
};

/**
 * @summary
 * Clean the documentation
 *
 * @return {undefined}
 */
const clean = () => {
  /* Delete the directory that contains the documentation */
  rimraf(config.paths.documentationDir, () => {});
};

/**
 * @summary
 * The main function
 *
 * @return {undefined}
 */
const main = () => {
  switch (process.argv[2]) {
    case 'gen': gen(); break;
    case 'clean': clean(); break;
    default: util.printUnknownCmdLineArgumentMsg(process.argv[2]);
  }
}

/* Run the main function */
main();
