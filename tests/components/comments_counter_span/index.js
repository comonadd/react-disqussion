/* File: index.js */
/* Creation date: 2017-06-13 */
/* Creator: Dmitry Guzeev <dmitry.guzeev@yahoo.com> */
/* Description: */
/* The tests for the `CommentsCounterSpan` component */

import React from "react";
import { expect } from "chai";
import { mount as enzymeMount } from "enzyme";

import Box from "components/box";
import CommentsCounterSpan from "components/comments_counter_span";

describe("`CommentsCounterSpan` component", () => {
  it("shows the right amount of comments", () => {
    const wrapper = enzymeMount(
      <Box shortname="react-disqussion">
        <span
            className="comments-counter-component-testing__thread-without-comments">
          <CommentsCounterSpan
              identifier="comments-counter-component-testing__thread-without-comments" />
          <CommentsCounterSpan
              identifier="comments-counter-component-testing__thread-with-two-comments" />
        </span>
      </Box>
    );
    // TODO: Remove timeouts, do something else instead
    // NOTE: This timeout exists because the `CommentsCounter` script
    //       will try to download external script, which takes time.
    setTimeout(() =>
      expect(wrapper.find(".comments-counter-component-testing__thread-without-comments"
      ).text()).to.equal("0"), 8000);
    setTimeout(() =>
      expect(wrapper.find(".comments-counter-component-testing__thread-two-comments"
      ).text()).to.equal("2"), 8000);
  });
});
