(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1479:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var O=r.a.createContext({}),i=function(e){var t=r.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},p=function(e){var t=i(e.components);return r.a.createElement(O.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,O=l(e,["components","mdxType","originalType","parentName"]),p=i(a),d=n,s=p["".concat(b,".").concat(d)]||p[d]||j[d]||c;return a?r.a.createElement(s,o({ref:t},O,{components:a})):r.a.createElement(s,o({ref:t},O))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,b[1]=o;for(var O=2;O<c;O++)b[O]=a[O];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},200:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return i}));var n=a(1),r=a(9),c=(a(0),a(1479)),b={title:"Taro.connectSocket(OBJECT)",sidebar_label:"connectSocket"},o={id:"apis/network/socket/connectSocket",title:"Taro.connectSocket(OBJECT)",description:"\u521b\u5efa\u4e00\u4e2a [WebSocket](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket) \u94fe\u63a5\u3002",source:"@site/docs/apis/network/socket/connectSocket.md",permalink:"/taro/docs/next/apis/network/socket/connectSocket",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/network/socket/connectSocket.md",version:"next",sidebar_label:"connectSocket",sidebar:"API",previous:{title:"Taro.addInterceptor(function func)",permalink:"/taro/docs/next/apis/network/request/addInterceptor"},next:{title:"Taro.sendSocketMessage",permalink:"/taro/docs/next/apis/network/socket/sendSocketMessage"}},l=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],O={rightToc:l};function i(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u521b\u5efa\u4e00\u4e2a ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket"}),"WebSocket")," \u94fe\u63a5\u3002"),Object(c.b)("p",null,"\u652f\u6301\u5b58\u5728\u6700\u591a",Object(c.b)("strong",{parentName:"p"},"\u4e24\u4e2a")," WebSocket \u94fe\u63a5\uff0c\u6bcf\u6b21\u6210\u529f\u8c03\u7528 Taro.connectSocket \u4f1a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"native-api.md#sockettask"}),"SocketTask"),"\u3002"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"OBJECT \u53c2\u6570\u8bf4\u660e\uff1a")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5fc5\u586b"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"url"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"String"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u662f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u63a5\u53e3\u5730\u5740\uff0c\u5fc5\u987b\u662f wss \u534f\u8bae")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"header"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Object"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"HTTP Header , header \u4e2d\u4e0d\u80fd\u8bbe\u7f6e Referer")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"method"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"String"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u9ed8\u8ba4\u662f GET\uff0c\u6709\u6548\u503c\uff1aOPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"protocols"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"StringArray"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5b50\u534f\u8bae\u6570\u7ec4")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"success"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Function"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Function"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"complete"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Function"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.connectSocket({\n  url: 'ws://echo.websocket.org/echo',\n  success: function () {\n    console.log('connect success')\n  }\n}).then(task => {\n  task.onOpen(function () {\n    console.log('onOpen')\n    task.send({ data: 'xxx' })\n  })\n  task.onMessage(function (msg) {\n    console.log('onMessage: ', msg)\n    task.close()\n  })\n  task.onError(function () {\n    console.log('onError')\n  })\n  task.onClose(function (e) {\n    console.log('onClose: ', e)\n  })\n})\n")),Object(c.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.connectSocket"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"SocketTask"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}i.isMDXComponent=!0}}]);