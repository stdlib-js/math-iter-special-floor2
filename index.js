// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterFloor2=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),y="get"in n,v="set"in n,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,n.get),v&&i&&i.call(r,t,n.set),r};var c=t;function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function v(r){return"boolean"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(r,t){return null!=r&&d.call(r,t)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=s()?function(r){var t,n,e;if(null==r)return b.call(r);n=r[w],t=m(r,w);try{r[w]=void 0}catch(t){return b.call(r)}return e=b.call(r),t?r[w]=n:delete r[w],e}:function(r){return b.call(r)},g=Boolean.prototype.toString;var A=s();function h(r){return"object"==typeof r&&(r instanceof Boolean||(A?function(r){try{return g.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function _(r){return v(r)||h(r)}function O(){return new Function("return this;")()}l(_,"isPrimitive",v),l(_,"isObject",h);var U="object"==typeof self?self:null,S="object"==typeof window?window:null,E="object"==typeof global?global:null;var N=function(r){if(arguments.length){if(!v(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return O()}if(U)return U;if(S)return S;if(E)return E;throw new Error("unexpected error. Unable to resolve global object.")}(),F=N.document&&N.document.childNodes,T=Int8Array;function I(){return/^\s*function\s*([^(]*)/i}var P=/^\s*function\s*([^(]*)/i;l(I,"REGEXP",P);var x=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function V(r){return null!==r&&"object"==typeof r}function G(r){var t,n,e,o;if(("Object"===(n=j(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=P.exec(e.toString()))return t[1]}return V(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(V,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!x(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(V));var H="function"==typeof y||"object"==typeof T||"function"==typeof F?function(r){return G(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?G(r).toLowerCase():t};function B(r){return"function"===H(r)}function L(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&B(r.next)}function M(r){return"number"==typeof r}var W=Number,k=W.prototype.toString;var C=s();function Y(r){return"object"==typeof r&&(r instanceof W||(C?function(r){try{return k.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function q(r){return M(r)||Y(r)}l(q,"isPrimitive",M),l(q,"isObject",Y);var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var X,z=Object.getPrototypeOf;X=B(Object.getPrototypeOf)?z:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===j(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var D=X;var J=Object.prototype;function K(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!x(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),D(r))}(r),!t||!m(r,"constructor")&&m(t,"constructor")&&B(t.constructor)&&"[object Function]"===j(t.constructor)&&m(t,"isPrototypeOf")&&B(t.isPrototypeOf)&&(t===J||function(r){var t;for(t in r)if(!m(r,t))return!1;return!0}(r)))}function Q(r,t){return K(t)?(m(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")}function Z(r,t,n){var e,o,u,i;if(!L(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!B(t))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+t+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Q(e,n)))throw u;return l(o={},"next",f),l(o,"return",a),R&&B(r[R])&&l(o,R,c),o;function f(){var n;return i?{done:!0}:(n=r.next()).done?(i=!0,n):{value:M(n.value)?t(n.value):e.invalid,done:!1}}function a(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function c(){return Z(r[R](),t,e)}}function $(r){return r!=r}var rr=Number.POSITIVE_INFINITY,tr=W.NEGATIVE_INFINITY;function nr(r){return r===rr||r===tr}var er=Math.floor;function or(r){return er(r)===r}function ur(r){return or(r/2)}function ir(r){return ur(r>0?r-1:r+1)}var fr=Math.sqrt;function ar(r){return Math.abs(r)}var cr="function"==typeof Uint32Array;var lr="function"==typeof Uint32Array?Uint32Array:null;var yr,vr="function"==typeof Uint32Array?Uint32Array:void 0;yr=function(){var r,t,n;if("function"!=typeof lr)return!1;try{t=new lr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(cr&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var pr=yr,sr="function"==typeof Float64Array;var br="function"==typeof Float64Array?Float64Array:null;var dr,mr="function"==typeof Float64Array?Float64Array:void 0;dr=function(){var r,t,n;if("function"!=typeof br)return!1;try{t=new br([1,3.14,-3.14,NaN]),n=t,r=(sr&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var wr=dr,jr="function"==typeof Uint8Array;var gr="function"==typeof Uint8Array?Uint8Array:null;var Ar,hr="function"==typeof Uint8Array?Uint8Array:void 0;Ar=function(){var r,t,n;if("function"!=typeof gr)return!1;try{t=new gr(t=[1,3.14,-3.14,256,257]),n=t,r=(jr&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var _r=Ar,Or="function"==typeof Uint16Array;var Ur="function"==typeof Uint16Array?Uint16Array:null;var Sr,Er="function"==typeof Uint16Array?Uint16Array:void 0;Sr=function(){var r,t,n;if("function"!=typeof Ur)return!1;try{t=new Ur(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Or&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Er:function(){throw new Error("not implemented")};var Nr,Fr={uint16:Sr,uint8:_r};(Nr=new Fr.uint16(1))[0]=4660;var Tr,Ir,Pr=52===new Fr.uint8(Nr.buffer)[0];!0===Pr?(Tr=1,Ir=0):(Tr=0,Ir=1);var xr={HIGH:Tr,LOW:Ir},Vr=new wr(1),Gr=new pr(Vr.buffer),Hr=xr.HIGH,Br=xr.LOW;function Lr(r,t,n,e){return Vr[0]=r,t[e]=Gr[Hr],t[e+n]=Gr[Br],t}function Mr(r){return Lr(r,[0,0],1,0)}l(Mr,"assign",Lr);var Wr=!0===Pr?0:1,kr=new wr(1),Cr=new pr(kr.buffer);function Yr(r,t){return kr[0]=r,Cr[Wr]=t>>>0,kr[0]}function qr(r){return 0|r}var Rr,Xr,zr=2147483647,Dr=!0===Pr?1:0,Jr=new wr(1),Kr=new pr(Jr.buffer);function Qr(r){return Jr[0]=r,Kr[Dr]}!0===Pr?(Rr=1,Xr=0):(Rr=0,Xr=1);var Zr={HIGH:Rr,LOW:Xr},$r=new wr(1),rt=new pr($r.buffer),tt=Zr.HIGH,nt=Zr.LOW;function et(r,t){return rt[tt]=r,rt[nt]=t,$r[0]}var ot=[0,0];function ut(r,t){var n,e;return Mr.assign(r,ot,1,0),n=ot[0],n&=zr,e=Qr(t),et(n|=e&=2147483648,ot[1])}var it=!0===Pr?1:0,ft=new wr(1),at=new pr(ft.buffer);function ct(r,t){return ft[0]=r,at[it]=t>>>0,ft[0]}var lt=1023;var yt=1048576,vt=[1,1.5],pt=[0,.5849624872207642],st=[0,1.350039202129749e-8];function bt(r,t,n,e){return $(r)||nr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&ar(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}l((function(r){return bt(r,[0,0],1,0)}),"assign",bt);var dt=[0,0],mt=[0,0];function wt(r,t){var n,e;return 0===t||0===r||$(r)||nr(r)?r:(bt(r,dt,1,0),t+=dt[1],t+=function(r){var t=Qr(r);return(t=(2146435072&t)>>>20)-lt|0}(r=dt[0]),t<-1074?ut(0,r):t>1023?r<0?tr:rr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Mr.assign(r,mt,1,0),n=mt[0],n&=2148532223,e*et(n|=t+lt<<20,mt[1])))}var jt=1048575;var gt=1048576;var At=1083179008,ht=1e300,_t=1e-300,Ot=[0,0],Ut=[0,0];function St(r,t){var n,e,o,u,i,f,a,c,l,y,v,p,s,b;if($(r)||$(t))return NaN;if(Mr.assign(t,Ot,1,0),i=Ot[0],0===Ot[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return fr(r);if(-.5===t)return 1/fr(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(nr(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:ar(r)<1==(t===rr)?0:rr}(r,t)}if(Mr.assign(r,Ot,1,0),u=Ot[0],0===Ot[1]){if(0===u)return function(r,t){return t===tr?rr:t===rr?0:t>0?ir(t)?r:0:ir(t)?ut(rr,r):rr}(r,t);if(1===r)return 1;if(-1===r&&ir(t))return-1;if(nr(r))return r===tr?St(-0,-t):t<0?0:rr}if(r<0&&!1===or(t))return(r-r)/(r-r);if(o=ar(r),n=u&zr|0,e=i&zr|0,a=i>>>31|0,f=(f=u>>>31|0)&&ir(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(Qr(r)&zr)<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===a?f*ht*ht:f*_t*_t;if(n>1072693248)return 0===a?f*ht*ht:f*_t*_t;v=function(r,t){var n,e,o,u,i,f;return n=(i=1.9259629911266175e-8*(o=t-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Yr(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=n,r}(Ut,o)}else v=function(r,t,n){var e,o,u,i,f,a,c,l,y,v,p,s,b,d,m,w,j,g,A,h,_;return g=0,n<yt&&(g-=53,n=Qr(t*=9007199254740992)),g+=(n>>20)-lt|0,n=1072693248|(A=1048575&n|0),A<=235662?h=0:A<767610?h=1:(h=0,g+=1,n-=yt),i=Yr(o=(w=(t=ct(t,n))-(c=vt[h]))*(j=1/(t+c)),0),e=524288+(n>>1|536870912),a=ct(0,e+=h<<18),m=(u=o*o)*u*(0===(_=u)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=Yr(a=3+(u=i*i)+(m+=(f=j*(w-i*a-i*(t-(a-c))))*(i+o)),0),b=(p=-7.028461650952758e-9*(y=Yr(y=(w=i*a)+(j=f*a+(m-(a-3-u))*o),0))+.9617966939259756*(j-(y-w))+st[h])-((s=Yr(s=(v=.9617967009544373*y)+p+(l=pt[h])+(d=g),0))-d-l-v),r[0]=s,r[1]=b,r}(Ut,o,n);if(p=(y=(t-(c=Yr(t,0)))*v[0]+t*v[1])+(l=c*v[0]),Mr.assign(p,Ot,1,0),s=qr(Ot[0]),b=qr(Ot[1]),s>=At){if(0!=(s-At|b))return f*ht*ht;if(y+8008566259537294e-32>p-l)return f*ht*ht}else if((s&zr)>=1083231232){if(0!=(s-3230714880|b))return f*_t*_t;if(y<=p-l)return f*_t*_t}return p=function(r,t,n){var e,o,u,i,f,a,c,l,y,v;return y=((l=r&zr|0)>>20)-lt|0,c=0,l>1071644672&&(o=ct(0,((c=r+(gt>>y+1)>>>0)&~(jt>>(y=((c&zr)>>20)-lt|0)))>>>0),c=(c&jt|gt)>>20-y>>>0,r<0&&(c=-c),t-=o),r=qr(r=Qr(a=1-((a=(u=.6931471824645996*(o=Yr(o=n+t,0)))+(i=.6931471805599453*(n-(o-t))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(v=o)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?wt(a,c):ct(a,r)}(s,l,y),f*p}var Et=Math.ceil;var Nt=1048575;var Ft=1.4426950407214463,Tt=[0,0];function It(r){var t,n,e,o,u;if($(r)||r<0)return NaN;if(Mr.assign(r,Tt,1,0),u=0,(n=Tt[0])<1048576){if(0==(n&zr|Tt[1]))return tr;u-=54,n=Qr(r*=0x40000000000000)}return n>=2146435072?r+r:(u+=(n>>20)-lt|0,u+=(o=(n&=jt)+614244&1048576|0)>>20|0,e=function(r){var t,n,e,o,u,i,f,a,c,l,y;return o=Qr(r),u=r-1,(Nt&2+o)<3?0===u?0:u*u*(.3333333333333333*u-.5):(l=(o&=Nt)-398458|0,y=440401-o|0,n=(c=(f=(i=u/(2+u))*i)*f)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),e=f*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),a=e+n,(l|=y)>0?i*((t=.5*u*u)+a)-t:i*(a-u))}(r=ct(r,n|1072693248^o)),1.6751713164886512e-10*((r-=1)+e)+(r-(t=Yr(r,0))+e)*Ft+t*Ft+u)}function Pt(r){var t,n;return $(r)||nr(r)||0===r?r:(r<0?(r=-r,t=-1):t=1,-1074===(n=It(r))?r:(n=1===t?er(n):Et(n))>1023?tr:t*St(2,n))}return function(r){return Z(r,Pt)}}));
//# sourceMappingURL=index.js.map
