/* File: index.js */
/* Creation date: 2017-06-12 */
/* Creator: Dmitry Guzeev <dmitry.guzeev@yahoo.com> */
/* Description: */
/* The `CommentsCounterSpan` component */

/**
 * @module components/comments_counter_span
 * @description
 * The module that defines the `CommentsCounterSpan` component.
 */

import React from "react";

import CommentsCounter from "components/comments_counter";

/**
 * The `CommentsCounterSpan` component
 *
 * @description
 * <p>
 * This component represents the comments counter HTML element.
 * </p>
 * <p>
 * All the React properties of this component are inherited
 * from the `CommentsCounter` component.
 * </p>
 */
class CommentsCounterSpan extends CommentsCounter {
  /**
   * @summary
   * Render the component
   */
  render() {
    return (
      <span
          className="disqus-comment-count"
          data-disqus-identifier={this.props.identifier}
          data-disqus-url={this.props.url}>
      </span>
    );
  }
};

export default CommentsCounterSpan;
