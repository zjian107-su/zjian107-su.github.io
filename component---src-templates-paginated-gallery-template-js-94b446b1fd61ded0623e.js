(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+z/s":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"NABI.IO - \\b开源训狗"}}}}')},"0hyv":function(e,t,a){"use strict";a("q1tI");var n=a("Wbzz"),i=a("D/45"),r=a("qKvR"),o=function(e){var t=e.siteTitle;return Object(r.a)("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},Object(r.a)("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},Object(r.a)("h2",{style:{margin:0}},Object(r.a)(n.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t)),Object(r.a)(i.a,null)))};o.defaultProps={siteTitle:""},t.a=o},"0sYV":function(e,t,a){},"7vj3":function(e,t,a){"use strict";a("q1tI");var n=a("ABIv"),i=a("ma3e"),r=a("qKvR");t.a=function(e){var t=e.isOpen,a=e.toggleSidebar;return Object(r.a)("aside",{className:"sidebar "+(t?"show-sidebar":"")+" "},Object(r.a)("button",{className:"close-btn",onClick:a},Object(r.a)(i.h,null)),Object(r.a)("div",{className:"side-container"},Object(r.a)(n.a,{styleClass:t?"sidebar-links":""})))}},ABIv:function(e,t,a){"use strict";a("q1tI");var n=a("Wbzz"),i=(a("Vpue"),a("qKvR")),r={background:"white",color:"rebeccapurple",padding:"0.6rem",borderRadius:"5px",border:"1px solid ghostwhite"},o=[{id:1,text:"Home",url:"/"},{id:2,text:"Articles",url:"/articles"},{id:3,text:"Gallery",url:"/images"}].map((function(e){return Object(i.a)("li",{key:e.id},Object(i.a)(n.Link,{to:e.url,activeStyle:r},e.text))}));t.a=function(e){var t=e.styleClass;return Object(i.a)("ul",{className:"page-links "+(t||"")},o)}},"D/45":function(e,t,a){"use strict";a("q1tI");var n=a("ABIv"),i=(a("Vpue"),a("ma3e")),r=a("qKvR");t.a=function(e){var t=e.toggleSidebar;return Object(r.a)("nav",{className:"navbar"},Object(r.a)("div",{className:"nav-center"},Object(r.a)("div",{className:"nav-header"},Object(r.a)("button",{type:"button",className:"toggle-btn",onClick:t},Object(r.a)(i.a,null))),Object(r.a)(n.a,{styleClass:"nav-links"})))}},K2OO:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),r=a("qhky"),o=a("9lPY"),s=a("MX0m"),c=a.n(s),l=a("Wbzz"),p=a("ma3e"),u=a("w8WG"),d=a.n(u),m=a("qKvR");var b=function(e){var t=e.paginationData,a=t.currentPage,n=t.countPages,r=1===a||!a,o=a===n,s="/"+(a-1>1?a-1:""),u="/"+(a+1),b={paddingTop:"0.25em"},g=function(e,t){var a=[];if(t<=10)for(var n=1;n<=t;n++)a.push(n);else{if(e<=5)for(var i=1;i<e;i++)a.push(i);else a.push(1),a.push("dots-left-half"),a.push(e-2),a.push(e-1);if(a.push(e),e>=t-4)for(var r=e+1;r<t;r++)a.push(r);else a.push(e+1),a.push(e+2),a.push("dots-right-half");e!==t&&a.push(t)}return a}(a,n);return Object(m.a)(i.a.Fragment,null,Object(m.a)("div",{className:c.a.dynamic([["2113148203",[d.a.color.brand.primaryLight,d.a.space.l,d.a.space.l,d.a.space.l,d.a.space.stack.l,d.a.color.special.attention,d.a.space.m,d.a.space.m,d.a.space.inline.s]]])+" pagination"},!r&&Object(m.a)(l.Link,{to:s,rel:"prev",style:b},Object(m.a)("span",{className:c.a.dynamic([["2113148203",[d.a.color.brand.primaryLight,d.a.space.l,d.a.space.l,d.a.space.l,d.a.space.stack.l,d.a.color.special.attention,d.a.space.m,d.a.space.m,d.a.space.inline.s]]])+" prev-arrow"},Object(m.a)(p.b,null))),n>1&&Object(m.a)(i.a.Fragment,null,g.map((function(e){return isNaN(e)?Object(m.a)("span",{key:"dots-"+e,className:c.a.dynamic([["2113148203",[d.a.color.brand.primaryLight,d.a.space.l,d.a.space.l,d.a.space.l,d.a.space.stack.l,d.a.color.special.attention,d.a.space.m,d.a.space.m,d.a.space.inline.s]]])},"....."):Object(m.a)("span",{key:"page-"+e,className:c.a.dynamic([["2113148203",[d.a.color.brand.primaryLight,d.a.space.l,d.a.space.l,d.a.space.l,d.a.space.stack.l,d.a.color.special.attention,d.a.space.m,d.a.space.m,d.a.space.inline.s]]])+" pagination-numbers"},Object(m.a)(l.Link,{to:"/"+(1===e?"":e),style:{padding:"3px 8px",borderRadius:"5px",textDecoration:"none",color:e===a?"#ffffff":"#666",background:e===a?d.a.color.brand.primary:"",lineHeight:"30px",verticalAlign:"middle"},className:"pagination-numbers"},e))}))),!o&&Object(m.a)(l.Link,{to:u,rel:"next",style:b},Object(m.a)("span",{className:c.a.dynamic([["2113148203",[d.a.color.brand.primaryLight,d.a.space.l,d.a.space.l,d.a.space.l,d.a.space.stack.l,d.a.color.special.attention,d.a.space.m,d.a.space.m,d.a.space.inline.s]]])+" next-arrow"},Object(m.a)(p.c,null)))),Object(m.a)(c.a,{id:"2113148203",dynamic:[d.a.color.brand.primaryLight,d.a.space.l,d.a.space.l,d.a.space.l,d.a.space.stack.l,d.a.color.special.attention,d.a.space.m,d.a.space.m,d.a.space.inline.s]},["@from-width desktop @media (hover:hover) .pagination :global(a:hover svg){-webkit-transform:scale(1.5);-ms-transform:scale(1.5);transform:scale(1.5);}",".next-arrow.__jsx-style-dynamic-selector svg{margin-left:10px !important;}",".pagination-numbers.__jsx-style-dynamic-selector:hover{background:"+d.a.color.brand.primaryLight+";border-radius:5px;}",".pagination.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;maxwidth:700px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:"+d.a.space.l+" "+d.a.space.l+" "+d.a.space.l+";margin:"+d.a.space.stack.l+";margin-bottom:0;}",".pagination.__jsx-style-dynamic-selector a:nth-child(2){margin:0;}",".pagination.__jsx-style-dynamic-selector svg{fill:"+d.a.color.special.attention+";width:"+d.a.space.m+";height:"+d.a.space.m+";-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-transition:all 0.5s;transition:all 0.5s;margin:"+d.a.space.inline.s+";}"]))};function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var f=a("hKI/"),h=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).scrollHandler=function(){},a.resizeHandler=function(){},a.checkWindowScroll=function(){a.props.hasMore&&a.sentinel&&a.sentinel.getBoundingClientRect().top-window.innerHeight<a.props.threshold&&a.props.onLoadMore()},a.scrollHandler=a.scrollHandler.bind(g(a)),a.resizeHandler=a.resizeHandler.bind(g(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.componentDidMount=function(){this.scrollHandler=f(this.checkWindowScroll,this.props.throttle),this.resizeHandler=f(this.checkWindowScroll,this.props.throttle),window.addEventListener("scroll",this.scrollHandler),window.addEventListener("resize",this.resizeHandler)},i.componentWillUnmount=function(){window.removeEventListener("scroll",this.scrollHandler),window.removeEventListener("resize",this.resizeHandler)},i.componentDidUpdate=function(){this.scrollHandler()},i.render=function(){var e=this,t=Object(m.a)("div",{ref:function(t){return e.sentinel=t}});if(this.props.render)return this.props.render({sentinel:t,children:this.props.children});if(this.props.component){var a=this.props.component;return Object(m.a)(a,{sentinel:t},this.props.children)}return Object(m.a)("div",null,this.props.children,t)},n}(i.a.Component);var y=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.handleNavigation=function(e){return Object(l.navigate)("/images/fromGallery?id="+this.props.item.id,{state:{pageContext:this.props.item.pageContext}}),e.preventDefault(),!1},r.render=function(){var e=this,t=this.props,a=t.item&&t.highlight===t.item.id;return Object(m.a)(i.a.Fragment,null,Object(m.a)("div",{key:t.index,className:c.a.dynamic([["3484365679",[a?"3s":"0s"]]])+" img-container"},t.item&&Object(m.a)(i.a.Fragment,null,Object(m.a)("span",{id:"id"+t.item.id,style:{top:"0px",position:"absolute",display:"hidden"},className:c.a.dynamic([["3484365679",[a?"3s":"0s"]]])},"."),Object(m.a)("a",{href:"/images/"+t.item.id,onClick:function(t){return e.handleNavigation(t)},className:c.a.dynamic([["3484365679",[a?"3s":"0s"]]])},Object(m.a)("img",{src:t.item.thumb.src,alt:"",title:"",className:c.a.dynamic([["3484365679",[a?"3s":"0s"]]])})))),Object(m.a)(c.a,{id:"3484365679",dynamic:[a?"3s":"0s"]},["@-webkit-keyframes animate-opacity-__jsx-style-dynamic-selector{0%{opacity:0;}100%{opacity:1;}}","@keyframes animate-opacity-__jsx-style-dynamic-selector{0%{opacity:0;}100%{opacity:1;}}",".img-container.__jsx-style-dynamic-selector{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;position:relative;width:100%;height:100%;background:#eee;border-radius:5px;border:1px solid ghostwhite;overflow:hidden;z-index:1;-webkit-animation:"+(a?"3s":"0s")+" ease-in-out 0s 1 animate-opacity-__jsx-style-dynamic-selector;animation:"+(a?"3s":"0s")+" ease-in-out 0s 1 animate-opacity-__jsx-style-dynamic-selector;}",'.img-container.__jsx-style-dynamic-selector::before{content:"";display:block;margin-top:67%;z-index:1;}',".img-container.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{top:0;display:block;position:absolute;width:100%;height:auto;margin:0 !important;border-radius:5px;border:1px solid gray;-webkit-transition:0.2s ease-in-out;transition:0.2s ease-in-out;z-index:2;opacity:1;}",".img-container.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector:hover{opacity:0.4;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}"]))},n}(i.a.Component),j=function(e){var t=e.globalState,a=e.pageContext.currentPage,n=[],r=0,o=0,s=0,p=!t.isInitializing();if(t.useInfiniteScroll&&t["page"+a])for(var u=a;;u++){var d="page"+u;if(!t[d]){for(var b=Math.min(t.cursor,e.pageContext.countPages);u<=b;u++){var g=s;for(o=0;o<g;o++)n.push(Object(m.a)(y,{g:t,key:"gi"+r++}))}break}for(s=t[d].length,o=0;o<s;o++)n.push(Object(m.a)(y,{g:t,js:p,item:t[d][o],key:"gi"+r++,highlight:e.highlight}))}else e.pageContext.pageImages.forEach((function(e){return n.push(Object(m.a)(y,{g:t,item:e,key:"gi"+r++}))}));return Object(m.a)(i.a.Fragment,null,Object(m.a)(l.Link,{to:"/images/"}),Object(m.a)("div",{className:"jsx-4247537048 grid"},n),Object(m.a)(c.a,{id:"4247537048"},[".grid.jsx-4247537048{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-template-rows:repeat(5,auto);grid-gap:1px;}","@media (max-width:950px){.grid.jsx-4247537048{grid-template-columns:1fr 1fr 1fr;}}","@media (max-width:300px){.grid.jsx-4247537048{grid-template-columns:1fr;}}"]))};var v=function(e){var t,a;function n(t){var a;if(a=e.call(this,t)||this,t.globalState.isInitializing()||!t.globalState.useInfiniteScroll){var n,i="page"+t.pageContext.currentPage;t.globalState.updateState(((n={})[i]=t.pageContext.pageImages,n.cursor=t.pageContext.currentPage+1,n))}return a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.globalState,t=this.props.pageContext,a={currentPage:t.currentPage,countPages:t.countPages,useInfiniteScroll:e.useInfiniteScroll};return Object(m.a)(i.a.Fragment,null,Object(m.a)(h,{throttle:150,threshold:1800,hasMore:e.hasMore(t),onLoadMore:e.loadMore},Object(m.a)(j,{globalState:e,pageContext:t,highlight:this.props.highlight})),(1===e.cursor||e.hasMore(t))&&Object(m.a)("div",{className:c.a.dynamic([["2014835748",[e.useInfiniteScroll?"block":"none",d.a.color.brand.primaryLight]]])+" spinner"},Object(m.a)(p.d,null)),e.useInfiniteScroll&&Object(m.a)("noscript",{className:c.a.dynamic([["2014835748",[e.useInfiniteScroll?"block":"none",d.a.color.brand.primaryLight]]])},Object(m.a)("style",null,".spinner { display: none !important; }"),Object(m.a)(b,{paginationData:a})),!e.useInfiniteScroll&&Object(m.a)(b,{paginationData:a}),Object(m.a)(c.a,{id:"2014835748",dynamic:[e.useInfiniteScroll?"block":"none",d.a.color.brand.primaryLight]},["@-webkit-keyframes spinner-__jsx-style-dynamic-selector{to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}","@keyframes spinner-__jsx-style-dynamic-selector{to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}",".spinner.__jsx-style-dynamic-selector{margin-top:40px;font-size:60px;text-align:center;display:"+(e.useInfiniteScroll?"block":"none")+";}",".spinner.__jsx-style-dynamic-selector svg{fill:"+d.a.color.brand.primaryLight+";-webkit-animation:spinner-__jsx-style-dynamic-selector 3s linear infinite;animation:spinner-__jsx-style-dynamic-selector 3s linear infinite;}"]))},n}(i.a.Component),x=(a("0sYV"),a("U2Qk")),O=a("+z/s"),w=a("0hyv"),k=a("cmL/"),_=(a("Vpue"),a("D/45")),N=a("7vj3"),S=function(e){var t=e.children,a=i.a.useState(!1),n=a[0],r=a[1],o=function(){r(!n)},s=O.data;return Object(m.a)(i.a.Fragment,null,Object(m.a)(w.a,{siteTitle:s.site.siteMetadata.title}),Object(m.a)(_.a,{toggleSidebar:o}),Object(m.a)(N.a,{isOpen:n,toggleSidebar:o}),Object(m.a)("div",{style:{margin:"0 0",maxWidth:2048,padding:"0 1.0875rem 1.45rem"}},Object(m.a)("main",null,t),Object(m.a)("footer",null,Object(m.a)(k.a,null))))};var z=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=n.prototype;return s.componentDidMount=function(){Object(x.b)()},s.render=function(){var e=this,t=this.props.location&&this.props.location.state?this.props.location.state.highlight:-1;return Object(m.a)(i.a.Fragment,null,Object(m.a)(r.a,null,Object(m.a)("meta",{charSet:"utf-8"}),Object(m.a)("title",null,"Nabi - 开源训狗")),Object(m.a)(S,null,Object(m.a)(o.b.Consumer,null,(function(a){return Object(m.a)(i.a.Fragment,null,Object(m.a)(v,{globalState:a,pageContext:e.props.pageContext,highlight:t}))}))))},n}(i.a.Component);t.default=z},Vpue:function(e,t,a){},"cmL/":function(e,t,a){"use strict";a("q1tI");var n=a("qKvR");t.a=function(){return Object(n.a)("div",null,Object(n.a)("h4",{style:{color:"#858585"}},"Copyright © ",(new Date).getFullYear()," Nabi.io | All rights reserved. | Developed by"," ",Object(n.a)("a",{target:"_blank",href:"https://www.linkedin.com/in/zezhengjiang/",style:{textDecoration:"none",color:"#3c3c3c"}},"Daniel Jiang")))}},"hKI/":function(e,t,a){(function(t){a("sC2a"),a("q8oJ"),a("C9fy"),a("8npG");var n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,o=/^0o[0-7]+$/i,s=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,p=c||l||Function("return this")(),u=Object.prototype.toString,d=Math.max,m=Math.min,b=function(){return p.Date.now()};function g(e,t,a){var n,i,r,o,s,c,l=0,p=!1,u=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var a=n,r=i;return n=i=void 0,l=t,o=e.apply(r,a)}function j(e){return l=e,s=setTimeout(x,t),p?y(e):o}function v(e){var a=e-c;return void 0===c||a>=t||a<0||u&&e-l>=r}function x(){var e=b();if(v(e))return O(e);s=setTimeout(x,function(e){var a=t-(e-c);return u?m(a,r-(e-l)):a}(e))}function O(e){return s=void 0,g&&n?y(e):(n=i=void 0,o)}function w(){var e=b(),a=v(e);if(n=arguments,i=this,c=e,a){if(void 0===s)return j(c);if(u)return s=setTimeout(x,t),y(c)}return void 0===s&&(s=setTimeout(x,t)),o}return t=h(t)||0,f(a)&&(p=!!a.leading,r=(u="maxWait"in a)?d(h(a.maxWait)||0,t):r,g="trailing"in a?!!a.trailing:g),w.cancel=function(){void 0!==s&&clearTimeout(s),l=0,n=c=i=s=void 0},w.flush=function(){return void 0===s?o:O(b())},w}function f(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(f(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=f(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var a=r.test(e);return a||o.test(e)?s(e.slice(2),a?2:8):i.test(e)?NaN:+e}e.exports=function(e,t,a){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return f(a)&&(n="leading"in a?!!a.leading:n,i="trailing"in a?!!a.trailing:i),g(e,t,{leading:n,maxWait:t,trailing:i})}}).call(this,a("yLpj"))}}]);
//# sourceMappingURL=component---src-templates-paginated-gallery-template-js-94b446b1fd61ded0623e.js.map