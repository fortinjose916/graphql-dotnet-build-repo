webpackJsonp([0xd2a57dc1d883],{45:function(n,e,t){"use strict";function o(n,e,t){var o=r.map(function(t){if(t.plugin[n]){var o=t.plugin[n](e,t.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:t?[t]:[]}function a(n,e,t){return r.reduce(function(t,o){return o.plugin[n]?t.then(function(){return o.plugin[n](e,o.options)}):t},Promise.resolve())}e.__esModule=!0,e.apiRunner=o,e.apiRunnerAsync=a;var r=[{plugin:t(281),options:{plugins:[]}}]},118:function(n,e,t){"use strict";e.components={"component---site-pages-landing-js":t(231),"component---src-templates-docs-page-js":t(234),"component---src-pages-404-js":t(233)},e.json={"layout-index.json":t(235),"index.json":t(280),"docs-getting-started-introduction.json":t(253),"docs-getting-started-installation.json":t(251),"docs-getting-started-graphiql.json":t(250),"docs-getting-started-altair-graphql.json":t(239),"docs-getting-started-queries.json":t(259),"docs-getting-started-schema-types.json":t(263),"docs-getting-started-custom-scalars.json":t(242),"docs-getting-started-lists-non-null.json":t(254),"docs-getting-started-arguments.json":t(240),"docs-getting-started-aliases.json":t(238),"docs-getting-started-fragments.json":t(248),"docs-getting-started-variables.json":t(267),"docs-getting-started-directives.json":t(245),"docs-getting-started-mutations.json":t(258),"docs-getting-started-interfaces.json":t(252),"docs-getting-started-unions.json":t(265),"docs-getting-started-subscriptions.json":t(264),"docs-getting-started-query-validation.json":t(261),"docs-getting-started-query-organization.json":t(260),"docs-getting-started-user-context.json":t(266),"docs-getting-started-errors.json":t(246),"docs-getting-started-dependency-injection.json":t(244),"docs-getting-started-databases.json":t(243),"docs-getting-started-malicious-queries.json":t(255),"docs-getting-started-metadata.json":t(256),"docs-getting-started-field-middleware.json":t(247),"docs-getting-started-metrics.json":t(257),"docs-getting-started-authorization.json":t(241),"docs-getting-started-relay.json":t(262),"docs-getting-started-global-switches.json":t(249),"docs-guides-serialization.json":t(273),"docs-guides-dataloader.json":t(268),"docs-guides-schema-generation.json":t(272),"docs-guides-known-issues.json":t(270),"docs-guides-links.json":t(271),"docs-guides-document-caching.json":t(269),"docs-migrations-migration-5.json":t(277),"docs-migrations-migration-4.json":t(276),"docs-migrations-migration-3.json":t(275),"docs-migrations-migration-2.json":t(274),"docs-migrations-v-0-11-0.json":t(278),"docs-migrations-v-0-8-0.json":t(279),"404.json":t(236),"404-html.json":t(237)},e.layouts={"layout---index":t(232)}},119:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function a(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function s(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var u=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},c=t(2),i=o(c),l=t(3),d=o(l),p=t(78),f=o(p),m=t(31),g=o(m),h=t(45),y=t(365),j=o(y),x=function(n){var e=n.children;return i.default.createElement("div",null,e())},C=function(n){function e(t){a(this,e);var o=r(this,n.call(this)),s=t.location;return f.default.getPage(s.pathname)||(s=u({},s,{pathname:"/404.html"})),o.state={location:s,pageResources:f.default.getResourcesForPathname(s.pathname)},o}return s(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var t=f.default.getResourcesForPathname(n.location.pathname);if(t)this.setState({location:n.location,pageResources:t});else{var o=n.location;f.default.getPage(o.pathname)||(o=u({},o,{pathname:"/404.html"})),f.default.getResourcesForPathname(o.pathname,function(n){e.setState({location:o,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;g.default.on("onPostLoadPageResources",function(e){f.default.getPage(n.state.location.pathname)&&e.page.path===f.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,j.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,h.apiRunner)("replaceComponentRenderer",{props:u({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,c.createElement)(this.state.pageResources.component,u({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,c.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:x,u({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(i.default.Component);C.propTypes={page:d.default.bool,layout:d.default.bool,location:d.default.object},e.default=C,n.exports=e.default},31:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(353),r=o(a),s=(0,r.default)();n.exports=s},120:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(43),r=t(79),s=o(r),u={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),r=(0,s.default)(o,e);if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r.split("?").length>1&&(r=r.split("?").slice(0,-1).join("")),u[r])return u[r];var c=void 0;return n.some(function(n){if(n.matchPath){if((0,a.matchPath)(r,{path:n.path})||(0,a.matchPath)(r,{path:n.matchPath}))return c=n,u[r]=n,!0}else{if((0,a.matchPath)(r,{path:n.path,exact:!0}))return c=n,u[r]=n,!0;if((0,a.matchPath)(r,{path:n.path+"index.html"}))return c=n,u[r]=n,!0}return!1}),c}}},121:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(114),r=o(a),s=t(45),u=(0,s.apiRunner)("replaceHistory"),c=u[0],i=c||(0,r.default)();n.exports=i},237:function(n,e,t){t(1),n.exports=function(n){return t.e(0xa2868bfb69fc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(306)})})}},236:function(n,e,t){t(1),n.exports=function(n){return t.e(0xe70826b53c04,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(307)})})}},238:function(n,e,t){t(1),n.exports=function(n){return t.e(0xb7c2022b57dc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(308)})})}},239:function(n,e,t){t(1),n.exports=function(n){return t.e(53507852050045,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(309)})})}},240:function(n,e,t){t(1),n.exports=function(n){return t.e(76576268814232,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(310)})})}},241:function(n,e,t){t(1),n.exports=function(n){return t.e(0xf72b164ccf51,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(311)})})}},242:function(n,e,t){t(1),n.exports=function(n){return t.e(0xf20e3161d4a6,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(312)})})}},243:function(n,e,t){t(1),n.exports=function(n){return t.e(75420749601626,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(313)})})}},244:function(n,e,t){t(1),n.exports=function(n){return t.e(0xa2867101ee02,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(314)})})}},245:function(n,e,t){t(1),n.exports=function(n){return t.e(0xde51c34bc7a6,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(315)})})}},246:function(n,e,t){t(1),n.exports=function(n){return t.e(75494656540334,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(316)})})}},247:function(n,e,t){t(1),n.exports=function(n){return t.e(0x7791409198f1,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(317)})})}},248:function(n,e,t){t(1),n.exports=function(n){return t.e(0x8f6de6b61789,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(318)})})}},249:function(n,e,t){t(1),n.exports=function(n){return t.e(0x97f52d0e53af,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(319)})})}},250:function(n,e,t){t(1),n.exports=function(n){return t.e(86643674157860,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(320)})})}},251:function(n,e,t){t(1),n.exports=function(n){return t.e(7936910712040,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(321)})})}},252:function(n,e,t){t(1),n.exports=function(n){return t.e(0x79b9b90f62df,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(322)})})}},253:function(n,e,t){t(1),n.exports=function(n){return t.e(0xb10d0a11b345,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(323)})})}},254:function(n,e,t){t(1),n.exports=function(n){return t.e(56185524266781,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(324)})})}},255:function(n,e,t){t(1),n.exports=function(n){return t.e(55192516056771,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(325)})})}},256:function(n,e,t){t(1),n.exports=function(n){return t.e(33904618880309,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(326)})})}},257:function(n,e,t){t(1),n.exports=function(n){return t.e(0xa8c80e3f9583,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(327)})})}},258:function(n,e,t){t(1),n.exports=function(n){return t.e(0x6802da96b8c4,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(328)})})}},259:function(n,e,t){t(1),n.exports=function(n){return t.e(0x8269d3086757,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(329)})})}},260:function(n,e,t){t(1),n.exports=function(n){return t.e(0xa73a45b851b,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(330)})})}},261:function(n,e,t){t(1),n.exports=function(n){return t.e(0x6177e9bb8ac6,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(331)})})}},262:function(n,e,t){t(1),n.exports=function(n){return t.e(71981178235569,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(332)})})}},263:function(n,e,t){t(1),n.exports=function(n){return t.e(0xb80a3c40d65c,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(333)})})}},264:function(n,e,t){t(1),n.exports=function(n){return t.e(0xfd69145331c0,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(334)})})}},265:function(n,e,t){t(1),n.exports=function(n){return t.e(53220472400125,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(335)})})}},266:function(n,e,t){t(1),n.exports=function(n){return t.e(0x9c2da7f49e6f,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(336)})})}},267:function(n,e,t){t(1),n.exports=function(n){return t.e(44712706562510,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(337)})})}},268:function(n,e,t){t(1),n.exports=function(n){return t.e(67274500541493,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(338)})})}},269:function(n,e,t){t(1),n.exports=function(n){return t.e(0x61e2a6ddfb17,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(339)})})}},270:function(n,e,t){t(1),n.exports=function(n){return t.e(0xed3b46ae8038,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(340)})})}},271:function(n,e,t){t(1),n.exports=function(n){return t.e(0x7ec235c60396,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(341)})})}},272:function(n,e,t){t(1),n.exports=function(n){return t.e(0xe7b41c02c1ae,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(342)})})}},273:function(n,e,t){t(1),n.exports=function(n){return t.e(970605649915,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(343)})})}},274:function(n,e,t){t(1),n.exports=function(n){return t.e(87071238410674,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(344)})})}},275:function(n,e,t){t(1),n.exports=function(n){return t.e(0x9b5b50ffeda2,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(345)})})}},276:function(n,e,t){t(1),n.exports=function(n){return t.e(57783942601805,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(346)})})}},277:function(n,e,t){t(1),n.exports=function(n){return t.e(0x99bd72fd83a1,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(347)})})}},278:function(n,e,t){t(1),n.exports=function(n){return t.e(0x75d45844402a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(348)})})}},279:function(n,e,t){t(1),n.exports=function(n){return t.e(0xa34611e76ff2,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(349)})})}},280:function(n,e,t){t(1),n.exports=function(n){return t.e(0x81b8806e4260,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(350)})})}},235:function(n,e,t){t(1),n.exports=function(n){return t.e(60335399758886,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(76)})})}},232:function(n,e,t){t(1),n.exports=function(n){return t.e(0x67ef26645b2a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(122)})})}},78:function(n,e,t){(function(n){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var a=t(2),r=(o(a),t(120)),s=o(r),u=t(31),c=o(u),i=t(79),l=o(i),d=void 0,p={},f={},m={},g={},h={},y=[],j=[],x={},C="",N=[],v={},b=function(n){return n&&n.default||n},k=void 0,R=!0,w=[],_={},P={},E=5;k=t(123)({getNextQueuedResources:function(){return N.slice(-1)[0]},createResourceDownload:function(n){L(n,function(){N=N.filter(function(e){return e!==n}),k.onResourcedFinished(n)})}}),c.default.on("onPreLoadPageResources",function(n){k.onPreLoadPageResources(n)}),c.default.on("onPostLoadPageResources",function(n){k.onPostLoadPageResources(n)});var O=function(n,e){return v[n]>v[e]?1:v[n]<v[e]?-1:0},T=function(n,e){return x[n]>x[e]?1:x[n]<x[e]?-1:0},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(g[e])n.nextTick(function(){t(null,g[e])});else{var o=void 0;o="component---"===e.slice(0,12)?f.components[e]:"layout---"===e.slice(0,9)?f.layouts[e]:f.json[e],o(function(n,o){g[e]=o,w.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),w=w.slice(-E),t(n,o)})}},S=function(e,t){h[e]?n.nextTick(function(){t(null,h[e])}):P[e]?n.nextTick(function(){t(P[e])}):L(e,function(n,o){if(n)t(n);else{var a=b(o());h[e]=a,t(n,a)}})},q=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=w.find(function(n){return n.succeeded});return!!e},A=function(n,e){console.log(e),_[n]||(_[n]=e),q()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},D=1,U={empty:function(){j=[],x={},v={},N=[],y=[],C=""},addPagesArray:function(n){y=n,d=(0,s.default)(n,C)},addDevRequires:function(n){p=n},addProdRequires:function(n){f=n},dequeue:function(){return j.pop()},enqueue:function(n){var e=(0,l.default)(n,C);if(!y.some(function(n){return n.path===e}))return!1;var t=1/D;D+=1,x[e]?x[e]+=1:x[e]=1,U.has(e)||j.unshift(e),j.sort(T);var o=d(e);return o.jsonName&&(v[o.jsonName]?v[o.jsonName]+=1+t:v[o.jsonName]=1+t,N.indexOf(o.jsonName)!==-1||g[o.jsonName]||N.unshift(o.jsonName)),o.componentChunkName&&(v[o.componentChunkName]?v[o.componentChunkName]+=1+t:v[o.componentChunkName]=1+t,N.indexOf(o.componentChunkName)!==-1||g[o.jsonName]||N.unshift(o.componentChunkName)),N.sort(O),k.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:N,resourcesCount:v}},getPages:function(){return{pathArray:j,pathCount:x}},getPage:function(n){return d(n)},has:function(n){return j.some(function(e){return e===n})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};R&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(d(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,t=Array.isArray(e),o=0,e=t?e:e[Symbol.iterator]();;){var a;if(t){if(o>=e.length)break;a=e[o++]}else{if(o=e.next(),o.done)break;a=o.value}var r=a;r.unregister()}window.location.reload()}})),R=!1;if(_[e])return A(e,'Previously detected load failure for "'+e+'"'),t();var o=d(e);if(!o)return A(e,"A page wasn't found for \""+e+'"'),t();if(e=o.path,m[e])return n.nextTick(function(){t(m[e]),c.default.emit("onPostLoadPageResources",{page:o,pageResources:m[e]})}),m[e];c.default.emit("onPreLoadPageResources",{path:e});var a=void 0,r=void 0,s=void 0,u=function(){if(a&&r&&(!o.layoutComponentChunkName||s)){m[e]={component:a,json:r,layout:s,page:o};var n={component:a,json:r,layout:s,page:o};t(n),c.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return S(o.componentChunkName,function(n,e){n&&A(o.path,"Loading the component for "+o.path+" failed"),a=e,u()}),S(o.jsonName,function(n,e){n&&A(o.path,"Loading the JSON for "+o.path+" failed"),r=e,u()}),void(o.layoutComponentChunkName&&S(o.layout,function(n,e){n&&A(o.path,"Loading the Layout for "+o.path+" failed"),s=e,u()}))},peek:function(n){return j.slice(-1)[0]},length:function(){return j.length},indexOf:function(n){return j.length-j.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:U.getResourcesForPathname};e.default=U}).call(e,t(354))},351:function(n,e){n.exports=[{componentChunkName:"component---site-pages-landing-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-getting-started-introduction.json",path:"/docs/getting-started/introduction"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-getting-started-installation.json",path:"/docs/getting-started/installation"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-getting-started-graphiql.json",path:"/docs/getting-started/graphiql"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-getting-started-altair-graphql.json",path:"/docs/getting-started/altair-graphql"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-getting-started-queries.json",path:"/docs/getting-started/queries"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-getting-started-schema-types.json",path:"/docs/getting-started/schema-types"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-getting-started-custom-scalars.json",path:"/docs/getting-started/custom-scalars"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-getting-started-lists-non-null.json",path:"/docs/getting-started/lists-non-null"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-getting-started-arguments.json",path:"/docs/getting-started/arguments"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-getting-started-aliases.json",path:"/docs/getting-started/aliases"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-getting-started-fragments.json",path:"/docs/getting-started/fragments"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-getting-started-variables.json",path:"/docs/getting-started/variables"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-getting-started-directives.json",path:"/docs/getting-started/directives"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-getting-started-mutations.json",path:"/docs/getting-started/mutations"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-getting-started-interfaces.json",path:"/docs/getting-started/interfaces"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-getting-started-unions.json",path:"/docs/getting-started/unions"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-getting-started-subscriptions.json",path:"/docs/getting-started/subscriptions"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-getting-started-query-validation.json",path:"/docs/getting-started/query-validation"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-getting-started-query-organization.json",path:"/docs/getting-started/query-organization"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-getting-started-user-context.json",path:"/docs/getting-started/user-context"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-getting-started-errors.json",path:"/docs/getting-started/errors"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-getting-started-dependency-injection.json",path:"/docs/getting-started/dependency-injection"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-getting-started-databases.json",path:"/docs/getting-started/databases"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-getting-started-malicious-queries.json",path:"/docs/getting-started/malicious-queries"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-getting-started-metadata.json",path:"/docs/getting-started/metadata"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-getting-started-field-middleware.json",path:"/docs/getting-started/field-middleware"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-getting-started-metrics.json",path:"/docs/getting-started/metrics"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-getting-started-authorization.json",path:"/docs/getting-started/authorization"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-getting-started-relay.json",path:"/docs/getting-started/relay"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-getting-started-global-switches.json",path:"/docs/getting-started/global-switches"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-guides-serialization.json",path:"/docs/guides/serialization"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-guides-dataloader.json",path:"/docs/guides/dataloader"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-guides-schema-generation.json",path:"/docs/guides/schema-generation"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-guides-known-issues.json",path:"/docs/guides/known-issues"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-guides-links.json",path:"/docs/guides/links"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-guides-document-caching.json",path:"/docs/guides/document-caching"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-migrations-migration-5.json",path:"/docs/migrations/migration5"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-migrations-migration-4.json",path:"/docs/migrations/migration4"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-migrations-migration-3.json",path:"/docs/migrations/migration3"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-migrations-migration-2.json",path:"/docs/migrations/migration2"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-migrations-v-0-11-0.json",path:"/docs/migrations/v0_11_0"},{componentChunkName:"component---src-templates-docs-page-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"docs-migrations-v-0-8-0.json",path:"/docs/migrations/v0_8_0"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},123:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,t=n.createResourceDownload,o=[],a=[],r=function(){var n=e();n&&(a.push(n),t(n))},s=function(n){switch(n.type){case"RESOURCE_FINISHED":a=a.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===a.length&&0===o.length&&r()},0)};return{onResourcedFinished:function(n){s({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){s({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){s({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){s({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:a}},empty:function(){o=[],a=[]}}}},0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},r=t(45),s=t(2),u=o(s),c=t(116),i=o(c),l=t(43),d=t(285),p=t(219),f=o(p),m=t(9),g=t(121),h=o(g),y=t(31),j=o(y),x=t(351),C=o(x),N=t(352),v=o(N),b=t(119),k=o(b),R=t(118),w=o(R),_=t(78),P=o(_);t(142),window.___history=h.default,window.___emitter=j.default,P.default.addPagesArray(C.default),P.default.addProdRequires(w.default),window.asyncRequires=w.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=v.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),O=function(n){var e=E[n];return null!=e&&(h.default.replace(e.toPath),!0)};O(window.location.pathname),(0,r.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&c!==!1||(window.___history=n,c=!0,n.listen(function(n,e){O(n.pathname)||setTimeout(function(){(0,r.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var t=e.location.pathname,o=(0,r.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:t});if(o.length>0)return o[0];if(n){var a=n.location.pathname;if(a===t)return!1}return!0}(0,r.apiRunner)("registerServiceWorker").length>0&&t(124);var o=function(n){function e(n){n.page.path===P.default.getPage(o).path&&(j.default.off("onPostLoadPageResources",e),clearTimeout(s),window.___history.push(t))}var t=(0,m.createLocation)(n,null,null,h.default.location),o=t.pathname,a=E[o];a&&(o=a.toPath);var r=window.location;if(r.pathname!==t.pathname||r.search!==t.search||r.hash!==t.hash){
var s=setTimeout(function(){j.default.off("onPostLoadPageResources",e),j.default.emit("onDelayedLoadPageResources",{pathname:o}),window.___history.push(t)},1e3);P.default.getResourcesForPathname(o)?(clearTimeout(s),window.___history.push(t)):j.default.on("onPostLoadPageResources",e)}};window.___navigateTo=o,(0,r.apiRunner)("onRouteUpdate",{location:h.default.location,action:h.default.action});var c=!1,p=(0,r.apiRunner)("replaceRouterComponent",{history:h.default})[0],g=function(n){var e=n.children;return u.default.createElement(l.Router,{history:h.default},e)},y=(0,l.withRouter)(k.default);P.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,s.createElement)(p?p:g,null,(0,s.createElement)(d.ScrollContext,{shouldUpdateScroll:e},(0,s.createElement)(y,{layout:!0,children:function(e){return(0,s.createElement)(l.Route,{render:function(t){n(t.history);var o=e?e:t;return P.default.getPage(o.location.pathname)?(0,s.createElement)(k.default,a({page:!0},o)):(0,s.createElement)(k.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,r.apiRunner)("wrapRootComponent",{Root:t},t)[0],c=(0,r.apiRunner)("replaceHydrateFunction",void 0,i.default.render)[0];(0,f.default)(function(){return c(u.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,r.apiRunner)("onInitialClientRender")})})})})},352:function(n,e){n.exports=[]},124:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(31),r=o(a),s="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(s+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),r.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},79:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},219:function(n,e,t){!function(e,t){n.exports=t()}("domready",function(){var n,e=[],t=document,o=t.documentElement.doScroll,a="DOMContentLoaded",r=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return r||t.addEventListener(a,n=function(){for(t.removeEventListener(a,n),r=1;n=e.shift();)n()}),function(n){r?setTimeout(n,0):e.push(n)}})},1:function(n,e,t){"use strict";function o(){function n(n){var e=o.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,o=document.querySelector("head"),a=t.e,r=t.s;t.e=function(o,s){var u=!1,c=!0,i=function(n){s&&(s(t,n),s=null)};return!r&&e&&e[o]?void i(!0):(a(o,function(){u||(u=!0,c?setTimeout(function(){i()}):i())}),void(u||(c=!1,n(function(){u||(u=!0,r?r[o]=void 0:(e||(e={}),e[o]=!0),i(!0))}))))}}o()},281:function(n,e,t){"use strict";var o=function(n){setTimeout(function(){var e=window.decodeURI(window.location.hash.replace("#",""));if(""!==e){var t=document.getElementById(e);if(t){var o=t.offsetTop;window.scrollTo(0,o-n)}}},10)};e.onClientEntry=function(n,e){var t=0;e.offsetY&&(t=e.offsetY)},e.onRouteUpdate=function(n,e){var t=0;e.offsetY&&(t=e.offsetY),o(t)}},305:function(n,e){"use strict";function t(n,e,d){if("string"!=typeof e){if(l){var p=i(e);p&&p!==l&&t(n,p,d)}var f=s(e);u&&(f=f.concat(u(e)));for(var m=0;m<f.length;++m){var g=f[m];if(!(o[g]||a[g]||d&&d[g])){var h=c(e,g);try{r(n,g,h)}catch(n){}}}return n}return n}var o={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,s=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,i=Object.getPrototypeOf,l=i&&i(Object);n.exports=t},353:function(n,e){function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).slice().map(function(n){n(t)}),(n["*"]||[]).slice().map(function(n){n(e,t)})}}}n.exports=t},354:function(n,e){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(n){if(l===setTimeout)return setTimeout(n,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function r(n){if(d===clearTimeout)return clearTimeout(n);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(n);try{return d(n)}catch(e){try{return d.call(null,n)}catch(e){return d.call(this,n)}}}function s(){g&&f&&(g=!1,f.length?m=f.concat(m):h=-1,m.length&&u())}function u(){if(!g){var n=a(s);g=!0;for(var e=m.length;e;){for(f=m,m=[];++h<e;)f&&f[h].run();h=-1,e=m.length}f=null,g=!1,r(n)}}function c(n,e){this.fun=n,this.array=e}function i(){}var l,d,p=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(n){l=t}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(n){d=o}}();var f,m=[],g=!1,h=-1;p.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];m.push(new c(n,e)),1!==m.length||g||a(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=i,p.addListener=i,p.once=i,p.off=i,p.removeListener=i,p.removeAllListeners=i,p.emit=i,p.prependListener=i,p.prependOnceListener=i,p.listeners=function(n){return[]},p.binding=function(n){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(n){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},365:function(n,e){"use strict";function t(n,e){for(var t in n)if(!(t in e))return!0;for(var o in e)if(n[o]!==e[o])return!0;return!1}e.__esModule=!0,e.default=function(n,e,o){return t(n.props,e)||t(n.state,o)},n.exports=e.default},231:function(n,e,t){t(1),n.exports=function(n){return t.e(95710047193689,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(125)})})}},233:function(n,e,t){t(1),n.exports=function(n){return t.e(0x9427c64ab85d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(129)})})}},234:function(n,e,t){t(1),n.exports=function(n){return t.e(28613242278168,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(130)})})}}});
//# sourceMappingURL=app-b70a48640f802ef752e4.js.map