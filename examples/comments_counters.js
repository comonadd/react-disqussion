/* File: comments_counter.js */
/* Creation date: 2017-06-10 */
/* Creator: Dmitry Guzeev <dmitry.guzeev@yahoo.com> */
/* Description: */
/* This example demostrates how to use comment counter library components */

import React from "react";
import ReactDOM from "react-dom";
import {
  Box as DisqussionBox,
  CommentsCounterSpan as DisqussionCommentsCounterSpan
  CommentsCounterLink as DisqussionCommentsCounterLink
} from "react-disqussion";

/**
 * The application main component
 */
const App = () => {
  return (
    <div>
      {/*
          The `DisqussionBox` component
          will allow components in subtree
          to use the Disqussion library.
        */}
      <DisqussionBox shortname="very-wow-website">
        {/*
            The `DisqussionCommentsCounterSpan` component
            will show the Disqus comments count of a thread
            with a given identifier and url.
          */}
        <DisqusisonCommentsCounterSpan
            identifier="very-much-unique-key-993298-wow"
            url="https://www.very-wow-website.com/very-much-thread" />
        {/*
            The `DisqussionCommentsCounterLink` component
            will show the clickable link that contains the count of comments in
            a Disqus thread with a givne identifier and URL.
          */}
        <DisqusisonCommentsCounterLink
            identifier="very-much-unique-key-993298-wow"
            url="https://www.very-wow-website.com/very-much-thread" />
      </DisqussionBox>
    </div>
  );
};

/* Render the application onto the application container element */
let appContainerElem = document.createElement("div");
document.body.appendChild(appContainerElem);
ReactDOM.render(<App />, appContainerElem);
