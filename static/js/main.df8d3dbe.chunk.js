(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/beer.99354d08.svg"},,,function(e,t,n){e.exports=n.p+"static/media/sad.5358081a.svg"},function(e,t,n){e.exports=n.p+"static/media/depardieu.70266fc4.jpeg"},function(e,t,n){e.exports=n.p+"static/media/virus.fe759d5f.png"},function(e,t,n){e.exports=n(20)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=(n(18),n(1)),s=n(2),u=n(4),l=n(3),p=n(5),g=(n(19),["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"]),m=function(){var e=new Date,t=e.getDay(),n=e.getHours();return"FRIDAY"===g[t]?n>=16&&n<18?"ALMOST":n>=18&&n<20?"YES":n>=20?"YOU_ARE_LATE":"NO":"NO"},d=n(6),f=n.n(d),E=n(9),O=n.n(E),h=n(10),b=n.n(h),j=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{src:b.a,alt:"easter off of gerard depardieu"}))}}]),t}(a.Component),v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={isEasterEgg:!1},n.toggleImage=function(){n.setState(function(e){return{isEasterEgg:!e.isEasterEgg}}),console.warn("toggle")},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=m();return r.a.createElement("div",{onClick:this.toggleImage},this.state.isEasterEgg?r.a.createElement(j,null):r.a.createElement("img",{src:"YES"===e?f.a:"NO"===e?O.a:f.a,className:"App-logo ".concat("YES"===e?"Wiggle":""),alt:"logo"}))}}]),t}(a.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=m();return r.a.createElement("p",null,"YES"===e?"Oui bien s\xfbr":"NO"===e?"NON":"Presque...")}}]),t}(a.Component),A=n(11),y=n.n(A),Y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){window.location.replace("https://discord.gg/hAGA8Fp")},1e3)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(v,null),r.a.createElement(w,null),r.a.createElement("img",{src:y.a,style:{position:"absolute",width:"70%",opacity:.95}})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.df8d3dbe.chunk.js.map