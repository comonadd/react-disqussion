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

export
/**
 * @summary
 * Make a new Disqus configuration function with a given configuration.
 *
 * @param {Object} config - The configuration object that is described below
 * @param {string} config.identifier - The Disqus thread identifier
 * @param {string} config.url - The Disqus thread URL
 * @param {string} config.title - The Disqus thread title
 * @param {string} config.categoryID - The Disqus thread category ID
 * @param {Object} config.callbacks
 *                 The object which contains the callback arrays
 *
 * @description
 * This function constructs a new Disqus configuration function,
 * which is used in order to configure Disqus.
 *
 * @return {Function}
 */
let makeDisqusConfigFunc = ({identifier, url, title, categoryID, callbacks}) =>
  function() {
    /* eslint-disable */
    this.page.identifier = identifier;
    this.page.url = url;
    this.page.title = title;
    this.page.category_id = categoryID;
    this.callbacks = callbacks;
    /* eslint-enable */
  };

export
/**
 * Construct a Disqus embed script URL from a given shortname
 *
 * @param {string} shortname - The shortname of the Disqus forum
 *
 * @return {string}
 */
let makeDisqusEmbedScriptUrl = (shortname) =>
  '//' + shortname + '.disqus.com/embed.js';

export
/**
 * Construct a Disqus comment counters script URL from a given shortname
 *
 * @param {string} shortname - The shortname of the Disqus forum
 *
 * @return {string}
 */
let makeDisqusCommentCountersScriptUrl = (shortname) =>
  '//' + shortname + '.disqus.com/count.js';

export default {
  makeDisqusConfigFunc,
  makeDisqusEmbedScriptUrl,
  makeDisqusCommentCountersScriptUrl,
};
