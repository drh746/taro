(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{1501:function(e,a,t){"use strict";var n=t(1),l=(t(1487),t(52),t(78),t(1482),t(9)),r=(t(1488),t(1489),t(1494),t(0)),c=t.n(r),i=t(1481),s=t.n(i),m=t(1484),o=t(1480),v=t(1483),h=t(1485),E=t(1502),u=t(1503),b=t(1490),d=t(1505),_=t(1495),f=t(1496),p=t(131),g=t.n(p);function k(e){var a=e.activeBasePath,t=e.activeRegxp,r=e.to,i=e.href,s=e.label,E=(e.position,Object(l.a)(e,["activeBasePath","activeRegxp","to","href","label","position"])),u=function(){var e=Object(o.a)().siteConfig.customFields.versions,a=void 0===e?[]:e,t=a[0],n=Object(h.d)(),l=a.find((function(e){return n.pathname.includes(e)}));return[t,null!=l?l:t]}(),b=u[0],d=u[1];if(b!==d&&E.version&&(s="v"+d),r&&r.startsWith("docs/")&&b!==d){var _=r.split("/"),f=_[0],p=_.slice(1);r=[f,d].concat(p).join("/");var g=a.split("/"),k=g[0],N=g.slice(1);a=[k,d].concat(N).join("/")}var j=Object(v.a)(r),O=Object(v.a)(a);return c.a.createElement(m.a,Object(n.a)({},i?{target:"_blank",rel:"noopener noreferrer",href:i}:Object.assign({isNavLink:!0,activeClassName:"navbar__link--active",to:j},a?{isActive:function(e,n){return t?new RegExp(a).test(n.pathname):n.pathname.startsWith(O)}}:null),E),s)}function N(e){var a=e.items,t=e.position,r=Object(l.a)(e,["items","position"]);return a?c.a.createElement("div",{className:s()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t})},c.a.createElement(k,Object(n.a)({className:"navbar__item navbar__link"},r),r.label),c.a.createElement("ul",{className:"dropdown__menu"},a.map((function(e,a){return c.a.createElement("li",{key:a},c.a.createElement(k,Object(n.a)({className:"navbar__item navbar__link"},e)))})))):c.a.createElement(k,Object(n.a)({},r,{className:s()(["navbar__item","navbar__link",r.className])}))}function j(e){var a=e.items,t=Object(l.a)(e,["items"]);return a?c.a.createElement("li",{className:"menu__list-item"},c.a.createElement(k,Object(n.a)({className:"menu__link menu__link--sublist"},t),t.label),c.a.createElement("ul",{className:"menu__list"},a.map((function(e,a){return c.a.createElement("li",{className:"menu__list-item",key:a},c.a.createElement(k,Object(n.a)({className:"menu__link"},e)))})))):c.a.createElement("li",{className:"menu__list-item"},c.a.createElement(k,Object(n.a)({className:"menu__link"},t)))}a.a=function(){var e,a,t=Object(o.a)(),l=t.siteConfig.themeConfig,i=l.navbar,v=(i=void 0===i?{}:i).title,h=i.links,p=void 0===h?[]:h,k=i.hideOnScroll,O=void 0!==k&&k,M=l.disableDarkMode,w=void 0!==M&&M,z=t.isClient,C=Object(r.useState)(!1),y=C[0],x=C[1],T=Object(r.useState)(!1),A=T[0],D=T[1],B=Object(b.a)(),R=B.isDarkTheme,L=B.setLightTheme,S=B.setDarkTheme,I=Object(d.a)(O),J=I.navbarRef,P=I.isNavbarVisible,W=Object(f.a)(),H=W.logoLink,U=W.logoLinkProps,V=W.logoImageUrl,F=W.logoAlt;Object(_.a)(y);var q=Object(r.useCallback)((function(){x(!0)}),[x]),G=Object(r.useCallback)((function(){x(!1)}),[x]),K=Object(r.useCallback)((function(e){return e.target.checked?S():L()}),[L,S]);return c.a.createElement("nav",{ref:J,className:s()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":y},e[g.a.navbarHideable]=O,e[g.a.navbarHidden]=!P,e))},c.a.createElement("div",{className:"navbar__inner"},c.a.createElement("div",{className:"navbar__items"},c.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:q,onKeyDown:q},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},c.a.createElement("title",null,"Menu"),c.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),c.a.createElement(m.a,Object(n.a)({className:"navbar__brand",to:H},U),null!=V&&c.a.createElement("img",{key:z,className:"navbar__logo",src:V,alt:F}),null!=v&&c.a.createElement("strong",{className:s()("navbar__title",(a={},a[g.a.hideLogoText]=A,a))},v)),p.filter((function(e){return"left"===e.position})).map((function(e,a){return c.a.createElement(N,Object(n.a)({},e,{key:a}))}))),c.a.createElement("div",{className:"navbar__items navbar__items--right"},p.filter((function(e){return"right"===e.position})).map((function(e,a){return c.a.createElement(N,Object(n.a)({},e,{key:a}))})),!w&&c.a.createElement(u.a,{className:g.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:R,onChange:K}),c.a.createElement(E.a,{handleSearchBarToggle:D,isSearchBarExpanded:A}))),c.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:G}),c.a.createElement("div",{className:"navbar-sidebar"},c.a.createElement("div",{className:"navbar-sidebar__brand"},c.a.createElement(m.a,Object(n.a)({className:"navbar__brand",onClick:G,to:H},U),null!=V&&c.a.createElement("img",{key:z,className:"navbar__logo",src:V,alt:F}),null!=v&&c.a.createElement("strong",{className:"navbar__title"},v)),!w&&y&&c.a.createElement(u.a,{"aria-label":"Dark mode toggle in sidebar",checked:R,onChange:K})),c.a.createElement("div",{className:"navbar-sidebar__items"},c.a.createElement("div",{className:"menu"},c.a.createElement("ul",{className:"menu__list"},p.map((function(e,a){return c.a.createElement(j,Object(n.a)({},e,{onClick:G,key:a}))})))))))}},1504:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(){return l.a.createElement("footer",{className:"footer",id:"footer"},l.a.createElement("div",{className:"grid_c1 footer_cont"},l.a.createElement("div",{className:"footer_logo_container"},l.a.createElement("div",{className:"footer_logo"}),l.a.createElement("span",{className:"footer_designedby"})),l.a.createElement("div",{className:"footer_link_container"},l.a.createElement("div",{className:"footer_link"},l.a.createElement("h3",{className:"footer_link_tit footer_link_tit1"},"\u76f8\u5173\u8d44\u6e90"),l.a.createElement("p",null,l.a.createElement("a",{className:"link",href:"https://taro.jd.com/",target:"_blank"},"Taro")),l.a.createElement("p",null,l.a.createElement("a",{className:"link",href:"https://taro-ui.jd.com/",target:"_blank"},"Taro UI")),l.a.createElement("p",null,l.a.createElement("a",{className:"link",href:"https://at-ui.github.io/at-ui/#/zh",target:"_blank"},"At-UI")),l.a.createElement("p",null,l.a.createElement("a",{className:"link",href:"https://nerv.aotu.io/",target:"_blank"},"Nerv")),l.a.createElement("p",null,l.a.createElement("a",{className:"link",href:"https://athena.aotu.io/",target:"_blank"},"Athena"))),l.a.createElement("div",{className:"footer_link"},l.a.createElement("h3",{className:"footer_link_tit footer_link_tit2"},"\u793e\u533a"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/NervJS/taro/issues",target:"_blank"},"GitHub")),l.a.createElement("p",null,l.a.createElement("a",{href:"https://taro-club.jd.com",target:"_blank"},"Taro BBS")),l.a.createElement("p",{className:"footer_link_connect_wrap"},l.a.createElement("span",{className:"footer_link_connect footer_link_wechat"},"\u5fae\u4fe1",l.a.createElement("span",{className:"wechat_qrcode_icon"},l.a.createElement("svg",{t:"1554966525626",className:"icon svgicon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2588","data-spm-anchor-id":"a313x.7781069.0.i0"},l.a.createElement("path",{d:"M240.071 241.095h59.278v59.278h-59.278v-59.278z",fill:"","p-id":"2589"}),l.a.createElement("path",{d:"M405.959 134.485h-272.611v272.611h106.723v47.445h59.278v-47.445h106.723v-59.278h47.445v-47.445h-47.445l-0.114-165.888zM346.795 347.819h-154.169v-154.055h154.055v154.055h0.114zM240.071 727.154h59.278v59.278h-59.278v-59.278zM726.016 241.095h59.278v59.278h-59.278v-59.278zM512.683 509.042v63.943h59.278v-59.165h47.445v-59.278h-47.445v-47.445h-59.278v101.945zM512.683 725.789v60.643h59.278v-106.723h47.445v-59.278h-106.723v105.358zM571.961 786.432h47.445v47.445h-47.445v-47.445zM453.405 833.877v59.165h118.557v-59.165h-118.557z",fill:"","p-id":"2590"}),l.a.createElement("path",{d:"M678.685 679.709h-59.278v106.723h106.61v-59.278h-47.331v-47.445zM726.016 893.042h166.002v-59.165h-106.723v-47.445h-59.278v106.61zM892.018 513.821v-59.278h-106.723v59.278h106.723zM832.739 727.154h59.278v59.278h-59.278v-59.278zM453.405 347.819h59.278v59.278h-59.278v-59.278zM726.016 454.542v-47.445h166.002v-272.611h-272.611v59.278h-106.723v47.445h106.723v59.165h-47.445v47.445h47.445v59.278h59.278v47.445h47.331zM678.685 193.763h154.055v154.055h-154.055v-154.055zM678.685 572.985h47.331v47.445h-47.331v-47.445zM785.294 679.709h-59.278v47.445h106.723v-106.723h59.278v-47.445h-106.723v106.723zM453.405 241.095h59.278v59.278h-59.278v-59.278zM299.349 513.821h47.445v59.165h-47.445v-59.165zM453.405 454.542h-106.61v59.278h59.165v59.165h47.445v-118.443z",fill:"","p-id":"2591"}),l.a.createElement("path",{d:"M405.959 786.432v-106.723h47.445v-59.278h-213.333v-106.61h-106.723v59.278h59.278v47.445h-59.278v272.611h272.611v-59.278h47.445v-47.445h-47.445zM346.795 833.877h-154.169v-154.169h154.055v154.169h0.114zM453.405 572.985h59.278v47.445h-59.278v-47.445zM619.406 513.821h59.278v59.165h-59.278v-59.165zM726.016 513.821h59.278v59.165h-59.278v-59.165z",fill:"","p-id":"2592"})))),l.a.createElement("span",{className:"footer_link_wechat_img"},l.a.createElement("img",{src:"https://camo.githubusercontent.com/10834a234b99a5880b5dff7c0ca7235e2a0772e7/687474703a2f2f696d6732302e333630627579696d672e636f6d2f7562612f6a66732f7432303139372f3238332f313638373136383837342f3133363034322f32623464383131662f35623330613635634e39643166303366312e706e67"})))),l.a.createElement("div",{className:"footer_link"},l.a.createElement("h3",{className:"footer_link_tit footer_link_tit3"},"\u5173\u4e8e\u6211\u4eec"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://aotu.io/",target:"_blank"},"\u51f9\u51f8\u5b9e\u9a8c\u5ba4")),l.a.createElement("p",null,l.a.createElement("a",{href:"https://aotu.io/join/",target:"_blank"},"\u52a0\u5165\u6211\u4eec")),l.a.createElement("p",null,l.a.createElement("a",{href:"mailto:taro@jd.com?subject=\u3010Taro \u5408\u4f5c\u3011\u5408\u4f5c\u6807\u9898"},"\u8054\u7cfb\u6211\u4eec"))),l.a.createElement("div",{className:"footer_link"},l.a.createElement("h3",{className:"footer_link_tit footer_link_tit4"},"\u611f\u8c22"),l.a.createElement("p",null,l.a.createElement("a",{href:"http://jdc.jd.com/",target:"_blank"},"\u7528\u6237\u4f53\u9a8c\u8bbe\u8ba1\u90e8")),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/nervjs/taro#%E8%B4%A1%E7%8C%AE%E8%80%85%E4%BB%AC",target:"_blank"},"Taro \u8d21\u732e\u8005\u4eec"))))),l.a.createElement("div",{className:"copyright"},l.a.createElement("div",{className:"in"},"Copyright \xa9 ",(new Date).getFullYear(),". All Rights Reserved. \u7ca4ICP\u590715077732\u53f7-2")))}},1552:function(e){e.exports=JSON.parse('["2.2.1","1.3.42","3.0.0-beta.5"]')},280:function(e,a,t){"use strict";t.r(a);t(1488),t(1489),t(1482);var n=t(0),l=t.n(n),r=t(1499),c=t(1480),i=t(1484),s=t(1483),m=t(1552);a.default=function(){var e=Object(c.a)().siteConfig,a=void 0===e?{}:e,t=m[0],n=m.filter((function(e){return e.startsWith("3")})),o=m.filter((function(e){return e!==t&&!n.includes(e)})),v="https://github.com/"+a.organizationName+"/"+a.projectName;return l.a.createElement(r.a,{permalink:"/versions",description:"Docusaurus 2 Versions page listing all documented site versions"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("h1",null,"Taro \u6587\u6863\u7248\u672c"),l.a.createElement("div",{className:"margin-bottom--lg"},l.a.createElement("h3",{id:"latest"},"\u6700\u65b0\u7a33\u5b9a\u7248\u672c"),l.a.createElement("p",null,"\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u627e\u5230\u6700\u65b0\u7684\u7248\u672c"),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,t),l.a.createElement("td",null,l.a.createElement(i.a,{to:Object(s.a)("/docs/README")},"\u6587\u6863")),l.a.createElement("td",null,l.a.createElement("a",{href:v+"/releases/tag/v"+t},"\u66f4\u65b0\u65e5\u5fd7")))))),l.a.createElement("div",{className:"margin-bottom--lg"},l.a.createElement("h3",{id:"next"},"\u6700\u65b0\u8fdb\u5ea6 (\u672a\u53d1\u5e03\u7248\u672c)"),l.a.createElement("p",null,"\u4f60\u80fd\u591f\u5728\u8fd9\u91cc\u770b\u5230\u6700\u65b0\u7684\u6587\u6863\u548c\u672a\u53d1\u5e03\u7684\u4ee3\u7801\u3002"),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Latest"),l.a.createElement("td",null,l.a.createElement(i.a,{to:Object(s.a)("/docs/next/README")},"\u6587\u6863")),l.a.createElement("td",null,l.a.createElement("a",{href:v},"\u6e90\u4ee3\u7801")))))),n.length>0&&l.a.createElement("div",{className:"margin-bottom--lg"},l.a.createElement("h3",{id:"archive"},"Taro Next"),l.a.createElement("p",null,"Taro Next \u7248\u672c"),l.a.createElement("table",null,l.a.createElement("tbody",null,n.map((function(e){return l.a.createElement("tr",{key:e},l.a.createElement("th",null,e),l.a.createElement("td",null,l.a.createElement(i.a,{to:Object(s.a)("/docs/"+e+"/README")},"\u6587\u6863")),l.a.createElement("td",null,l.a.createElement("a",{href:v+"/releases/tag/v"+e},"\u66f4\u65b0\u65e5\u5fd7")))}))))),o.length>0&&l.a.createElement("div",{className:"margin-bottom--lg"},l.a.createElement("h3",{id:"archive"},"\u5386\u53f2\u7248\u672c"),l.a.createElement("p",null,"\u4f60\u80fd\u591f\u627e\u5230\u4e4b\u524d\u53d1\u5e03\u7684\u7248\u672c\u3002"),l.a.createElement("table",null,l.a.createElement("tbody",null,o.map((function(e){return l.a.createElement("tr",{key:e},l.a.createElement("th",null,e),l.a.createElement("td",null,l.a.createElement(i.a,{to:Object(s.a)("/docs/"+e+"/README")},"\u6587\u6863")),l.a.createElement("td",null,l.a.createElement("a",{href:v+"/releases/tag/v"+e},"\u66f4\u65b0\u65e5\u5fd7")))})))))))}}}]);