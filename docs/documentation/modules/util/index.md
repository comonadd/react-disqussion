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

