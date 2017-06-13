/* File: index.js */
/* Creation date: 2017-06-11 */
/* Creator: Dmitry Guzeev <dmitry.guzeev@yahoo.com> */
/* Description: */
/* The `CommentsCounter` component */

/**
 * @module components/comments_counter
 * @description
 * The module that defines the `CommentsCounter` component.
 */

import React from 'react';
import PropTypes from 'prop-types';

/**
 * @constant {Object}
 *
 * @summary
 * The component property types
 *
 * @property identifier {String} - The Disqus thread
 *           identifier to show comment count of.
 * @property url {String} - The Disqus thread
 *           url to show comment count of.
 */
const COMMENTS_COUNTER_PROP_TYPES = {
  identifier: PropTypes.string,
  url: PropTypes.string,
};

/**
 * @constant {Object}
 *
 * @summary
 * The component childrens context types
 */
const COMMENTS_COUNTER_CONTEXT_TYPES = {
  disqussion: PropTypes.shape({
    disqusCommentCountersScriptLoaded: PropTypes.bool,
    updateDisqusCommentCounters: PropTypes.func,
    loadDisqusCommentCountersScript: PropTypes.func,
  }),
};

/**
 * @summary
 * The `CommentsCounter` component
 *
 * @extends React.Component
 *
 * @description
 * The `CommentsCounter` component shows the count
 * of comments of a given Disqus thread using
 * given thread identifier and URL.
 */
class CommentsCounter extends React.Component {
  /**
   * @summary
   * `componentDidMount()` function
   *
   * @description
   * This function is called when the element was 'mounted'
   * to the DOM.
   */
  componentDidMount() {
    /* If the Disqus comment counters script is already loaded */
    if (this.context.disqussion.disqusCommentCountersScriptLoaded) {
      /* Update the comment counters */
      this.context.disqussion.updateDisqusCommentCounters();
    } else {
      this.context.disqussion.loadDisqusCommentCountersScript();
    }
  }
};

CommentsCounter.propTypes = COMMENTS_COUNTER_PROP_TYPES;
CommentsCounter.contextTypes = COMMENTS_COUNTER_CONTEXT_TYPES;

export default CommentsCounter;
