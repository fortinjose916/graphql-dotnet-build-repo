webpackJsonp([0xa73a45b851b],{287:function(n,s){n.exports={data:{markdownRemark:{html:'<h1 id="query-organization"><a href="#query-organization" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Query Organization</h1>\n<p>In GraphQL there is only a single root <code class="language-text">Query</code> object. This can make your root objects bloat with unrelated functionality.  You can group sets of functionality by adding a top level group.  You can apply this same trick to mutations and subscriptions.</p>\n<div class="gatsby-highlight" data-language="graphql">\n      <pre class="language-graphql"><code class="language-graphql"><span class="token keyword">type</span> <span class="token class-name">Query</span> <span class="token punctuation">{</span>\n  <span class="token attr-name">customer</span><span class="token punctuation">(</span><span class="token attr-name">id</span><span class="token punctuation">:</span> ID<span class="token punctuation">)</span><span class="token punctuation">:</span> Customer\n  <span class="token attr-name">order</span><span class="token punctuation">(</span><span class="token attr-name">id</span><span class="token punctuation">:</span> ID<span class="token punctuation">)</span><span class="token punctuation">:</span> Order\n  <span class="token attr-name">products</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>Product<span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Query</span> <span class="token punctuation">:</span> <span class="token class-name">ObjectGraphType</span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token function">Query</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    Name <span class="token operator">=</span> <span class="token string">"Query"</span><span class="token punctuation">;</span>\n    <span class="token generic-method"><span class="token function">Field</span><span class="token punctuation">&lt;</span><span class="token class-name">CustomerGraphType</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token string">"customer"</span><span class="token punctuation">,</span> arguments<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span> resolve<span class="token punctuation">:</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token generic-method"><span class="token function">Field</span><span class="token punctuation">&lt;</span><span class="token class-name">OrderGraphType</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token string">"order"</span><span class="token punctuation">,</span> arguments<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span> resolve<span class="token punctuation">:</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    Field<span class="token operator">&lt;</span>ListGraphType<span class="token operator">&lt;</span>ProductGraphType<span class="token operator">>></span><span class="token punctuation">(</span><span class="token string">"products"</span><span class="token punctuation">,</span> arguments<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span> resolve<span class="token punctuation">:</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Split into groups.</p>\n<div class="gatsby-highlight" data-language="graphql">\n      <pre class="language-graphql"><code class="language-graphql"><span class="token keyword">type</span> <span class="token class-name">Account</span> <span class="token punctuation">{</span>\n  <span class="token attr-name">customer</span><span class="token punctuation">(</span><span class="token attr-name">id</span><span class="token punctuation">:</span> ID<span class="token punctuation">)</span><span class="token punctuation">:</span> Customer\n  <span class="token attr-name">order</span><span class="token punctuation">(</span><span class="token attr-name">id</span><span class="token punctuation">:</span> ID<span class="token punctuation">)</span><span class="token punctuation">:</span> Order\n<span class="token punctuation">}</span>\n\n<span class="token keyword">type</span> <span class="token class-name">Retail</span> <span class="token punctuation">{</span>\n  <span class="token attr-name">products</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>Product<span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">type</span> <span class="token class-name">Query</span> <span class="token punctuation">{</span>\n  <span class="token attr-name">account</span><span class="token punctuation">:</span> Account\n  <span class="token attr-name">retail</span><span class="token punctuation">:</span> Retail\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>The trick is to return an empty object.</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Query</span> <span class="token punctuation">:</span> <span class="token class-name">ObjectGraphType</span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token function">Query</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    Name <span class="token operator">=</span> <span class="token string">"Query"</span><span class="token punctuation">;</span>\n    <span class="token generic-method"><span class="token function">Field</span><span class="token punctuation">&lt;</span><span class="token class-name">AccountGroupGraphType</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token string">"account"</span><span class="token punctuation">,</span> resolve<span class="token punctuation">:</span> context <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token generic-method"><span class="token function">Field</span><span class="token punctuation">&lt;</span><span class="token class-name">RetailGroupGraphType</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token string">"retail"</span><span class="token punctuation">,</span> resolve<span class="token punctuation">:</span> context <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AccountGroupGraphType</span> <span class="token punctuation">:</span> <span class="token class-name">ObjectGraphType</span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token function">AccountGroupGraphType</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    Name <span class="token operator">=</span> <span class="token string">"Account"</span><span class="token punctuation">;</span>\n    <span class="token generic-method"><span class="token function">Field</span><span class="token punctuation">&lt;</span><span class="token class-name">CustomerGraphType</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token string">"customer"</span><span class="token punctuation">,</span> arguments<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span> resolve<span class="token punctuation">:</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token generic-method"><span class="token function">Field</span><span class="token punctuation">&lt;</span><span class="token class-name">OrderGraphType</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token string">"order"</span><span class="token punctuation">,</span> arguments<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span> resolve<span class="token punctuation">:</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RetailGroupGraphType</span> <span class="token punctuation">:</span> <span class="token class-name">ObjectGraphType</span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token function">RetailGroupGraphType</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    Name <span class="token operator">=</span> <span class="token string">"Retail"</span><span class="token punctuation">;</span>\n    Field<span class="token operator">&lt;</span>ListGraphType<span class="token operator">&lt;</span>ProductGraphType<span class="token operator">>></span><span class="token punctuation">(</span><span class="token string">"products"</span><span class="token punctuation">,</span> arguments<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span> resolve<span class="token punctuation">:</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>',fields:{relativePath:"docs/getting-started/query-organization.md"}},site:{siteMetadata:{githubEditUrl:"https://github.com/graphql-dotnet/graphql-dotnet/edit/master/docs2/site"}}},pathContext:{relativePath:"docs/getting-started/query-organization.md"}}}});
//# sourceMappingURL=path---docs-getting-started-query-organization-e220abcbd41521ec8a77.js.map