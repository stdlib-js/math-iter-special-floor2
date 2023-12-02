// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterFloor2=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function i(r,t,n){var i=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var t,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((t=r.precision)>0&&(t-=1),e=i.toExponential(t)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,w,"$1e"),e=p.call(e,h,"e"),e=p.call(e,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,y,"e+0$1"),e=p.call(e,v,"e-0$1"),r.alternate&&(e=p.call(e,g,"$1."),e=p.call(e,d,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):l.call(e)}function j(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function A(r,t,n){var e=t-r.length;return e<0?r:r=n?r+j(e):j(e)+r}var _=String.fromCharCode,E=isNaN,O=Array.isArray;function S(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function x(r){var t,n,e,o,a,f,l,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(e=r[s]))f+=e;else{if(t=void 0!==e.precision,!(e=S(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(o=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,E(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!E(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(a)?String(e.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=A(e.arg,e.width,e.padRight)),f+=e.arg||"",l+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function T(r){var t,n,e,i;for(n=[],i=0,e=U.exec(r);e;)(t=r.slice(i,U.lastIndex-e[0].length)).length&&n.push(t),n.push(F(e)),i=U.lastIndex,e=U.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function I(r){return"string"==typeof r}function k(r){var t,n,e;if(!I(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=T(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return x.apply(null,n)}var N,V=Object.prototype,P=V.toString,G=V.__defineGetter__,L=V.__defineSetter__,$=V.__lookupGetter__,C=V.__lookupSetter__;N=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===P.call(n))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&($.call(r,t)||C.call(r,t)?(e=r.__proto__,r.__proto__=V,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&G&&G.call(r,t,n.get),a&&L&&L.call(r,t,n.set),r};var H=N;function W(r,t,n){H(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var B=/./;function M(r){return"boolean"==typeof r}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return R&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function q(r,t){return null!=r&&Y.call(r,t)}var z="function"==typeof Symbol?Symbol:void 0,D="function"==typeof z?z.toStringTag:"";var J=Z()?function(r){var t,n,e;if(null==r)return X.call(r);n=r[D],t=q(r,D);try{r[D]=void 0}catch(t){return X.call(r)}return e=X.call(r),t?r[D]=n:delete r[D],e}:function(r){return X.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=Z();function tr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function nr(r){return M(r)||tr(r)}function er(){return new Function("return this;")()}W(nr,"isPrimitive",M),W(nr,"isObject",tr);var ir="object"==typeof self?self:null,or="object"==typeof window?window:null,ar="object"==typeof global?global:null,ur="object"==typeof globalThis?globalThis:null;var cr=function(r){if(arguments.length){if(!M(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return er()}if(ur)return ur;if(ir)return ir;if(or)return or;if(ar)return ar;throw new Error("unexpected error. Unable to resolve global object.")}(),fr=cr.document&&cr.document.childNodes,lr=Int8Array;function sr(){return/^\s*function\s*([^(]*)/i}var pr=/^\s*function\s*([^(]*)/i;W(sr,"REGEXP",pr);var yr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function vr(r){return null!==r&&"object"==typeof r}function gr(r){var t,n,e,i;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=pr.exec(e.toString()))return t[1]}return vr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}W(vr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!yr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(vr));var dr="function"==typeof B||"object"==typeof lr||"function"==typeof fr?function(r){return gr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?gr(r).toLowerCase():t};function br(r){return"function"===dr(r)}function hr(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&br(r.next)}function wr(r){return"number"==typeof r}var mr=Number,jr=mr.prototype.toString;var Ar=Z();function _r(r){return"object"==typeof r&&(r instanceof mr||(Ar?function(r){try{return jr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function Er(r){return wr(r)||_r(r)}W(Er,"isPrimitive",wr),W(Er,"isObject",_r);var Or="function"==typeof z&&"symbol"==typeof z("foo")&&q(z,"iterator")&&"symbol"==typeof z.iterator?Symbol.iterator:null;var Sr,xr=Object,Ur=Object.getPrototypeOf;Sr=br(Object.getPrototypeOf)?Ur:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Fr=Sr;var Tr=Object.prototype;function Ir(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!yr(r)}(r)&&(t=function(r){return null==r?null:(r=xr(r),Fr(r))}(r),!t||!q(r,"constructor")&&q(t,"constructor")&&br(t.constructor)&&"[object Function]"===J(t.constructor)&&q(t,"isPrototypeOf")&&br(t.isPrototypeOf)&&(t===Tr||function(r){var t;for(t in r)if(!q(r,t))return!1;return!0}(r)))}function kr(r,t){return Ir(t)?(q(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(k("invalid argument. Options argument must be an object. Value: `%s`.",t))}function Nr(r,t,n){var e,i,o,a;if(!hr(r))throw new TypeError(k("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!br(t))throw new TypeError(k("invalid argument. Second argument must be a function. Value: `%s`.",t));if(e={invalid:NaN},arguments.length>2&&(o=kr(e,n)))throw o;return W(i={},"next",u),W(i,"return",c),Or&&br(r[Or])&&W(i,Or,f),i;function u(){var n;return a?{done:!0}:(n=r.next()).done?(a=!0,n):{value:wr(n.value)?t(n.value):e.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return Nr(r[Or](),t,e)}}function Vr(r){return r!=r}var Pr=Number.POSITIVE_INFINITY,Gr=mr.NEGATIVE_INFINITY;function Lr(r){return r===Pr||r===Gr}var $r=Math.floor;function Cr(r){return $r(r)===r}function Hr(r){return Cr(r/2)}function Wr(r){return Hr(r>0?r-1:r+1)}var Br=Math.sqrt;function Mr(r){return Math.abs(r)}var Rr="function"==typeof Uint32Array;var Zr="function"==typeof Uint32Array?Uint32Array:null;var Xr,Yr="function"==typeof Uint32Array?Uint32Array:void 0;Xr=function(){var r,t,n;if("function"!=typeof Zr)return!1;try{t=new Zr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(Rr&&n instanceof Uint32Array||"[object Uint32Array]"===J(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Yr:function(){throw new Error("not implemented")};var qr=Xr,zr="function"==typeof Float64Array;var Dr="function"==typeof Float64Array?Float64Array:null;var Jr,Kr="function"==typeof Float64Array?Float64Array:void 0;Jr=function(){var r,t,n;if("function"!=typeof Dr)return!1;try{t=new Dr([1,3.14,-3.14,NaN]),n=t,r=(zr&&n instanceof Float64Array||"[object Float64Array]"===J(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Kr:function(){throw new Error("not implemented")};var Qr=Jr,rt="function"==typeof Uint8Array;var tt="function"==typeof Uint8Array?Uint8Array:null;var nt,et="function"==typeof Uint8Array?Uint8Array:void 0;nt=function(){var r,t,n;if("function"!=typeof tt)return!1;try{t=new tt(t=[1,3.14,-3.14,256,257]),n=t,r=(rt&&n instanceof Uint8Array||"[object Uint8Array]"===J(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?et:function(){throw new Error("not implemented")};var it=nt,ot="function"==typeof Uint16Array;var at="function"==typeof Uint16Array?Uint16Array:null;var ut,ct="function"==typeof Uint16Array?Uint16Array:void 0;ut=function(){var r,t,n;if("function"!=typeof at)return!1;try{t=new at(t=[1,3.14,-3.14,65536,65537]),n=t,r=(ot&&n instanceof Uint16Array||"[object Uint16Array]"===J(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ct:function(){throw new Error("not implemented")};var ft,lt={uint16:ut,uint8:it};(ft=new lt.uint16(1))[0]=4660;var st,pt,yt=52===new lt.uint8(ft.buffer)[0];!0===yt?(st=1,pt=0):(st=0,pt=1);var vt={HIGH:st,LOW:pt},gt=new Qr(1),dt=new qr(gt.buffer),bt=vt.HIGH,ht=vt.LOW;function wt(r,t,n,e){return gt[0]=r,t[e]=dt[bt],t[e+n]=dt[ht],t}function mt(r){return wt(r,[0,0],1,0)}W(mt,"assign",wt);var jt=!0===yt?0:1,At=new Qr(1),_t=new qr(At.buffer);function Et(r,t){return At[0]=r,_t[jt]=t>>>0,At[0]}function Ot(r){return 0|r}var St,xt,Ut=2147483647,Ft=!0===yt?1:0,Tt=new Qr(1),It=new qr(Tt.buffer);function kt(r){return Tt[0]=r,It[Ft]}!0===yt?(St=1,xt=0):(St=0,xt=1);var Nt={HIGH:St,LOW:xt},Vt=new Qr(1),Pt=new qr(Vt.buffer),Gt=Nt.HIGH,Lt=Nt.LOW;function $t(r,t){return Pt[Gt]=r,Pt[Lt]=t,Vt[0]}var Ct=[0,0];function Ht(r,t){var n,e;return mt.assign(r,Ct,1,0),n=Ct[0],n&=Ut,e=kt(t),$t(n|=e&=2147483648,Ct[1])}var Wt=!0===yt?1:0,Bt=new Qr(1),Mt=new qr(Bt.buffer);function Rt(r,t){return Bt[0]=r,Mt[Wt]=t>>>0,Bt[0]}var Zt=1023;var Xt=1048576,Yt=[1,1.5],qt=[0,.5849624872207642],zt=[0,1.350039202129749e-8];function Dt(r,t,n,e){return Vr(r)||Lr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&Mr(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}W((function(r){return Dt(r,[0,0],1,0)}),"assign",Dt);var Jt=[0,0],Kt=[0,0];function Qt(r,t){var n,e;return 0===t||0===r||Vr(r)||Lr(r)?r:(Dt(r,Jt,1,0),t+=Jt[1],t+=function(r){var t=kt(r);return(t=(2146435072&t)>>>20)-Zt|0}(r=Jt[0]),t<-1074?Ht(0,r):t>1023?r<0?Gr:Pr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,mt.assign(r,Kt,1,0),n=Kt[0],n&=2148532223,e*$t(n|=t+Zt<<20,Kt[1])))}var rn=1048575;var tn=1048576;var nn=1083179008,en=1e300,on=1e-300,an=[0,0],un=[0,0];function cn(r,t){var n,e,i,o,a,u,c,f,l,s,p,y,v,g;if(Vr(r)||Vr(t))return NaN;if(mt.assign(t,an,1,0),a=an[0],0===an[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return Br(r);if(-.5===t)return 1/Br(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(Lr(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:Mr(r)<1==(t===Pr)?0:Pr}(r,t)}if(mt.assign(r,an,1,0),o=an[0],0===an[1]){if(0===o)return function(r,t){return t===Gr?Pr:t===Pr?0:t>0?Wr(t)?r:0:Wr(t)?Ht(Pr,r):Pr}(r,t);if(1===r)return 1;if(-1===r&&Wr(t))return-1;if(Lr(r))return r===Gr?cn(-0,-t):t<0?0:Pr}if(r<0&&!1===Cr(t))return(r-r)/(r-r);if(i=Mr(r),n=o&Ut|0,e=a&Ut|0,c=a>>>31|0,u=(u=o>>>31|0)&&Wr(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(kt(r)&Ut)<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===c?u*en*en:u*on*on;if(n>1072693248)return 0===c?u*en*en:u*on*on;p=function(r,t){var n,e,i,o,a,u;return n=(a=1.9259629911266175e-8*(i=t-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=Et(e=(o=1.4426950216293335*i)+a,0))-o),r[0]=e,r[1]=n,r}(un,i)}else p=function(r,t,n){var e,i,o,a,u,c,f,l,s,p,y,v,g,d,b,h,w,m,j,A,_;return m=0,n<Xt&&(m-=53,n=kt(t*=9007199254740992)),m+=(n>>20)-Zt|0,n=1072693248|(j=1048575&n|0),j<=235662?A=0:j<767610?A=1:(A=0,m+=1,n-=Xt),a=Et(i=(h=(t=Rt(t,n))-(f=Yt[A]))*(w=1/(t+f)),0),e=524288+(n>>1|536870912),c=Rt(0,e+=A<<18),b=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),c=Et(c=3+(o=a*a)+(b+=(u=w*(h-a*c-a*(t-(c-f))))*(a+i)),0),g=(y=-7.028461650952758e-9*(s=Et(s=(h=a*c)+(w=u*c+(b-(c-3-o))*i),0))+.9617966939259756*(w-(s-h))+zt[A])-((v=Et(v=(p=.9617967009544373*s)+y+(l=qt[A])+(d=m),0))-d-l-p),r[0]=v,r[1]=g,r}(un,i,n);if(y=(s=(t-(f=Et(t,0)))*p[0]+t*p[1])+(l=f*p[0]),mt.assign(y,an,1,0),v=Ot(an[0]),g=Ot(an[1]),v>=nn){if(0!=(v-nn|g))return u*en*en;if(s+8008566259537294e-32>y-l)return u*en*en}else if((v&Ut)>=1083231232){if(0!=(v-3230714880|g))return u*on*on;if(s<=y-l)return u*on*on}return y=function(r,t,n){var e,i,o,a,u,c,f,l,s,p;return s=((l=r&Ut|0)>>20)-Zt|0,f=0,l>1071644672&&(i=Rt(0,((f=r+(tn>>s+1)>>>0)&~(rn>>(s=((f&Ut)>>20)-Zt|0)))>>>0),f=(f&rn|tn)>>20-s>>>0,r<0&&(f=-f),t-=i),r=Ot(r=kt(c=1-((c=(o=.6931471824645996*(i=Et(i=n+t,0)))+(a=.6931471805599453*(n-(i-t))+-1.904654299957768e-9*i))*(e=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(c-o))+c*u)-c))),(r+=f<<20>>>0)>>20<=0?Qt(c,f):Rt(c,r)}(v,l,s),u*y}var fn=Math.ceil;var ln=1048575;var sn=1.4426950407214463,pn=[0,0];function yn(r){var t,n,e,i,o;if(Vr(r)||r<0)return NaN;if(mt.assign(r,pn,1,0),o=0,(n=pn[0])<1048576){if(0==(n&Ut|pn[1]))return Gr;o-=54,n=kt(r*=0x40000000000000)}return n>=2146435072?r+r:(o+=(n>>20)-Zt|0,o+=(i=(n&=rn)+614244&1048576|0)>>20|0,e=function(r){var t,n,e,i,o,a,u,c,f,l,s;return i=kt(r),o=r-1,(ln&2+i)<3?0===o?0:o*o*(.3333333333333333*o-.5):(l=(i&=ln)-398458|0,s=440401-i|0,n=(f=(u=(a=o/(2+o))*a)*u)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(f),e=u*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(f),c=e+n,(l|=s)>0?a*((t=.5*o*o)+c)-t:a*(c-o))}(r=Rt(r,n|1072693248^i)),1.6751713164886512e-10*((r-=1)+e)+(r-(t=Et(r,0))+e)*sn+t*sn+o)}function vn(r){var t,n;return Vr(r)||Lr(r)||0===r?r:(r<0?(r=-r,t=-1):t=1,-1074===(n=yn(r))?r:(n=1===t?$r(n):fn(n))>1023?Gr:t*cn(2,n))}return function(r){return Nr(r,vn)}}));
//# sourceMappingURL=index.js.map
