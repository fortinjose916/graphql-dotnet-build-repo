webpackJsonp([0x7791409198f1],{300:function(n,a){n.exports={data:{markdownRemark:{html:'<h1 id="field-middleware"><a href="#field-middleware" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Field Middleware</h1>\n<p>You can write middleware for fields to provide additional behaviors during field resolution.  The following example is how Metrics are captured.  You register Field Middleware in the <code class="language-text">ExecutionOptions</code>.</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp">schema<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span>_ <span class="token operator">=</span><span class="token operator">></span>\n<span class="token punctuation">{</span>\n  _<span class="token punctuation">.</span>Query <span class="token operator">=</span> <span class="token string">"..."</span><span class="token punctuation">;</span>\n  _<span class="token punctuation">.</span>FieldMiddleware<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Use</span><span class="token punctuation">&lt;</span><span class="token class-name">InstrumentFieldsMiddleware</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>You can write a class that has a <code class="language-text">Resolve</code> method or you can register a middleware delegate directly.</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InstrumentFieldsMiddleware</span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">public</span> Task<span class="token operator">&lt;</span><span class="token keyword">object</span><span class="token operator">></span> <span class="token function">Resolve</span><span class="token punctuation">(</span>\n    <span class="token class-name">ResolveFieldContext</span> context<span class="token punctuation">,</span>\n    <span class="token class-name">FieldMiddlewareDelegate</span> next<span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> metadata <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dictionary</span><span class="token operator">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">object</span><span class="token operator">></span>\n    <span class="token punctuation">{</span>\n      <span class="token punctuation">{</span><span class="token string">"typeName"</span><span class="token punctuation">,</span> context<span class="token punctuation">.</span>ParentType<span class="token punctuation">.</span>Name<span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span><span class="token string">"fieldName"</span><span class="token punctuation">,</span> context<span class="token punctuation">.</span>FieldName<span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">using</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>Metrics<span class="token punctuation">.</span><span class="token function">Subject</span><span class="token punctuation">(</span><span class="token string">"field"</span><span class="token punctuation">,</span> context<span class="token punctuation">.</span>FieldName<span class="token punctuation">,</span> metadata<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>The middleware delegate is defined as:</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">delegate</span> Task<span class="token operator">&lt;</span><span class="token keyword">object</span><span class="token operator">></span> <span class="token function">FieldMiddlewareDelegate</span><span class="token punctuation">(</span><span class="token class-name">ResolveFieldContext</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp">_<span class="token punctuation">.</span>FieldMiddleware<span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span>next <span class="token operator">=</span><span class="token operator">></span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">return</span> context <span class="token operator">=</span><span class="token operator">></span>\n  <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>',fields:{relativePath:"docs/getting-started/field-middleware.md"}},site:{siteMetadata:{githubEditUrl:"https://github.com/graphql-dotnet/graphql-dotnet/edit/master/docs2/site"}}},pathContext:{relativePath:"docs/getting-started/field-middleware.md"}}}});
//# sourceMappingURL=path---docs-getting-started-field-middleware-28052d25a0224d2dc184.js.map