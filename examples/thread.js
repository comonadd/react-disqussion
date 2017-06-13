/* File: thread.js */
/* Creation date: 2017-06-10 */
/* Creator: Dmitry Guzeev <dmitry.guzeev@yahoo.com> */
/* Description: */
/* This example demostrates how to use `Thread` component */

import React from "react";
import ReactDOM from "react-dom";
import {
  Box as DisqussionBox,
  Thread as DisqussionThread,
} from "react-disqussion";

/**
 * The application main component
 */
const App = () => {
  /**
   * The function that is passed as a callback to
   * the `DisqussionThread` component constructor.
   *
   * @param comment {Object} - The object which consists of an ID and text of
   *                           a newly posted comment.
   *
   * @returns {undefined}
   */
  let handleNewComment = ({id, text}) =>
    console.info("New comment posted with ID: " + id + ", and text: " + text);

  return (
    <div>
      {/*
          The `DisqussionBox` component
          will allow components in subtree
          to use the Disqussion library.
        */}
      <DisqussionBox shortname="very-wow-website">
        {/*
            The `DisqussionThread` component
            will show the Disqus comments thread
            with a given identifier, url, title, and category ID.
            When new comments will arrive, the `handleNewComment()` function
            will be called.

            You can read about these Disqus things
            [here](https://help.disqus.com/customer/portal/articles/472098-javascript-configuration-variables).

            You can read about `onNewComment` callback
            [here](https://help.disqus.com/customer/portal/articles/466258-how-can-i-capture-disqus-commenting-activity-in-my-own-analytics-tool-).
          */}
        <DisqussionThread
            identifier="very-much-unique-key-993891-wow"
            title="Wow Very Thread"
            url="https://www.very-wow-website.com/very-much-thread"
            categoryID="92"
            onNewComment={handleNewComment}
        />
      </DisqussionBox>
    </div>
  );
};

/* Render the application onto the application container element */
let appContainerElem = document.createElement("div");
document.body.appendChild(appContainerElem);
ReactDOM.render(<App />, appContainerElem);
