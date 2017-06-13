/* File: test.js */
/* Creation date: 2017-06-11 */
/* Creator: Dmitry Guzeev <dmitry.guzeev@yahoo.com> */
/* Description: */
/* The tests for the `Thread` component */

import React from "react";
import { expect } from "chai";
import { mount as enzymeMount } from "enzyme";

import Box from "components/box";
import Thread from "components/thread";

describe("Thread component", () => {
  const createTestingBox = () =>
    <Box shortname="react-disqussion">
      <Thread
          identifier="thread-component-testing"
          title="Thread component testing"
      />
    </Box>;

  it("contains one element with ID `#disqus_thread`", () => {
    const wrapper = enzymeMount(createTestingBox());
    expect(wrapper.find("#disqus_thread")).to.have.length(1);
  });
});
