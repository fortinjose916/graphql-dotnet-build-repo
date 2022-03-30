webpackJsonp([970605649915],{343:function(n,s){n.exports={data:{markdownRemark:{html:'<h1 id="json-serialization-and-deserialization"><a href="#json-serialization-and-deserialization" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSON Serialization and Deserialization</h1>\n<p>Two libraries are available for assistance deserializing JSON-formatted GraphQL requests,\nand serializing GraphQL responses in a JSON format. It is not mandatory to use JSON for the\nrequest or response format, but it is common to do so. The two libraries are:</p>\n<ul>\n<li><a href="https://www.nuget.org/packages/GraphQL.SystemTextJson">GraphQL.SystemTextJson</a>, for use with the <code class="language-text">System.Text.Json</code> library, and</li>\n<li><a href="https://www.nuget.org/packages/GraphQL.NewtonsoftJson">GraphQL.NewtonsoftJson</a>, for use with the <code class="language-text">Newtonsoft.Json</code> library</li>\n</ul>\n<p>These two projects have very similar classes and extension methods available. There are two notable\ndifferences between the two serialization engines. First, the <code class="language-text">Newtonsoft.Json</code> library does not provide asynchronous\nserialization or deserialization methods. Due to this reason, the async <code class="language-text">GraphQL.NewtonsoftJson</code> serialization\nhelper actually performs synchronous calls on the underlying stream when writing the JSON output. This is\nsignificant when hosting the service via ASP.NET Core, as it is required to deliberately allow synchronous\nreading and writing of the underlying stream. A sample of the required configuration is below:</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ConfigureServices</span><span class="token punctuation">(</span><span class="token class-name">IServiceCollection</span> services<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// If using Kestrel:</span>\n    services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Configure</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>KestrelServerOptions<span class="token punctuation">></span></span></span><span class="token punctuation">(</span>options <span class="token operator">=></span>\n    <span class="token punctuation">{</span>\n        options<span class="token punctuation">.</span>AllowSynchronousIO <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// If using IIS:</span>\n    services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Configure</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IISServerOptions<span class="token punctuation">></span></span></span><span class="token punctuation">(</span>options <span class="token operator">=></span>\n    <span class="token punctuation">{</span>\n        options<span class="token punctuation">.</span>AllowSynchronousIO <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>The above configuration options are not necessary with the <code class="language-text">System.Text.Json</code> serialization engine.</p>\n<p>Second, the <code class="language-text">Newtonsoft.Json</code> library defaults to case-insensitive matching for key names when\ndeserializing objects. <code class="language-text">System.Text.Json</code> defaults to case-sensitive matching, but converts property\nnames to camel-case first. Take this example:</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Request</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Query <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> OperationName <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">Inputs</span> Variables <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Deserializing the following JSON object is successful with either library:</p>\n<div class="gatsby-highlight" data-language="json">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n    <span class="token property">"query"</span><span class="token operator">:</span> <span class="token string">"query ($arg: Int!) { field1(arg: $arg) { childField } }"</span><span class="token punctuation">,</span>\n    <span class="token property">"variables"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"arg"</span><span class="token operator">:</span> <span class="token number">55</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>However, the following JSON object fails with <code class="language-text">System.Text.Json</code>:</p>\n<div class="gatsby-highlight" data-language="json">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n    <span class="token property">"Query"</span><span class="token operator">:</span> <span class="token string">"query ($arg: Int!) { field1(arg: $arg) { childField } }"</span><span class="token punctuation">,</span>\n    <span class="token property">"Variables"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"arg"</span><span class="token operator">:</span> <span class="token number">55</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>You can also configure the serialization and deserialization process for your needs\nwith either library, such as using case insensitive matching with <code class="language-text">System.Text.Json</code>\nor enabling or disabling indenting on the serialized output. There are a number of\nother differences as well.\n<a href="https://docs.microsoft.com/en-us/dotnet/standard/serialization/system-text-json-migrate-from-newtonsoft-how-to?pivots=dotnet-5-0#table-of-differences-between-newtonsoftjson-and-systemtextjson">Click this link</a>\nfor a comprehensive table of differences between the two serialization engines.</p>\n<p>The remainder of the documentation here will assume the use of the <code class="language-text">GraphQL.SystemTextJson</code>\nlibrary; slight changes may be necessary if you are using the <code class="language-text">GraphQL.NewtonsoftJson</code> library.</p>\n<h1 id="deserialization-of-a-graphql-request-and-variables"><a href="#deserialization-of-a-graphql-request-and-variables" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Deserialization of a GraphQL request and variables</h1>\n<p>The GraphQL.NET <code class="language-text">DocumentExecuter</code> requires the query and optional operation name as strings,\nand the variables (if supplied) deserialized into an <code class="language-text">Inputs</code> object, which is a dictionary of\nobjects. This dictionary must be deserialized such that the objects it contains are lists (in the form\nof <code class="language-text">IEnumerable</code> collections), objects (in the form of <code class="language-text">IDictionary&lt;string, object></code> collections),\nor raw values (e.g. <code class="language-text">int</code>, <code class="language-text">long</code>, <code class="language-text">string</code>, <code class="language-text">Guid</code>, etc). Custom scalars may allow other types as well.</p>\n<p>The <code class="language-text">InputsConverter</code> facilitates deserialization of JSON strings into this <code class="language-text">Inputs</code> object as described\nabove. For the <code class="language-text">Newtonsoft.Json</code> library, it is suggested to disable the automatic conversion of dates\nso that the GraphQL.NET scalars can perform this task, enabling proper <code class="language-text">DateTimeOffset</code> deserialization.</p>\n<p>You can also use one of the following extension methods to deserialize data with the required options set.</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">Inputs</span> <span class="token function">ToInputs</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token class-name"><span class="token keyword">string</span></span> json<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">Inputs</span> <span class="token function">ToInputs</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token class-name">JsonElement</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">T</span> <span class="token generic-method"><span class="token function">FromJson</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token class-name"><span class="token keyword">string</span></span> json<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// GraphQL.SystemTextJson only:</span>\n<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">ValueTask<span class="token punctuation">&lt;</span>T<span class="token punctuation">></span></span> <span class="token generic-method"><span class="token function">FromJsonAsync</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token class-name">System<span class="token punctuation">.</span>IO<span class="token punctuation">.</span>Stream</span> stream<span class="token punctuation">,</span> <span class="token class-name">CancellationToken</span> cancellationToken <span class="token operator">=</span> <span class="token keyword">default</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// GraphQL.NewtonsoftJson only:</span>\n<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">T</span> <span class="token generic-method"><span class="token function">FromJson</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token class-name">System<span class="token punctuation">.</span>IO<span class="token punctuation">.</span>Stream</span> stream<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Here are a couple typical examples:</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token comment">// ASP.NET Core action with multipart/form-data or application/x-www-form-urlencoded encoding</span>\n<span class="token punctuation">[</span><span class="token function">HttpPost</span><span class="token punctuation">(</span><span class="token string">"graphql"</span><span class="token punctuation">)</span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token return-type class-name">IActionResult</span> <span class="token function">GraphQL</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> query<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> operationName<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> variables<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> inputs <span class="token operator">=</span> variables<span class="token punctuation">?.</span><span class="token function">ToInputs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// execute request and return result</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// ASP.NET Core action with json encoding</span>\n<span class="token punctuation">[</span><span class="token function">HttpPost</span><span class="token punctuation">(</span><span class="token string">"graphql"</span><span class="token punctuation">)</span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token return-type class-name">IActionResult</span> <span class="token function">GraphQL</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">FromBody</span></span><span class="token punctuation">]</span> <span class="token class-name">Request</span> request<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// execute request and return result</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Request</span>\n<span class="token punctuation">{</span>\n    <span class="token return-type class-name"><span class="token keyword">string</span></span> Query <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token return-type class-name"><span class="token keyword">string</span></span> OperationName <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token return-type class-name">JsonElement</span> Variables <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Other, with the request as a JSON string</span>\n<span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> request<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> request <span class="token operator">=</span> requestString<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">FromJson</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Request<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// execute request and return result</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Request</span>\n<span class="token punctuation">{</span>\n    <span class="token return-type class-name"><span class="token keyword">string</span></span> Query <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token return-type class-name"><span class="token keyword">string</span></span> OperationName <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token return-type class-name">Inputs</span> Variables <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h1 id="serialization-of-a-graphql-response"><a href="#serialization-of-a-graphql-response" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Serialization of a GraphQL response</h1>\n<p>Serialization of a <code class="language-text">ExecutionResult</code> object is handled by <code class="language-text">ExecutionResultJsonConverter</code> which accepts in its\nconstructor an instance of <code class="language-text">IErrorInfoProvider</code> (see <a href="#error-serialization">Error Serialization</a> below).\nThe converter can be registered within an instance of <code class="language-text">JsonSerializerOptions</code> so that serializing an\n<code class="language-text">ExecutionResult</code> produces the proper output.</p>\n<p>To assist, a <code class="language-text">DocumentWriter</code> class is provided with a single method, <code class="language-text">WriteAsync</code>, which\nhandles constructing the options, registering the converter, and serializing a specified\n<code class="language-text">ExecutionResult</code> to a data stream. This class is designed to be registered as a singleton\nwithin your dependency injection framework, if applicable.</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token comment">// Manually construct an instance</span>\n<span class="token class-name"><span class="token keyword">var</span></span> documentWriter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">DocumentWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Or register it within your DI framework (Microsoft DI sample below)</span>\nservices<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddSingleton</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IDocumentWriter<span class="token punctuation">,</span> DocumentWriter<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Here is an example of the <code class="language-text">DocumentWriter</code>\'s use within the <code class="language-text">Harness</code> sample project:</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">private</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">WriteResponseAsync</span><span class="token punctuation">(</span><span class="token class-name">HttpContext</span> context<span class="token punctuation">,</span> <span class="token class-name">ExecutionResult</span> result<span class="token punctuation">,</span> <span class="token class-name">CancellationToken</span> cancellationToken<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    context<span class="token punctuation">.</span>Response<span class="token punctuation">.</span>ContentType <span class="token operator">=</span> <span class="token string">"application/json"</span><span class="token punctuation">;</span>\n    context<span class="token punctuation">.</span>Response<span class="token punctuation">.</span>StatusCode <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>\n\n    <span class="token keyword">await</span> _documentWriter<span class="token punctuation">.</span><span class="token function">WriteAsync</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>Response<span class="token punctuation">.</span>Body<span class="token punctuation">,</span> result<span class="token punctuation">,</span> cancellationToken<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>You can also write the result to a string with the <code class="language-text">WriteToStringAsync</code> extension method:</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token class-name"><span class="token keyword">var</span></span> resultText <span class="token operator">=</span> <span class="token keyword">await</span> _documentWriter<span class="token punctuation">.</span><span class="token function">WriteToStringAsync</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="error-serialization"><a href="#error-serialization" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Error Serialization</h2>\n<p>The GraphQL spec allows for four properties to be returned within each\nerror: <code class="language-text">message</code>, <code class="language-text">locations</code>, <code class="language-text">path</code>, and <code class="language-text">extensions</code>. The <code class="language-text">IDocumentWriter</code> implementations\nprovided for the <a href="https://www.nuget.org/packages/GraphQL.NewtonsoftJson"><code class="language-text">Newtonsoft.Json</code></a> and\n<a href="https://www.nuget.org/packages/GraphQL.SystemTextJson"><code class="language-text">System.Text.Json</code></a> packages allow you to control the\nserialization of <code class="language-text">ExecutionError</code>s into the resulting json data by providing an <code class="language-text">IErrorInfoProvider</code>\nto the constructor of the document writer. The <code class="language-text">ErrorInfoProvider</code> class (default implementation of\n<code class="language-text">IErrorInfoProvider</code>) contains 5 properties to control serialization behavior:</p>\n<ul>\n<li><code class="language-text">ExposeExceptionStackTrace</code> when enabled sets the <code class="language-text">message</code> property for errors to equal the\nexception\'s <code class="language-text">.ToString()</code> method, which includes a stack trace. This property defaults to <code class="language-text">false</code>.</li>\n<li><code class="language-text">ExposeCode</code> when enabled sets the <code class="language-text">extensions</code>\'s <code class="language-text">code</code> property to equal the error\'s <code class="language-text">Code</code>\nproperty. This property defaults to <code class="language-text">true</code>.</li>\n<li><code class="language-text">ExposeCodes</code> when enabled sets the <code class="language-text">extensions</code>\'s <code class="language-text">codes</code> property to equal a list containing both\nthe error\'s <code class="language-text">Code</code> property, if any, and the type name of inner exceptions (after being converted to\nUPPER<em>CASE and removing the "Extension" suffix). So an <code class="language-text">ExecutionError</code> with a code of `INVALID</em>FORMAT<code class="language-text">that has an inner exception of type</code>ArgumentNullException<code class="language-text">would contain a</code>codes<code class="language-text">property\nof</code>["INVALID<em>FORMAT", "ARGUMENT</em>NULL"]<code class="language-text">. This property defaults to</code>true`.</li>\n<li><code class="language-text">ExposeData</code> when enabled sets the <code class="language-text">extension</code>\'s <code class="language-text">data</code> property to equal the data within the error\'s\n<code class="language-text">Data</code> property. This property defaults to <code class="language-text">true</code>.</li>\n<li><code class="language-text">ExposeExtensions</code> when disabled hides the entire <code class="language-text">extensions</code> property, including <code class="language-text">code</code>, <code class="language-text">codes</code>,\nand <code class="language-text">data</code> (if enabled). This property defaults to <code class="language-text">true</code>.</li>\n</ul>\n<p>For example, to show the stack traces for unhandled errors during development, you might write code like this:</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token preprocessor property">#<span class="token directive keyword">if</span> DEBUG</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> documentWriter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">DocumentWriter</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ErrorInfoProvider</span><span class="token punctuation">(</span>options <span class="token operator">=></span> options<span class="token punctuation">.</span>ExposeExceptionStackTrace <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token preprocessor property">#<span class="token directive keyword">else</span></span>\n    <span class="token class-name"><span class="token keyword">var</span></span> documentWriter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">DocumentWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token preprocessor property">#<span class="token directive keyword">endif</span></span></code></pre>\n      </div>\n<p>You can also write your own implementation of <code class="language-text">IErrorInfoProvider</code>. For instance, you might want to override\nthe numerical codes provided by GraphQL.NET for validation errors, reveal stack traces\nonly to logged-in administrators, or simply add information to the returned error object. Below is a sample\nof a custom <code class="language-text">IErrorInfoProvider</code> that adds a date stamp to returned error objects:</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyErrorInfoProvider</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">GraphQL<span class="token punctuation">.</span>Execution<span class="token punctuation">.</span>ErrorInfoProvider</span></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">ErrorInfo</span> <span class="token function">GetInfo</span><span class="token punctuation">(</span><span class="token class-name">ExecutionError</span> executionError<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token class-name"><span class="token keyword">var</span></span> info <span class="token operator">=</span> <span class="token keyword">base</span><span class="token punctuation">.</span><span class="token function">GetInfo</span><span class="token punctuation">(</span>executionError<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        info<span class="token punctuation">.</span>Extensions<span class="token punctuation">[</span><span class="token string">"timestamp"</span><span class="token punctuation">]</span> <span class="token operator">=</span> DateTime<span class="token punctuation">.</span>Now<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token string">"u"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> info<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>',
fields:{relativePath:"docs/guides/serialization.md"}},site:{siteMetadata:{githubEditUrl:"https://github.com/graphql-dotnet/graphql-dotnet/edit/master/docs2/site"}}},pathContext:{relativePath:"docs/guides/serialization.md"}}}});
//# sourceMappingURL=path---docs-guides-serialization-18b0fc9aa1534af202e0.js.map