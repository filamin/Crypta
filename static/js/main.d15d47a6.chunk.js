(this.webpackJsonpcryptas=this.webpackJsonpcryptas||[]).push([[0],{216:function(e,c,t){},389:function(e,c,t){},392:function(e,c,t){},393:function(e,c,t){"use strict";t.r(c);var a=t(2),n=t(1),s=t.n(n),r=t(58),i=t.n(r),j=t(28),o=t(8),l=(t(65),t(11)),u=t(35),d=t.n(u),b=(t(106),t(216),function(e){var c=e.name,t=e.image,n=e.symbol,s=e.price,r=e.marketcap,i=e.priceChange,j=e.volume;return i&&s&&(i=i.toFixed(2),s=s.toFixed(2)),Object(a.jsx)("div",{className:"coin-container",children:Object(a.jsx)("div",{className:"coin-row",children:Object(a.jsxs)("div",{className:"coin",children:[Object(a.jsxs)("div",{className:"coin-names",children:[Object(a.jsx)("img",{src:t,alt:"crypta"}),Object(a.jsx)("h1",{children:c}),Object(a.jsx)("p",{className:"coin-symbol",children:n})]}),Object(a.jsxs)("div",{className:"coin-data",children:[Object(a.jsxs)("p",{className:"coin-price",children:["$",s]}),Object(a.jsxs)("p",{className:"coin-volume",children:["$",j.toLocaleString()]}),i<0?Object(a.jsxs)("p",{className:"coin-precent red",children:[i,"%"]}):Object(a.jsxs)("p",{className:"coin-precent green",children:[i,"%"]}),Object(a.jsxs)("p",{className:"coin-marketcap",children:["\u0420\u044b\u043d\u043e\u0447\u043d. \u043a\u0430\u043f.: $",r.toLocaleString()]})]})]})})})}),m=t(18),O=function(e){var c=e.id,t=Object(n.useState)(),s=Object(l.a)(t,2),r=s[0],i=s[1];Object(n.useEffect)((function(){d.a.get("https://api.coingecko.com/api/v3/coins/".concat(c,"/market_chart?vs_currency=usd&days=14&interval=daily")).then((function(e){i(e.data.prices)})).catch((function(e){return alert("".concat(e))}))}),[i]);var j=function(e){var c=new Date(e-e%1e3/1e3);return c.getDate()+"/"+(c.getMonth()+1)+"/"+c.getFullYear()},o=[];return r&&r.forEach((function(e){o.push({name:j(e[0]),price:e[1].toFixed(2)})})),Object(a.jsx)("div",{children:Object(a.jsxs)(m.c,{width:600,height:500,data:o,margin:{top:50,right:50,left:0,bottom:5},children:[Object(a.jsx)(m.a,{strokeDasharray:"3 3"}),Object(a.jsx)(m.g,{dataKey:"name",stroke:"white",dy:10}),Object(a.jsx)(m.h,{stroke:"white"}),Object(a.jsx)(m.f,{cursor:{stroke:"red",strokeWidth:2}}),Object(a.jsx)(m.b,{type:"monotone",dataKey:"price",stroke:"#ffffff",activeDot:{r:8}})]})})},h=function(e){var c=e.selected,t=e.amount,n=e.onChangeAmount;return Object(a.jsxs)("div",{className:"cur-row",children:[Object(a.jsx)("input",{className:"cur-input",type:"number",value:t,onChange:n}),Object(a.jsx)("p",{className:"symbol",children:c.toUpperCase()})]})},p=(t(389),function(e){var c,t,s=e.coins,r=(e.loaded,e.from),i=e.to,j=r,o=i,u=s.find((function(e){return e.symbol===r})).current_price,d=Object(n.useState)(1),b=Object(l.a)(d,2),m=b[0],O=b[1],p=Object(n.useState)(!0),x=Object(l.a)(p,2),f=x[0],v=x[1];return f?(t=m,c=m*u):(c=m,t=m/u),Object(a.jsxs)("div",{className:"converter",children:[Object(a.jsx)("h1",{children:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440 \u0432\u0430\u043b\u044e\u0442"}),Object(a.jsx)(h,{selected:j,amount:t,onChangeAmount:function(e){O(e.target.value),v(!0)}}),Object(a.jsx)("p",{className:"eq",children:"="}),Object(a.jsx)(h,{selected:o,amount:c,onChangeAmount:function(e){O(e.target.value),v(!1)}})]})}),x=t(61),f=function(){var e=Object(n.useState)([]),c=Object(l.a)(e,2),t=c[0],s=c[1],r=Object(n.useState)(!1),i=Object(l.a)(r,2),o=i[0],u=i[1];Object(n.useEffect)((function(){d.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){s(e.data),u(!0)})).catch((function(e){return alert("".concat(e))}))}),[]);var m=Object(n.useState)(""),h=Object(l.a)(m,2),f=h[0],v=h[1],g=t.filter((function(e){return e.name.toLowerCase().includes(f.toLowerCase())}));return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"coin-search",children:[Object(a.jsxs)("div",{className:"coin-menu",children:[Object(a.jsx)("h1",{className:"coin-text",children:"CRYPTA"}),Object(a.jsx)(j.b,{to:"/secondpage",children:Object(a.jsx)(x.b,{})})]}),Object(a.jsx)("form",{children:Object(a.jsx)("input",{type:"text",className:"coin-input",placeholder:"\u041f\u043e\u0438\u0441\u043a...",onChange:function(e){v(e.target.value)}})})]}),o?g.map((function(e){return Object(a.jsxs)("div",{className:"coin-all",children:["bitcoin"===e.id?Object(a.jsxs)("div",{className:"info-n-cur",children:[Object(a.jsx)(O,{id:e.id}),Object(a.jsx)(p,{coins:t,loaded:o,from:e.symbol,to:"usd"})]}):null,"ethereum"===e.id?Object(a.jsxs)("div",{className:"info-n-cur",children:[Object(a.jsx)(O,{id:e.id}),Object(a.jsx)(p,{coins:t,loaded:o,from:e.symbol,to:"usd"})]}):null,Object(a.jsx)(b,{name:e.name,image:e.image,symbol:e.symbol,marketcap:e.market_cap,price:e.current_price,priceChange:e.price_change_percentage_24h,volume:e.total_volume})]},e.id)})):null]})},v=(t(392),function(){var e=Object(n.useState)(),c=Object(l.a)(e,2),t=c[0],s=c[1],r=Object(n.useState)(),i=Object(l.a)(r,2),o=i[0],u=i[1],b=Object(n.useState)(0),O=Object(l.a)(b,2),h=O[0],p=O[1],f=Object(n.useState)(0),v=Object(l.a)(f,2),g=v[0],N=v[1],y=Object(n.useState)(!0),k=Object(l.a)(y,2),_=k[0],C=k[1],S=Object(n.useState)(!1),w=Object(l.a)(S,2),E=w[0],T=w[1];Object(n.useEffect)((function(){d.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){s(e.data[0].current_price),u(e.data[1].current_price),T(!0)})).catch((function(e){return alert("".concat(e))}))}),[]);var A=0,D=[];return E&&(A=(t*h+o*g).toFixed(2),D[0]={name:"BTC",value:t*h},D[1]={name:"ETH",value:o*g},console.log(D)),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"coin-search",children:Object(a.jsxs)("div",{className:"coin-menu",children:[Object(a.jsx)("h1",{className:"coin-text",children:"CRYPTA"}),Object(a.jsx)(j.b,{to:"/firstpage",children:Object(a.jsx)(x.a,{onClick:function(){C(!_)}})})]})}),Object(a.jsxs)("div",{className:"my-cab-all",children:[Object(a.jsxs)("div",{className:"my-cab",children:[Object(a.jsx)("h1",{children:"\u041f\u043e\u0440\u0442\u0444\u0435\u043b\u044c \u0432\u0430\u043b\u044e\u0442"}),Object(a.jsxs)("div",{className:"cur-row",children:[Object(a.jsx)("input",{required:!0,min:0,className:"cur-input",type:"number",value:h,onChange:function(e){p(e.target.value)}}),Object(a.jsx)("p",{className:"symbol",children:"BTC"})]}),Object(a.jsxs)("div",{className:"cur-row",children:[Object(a.jsx)("input",{min:"0",className:"cur-input",type:"number",value:g,onChange:function(e){N(e.target.value)}}),Object(a.jsx)("p",{className:"symbol",children:"ETH"})]}),Object(a.jsxs)("div",{className:"cur-row",children:[Object(a.jsx)("input",{className:"cur-input",type:"number",value:A,readOnly:!0}),Object(a.jsx)("p",{className:"symbol",children:"USD"})]})]}),Object(a.jsx)(m.e,{width:800,height:900,children:Object(a.jsx)(m.d,{data:D,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",innerRadius:200,outerRadius:300,fill:"#49ba92",label:!0})})]})]})});var g=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"coin-app",children:Object(a.jsxs)(o.d,{children:[Object(a.jsx)(o.a,{exact:!0,from:"/",to:"/firstpage"}),Object(a.jsx)(o.b,{exact:!0,path:"/firstpage",component:f}),Object(a.jsx)(o.b,{exact:!0,path:"/secondpage",component:v})]})})})};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(j.a,{children:Object(a.jsx)(g,{})})}),document.getElementById("root"))},65:function(e,c,t){}},[[393,1,2]]]);
//# sourceMappingURL=main.d15d47a6.chunk.js.map