(window.webpackJsonp=window.webpackJsonp||[]).push([[426],{1479:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return s}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=n.a.createContext({}),b=function(e){var t=n.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=b(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},l=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=b(r),l=a,s=p["".concat(c,".").concat(l)]||p[l]||g[l]||o;return r?n.a.createElement(s,i({ref:t},d,{components:r})):n.a.createElement(s,i({ref:t},d))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=l;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var d=2;d<o;d++)c[d]=r[d];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},565:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return b}));var a=r(1),n=r(9),o=(r(0),r(1479)),c={title:"Taro.getBackgroundAudioManager()",sidebar_label:"getBackgroundAudioManager"},i={id:"version-2.2.1/apis/media/background-audio/getBackgroundAudioManager",title:"Taro.getBackgroundAudioManager()",description:"\u83b7\u53d6**\u5168\u5c40\u552f\u4e00**\u7684\u80cc\u666f\u97f3\u9891\u7ba1\u7406\u5668\u3002",source:"@site/versioned_docs/version-2.2.1/apis/media/background-audio/getBackgroundAudioManager.md",permalink:"/taro/docs/apis/media/background-audio/getBackgroundAudioManager",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.2.1/apis/media/background-audio/getBackgroundAudioManager.md",version:"2.2.1",sidebar_label:"getBackgroundAudioManager",sidebar:"version-2.2.1/API",previous:{title:"Taro.getBackgroundAudioPlayerState(option)",permalink:"/taro/docs/apis/media/background-audio/getBackgroundAudioPlayerState"},next:{title:"BackgroundAudioManager",permalink:"/taro/docs/apis/media/background-audio/BackgroundAudioManager"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],d={rightToc:u};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u83b7\u53d6",Object(o.b)("strong",{parentName:"p"},"\u5168\u5c40\u552f\u4e00"),"\u7684\u80cc\u666f\u97f3\u9891\u7ba1\u7406\u5668\u3002\n\u5c0f\u7a0b\u5e8f\u5207\u5165\u540e\u53f0\uff0c\u5982\u679c\u97f3\u9891\u5904\u4e8e\u64ad\u653e\u72b6\u6001\uff0c\u53ef\u4ee5\u7ee7\u7eed\u64ad\u653e\u3002\u4f46\u662f\u540e\u53f0\u72b6\u6001\u4e0d\u80fd\u901a\u8fc7\u8c03\u7528API\u64cd\u7eb5\u97f3\u9891\u7684\u64ad\u653e\u72b6\u6001\u3002"),Object(o.b)("p",null,"\u4ece\u5fae\u4fe1\u5ba2\u6237\u7aef6.7.2\u7248\u672c\u5f00\u59cb\uff0c\u82e5\u9700\u8981\u5728\u5c0f\u7a0b\u5e8f\u5207\u540e\u53f0\u540e\u7ee7\u7eed\u64ad\u653e\u97f3\u9891\uff0c\u9700\u8981\u5728 ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html"}),"app.json")," \u4e2d\u914d\u7f6e ",Object(o.b)("inlineCode",{parentName:"p"},"requiredBackgroundModes")," \u5c5e\u6027\u3002\u5f00\u53d1\u7248\u548c\u4f53\u9a8c\u7248\u4e0a\u53ef\u4ee5\u76f4\u63a5\u751f\u6548\uff0c\u6b63\u5f0f\u7248\u8fd8\u9700\u901a\u8fc7\u5ba1\u6838\u3002"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioManager.html"}),"\u53c2\u8003\u6587\u6863"))),Object(o.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"() => BackgroundAudioManager\n")),Object(o.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(o.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"const backgroundAudioManager = Taro.getBackgroundAudioManager()\nbackgroundAudioManager.title = '\u6b64\u65f6\u6b64\u523b'\nbackgroundAudioManager.epname = '\u6b64\u65f6\u6b64\u523b'\nbackgroundAudioManager.singer = '\u8bb8\u5dcd'\nbackgroundAudioManager.coverImgUrl = 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'\nbackgroundAudioManager.src = 'https://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46' // \u8bbe\u7f6e\u4e86 src \u4e4b\u540e\u4f1a\u81ea\u52a8\u64ad\u653e\n")),Object(o.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Taro.getBackgroundAudioManager"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))))}b.isMDXComponent=!0}}]);