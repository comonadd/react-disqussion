/* File: index.js */
/* Creation date: 2017-06-11 */
/* Creator: Dmitry Guzeev <dmitry.guzeev@yahoo.com> */
/* Description: */
/* The main library source file */
/* It imports all other stuff that library provides */

/**
 * @module index
 * @description
 * The main library module
 */

import Box from "components/box";
import Thread from "components/thread";
import CommentsCounterSpan from "components/comments_counter_span";
import CommentsCounterLink from "components/comments_counter_link";

export {
  Box,
  Thread,
  CommentsCounterSpan,
  CommentsCounterLink,
};

export default {
  Box,
  Thread,
  CommentsCounterSpan,
  CommentsCounterLink,
};
