var h=!0,i=!1,k,l;k=function(a){this.ia(a)};k.aa={};k.e={};k.j={};k.L={};l=k.L;
k.prototype={ia:function(a){var b,a=a||{};this.T=l.Y(a.T);this.K=(b=l.Y(a.K))?b.innerHTML:a.K;a.data&&(this.data=a.data instanceof k.S?a.data:new k.S(a.data));this.c=a.c;this.la=a.la;this.da=this.compile();this.T.innerHTML="";this.g()},compile:function(){var a;this.K=l.na(this.K);a=l.Z(this.K);return new k.aa.m(l.W(a),{a:this,d:0})},g:function(){this.b&&this.b.o();this.b=this.da.g(this.T)},get:function(){this.data.apply(this.data,arguments)},q:function(a,b){var c,d,e;d=b.length;for(c=0;c<d;c+=1)e=
b[c],this.c[e]&&(a=this.c[e](a));return a}};var m=_,o=k.j,p=k.L;p.$=function(a,b,c){a.w=b;a.f=b.f;a.c=b.c;a.a=b.a;a.data=b.a.data;a.parent=c};o.m=function(a,b,c){var d=this;this.j=[];m.v(a.k,function(a,b){a.r&&(d.j[b]=a.r(d,c))});this.A=this.j.join("")};o.m.prototype={u:function(){this.A=this.j.join("");this.parent.u()},B:function(){m.v(this.j,function(a){a.B()})},toString:function(){return this.A}};o.t=function(a){this.A=a.text};o.t.prototype={toString:function(){return this.A}};
o.p=function(a,b,c){p.$(this,a,b);this.data.I(this,this.f,c,function(){var a,b=this;a=this.data.get(this.n);this.A=this.a.q(a,this.c);this.l=this.data.J(this.n,this.w.d,function(a){a=b.a.q(a,b.w.c);b.A=a;b.u()})})};o.p.prototype={u:function(){this.parent.u()},B:function(){this.l?this.data.R(this.l):this.data.M(this)},toString:function(){return this.A}};o.C=o.p;
o.s=function(a,b,c){p.$(this,a,b);this.i=c;this.e=[];this.data.I(this,this.f,c,function(){var a,b=this;a=this.data.get(this.n);a=this.a.q(a,this.c);this.update(a);this.l=this.data.J(this.n,this.w.d,function(a){a=b.a.q(a,b.w.c);b.update(a);b.u()})})};
o.s.prototype={u:function(){this.parent.u()},B:function(){},update:function(a){var b;console.log("updating ",this," with value ",a);m.isArray(a)&&0===a.length&&(b=h);if(this.w.N)a&&!b?this.b&&(this.e=[],this.b=i):this.b||(this.e[0]=this.w.list.r(this,this.i),this.b=h);else switch(typeof a){case "object":this.b&&(this.e=[],this.b=i);if(m.isArray(a)&&!b)for(b=0;b<a.length;b+=1)this.e[b]=this.w.list.r(this,this.i.concat(this.n+"."+b));else this.e[0]=this.F.list.g(this.parentNode,this.i.concat(this.n),
this.anchor);this.b=h;break;default:a&&!b?this.b||(this.e[0]=this.w.list.r(this,this.i),this.b=h):this.b&&(this.e=[],this.b=i)}},toString:function(){return this.e.join("")}};var q=k.aa,r=k.e,s=k.j,t=k.L;q.m=function(a,b){this.D=a;this.parent=b;this.d=b.d+1;this.a=b.a;this.i=b.i;this.compile()};
q.m.prototype={g:function(a,b,c){return new r.m(this,a,b,c)},r:function(a,b){return new s.m(this,a,b)},add:function(a){this.k[this.k.length]=a},compile:function(){var a;this.k=[];for(a=0;a<this.D.length;)a=this.ea(a);delete this.D},ea:function(a){var b,c,d,e,g,f;b=this.D[a];switch(b.type){case "text":return this.add(new q.t(b.text,this)),a+1;case "element":return this.add(new q.H(b.ka,this)),a+1;case "mustache":switch(b.z.type){case "section":c=a+=1;f=b.z.f;for(e=1;a<this.D.length&&!d;)g=this.D[a],
"mustache"===g.type&&("section"===g.z.type&&g.z.f===f)&&(g.z.ca?(e-=1)||(d=a):e+=1),a+=1;if(!d)throw Error('Illegal section "'+f+'"');this.add(new q.s(b.z,this.D.slice(c,d),this));return a;case "triple":return this.add(new q.C(b.z,this)),a+1;case "interpolator":return this.add(new q.p(b.z,this)),a+1;default:return console.warn("errr..."),a+1}default:console.warn("errr...")}}};q.s=function(a,b,c){this.f=a.f;this.c=a.c;this.parent=c;this.d=c.d+1;this.a=c.a;this.N=a.N;this.list=new q.m(b,this)};
q.s.prototype={g:function(a,b,c){return new r.s(this,a,b,c)},r:function(a,b){return new s.s(this,a,b)}};q.t=function(a){this.text=a};q.t.prototype={g:function(a,b,c){return new r.t(this,a,b,c)},r:function(a,b){return new s.t(this,a,b)}};q.p=function(a,b){this.f=a.f;this.c=a.c;this.parent=b;this.a=b.a;this.d=b.d+1};q.p.prototype={g:function(a,b,c){return new r.p(this,a,b,c)},r:function(a,b){return new s.p(this,a,b)}};q.C=function(a,b){this.f=a.f;this.c=a.c;this.a=b.a;this.d=b.d+1};
q.C.prototype={g:function(a,b,c){return new r.C(this,a,b,c)},r:function(a,b){return new s.p(this,a,b)}};q.H=function(a,b){this.type=a.tagName;this.parent=b;this.a=b.a;this.d=b.d+1;this.ha(a);a.childNodes.length&&(this.children=new q.m(t.W(a.childNodes),this))};q.H.prototype={g:function(a,b,c){return new r.H(this,a,b,c)},ha:function(a){var b,c,d;this.attributes=[];c=a.attributes.length;for(b=0;b<c;b+=1)d=a.attributes[b],this.attributes[b]=new q.G(d.name,d.value,this.a)}};
q.G=function(a,b,c){var d=t.U(b);this.name=a;t.X(b)?(this.ja=h,this.list=new q.m(d,{a:c,d:0})):this.value=b};q.G.prototype={g:function(a,b){return new r.G(this,a,b)}};var u=document,v=k.L;
_.extend(v,{insertBefore:function(a,b){if(!a)throw Error("Can't insert before a non-existent node");return a.parentNode.insertBefore(b,a)},sa:function(a,b){if(!a)throw Error("Can't insert before a non-existent node");return a.parentNode.insertBefore(b,a.nextSibling)},remove:function(a){a.parentNode&&a.parentNode.removeChild(a)},trim:function(a){return a.replace(/^\s+/,"").replace(/\s+$/,"")},Z:function(a){var b,c,d=[];b=u.createElement("div");b.innerHTML=a;c=b.childNodes.length;for(a=0;a<c;a+=1)d[a]=
b.childNodes[a];return d},Y:function(a){var b;if(a)if("string"===typeof a){if(b=u.getElementById(a),!b&&u.querySelector)try{b=u.querySelector(a)}catch(c){}}else a[0]&&a[0].nodeType&&(b=a[0].innerHTML);return b},na:function(a){a=a.replace(/(^|\n|\r\n)\s*\{\{!\s*[\s\S]+?\s*\}\}\s*($|\n|\r\n)/g,function(a,c){return c});return a=a.replace(/\{\{!\s*[\s\S]+?\s*\}\}/g,"")},V:function(){var a=u.createElement("a");a.setAttribute("class","anglebars-anchor");return a},ua:function(a){var b,c=a.length,d=[];for(b=
0;b<c;b+=1)d[b]=a[b];return d},qa:function(a){var b,c=a.length,d=[];for(b=0;b<c;b+=1)d[b]={name:a[b].name,value:a[b].value};return d},X:function(a,b){var c,d;if(c=v.fa(a,/(\{)?\{\{(#|\^|\/)?(\>)?(&)?\s*([\s\S]+?)\s*\}\}(\})?/g,b)){c.ga=c[5];d=c.ga.split(" | ");c.f=d.shift();c.c=d;if(c[2])c.type="section",c.N="^"===c[2]?h:i,c.ca="/"===c[2]?h:i;else if(c[3])c.type="partial";else if(c[1]){if(!c[6])return i;c.type="triple"}else c.type="interpolator";c.ta=h;return c}return i},fa:function(a,b,c){if(b.global)b.lastIndex=
c||0;else throw Error("You must pass findMatch() a regex with the global flag set");if(a=b.exec(a))return a.end=b.lastIndex,a.start=a.end-a[0].length,a},W:function(a){var b,c,d,e=[];c=a.length;for(b=0;b<c;b+=1)d=a[b],3!==d.nodeType?e[e.length]={type:"element",ka:d}:e=e.concat(v.U(d.textContent));return e},U:function(a){var b,c;c=v.X(a);if(!c)return{type:"text",text:a};b=[];0<c.start&&(b[b.length]={type:"text",text:a.substr(0,c.start)});b[b.length]={type:"mustache",z:c};c.end<a.length&&(b=b.concat(v.U(a.substring(c.end))));
return b}});k.S=function(a){var b;this.data={};for(b in a)a.hasOwnProperty(b)&&(this.data[b]=a[b]);this.P=[];this.Q={}};
k.S.prototype={get:function(a){var b;if(!a)return"";a=a.split(".");for(b=this.data;a.length;)if(b=b[a.shift()],void 0===b)return"";return b},I:function(a,b,c,d){for(var e,g,f,c=c?c.concat():[];c;){e=(f=c.length?c[c.length-1]:null)?f.split(".").concat(b.split(".")):b.split(".");g=e.concat();for(f=this.data;e.length&&!(f=f[e.shift()],void 0===f););if(void 0!==f){b=g.join(".");a.n=b;d.call(a,b);break}c.length?c.pop():c=i}void 0===f&&this.ma(a,d)},ma:function(a,b){this.P[this.P.length]={item:a,ba:b}},
M:function(a){this.P=this.P.filter(function(b){return b.item!==a})},J:function(a,b,c){var d=this,e=a,g=[],f;if(a){for(f=function(a){var f,z;f=d.Q[a]=d.Q[a]||[];f=f[b]=f[b]||[];z={ba:c,va:e};f[f.length]=z;g[g.length]={n:a,d:b,oa:z}};-1!==a.lastIndexOf(".");)f(a),a=a.substr(0,a.lastIndexOf("."));f(a);return g}},pa:function(a){var b,c,d;if(b=this.Q[a.n])if(c=b[a.d])d=c.indexOf(a.oa),-1!==d&&(c.splice(d,1),0===c.length&&delete b[a.d],0===b.length&&delete this.Q[a.n])},R:function(a){for(;a.length;)this.pa(a.shift())}};
var w=_,x=k.e,y=k.L;x.m=function(a,b,c,d){var e=this;this.k=[];w.v(a.k,function(a,f){e.k[f]=a.g(b,c,d)})};x.m.prototype={o:function(){w.v(this.k,function(a){a.o()});delete this.k}};x.t=function(a,b,c,d){this.h=document.createTextNode(a.text);b.insertBefore(this.h,d)};x.t.prototype={o:function(){y.remove(this.h)}};
x.s=function(a,b,c,d){var e=this,g,f,n=a.a,j=n.data;this.F=a;this.i=c||[];this.data=j;this.e=[];this.parentNode=b;this.anchor=y.V();b.insertBefore(this.anchor,d);j.I(this,a.f,c,function(b){g=j.get(b);f=n.q(g,a.c);this.update(f);this.l=j.J(b,a.d,function(b){b=n.q(b,a.c);e.update(b)})})};
x.s.prototype={o:function(){for(;this.e.length;)this.e.shift().o();this.l?this.data.R(this.l):this.data.M(this)},update:function(a){var b;w.isArray(a)&&0===a.length&&(b=h);if(this.F.N)a&&!b?this.b&&(this.o(),this.b=i):this.b||(this.e[0]=this.F.list.g(this.parentNode,this.i,this.anchor),this.b=h);else switch(typeof a){case "object":this.b&&(this.o(),this.b=i);if(w.isArray(a)&&!b)for(b=0;b<a.length;b+=1)this.e[b]=this.F.list.g(this.parentNode,this.i.concat(this.n+"."+b),this.anchor);else this.e[0]=
this.F.list.g(this.parentNode,this.i.concat(this.n),this.anchor);this.b=h;break;default:a&&!b?this.b||(this.e[0]=this.F.list.g(this.parentNode,this.i,this.anchor),this.b=h):this.b&&(this.o(),this.b=i)}}};x.p=function(a,b,c,d){var e=this,g,f,n=a.a,j=n.data,c=c?c.concat():[];this.h=document.createTextNode("");this.data=j;this.f=a.f;this.i=c;j.I(this,a.f,c,function(b){g=j.get(b);f=n.q(g,a.c);this.update(f);this.l=j.J(b,a.d,function(b){b=n.q(b,a.c);e.update(b)})});b.insertBefore(this.h,d)};
x.p.prototype={o:function(){this.l?this.data.R(this.l):this.data.M(this);y.remove(this.h)},update:function(a){this.h.textContent=a}};x.C=function(a,b,c,d){var e=this,g,f,n=a.a,j=n.data;this.O=[];this.data=j;this.anchor=y.V();b.insertBefore(this.anchor,d);j.I(this,a.f,c,function(b){this.l=j.J(b,a.d,function(b){b=n.q(b,a.c);e.update(b)});g=j.get(b);f=n.q(g,a.c);this.update(f)})};
x.C.prototype={o:function(){w.v(this.O,y.remove);this.l?this.data.R(this.l):this.data.M(this);y.remove(this.anchor)},update:function(a){var b=this;w.isEqual(this.value,a)||(w.v(this.O,y.remove),this.O=y.Z(a),w.v(this.O,function(a){y.insertBefore(b.anchor,a)}))}};
x.H=function(a,b,c,d){var e,g,f;this.data=a.a.data;this.h=document.createElement(a.type);this.attributes=[];g=a.attributes.length;for(e=0;e<g;e+=1)f=a.attributes[e],this.attributes[e]=f.g(this.h,c);if(a.children){this.children=[];g=a.children.k.length;for(e=0;e<g;e+=1)f=a.children.k[e],this.children[e]=f.g(this.h,c)}b.insertBefore(this.h,d)};x.H.prototype={o:function(){w.v(this.attributes,function(a){a.B()});y.remove(this.h)}};
x.G=function(a,b,c){var d,e;if(a.ja){this.ra=a;this.h=b;this.name=a.name;this.a=a.a;this.data=a.data;this.j=[];d=a.list.k.length;for(b=0;b<d;b+=1)e=a.list.k[b],this.j[b]=e.r(this,c);this.update()}else b.setAttribute(a.name,a.value)};x.G.prototype={B:function(){w.v(this.j,function(a){a.B&&a.B()})},u:function(){this.update()},update:function(){this.h.setAttribute(this.name,this.toString())},toString:function(){var a="",b,c,d;c=this.j.length;for(b=0;b<c;b+=1)d=this.j[b],a+=d.toString();return a}};