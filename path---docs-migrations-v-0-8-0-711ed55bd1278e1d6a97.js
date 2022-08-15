webpackJsonp([0xa34611e76ff2],{351:function(n,s){n.exports={data:{markdownRemark:{html:'<h1 id="v080-upgrade-guide"><a href="#v080-upgrade-guide" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>v0.8.0 Upgrade Guide</h1>\n<h2 id="please-report-any-issues-you-find-with-this-new-behavior"><a href="#please-report-any-issues-you-find-with-this-new-behavior" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Please <a href="https://github.com/graphql-dotnet/graphql-dotnet/issues">report any issues</a> you find with this new behavior.</h2>\n<h2 id="abstract-syntax-tree"><a href="#abstract-syntax-tree" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Abstract Syntax Tree</h2>\n<p>The core language types have been updated to more closely represent the Abstract Syntax Tree of GraphQL.  This allows for the ability to "walk" the tree of the graph.  The language types implement <code class="language-text">INode</code>, which looks like:</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">INode</span>\n<span class="token punctuation">{</span>\n    <span class="token return-type class-name">IEnumerable<span class="token punctuation">&lt;</span>INode<span class="token punctuation">></span></span> Children <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token return-type class-name">SourceLocation</span> SourceLocation <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token return-type class-name"><span class="token keyword">bool</span></span> <span class="token function">IsEqualTo</span><span class="token punctuation">(</span><span class="token class-name">INode</span> node<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<ul>\n<li><code class="language-text">Children</code> is a list of child nodes, such as a <code class="language-text">SelectionSet</code>.</li>\n<li><code class="language-text">SourceLocation</code> contains the line/number of where the node is in the source operation.</li>\n</ul>\n<p><em>Note:</em> <code class="language-text">Selections</code> has been renamed to <code class="language-text">SelectionSet</code> and is now an <code class="language-text">INode</code>.</p>\n<p>You can walk the graph with a simple visitor such as <code class="language-text">BasicVisitor</code>.  An <code class="language-text">INodeVisitor</code> is passed to the <code class="language-text">BasicVisitor</code> which will walk the node graph and sequentially call <code class="language-text">Enter</code> and <code class="language-text">Leave</code> on each <code class="language-text">INodeVisitor</code> with the current <code class="language-text">INode</code>.</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">VisitDocument</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> operation<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">AntlrDocumentBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> document <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span>operation<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token class-name"><span class="token keyword">var</span></span> debugVisitor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">DebugNodeVisitor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> basicVisitor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">BasicVisitor</span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>debugVisitor<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    basicVisitor<span class="token punctuation">.</span><span class="token function">Visit</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DebugNodeVisitor</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">INodeVisitor</span></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Enter</span><span class="token punctuation">(</span><span class="token class-name">INode</span> node<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Debug<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$"Entering </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">node</span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Leave</span><span class="token punctuation">(</span><span class="token class-name">INode</span> node<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Debug<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$"Leaving </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">node</span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>You can also use funcs to make matching a particular <code class="language-text">INode</code> easy:</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">new</span> <span class="token constructor-invocation class-name">NodeVisitorMatchFuncListener<span class="token punctuation">&lt;</span>Field<span class="token punctuation">></span></span><span class="token punctuation">(</span>\n    n <span class="token operator">=></span> n <span class="token keyword">is</span> <span class="token class-name">Field</span><span class="token punctuation">,</span>\n    field <span class="token operator">=></span>\n    <span class="token punctuation">{</span>\n      <span class="token comment">// do something with the field</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NodeVisitorMatchFuncListener<span class="token punctuation">&lt;</span>T<span class="token punctuation">></span></span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">INodeVisitor</span></span>\n    <span class="token keyword">where</span> <span class="token class-name">T</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">INode</span></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">Func<span class="token punctuation">&lt;</span>INode<span class="token punctuation">,</span> <span class="token keyword">bool</span><span class="token punctuation">></span></span> _match<span class="token punctuation">;</span>\n    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">Action<span class="token punctuation">&lt;</span>T<span class="token punctuation">></span></span> _action<span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token function">NodeVisitorMatchFuncListener</span><span class="token punctuation">(</span><span class="token class-name">Func<span class="token punctuation">&lt;</span>INode<span class="token punctuation">,</span> <span class="token keyword">bool</span><span class="token punctuation">></span></span> match<span class="token punctuation">,</span> <span class="token class-name">Action<span class="token punctuation">&lt;</span>T<span class="token punctuation">></span></span> action<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        _match <span class="token operator">=</span> match<span class="token punctuation">;</span>\n        _action <span class="token operator">=</span> action<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Enter</span><span class="token punctuation">(</span><span class="token class-name">INode</span> node<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">_match</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token function">_action</span><span class="token punctuation">(</span><span class="token punctuation">(</span>T<span class="token punctuation">)</span> node<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Leave</span><span class="token punctuation">(</span><span class="token class-name">INode</span> node<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><em>Additional updates and changes will most likely be coming to the AST as more validation rules are implemented, however they should not be as drastic.</em></p>\n<h2 id="scalars"><a href="#scalars" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Scalars</h2>\n<p><code class="language-text">Coerce</code> has been removed and has been replaced by <code class="language-text">ParseValue</code>, <code class="language-text">ParseLiteral</code>, and <code class="language-text">Serialize</code>.</p>\n<ul>\n<li><code class="language-text">ParseValue</code> - This should contain the logic previously found in <code class="language-text">Coerce</code>.</li>\n<li><code class="language-text">ParseLiteral</code> - This takes in an AST <code class="language-text">IValue</code> that should be converted to a real value. <code class="language-text">StringValue</code>, <code class="language-text">IntValue</code>, <code class="language-text">LongValue</code>, <code class="language-text">FloatValue</code>, <code class="language-text">EnumValue</code>, <code class="language-text">ListValue</code>, <code class="language-text">ObjectValue</code>.</li>\n<li><code class="language-text">Serialize</code> - The value to output.</li>\n</ul>\n<p>An example from <code class="language-text">FloatGraphType</code>:</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FloatGraphType</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ScalarGraphType</span></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token function">FloatGraphType</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Name <span class="token operator">=</span> <span class="token string">"Float"</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Serialize</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> <span class="token keyword">value</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">ParseValue</span><span class="token punctuation">(</span><span class="token keyword">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">ParseValue</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> <span class="token keyword">value</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token class-name"><span class="token keyword">double</span></span> result<span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">double</span><span class="token punctuation">.</span><span class="token function">TryParse</span><span class="token punctuation">(</span><span class="token keyword">value</span><span class="token punctuation">?.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token keyword">string</span><span class="token punctuation">.</span>Empty<span class="token punctuation">,</span> <span class="token keyword">out</span> result<span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> result<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">ParseLiteral</span><span class="token punctuation">(</span><span class="token class-name">IValue</span> <span class="token keyword">value</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token class-name"><span class="token keyword">var</span></span> floatVal <span class="token operator">=</span> <span class="token keyword">value</span> <span class="token keyword">as</span> <span class="token class-name">FloatValue</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> floatVal<span class="token punctuation">?.</span>Value<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>',fields:{relativePath:"docs/migrations/v0_8_0.md"}},site:{siteMetadata:{githubEditUrl:"https://github.com/graphql-dotnet/graphql-dotnet/edit/master/docs2/site"}}},pathContext:{relativePath:"docs/migrations/v0_8_0.md"}}}});
//# sourceMappingURL=path---docs-migrations-v-0-8-0-711ed55bd1278e1d6a97.js.map