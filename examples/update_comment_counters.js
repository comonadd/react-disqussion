/* File: update_comment_counters.js */
/* Creation date: 2017-06-10 */
/* Creator: Dmitry Guzeev <dmitry.guzeev@yahoo.com> */
/* Description: */
/* This examples shows how to update the comment counters on the page */

import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Box as DisqussionBox,
  CommentsCounterSpan as DisqussionCommentsCounterSpan,
} from 'react-disqussion';

/**
 * The application main component.
 */
class App extends React.Component {
  /**
   * @summary
   * Function that gets called after the component is mounted.
   *
   * @return {undefined}
   */
  componentDidMount() {
    /* Make so that comment counters will update each 20 seconds */
    window.setInterval(() => {
      /* Call the function that is given by the `Box` component */
      /* NOTE: `this` here is bound to the `App` object, not to the function */
      this.context.disqussion.updateDisqusCommentCounters();
    }, 20000);
  }

  /**
   * @summary Render the component.
   *
   * @return {React.Element}
   */
  render() {
    return (
      <div>
        {/*
            The `DisqussionCommentsCounterSpan` component
            will show the Disqus comments count of a thread
            with a given identifier and url.
          */}
        <DisqusisonCommentsCounterSpan
            identifier='very-much-unique-key-993298-wow'
            url='https://www.very-wow-website.com/very-much-thread'
        />
      </div>
    );
  }
};

App.contextTypes = {
  disqussion: PropTypes.shape({
    updateDisqusCommentCounters: PropTypes.func,
  }),
};

/**
 * @summary Create a root component.
 *
 * @description
 * The root component that wraps the `App` component
 * with the `DisqussionBox` component.
 *
 * @return {React.Element}
 */
const Root = () =>
  <div>
    {/*
        The `DisqussionBox` component will allow components in subtree
        to use the Disqussion library.
      */}
    <DisqussionBox shortname='very-wow-website'>
      <App />
    </DisqussionBox>
  </div>;

/* Render the application onto the application container element */
let appContainerElem = document.createElement('div');
document.body.appendChild(appContainerElem);
ReactDOM.render(<Root />, appContainerElem);
