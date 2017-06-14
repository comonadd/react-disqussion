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

