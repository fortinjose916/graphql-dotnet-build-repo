webpackJsonp([0x61e2a6ddfb17],{338:function(n,a){n.exports={data:{markdownRemark:{html:'<h1 id="document-caching"><a href="#document-caching" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Document Caching</h1>\n<p>In order to process a GraphQL request, the incoming request must be parsed and validated prior to execution. The parsed and validated\ndocument may be cached in order to save execution time the next time the same document is executed. Note that the\nrequest may select a different operation or have different variables but still be the same document. For usage patterns where the same\ndocument is executed repeatedly, caching can be enabled in order to increase throughput at the cost of memory use. As this may be\ndetrimental for performance for certain workloads, it is disabled by default.</p>\n<p>Document caching is provided through the <code class="language-text">IDocumentCache</code> interface. To enable document caching, you will need to construct the document\nexecuter instance with a <code class="language-text">IDocumentCache</code> implementation. There is a memory-backed implementation called <code class="language-text">MemoryDocumentCache</code> in the NuGet\n<a href="https://www.nuget.org/packages/GraphQL.MemoryCache">GraphQL.MemoryCache</a> package. The implementation is backed by\n<code class="language-text">Microsoft.Extensions.Caching.Memory.IMemoryCache</code> and provides options for specifying the maximum amount of objects to cache\n(measured in total length of the cached queries), and/or the expiration time of cached queries.</p>\n<p>Below are samples of how to use the caching engine:</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token class-name"><span class="token keyword">var</span></span> memoryDocumentCache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">MemoryDocumentCache</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">MemoryDocumentCacheOptions</span> <span class="token punctuation">{</span>\n    <span class="token comment">// maximum total cached query length of 1,000,000 bytes (assume 10x memory usage</span>\n    <span class="token comment">// for 10MB maximum memory use by the cache - parsed AST and other stuff)</span>\n    SizeLimit <span class="token operator">=</span> <span class="token number">1000000</span><span class="token punctuation">,</span>\n    <span class="token comment">// no expiration of cached queries (cached queries are only ejected when the cache is full)</span>\n    SlidingExpiration <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token class-name"><span class="token keyword">var</span></span> executer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">DocumentExecuter</span><span class="token punctuation">(</span>\n    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">GraphQLDocumentBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">DocumentValidator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ComplexityAnalyzer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    memoryDocumentCache<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>If you utilize dependency injection, register the memory cache and document executer as singletons. Below is a sample for the\n<code class="language-text">Microsoft.Extensions.DependencyInjection</code> service provider:</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp">services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddSingleton</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IDocumentCache<span class="token punctuation">></span></span></span><span class="token punctuation">(</span>services <span class="token operator">=></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">MemoryDocumentCache</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">MemoryDocumentCacheOptions</span> <span class="token punctuation">{</span>\n        <span class="token comment">// maximum total cached query length of 1,000,000 bytes (assume 10x memory usage</span>\n        <span class="token comment">// for 10MB maximum memory use by the cache)</span>\n        SizeLimit <span class="token operator">=</span> <span class="token number">1000000</span><span class="token punctuation">,</span>\n        <span class="token comment">// no expiration of cached queries (cached queries are only ejected when the cache is full)</span>\n        SlidingExpiration <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nservices<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddSingleton</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IDocumentExecuter<span class="token punctuation">></span></span></span><span class="token punctuation">(</span>services <span class="token operator">=></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">DocumentExecuter</span><span class="token punctuation">(</span>\n        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">GraphQLDocumentBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">DocumentValidator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ComplexityAnalyzer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRequiredService</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IDocumentCache<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="notes"><a href="#notes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Notes</h2>\n<p>If literal values are passed as arguments to a query, those literals are part of the cached document, so a\nsimilar request with different argument literals will be parsed, validated, and cached separately. So it is very\nimportant to provide arguments via variables and not as literals within the query (unless the arguments are constants).</p>\n<p>Document caching assumes that validation rules do not depend on the inputs or user context for the execution. Further,\ndocuments are not cached unless they pass validation. So it is assumed that validation need not run on queries that\nhave been cached. If you have custom validation rules that examine the user context or inputs, you will want to add\nthose validation rules to <code class="language-text">ExecutionOptions.CachedDocumentValidationRules</code> so they run for every execution.</p>',fields:{relativePath:"docs/guides/document-caching.md"}},site:{siteMetadata:{githubEditUrl:"https://github.com/graphql-dotnet/graphql-dotnet/edit/master/docs2/site"}}},pathContext:{relativePath:"docs/guides/document-caching.md"}}}});
//# sourceMappingURL=path---docs-guides-document-caching-68b59920c8e0d1f70568.js.map