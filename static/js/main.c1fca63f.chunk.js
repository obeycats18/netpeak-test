(this.webpackJsonpnetpeack=this.webpackJsonpnetpeack||[]).push([[0],{122:function(e,t,n){},147:function(e,t,n){},148:function(e,t,n){},149:function(e,t,n){},150:function(e,t,n){},151:function(e,t,n){},154:function(e,t,n){},155:function(e,t,n){},157:function(e,t,n){},158:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(29),i=n.n(r),s=n.p+"static/media/hurricane.b719fdbb.svg",o=(n(122),n(2)),u=function(){return Object(o.jsxs)("div",{className:"weather-not-found",children:[Object(o.jsx)("div",{className:"weather-not-found__icon",children:Object(o.jsx)("img",{src:s,alt:""})}),Object(o.jsxs)("h2",{className:"weather-not-found__headline",children:["\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u043f\u043e \u0434\u0430\u043d\u043d\u043e\u043c\u0443 \u0433\u043e\u0440\u043e\u0434\u0443 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e :( ",Object(o.jsx)("br",{})," \u041f\u0440\u043e\u0432\u0435\u0440\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u043b\u0438 \u0432\u044b \u0432\u0432\u0435\u043b\u0438 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"]})]})},d=n(5),l=["\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435","\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0412\u0442\u043e\u0440\u043d\u0438\u043a","\u0421\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440\u0433","\u041f\u044f\u0442\u043d\u0438\u0446\u0430","\u0421\u0443\u0431\u0431\u043e\u0442\u0430"],h=function(e){return new Date(1e3*e)},f=function(e){var t=h(e).getDay();return l[t]},j=function(e){return h(e).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})},p=n(50),b=n(14),v=n.n(b),m=n(25),O=n(60),w=n(61),g=n(104),x=n.n(g),_=function(){function e(t){Object(O.a)(this,e),this.client=void 0,this.client=x.a.create(t)}return Object(w.a)(e,[{key:"get",value:function(){var e=Object(m.a)(v.a.mark((function e(t){var n,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.client.get(t);case 2:return n=e.sent,c=n.data,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"post",value:function(){var e=Object(m.a)(v.a.mark((function e(t,n){var c,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.client.post(t,n);case 2:return c=e.sent,a=c.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"put",value:function(){var e=Object(m.a)(v.a.mark((function e(t,n){var c,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.client.put(t,n);case 2:return c=e.sent,a=c.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(m.a)(v.a.mark((function e(t){var n,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.client.delete(t);case 2:return n=e.sent,c=n.data,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),y=function(e){return{type:"weather/SET_WEATHER",weather:e}},N=function(e){return{type:"weather/SET_CURRENT_WEATHER",weather:e}},E=function(e){return{type:"weather/SET_LOADING",loading:e}},k=new(function(){function e(t){Object(O.a)(this,e),this.client=void 0,this.APP_KEY="d0e984f036e9b8fa130d0cf45f00de62",this.client=t,this.APP_KEY||console.error("OpenWeather App ID not found!")}return Object(w.a)(e,[{key:"getWeatherByCoords",value:function(){var e=Object(m.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.client.get("weather?lat=".concat(t.latitude,"&lon=").concat(t.longitude,"&units=metric&appid=").concat(this.APP_KEY));case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),404===e.t0.response.status&&console.error("Weather not found"),e.abrupt("return",{status:404,message:"Weather not found"});case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getWeatherByCity",value:function(){var e=Object(m.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.client.get("weather?q=".concat(t,"&units=metric&appid=").concat(this.APP_KEY));case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),404===e.t0.response.status&&console.error("Weather not found"),e.abrupt("return",{status:404,message:"Weather not found"});case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}]),e}())(new _({baseURL:"http://api.openweathermap.org/data/2.5"})),W=function(e){return function(){var t=Object(m.a)(v.a.mark((function t(n){var c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.getWeatherByCoords(e);case 2:c=t.sent,n(N(c));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},T=function(e){return function(){var t=Object(m.a)(v.a.mark((function t(n){var c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(E(!0)),t.next=3,k.getWeatherByCity(e);case 3:c=t.sent,n(y(c)),n(E(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(e,t){return Object(p.b)((function(e){var t,n=e.weather,c=e.geolocation;return{weather:n.weather,currentWeather:n.currentWeather,coords:null===(t=c.position)||void 0===t?void 0:t.coords,loading:n.loading}}),{getWeatherByCity:T,getWeatherByCoords:W})((function(n){var a,r=n.weather,i=n.currentWeather,s=n.coords,u=(n.loading,n.getWeatherByCity),l=n.getWeatherByCoords,h=Object(d.f)(),f=null===(a=Object(d.g)().state)||void 0===a?void 0:a.city;return Object(c.useEffect)((function(){"city"===t?f&&u(f):"coords"===t&&s&&l(s)}),[s,f]),r||i?function(e){return!!e&&e.status}(r)?(h.push("/not-found",{}),null):Object(o.jsx)(e,{weather:"city"===t?r:i}):null}))},S=n.p+"static/media/01d.bb121109.svg",A=n.p+"static/media/01n.fd0f7a73.svg",L=n.p+"static/media/02d.b99b6d2c.svg",P=n.p+"static/media/02n.65e9d884.svg",R=n.p+"static/media/03d.7f28cf13.svg",B=n.p+"static/media/03n.7f28cf13.svg",D=n.p+"static/media/04d.3c1cca23.svg",G=n.p+"static/media/04n.3c1cca23.svg",I=n.p+"static/media/09d.849418b4.svg",H=n.p+"static/media/09n.849418b4.svg",K=n.p+"static/media/10d.cc911786.svg",M=n.p+"static/media/10n.c6aeb9ad.svg",U=n.p+"static/media/11d.f0b50aee.svg",Y=n.p+"static/media/11n.f0b50aee.svg",J=n.p+"static/media/13d.c8539ed4.svg",X=n.p+"static/media/13n.c8539ed4.svg",q=n.p+"static/media/50d.42cc5d57.svg",F=n.p+"static/media/50n.42cc5d57.svg",V=[{code:"01d",icon:S},{code:"01n",icon:A},{code:"02d",icon:L},{code:"02n",icon:P},{code:"03d",icon:R},{code:"03n",icon:B},{code:"04d",icon:D},{code:"04n",icon:G},{code:"09d",icon:I},{code:"09n",icon:H},{code:"10d",icon:K},{code:"10n",icon:M},{code:"11d",icon:U},{code:"11n",icon:Y},{code:"13d",icon:J},{code:"13n",icon:X},{code:"50d",icon:q},{code:"50n",icon:F}],z=function(e){var t;return null===(t=V.find((function(t){return t.code===e})))||void 0===t?void 0:t.icon},Q=function(e){var t=e.code;return Object(o.jsx)("img",{src:z(t),className:"weather__general-state__image",alt:"Cloudy"})},Z=n(62),$=n.n(Z),ee=function(e){var t=e.temp,n=e.className;return Object(o.jsxs)("h1",{className:$()("weather__general-temp",n),children:[Math.ceil(t)," \u2103"]})},te=function(e){var t=e.feelsLike,n=e.className;return Object(o.jsxs)("h3",{className:$()("weather__general-temp-feels",n),children:["\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a ",Math.ceil(t)," \u2103"]})},ne=(n(147),C((function(e){var t=e.weather,n=Object(d.g)().state;return t?Object(o.jsxs)("aside",{className:"weather__general",children:[Object(o.jsx)("div",{className:"weather__general-state",children:Object(o.jsx)(Q,{code:t.weather[0].icon})}),Object(o.jsx)(ee,{temp:t.main.temp}),Object(o.jsx)(te,{feelsLike:t.main.feels_like}),Object(o.jsxs)("p",{className:"weather__general-date",children:[f(t.dt),","," ",Object(o.jsx)("span",{className:"time",children:j(t.dt)})]}),Object(o.jsx)("div",{className:"weather__general-city",children:null===n||void 0===n?void 0:n.city})]}):null}),"city")),ce=(n(99),function(e){var t=e.name,n=e.value,c=e.content,a=e.icon;return Object(o.jsxs)("div",{className:"weather-statistic__item",children:[Object(o.jsx)("p",{className:"weather-statistic__item-name",children:t}),a&&Object(o.jsx)("img",{src:a,className:"weather-statistic__item-icon",alt:""}),n&&Object(o.jsx)("h1",{className:"weather-statistic__item-value",children:n}),c||null]})}),ae=n.p+"static/media/humidity.2fa22ab4.svg",re=n.p+"static/media/pressure.c67bce14.svg",ie=n.p+"static/media/sunrise.5db6d8fd.svg",se=n.p+"static/media/sunset.ce1cc744.svg",oe=n.p+"static/media/wind.32eca7ef.svg",ue=function(e){return"".concat(e," %")},de=function(e){return"".concat(e," \u043c\u043c")},le=function(e){return"".concat(e," \u043c/\u0441")},he=function(e){return j(e)},fe=C((function(e){var t=e.weather;if(!t)return null;var n=function(e){return e?{visibility:{name:"\u0412\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u044c",value:(t=e.visibility,"".concat((t/1e3).toFixed(1)," \u043a\u043c")),icon:q},humidity:{name:"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c",value:ue(e.main.humidity),icon:ae},pressure:{name:"\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435",value:de(e.main.pressure),icon:re},sunrise:{name:"\u0420\u0430\u0441\u0441\u0432\u0435\u0442",value:he(e.sys.sunrise),icon:ie},sunset:{name:"\u0417\u0430\u043a\u0430\u0442",value:he(e.sys.sunset),icon:se},wind:{name:"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u0435\u0442\u0440\u0430",value:le(e.wind.speed),icon:oe}}:null;var t}(t);return n?Object(o.jsx)("div",{className:"weather-statistic",children:Object(o.jsx)("div",{className:"weather-statistic__grid",children:Object.values(n).map((function(e){return Object(o.jsx)(ce,{icon:e.icon,name:e.name,value:e.value})}))})}):null}),"city"),je=n(63),pe=n(40),be=(n(148),function(){return Object(o.jsx)("div",{className:"back",children:Object(o.jsxs)(je.b,{to:"/",children:[Object(o.jsx)(pe.a,{name:"arrow left"}),"\u041d\u0430\u0437\u0430\u0434 \u043a \u0432\u044b\u0431\u043e\u0440\u0443"]})})}),ve=(n(149),function(){return Object(o.jsxs)("main",{className:"weather__details",children:[Object(o.jsx)(be,{}),Object(o.jsx)(fe,{})]})}),me=(n(150),function(){return Object(o.jsxs)("div",{className:"weather",children:[Object(o.jsx)(ne,{}),Object(o.jsx)(ve,{})]})}),Oe=n(107),we=n(174),ge=n(159),xe=(n(151),function(){var e=Object(c.useState)(""),t=Object(Oe.a)(e,2),n=t[0],a=t[1],r=Object(d.f)();return Object(o.jsxs)("div",{className:"weather-main__city",children:[Object(o.jsx)("h2",{className:"weather-main__city-headline",children:"\u0423\u0437\u043d\u0430\u0439\u0442\u0435 \u043f\u043e\u0433\u043e\u0434\u0443 \u0432 \u043b\u044e\u0431\u043e\u0439 \u0442\u043e\u0447\u043a\u0435 \u043c\u0438\u0440\u0430"}),Object(o.jsx)(we.a,{value:n,onChange:function(e,t){return function(e){a(e)}(t.value)},className:"weather-main__city-input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430"}),Object(o.jsx)(ge.a,{onClick:function(){n&&n.length&&r.push("/weather",{city:n})},children:"\u041d\u0430\u0439\u0442\u0438"})]})}),_e=function(e){return{type:"geo/SET_GEOLOCATION",position:e}},ye=Object(p.b)(null,{getGeolocation:function(){return function(e){if(!navigator.geolocation)return console.error("Geolocation is not supported by this browser!");navigator.geolocation.getCurrentPosition((function(t){e(_e(t))}))}}})((function(e){var t=e.getGeolocation;return Object(c.useEffect)((function(){t()}),[]),null})),Ne=(n(154),C((function(e){var t=e.weather;return t?Object(o.jsxs)("div",{className:"weather-current",children:[Object(o.jsx)("div",{className:"weather-current__icon",children:Object(o.jsx)(Q,{code:t.weather[0].icon})}),Object(o.jsxs)("div",{className:"weather-current__temp",children:[Object(o.jsx)(ee,{temp:t.main.temp,className:"weather-current__temp-value"}),Object(o.jsx)(te,{className:"weather-current__temp-feels",feelsLike:t.main.feels_like})]})]}):null}),"coords")),Ee=(n(155),function(){return Object(o.jsxs)("div",{className:"weather-main",children:[Object(o.jsx)(ye,{}),Object(o.jsx)(Ne,{}),Object(o.jsx)(xe,{})]})}),ke=function(){return Object(o.jsxs)(d.c,{children:[Object(o.jsx)(d.a,{exact:!0,path:"/",component:Ee}),Object(o.jsx)(d.a,{exact:!0,path:"/weather",component:me}),Object(o.jsx)(d.a,{exact:!0,path:"/not-found",component:u})]})},We=(n(156),n(58)),Te=n(106),Ce=n(28),Se={position:null},Ae={weather:null,currentWeather:null,loading:!1},Le=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||We.c,Pe=Object(We.d)(Object(We.b)({geolocation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"geo/SET_GEOLOCATION":return Object(Ce.a)(Object(Ce.a)({},e),{},{position:t.position});default:return e}},weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"weather/SET_WEATHER":return Object(Ce.a)(Object(Ce.a)({},e),{},{weather:t.weather});case"weather/SET_CURRENT_WEATHER":return Object(Ce.a)(Object(Ce.a)({},e),{},{currentWeather:t.weather});case"weather/SET_LOADING":return Object(Ce.a)(Object(Ce.a)({},e),{},{loading:t.loading});default:return e}}}),Le(Object(We.a)(Te.a)));n(157);i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(je.a,{children:Object(o.jsx)(p.a,{store:Pe,children:Object(o.jsx)(ke,{})})})}),document.getElementById("root"))},99:function(e,t,n){}},[[158,1,2]]]);
//# sourceMappingURL=main.c1fca63f.chunk.js.map