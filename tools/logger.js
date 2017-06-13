/* File: logger.js */
/* Creation date: 2017-06-11 */
/* Creator: Dmitry Guzeev <dmitry.guzeev@yahoo.com> */
/* Description: */
/* Logger  */

module.exports = {
  msgKind: {
    Info: { prefix: '[-] Info', },
    Error: { prefix: '[!] Error', },
    Warning: { prefix: '[#] Warning', },
  },

  log: (msgKind, msg) => {
    console.info(msgKind.prefix + ': ' + msg);
  },
};
