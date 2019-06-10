webpackJsonp([0x67ef26645b2a,60335399758886],{71:function(e,t){e.exports={data:{site:{siteMetadata:{title:"GraphQL .NET",description:"GraphQL for .NET",keywords:"graphql,api,web api,.net,.net core",githubUrl:"https://github.com/graphql-dotnet/graphql-dotnet"}},menu:{pages:[{title:"GraphQL .NET",dir:"./",url:"/",file:"pages/landing.js",sidemenu:[]},{title:"Docs",dir:"./docs",url:"/docs/getting-started/introduction",sidemenu:[{title:"Getting Started",dir:"getting-started",items:[{title:"Introduction",file:"introduction.md",url:"/docs/getting-started/introduction",items:[]},{title:"Installation",file:"installation.md",url:"/docs/getting-started/installation",items:[]},{title:"GraphiQL",file:"graphiql.md",url:"/docs/getting-started/graphiql",items:[]},{title:"Queries",file:"queries.md",url:"/docs/getting-started/queries",items:[]},{title:"Schema Types",file:"schema-types.md",url:"/docs/getting-started/schema-types",items:[]},{title:"Custom Scalars",file:"custom-scalars.md",url:"/docs/getting-started/custom-scalars",items:[]},{title:"Lists and Non-Null",file:"lists-non-null.md",url:"/docs/getting-started/lists-non-null",items:[]},{title:"Arguments",file:"arguments.md",url:"/docs/getting-started/arguments",items:[]},{title:"Aliases",file:"aliases.md",url:"/docs/getting-started/aliases",items:[]},{title:"Fragments",file:"fragments.md",url:"/docs/getting-started/fragments",items:[]},{title:"Variables",file:"variables.md",url:"/docs/getting-started/variables",items:[]},{title:"Directives",file:"directives.md",url:"/docs/getting-started/directives",items:[]},{title:"Mutations",file:"mutations.md",url:"/docs/getting-started/mutations",items:[]},{title:"Interfaces",file:"interfaces.md",url:"/docs/getting-started/interfaces",items:[]},{title:"Unions",file:"unions.md",url:"/docs/getting-started/unions",items:[]},{title:"Subscriptions",file:"subscriptions.md",url:"/docs/getting-started/subscriptions",items:[]},{title:"Query Validation",file:"query-validation.md",url:"/docs/getting-started/query-validation",items:[]},{title:"Query Organization",file:"query-organization.md",url:"/docs/getting-started/query-organization",items:[]},{title:"User Context",file:"user-context.md",url:"/docs/getting-started/user-context",items:[]},{title:"Error Handling",file:"errors.md",url:"/docs/getting-started/errors",items:[]},{title:"Dependency Injection",file:"dependency-injection.md",url:"/docs/getting-started/dependency-injection",items:[]},{title:"Databases",file:"databases.md",url:"/docs/getting-started/databases",items:[]},{title:"Malicious Queries",file:"malicious-queries.md",url:"/docs/getting-started/malicious-queries",items:[]},{title:"Object/Field Metadata",file:"metadata.md",url:"/docs/getting-started/metadata",items:[]},{title:"Field Middleware",file:"field-middleware.md",url:"/docs/getting-started/field-middleware",items:[]},{title:"Metrics",file:"metrics.md",url:"/docs/getting-started/metrics",items:[]},{title:"Authorization",file:"authorization.md",url:"/docs/getting-started/authorization",items:[]},{title:"Relay",file:"relay.md",url:"/docs/getting-started/relay",items:[]}],url:"/docs/getting-started/introduction"},{title:"Guides",dir:"guides",items:[{title:"Dataloader",file:"dataloader.md",url:"/docs/guides/dataloader",items:[]},{title:"Schema Generation",file:"schema-generation.md",url:"/docs/guides/schema-generation",items:[]},{title:"Version Migration Guide",file:"migration.md",url:"/docs/guides/migration",items:[]},{title:"Links",file:"links.md",url:"/docs/guides/links",items:[]}],url:"/docs/guides/dataloader"}]}]}},layoutContext:{}}},114:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(2),a=r(o),u=n(120),s=r(u),l=n(71),c=r(l);t.default=function(e){return a.default.createElement(s.default,i({},e,c.default))},e.exports=t.default},125:function(e,t,n){e.exports={default:n(136),__esModule:!0}},127:function(e,t,n){e.exports={default:n(138),__esModule:!0}},131:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=n(125),o=r(i);t.default=o.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}},132:function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}},133:function(e,t,n){var r,i;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=n.apply(null,r);a&&e.push(a)}else if("object"===i)for(var u in r)o.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}var o={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?(n.default=n,e.exports=n):(r=[],i=function(){return n}.apply(t,r),!(void 0!==i&&(e.exports=i)))}()},136:function(e,t,n){n(161),e.exports=n(6).Object.assign},138:function(e,t,n){n(163),e.exports=n(6).Object.keys},151:function(e,t,n){"use strict";var r=n(10),i=n(25),o=n(51),a=n(33),u=n(35),s=n(83),l=Object.assign;e.exports=!l||n(15)(function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach(function(e){t[e]=e}),7!=l({},e)[n]||Object.keys(l({},t)).join("")!=r})?function(e,t){for(var n=u(e),l=arguments.length,c=1,f=o.f,d=a.f;l>c;)for(var p,T=s(arguments[c++]),E=f?i(T).concat(f(T)):i(T),m=E.length,h=0;m>h;)p=E[h++],r&&!d.call(T,p)||(n[p]=T[p]);return n}:l},155:function(e,t,n){var r=n(14),i=n(6),o=n(15);e.exports=function(e,t){var n=(i.Object||{})[e]||Object[e],a={};a[e]=t(n),r(r.S+r.F*o(function(){n(1)}),"Object",a)}},161:function(e,t,n){var r=n(14);r(r.S+r.F,"Object",{assign:n(151)})},163:function(e,t,n){var r=n(35),i=n(25);n(155)("keys",function(){return function(e){return i(r(e))}})},210:function(e,t,n){var r;!function(){"use strict";var i=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:i,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:i&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:i&&!!window.screen};r=function(){return o}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},101:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e){return o(O+e)}function o(e){return e.replace(/^\/\//g,"/")}function a(e,t){var n=(0,S.createLocation)(e,null,null,t.location);return n.pathname=i(n.pathname),n}t.__esModule=!0,t.navigateTo=t.replace=t.push=void 0;var u=n(131),s=r(u),l=n(127),c=r(l),f=n(132),d=r(f),p=n(31),T=r(p),E=n(46),m=r(E),h=n(45),g=r(h);t.withPrefix=i;var A=n(2),y=r(A),_=n(43),v=n(3),b=r(v),S=n(7),O="/",M={activeClassName:b.default.string,activeStyle:b.default.object,exact:b.default.bool,strict:b.default.bool,isActive:b.default.func,location:b.default.object},R=function(e,t){var n=new window.IntersectionObserver(function(r){r.forEach(function(r){e===r.target&&(r.isIntersecting||r.intersectionRatio>0)&&(n.unobserve(e),n.disconnect(),t())})});n.observe(e)},P=function(e){function t(n,r){(0,T.default)(this,t);var i=(0,m.default)(this,e.call(this)),o=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(o=!0);var u=r.router.history,s=a(n.to,u);return i.state={path:(0,S.createPath)(s),to:s,IOSupported:o},i.handleRef=i.handleRef.bind(i),i}return(0,g.default)(t,e),t.prototype.componentWillReceiveProps=function(e){if(this.props.to!==e.to){var t=a(e.to,history);this.setState({path:(0,S.createPath)(t),to:t}),this.state.IOSupported||___loader.enqueue(this.state.to.pathname)}},t.prototype.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.to.pathname)},t.prototype.handleRef=function(e){var t=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&R(e,function(){___loader.enqueue(t.state.to.pathname)})},t.prototype.render=function(){var e=this,t=this.props,n=t.onClick,r=(0,d.default)(t,["onClick"]),i=void 0;return i=(0,c.default)(M).some(function(t){return e.props[t]})?_.NavLink:_.Link,y.default.createElement(i,(0,s.default)({onClick:function(t){if(n&&n(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){var r=e.state.path;if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r===window.location.pathname){var i=e.state.path.split("#").slice(1).join("#"),o=document.getElementById(i);return null!==o?(o.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}t.preventDefault(),window.___push(e.state.to)}return!0}},r,{to:this.state.to,innerRef:this.handleRef}))},t}(y.default.Component);P.propTypes=(0,s.default)({},M,{innerRef:b.default.func,onClick:b.default.func,to:b.default.oneOfType([b.default.string,b.default.object]).isRequired}),P.contextTypes={router:b.default.object},t.default=P;var w=t.push=function(e){window.___push(e)};t.replace=function(e){window.___replace(e)},t.navigateTo=w},211:function(e,t){},307:function(e,t){"use strict";function n(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){var u,s,l,c=r(e),f=r(t);if(c&&f){if(s=e.length,s!=t.length)return!1;for(u=s;0!==u--;)if(!n(e[u],t[u]))return!1;return!0}if(c!=f)return!1;var d=e instanceof Date,p=t instanceof Date;if(d!=p)return!1;if(d&&p)return e.getTime()==t.getTime();var T=e instanceof RegExp,E=t instanceof RegExp;if(T!=E)return!1;if(T&&E)return e.toString()==t.toString();var m=i(e);if(s=m.length,s!==i(t).length)return!1;for(u=s;0!==u--;)if(!o.call(t,m[u]))return!1;if(a&&e instanceof Element&&t instanceof Element)return e===t;for(u=s;0!==u--;)if(l=m[u],!("_owner"===l&&e.$$typeof||n(e[l],t[l])))return!1;return!0}return e!==e&&t!==t}var r=Array.isArray,i=Object.keys,o=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,t){try{return n(e,t)}catch(e){if(e.message&&e.message.match(/stack|recursion/i)||e.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",e.name,e.message),!1;throw e}}},308:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),f=r(c),d=n(3),p=r(d),T=n(327),E=r(T),m=n(307),h=r(m),g=n(309),A=n(103),y=function(e){var t,n;return n=t=function(t){function n(){return o(this,n),a(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,h.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case A.TAG_NAMES.SCRIPT:case A.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case A.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return s({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[s({},i,this.mapNestedChildrenToProps(n,o))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(r.type){case A.TAG_NAMES.TITLE:return s({},i,(t={},t[r.type]=a,t.titleAttributes=s({},o),t));case A.TAG_NAMES.BODY:return s({},i,{bodyAttributes:s({},o)});case A.TAG_NAMES.HTML:return s({},i,{htmlAttributes:s({},o)})}return s({},i,(n={},n[r.type]=s({},o),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=s({},t);return Object.keys(e).forEach(function(t){var r;n=s({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var o=e.props,a=o.children,u=i(o,["children"]),s=(0,g.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,a),e.type){case A.TAG_NAMES.LINK:case A.TAG_NAMES.META:case A.TAG_NAMES.NOSCRIPT:case A.TAG_NAMES.SCRIPT:case A.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:s,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:s,nestedChildren:a})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=i(t,["children"]),o=s({},r);return n&&(o=this.mapChildrenToProps(n,o)),f.default.createElement(e,o)},l(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,g.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},_=function(){return null},v=(0,E.default)(g.reducePropsToState,g.handleClientStateChange,g.mapStateOnServer)(_),b=y(v);b.renderStatic=b.rewind,t.Helmet=b,t.default=b},103:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},309:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(2),u=r(a),s=n(72),l=r(s),c=n(103),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=h(e,c.TAG_NAMES.TITLE),n=h(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=h(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return h(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return o({},e,t)},{})},E=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[c.TAG_NAMES.BASE]}).map(function(e){return e[c.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i],a=o.toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}return t},[])},m=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&b("Helmet: "+e+' should be of type "Array". Instead found type "'+i(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var i={};n.filter(function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var u=o[a],s=u.toLowerCase();t.indexOf(s)===-1||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===c.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),t.indexOf(u)===-1||u!==c.TAG_PROPERTIES.INNER_HTML&&u!==c.TAG_PROPERTIES.CSS_TEXT&&u!==c.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][l]&&(i[n][l]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var o=Object.keys(i),a=0;a<o.length;a++){var u=o[a],s=(0,l.default)({},r[u],i[u]);r[u]=s}return e},[]).reverse()},h=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},g=function(e){return{baseTag:E([c.TAG_PROPERTIES.HREF],e),bodyAttributes:T(c.ATTRIBUTE_NAMES.BODY,e),defer:h(e,c.HELMET_PROPS.DEFER),encode:h(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(c.ATTRIBUTE_NAMES.HTML,e),linkTags:m(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:m(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:m(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:T(c.ATTRIBUTE_NAMES.TITLE,e)}},A=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){A(t)},0)}}(),y=function(e){return clearTimeout(e)},_="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:e.requestAnimationFrame||A,v="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||y:e.cancelAnimationFrame||y,b=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,O=function(e){S&&v(S),e.defer?S=_(function(){M(e,function(){S=null})}):(M(e),S=null)},M=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,u=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,f=e.styleTags,d=e.title,p=e.titleAttributes;w(c.TAG_NAMES.BODY,r),w(c.TAG_NAMES.HTML,i),P(d,p);var T={baseTag:I(c.TAG_NAMES.BASE,n),linkTags:I(c.TAG_NAMES.LINK,o),metaTags:I(c.TAG_NAMES.META,a),noscriptTags:I(c.TAG_NAMES.NOSCRIPT,u),scriptTags:I(c.TAG_NAMES.SCRIPT,l),styleTags:I(c.TAG_NAMES.STYLE,f)},E={},m={};Object.keys(T).forEach(function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(m[e]=T[e].oldTags)}),t&&t(),s(e,E,m)},R=function(e){return Array.isArray(e)?e.join(""):e},P=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=R(e)),w(c.TAG_NAMES.TITLE,t)},w=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),u=0;u<a.length;u++){var s=a[u],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),i.indexOf(s)===-1&&i.push(s);var f=o.indexOf(s);f!==-1&&o.splice(f,1)}for(var d=o.length-1;d>=0;d--)n.removeAttribute(o[d]);i.length===o.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,a.join(","))}},I=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),i.some(function(e,t){return a=t,n.isEqualNode(e)})?i.splice(a,1):o.push(n)}),i.forEach(function(e){return e.parentNode.removeChild(e)}),o.forEach(function(e){return n.appendChild(e)}),{oldTags:i,newTags:o}},C=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},N=function(e,t,n,r){var i=C(n),o=R(t);return i?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+i+">"+f(o,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+f(o,r)+"</"+e+">"},L=function(e,t,n){return t.reduce(function(t,r){var i=Object.keys(r).filter(function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var i="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+i:i},""),o=r.innerHTML||r.cssText||"",a=c.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+i+(a?"/>":">"+o+"</"+e+">")},"")},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t},t)},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t},t)},k=function(e,t,n){var r,i=(r={key:t},r[c.HELMET_ATTRIBUTE]=!0,r),o=G(n,i);return[u.default.createElement(c.TAG_NAMES.TITLE,o,t)]},H=function(e,t){return t.map(function(t,n){var r,i=(r={key:n},r[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]}),u.default.createElement(e,i)})},x=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return k(e,t.title,t.titleAttributes,n)},toString:function(){return N(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return G(t)},toString:function(){return C(t)}};default:return{toComponent:function(){return H(e,t)},toString:function(){return L(e,t,n)}}}},U=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,u=e.noscriptTags,s=e.scriptTags,l=e.styleTags,f=e.title,d=void 0===f?"":f,p=e.titleAttributes;return{base:x(c.TAG_NAMES.BASE,t,r),bodyAttributes:x(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:x(c.ATTRIBUTE_NAMES.HTML,i,r),link:x(c.TAG_NAMES.LINK,o,r),meta:x(c.TAG_NAMES.META,a,r),noscript:x(c.TAG_NAMES.NOSCRIPT,u,r),script:x(c.TAG_NAMES.SCRIPT,s,r),style:x(c.TAG_NAMES.STYLE,l,r),title:x(c.TAG_NAMES.TITLE,{title:d,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=j,t.handleClientStateChange=O,t.mapStateOnServer=U,t.reducePropsToState=g,t.requestAnimationFrame=_,t.warn=b}).call(t,function(){return this}())},327:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(u){function d(){T=e(p.map(function(e){return e.props})),E.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof u)throw new Error("Expected WrappedComponent to be a React component.");var p=[],T=void 0,E=function(e){function t(){return i(this,t),o(this,e.apply(this,arguments))}return a(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!f(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),d()},t.prototype.componentDidUpdate=function(){d()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),d()},t.prototype.render=function(){return l.createElement(u,this.props)},t}(s.Component);return E.displayName="SideEffect("+r(u)+")",E.canUseDOM=c.canUseDOM,E}}var s=n(2),l=r(s),c=r(n(210)),f=r(n(335));e.exports=u},335:function(e,t){e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var l=o[s];if(!u(l))return!1;var c=e[l],f=t[l];if(i=n?n.call(r,c,f,l):void 0,i===!1||void 0===i&&c!==f)return!1}return!0}},118:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=n(2),o=r(i),a=n(3),u=r(a),s=n(101),l=r(s),c=n(133),f=r(c),d=function e(t,n){return o.default.createElement("nav",null,o.default.createElement("ul",null,t.map(function(t){return o.default.createElement("li",{key:t.title},t.file&&o.default.createElement(l.default,{to:t.url||t.href,className:(0,f.default)([n.pathname===t.url&&"active"])},t.title),!t.file&&o.default.createElement("span",null,t.title),t.items&&t.items.length>0&&e(t.items,n))})))},p=function(e){var t=e.activeItem,n=e.location;return o.default.createElement("div",{className:"nav"},d(t.sidemenu,n))};p.propTypes={activeItem:u.default.shape({sidemenu:u.default.array}),location:u.default.object},t.default=p,e.exports=t.default},119:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=n(2),o=r(i),a=n(3),u=r(a),s=n(101),l=r(s),c=function(e){return e.map(function(e){return o.default.createElement("li",{key:e.url},o.default.createElement(l.default,{to:e.url},e.title))})},f=function(e){var t=(e.siteTitle,e.links),n=e.githubUrl;return o.default.createElement("nav",{className:"header"},o.default.createElement("ul",null,c(t),o.default.createElement("li",{key:"github-link"},o.default.createElement("a",{href:n,rel:"noopener noreferrer",target:"_blank"},"GitHub"))))};f.propTypes={siteTitle:u.default.string,links:u.default.array,githubUrl:u.default.string},t.default=f,e.exports=t.default},213:function(e,t){},120:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var i=n(2),o=r(i),a=n(3),u=r(a),s=n(308),l=r(s);n(214),n(211);var c=n(119),f=r(c),d=n(118),p=r(d);n(213);var T=n(123),E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e.pathname;return"/"===n?n:(t&&t.trim()&&n.startsWith(t)&&(n=n.substring(t.length,n.length)),"/"===n.substring(n.length-1)&&(n=n.substring(0,n.length-1)),n)},m=function(e){return e&&e.sidemenu&&e.sidemenu.length>0},h=function(e){var t=e.children,n=e.location,r=e.data,a=E(n),u=(0,T.findMatchingPage)(r.menu.pages,a),s=m(u)?o.default.createElement(p.default,{activeItem:u,location:n}):null;return o.default.createElement(i.Fragment,null,o.default.createElement(l.default,{title:r.site.siteMetadata.title,meta:[{name:"description",content:r.site.siteMetadata.description},{name:"keywords",content:r.site.siteMetadata.keywords}]}),o.default.createElement(f.default,{siteTitle:r.site.siteMetadata.title,links:r.menu.pages,githubUrl:r.site.siteMetadata.githubUrl}),o.default.createElement("div",{className:"page-body"},t(),s))};h.propTypes={children:u.default.func,location:u.default.shape({pathname:u.default.string}),data:u.default.object},t.default=h;t.query="** extracted graphql fragment **"},214:function(e,t){},123:function(e,t){"use strict";function n(e){return e?e.reduce(function(e,t){return e.push(t.url),t.items&&e.push.apply(e,n(t.items)),e},[]):[]}function r(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(!e)return!1;if(!t.startsWith(r))return!1;var i=t.substr(r.length);return e.find(function(e){return!!e&&(i===e.url||n(e.sidemenu||e.items).indexOf(i)!==-1)})}t.__esModule=!0,t.findMatchingPage=r}});
//# sourceMappingURL=component---src-layouts-index-js-cc6152ab29b477ac6f9d.js.map