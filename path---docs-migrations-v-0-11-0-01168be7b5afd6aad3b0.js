webpackJsonp([0x75d45844402a],{342:function(e,a){e.exports={data:{markdownRemark:{html:'<h1 id="v0110-upgrade-guide"><a href="#v0110-upgrade-guide" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>v0.11.0 Upgrade Guide</h1>\n<h2 id="lanuage-types-namespace-change"><a href="#lanuage-types-namespace-change" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Lanuage Types Namespace Change</h2>\n<p>The language AST types have been moved from <code class="language-text">GraphQL.Language</code> to <code class="language-text">GraphQL.Language.AST</code>.</p>\n<h2 id="new-parser"><a href="#new-parser" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>New Parser</h2>\n<p>This release adds a new lexer and parser for the GraphQL language.  The <code class="language-text">AntlrDocumentBuilder</code> is now deprecated in favor of the <code class="language-text">GraphQLDocumentBuilder</code>.  This new lexer and parser are written in C# and have no other dependencies.  It is also slightly faster than the <code class="language-text">AntlrDocumentBuilder</code>.</p>\n<p>The new parser can be found at <a href="http://github.com/graphql-dotnet/parser">graphql-dotnet/parser</a>.</p>\n<p>The <code class="language-text">AntlrDocumentBuilder</code> will be removed in the next major release.</p>',fields:{relativePath:"docs/migrations/v0_11_0.md"}},site:{siteMetadata:{githubEditUrl:"https://github.com/graphql-dotnet/graphql-dotnet/edit/master/docs2/site"}}},pathContext:{relativePath:"docs/migrations/v0_11_0.md"}}}});
//# sourceMappingURL=path---docs-migrations-v-0-11-0-01168be7b5afd6aad3b0.js.map