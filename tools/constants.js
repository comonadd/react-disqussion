/* File: constants.js */
/* Creation date: 2017-06-16 */
/* Creator: Dmitry Guzeev <dmitry.guzeev@yahoo.com> */
/* Description: */
/* The constants used by tools */

/**
 * @summary
 * Build mode enumeration.
 */
let buildMode = module.exports.buildMode = {
  COMMONJS: 0,
  ES_MODULES: 1,
  UMD: 2,
  UMD_MIN: 3,
};

/**
 * @summary
 * Mapping between build modes and their names.
 */
module.exports.buildModeNameMapping = {
  'commonjs': buildMode.COMMONJS,
  'es': buildMode.ES_MODULES,
  'umd': buildMode.UMD,
  'umd-min': buildMode.UMD_MIN,
};
