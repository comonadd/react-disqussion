/* File: index.js */
/* Creation date: 2017-06-12 */
/* Creator: Dmitry Guzeev <dmitry.guzeev@yahoo.com> */
/* Description: */
/* Utility stuff */

/**
 * @module util
 * @description
 * The module that contains all the utility stuff
 */

/**
 * @summary
 * Make a new Disqus configuration function with a given configuration.
 *
 * @param config {Object} - The configuration object that is described below
 * @param config.identifier {string} - The Disqus thread identifier
 * @param config.url {string} - The Disqus thread URL
 * @param config.title {string} - The Disqus thread title
 * @param config.categoryID {string} - The Disqus thread category ID
 * @param config.callbacks {Object} - The object which contains the callback arrays
 *
 * @description
 * This function constructs a new Disqus configuration function,
 * which is used in order to configure Disqus.
 *
 * @returns {Function}
 */
let makeDisqusConfigFunc = ({identifier, url, title, categoryID, callbacks}) =>
  function () {
    this.page.identifier = identifier;
    this.page.url = url;
    this.page.title = title;
    this.page.category_id = categoryID;
    this.callbacks = callbacks;
  };
export let makeDisqusConfigFunc;

/**
 * Construct a Disqus embed script URL from a given shortname
 *
 * @param shortname {string} - The shortname of the Disqus forum
 *
 * @returns {string}
 */
let makeDisqusEmbedScriptUrl = (shortname) =>
  "//" + shortname + ".disqus.com/embed.js";
export let makeDisqusEmbedScriptUrl;

/**
 * Construct a Disqus comment counters script URL from a given shortname
 *
 * @param shortname {string} - The shortname of the Disqus forum
 *
 * @returns {string}
 */
let makeDisqusCommentCountersScriptUrl = (shortname) =>
  "//" + shortname + ".disqus.com/count.js";
export let makeDisqusCommentCountersScriptUrl;

export default {
  makeDisqusConfigFunc,
  makeDisqusEmbedScriptUrl,
  makeDisqusCommentCountersScriptUrl,
};
