/* File: index.js */
/* Creation date: 2017-06-10 */
/* Creator: Dmitry Guzeev <dmitry.guzeev@yahoo.com> */
/* Description: */
/* The `Thread` component */

/**
 * @module components/thread
 * @description
 * The module that defines the `Thread` component.
 */

import React from "react";
import PropTypes from "prop-types";

/**
 * @constant {Object}
 *
 * @summary
 * The `Thread` component context types.
 */
const THREAD_CONTEXT_TYPES = {
  disqussion: PropTypes.shape({
    setDisqusConfig: PropTypes.func,
    reloadDisqus: PropTypes.func,
    loadDisqusEmbedScript: PropTypes.func,
    disqusEmbedScriptLoaded: PropTypes.bool,
  }),
};

/**
 * @constant {Object}
 *
 * @summary
 * The property types of the `Thread` component
 *
 * @property identifier {String} - The unique identifier of the thread
 * @property title {String} - The title of the thread
 * @property url {String} - The url of the thread
 * @property categoryID {String} - The thread category ID
 * @property afterRender {Function} - "afterRender" Disqus callback
 * @property beforeComment {Function} - "beforeRender" Disqus callback
 * @property onIdentify {Function} - "onIdentity" Disqus callback
 * @property onNewComment {Function} - Function that gets called when new
 *           comment is posted in this thread.
 * @property onInit {Function} - "onInit" Disqus callback
 * @property onPaginate {Function} - "onPaginate" Disqus callback
 * @property onReady {Function} - "onReady" Disqus callback
 * @property preData {Function} - "preData" Disqus callback
 * @property preReset {Function} - "preReset" Disqus callback
 */
const THREAD_PROP_TYPES = {
  identifier: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  categoryID: PropTypes.string,
  onNewComment: PropTypes.func,
  afterRender: PropTypes.func,
  beforeComment: PropTypes.func,
  onIdentify: PropTypes.func,
  onInit: PropTypes.func,
  onNewComment: PropTypes.func,
  onPaginate: PropTypes.func,
  onReady: PropTypes.func,
  preData: PropTypes.func,
  preReset: PropTypes.func,
};

/**
 * The component that represents the Disqus thread.
 *
 * @extends React.Component
 *
 * @description
 * The `Thread` component represents the Disqus thread.
 */
class Thread extends React.Component {

  /**
   * @summary
   * Construct a new `Thread` object
   */
  constructor(...args) {
    /* Call the super function */
    super(...args);

    /* Bind the methods to the object */
    this.configureDisqus = this.configureDisqus.bind(this);
  }

  /**
   * @summary
   * Configure the Disqus for this thread
   *
   * @description
   * This function reloads the Disqus configuration in order to this
   * thread to show proper data.
   *
   * @returns {undefined}
   */
  configureDisqus() {
    /* Set the configuration */
    /* NOTE: `this.props` matches the format that is required    */
    /*       to `setDisqusConfig()` function to work, so pass it */
    /*       instead of ~10 lines of unneeded code               */
    this.context.disqussion.setDisqusConfig(this.props, () => {
      if (this.context.disqussion.disqusEmbedScriptLoaded) {
        /* Disqus script is already loaded, reload Disqus configuration */
        this.context.disqussion.reloadDisqus();
      } else {
        /* Disqus script is not already loaded, load it */
        this.context.disqussion.loadDisqusEmbedScript();
      }
    });
  }

  /**
   * @summary
   * The `componentDidMount` function
   */
  componentDidMount() {
    this.configureDisqus();
  }

  /**
   * @summary
   * Render the component
   */
  render() {
    return <div id="disqus_thread"></div>;
  }
};

Thread.contextTypes = THREAD_CONTEXT_TYPES;
Thread.propTypes = THREAD_PROP_TYPES;

export default Thread;
