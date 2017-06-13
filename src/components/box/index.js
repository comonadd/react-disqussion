/* File: index.js */
/* Creation date: 2017-06-10 */
/* Creator: Dmitry Guzeev <dmitry.guzeev@yahoo.com> */
/* Description: */
/* The `Box` component */

/**
 * @module components/box
 * @description
 * The module that defines the `Box` component.
 */

import React from "react";
import PropTypes from "prop-types";

import {
  makeDisqusConfigFunc,
  makeDisqusEmbedScriptUrl,
  makeDisqusCommentCountersScriptUrl,
} from "util";

/**
 * @summary
 * Disqus embed script ID
 *
 * @description
 * This is the ID of the Disqus embed script node.
 */
const DISQUS_EMBED_SCRIPT_ID = "dsq-embed-scr";

/**
 * @summary
 * Disqus comment counters script ID
 *
 * @description
 * This is an ID of the Disqus comment counters script node.
 */
const DISQUS_COMMENT_COUNTERS_SCRIPT_ID = "dsq-count-scr";

/**
 * @constant {Object}
 *
 * @summary
 * The `Box` component children context types.
 *
 * @property disqussion {Object}
 *           The object that wraps the library context.
 *
 * @property disqussion.setDisqusConfig {Function}
 *           The `Box.setDisqusConfig()` function.
 *
 * @property disqussion.reloadDisqus {Function}
 *           The `Box.reloadDisqus()` function.
 *
 * @property disqussion.loadDisqusEmbedScript {Function}
 *           The `Box.loadDisqusEmbedScript()` function.
 *
 * @property disqussion.loadDisqusCommentCountersScript {Function}
 *           The `Box.loadDisqusCommentCountersScript()` function.
 *
 * @property disqussion.updateDisqusCommentCounters {Function}
 *           The `Box.updateDisqusCommentCounters()` function.
 *
 * @property disqussion.disqusEmbedScriptLoaded {boolean}
 *           Boolean flag that is true if the Disqus embed script is
 *           already loaded. It is false otherwise.
 *
 * @property disqussion.disqusEmbedScriptLoading {boolean}
 *           Boolean flag that is true if the Disqus embed script is
 *           loading at the moment. It is false otherwise.
 *
 * @property disqussion.disqusCommentCountersScriptoaded {boolean}
 *           Boolean flag that is true if the Disqus comment counters script is
 *           already loaded. It is false otherwise.
 *
 * @property disqussion.disqusCommentCountersScriptoading {boolean}
 *           Boolean flag that is true if the Disqus comment counters script is
 *           loading at the moment. It is false otherwise.
 */
const BOX_CHILD_CONTEXT_TYPES = {
  disqussion: PropTypes.shape({
    setDisqusConfig: PropTypes.func,
    reloadDisqus: PropTypes.func,
    loadDisqusEmbedScript: PropTypes.func,
    loadDisqusCommentCountersScript: PropTypes.func,
    updateDisqusCommentCounters: PropTypes.bool,
    disqusEmbedScriptLoaded: PropTypes.bool,
    disqusEmbedScriptLoading: PropTypes.bool,
    disqusCommentCountersScriptLoaded: PropTypes.bool,
    disqusCommentCountersScriptLoading: PropTypes.bool,
  }),
};

/**
 * @constant {Object}
 *
 * @summary
 * The `Box` component property types.
 *
 * @property shortname {String}
 *           The shortname of the Disqus forum.
 */
const BOX_PROP_TYPES = {
  shortname: PropTypes.string.isRequired,
};


/**
 * The main library component.
 *
 * @extends React.Component
 *
 * @description
 * <p>
 * The main purpose of the `Box` component is to provide a context to
 * the other library components.
 * </p>
 *
 * <p>
 * All other library components should be in the subtree of the `Box`
 * component.
 * </p>
 */
class Box extends React.Component {

  /**
   * @summary
   * Construct a new `Box` object.
   */
  constructor(...args) {
    /* Call the super function */
    super(...args);

    /* Bind the methods to this object */
    this.setDisqusConfig = this.setDisqusConfig.bind(this);
    this.reloadDisqus = this.reloadDisqus.bind(this);
    this.updateDisqusCommentCounters = this.updateDisqusCommentCounters.bind(this);
    this.loadDisqusEmbedScript = this.loadDisqusEmbedScript.bind(this);
    this.loadDisqusCommentCountersScript = this.loadDisqusCommentCountersScript.bind(this);

    /* Set the initial state */
    this.state = {
      disqusEmbedScriptLoaded: false,
      disqusEmbedScriptLoading: false,
      disqusCommentCountersScriptLoaded: false,
      disqusCommentCountersScriptLoding: false,
      config: {
        identifier: undefined,
        url: undefined,
        title: undefined,
        categoryID: undefined,
        callbacks: {
          afterRender: [],
          beforeComment: [],
          onIdentify: [],
          onInit: [],
          onNewComment: [],
          onPaginate: [],
          onReady: [],
          preData: [],
          preReset: [],
        },
      },
    };
  }

  /**
   * @summary
   * Load Disqus embed script.
   *
   * @description
   * This function loads the Disqus `embed.js` script
   * which is used in order embed the Disqus into the webpage.
   *
   * @returns {undefined}
   */
  loadDisqusEmbedScript() {
    /* If we already started loading the script, return */
    if (this.state.disqusEmbedScriptLoading) return;

    /* Construct a new Disqus configuration function and set it in the global scope */
    const disqusConfigFunc = makeDisqusConfigFunc(this.state.config);
    window.disqus_config = disqusConfigFunc;

    /* Create a new script element */
    let scriptElem = document.createElement("script");
    scriptElem.onload = () => {
      /* Set "loaded" status to false */
      this.state.disqusEmbedScriptLoaded = true;
      /* Set "loading" status to false */
      this.state.disqusEmbedScriptLoading = false;
    };
    scriptElem.id = DISQUS_EMBED_SCRIPT_ID;
    scriptElem.setAttribute("data-timestamp", +new Date());
    scriptElem.src = makeDisqusEmbedScriptUrl(this.props.shortname);

    /* Set "loading" status to true */
    this.state.disqusEmbedScriptLoading = true;

    /* Append the script and start to load it */
    document.body.appendChild(scriptElem);
  }

  /**
   * @summary
   * Load Disqus comment counters script.
   *
   * @description
   * This function loads the Disqus `count.js` script
   * which is used in order to add comment counters
   * widgets to the page.
   *
   * @returns {undefined}
   */
  loadDisqusCommentCountersScript() {
    /* If we already started loading it, return */
    if (this.state.disqusCommentCountersScriptLoading) return;

    /* Create a new script element */
    let scriptElem = document.createElement("script");
    scriptElem.onload = () => {
      /* Set "loaded" status to false */
      this.state.disqusCommentCountersScriptLoaded = true;
      /* Set "loading" status to false */
      this.state.disqusCommentCountersScriptLoading = false;
    };
    scriptElem.id = DISQUS_COMMENT_COUNTERS_SCRIPT_ID;
    scriptElem.src = makeDisqusCommentCountersScriptUrl(this.props.shortname);

    /* Set "loading" status to true */
    this.state.disqusCommentCountersScriptLoading = true;

    /* Append the script and start to load it */
    document.body.appendChild(scriptElem);
  }

  /**
   * @summary
   * Reload the Disqus configuration.
   *
   * @description
   * This function reloads the Disqus configuration.
   * It requires to Disqus library to be already initialized.
   * The user is not required to use this function. It is used
   * internally.
   *
   * @returns {undefined}
   */
  reloadDisqus() {
    DISQUS.reset({
      reload: true,
      config: makeDisqusConfigFunc(this.state.config),
    });
  }

  /**
   * @summary
   * Set the given Disqus configuration for the `Box` component.
   *
   * @description
   * This function sets the given Disqus configuration *only*
   * for the `Box` component object. It will *not* update the
   * current configuration of the Disqus scripts.
   *
   * @param config {Object} - The configuration object.
   * @param config.identifier {String} - The Disqus thread identifier.
   * @param config.url {String} - The Disqus thread URL.
   * @param config.title {String} - The Disqus thread title.
   * @param config.categoryID {String} - The Disqus thread category ID.
   * @param config.afterRenderCallback {Function} - The callback will be called (when?).
   * @param config.beforeCommentCallback {Function} - The callback that will be called
   *        before comment is posted.
   * @param config.onIdentifyCallback {Function} - The callback that will be called (when?).
   * @param config.onInitCallback {Function} - The callback that will be called (when?).
   * @param config.onNewCommentCallback {Function} - The callback that will be called
   *        when new comments are posted on the current Disqus thread.
   * @param config.onPaginateCallback {Function} - The callback that will be called (when?).
   * @param config.onReadyCallback {Function} - The callback that will be called
   *        when the Disqus is loaded and ready for work.
   * @param config.preDataCallback {Function} - The callback that will be called (when?).
   * @param config.preResetCallback {Function} - The callback that will be called (when?).
   * @param callback {Function} - The callback that will be called when this function
   *        is completed doing it's work (setting the new configuration).
   *
   * @returns {undefined}
   */
  setDisqusConfig(
    {identifier,
     url,
     title,
     categoryID,
     afterRenderCallback,
     beforeCommentCallback,
     onIdentifyCallback,
     onInitCallback,
     onNewCommentCallback,
     onPaginateCallback,
     onReadyCallback,
     preDataCallback,
     preResetCallback,
    }, callback) {
    this.setState({
      ...this.state,
      config: {
        identifier: identifier,
        url: url,
        title: title,
        categoryID: categoryID,
        callbacks: {
          afterRender: [afterRenderCallback],
          beforeComment: [beforeCommentCallback],
          onIdentify: [onIdentifyCallback],
          onInit: [onInitCallback],
          onNewComment: [onNewCommentCallback],
          onPaginate: [onPaginateCallback],
          onReady: [onReadyCallback],
          preData: [preDataCallback],
          preReset: [preResetCallback],
        },
      },
    }, callback);
  }

  /**
   * @summary
   * Update all comment counters on the page.
   *
   * @description
   * This function will update all the comment counters
   * that currently exist in the DOM.
   *
   * @returns {undefined}
   */
  updateDisqusCommentCounters() {
    if (this.state.disqusCommentCountersScriptLoaded) {
      /* The comment counters script is loaded, just call the API function */
      DISQUSWIDGETS.getCount({reset: true});
    } else {
      /* The comment counters script is not loaded, load it */
      /* NOTE: The comment counters will be updated after the load of the script */
      this.state.loadDisqusCommentCountersScript();
    }
  }

  /**
   * @summary
   * The `getChildContext()` function
   *
   * @description
   * This function gives the React context for the
   * children components of the `Box` component.
   *
   * The description of the returned object can be found
   * in the definition of the `Box.childContextTypes` static field.
   * NOTE: `Box.childContextTypes` static field is at the top of the
   * class declaration.
   *
   * @returns {Object}
   */
  getChildContext() {
    return {
      disqussion: {
        setDisqusConfig: this.setDisqusConfig,
        reloadDisqus: this.reloadDisqus,
        loadDisqusEmbedScript: this.loadDisqusEmbedScript,
        loadDisqusCommentCountersScript: this.loadDisqusCommentCountersScript,
        updateDisqusCommentCounters: this.updateDisqusCommentCounters,
        disqusEmbedScriptLoaded: this.state.disqusEmbedScriptLoaded,
        disqusEmbedScriptLoading: this.state.disqusEmbedScriptLoading,
        disqusCommentCountersScriptLoaded: this.state.disqusCommentCountersScriptLoaded,
        disqusCommentCountersScriptLoading: this.state.disqusCommentCountersScriptLoading,
      },
    };
  }

  /**
   * @summary
   * Render the component
   */
  render() {
    return <div>{this.props.children}</div>;
  }
};

Box.childContextTypes = BOX_CHILD_CONTEXT_TYPES;
Box.propTypes = BOX_PROP_TYPES;

export default Box;
