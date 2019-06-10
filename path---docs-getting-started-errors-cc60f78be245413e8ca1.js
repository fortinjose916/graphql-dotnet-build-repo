webpackJsonp([75494656540334],{274:function(n,s){n.exports={data:{markdownRemark:{html:'<h1 id="error-handling"><a href="#error-handling" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Error Handling</h1>\n<p>The <code class="language-text">ExecutionResult</code> provides an <code class="language-text">Errors</code> property which includes any errors encountered during exectution.  Errors are returned <a href="http://facebook.github.io/graphql/June2018/#sec-Errors">according to the spec</a>, which means stack traces are excluded.  The <code class="language-text">ExecutionResult</code> is transformed to what the spec requires using JSON.NET.  You can change what information is provided by overriding the JSON Converter.</p>\n<p>To help debug errors, you can set <code class="language-text">ExposeExceptions</code> on <code class="language-text">ExecutionOptions</code> which will expose error stack traces.</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">var</span> executor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DocumentExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">ExecutionResult</span> result <span class="token operator">=</span> <span class="token keyword">await</span> executor<span class="token punctuation">.</span><span class="token function">ExecuteAsync</span><span class="token punctuation">(</span>_ <span class="token operator">=></span>\n<span class="token punctuation">{</span>\n  _<span class="token punctuation">.</span>Query <span class="token operator">=</span> <span class="token string">"..."</span><span class="token punctuation">;</span>\n  _<span class="token punctuation">.</span>ExposeExceptions <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>You can throw an <code class="language-text">ExecutionError</code> error in your resolver and it will be caught and displayed.  You can also add errors to the <code class="language-text">ResolveFieldContext.Errors</code> directly.</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token generic-method"><span class="token function">Field</span><span class="token punctuation">&lt;</span><span class="token class-name">DroidType</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>\n  <span class="token string">"hero"</span><span class="token punctuation">,</span>\n  resolve<span class="token punctuation">:</span> context <span class="token operator">=></span> context<span class="token punctuation">.</span>Errors<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ExecutionError</span><span class="token punctuation">(</span><span class="token string">"Error Message"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token generic-method"><span class="token function">Field</span><span class="token punctuation">&lt;</span><span class="token class-name">DroidType</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>\n  <span class="token string">"hero"</span><span class="token punctuation">,</span>\n  resolve<span class="token punctuation">:</span> context <span class="token operator">=></span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ExecutionError</span><span class="token punctuation">(</span><span class="token string">"Error Message"</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>You can provide additional error handling or logging for fields by adding Field Middleware.</p>',fields:{relativePath:"docs/getting-started/errors.md"}},site:{siteMetadata:{githubEditUrl:"https://github.com/graphql-dotnet/graphql-dotnet/edit/master/docs2/site"}}},pathContext:{relativePath:"docs/getting-started/errors.md"}}}});
//# sourceMappingURL=path---docs-getting-started-errors-cc60f78be245413e8ca1.js.map