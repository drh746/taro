(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1485:function(e,t,n){"use strict";var a=n(39);n.d(t,"a",(function(){return a.d})),n.d(t,"b",(function(){return a.e})),n.d(t,"c",(function(){return a.f})),n.d(t,"d",(function(){return a.g}))},1487:function(e,t,n){var a=n(5),r=n(1535),c=n(25).f,o=n(1512).f,i=n(79),u=n(87),s=a.RegExp,l=s,d=s.prototype,h=/a/g,f=/a/g,v=new s(h)!==h;if(n(10)&&(!v||n(14)((function(){return f[n(2)("match")]=!1,s(h)!=h||s(f)==f||"/a/i"!=s(h,"i")})))){s=function(e,t){var n=this instanceof s,a=i(e),c=void 0===t;return!n&&a&&e.constructor===s&&c?e:r(v?new l(a&&!c?e.source:e,t):l((a=e instanceof s)?e.source:e,a&&c?u.call(e):t),n?this:d,s)};for(var p=function(e){e in s||c(s,e,{configurable:!0,get:function(){return l[e]},set:function(t){l[e]=t}})},m=o(l),b=0;m.length>b;)p(m[b++]);d.constructor=s,s.prototype=d,n(16)(a,"RegExp",s)}n(89)("RegExp")},1488:function(e,t,n){"use strict";var a=n(12),r=n(86)(!0);a(a.P,"Array",{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n(83)("includes")},1489:function(e,t,n){"use strict";var a=n(12),r=n(1492);a(a.P+a.F*n(1493)("includes"),"String",{includes:function(e){return!!~r(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},1490:function(e,t,n){"use strict";var a=n(0),r=n(1520);t.a=function(){return Object(a.useContext)(r.a)}},1494:function(e,t,n){"use strict";var a=n(12),r=n(1540)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),a(a.P+a.F*c,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n(83)("find")},1495:function(e,t,n){"use strict";var a=n(0);t.a=function(e){void 0===e&&(e=!0),Object(a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},1496:function(e,t,n){"use strict";var a=n(1480),r=n(1490),c=n(1483),o=n(1500);t.a=function(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=e.themeConfig.navbar,i=(n=void 0===n?{}:n).logo,u=void 0===i?{}:i,s=Object(r.a)().isDarkTheme,l=u.href||t,d={};u.target?d={target:u.target}:Object(o.a)(l)||(d={rel:"noopener noreferrer",target:"_blank"});var h=u.srcDark&&s?u.srcDark:u.src;return{logoLink:l,logoLinkProps:d,logoImageUrl:Object(c.a)(h),logoAlt:u.alt}}},1499:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(1519),o=n(1500),i=n(1480),u=n(1483),s="",l="dark",d=function(){var e=Object(i.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.disableDarkMode,n=Object(a.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):s),r=n[0],c=n[1],o=Object(a.useCallback)((function(e){try{localStorage.setItem("theme",e)}catch(t){console.error(t)}}),[c]),u=Object(a.useCallback)((function(){c(s),o(s)}),[]),d=Object(a.useCallback)((function(){c(l),o(l)}),[]);return Object(a.useEffect)((function(){document.documentElement.setAttribute("data-theme",r)}),[r]),Object(a.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&c(e)}catch(n){console.error(n)}}),[c]),Object(a.useEffect)((function(){t||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?l:s)}))}),[]),{isDarkTheme:r===l,setLightTheme:u,setDarkTheme:d}},h=n(1520);var f=function(e){var t=d(),n=t.isDarkTheme,a=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(h.a.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:c}},e.children)},v=(n(52),n(1482),function(){var e=Object(a.useState)({}),t=e[0],n=e[1],r=Object(a.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(n){console.error(n)}}),[]);return Object(a.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var a=localStorage.key(t);if(a.startsWith("docusaurus.tab."))e[a.substring("docusaurus.tab.".length)]=localStorage.getItem(a)}n(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),r(e,t)}}}),p=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});var m=function(e){var t=v(),n=t.tabGroupChoices,a=t.setTabGroupChoices;return r.a.createElement(p.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a}},e.children)},b=n(133),g=n.n(b);var k=function(){var e=Object(i.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.announcementBar,n=void 0===t?{}:t,c=n.id,o=n.content,u=n.backgroundColor,s=n.textColor,l=Object(a.useState)(!0),d=l[0],h=l[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("docusaurus.announcement.id"),t=c!==e;localStorage.setItem("docusaurus.announcement.id",c),t&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(t||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&h(!1)}),[]),!o||d?null:r.a.createElement("div",{className:g.a.announcementBar,style:{backgroundColor:u,color:s},role:"banner"},r.a.createElement("div",{className:g.a.announcementBarContent,dangerouslySetInnerHTML:{__html:o}}),r.a.createElement("button",{type:"button",className:g.a.announcementBarClose,onClick:function(){localStorage.setItem("docusaurus.announcement.dismiss",!0),h(!0)},"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},y=n(1501),E=n(1504);n(136);t.a=function(e){var t=Object(i.a)().siteConfig,n=void 0===t?{}:t,a=n.favicon,s=n.title,l=n.themeConfig.image,d=n.url,h=e.children,v=e.title,p=e.noFooter,b=e.description,g=e.image,O=e.keywords,j=e.permalink,C=e.version,w=v?v+" | "+s:s,S=g||l,_=d+Object(u.a)(S);Object(o.a)(S)||(_=S);var T=Object(u.a)(a);return r.a.createElement(f,null,r.a.createElement(m,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),w&&r.a.createElement("title",null,w),w&&r.a.createElement("meta",{property:"og:title",content:w}),a&&r.a.createElement("link",{rel:"shortcut icon",href:T}),b&&r.a.createElement("meta",{name:"description",content:b}),b&&r.a.createElement("meta",{property:"og:description",content:b}),C&&r.a.createElement("meta",{name:"docsearch:version",content:C}),O&&O.length&&r.a.createElement("meta",{name:"keywords",content:O.join(",")}),S&&r.a.createElement("meta",{property:"og:image",content:_}),S&&r.a.createElement("meta",{property:"twitter:image",content:_}),S&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+w}),j&&r.a.createElement("meta",{property:"og:url",content:d+j}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(k,null),r.a.createElement(y.a,null),r.a.createElement("div",{className:"main-wrapper"},h),!p&&r.a.createElement(E.a,null)))}},1502:function(e,t,n){"use strict";n(64),n(31),n(20),n(21),n(90);var a=n(0),r=n.n(a),c=n(1481),o=n.n(c),i=n(1480),u=n(1485);n(134);t.a=function(e){var t=Object(a.useState)(!1),c=t[0],s=t[1],l=Object(a.useRef)(null),d=Object(i.a)().siteConfig,h=(void 0===d?{}:d).themeConfig.algolia,f=Object(u.c)();var v=function(e){void 0===e&&(e=!0),c||Promise.all([n.e(1341).then(n.t.bind(null,1567,7)),n.e(936).then(n.t.bind(null,1612,7))]).then((function(t){var n=t[0].default;s(!0),window.docsearch=n,function(e){window.docsearch({appId:h.appId,apiKey:h.apiKey,indexName:h.indexName,inputSelector:"#search_input_react",algoliaOptions:h.algoliaOptions,handleSelected:function(e,t,n){var a=document.createElement("a");a.href=n.url;var r="#__docusaurus"===a.hash?""+a.pathname:""+a.pathname+a.hash;f.push(r)}}),e&&l.current.focus()}(e)}))},p=Object(a.useCallback)((function(){v(),c&&l.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),m=Object(a.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),b=Object(a.useCallback)((function(e){var t="mouseover"!==e.type;v(t)}));return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:o()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:p,onKeyDown:p,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:o()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:b,onFocus:b,onBlur:m,ref:l}))}},1503:function(e,t,n){"use strict";var a=n(1),r=n(0),c=n.n(r),o=n(1548),i=n.n(o),u=n(1480),s=n(1481),l=n.n(s),d=n(135),h=n.n(d),f=function(){return c.a.createElement("span",{className:l()(h.a.toggle,h.a.moon)})},v=function(){return c.a.createElement("span",{className:l()(h.a.toggle,h.a.sun)})};t.a=function(e){var t=Object(u.a)().isClient;return c.a.createElement(i.a,Object(a.a)({disabled:!t,icons:{checked:c.a.createElement(f,null),unchecked:c.a.createElement(v,null)}},e))}},1505:function(e,t,n){"use strict";var a=n(0),r=n(1485);var c=function(e){var t=Object(a.useState)(e),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[n,r]},o=n(35),i=n.n(o),u=function(){return{scrollX:i.a.canUseDOM?window.pageXOffset:0,scrollY:i.a.canUseDOM?window.pageYOffset:0}},s=function(e,t){void 0===t&&(t=[]);var n=Object(a.useState)(u()),r=n[0],c=n[1],o=function(){var t=u();c(t),e&&e(t)};return Object(a.useEffect)((function(){return window.addEventListener("scroll",o),function(){return window.removeEventListener("scroll",o,{passive:!0})}}),t),r};t.a=function(e){var t=Object(a.useState)(!0),n=t[0],o=t[1],i=Object(a.useState)(!1),u=i[0],l=i[1],d=Object(a.useState)(0),h=d[0],f=d[1],v=Object(a.useState)(0),p=v[0],m=v[1],b=Object(a.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]),g=Object(r.d)(),k=c(g.hash),y=k[0],E=k[1];return s((function(t){var n=t.scrollY;if(e&&(0===n&&o(!0),!(n<p))){if(u)return l(!1),o(!1),void f(n);var a=document.documentElement.scrollHeight-p,r=window.innerHeight;h&&n>=h?o(!1):n+r<a&&o(!0),f(n)}}),[h,p]),Object(a.useEffect)((function(){e&&(o(!0),E(g.hash))}),[g]),Object(a.useEffect)((function(){e&&y&&l(!0)}),[y]),{navbarRef:b,isNavbarVisible:n}}},1520:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext({isDarkTheme:!1,setLightTheme:function(){},setDarkTheme:function(){}});t.a=r},1535:function(e,t,n){var a=n(13),r=n(1536).set;e.exports=function(e,t,n){var c,o=t.constructor;return o!==n&&"function"==typeof o&&(c=o.prototype)!==n.prototype&&a(c)&&r&&r(e,c),e}},1536:function(e,t,n){var a=n(13),r=n(8),c=function(e,t){if(r(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{(a=n(28)(Function.call,n(1518).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,n){return c(e,n),t?e.__proto__=n:a(e,n),e}}({},!1):void 0),check:c}},1540:function(e,t,n){var a=n(28),r=n(57),c=n(30),o=n(24),i=n(1541);e.exports=function(e,t){var n=1==e,u=2==e,s=3==e,l=4==e,d=6==e,h=5==e||d,f=t||i;return function(t,i,v){for(var p,m,b=c(t),g=r(b),k=a(i,v,3),y=o(g.length),E=0,O=n?f(t,y):u?f(t,0):void 0;y>E;E++)if((h||E in g)&&(m=k(p=g[E],E,b),e))if(n)O[E]=m;else if(m)switch(e){case 3:return!0;case 5:return p;case 6:return E;case 2:O.push(p)}else if(l)return!1;return d?-1:s||l?l:O}}},1541:function(e,t,n){var a=n(1542);e.exports=function(e,t){return new(a(e))(t)}},1542:function(e,t,n){var a=n(13),r=n(1521),c=n(2)("species");e.exports=function(e){var t;return r(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!r(t.prototype)||(t=void 0),a(t)&&null===(t=t[c])&&(t=void 0)),void 0===t?Array:t}},1548:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(0),o=h(c),i=h(n(1481)),u=h(n(17)),s=h(n(1549)),l=h(n(1550)),d=n(1551);function h(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=(t.icons,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["className","icons"])),c=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",a({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(l.default,null)}},f.propTypes={checked:u.default.bool,disabled:u.default.bool,defaultChecked:u.default.bool,onChange:u.default.func,onFocus:u.default.func,onBlur:u.default.func,className:u.default.string,name:u.default.string,value:u.default.string,id:u.default.string,"aria-labelledby":u.default.string,"aria-label":u.default.string,icons:u.default.oneOfType([u.default.bool,u.default.shape({checked:u.default.node,unchecked:u.default.node})])}},1549:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),c=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},1550:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),c=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var a=e.pageX;if(void 0!==a)return{x:a,y:e.pageY}}return{x:0,y:0}}}}]);