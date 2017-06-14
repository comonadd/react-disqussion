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

