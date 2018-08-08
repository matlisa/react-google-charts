(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/docs/CandleStickChart.mdx":function(e,a,n){"use strict";n.r(a);var t=n("./node_modules/react/index.js"),r=n.n(t),o=n("./node_modules/@mdx-js/tag/dist/index.js"),s=n("./node_modules/docz/dist/index.m.js"),p=n("./src/index.tsx");function c(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}a.default=function(e){var a=e.components;c(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:a},r.a.createElement(o.MDXTag,{name:"h1",components:a,props:{id:"usage"}},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h1",props:{"aria-hidden":!0,href:"#usage"}},r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Usage"),r.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"simple-example"}},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#simple-example"}},r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Simple Example"),r.a.createElement(s.d,{__position:0,__code:"<Chart\n  width={'100%'}\n  height={350}\n  chartType=\"CandlestickChart\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['day', 'a', 'b', 'c', 'd'],\n    ['Mon', 20, 28, 38, 45],\n    ['Tue', 31, 38, 55, 66],\n    ['Wed', 50, 55, 77, 80],\n    ['Thu', 77, 77, 66, 50],\n    ['Fri', 68, 66, 22, 15],\n  ]}\n  options={{\n    legend: 'none',\n  }}\n  rootProps={{ 'data-testid': '1' }}\n/>"},r.a.createElement(p.a,{width:"100%",height:350,chartType:"CandlestickChart",loader:r.a.createElement("div",null,"Loading Chart"),data:[["day","a","b","c","d"],["Mon",20,28,38,45],["Tue",31,38,55,66],["Wed",50,55,77,80],["Thu",77,77,66,50],["Fri",68,66,22,15]],options:{legend:"none"},rootProps:{"data-testid":"1"}})),r.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"waterfall-chart"}},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#waterfall-chart"}},r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Waterfall Chart"),r.a.createElement(s.d,{__position:1,__code:"<Chart\n  width={'100%'}\n  height={350}\n  chartType=\"CandlestickChart\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['day', 'a', 'b', 'c', 'd'],\n    ['Mon', 20, 28, 38, 45],\n    ['Tue', 31, 38, 55, 66],\n    ['Wed', 50, 55, 77, 80],\n    ['Thu', 77, 77, 66, 50],\n    ['Fri', 68, 66, 22, 15],\n  ]}\n  options={{\n    legend: 'none',\n    bar: { groupWidth: '100%' }, // Remove space between bars.\n    candlestick: {\n      fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red\n      risingColor: { strokeWidth: 0, fill: '#0f9d58' }, // green\n    },\n  }}\n  rootProps={{ 'data-testid': '2' }}\n/>"},r.a.createElement(p.a,{width:"100%",height:350,chartType:"CandlestickChart",loader:r.a.createElement("div",null,"Loading Chart"),data:[["day","a","b","c","d"],["Mon",20,28,38,45],["Tue",31,38,55,66],["Wed",50,55,77,80],["Thu",77,77,66,50],["Fri",68,66,22,15]],options:{legend:"none",bar:{groupWidth:"100%"},candlestick:{fallingColor:{strokeWidth:0,fill:"#a52714"},risingColor:{strokeWidth:0,fill:"#0f9d58"}}},rootProps:{"data-testid":"2"}})),r.a.createElement(o.MDXTag,{name:"h1",components:a,props:{id:"data-format"}},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h1",props:{"aria-hidden":!0,href:"#data-format"}},r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Data Format"),r.a.createElement(o.MDXTag,{name:"p",components:a},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://developers.google.com/chart/interactive/docs/gallery/candlestickchart#data-format"}},"Complete Data Format Reference")),r.a.createElement(o.MDXTag,{name:"h1",components:a,props:{id:"reference"}},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h1",props:{"aria-hidden":!0,href:"#reference"}},r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Reference"),r.a.createElement(o.MDXTag,{name:"p",components:a},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://developers.google.com/chart/interactive/docs/gallery/candlestickchart"}},"Original Google Charts Docs")))}}}]);