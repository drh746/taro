(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{1479:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},s=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(n),d=r,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||a;return n?o.a.createElement(m,i({ref:t},l,{components:n})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},314:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(1),o=n(9),a=(n(0),n(1479)),c={title:"Ad",sidebar_label:"Ad"},i={id:"version-3.0.0-beta.5/components/open/ad",title:"Ad",description:"##### Banner \u5e7f\u544a",source:"@site/versioned_docs/version-3.0.0-beta.5/components/open/ad.md",permalink:"/taro/docs/3.0.0-beta.5/components/open/ad",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.0-beta.5/components/open/ad.md",version:"3.0.0-beta.5",sidebar_label:"Ad",sidebar:"version-3.0.0-beta.5/components",previous:{title:"Canvas",permalink:"/taro/docs/3.0.0-beta.5/components/canvas/canvas"},next:{title:"OfficialAccount",permalink:"/taro/docs/3.0.0-beta.5/components/open/official-account"}},p=[],l={rightToc:p};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"banner-\u5e7f\u544a"},"Banner \u5e7f\u544a"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u7ec4\u4ef6 \u652f\u6301\u5ea6")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714")))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u5177\u4f53\u7528\u6cd5\u8bf7\u770b\u5c0f\u7a0b\u5e8f\u5b98\u65b9\u6587\u6863")),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/ad.html"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f Ad"),"\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Component } from '@tarojs/taro'\n// \u5f15\u5165 Ad \u7ec4\u4ef6\nimport { Ad } from '@tarojs/components'\n\nclass App extends Component {\n  render () {\n    return (\n      <Ad\n        unit-id=''\n        ad-intervals={60}\n        onLoad={() => console.log('ad onLoad')}\n        onError={() => console.log('ad onError')}\n        onClose={() => console.log('ad onClose')}\n      />\n    )\n  }\n}\n")))}b.isMDXComponent=!0}}]);