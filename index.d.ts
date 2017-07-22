/**
 * @file index.d.ts
 * @author Dmitry Guzeev <dmitry.guzeev@yahoo.com>
 */

/**
 * @summary
 * The new comment type.
 *
 * @description
 * This type represents the comment passed as an argument
 * to the `onNewCommentCallback` Disqus callback.
 */

import React from 'react';

type NewComment = {
  id: string,
  text: string,
};

type BoxProps = {
  shortname: string,
};

type BoxState = {
  disqusEmbedScriptLoaded: boolean,
  disqusEmbedScriptLoading: boolean,
  disqusCommentCountersScriptLoaded: boolean,
  disqusCommentCountersScriptLoding: boolean,
  config: {
    identifier: string,
    url: string,
    title: string,
    categoryID: string,
    callbacks: {
      afterRender: (() => void)[],
      beforeComment: (() => void)[],
      onIdentify: (() => void)[],
      onInit: (() => void)[],
      onNewComment: ((comment: NewComment) => void)[],
      onPaginate: (() => void)[],
      onReady: (() => void)[],
      preData: (() => void)[],
      preReset: (() => void)[],
    },
  },
};

/**
 * @summary The `Box` class.
 */
declare class Box extends React.Component<BoxProps, BoxState> {
  constructor(...args: any[]);

  setDisqusConfig({
    identifier?: string,
    url?: string,
    title?: string,
    categoryID?: string,
    afterRenderCallback?: () => void,
    beforeCommentCallback?: () => void,
    onIdentifyCallback?: () => void,
    onInitCallback?: () => void,
    onNewCommentCallback?: (comment: NewComment) => void,
    onPaginateCallback?: () => void,
    onReadyCallback?: () => void,
    preDataCallback?: () => void,
    preResetCallback?: () => void,
  }): void;

  reloadDisqus(): void;
  updateDisqusCommentCounters(): void;
  loadDisqusEmbedScript(): void;
  loadDisqusCommentCountersScript(): void;
}

type ThreadProps = {
  identifier?: string,
  title?: string,
  url?: string,
  categoryID?: string,
  onNewComment?: (comment: NewComment) => void,
  afterRender?: () => void,
  beforeComment?: () => void,
  onIdentify?: () => void,
  onInit?: () => void,
  onNewComment?: () => void,
  onPaginate?: () => void,
  onReady?: () => void,
  preData?: () => void,
  preReset?: () => void,
};

type ThreadState = {
};

/**
 * @summary The `Thread` class.
 */
declare class Thread extends React.Component<ThreadProps, ThreadState> {
  configureDisqus(): void;
}

type CommentsCounterProps = {
  identifier?: string,
  url?: string,
};

type CommentsCounterState = {
};

declare class CommentsCounter extends React.Component<CommentsCounterProps, CommentsCounterState> {
}

declare class CommentsCounterSpan extends CommentsCounter {
}

declare class CommentsCounterLink extends CommentsCounter {
}
