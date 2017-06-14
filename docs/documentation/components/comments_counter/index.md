<a name="module_components/comments_counter"></a>

## components/comments_counter
The module that defines the `CommentsCounter` component.


* [components/comments_counter](#module_components/comments_counter)
    * [~CommentsCounter](#module_components/comments_counter..CommentsCounter) ⇐ <code>React.Component</code>
        * [new CommentsCounter()](#new_module_components/comments_counter..CommentsCounter_new)
        * [.componentDidMount()](#module_components/comments_counter..CommentsCounter+componentDidMount)
    * [~COMMENTS_COUNTER_PROP_TYPES](#module_components/comments_counter..COMMENTS_COUNTER_PROP_TYPES) : <code>Object</code>
    * [~COMMENTS_COUNTER_CONTEXT_TYPES](#module_components/comments_counter..COMMENTS_COUNTER_CONTEXT_TYPES) : <code>Object</code>

<a name="module_components/comments_counter..CommentsCounter"></a>

### components/comments_counter~CommentsCounter ⇐ <code>React.Component</code>
**Kind**: inner class of [<code>components/comments_counter</code>](#module_components/comments_counter)  
**Summary**: The `CommentsCounter` component  
**Extends**: <code>React.Component</code>  

* [~CommentsCounter](#module_components/comments_counter..CommentsCounter) ⇐ <code>React.Component</code>
    * [new CommentsCounter()](#new_module_components/comments_counter..CommentsCounter_new)
    * [.componentDidMount()](#module_components/comments_counter..CommentsCounter+componentDidMount)

<a name="new_module_components/comments_counter..CommentsCounter_new"></a>

#### new CommentsCounter()
The `CommentsCounter` component shows the count
of comments of a given Disqus thread using
given thread identifier and URL.

<a name="module_components/comments_counter..CommentsCounter+componentDidMount"></a>

#### commentsCounter.componentDidMount()
This function is called when the element was 'mounted'
to the DOM.

**Kind**: instance method of [<code>CommentsCounter</code>](#module_components/comments_counter..CommentsCounter)  
**Summary**: `componentDidMount()` function  
<a name="module_components/comments_counter..COMMENTS_COUNTER_PROP_TYPES"></a>

### components/comments_counter~COMMENTS_COUNTER_PROP_TYPES : <code>Object</code>
**Kind**: inner constant of [<code>components/comments_counter</code>](#module_components/comments_counter)  
**Summary**: The component property types  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| identifier | <code>String</code> | The Disqus thread           identifier to show comment count of. |
| url | <code>String</code> | The Disqus thread           url to show comment count of. |

<a name="module_components/comments_counter..COMMENTS_COUNTER_CONTEXT_TYPES"></a>

### components/comments_counter~COMMENTS_COUNTER_CONTEXT_TYPES : <code>Object</code>
**Kind**: inner constant of [<code>components/comments_counter</code>](#module_components/comments_counter)  
**Summary**: The component childrens context types  
