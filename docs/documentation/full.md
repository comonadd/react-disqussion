## Modules

<dl>
<dt><a href="#module_components/box">components/box</a></dt>
<dd><p>The module that defines the <code>Box</code> component.</p>
</dd>
<dt><a href="#module_components/comments_counter_link">components/comments_counter_link</a></dt>
<dd><p>The module that defines the <code>CommentsCounterLink</code> component.</p>
</dd>
<dt><a href="#module_components/comments_counter_span">components/comments_counter_span</a></dt>
<dd><p>The module that defines the <code>CommentsCounterSpan</code> component.</p>
</dd>
<dt><a href="#module_components/comments_counter">components/comments_counter</a></dt>
<dd><p>The module that defines the <code>CommentsCounter</code> component.</p>
</dd>
<dt><a href="#module_components/thread">components/thread</a></dt>
<dd><p>The module that defines the <code>Thread</code> component.</p>
</dd>
<dt><a href="#module_index">index</a></dt>
<dd><p>The main library module</p>
</dd>
<dt><a href="#module_util">util</a></dt>
<dd><p>The module that contains all the utility stuff</p>
</dd>
</dl>

<a name="module_components/box"></a>

## components/box
The module that defines the `Box` component.


* [components/box](#module_components/box)
    * [~Box](#module_components/box..Box) ⇐ <code>React.Component</code>
        * [.loadDisqusEmbedScript()](#module_components/box..Box+loadDisqusEmbedScript) ⇒ <code>undefined</code>
        * [.loadDisqusCommentCountersScript()](#module_components/box..Box+loadDisqusCommentCountersScript) ⇒ <code>undefined</code>
        * [.reloadDisqus()](#module_components/box..Box+reloadDisqus) ⇒ <code>undefined</code>
        * [.setDisqusConfig(config, callback)](#module_components/box..Box+setDisqusConfig) ⇒ <code>undefined</code>
        * [.updateDisqusCommentCounters()](#module_components/box..Box+updateDisqusCommentCounters) ⇒ <code>undefined</code>
        * [.getChildContext()](#module_components/box..Box+getChildContext) ⇒ <code>Object</code>
        * [.render()](#module_components/box..Box+render) ⇒ <code>React.Component</code>
    * [~DISQUS_EMBED_SCRIPT_ID](#module_components/box..DISQUS_EMBED_SCRIPT_ID)
    * [~DISQUS_COMMENT_COUNTERS_SCRIPT_ID](#module_components/box..DISQUS_COMMENT_COUNTERS_SCRIPT_ID)
    * [~BOX_CHILD_CONTEXT_TYPES](#module_components/box..BOX_CHILD_CONTEXT_TYPES) : <code>Object</code>
    * [~BOX_PROP_TYPES](#module_components/box..BOX_PROP_TYPES) : <code>Object</code>

<a name="module_components/box..Box"></a>

### components/box~Box ⇐ <code>React.Component</code>
<p>
The main purpose of the `Box` component is to provide a context to
the other library components.
</p>

<p>
All other library components should be in the subtree of the `Box`
component.
</p>

**Kind**: inner class of [<code>components/box</code>](#module_components/box)  
**Extends**: <code>React.Component</code>  

* [~Box](#module_components/box..Box) ⇐ <code>React.Component</code>
    * [.loadDisqusEmbedScript()](#module_components/box..Box+loadDisqusEmbedScript) ⇒ <code>undefined</code>
    * [.loadDisqusCommentCountersScript()](#module_components/box..Box+loadDisqusCommentCountersScript) ⇒ <code>undefined</code>
    * [.reloadDisqus()](#module_components/box..Box+reloadDisqus) ⇒ <code>undefined</code>
    * [.setDisqusConfig(config, callback)](#module_components/box..Box+setDisqusConfig) ⇒ <code>undefined</code>
    * [.updateDisqusCommentCounters()](#module_components/box..Box+updateDisqusCommentCounters) ⇒ <code>undefined</code>
    * [.getChildContext()](#module_components/box..Box+getChildContext) ⇒ <code>Object</code>
    * [.render()](#module_components/box..Box+render) ⇒ <code>React.Component</code>

<a name="module_components/box..Box+loadDisqusEmbedScript"></a>

#### box.loadDisqusEmbedScript() ⇒ <code>undefined</code>
This function loads the Disqus `embed.js` script
which is used in order embed the Disqus into the webpage.

**Kind**: instance method of [<code>Box</code>](#module_components/box..Box)  
**Summary**: Load Disqus embed script.  
<a name="module_components/box..Box+loadDisqusCommentCountersScript"></a>

#### box.loadDisqusCommentCountersScript() ⇒ <code>undefined</code>
This function loads the Disqus `count.js` script
which is used in order to add comment counters
widgets to the page.

**Kind**: instance method of [<code>Box</code>](#module_components/box..Box)  
**Summary**: Load Disqus comment counters script.  
<a name="module_components/box..Box+reloadDisqus"></a>

#### box.reloadDisqus() ⇒ <code>undefined</code>
This function reloads the Disqus configuration.
It requires to Disqus library to be already initialized.
The user is not required to use this function. It is used
internally.

**Kind**: instance method of [<code>Box</code>](#module_components/box..Box)  
**Summary**: Reload the Disqus configuration.  
<a name="module_components/box..Box+setDisqusConfig"></a>

#### box.setDisqusConfig(config, callback) ⇒ <code>undefined</code>
This function sets the given Disqus configuration *only*
for the `Box` component object. It will *not* update the
current configuration of the Disqus scripts.

**Kind**: instance method of [<code>Box</code>](#module_components/box..Box)  
**Summary**: Set the given Disqus configuration for the `Box` component.  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | The configuration object. |
| config.identifier | <code>String</code> | The Disqus thread identifier. |
| config.url | <code>String</code> | The Disqus thread URL. |
| config.title | <code>String</code> | The Disqus thread title. |
| config.categoryID | <code>String</code> | The Disqus thread category ID. |
| config.afterRenderCallback | <code>function</code> | The callback will be called (when?). |
| config.beforeCommentCallback | <code>function</code> | The callback that will be called before comment                   is posted. |
| config.onIdentifyCallback | <code>function</code> | The callback that will be called (when?). |
| config.onInitCallback | <code>function</code> | The callback that will be called (when?). |
| config.onNewCommentCallback | <code>function</code> | The callback that will be called                   when new comments are posted on the current Disqus                   thread. |
| config.onPaginateCallback | <code>function</code> | The callback that will be called (when?). |
| config.onReadyCallback | <code>function</code> | The callback that will be called                   when the Disqus is loaded and ready for work. |
| config.preDataCallback | <code>function</code> | The callback that will be called (when?). |
| config.preResetCallback | <code>function</code> | The callback that will be called (when?). |
| callback | <code>function</code> | The callback that will be called when this function                   is completed doing it's work                   (setting the new configuration). |

<a name="module_components/box..Box+updateDisqusCommentCounters"></a>

#### box.updateDisqusCommentCounters() ⇒ <code>undefined</code>
This function will update all the comment counters
that currently exist in the DOM.

**Kind**: instance method of [<code>Box</code>](#module_components/box..Box)  
**Summary**: Update all comment counters on the page.  
<a name="module_components/box..Box+getChildContext"></a>

#### box.getChildContext() ⇒ <code>Object</code>
This function gives the React context for the
children components of the `Box` component.

The description of the returned object can be found
in the definition of the `Box.childContextTypes` static field.
NOTE: `Box.childContextTypes` static field is at the top of the
class declaration.

**Kind**: instance method of [<code>Box</code>](#module_components/box..Box)  
**Summary**: The `getChildContext()` function  
<a name="module_components/box..Box+render"></a>

#### box.render() ⇒ <code>React.Component</code>
**Kind**: instance method of [<code>Box</code>](#module_components/box..Box)  
**Summary**: Render the component  
<a name="module_components/box..DISQUS_EMBED_SCRIPT_ID"></a>

### components/box~DISQUS_EMBED_SCRIPT_ID
This is the ID of the Disqus embed script node.

**Kind**: inner constant of [<code>components/box</code>](#module_components/box)  
**Summary**: Disqus embed script ID  
<a name="module_components/box..DISQUS_COMMENT_COUNTERS_SCRIPT_ID"></a>

### components/box~DISQUS_COMMENT_COUNTERS_SCRIPT_ID
This is an ID of the Disqus comment counters script node.

**Kind**: inner constant of [<code>components/box</code>](#module_components/box)  
**Summary**: Disqus comment counters script ID  
<a name="module_components/box..BOX_CHILD_CONTEXT_TYPES"></a>

### components/box~BOX_CHILD_CONTEXT_TYPES : <code>Object</code>
**Kind**: inner constant of [<code>components/box</code>](#module_components/box)  
**Summary**: The `Box` component children context types.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| disqussion | <code>Object</code> | The object that wraps the library context. |
| disqussion.setDisqusConfig | <code>function</code> | The `Box.setDisqusConfig()` function. |
| disqussion.reloadDisqus | <code>function</code> | The `Box.reloadDisqus()` function. |
| disqussion.loadDisqusEmbedScript | <code>function</code> | The `Box.loadDisqusEmbedScript()` function. |
| disqussion.loadDisqusCommentCountersScript | <code>function</code> | The `Box.loadDisqusCommentCountersScript()` function. |
| disqussion.updateDisqusCommentCounters | <code>function</code> | The `Box.updateDisqusCommentCounters()` function. |
| disqussion.disqusEmbedScriptLoaded | <code>boolean</code> | Boolean flag that is true if the Disqus embed script is           already loaded. It is false otherwise. |
| disqussion.disqusEmbedScriptLoading | <code>boolean</code> | Boolean flag that is true if the Disqus embed script is           loading at the moment. It is false otherwise. |
| disqussion.disqusCommentCountersScriptoaded | <code>boolean</code> | Boolean flag that is true if the Disqus comment counters script is           already loaded. It is false otherwise. |
| disqussion.disqusCommentCountersScriptoading | <code>boolean</code> | Boolean flag that is true if the Disqus comment counters script is           loading at the moment. It is false otherwise. |

<a name="module_components/box..BOX_PROP_TYPES"></a>

### components/box~BOX_PROP_TYPES : <code>Object</code>
**Kind**: inner constant of [<code>components/box</code>](#module_components/box)  
**Summary**: The `Box` component property types.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| shortname | <code>String</code> | The shortname of the Disqus forum. |

<a name="module_components/comments_counter_link"></a>

## components/comments_counter_link
The module that defines the `CommentsCounterLink` component.


* [components/comments_counter_link](#module_components/comments_counter_link)
    * [~CommentsCounterLink](#module_components/comments_counter_link..CommentsCounterLink) ⇐ <code>CommentsCounter</code>
        * [new CommentsCounterLink()](#new_module_components/comments_counter_link..CommentsCounterLink_new)
        * [.render()](#module_components/comments_counter_link..CommentsCounterLink+render) ⇒ <code>React.Element</code>

<a name="module_components/comments_counter_link..CommentsCounterLink"></a>

### components/comments_counter_link~CommentsCounterLink ⇐ <code>CommentsCounter</code>
The component that represents the Disqus comments counter link

**Kind**: inner class of [<code>components/comments_counter_link</code>](#module_components/comments_counter_link)  
**Extends**: <code>CommentsCounter</code>  

* [~CommentsCounterLink](#module_components/comments_counter_link..CommentsCounterLink) ⇐ <code>CommentsCounter</code>
    * [new CommentsCounterLink()](#new_module_components/comments_counter_link..CommentsCounterLink_new)
    * [.render()](#module_components/comments_counter_link..CommentsCounterLink+render) ⇒ <code>React.Element</code>

<a name="new_module_components/comments_counter_link..CommentsCounterLink_new"></a>

#### new CommentsCounterLink()
<p>
This component represents the comments counter clickable link.
The URL of this link is the URL of the thread it is bound to
plus the anchor to the thread HTML element.
</p>
<p>
All the React properties of this component are inherited
from the `CommentsCounter` component.
</p>

<a name="module_components/comments_counter_link..CommentsCounterLink+render"></a>

#### commentsCounterLink.render() ⇒ <code>React.Element</code>
**Kind**: instance method of [<code>CommentsCounterLink</code>](#module_components/comments_counter_link..CommentsCounterLink)  
**Summary**: Render the component  
<a name="module_components/comments_counter_span"></a>

## components/comments_counter_span
The module that defines the `CommentsCounterSpan` component.


* [components/comments_counter_span](#module_components/comments_counter_span)
    * [~CommentsCounterSpan](#module_components/comments_counter_span..CommentsCounterSpan)
        * [new CommentsCounterSpan()](#new_module_components/comments_counter_span..CommentsCounterSpan_new)
        * [.render()](#module_components/comments_counter_span..CommentsCounterSpan+render) ⇒ <code>React.Element</code>

<a name="module_components/comments_counter_span..CommentsCounterSpan"></a>

### components/comments_counter_span~CommentsCounterSpan
The `CommentsCounterSpan` component

**Kind**: inner class of [<code>components/comments_counter_span</code>](#module_components/comments_counter_span)  

* [~CommentsCounterSpan](#module_components/comments_counter_span..CommentsCounterSpan)
    * [new CommentsCounterSpan()](#new_module_components/comments_counter_span..CommentsCounterSpan_new)
    * [.render()](#module_components/comments_counter_span..CommentsCounterSpan+render) ⇒ <code>React.Element</code>

<a name="new_module_components/comments_counter_span..CommentsCounterSpan_new"></a>

#### new CommentsCounterSpan()
<p>
This component represents the comments counter HTML element.
</p>
<p>
All the React properties of this component are inherited
from the `CommentsCounter` component.
</p>

<a name="module_components/comments_counter_span..CommentsCounterSpan+render"></a>

#### commentsCounterSpan.render() ⇒ <code>React.Element</code>
**Kind**: instance method of [<code>CommentsCounterSpan</code>](#module_components/comments_counter_span..CommentsCounterSpan)  
**Summary**: Render the component  
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
<a name="module_components/thread"></a>

## components/thread
The module that defines the `Thread` component.


* [components/thread](#module_components/thread)
    * [~Thread](#module_components/thread..Thread) ⇐ <code>React.Component</code>
        * [new Thread()](#new_module_components/thread..Thread_new)
        * [.configureDisqus()](#module_components/thread..Thread+configureDisqus) ⇒ <code>undefined</code>
        * [.componentDidMount()](#module_components/thread..Thread+componentDidMount)
        * [.render()](#module_components/thread..Thread+render) ⇒ <code>React.Component</code>
    * [~THREAD_CONTEXT_TYPES](#module_components/thread..THREAD_CONTEXT_TYPES) : <code>Object</code>
    * [~THREAD_PROP_TYPES](#module_components/thread..THREAD_PROP_TYPES) : <code>Object</code>

<a name="module_components/thread..Thread"></a>

### components/thread~Thread ⇐ <code>React.Component</code>
The component that represents the Disqus thread.

**Kind**: inner class of [<code>components/thread</code>](#module_components/thread)  
**Extends**: <code>React.Component</code>  

* [~Thread](#module_components/thread..Thread) ⇐ <code>React.Component</code>
    * [new Thread()](#new_module_components/thread..Thread_new)
    * [.configureDisqus()](#module_components/thread..Thread+configureDisqus) ⇒ <code>undefined</code>
    * [.componentDidMount()](#module_components/thread..Thread+componentDidMount)
    * [.render()](#module_components/thread..Thread+render) ⇒ <code>React.Component</code>

<a name="new_module_components/thread..Thread_new"></a>

#### new Thread()
The `Thread` component represents the Disqus thread.

<a name="module_components/thread..Thread+configureDisqus"></a>

#### thread.configureDisqus() ⇒ <code>undefined</code>
This function reloads the Disqus configuration in order to this
thread to show proper data.

**Kind**: instance method of [<code>Thread</code>](#module_components/thread..Thread)  
**Summary**: Configure the Disqus for this thread  
<a name="module_components/thread..Thread+componentDidMount"></a>

#### thread.componentDidMount()
**Kind**: instance method of [<code>Thread</code>](#module_components/thread..Thread)  
**Summary**: The `componentDidMount` function  
<a name="module_components/thread..Thread+render"></a>

#### thread.render() ⇒ <code>React.Component</code>
**Kind**: instance method of [<code>Thread</code>](#module_components/thread..Thread)  
**Summary**: Render the component  
<a name="module_components/thread..THREAD_CONTEXT_TYPES"></a>

### components/thread~THREAD_CONTEXT_TYPES : <code>Object</code>
**Kind**: inner constant of [<code>components/thread</code>](#module_components/thread)  
**Summary**: The `Thread` component context types.  
<a name="module_components/thread..THREAD_PROP_TYPES"></a>

### components/thread~THREAD_PROP_TYPES : <code>Object</code>
**Kind**: inner constant of [<code>components/thread</code>](#module_components/thread)  
**Summary**: The property types of the `Thread` component  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| identifier | <code>String</code> | The unique identifier of the thread |
| title | <code>String</code> | The title of the thread |
| url | <code>String</code> | The url of the thread |
| categoryID | <code>String</code> | The thread category ID |
| afterRender | <code>function</code> | 'afterRender' Disqus callback |
| beforeComment | <code>function</code> | 'beforeRender' Disqus callback |
| onIdentify | <code>function</code> | 'onIdentity' Disqus callback |
| onNewComment | <code>function</code> | Function that gets called when new           comment is posted in this thread. |
| onInit | <code>function</code> | 'onInit' Disqus callback |
| onPaginate | <code>function</code> | 'onPaginate' Disqus callback |
| onReady | <code>function</code> | 'onReady' Disqus callback |
| preData | <code>function</code> | 'preData' Disqus callback |
| preReset | <code>function</code> | 'preReset' Disqus callback |

<a name="module_index"></a>

## index
The main library module

<a name="module_util"></a>

## util
The module that contains all the utility stuff


* [util](#module_util)
    * [~makeDisqusConfigFunc(config)](#module_util..makeDisqusConfigFunc) ⇒ <code>function</code>
    * [~makeDisqusEmbedScriptUrl(shortname)](#module_util..makeDisqusEmbedScriptUrl) ⇒ <code>string</code>
    * [~makeDisqusCommentCountersScriptUrl(shortname)](#module_util..makeDisqusCommentCountersScriptUrl) ⇒ <code>string</code>

<a name="module_util..makeDisqusConfigFunc"></a>

### util~makeDisqusConfigFunc(config) ⇒ <code>function</code>
This function constructs a new Disqus configuration function,
which is used in order to configure Disqus.

**Kind**: inner method of [<code>util</code>](#module_util)  
**Summary**: Make a new Disqus configuration function with a given configuration.  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | The configuration object that is described below |
| config.identifier | <code>string</code> | The Disqus thread identifier |
| config.url | <code>string</code> | The Disqus thread URL |
| config.title | <code>string</code> | The Disqus thread title |
| config.categoryID | <code>string</code> | The Disqus thread category ID |
| config.callbacks | <code>Object</code> | The object which contains the callback arrays |

<a name="module_util..makeDisqusEmbedScriptUrl"></a>

### util~makeDisqusEmbedScriptUrl(shortname) ⇒ <code>string</code>
Construct a Disqus embed script URL from a given shortname

**Kind**: inner method of [<code>util</code>](#module_util)  

| Param | Type | Description |
| --- | --- | --- |
| shortname | <code>string</code> | The shortname of the Disqus forum |

<a name="module_util..makeDisqusCommentCountersScriptUrl"></a>

### util~makeDisqusCommentCountersScriptUrl(shortname) ⇒ <code>string</code>
Construct a Disqus comment counters script URL from a given shortname

**Kind**: inner method of [<code>util</code>](#module_util)  

| Param | Type | Description |
| --- | --- | --- |
| shortname | <code>string</code> | The shortname of the Disqus forum |

