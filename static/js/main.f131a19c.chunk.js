(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/beer.99354d08.svg"},,,function(e,t,n){e.exports=n.p+"static/media/sad.5358081a.svg"},function(e,t,n){e.exports=n.p+"static/media/depardieu.70266fc4.jpeg"},function(e,t,n){e.exports=n.p+"static/media/virus.fe759d5f.png"},function(e,t,n){e.exports=n(20)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),i=(n(18),n(1)),s=n(2),l=n(4),u=n(3),d=n(5),m=(n(19),["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"]),p=function(){var e=new Date,t=e.getDay(),n=e.getHours();return"FRIDAY"===m[t]?n>=16&&n<18?"ALMOST":n>=18&&n<20?"YES":n>=20?"YOU_ARE_LATE":"NO":"NO"},g=n(6),f=n.n(g),b=n(9),E=n.n(b),O=n(10),h=n.n(O),w=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{src:h.a,alt:"easter off of gerard depardieu"}))}}]),t}(a.Component),j=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isEasterEgg:!1},n.toggleImage=function(){n.setState(function(e){return{isEasterEgg:!e.isEasterEgg}}),console.warn("toggle")},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=p();return r.a.createElement("div",{onClick:this.toggleImage},this.state.isEasterEgg?r.a.createElement(w,null):r.a.createElement("img",{src:"YES"===e?f.a:"NO"===e?E.a:f.a,className:"App-logo ".concat("YES"===e?"Wiggle":""),alt:"logo"}))}}]),t}(a.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=p();return r.a.createElement("p",null,"YES"===e?"Oui bien s\xfbr":"NO"===e?"NON":"Presque...")}}]),t}(a.Component),A=n(11),y=n.n(A),D=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){"YOU_ARE_LATE"===p()&&window.location.replace("https://www.google.com/maps/place/C'D%C3%A9Cal%C3%A9/@48.8844574,2.3174386,17z/data=!4m12!1m6!3m5!1s0x47e66fb23363c55b:0xe401d4ced0cb52b9!2zQydEw6lDYWzDqQ!8m2!3d48.8844574!4d2.3196273!3m4!1s0x47e66fb23363c55b:0xe401d4ced0cb52b9!8m2!3d48.8844574!4d2.3196273")}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(j,null),r.a.createElement(v,null),r.a.createElement("img",{src:y.a,style:{position:"absolute",width:200}})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.f131a19c.chunk.js.map