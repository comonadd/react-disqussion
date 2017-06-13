/* File: index.js */
/* Creation date: 2017-06-11 */
/* Creator: Dmitry Guzeev <dmitry.guzeev@yahoo.com> */
/* Description: */
/* Tests entry point */
/* This file setups the testing environment and imports all other tests */

const context = require.context(__dirname, true, /\.js$/);
context.keys().forEach(context);
module.exports = context;
