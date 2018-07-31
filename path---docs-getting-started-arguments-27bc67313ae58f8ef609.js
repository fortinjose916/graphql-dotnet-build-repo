webpackJsonp([76576268814232],{294:function(n,s){n.exports={data:{markdownRemark:{html:'<h1 id="arguments"><a href="#arguments" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Arguments</h1>\n<p>You can provide arguments to a field.  You can use <code class="language-text">GetArgument</code> on <code class="language-text">ResolveFieldContext</code> to retrieve argument values.  <code class="language-text">GetArgument</code> will attempt to coerce the argument values to the generic type it is given, including primitive values, objects, and enumerations.  You can gain access to the value directly through the <code class="language-text">Arguments</code> dictionary on <code class="language-text">ResolveFieldContext</code>.</p>\n<div class="gatsby-highlight" data-language="graphql">\n      <pre class="language-graphql"><code class="language-graphql"><span class="token keyword">query</span> <span class="token punctuation">{</span>\n  droid<span class="token punctuation">(</span><span class="token attr-name">id</span><span class="token punctuation">:</span> <span class="token string">"123"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    id\n    name\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="handler--endpoints"><a href="#handler--endpoints" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Handler / Endpoints</h2>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Droid</span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token keyword">string</span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n  <span class="token keyword">public</span> <span class="token keyword">string</span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Query</span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">private</span> List<span class="token operator">&lt;</span>Droid<span class="token operator">></span> _droids <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">List</span><span class="token operator">&lt;</span>Droid<span class="token operator">></span>\n  <span class="token punctuation">{</span>\n    <span class="token keyword">new</span> <span class="token class-name">Droid</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token string">"123"</span><span class="token punctuation">,</span> Name <span class="token operator">=</span> <span class="token string">"R2-D2"</span> <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token punctuation">[</span><span class="token class-name">GraphQLMetadata</span><span class="token punctuation">(</span><span class="token string">"droid"</span><span class="token punctuation">)</span><span class="token punctuation">]</span>\n  <span class="token keyword">public</span> <span class="token class-name">Droid</span> <span class="token function">GetDroid</span><span class="token punctuation">(</span><span class="token keyword">string</span> id<span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> _droids<span class="token punctuation">.</span><span class="token function">FirstOrDefault</span><span class="token punctuation">(</span>x <span class="token operator">=</span><span class="token operator">></span> x<span class="token punctuation">.</span>Id <span class="token operator">==</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> schema <span class="token operator">=</span> Schema<span class="token punctuation">.</span><span class="token function">For</span><span class="token punctuation">(</span><span class="token string">@"\n  type Droid {\n    id: ID!\n    name: String\n  }\n\n  type Query {\n    droid(id: ID!): Droid\n  }\n"</span><span class="token punctuation">,</span> _ <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    _<span class="token punctuation">.</span>Types<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Include</span><span class="token punctuation">&lt;</span><span class="token class-name">Query</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> json <span class="token operator">=</span> schema<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span>_ <span class="token operator">=</span><span class="token operator">></span>\n<span class="token punctuation">{</span>\n  _<span class="token punctuation">.</span>Query <span class="token operator">=</span> $<span class="token string">"{{ droid(id: \\"123\\") {{ id name }} }}"</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="graphtypes"><a href="#graphtypes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>GraphTypes</h2>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Droid</span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token keyword">string</span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n  <span class="token keyword">public</span> <span class="token keyword">string</span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DroidType</span> <span class="token punctuation">:</span> <span class="token class-name">ObjectGraphType</span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token function">DroidType</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    Field<span class="token operator">&lt;</span>NonNullGraphType<span class="token operator">&lt;</span>IdGraphType<span class="token operator">></span><span class="token operator">></span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token generic-method"><span class="token function">Field</span><span class="token punctuation">&lt;</span><span class="token class-name">StringGraphType</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StarWarsQuery</span> <span class="token punctuation">:</span> <span class="token class-name">ObjectGraphType</span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">private</span> List<span class="token operator">&lt;</span>Droid<span class="token operator">></span> _droids <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">List</span><span class="token operator">&lt;</span>Droid<span class="token operator">></span>\n  <span class="token punctuation">{</span>\n    <span class="token keyword">new</span> <span class="token class-name">Droid</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token string">"123"</span><span class="token punctuation">,</span> Name <span class="token operator">=</span> <span class="token string">"R2-D2"</span> <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">public</span> <span class="token function">StarWarsQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    <span class="token generic-method"><span class="token function">Field</span><span class="token punctuation">&lt;</span><span class="token class-name">DroidType</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>\n      <span class="token string">"droid"</span><span class="token punctuation">,</span>\n      arguments<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">QueryArguments</span><span class="token punctuation">(</span>\n        <span class="token keyword">new</span> <span class="token class-name">QueryArgument</span><span class="token operator">&lt;</span>IdGraphType<span class="token operator">></span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">"id"</span> <span class="token punctuation">}</span>\n      <span class="token punctuation">)</span><span class="token punctuation">,</span>\n      resolve<span class="token punctuation">:</span> context <span class="token operator">=</span><span class="token operator">></span>\n      <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> id <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetArgument</span><span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> _droids<span class="token punctuation">.</span><span class="token function">FirstOrDefault</span><span class="token punctuation">(</span>x <span class="token operator">=</span><span class="token operator">></span> x<span class="token punctuation">.</span>Id <span class="token operator">==</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> schema <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Schema</span> <span class="token punctuation">{</span> Query <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StarWarsQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> json <span class="token operator">=</span> schema<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span>_ <span class="token operator">=</span><span class="token operator">></span>\n<span class="token punctuation">{</span>\n  _<span class="token punctuation">.</span>Query <span class="token operator">=</span> $<span class="token string">"{{ droid(id: \\"123\\") {{ id name }} }}"</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>',fields:{relativePath:"docs/getting-started/arguments.md"}},site:{siteMetadata:{githubEditUrl:"https://github.com/graphql-dotnet/graphql-dotnet/edit/master/docs2/site"}}},pathContext:{relativePath:"docs/getting-started/arguments.md"}}}});
//# sourceMappingURL=path---docs-getting-started-arguments-27bc67313ae58f8ef609.js.map