(window.webpackJsonp=window.webpackJsonp||[]).push([[1011],{1148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),a=(n(0),n(1479)),c={title:"Taro.getConnectedBluetoothDevices(OBJECT)",sidebar_label:"getConnectedBluetoothDevices"},i={id:"version-3.0.0-beta.5/apis/device/bluetooth/getConnectedBluetoothDevices",title:"Taro.getConnectedBluetoothDevices(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c [`wx.getConnectedBluetoothDevices`](https://developers.weixin.qq.com/miniprogram/dev/api/wx.getConnectedBluetoothDevices.html)\uff0c\u652f\u6301 `Promise` \u5316\u4f7f\u7528\u3002\r",source:"@site/versioned_docs/version-3.0.0-beta.5/apis/device/bluetooth/getConnectedBluetoothDevices.md",permalink:"/taro/docs/3.0.0-beta.5/apis/device/bluetooth/getConnectedBluetoothDevices",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.0-beta.5/apis/device/bluetooth/getConnectedBluetoothDevices.md",version:"3.0.0-beta.5",sidebar_label:"getConnectedBluetoothDevices",sidebar:"version-3.0.0-beta.5/API",previous:{title:"Taro.getBluetoothDevices(OBJECT)",permalink:"/taro/docs/3.0.0-beta.5/apis/device/bluetooth/getBluetoothDevices"},next:{title:"Taro.onBluetoothAdapterStateChange(CALLBACK)",permalink:"/taro/docs/3.0.0-beta.5/apis/device/bluetooth/onBluetoothAdapterStateChange"}},l=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]}],u={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.getConnectedBluetoothDevices.html"}),Object(a.b)("inlineCode",{parentName:"a"},"wx.getConnectedBluetoothDevices")),"\uff0c\u652f\u6301 ",Object(a.b)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(a.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.getConnectedBluetoothDevices(params).then(...)\n")))}p.isMDXComponent=!0},1479:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return v}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,v=s["".concat(c,".").concat(b)]||s[b]||d[b]||a;return n?o.a.createElement(v,i({ref:t},u,{components:n})):o.a.createElement(v,i({ref:t},u))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);