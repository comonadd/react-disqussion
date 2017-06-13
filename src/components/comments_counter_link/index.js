/* File: index.js */
/* Creation date: 2017-06-12 */
/* Creator: Dmitry Guzeev <dmitry.guzeev@yahoo.com> */
/* Description: */
/* The `CommentsCounterLink` component */

/**
 * @module components/comments_counter_link
 * @description
 * The module that defines the `CommentsCounterLink` component.
 */

import React from "react";

import CommentsCounter from "components/comments_counter";

/**
 * The component that represents the Disqus comments counter link
 *
 * @extends CommentsCounter
 *
 * @description
 * <p>
 * This component represents the comments counter clickable link.
 * The URL of this link is the URL of the thread it is bound to
 * plus the anchor to the thread HTML element.
 * </p>
 * <p>
 * All the React properties of this component are inherited
 * from the `CommentsCounter` component.
 * </p>
 */
class CommentsCounterLink extends CommentsCounter {
  /**
   * @summary
   * Render the component
   */
  render() {
    return (
      <a
          href={this.props.url + "#disqus_thread"}
          data-disqus-identifier={this.props.identifier}>
      </a>
    );
  }
};

export default CommentsCounterLink;
