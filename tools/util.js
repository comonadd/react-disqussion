/* File: util.js */
/* Creation date: 2017-06-13 */
/* Creator: Dmitry Guzeev <dmitry.guzeev@yahoo.com> */
/* Description: */
/* Utility stuff */

const fs = require('fs');
const path = require('path');

/**
 * @summary
 * Print message about the unknown command-line argument
 *
 * @param {string} arg - The argument which caused the error
 *
 * @return {undefined}
 */
module.exports.printUnknownCmdLineArgumentMsg = (arg) =>
  logger.log(logger.msgKind.Error, 'unknown command-line argument: ' + arg);

/**
 * @summary
 * Mirror given source directory to the given destination directory
 *
 * @param {string} src - Path to the source directory.
 * @param {string} dest - Path to the destination directory.
 * @param {string} callback
 *                 Callback. It is called with the following parameters:
 *                  - {string} srcFilePath - The absolute source file path.
 *                  - {string} destFilePath - The absolute destination file path.
 *
 * @return {undefined}
 */
module.exports.mirrorDir = (srcRootDirPath, destRootDirPath, callback) => {
  /**
   * The function that gets called recursively
   */
  const mirrorDir = (srcDirPath, destDirPath) => {

    /* Read the source directory entries */
    fs.readdir(srcDirPath, (err, srcDirEntriesPaths) => {
      if (err) {
        // TODO: Handle error
        console.log('error while reading directory ' + srcDirPath);
        return;
      }

      /* For each entry in the source directory */
      srcDirEntriesPaths.forEach(entryPath => {
        /* Calculate the entry absolute path */
        const absSrcEntryPath = path.resolve(srcDirPath, entryPath);

        /* Stat the source entry */
        fs.lstat(absSrcEntryPath, (err, entryStat) => {
          if (err) {
            // TODO: Handle error
            console.log('error while retrieving information about ' + entryStat);
            return;
          }

          /* Calculate the destination path */
          const absDestEntryPath = path.resolve(destDirPath, entryPath);

          /* If the source entry is directory */
          if (entryStat.isDirectory()) {
            /* Create new directory in the destination directory */
            fs.mkdir(absDestEntryPath, () => {
              /* Call the function recursively on the new paths */
              mirrorDir(absSrcEntryPath, absDestEntryPath);
            });
            return;
          }

          /* Call the callback with the paths */
          callback(absSrcEntryPath, absDestEntryPath);
        });
      });
    });
  };

  /* Call the recursive function on the root paths */
  mirrorDir(srcRootDirPath, destRootDirPath);
};
