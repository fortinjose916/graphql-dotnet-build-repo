webpackJsonp([87071238410674],{344:function(e,a){e.exports={data:{markdownRemark:{html:'<h1 id="migrating-from-v017x-to-v2"><a href="#migrating-from-v017x-to-v2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Migrating from v0.17.x to v2</h1>\n<h2 id="new-features"><a href="#new-features" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>New Features</h2>\n<ul>\n<li>This documentation!</li>\n<li>Subscriptions - <a href="https://graphql-dotnet.github.io/docs/getting-started/subscriptions">details</a></li>\n<li>DataLoader - helps solve N+1 requests - <a href="https://graphql-dotnet.github.io/docs/guides/dataloader">details</a></li>\n<li>New <code class="language-text">SchemaBuilder</code> that supports GraphQL schema language. <a href="https://graphql-dotnet.github.io/docs/getting-started/introduction#schema-first-approach">details</a></li>\n<li>Unique Directive Per Location Validation Rule -  <a href="https://github.com/graphql-dotnet/graphql-dotnet/issues/231">details</a></li>\n<li>Apollo Tracing - <a href="https://graphql-dotnet.github.io/docs/getting-started/metrics">details</a></li>\n<li>Parser support for the <code class="language-text">null</code> keyword</li>\n<li>Addition of <code class="language-text">IDependencyResolver</code> for dependency injection - <a href="https://graphql-dotnet.github.io/docs/getting-started/dependency-injection">details</a></li>\n<li>Add <code class="language-text">ThrowOnUnhandledException</code> to <code class="language-text">ExecutionOptions</code>. <a href="https://github.com/graphql-dotnet/graphql-dotnet/pull/776">details</a></li>\n<li>Add the ability to return a <code class="language-text">GraphQLTypeReference</code> from <code class="language-text">ResolveType</code> <a href="https://github.com/graphql-dotnet/graphql-dotnet/pull/775">details</a></li>\n<li>General updates to conform to the June 2018 Specification - <a href="https://github.com/facebook/graphql/releases/tag/June2018">details</a></li>\n</ul>\n<h2 id="breaking-changes"><a href="#breaking-changes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Breaking Changes</h2>\n<h3 id="dependency-injection"><a href="#dependency-injection" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Dependency Injection</h3>\n<p>The func that was previously used for dependency injection has been replaced by the <code class="language-text">IDependencyResolver</code> interface.  Use <code class="language-text">FuncDependencyResolver</code> to help integrate with containers.  See the <a href="https://graphql-dotnet.github.io/docs/getting-started/dependency-injection">Dependency Injection documentation</a> for more details.</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Obsolete</span></span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token function">Schema</span><span class="token punctuation">(</span><span class="token class-name">Func<span class="token punctuation">&lt;</span>Type<span class="token punctuation">,</span> IGraphType<span class="token punctuation">></span></span> resolveType<span class="token punctuation">)</span>\n    <span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">FuncDependencyResolver</span><span class="token punctuation">(</span>resolveType<span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token function">Schema</span><span class="token punctuation">(</span><span class="token class-name">IDependencyResolver</span> dependencyResolver<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n  <span class="token range operator">..</span><span class="token punctuation">.</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h3 id="documentwriter"><a href="#documentwriter" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>DocumentWriter</h3>\n<p>The <code class="language-text">JsonSerializerSettings</code> now use all default values.  This was altered to support the changes to dates.</p>\n<h3 id="dates"><a href="#dates" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Dates</h3>\n<p>The <code class="language-text">DateGraphType</code> has been split into multiple types.  <a href="https://github.com/graphql-dotnet/graphql-dotnet/issues/662">See the GitHub issue</a> for more details.</p>\n<ul>\n<li>\n<p><code class="language-text">DateGraphType</code> - A date with no time.</p>\n<ul>\n<li>Scalar Name: <code class="language-text">Date</code></li>\n<li>Format: <code class="language-text">2018-05-17</code> (ISO8601 compliant).</li>\n<li>Maps to .NET type - <code class="language-text">System.DateTime</code></li>\n<li>Added to <code class="language-text">GraphTypeRegistry</code> as the default representation of <code class="language-text">System.DateTime</code>.</li>\n</ul>\n</li>\n<li>\n<p><code class="language-text">DateTimeGraphType</code> - A date and time.</p>\n<ul>\n<li>Scalar Name: <code class="language-text">DateTime</code></li>\n<li>Format: <code class="language-text">2018-05-17T12:11:06.3684072Z</code> (ISO8601 compliant).</li>\n<li>Maps to .NET type - <code class="language-text">System.DateTime</code></li>\n</ul>\n</li>\n<li>\n<p><code class="language-text">DateTimeOffsetGraphType</code>  - A date and time with an offset.</p>\n<ul>\n<li>Scalar Name: <code class="language-text">DateTimeOffset</code></li>\n<li>Format: : <code class="language-text">2018-05-17T13:11:06.368408+01:00</code> (ISO8601 compliant).</li>\n<li>Maps to .NET type <code class="language-text">System.DateTimeOffset</code></li>\n<li>Added to <code class="language-text">GraphTypeRegistry</code> as the default representation of <code class="language-text">System.DateTimeOffset</code>.</li>\n</ul>\n</li>\n<li>\n<p><code class="language-text">TimeSpanSecondsGraphType</code> - A period of time as seconds.</p>\n<ul>\n<li>Scalar Name: <code class="language-text">Seconds</code></li>\n<li>Format: <code class="language-text">10</code></li>\n<li>Maps to .NET type - <code class="language-text">System.TimeSpan</code></li>\n<li>Added to <code class="language-text">GraphTypeRegistry</code> as the default representation of <code class="language-text">System.TimeSpan</code>.</li>\n</ul>\n</li>\n<li>\n<p><code class="language-text">TimeSpanMillisecondsGraphType</code> - A period of time as milliseconds.</p>\n<ul>\n<li>Scalar Name: <code class="language-text">Milliseconds</code></li>\n<li>Format: <code class="language-text">100</code></li>\n<li>Maps to .NET type - <code class="language-text">System.TimeSpan</code></li>\n</ul>\n</li>\n</ul>\n<h3 id="names"><a href="#names" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Names</h3>\n<p>Fields, enumerations, and arguments all now have their names validated according to the GraphQL spec, which is <code class="language-text">/[_A-Za-z][_0-9A-Za-z]*/</code>.</p>\n<p><code class="language-text">QueryArgument</code> names are now run through the <code class="language-text">IFieldNameConverter</code> set on the <code class="language-text">Schema</code>.</p>\n<h3 id="schemaprinter"><a href="#schemaprinter" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>SchemaPrinter</h3>\n<p><code class="language-text">SchemaPrinter</code> now only ignores core GraphQL scalars by default.  Those are <code class="language-text">String</code>, <code class="language-text">Boolean</code>, <code class="language-text">Int</code>, <code class="language-text">Float</code>, and <code class="language-text">ID</code>.  <a href="https://github.com/graphql-dotnet/graphql-dotnet/issues/378">See the GitHub issue</a> for more details.</p>',fields:{relativePath:"docs/migrations/migration2.md"}},site:{siteMetadata:{githubEditUrl:"https://github.com/graphql-dotnet/graphql-dotnet/edit/master/docs2/site"}}},pathContext:{relativePath:"docs/migrations/migration2.md"}}}});
//# sourceMappingURL=path---docs-migrations-migration-2-12e6d729190fab470be4.js.map