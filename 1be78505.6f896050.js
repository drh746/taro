(window.webpackJsonp=window.webpackJsonp||[]).push([[168,1342],{1476:function(e,a,t){"use strict";t.r(a);t(31),t(20),t(21),t(62),t(1494);var n=t(0),l=t.n(n),r=t(1479),i=t(1480),c=t(69),s=t(1499),o=t(1),m=t(9),h=t(1481),v=t.n(h),u=t(1495),b=t(1496),d=t(1484),f=t(1500),_=t(301),E=t.n(_);function p(e){var a=e.item,t=e.onItemClick,r=e.collapsible,i=Object(m.a)(e,["item","onItemClick","collapsible"]),c=a.items,s=a.href,h=a.label,u=a.type,b=Object(n.useState)(a.collapsed),_=b[0],E=b[1],g=Object(n.useState)(null),k=g[0],N=g[1];a.collapsed!==k&&(N(a.collapsed),E(a.collapsed));var j=Object(n.useCallback)((function(e){e.preventDefault(),e.target.blur(),E((function(e){return!e}))}));switch(u){case"category":return c.length>0&&l.a.createElement("li",{className:v()("menu__list-item",{"menu__list-item--collapsed":_}),key:h},l.a.createElement("a",Object(o.a)({className:v()("menu__link",{"menu__link--sublist":r,"menu__link--active":r&&!a.collapsed}),href:"#!",onClick:r?j:void 0},i),h),l.a.createElement("ul",{className:"menu__list"},c.map((function(e){return l.a.createElement(p,{tabIndex:_?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:r})}))));case"link":default:return l.a.createElement("li",{className:"menu__list-item",key:h},l.a.createElement(d.a,Object(o.a)({className:"menu__link",to:s},Object(f.a)(s)?{isNavLink:!0,activeClassName:"menu__link--active",exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},i),h))}}var g=function(e){var a=Object(n.useState)(!1),t=a[0],r=a[1],c=Object(i.a)(),s=c.siteConfig,m=(s=void 0===s?{}:s).themeConfig.navbar,h=(m=void 0===m?{}:m).title,f=m.hideOnScroll,_=void 0!==f&&f,g=c.isClient,k=Object(b.a)(),N=k.logoLink,j=k.logoLinkProps,O=k.logoImageUrl,w=k.logoAlt,M=e.docsSidebars,C=e.path,y=e.sidebar,z=e.sidebarCollapsible;if(Object(u.a)(t),!y)return null;var x=M[y];if(!x)throw new Error('Cannot find the sidebar "'+y+'" in the sidebar config!');return z&&x.forEach((function(e){return function e(a,t){var n=a.items,l=a.href;switch(a.type){case"category":var r=n.map((function(a){return e(a,t)})).filter((function(e){return e})).length>0;return a.collapsed=!r,r;case"link":default:return l===t}}(e,C)})),l.a.createElement("div",{className:E.a.sidebar},_&&l.a.createElement(d.a,Object(o.a)({tabIndex:"-1",className:E.a.sidebarLogo,to:N},j),null!=O&&l.a.createElement("img",{key:g,src:O,alt:w}),null!=h&&l.a.createElement("strong",null,h)),l.a.createElement("div",{className:v()("menu","menu--responsive",E.a.menu,{"menu--show":t})},l.a.createElement("button",{"aria-label":t?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){r(!t)}},t?l.a.createElement("span",{className:v()(E.a.sidebarMenuIcon,E.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement("svg",{"aria-label":"Menu",className:E.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement("ul",{className:"menu__list"},x.map((function(e){return l.a.createElement(p,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),r(!1)},collapsible:z})})))))},k=t(1516),N=t(1517),j=t(1485),O=t(307),w=t.n(O);a.default=function(e){var a=e.route,t=e.docsMetadata,n=e.location,o=a.routes.find((function(e){return Object(j.b)(n.pathname,e)}))||{},m=t.permalinkToSidebar,h=t.docsSidebars,v=t.version,u=m[o.path],b=Object(i.a)(),d=b.siteConfig,f=(d=void 0===d?{}:d).themeConfig,_=void 0===f?{}:f,E=b.isClient,p=_.sidebarCollapsible,O=void 0===p||p;return 0===Object.keys(o).length?l.a.createElement(N.default,e):l.a.createElement(s.a,{version:v,key:E},l.a.createElement("div",{className:w.a.docPage},u&&l.a.createElement("div",{className:w.a.docSidebarContainer},l.a.createElement(g,{docsSidebars:h,path:o.path,sidebar:u,sidebarCollapsible:O})),l.a.createElement("main",{className:w.a.docMainContainer},l.a.createElement(r.a,{components:k.a},Object(c.a)(a.routes)))))}},1501:function(e,a,t){"use strict";var n=t(1),l=(t(1487),t(52),t(78),t(1482),t(9)),r=(t(1488),t(1489),t(1494),t(0)),i=t.n(r),c=t(1481),s=t.n(c),o=t(1484),m=t(1480),h=t(1483),v=t(1485),u=t(1502),b=t(1503),d=t(1490),f=t(1505),_=t(1495),E=t(1496),p=t(131),g=t.n(p);function k(e){var a=e.activeBasePath,t=e.activeRegxp,r=e.to,c=e.href,s=e.label,u=(e.position,Object(l.a)(e,["activeBasePath","activeRegxp","to","href","label","position"])),b=function(){var e=Object(m.a)().siteConfig.customFields.versions,a=void 0===e?[]:e,t=a[0],n=Object(v.d)(),l=a.find((function(e){return n.pathname.includes(e)}));return[t,null!=l?l:t]}(),d=b[0],f=b[1];if(d!==f&&u.version&&(s="v"+f),r&&r.startsWith("docs/")&&d!==f){var _=r.split("/"),E=_[0],p=_.slice(1);r=[E,f].concat(p).join("/");var g=a.split("/"),k=g[0],N=g.slice(1);a=[k,f].concat(N).join("/")}var j=Object(h.a)(r),O=Object(h.a)(a);return i.a.createElement(o.a,Object(n.a)({},c?{target:"_blank",rel:"noopener noreferrer",href:c}:Object.assign({isNavLink:!0,activeClassName:"navbar__link--active",to:j},a?{isActive:function(e,n){return t?new RegExp(a).test(n.pathname):n.pathname.startsWith(O)}}:null),u),s)}function N(e){var a=e.items,t=e.position,r=Object(l.a)(e,["items","position"]);return a?i.a.createElement("div",{className:s()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t})},i.a.createElement(k,Object(n.a)({className:"navbar__item navbar__link"},r),r.label),i.a.createElement("ul",{className:"dropdown__menu"},a.map((function(e,a){return i.a.createElement("li",{key:a},i.a.createElement(k,Object(n.a)({className:"navbar__item navbar__link"},e)))})))):i.a.createElement(k,Object(n.a)({},r,{className:s()(["navbar__item","navbar__link",r.className])}))}function j(e){var a=e.items,t=Object(l.a)(e,["items"]);return a?i.a.createElement("li",{className:"menu__list-item"},i.a.createElement(k,Object(n.a)({className:"menu__link menu__link--sublist"},t),t.label),i.a.createElement("ul",{className:"menu__list"},a.map((function(e,a){return i.a.createElement("li",{className:"menu__list-item",key:a},i.a.createElement(k,Object(n.a)({className:"menu__link"},e)))})))):i.a.createElement("li",{className:"menu__list-item"},i.a.createElement(k,Object(n.a)({className:"menu__link"},t)))}a.a=function(){var e,a,t=Object(m.a)(),l=t.siteConfig.themeConfig,c=l.navbar,h=(c=void 0===c?{}:c).title,v=c.links,p=void 0===v?[]:v,k=c.hideOnScroll,O=void 0!==k&&k,w=l.disableDarkMode,M=void 0!==w&&w,C=t.isClient,y=Object(r.useState)(!1),z=y[0],x=y[1],S=Object(r.useState)(!1),I=S[0],L=S[1],B=Object(d.a)(),T=B.isDarkTheme,W=B.setLightTheme,A=B.setDarkTheme,P=Object(f.a)(O),D=P.navbarRef,R=P.isNavbarVisible,U=Object(E.a)(),F=U.logoLink,H=U.logoLinkProps,J=U.logoImageUrl,V=U.logoAlt;Object(_.a)(z);var q=Object(r.useCallback)((function(){x(!0)}),[x]),G=Object(r.useCallback)((function(){x(!1)}),[x]),K=Object(r.useCallback)((function(e){return e.target.checked?A():W()}),[W,A]);return i.a.createElement("nav",{ref:D,className:s()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":z},e[g.a.navbarHideable]=O,e[g.a.navbarHidden]=!R,e))},i.a.createElement("div",{className:"navbar__inner"},i.a.createElement("div",{className:"navbar__items"},i.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:q,onKeyDown:q},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},i.a.createElement("title",null,"Menu"),i.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),i.a.createElement(o.a,Object(n.a)({className:"navbar__brand",to:F},H),null!=J&&i.a.createElement("img",{key:C,className:"navbar__logo",src:J,alt:V}),null!=h&&i.a.createElement("strong",{className:s()("navbar__title",(a={},a[g.a.hideLogoText]=I,a))},h)),p.filter((function(e){return"left"===e.position})).map((function(e,a){return i.a.createElement(N,Object(n.a)({},e,{key:a}))}))),i.a.createElement("div",{className:"navbar__items navbar__items--right"},p.filter((function(e){return"right"===e.position})).map((function(e,a){return i.a.createElement(N,Object(n.a)({},e,{key:a}))})),!M&&i.a.createElement(b.a,{className:g.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:T,onChange:K}),i.a.createElement(u.a,{handleSearchBarToggle:L,isSearchBarExpanded:I}))),i.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:G}),i.a.createElement("div",{className:"navbar-sidebar"},i.a.createElement("div",{className:"navbar-sidebar__brand"},i.a.createElement(o.a,Object(n.a)({className:"navbar__brand",onClick:G,to:F},H),null!=J&&i.a.createElement("img",{key:C,className:"navbar__logo",src:J,alt:V}),null!=h&&i.a.createElement("strong",{className:"navbar__title"},h)),!M&&z&&i.a.createElement(b.a,{"aria-label":"Dark mode toggle in sidebar",checked:T,onChange:K})),i.a.createElement("div",{className:"navbar-sidebar__items"},i.a.createElement("div",{className:"menu"},i.a.createElement("ul",{className:"menu__list"},p.map((function(e,a){return i.a.createElement(j,Object(n.a)({},e,{onClick:G,key:a}))})))))))}},1504:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(){return l.a.createElement("footer",{className:"footer",id:"footer"},l.a.createElement("div",{className:"grid_c1 footer_cont"},l.a.createElement("div",{className:"footer_logo_container"},l.a.createElement("div",{className:"footer_logo"}),l.a.createElement("span",{className:"footer_designedby"})),l.a.createElement("div",{className:"footer_link_container"},l.a.createElement("div",{className:"footer_link"},l.a.createElement("h3",{className:"footer_link_tit footer_link_tit1"},"\u76f8\u5173\u8d44\u6e90"),l.a.createElement("p",null,l.a.createElement("a",{className:"link",href:"https://taro.jd.com/",target:"_blank"},"Taro")),l.a.createElement("p",null,l.a.createElement("a",{className:"link",href:"https://taro-ui.jd.com/",target:"_blank"},"Taro UI")),l.a.createElement("p",null,l.a.createElement("a",{className:"link",href:"https://at-ui.github.io/at-ui/#/zh",target:"_blank"},"At-UI")),l.a.createElement("p",null,l.a.createElement("a",{className:"link",href:"https://nerv.aotu.io/",target:"_blank"},"Nerv")),l.a.createElement("p",null,l.a.createElement("a",{className:"link",href:"https://athena.aotu.io/",target:"_blank"},"Athena"))),l.a.createElement("div",{className:"footer_link"},l.a.createElement("h3",{className:"footer_link_tit footer_link_tit2"},"\u793e\u533a"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/NervJS/taro/issues",target:"_blank"},"GitHub")),l.a.createElement("p",null,l.a.createElement("a",{href:"https://taro-club.jd.com",target:"_blank"},"Taro BBS")),l.a.createElement("p",{className:"footer_link_connect_wrap"},l.a.createElement("span",{className:"footer_link_connect footer_link_wechat"},"\u5fae\u4fe1",l.a.createElement("span",{className:"wechat_qrcode_icon"},l.a.createElement("svg",{t:"1554966525626",className:"icon svgicon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2588","data-spm-anchor-id":"a313x.7781069.0.i0"},l.a.createElement("path",{d:"M240.071 241.095h59.278v59.278h-59.278v-59.278z",fill:"","p-id":"2589"}),l.a.createElement("path",{d:"M405.959 134.485h-272.611v272.611h106.723v47.445h59.278v-47.445h106.723v-59.278h47.445v-47.445h-47.445l-0.114-165.888zM346.795 347.819h-154.169v-154.055h154.055v154.055h0.114zM240.071 727.154h59.278v59.278h-59.278v-59.278zM726.016 241.095h59.278v59.278h-59.278v-59.278zM512.683 509.042v63.943h59.278v-59.165h47.445v-59.278h-47.445v-47.445h-59.278v101.945zM512.683 725.789v60.643h59.278v-106.723h47.445v-59.278h-106.723v105.358zM571.961 786.432h47.445v47.445h-47.445v-47.445zM453.405 833.877v59.165h118.557v-59.165h-118.557z",fill:"","p-id":"2590"}),l.a.createElement("path",{d:"M678.685 679.709h-59.278v106.723h106.61v-59.278h-47.331v-47.445zM726.016 893.042h166.002v-59.165h-106.723v-47.445h-59.278v106.61zM892.018 513.821v-59.278h-106.723v59.278h106.723zM832.739 727.154h59.278v59.278h-59.278v-59.278zM453.405 347.819h59.278v59.278h-59.278v-59.278zM726.016 454.542v-47.445h166.002v-272.611h-272.611v59.278h-106.723v47.445h106.723v59.165h-47.445v47.445h47.445v59.278h59.278v47.445h47.331zM678.685 193.763h154.055v154.055h-154.055v-154.055zM678.685 572.985h47.331v47.445h-47.331v-47.445zM785.294 679.709h-59.278v47.445h106.723v-106.723h59.278v-47.445h-106.723v106.723zM453.405 241.095h59.278v59.278h-59.278v-59.278zM299.349 513.821h47.445v59.165h-47.445v-59.165zM453.405 454.542h-106.61v59.278h59.165v59.165h47.445v-118.443z",fill:"","p-id":"2591"}),l.a.createElement("path",{d:"M405.959 786.432v-106.723h47.445v-59.278h-213.333v-106.61h-106.723v59.278h59.278v47.445h-59.278v272.611h272.611v-59.278h47.445v-47.445h-47.445zM346.795 833.877h-154.169v-154.169h154.055v154.169h0.114zM453.405 572.985h59.278v47.445h-59.278v-47.445zM619.406 513.821h59.278v59.165h-59.278v-59.165zM726.016 513.821h59.278v59.165h-59.278v-59.165z",fill:"","p-id":"2592"})))),l.a.createElement("span",{className:"footer_link_wechat_img"},l.a.createElement("img",{src:"https://camo.githubusercontent.com/10834a234b99a5880b5dff7c0ca7235e2a0772e7/687474703a2f2f696d6732302e333630627579696d672e636f6d2f7562612f6a66732f7432303139372f3238332f313638373136383837342f3133363034322f32623464383131662f35623330613635634e39643166303366312e706e67"})))),l.a.createElement("div",{className:"footer_link"},l.a.createElement("h3",{className:"footer_link_tit footer_link_tit3"},"\u5173\u4e8e\u6211\u4eec"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://aotu.io/",target:"_blank"},"\u51f9\u51f8\u5b9e\u9a8c\u5ba4")),l.a.createElement("p",null,l.a.createElement("a",{href:"https://aotu.io/join/",target:"_blank"},"\u52a0\u5165\u6211\u4eec")),l.a.createElement("p",null,l.a.createElement("a",{href:"mailto:taro@jd.com?subject=\u3010Taro \u5408\u4f5c\u3011\u5408\u4f5c\u6807\u9898"},"\u8054\u7cfb\u6211\u4eec"))),l.a.createElement("div",{className:"footer_link"},l.a.createElement("h3",{className:"footer_link_tit footer_link_tit4"},"\u611f\u8c22"),l.a.createElement("p",null,l.a.createElement("a",{href:"http://jdc.jd.com/",target:"_blank"},"\u7528\u6237\u4f53\u9a8c\u8bbe\u8ba1\u90e8")),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/nervjs/taro#%E8%B4%A1%E7%8C%AE%E8%80%85%E4%BB%AC",target:"_blank"},"Taro \u8d21\u732e\u8005\u4eec"))))),l.a.createElement("div",{className:"copyright"},l.a.createElement("div",{className:"in"},"Copyright \xa9 ",(new Date).getFullYear(),". All Rights Reserved. \u7ca4ICP\u590715077732\u53f7-2")))}},1511:function(e,a,t){"use strict";var n=t(12),l=t(24),r=t(1492),i="".endsWith;n(n.P+n.F*t(1493)("endsWith"),"String",{endsWith:function(e){var a=r(this,e,"endsWith"),t=arguments.length>1?arguments[1]:void 0,n=l(a.length),c=void 0===t?n:Math.min(l(t),n),s=String(e);return i?i.call(a,s,c):a.slice(c-s.length,c)===s}})},1517:function(e,a,t){"use strict";t.r(a);t(1482),t(1511),t(80),t(1487);var n=t(0),l=t.n(n),r=t(1499),i=t(1485),c=t(1480),s=t(1483);a.default=function(){var e,a,t,n,o=Object(i.d)().pathname,m=void 0===o?"":o,h=Object(c.a)().siteConfig.baseUrl,v=void 0===h?"":h,u=Object(s.a)(m);if(u.endsWith(".html")){var b=(e=[v,v],t=a||"/",n=new RegExp(t+"{1,}","g"),e.join(t).replace(n,t));return l.a.createElement(i.a,{to:u.slice(u.startsWith(b)?v.length-1:0,-5)})}return l.a.createElement(r.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"404"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);