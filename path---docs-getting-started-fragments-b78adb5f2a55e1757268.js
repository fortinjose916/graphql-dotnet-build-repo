webpackJsonp([0x8f6de6b61789],{317:function(n,a){n.exports={data:{markdownRemark:{html:'<h1 id="fragments"><a href="#fragments" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Fragments</h1>\n<p>Fragments let you construct sets of fields and then include them in queries where you need to.</p>\n<div class="gatsby-highlight" data-language="graphql">\n      <pre class="language-graphql"><code class="language-graphql"><span class="token keyword">query</span> <span class="token punctuation">{</span>\n  <span class="token attr-name">leftComparison</span><span class="token punctuation">:</span> <span class="token property-query">hero</span><span class="token punctuation">(</span><span class="token attr-name">id</span><span class="token punctuation">:</span> <span class="token string">"1"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span><span class="token fragment function">comparisonFields</span>\n  <span class="token punctuation">}</span>\n  <span class="token attr-name">rightComparison</span><span class="token punctuation">:</span> <span class="token property-query">hero</span><span class="token punctuation">(</span><span class="token attr-name">id</span><span class="token punctuation">:</span> <span class="token string">"2"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span><span class="token fragment function">comparisonFields</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">fragment</span> <span class="token fragment function">comparisonFields</span> <span class="token keyword">on</span> <span class="token class-name">Character</span> <span class="token punctuation">{</span>\n  <span class="token property">name</span>\n  <span class="token property">appearsIn</span>\n  <span class="token object">friends</span> <span class="token punctuation">{</span>\n    <span class="token property">name</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>',fields:{relativePath:"docs/getting-started/fragments.md"}},site:{siteMetadata:{githubEditUrl:"https://github.com/graphql-dotnet/graphql-dotnet/edit/master/docs2/site"}}},pathContext:{relativePath:"docs/getting-started/fragments.md"}}}});
//# sourceMappingURL=path---docs-getting-started-fragments-b78adb5f2a55e1757268.js.map