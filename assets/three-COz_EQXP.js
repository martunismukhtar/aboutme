import{r as R0,a as C0}from"./vendor-BA1JatVX.js";var rg={exports:{}},mc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w0=Symbol.for("react.transitional.element"),D0=Symbol.for("react.fragment");function sg(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:w0,type:e,key:i,ref:t!==void 0?t:null,props:n}}mc.Fragment=D0;mc.jsx=sg;mc.jsxs=sg;rg.exports=mc;var d1=rg.exports,og={exports:{}},gc={},lg={exports:{}},cg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,k){var B=N.length;N.push(k);t:for(;0<B;){var tt=B-1>>>1,at=N[tt];if(0<a(at,k))N[tt]=k,N[B]=at,B=tt;else break t}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var k=N[0],B=N.pop();if(B!==k){N[0]=B;t:for(var tt=0,at=N.length,_t=at>>>1;tt<_t;){var Ot=2*(tt+1)-1,Yt=N[Ot],W=Ot+1,it=N[W];if(0>a(Yt,B))W<at&&0>a(it,Yt)?(N[tt]=it,N[W]=B,tt=W):(N[tt]=Yt,N[Ot]=B,tt=Ot);else if(W<at&&0>a(it,B))N[tt]=it,N[W]=B,tt=W;else break t}}return k}function a(N,k){var B=N.sortIndex-k.sortIndex;return B!==0?B:N.id-k.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var l=[],c=[],h=1,d=null,f=3,p=!1,S=!1,y=!1,g=!1,u=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function v(N){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=N)i(c),k.sortIndex=k.expirationTime,t(l,k);else break;k=n(c)}}function C(N){if(y=!1,v(N),!S)if(n(l)!==null)S=!0,A||(A=!0,V());else{var k=n(c);k!==null&&J(C,k.startTime-N)}}var A=!1,b=-1,w=5,T=-1;function M(){return g?!0:!(e.unstable_now()-T<w)}function U(){if(g=!1,A){var N=e.unstable_now();T=N;var k=!0;try{t:{S=!1,y&&(y=!1,m(b),b=-1),p=!0;var B=f;try{e:{for(v(N),d=n(l);d!==null&&!(d.expirationTime>N&&M());){var tt=d.callback;if(typeof tt=="function"){d.callback=null,f=d.priorityLevel;var at=tt(d.expirationTime<=N);if(N=e.unstable_now(),typeof at=="function"){d.callback=at,v(N),k=!0;break e}d===n(l)&&i(l),v(N)}else i(l);d=n(l)}if(d!==null)k=!0;else{var _t=n(c);_t!==null&&J(C,_t.startTime-N),k=!1}}break t}finally{d=null,f=B,p=!1}k=void 0}}finally{k?V():A=!1}}}var V;if(typeof _=="function")V=function(){_(U)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,q=G.port2;G.port1.onmessage=U,V=function(){q.postMessage(null)}}else V=function(){u(U,0)};function J(N,k){b=u(function(){N(e.unstable_now())},k)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(N){switch(f){case 1:case 2:case 3:var k=3;break;default:k=f}var B=f;f=k;try{return N()}finally{f=B}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(N,k){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var B=f;f=N;try{return k()}finally{f=B}},e.unstable_scheduleCallback=function(N,k,B){var tt=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?tt+B:tt):B=tt,N){case 1:var at=-1;break;case 2:at=250;break;case 5:at=1073741823;break;case 4:at=1e4;break;default:at=5e3}return at=B+at,N={id:h++,callback:k,priorityLevel:N,startTime:B,expirationTime:at,sortIndex:-1},B>tt?(N.sortIndex=B,t(c,N),n(l)===null&&N===n(c)&&(y?(m(b),b=-1):y=!0,J(C,B-tt))):(N.sortIndex=at,t(l,N),S||p||(S=!0,A||(A=!0,V()))),N},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(N){var k=f;return function(){var B=f;f=k;try{return N.apply(this,arguments)}finally{f=B}}}})(cg);lg.exports=cg;var U0=lg.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pe=U0,ug=R0,L0=C0;function Z(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function fg(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function hg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xd(e){if(fo(e)!==e)throw Error(Z(188))}function N0(e){var t=e.alternate;if(!t){if(t=fo(e),t===null)throw Error(Z(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return Xd(a),e;if(r===i)return Xd(a),t;r=r.sibling}throw Error(Z(188))}if(n.return!==i.return)n=a,i=r;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s){for(o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s)throw Error(Z(189))}}if(n.alternate!==i)throw Error(Z(190))}if(n.tag!==3)throw Error(Z(188));return n.stateNode.current===n?e:t}function dg(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=dg(e),t!==null)return t;e=e.sibling}return null}var pe=Object.assign,O0=Symbol.for("react.element"),Po=Symbol.for("react.transitional.element"),Cs=Symbol.for("react.portal"),Sr=Symbol.for("react.fragment"),pg=Symbol.for("react.strict_mode"),Ku=Symbol.for("react.profiler"),P0=Symbol.for("react.provider"),mg=Symbol.for("react.consumer"),vi=Symbol.for("react.context"),Lh=Symbol.for("react.forward_ref"),Qu=Symbol.for("react.suspense"),ju=Symbol.for("react.suspense_list"),Nh=Symbol.for("react.memo"),Xi=Symbol.for("react.lazy"),Ju=Symbol.for("react.activity"),B0=Symbol.for("react.memo_cache_sentinel"),Wd=Symbol.iterator;function ms(e){return e===null||typeof e!="object"?null:(e=Wd&&e[Wd]||e["@@iterator"],typeof e=="function"?e:null)}var z0=Symbol.for("react.client.reference");function $u(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===z0?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sr:return"Fragment";case Ku:return"Profiler";case pg:return"StrictMode";case Qu:return"Suspense";case ju:return"SuspenseList";case Ju:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Cs:return"Portal";case vi:return(e.displayName||"Context")+".Provider";case mg:return(e._context.displayName||"Context")+".Consumer";case Lh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Nh:return t=e.displayName||null,t!==null?t:$u(e.type)||"Memo";case Xi:t=e._payload,e=e._init;try{return $u(e(t))}catch{}}return null}var ws=Array.isArray,Ct=ug.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Jt=L0.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,za={pending:!1,data:null,method:null,action:null},tf=[],Mr=-1;function ai(e){return{current:e}}function Ve(e){0>Mr||(e.current=tf[Mr],tf[Mr]=null,Mr--)}function _e(e,t){Mr++,tf[Mr]=e.current,e.current=t}var $n=ai(null),Ys=ai(null),ea=ai(null),Bl=ai(null);function zl(e,t){switch(_e(ea,t),_e(Ys,e),_e($n,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Qp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Qp(t),e=Lv(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ve($n),_e($n,e)}function Xr(){Ve($n),Ve(Ys),Ve(ea)}function ef(e){e.memoizedState!==null&&_e(Bl,e);var t=$n.current,n=Lv(t,e.type);t!==n&&(_e(Ys,e),_e($n,n))}function Il(e){Ys.current===e&&(Ve($n),Ve(Ys)),Bl.current===e&&(Ve(Bl),io._currentValue=za)}var nf=Object.prototype.hasOwnProperty,Oh=Pe.unstable_scheduleCallback,Ic=Pe.unstable_cancelCallback,I0=Pe.unstable_shouldYield,F0=Pe.unstable_requestPaint,ti=Pe.unstable_now,H0=Pe.unstable_getCurrentPriorityLevel,gg=Pe.unstable_ImmediatePriority,_g=Pe.unstable_UserBlockingPriority,Fl=Pe.unstable_NormalPriority,G0=Pe.unstable_LowPriority,vg=Pe.unstable_IdlePriority,V0=Pe.log,k0=Pe.unstable_setDisableYieldValue,ho=null,vn=null;function ji(e){if(typeof V0=="function"&&k0(e),vn&&typeof vn.setStrictMode=="function")try{vn.setStrictMode(ho,e)}catch{}}var xn=Math.clz32?Math.clz32:q0,X0=Math.log,W0=Math.LN2;function q0(e){return e>>>=0,e===0?32:31-(X0(e)/W0|0)|0}var Bo=256,zo=4194304;function Ca(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _c(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,r=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~r,i!==0?a=Ca(i):(s&=o,s!==0?a=Ca(s):n||(n=o&~e,n!==0&&(a=Ca(n))))):(o=i&~r,o!==0?a=Ca(o):s!==0?a=Ca(s):n||(n=i&~e,n!==0&&(a=Ca(n)))),a===0?0:t!==0&&t!==a&&!(t&r)&&(r=a&-a,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:a}function po(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Y0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xg(){var e=Bo;return Bo<<=1,!(Bo&4194048)&&(Bo=256),e}function Sg(){var e=zo;return zo<<=1,!(zo&62914560)&&(zo=4194304),e}function Fc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Z0(e,t,n,i,a,r){var s=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=s&~n;0<n;){var h=31-xn(n),d=1<<h;o[h]=0,l[h]=-1;var f=c[h];if(f!==null)for(c[h]=null,h=0;h<f.length;h++){var p=f[h];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&Mg(e,i,0),r!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=r&~(s&~t))}function Mg(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-xn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&4194090}function yg(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-xn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function Ph(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Bh(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Eg(){var e=Jt.p;return e!==0?e:(e=window.event,e===void 0?32:Vv(e.type))}function K0(e,t){var n=Jt.p;try{return Jt.p=e,t()}finally{Jt.p=n}}var ga=Math.random().toString(36).slice(2),Ze="__reactFiber$"+ga,ln="__reactProps$"+ga,ss="__reactContainer$"+ga,af="__reactEvents$"+ga,Q0="__reactListeners$"+ga,j0="__reactHandles$"+ga,qd="__reactResources$"+ga,go="__reactMarker$"+ga;function zh(e){delete e[Ze],delete e[ln],delete e[af],delete e[Q0],delete e[j0]}function yr(e){var t=e[Ze];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ss]||n[Ze]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$p(e);e!==null;){if(n=e[Ze])return n;e=$p(e)}return t}e=n,n=e.parentNode}return null}function os(e){if(e=e[Ze]||e[ss]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Ds(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(Z(33))}function Nr(e){var t=e[qd];return t||(t=e[qd]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function He(e){e[go]=!0}var Tg=new Set,bg={};function Qa(e,t){Wr(e,t),Wr(e+"Capture",t)}function Wr(e,t){for(bg[e]=t,e=0;e<t.length;e++)Tg.add(t[e])}var J0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Yd={},Zd={};function $0(e){return nf.call(Zd,e)?!0:nf.call(Yd,e)?!1:J0.test(e)?Zd[e]=!0:(Yd[e]=!0,!1)}function _l(e,t,n){if($0(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Io(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function oi(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}var Hc,Kd;function _r(e){if(Hc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Hc=t&&t[1]||"",Kd=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Hc+e+Kd}var Gc=!1;function Vc(e,t){if(!e||Gc)return"";Gc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(p){var f=p}Reflect.construct(e,[],d)}else{try{d.call()}catch(p){f=p}e.call(d.prototype)}}else{try{throw Error()}catch(p){f=p}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(p){if(p&&f&&typeof p.stack=="string")return[p.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),s=r[0],o=r[1];if(s&&o){var l=s.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=a);break}}}finally{Gc=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?_r(n):""}function tx(e){switch(e.tag){case 26:case 27:case 5:return _r(e.type);case 16:return _r("Lazy");case 13:return _r("Suspense");case 19:return _r("SuspenseList");case 0:case 15:return Vc(e.type,!1);case 11:return Vc(e.type.render,!1);case 1:return Vc(e.type,!0);case 31:return _r("Activity");default:return""}}function Qd(e){try{var t="";do t+=tx(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function wn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ag(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ex(e){var t=Ag(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){i=""+s,r.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hl(e){e._valueTracker||(e._valueTracker=ex(e))}function Rg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Ag(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Gl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var nx=/[\n"\\]/g;function Ln(e){return e.replace(nx,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function rf(e,t,n,i,a,r,s,o){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+wn(t)):e.value!==""+wn(t)&&(e.value=""+wn(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?sf(e,s,wn(t)):n!=null?sf(e,s,wn(n)):i!=null&&e.removeAttribute("value"),a==null&&r!=null&&(e.defaultChecked=!!r),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+wn(o):e.removeAttribute("name")}function Cg(e,t,n,i,a,r,s,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+wn(n):"",t=t!=null?""+wn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s)}function sf(e,t,n){t==="number"&&Gl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Or(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+wn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function wg(e,t,n){if(t!=null&&(t=""+wn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+wn(n):""}function Dg(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(Z(92));if(ws(i)){if(1<i.length)throw Error(Z(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=wn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i)}function qr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ix=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jd(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||ix.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ug(e,t,n){if(t!=null&&typeof t!="object")throw Error(Z(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&jd(e,a,i)}else for(var r in t)t.hasOwnProperty(r)&&jd(e,r,t[r])}function Ih(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ax=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),rx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vl(e){return rx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var of=null;function Fh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Er=null,Pr=null;function Jd(e){var t=os(e);if(t&&(e=t.stateNode)){var n=e[ln]||null;t:switch(e=t.stateNode,t.type){case"input":if(rf(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ln(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[ln]||null;if(!a)throw Error(Z(90));rf(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Rg(i)}break t;case"textarea":wg(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Or(e,!!n.multiple,t,!1)}}}var kc=!1;function Lg(e,t,n){if(kc)return e(t,n);kc=!0;try{var i=e(t);return i}finally{if(kc=!1,(Er!==null||Pr!==null)&&(Rc(),Er&&(t=Er,e=Pr,Pr=Er=null,Jd(t),e)))for(t=0;t<e.length;t++)Jd(e[t])}}function Zs(e,t){var n=e.stateNode;if(n===null)return null;var i=n[ln]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Z(231,t,typeof n));return n}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lf=!1;if(wi)try{var gs={};Object.defineProperty(gs,"passive",{get:function(){lf=!0}}),window.addEventListener("test",gs,gs),window.removeEventListener("test",gs,gs)}catch{lf=!1}var Ji=null,Hh=null,xl=null;function Ng(){if(xl)return xl;var e,t=Hh,n=t.length,i,a="value"in Ji?Ji.value:Ji.textContent,r=a.length;for(e=0;e<n&&t[e]===a[e];e++);var s=n-e;for(i=1;i<=s&&t[n-i]===a[r-i];i++);return xl=a.slice(e,1<i?1-i:void 0)}function Sl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fo(){return!0}function $d(){return!1}function cn(e){function t(n,i,a,r,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Fo:$d,this.isPropagationStopped=$d,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fo)},persist:function(){},isPersistent:Fo}),t}var ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vc=cn(ja),_o=pe({},ja,{view:0,detail:0}),sx=cn(_o),Xc,Wc,_s,xc=pe({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_s&&(_s&&e.type==="mousemove"?(Xc=e.screenX-_s.screenX,Wc=e.screenY-_s.screenY):Wc=Xc=0,_s=e),Xc)},movementY:function(e){return"movementY"in e?e.movementY:Wc}}),tp=cn(xc),ox=pe({},xc,{dataTransfer:0}),lx=cn(ox),cx=pe({},_o,{relatedTarget:0}),qc=cn(cx),ux=pe({},ja,{animationName:0,elapsedTime:0,pseudoElement:0}),fx=cn(ux),hx=pe({},ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dx=cn(hx),px=pe({},ja,{data:0}),ep=cn(px),mx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_x={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_x[e])?!!t[e]:!1}function Gh(){return vx}var xx=pe({},_o,{key:function(e){if(e.key){var t=mx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Sl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gh,charCode:function(e){return e.type==="keypress"?Sl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sx=cn(xx),Mx=pe({},xc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),np=cn(Mx),yx=pe({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gh}),Ex=cn(yx),Tx=pe({},ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),bx=cn(Tx),Ax=pe({},xc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rx=cn(Ax),Cx=pe({},ja,{newState:0,oldState:0}),wx=cn(Cx),Dx=[9,13,27,32],Vh=wi&&"CompositionEvent"in window,Ns=null;wi&&"documentMode"in document&&(Ns=document.documentMode);var Ux=wi&&"TextEvent"in window&&!Ns,Og=wi&&(!Vh||Ns&&8<Ns&&11>=Ns),ip=" ",ap=!1;function Pg(e,t){switch(e){case"keyup":return Dx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tr=!1;function Lx(e,t){switch(e){case"compositionend":return Bg(t);case"keypress":return t.which!==32?null:(ap=!0,ip);case"textInput":return e=t.data,e===ip&&ap?null:e;default:return null}}function Nx(e,t){if(Tr)return e==="compositionend"||!Vh&&Pg(e,t)?(e=Ng(),xl=Hh=Ji=null,Tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Og&&t.locale!=="ko"?null:t.data;default:return null}}var Ox={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ox[e.type]:t==="textarea"}function zg(e,t,n,i){Er?Pr?Pr.push(i):Pr=[i]:Er=i,t=rc(t,"onChange"),0<t.length&&(n=new vc("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Os=null,Ks=null;function Px(e){wv(e,0)}function Sc(e){var t=Ds(e);if(Rg(t))return e}function sp(e,t){if(e==="change")return t}var Ig=!1;if(wi){var Yc;if(wi){var Zc="oninput"in document;if(!Zc){var op=document.createElement("div");op.setAttribute("oninput","return;"),Zc=typeof op.oninput=="function"}Yc=Zc}else Yc=!1;Ig=Yc&&(!document.documentMode||9<document.documentMode)}function lp(){Os&&(Os.detachEvent("onpropertychange",Fg),Ks=Os=null)}function Fg(e){if(e.propertyName==="value"&&Sc(Ks)){var t=[];zg(t,Ks,e,Fh(e)),Lg(Px,t)}}function Bx(e,t,n){e==="focusin"?(lp(),Os=t,Ks=n,Os.attachEvent("onpropertychange",Fg)):e==="focusout"&&lp()}function zx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sc(Ks)}function Ix(e,t){if(e==="click")return Sc(t)}function Fx(e,t){if(e==="input"||e==="change")return Sc(t)}function Hx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var En=typeof Object.is=="function"?Object.is:Hx;function Qs(e,t){if(En(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!nf.call(t,a)||!En(e[a],t[a]))return!1}return!0}function cp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function up(e,t){var n=cp(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=cp(n)}}function Hg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gl(e.document)}return t}function kh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Gx=wi&&"documentMode"in document&&11>=document.documentMode,br=null,cf=null,Ps=null,uf=!1;function fp(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;uf||br==null||br!==Gl(i)||(i=br,"selectionStart"in i&&kh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ps&&Qs(Ps,i)||(Ps=i,i=rc(cf,"onSelect"),0<i.length&&(t=new vc("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=br)))}function Ma(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ar={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionrun:Ma("Transition","TransitionRun"),transitionstart:Ma("Transition","TransitionStart"),transitioncancel:Ma("Transition","TransitionCancel"),transitionend:Ma("Transition","TransitionEnd")},Kc={},Vg={};wi&&(Vg=document.createElement("div").style,"AnimationEvent"in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),"TransitionEvent"in window||delete Ar.transitionend.transition);function Ja(e){if(Kc[e])return Kc[e];if(!Ar[e])return e;var t=Ar[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vg)return Kc[e]=t[n];return e}var kg=Ja("animationend"),Xg=Ja("animationiteration"),Wg=Ja("animationstart"),Vx=Ja("transitionrun"),kx=Ja("transitionstart"),Xx=Ja("transitioncancel"),qg=Ja("transitionend"),Yg=new Map,ff="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ff.push("scrollEnd");function Yn(e,t){Yg.set(e,t),Qa(t,[e])}var hp=new WeakMap;function Nn(e,t){if(typeof e=="object"&&e!==null){var n=hp.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Qd(t)},hp.set(e,t),t)}return{value:e,source:t,stack:Qd(t)}}var Rn=[],Rr=0,Xh=0;function Mc(){for(var e=Rr,t=Xh=Rr=0;t<e;){var n=Rn[t];Rn[t++]=null;var i=Rn[t];Rn[t++]=null;var a=Rn[t];Rn[t++]=null;var r=Rn[t];if(Rn[t++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}r!==0&&Zg(n,a,r)}}function yc(e,t,n,i){Rn[Rr++]=e,Rn[Rr++]=t,Rn[Rr++]=n,Rn[Rr++]=i,Xh|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Wh(e,t,n,i){return yc(e,t,n,i),Vl(e)}function ls(e,t){return yc(e,null,null,t),Vl(e)}function Zg(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,r=e.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(a=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,a&&t!==null&&(a=31-xn(n),e=r.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),r):null}function Vl(e){if(50<Ws)throw Ws=0,Lf=null,Error(Z(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Cr={};function Wx(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(e,t,n,i){return new Wx(e,t,n,i)}function qh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ai(e,t){var n=e.alternate;return n===null?(n=_n(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Kg(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ml(e,t,n,i,a,r){var s=0;if(i=e,typeof e=="function")qh(e)&&(s=1);else if(typeof e=="string")s=YS(e,n,$n.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Ju:return e=_n(31,n,t,a),e.elementType=Ju,e.lanes=r,e;case Sr:return Ia(n.children,a,r,t);case pg:s=8,a|=24;break;case Ku:return e=_n(12,n,t,a|2),e.elementType=Ku,e.lanes=r,e;case Qu:return e=_n(13,n,t,a),e.elementType=Qu,e.lanes=r,e;case ju:return e=_n(19,n,t,a),e.elementType=ju,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P0:case vi:s=10;break t;case mg:s=9;break t;case Lh:s=11;break t;case Nh:s=14;break t;case Xi:s=16,i=null;break t}s=29,n=Error(Z(130,e===null?"null":typeof e,"")),i=null}return t=_n(s,n,t,a),t.elementType=e,t.type=i,t.lanes=r,t}function Ia(e,t,n,i){return e=_n(7,e,i,t),e.lanes=n,e}function Qc(e,t,n){return e=_n(6,e,null,t),e.lanes=n,e}function jc(e,t,n){return t=_n(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wr=[],Dr=0,kl=null,Xl=0,Dn=[],Un=0,Fa=null,xi=1,Si="";function wa(e,t){wr[Dr++]=Xl,wr[Dr++]=kl,kl=e,Xl=t}function Qg(e,t,n){Dn[Un++]=xi,Dn[Un++]=Si,Dn[Un++]=Fa,Fa=e;var i=xi;e=Si;var a=32-xn(i)-1;i&=~(1<<a),n+=1;var r=32-xn(t)+a;if(30<r){var s=a-a%5;r=(i&(1<<s)-1).toString(32),i>>=s,a-=s,xi=1<<32-xn(t)+a|n<<a|i,Si=r+e}else xi=1<<r|n<<a|i,Si=e}function Yh(e){e.return!==null&&(wa(e,1),Qg(e,1,0))}function Zh(e){for(;e===kl;)kl=wr[--Dr],wr[Dr]=null,Xl=wr[--Dr],wr[Dr]=null;for(;e===Fa;)Fa=Dn[--Un],Dn[Un]=null,Si=Dn[--Un],Dn[Un]=null,xi=Dn[--Un],Dn[Un]=null}var $e=null,Ee=null,jt=!1,Ha=null,Qn=!1,hf=Error(Z(519));function Xa(e){var t=Error(Z(418,""));throw js(Nn(t,e)),hf}function dp(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Ze]=e,t[ln]=i,n){case"dialog":Ft("cancel",t),Ft("close",t);break;case"iframe":case"object":case"embed":Ft("load",t);break;case"video":case"audio":for(n=0;n<to.length;n++)Ft(to[n],t);break;case"source":Ft("error",t);break;case"img":case"image":case"link":Ft("error",t),Ft("load",t);break;case"details":Ft("toggle",t);break;case"input":Ft("invalid",t),Cg(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),Hl(t);break;case"select":Ft("invalid",t);break;case"textarea":Ft("invalid",t),Dg(t,i.value,i.defaultValue,i.children),Hl(t)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Uv(t.textContent,n)?(i.popover!=null&&(Ft("beforetoggle",t),Ft("toggle",t)),i.onScroll!=null&&Ft("scroll",t),i.onScrollEnd!=null&&Ft("scrollend",t),i.onClick!=null&&(t.onclick=Dc),t=!0):t=!1,t||Xa(e)}function pp(e){for($e=e.return;$e;)switch($e.tag){case 5:case 13:Qn=!1;return;case 27:case 3:Qn=!0;return;default:$e=$e.return}}function vs(e){if(e!==$e)return!1;if(!jt)return pp(e),jt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||If(e.type,e.memoizedProps)),n=!n),n&&Ee&&Xa(e),pp(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Z(317));t:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Ee=Wn(e.nextSibling);break t}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Ee=null}}else t===27?(t=Ee,_a(e.type)?(e=Gf,Gf=null,Ee=e):Ee=t):Ee=$e?Wn(e.stateNode.nextSibling):null;return!0}function vo(){Ee=$e=null,jt=!1}function mp(){var e=Ha;return e!==null&&(rn===null?rn=e:rn.push.apply(rn,e),Ha=null),e}function js(e){Ha===null?Ha=[e]:Ha.push(e)}var df=ai(null),$a=null,Mi=null;function qi(e,t,n){_e(df,t._currentValue),t._currentValue=n}function Ri(e){e._currentValue=df.current,Ve(df)}function pf(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function mf(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var r=a.dependencies;if(r!==null){var s=a.child;r=r.firstContext;t:for(;r!==null;){var o=r;r=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),pf(r.return,n,e),i||(s=null);break t}r=o.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(Z(341));s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),pf(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function xo(e,t,n,i){e=null;for(var a=t,r=!1;a!==null;){if(!r){if(a.flags&524288)r=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(Z(387));if(s=s.memoizedProps,s!==null){var o=a.type;En(a.pendingProps.value,s.value)||(e!==null?e.push(o):e=[o])}}else if(a===Bl.current){if(s=a.alternate,s===null)throw Error(Z(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(io):e=[io])}a=a.return}e!==null&&mf(t,e,n,i),t.flags|=262144}function Wl(e){for(e=e.firstContext;e!==null;){if(!En(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Wa(e){$a=e,Mi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ke(e){return jg($a,e)}function Ho(e,t){return $a===null&&Wa(e),jg(e,t)}function jg(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Mi===null){if(e===null)throw Error(Z(308));Mi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Mi=Mi.next=t;return n}var qx=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Yx=Pe.unstable_scheduleCallback,Zx=Pe.unstable_NormalPriority,Ne={$$typeof:vi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Kh(){return{controller:new qx,data:new Map,refCount:0}}function So(e){e.refCount--,e.refCount===0&&Yx(Zx,function(){e.controller.abort()})}var Bs=null,gf=0,Yr=0,Br=null;function Kx(e,t){if(Bs===null){var n=Bs=[];gf=0,Yr=vd(),Br={status:"pending",value:void 0,then:function(i){n.push(i)}}}return gf++,t.then(gp,gp),t}function gp(){if(--gf===0&&Bs!==null){Br!==null&&(Br.status="fulfilled");var e=Bs;Bs=null,Yr=0,Br=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Qx(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var _p=Ct.S;Ct.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Kx(e,t),_p!==null&&_p(e,t)};var Ga=ai(null);function Qh(){var e=Ga.current;return e!==null?e:fe.pooledCache}function yl(e,t){t===null?_e(Ga,Ga.current):_e(Ga,t.pool)}function Jg(){var e=Qh();return e===null?null:{parent:Ne._currentValue,pool:e}}var Mo=Error(Z(460)),$g=Error(Z(474)),Ec=Error(Z(542)),_f={then:function(){}};function vp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Go(){}function t_(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Go,Go),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Sp(e),e;default:if(typeof t.status=="string")t.then(Go,Go);else{if(e=fe,e!==null&&100<e.shellSuspendCounter)throw Error(Z(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Sp(e),e}throw zs=t,Mo}}var zs=null;function xp(){if(zs===null)throw Error(Z(459));var e=zs;return zs=null,e}function Sp(e){if(e===Mo||e===Ec)throw Error(Z(483))}var Wi=!1;function jh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ia(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,ne&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=Vl(e),Zg(e,null,n),t}return yc(e,i,t,n),Vl(e)}function Is(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,yg(e,n)}}function Jc(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?a=r=t:r=r.next=t}else a=r=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var xf=!1;function Fs(){if(xf){var e=Br;if(e!==null)throw e}}function Hs(e,t,n,i){xf=!1;var a=e.updateQueue;Wi=!1;var r=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?r=c:s.next=c,s=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==s&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(r!==null){var d=a.baseState;s=0,h=c=l=null,o=r;do{var f=o.lane&-536870913,p=f!==o.lane;if(p?(kt&f)===f:(i&f)===f){f!==0&&f===Yr&&(xf=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var S=e,y=o;f=t;var g=n;switch(y.tag){case 1:if(S=y.payload,typeof S=="function"){d=S.call(g,d,f);break t}d=S;break t;case 3:S.flags=S.flags&-65537|128;case 0:if(S=y.payload,f=typeof S=="function"?S.call(g,d,f):S,f==null)break t;d=pe({},d,f);break t;case 2:Wi=!0}}f=o.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=a.callbacks,p===null?a.callbacks=[f]:p.push(f))}else p={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=d):h=h.next=p,s|=f;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);h===null&&(l=d),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=h,r===null&&(a.shared.lanes=0),da|=s,e.lanes=s,e.memoizedState=d}}function e_(e,t){if(typeof e!="function")throw Error(Z(191,e));e.call(t)}function n_(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)e_(n[e],t)}var Zr=ai(null),ql=ai(0);function Mp(e,t){e=Li,_e(ql,e),_e(Zr,t),Li=e|t.baseLanes}function Sf(){_e(ql,Li),_e(Zr,Zr.current)}function Jh(){Li=ql.current,Ve(Zr),Ve(ql)}var fa=0,It=null,se=null,we=null,Yl=!1,zr=!1,qa=!1,Zl=0,Js=0,Ir=null,jx=0;function be(){throw Error(Z(321))}function $h(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!En(e[n],t[n]))return!1;return!0}function td(e,t,n,i,a,r){return fa=r,It=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ct.H=e===null||e.memoizedState===null?N_:O_,qa=!1,r=n(i,a),qa=!1,zr&&(r=a_(t,n,i,a)),i_(e),r}function i_(e){Ct.H=Kl;var t=se!==null&&se.next!==null;if(fa=0,we=se=It=null,Yl=!1,Js=0,Ir=null,t)throw Error(Z(300));e===null||Ge||(e=e.dependencies,e!==null&&Wl(e)&&(Ge=!0))}function a_(e,t,n,i){It=e;var a=0;do{if(zr&&(Ir=null),Js=0,zr=!1,25<=a)throw Error(Z(301));if(a+=1,we=se=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}Ct.H=aS,r=t(n,i)}while(zr);return r}function Jx(){var e=Ct.H,t=e.useState()[0];return t=typeof t.then=="function"?yo(t):t,e=e.useState()[0],(se!==null?se.memoizedState:null)!==e&&(It.flags|=1024),t}function ed(){var e=Zl!==0;return Zl=0,e}function nd(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function id(e){if(Yl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Yl=!1}fa=0,we=se=It=null,zr=!1,Js=Zl=0,Ir=null}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?It.memoizedState=we=e:we=we.next=e,we}function De(){if(se===null){var e=It.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=we===null?It.memoizedState:we.next;if(t!==null)we=t,se=e;else{if(e===null)throw It.alternate===null?Error(Z(467)):Error(Z(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},we===null?It.memoizedState=we=e:we=we.next=e}return we}function ad(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yo(e){var t=Js;return Js+=1,Ir===null&&(Ir=[]),e=t_(Ir,e,t),t=It,(we===null?t.memoizedState:we.next)===null&&(t=t.alternate,Ct.H=t===null||t.memoizedState===null?N_:O_),e}function Tc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yo(e);if(e.$$typeof===vi)return Ke(e)}throw Error(Z(438,String(e)))}function rd(e){var t=null,n=It.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=It.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ad(),It.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=B0;return t.index++,n}function Di(e,t){return typeof t=="function"?t(e):t}function El(e){var t=De();return sd(t,se,e)}function sd(e,t,n){var i=e.queue;if(i===null)throw Error(Z(311));i.lastRenderedReducer=n;var a=e.baseQueue,r=i.pending;if(r!==null){if(a!==null){var s=a.next;a.next=r.next,r.next=s}t.baseQueue=a=r,i.pending=null}if(r=e.baseState,a===null)e.memoizedState=r;else{t=a.next;var o=s=null,l=null,c=t,h=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(kt&d)===d:(fa&d)===d){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===Yr&&(h=!0);else if((fa&f)===f){c=c.next,f===Yr&&(h=!0);continue}else d={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,s=r):l=l.next=d,It.lanes|=f,da|=f;d=c.action,qa&&n(r,d),r=c.hasEagerState?c.eagerState:n(r,d)}else f={lane:d,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,s=r):l=l.next=f,It.lanes|=d,da|=d;c=c.next}while(c!==null&&c!==t);if(l===null?s=r:l.next=o,!En(r,e.memoizedState)&&(Ge=!0,h&&(n=Br,n!==null)))throw n;e.memoizedState=r,e.baseState=s,e.baseQueue=l,i.lastRenderedState=r}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function $c(e){var t=De(),n=t.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,r=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do r=e(r,s.action),s=s.next;while(s!==a);En(r,t.memoizedState)||(Ge=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,i]}function r_(e,t,n){var i=It,a=De(),r=jt;if(r){if(n===void 0)throw Error(Z(407));n=n()}else n=t();var s=!En((se||a).memoizedState,n);s&&(a.memoizedState=n,Ge=!0),a=a.queue;var o=l_.bind(null,i,a,e);if(Eo(2048,8,o,[e]),a.getSnapshot!==t||s||we!==null&&we.memoizedState.tag&1){if(i.flags|=2048,Kr(9,bc(),o_.bind(null,i,a,n,t),null),fe===null)throw Error(Z(349));r||fa&124||s_(i,t,n)}return n}function s_(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=It.updateQueue,t===null?(t=ad(),It.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function o_(e,t,n,i){t.value=n,t.getSnapshot=i,c_(t)&&u_(e)}function l_(e,t,n){return n(function(){c_(t)&&u_(e)})}function c_(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!En(e,n)}catch{return!0}}function u_(e){var t=ls(e,2);t!==null&&Mn(t,e,2)}function Mf(e){var t=nn();if(typeof e=="function"){var n=e;if(e=n(),qa){ji(!0);try{n()}finally{ji(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Di,lastRenderedState:e},t}function f_(e,t,n,i){return e.baseState=n,sd(e,se,typeof i=="function"?i:Di)}function $x(e,t,n,i,a){if(Ac(e))throw Error(Z(485));if(e=t.action,e!==null){var r={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};Ct.T!==null?n(!0):r.isTransition=!1,i(r),n=t.pending,n===null?(r.next=t.pending=r,h_(t,r)):(r.next=n.next,t.pending=n.next=r)}}function h_(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var r=Ct.T,s={};Ct.T=s;try{var o=n(a,i),l=Ct.S;l!==null&&l(s,o),yp(e,t,o)}catch(c){yf(e,t,c)}finally{Ct.T=r}}else try{r=n(a,i),yp(e,t,r)}catch(c){yf(e,t,c)}}function yp(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Ep(e,t,i)},function(i){return yf(e,t,i)}):Ep(e,t,n)}function Ep(e,t,n){t.status="fulfilled",t.value=n,d_(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,h_(e,n)))}function yf(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,d_(t),t=t.next;while(t!==i)}e.action=null}function d_(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function p_(e,t){return t}function Tp(e,t){if(jt){var n=fe.formState;if(n!==null){t:{var i=It;if(jt){if(Ee){e:{for(var a=Ee,r=Qn;a.nodeType!==8;){if(!r){a=null;break e}if(a=Wn(a.nextSibling),a===null){a=null;break e}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){Ee=Wn(a.nextSibling),i=a.data==="F!";break t}}Xa(i)}i=!1}i&&(t=n[0])}}return n=nn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:p_,lastRenderedState:t},n.queue=i,n=D_.bind(null,It,i),i.dispatch=n,i=Mf(!1),r=ud.bind(null,It,!1,i.queue),i=nn(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=$x.bind(null,It,a,r,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function bp(e){var t=De();return m_(t,se,e)}function m_(e,t,n){if(t=sd(e,t,p_)[0],e=El(Di)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=yo(t)}catch(s){throw s===Mo?Ec:s}else i=t;t=De();var a=t.queue,r=a.dispatch;return n!==t.memoizedState&&(It.flags|=2048,Kr(9,bc(),tS.bind(null,a,n),null)),[i,r,e]}function tS(e,t){e.action=t}function Ap(e){var t=De(),n=se;if(n!==null)return m_(t,n,e);De(),t=t.memoizedState,n=De();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Kr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=It.updateQueue,t===null&&(t=ad(),It.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function bc(){return{destroy:void 0,resource:void 0}}function g_(){return De().memoizedState}function Tl(e,t,n,i){var a=nn();i=i===void 0?null:i,It.flags|=e,a.memoizedState=Kr(1|t,bc(),n,i)}function Eo(e,t,n,i){var a=De();i=i===void 0?null:i;var r=a.memoizedState.inst;se!==null&&i!==null&&$h(i,se.memoizedState.deps)?a.memoizedState=Kr(t,r,n,i):(It.flags|=e,a.memoizedState=Kr(1|t,r,n,i))}function Rp(e,t){Tl(8390656,8,e,t)}function __(e,t){Eo(2048,8,e,t)}function v_(e,t){return Eo(4,2,e,t)}function x_(e,t){return Eo(4,4,e,t)}function S_(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function M_(e,t,n){n=n!=null?n.concat([e]):null,Eo(4,4,S_.bind(null,t,e),n)}function od(){}function y_(e,t){var n=De();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&$h(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function E_(e,t){var n=De();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&$h(t,i[1]))return i[0];if(i=e(),qa){ji(!0);try{e()}finally{ji(!1)}}return n.memoizedState=[i,t],i}function ld(e,t,n){return n===void 0||fa&1073741824?e.memoizedState=t:(e.memoizedState=n,e=dv(),It.lanes|=e,da|=e,n)}function T_(e,t,n,i){return En(n,t)?n:Zr.current!==null?(e=ld(e,n,i),En(e,t)||(Ge=!0),e):fa&42?(e=dv(),It.lanes|=e,da|=e,t):(Ge=!0,e.memoizedState=n)}function b_(e,t,n,i,a){var r=Jt.p;Jt.p=r!==0&&8>r?r:8;var s=Ct.T,o={};Ct.T=o,ud(e,!1,t,n);try{var l=a(),c=Ct.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=Qx(l,i);Gs(e,t,h,Sn(e))}else Gs(e,t,i,Sn(e))}catch(d){Gs(e,t,{then:function(){},status:"rejected",reason:d},Sn())}finally{Jt.p=r,Ct.T=s}}function eS(){}function Ef(e,t,n,i){if(e.tag!==5)throw Error(Z(476));var a=A_(e).queue;b_(e,a,t,za,n===null?eS:function(){return R_(e),n(i)})}function A_(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:za,baseState:za,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Di,lastRenderedState:za},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Di,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function R_(e){var t=A_(e).next.queue;Gs(e,t,{},Sn())}function cd(){return Ke(io)}function C_(){return De().memoizedState}function w_(){return De().memoizedState}function nS(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Sn();e=na(n);var i=ia(t,e,n);i!==null&&(Mn(i,t,n),Is(i,t,n)),t={cache:Kh()},e.payload=t;return}t=t.return}}function iS(e,t,n){var i=Sn();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Ac(e)?U_(t,n):(n=Wh(e,t,n,i),n!==null&&(Mn(n,e,i),L_(n,t,i)))}function D_(e,t,n){var i=Sn();Gs(e,t,n,i)}function Gs(e,t,n,i){var a={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ac(e))U_(t,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var s=t.lastRenderedState,o=r(s,n);if(a.hasEagerState=!0,a.eagerState=o,En(o,s))return yc(e,t,a,0),fe===null&&Mc(),!1}catch{}finally{}if(n=Wh(e,t,a,i),n!==null)return Mn(n,e,i),L_(n,t,i),!0}return!1}function ud(e,t,n,i){if(i={lane:2,revertLane:vd(),action:i,hasEagerState:!1,eagerState:null,next:null},Ac(e)){if(t)throw Error(Z(479))}else t=Wh(e,n,i,2),t!==null&&Mn(t,e,2)}function Ac(e){var t=e.alternate;return e===It||t!==null&&t===It}function U_(e,t){zr=Yl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function L_(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,yg(e,n)}}var Kl={readContext:Ke,use:Tc,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useLayoutEffect:be,useInsertionEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useSyncExternalStore:be,useId:be,useHostTransitionStatus:be,useFormState:be,useActionState:be,useOptimistic:be,useMemoCache:be,useCacheRefresh:be},N_={readContext:Ke,use:Tc,useCallback:function(e,t){return nn().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:Rp,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Tl(4194308,4,S_.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Tl(4194308,4,e,t)},useInsertionEffect:function(e,t){Tl(4,2,e,t)},useMemo:function(e,t){var n=nn();t=t===void 0?null:t;var i=e();if(qa){ji(!0);try{e()}finally{ji(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=nn();if(n!==void 0){var a=n(t);if(qa){ji(!0);try{n(t)}finally{ji(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=iS.bind(null,It,e),[i.memoizedState,e]},useRef:function(e){var t=nn();return e={current:e},t.memoizedState=e},useState:function(e){e=Mf(e);var t=e.queue,n=D_.bind(null,It,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:od,useDeferredValue:function(e,t){var n=nn();return ld(n,e,t)},useTransition:function(){var e=Mf(!1);return e=b_.bind(null,It,e.queue,!0,!1),nn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=It,a=nn();if(jt){if(n===void 0)throw Error(Z(407));n=n()}else{if(n=t(),fe===null)throw Error(Z(349));kt&124||s_(i,t,n)}a.memoizedState=n;var r={value:n,getSnapshot:t};return a.queue=r,Rp(l_.bind(null,i,r,e),[e]),i.flags|=2048,Kr(9,bc(),o_.bind(null,i,r,n,t),null),n},useId:function(){var e=nn(),t=fe.identifierPrefix;if(jt){var n=Si,i=xi;n=(i&~(1<<32-xn(i)-1)).toString(32)+n,t="«"+t+"R"+n,n=Zl++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=jx++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:cd,useFormState:Tp,useActionState:Tp,useOptimistic:function(e){var t=nn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ud.bind(null,It,!0,n),n.dispatch=t,[e,t]},useMemoCache:rd,useCacheRefresh:function(){return nn().memoizedState=nS.bind(null,It)}},O_={readContext:Ke,use:Tc,useCallback:y_,useContext:Ke,useEffect:__,useImperativeHandle:M_,useInsertionEffect:v_,useLayoutEffect:x_,useMemo:E_,useReducer:El,useRef:g_,useState:function(){return El(Di)},useDebugValue:od,useDeferredValue:function(e,t){var n=De();return T_(n,se.memoizedState,e,t)},useTransition:function(){var e=El(Di)[0],t=De().memoizedState;return[typeof e=="boolean"?e:yo(e),t]},useSyncExternalStore:r_,useId:C_,useHostTransitionStatus:cd,useFormState:bp,useActionState:bp,useOptimistic:function(e,t){var n=De();return f_(n,se,e,t)},useMemoCache:rd,useCacheRefresh:w_},aS={readContext:Ke,use:Tc,useCallback:y_,useContext:Ke,useEffect:__,useImperativeHandle:M_,useInsertionEffect:v_,useLayoutEffect:x_,useMemo:E_,useReducer:$c,useRef:g_,useState:function(){return $c(Di)},useDebugValue:od,useDeferredValue:function(e,t){var n=De();return se===null?ld(n,e,t):T_(n,se.memoizedState,e,t)},useTransition:function(){var e=$c(Di)[0],t=De().memoizedState;return[typeof e=="boolean"?e:yo(e),t]},useSyncExternalStore:r_,useId:C_,useHostTransitionStatus:cd,useFormState:Ap,useActionState:Ap,useOptimistic:function(e,t){var n=De();return se!==null?f_(n,se,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:rd,useCacheRefresh:w_},Fr=null,$s=0;function Vo(e){var t=$s;return $s+=1,Fr===null&&(Fr=[]),t_(Fr,e,t)}function xs(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ko(e,t){throw t.$$typeof===O0?Error(Z(525)):(e=Object.prototype.toString.call(t),Error(Z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Cp(e){var t=e._init;return t(e._payload)}function P_(e){function t(u,m){if(e){var _=u.deletions;_===null?(u.deletions=[m],u.flags|=16):_.push(m)}}function n(u,m){if(!e)return null;for(;m!==null;)t(u,m),m=m.sibling;return null}function i(u){for(var m=new Map;u!==null;)u.key!==null?m.set(u.key,u):m.set(u.index,u),u=u.sibling;return m}function a(u,m){return u=Ai(u,m),u.index=0,u.sibling=null,u}function r(u,m,_){return u.index=_,e?(_=u.alternate,_!==null?(_=_.index,_<m?(u.flags|=67108866,m):_):(u.flags|=67108866,m)):(u.flags|=1048576,m)}function s(u){return e&&u.alternate===null&&(u.flags|=67108866),u}function o(u,m,_,v){return m===null||m.tag!==6?(m=Qc(_,u.mode,v),m.return=u,m):(m=a(m,_),m.return=u,m)}function l(u,m,_,v){var C=_.type;return C===Sr?h(u,m,_.props.children,v,_.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Xi&&Cp(C)===m.type)?(m=a(m,_.props),xs(m,_),m.return=u,m):(m=Ml(_.type,_.key,_.props,null,u.mode,v),xs(m,_),m.return=u,m)}function c(u,m,_,v){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=jc(_,u.mode,v),m.return=u,m):(m=a(m,_.children||[]),m.return=u,m)}function h(u,m,_,v,C){return m===null||m.tag!==7?(m=Ia(_,u.mode,v,C),m.return=u,m):(m=a(m,_),m.return=u,m)}function d(u,m,_){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Qc(""+m,u.mode,_),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Po:return _=Ml(m.type,m.key,m.props,null,u.mode,_),xs(_,m),_.return=u,_;case Cs:return m=jc(m,u.mode,_),m.return=u,m;case Xi:var v=m._init;return m=v(m._payload),d(u,m,_)}if(ws(m)||ms(m))return m=Ia(m,u.mode,_,null),m.return=u,m;if(typeof m.then=="function")return d(u,Vo(m),_);if(m.$$typeof===vi)return d(u,Ho(u,m),_);ko(u,m)}return null}function f(u,m,_,v){var C=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return C!==null?null:o(u,m,""+_,v);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Po:return _.key===C?l(u,m,_,v):null;case Cs:return _.key===C?c(u,m,_,v):null;case Xi:return C=_._init,_=C(_._payload),f(u,m,_,v)}if(ws(_)||ms(_))return C!==null?null:h(u,m,_,v,null);if(typeof _.then=="function")return f(u,m,Vo(_),v);if(_.$$typeof===vi)return f(u,m,Ho(u,_),v);ko(u,_)}return null}function p(u,m,_,v,C){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return u=u.get(_)||null,o(m,u,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Po:return u=u.get(v.key===null?_:v.key)||null,l(m,u,v,C);case Cs:return u=u.get(v.key===null?_:v.key)||null,c(m,u,v,C);case Xi:var A=v._init;return v=A(v._payload),p(u,m,_,v,C)}if(ws(v)||ms(v))return u=u.get(_)||null,h(m,u,v,C,null);if(typeof v.then=="function")return p(u,m,_,Vo(v),C);if(v.$$typeof===vi)return p(u,m,_,Ho(m,v),C);ko(m,v)}return null}function S(u,m,_,v){for(var C=null,A=null,b=m,w=m=0,T=null;b!==null&&w<_.length;w++){b.index>w?(T=b,b=null):T=b.sibling;var M=f(u,b,_[w],v);if(M===null){b===null&&(b=T);break}e&&b&&M.alternate===null&&t(u,b),m=r(M,m,w),A===null?C=M:A.sibling=M,A=M,b=T}if(w===_.length)return n(u,b),jt&&wa(u,w),C;if(b===null){for(;w<_.length;w++)b=d(u,_[w],v),b!==null&&(m=r(b,m,w),A===null?C=b:A.sibling=b,A=b);return jt&&wa(u,w),C}for(b=i(b);w<_.length;w++)T=p(b,u,w,_[w],v),T!==null&&(e&&T.alternate!==null&&b.delete(T.key===null?w:T.key),m=r(T,m,w),A===null?C=T:A.sibling=T,A=T);return e&&b.forEach(function(U){return t(u,U)}),jt&&wa(u,w),C}function y(u,m,_,v){if(_==null)throw Error(Z(151));for(var C=null,A=null,b=m,w=m=0,T=null,M=_.next();b!==null&&!M.done;w++,M=_.next()){b.index>w?(T=b,b=null):T=b.sibling;var U=f(u,b,M.value,v);if(U===null){b===null&&(b=T);break}e&&b&&U.alternate===null&&t(u,b),m=r(U,m,w),A===null?C=U:A.sibling=U,A=U,b=T}if(M.done)return n(u,b),jt&&wa(u,w),C;if(b===null){for(;!M.done;w++,M=_.next())M=d(u,M.value,v),M!==null&&(m=r(M,m,w),A===null?C=M:A.sibling=M,A=M);return jt&&wa(u,w),C}for(b=i(b);!M.done;w++,M=_.next())M=p(b,u,w,M.value,v),M!==null&&(e&&M.alternate!==null&&b.delete(M.key===null?w:M.key),m=r(M,m,w),A===null?C=M:A.sibling=M,A=M);return e&&b.forEach(function(V){return t(u,V)}),jt&&wa(u,w),C}function g(u,m,_,v){if(typeof _=="object"&&_!==null&&_.type===Sr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Po:t:{for(var C=_.key;m!==null;){if(m.key===C){if(C=_.type,C===Sr){if(m.tag===7){n(u,m.sibling),v=a(m,_.props.children),v.return=u,u=v;break t}}else if(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Xi&&Cp(C)===m.type){n(u,m.sibling),v=a(m,_.props),xs(v,_),v.return=u,u=v;break t}n(u,m);break}else t(u,m);m=m.sibling}_.type===Sr?(v=Ia(_.props.children,u.mode,v,_.key),v.return=u,u=v):(v=Ml(_.type,_.key,_.props,null,u.mode,v),xs(v,_),v.return=u,u=v)}return s(u);case Cs:t:{for(C=_.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(u,m.sibling),v=a(m,_.children||[]),v.return=u,u=v;break t}else{n(u,m);break}else t(u,m);m=m.sibling}v=jc(_,u.mode,v),v.return=u,u=v}return s(u);case Xi:return C=_._init,_=C(_._payload),g(u,m,_,v)}if(ws(_))return S(u,m,_,v);if(ms(_)){if(C=ms(_),typeof C!="function")throw Error(Z(150));return _=C.call(_),y(u,m,_,v)}if(typeof _.then=="function")return g(u,m,Vo(_),v);if(_.$$typeof===vi)return g(u,m,Ho(u,_),v);ko(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,m!==null&&m.tag===6?(n(u,m.sibling),v=a(m,_),v.return=u,u=v):(n(u,m),v=Qc(_,u.mode,v),v.return=u,u=v),s(u)):n(u,m)}return function(u,m,_,v){try{$s=0;var C=g(u,m,_,v);return Fr=null,C}catch(b){if(b===Mo||b===Ec)throw b;var A=_n(29,b,null,u.mode);return A.lanes=v,A.return=u,A}finally{}}}var Qr=P_(!0),B_=P_(!1),Pn=ai(null),ei=null;function Yi(e){var t=e.alternate;_e(Oe,Oe.current&1),_e(Pn,e),ei===null&&(t===null||Zr.current!==null||t.memoizedState!==null)&&(ei=e)}function z_(e){if(e.tag===22){if(_e(Oe,Oe.current),_e(Pn,e),ei===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(ei=e)}}else Zi()}function Zi(){_e(Oe,Oe.current),_e(Pn,Pn.current)}function yi(e){Ve(Pn),ei===e&&(ei=null),Ve(Oe)}var Oe=ai(0);function Ql(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Hf(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function tu(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Tf={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Sn(),a=na(i);a.payload=t,n!=null&&(a.callback=n),t=ia(e,a,i),t!==null&&(Mn(t,e,i),Is(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Sn(),a=na(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=ia(e,a,i),t!==null&&(Mn(t,e,i),Is(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Sn(),i=na(n);i.tag=2,t!=null&&(i.callback=t),t=ia(e,i,n),t!==null&&(Mn(t,e,n),Is(t,e,n))}};function wp(e,t,n,i,a,r,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,s):t.prototype&&t.prototype.isPureReactComponent?!Qs(n,i)||!Qs(a,r):!0}function Dp(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Tf.enqueueReplaceState(t,t.state,null)}function Ya(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=pe({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}var jl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function I_(e){jl(e)}function F_(e){console.error(e)}function H_(e){jl(e)}function Jl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Up(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function bf(e,t,n){return n=na(n),n.tag=3,n.payload={element:null},n.callback=function(){Jl(e,t)},n}function G_(e){return e=na(e),e.tag=3,e}function V_(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=i.value;e.payload=function(){return a(r)},e.callback=function(){Up(t,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Up(t,n,i),typeof a!="function"&&(aa===null?aa=new Set([this]):aa.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function rS(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&xo(t,n,a,!0),n=Pn.current,n!==null){switch(n.tag){case 13:return ei===null?Nf():n.alternate===null&&Te===0&&(Te=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===_f?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),fu(e,i,a)),!1;case 22:return n.flags|=65536,i===_f?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),fu(e,i,a)),!1}throw Error(Z(435,n.tag))}return fu(e,i,a),Nf(),!1}if(jt)return t=Pn.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==hf&&(e=Error(Z(422),{cause:i}),js(Nn(e,n)))):(i!==hf&&(t=Error(Z(423),{cause:i}),js(Nn(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Nn(i,n),a=bf(e.stateNode,i,a),Jc(e,a),Te!==4&&(Te=2)),!1;var r=Error(Z(520),{cause:i});if(r=Nn(r,n),Xs===null?Xs=[r]:Xs.push(r),Te!==4&&(Te=2),t===null)return!0;i=Nn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=bf(n.stateNode,i,e),Jc(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(aa===null||!aa.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=G_(a),V_(a,e,n,i),Jc(n,a),!1}n=n.return}while(n!==null);return!1}var k_=Error(Z(461)),Ge=!1;function ke(e,t,n,i){t.child=e===null?B_(t,null,n,i):Qr(t,e.child,n,i)}function Lp(e,t,n,i,a){n=n.render;var r=t.ref;if("ref"in i){var s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}else s=i;return Wa(t),i=td(e,t,n,s,r,a),o=ed(),e!==null&&!Ge?(nd(e,t,a),Ui(e,t,a)):(jt&&o&&Yh(t),t.flags|=1,ke(e,t,i,a),t.child)}function Np(e,t,n,i,a){if(e===null){var r=n.type;return typeof r=="function"&&!qh(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,X_(e,t,r,i,a)):(e=Ml(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!fd(e,a)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:Qs,n(s,i)&&e.ref===t.ref)return Ui(e,t,a)}return t.flags|=1,e=Ai(r,i),e.ref=t.ref,e.return=t,t.child=e}function X_(e,t,n,i,a){if(e!==null){var r=e.memoizedProps;if(Qs(r,i)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=i=r,fd(e,a))e.flags&131072&&(Ge=!0);else return t.lanes=e.lanes,Ui(e,t,a)}return Af(e,t,n,i,a)}function W_(e,t,n){var i=t.pendingProps,a=i.children,r=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if(t.flags&128){if(i=r!==null?r.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;t.childLanes=r&~i}else t.childLanes=0,t.child=null;return Op(e,t,i,n)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&yl(t,r!==null?r.cachePool:null),r!==null?Mp(t,r):Sf(),z_(t);else return t.lanes=t.childLanes=536870912,Op(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(yl(t,r.cachePool),Mp(t,r),Zi(),t.memoizedState=null):(e!==null&&yl(t,null),Sf(),Zi());return ke(e,t,a,n),t.child}function Op(e,t,n,i){var a=Qh();return a=a===null?null:{parent:Ne._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&yl(t,null),Sf(),z_(t),e!==null&&xo(e,t,i,!0),null}function bl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(Z(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Af(e,t,n,i,a){return Wa(t),n=td(e,t,n,i,void 0,a),i=ed(),e!==null&&!Ge?(nd(e,t,a),Ui(e,t,a)):(jt&&i&&Yh(t),t.flags|=1,ke(e,t,n,a),t.child)}function Pp(e,t,n,i,a,r){return Wa(t),t.updateQueue=null,n=a_(t,i,n,a),i_(e),i=ed(),e!==null&&!Ge?(nd(e,t,r),Ui(e,t,r)):(jt&&i&&Yh(t),t.flags|=1,ke(e,t,n,r),t.child)}function Bp(e,t,n,i,a){if(Wa(t),t.stateNode===null){var r=Cr,s=n.contextType;typeof s=="object"&&s!==null&&(r=Ke(s)),r=new n(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Tf,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},jh(t),s=n.contextType,r.context=typeof s=="object"&&s!==null?Ke(s):Cr,r.state=t.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(tu(t,n,s,i),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&Tf.enqueueReplaceState(r,r.state,null),Hs(t,i,r,a),Fs(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var o=t.memoizedProps,l=Ya(n,o);r.props=l;var c=r.context,h=n.contextType;s=Cr,typeof h=="object"&&h!==null&&(s=Ke(h));var d=n.getDerivedStateFromProps;h=typeof d=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||c!==s)&&Dp(t,r,i,s),Wi=!1;var f=t.memoizedState;r.state=f,Hs(t,i,r,a),Fs(),c=t.memoizedState,o||f!==c||Wi?(typeof d=="function"&&(tu(t,n,d,i),c=t.memoizedState),(l=Wi||wp(t,n,l,i,f,c,s))?(h||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),r.props=i,r.state=c,r.context=s,i=l):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,vf(e,t),s=t.memoizedProps,h=Ya(n,s),r.props=h,d=t.pendingProps,f=r.context,c=n.contextType,l=Cr,typeof c=="object"&&c!==null&&(l=Ke(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==d||f!==l)&&Dp(t,r,i,l),Wi=!1,f=t.memoizedState,r.state=f,Hs(t,i,r,a),Fs();var p=t.memoizedState;s!==d||f!==p||Wi||e!==null&&e.dependencies!==null&&Wl(e.dependencies)?(typeof o=="function"&&(tu(t,n,o,i),p=t.memoizedState),(h=Wi||wp(t,n,h,i,f,p,l)||e!==null&&e.dependencies!==null&&Wl(e.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,p,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,p,l)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),r.props=i,r.state=p,r.context=l,i=h):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,bl(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=Qr(t,e.child,null,a),t.child=Qr(t,null,n,a)):ke(e,t,n,a),t.memoizedState=r.state,e=t.child):e=Ui(e,t,a),e}function zp(e,t,n,i){return vo(),t.flags|=256,ke(e,t,n,i),t.child}var eu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nu(e){return{baseLanes:e,cachePool:Jg()}}function iu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=On),e}function q_(e,t,n){var i=t.pendingProps,a=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(Oe.current&2)!==0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(jt){if(a?Yi(t):Zi(),jt){var o=Ee,l;if(l=o){t:{for(l=o,o=Qn;l.nodeType!==8;){if(!o){o=null;break t}if(l=Wn(l.nextSibling),l===null){o=null;break t}}o=l}o!==null?(t.memoizedState={dehydrated:o,treeContext:Fa!==null?{id:xi,overflow:Si}:null,retryLane:536870912,hydrationErrors:null},l=_n(18,null,null,0),l.stateNode=o,l.return=t,t.child=l,$e=t,Ee=null,l=!0):l=!1}l||Xa(t)}if(o=t.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return Hf(o)?t.lanes=32:t.lanes=536870912,null;yi(t)}return o=i.children,i=i.fallback,a?(Zi(),a=t.mode,o=$l({mode:"hidden",children:o},a),i=Ia(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,a=t.child,a.memoizedState=nu(n),a.childLanes=iu(e,s,n),t.memoizedState=eu,i):(Yi(t),Rf(t,o))}if(l=e.memoizedState,l!==null&&(o=l.dehydrated,o!==null)){if(r)t.flags&256?(Yi(t),t.flags&=-257,t=au(e,t,n)):t.memoizedState!==null?(Zi(),t.child=e.child,t.flags|=128,t=null):(Zi(),a=i.fallback,o=t.mode,i=$l({mode:"visible",children:i.children},o),a=Ia(a,o,n,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,Qr(t,e.child,null,n),i=t.child,i.memoizedState=nu(n),i.childLanes=iu(e,s,n),t.memoizedState=eu,t=a);else if(Yi(t),Hf(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var c=s.dgst;s=c,i=Error(Z(419)),i.stack="",i.digest=s,js({value:i,source:null,stack:null}),t=au(e,t,n)}else if(Ge||xo(e,t,n,!1),s=(n&e.childLanes)!==0,Ge||s){if(s=fe,s!==null&&(i=n&-n,i=i&42?1:Ph(i),i=i&(s.suspendedLanes|n)?0:i,i!==0&&i!==l.retryLane))throw l.retryLane=i,ls(e,i),Mn(s,e,i),k_;o.data==="$?"||Nf(),t=au(e,t,n)}else o.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ee=Wn(o.nextSibling),$e=t,jt=!0,Ha=null,Qn=!1,e!==null&&(Dn[Un++]=xi,Dn[Un++]=Si,Dn[Un++]=Fa,xi=e.id,Si=e.overflow,Fa=t),t=Rf(t,i.children),t.flags|=4096);return t}return a?(Zi(),a=i.fallback,o=t.mode,l=e.child,c=l.sibling,i=Ai(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?a=Ai(c,a):(a=Ia(a,o,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,o=e.child.memoizedState,o===null?o=nu(n):(l=o.cachePool,l!==null?(c=Ne._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=Jg(),o={baseLanes:o.baseLanes|n,cachePool:l}),a.memoizedState=o,a.childLanes=iu(e,s,n),t.memoizedState=eu,i):(Yi(t),n=e.child,e=n.sibling,n=Ai(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Rf(e,t){return t=$l({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function $l(e,t){return e=_n(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function au(e,t,n){return Qr(t,e.child,null,n),e=Rf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ip(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),pf(e.return,t,n)}function ru(e,t,n,i,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a)}function Y_(e,t,n){var i=t.pendingProps,a=i.revealOrder,r=i.tail;if(ke(e,t,i.children,n),i=Oe.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ip(e,n,t);else if(e.tag===19)Ip(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(_e(Oe,i),a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Ql(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),ru(t,!1,a,n,r);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ql(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}ru(t,!0,n,null,r);break;case"together":ru(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ui(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),da|=t.lanes,!(n&t.childLanes))if(e!==null){if(xo(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(Z(153));if(t.child!==null){for(e=t.child,n=Ai(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ai(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fd(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Wl(e)))}function sS(e,t,n){switch(t.tag){case 3:zl(t,t.stateNode.containerInfo),qi(t,Ne,e.memoizedState.cache),vo();break;case 27:case 5:ef(t);break;case 4:zl(t,t.stateNode.containerInfo);break;case 10:qi(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Yi(t),t.flags|=128,null):n&t.child.childLanes?q_(e,t,n):(Yi(t),e=Ui(e,t,n),e!==null?e.sibling:null);Yi(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(xo(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return Y_(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),_e(Oe,Oe.current),i)break;return null;case 22:case 23:return t.lanes=0,W_(e,t,n);case 24:qi(t,Ne,e.memoizedState.cache)}return Ui(e,t,n)}function Z_(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ge=!0;else{if(!fd(e,n)&&!(t.flags&128))return Ge=!1,sS(e,t,n);Ge=!!(e.flags&131072)}else Ge=!1,jt&&t.flags&1048576&&Qg(t,Xl,t.index);switch(t.lanes=0,t.tag){case 16:t:{e=t.pendingProps;var i=t.elementType,a=i._init;if(i=a(i._payload),t.type=i,typeof i=="function")qh(i)?(e=Ya(i,e),t.tag=1,t=Bp(null,t,i,e,n)):(t.tag=0,t=Af(null,t,i,e,n));else{if(i!=null){if(a=i.$$typeof,a===Lh){t.tag=11,t=Lp(null,t,i,e,n);break t}else if(a===Nh){t.tag=14,t=Np(null,t,i,e,n);break t}}throw t=$u(i)||i,Error(Z(306,t,""))}}return t;case 0:return Af(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=Ya(i,t.pendingProps),Bp(e,t,i,a,n);case 3:t:{if(zl(t,t.stateNode.containerInfo),e===null)throw Error(Z(387));i=t.pendingProps;var r=t.memoizedState;a=r.element,vf(e,t),Hs(t,i,null,n);var s=t.memoizedState;if(i=s.cache,qi(t,Ne,i),i!==r.cache&&mf(t,[Ne],n,!0),Fs(),i=s.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=zp(e,t,i,n);break t}else if(i!==a){a=Nn(Error(Z(424)),t),js(a),t=zp(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ee=Wn(e.firstChild),$e=t,jt=!0,Ha=null,Qn=!0,n=B_(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(vo(),i===a){t=Ui(e,t,n);break t}ke(e,t,i,n)}t=t.child}return t;case 26:return bl(e,t),e===null?(n=em(t.type,null,t.pendingProps,null))?t.memoizedState=n:jt||(n=t.type,e=t.pendingProps,i=sc(ea.current).createElement(n),i[Ze]=t,i[ln]=e,We(i,n,e),He(i),t.stateNode=i):t.memoizedState=em(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ef(t),e===null&&jt&&(i=t.stateNode=Ov(t.type,t.pendingProps,ea.current),$e=t,Qn=!0,a=Ee,_a(t.type)?(Gf=a,Ee=Wn(i.firstChild)):Ee=a),ke(e,t,t.pendingProps.children,n),bl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&jt&&((a=i=Ee)&&(i=OS(i,t.type,t.pendingProps,Qn),i!==null?(t.stateNode=i,$e=t,Ee=Wn(i.firstChild),Qn=!1,a=!0):a=!1),a||Xa(t)),ef(t),a=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,i=r.children,If(a,r)?i=null:s!==null&&If(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=td(e,t,Jx,null,null,n),io._currentValue=a),bl(e,t),ke(e,t,i,n),t.child;case 6:return e===null&&jt&&((e=n=Ee)&&(n=PS(n,t.pendingProps,Qn),n!==null?(t.stateNode=n,$e=t,Ee=null,e=!0):e=!1),e||Xa(t)),null;case 13:return q_(e,t,n);case 4:return zl(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Qr(t,null,i,n):ke(e,t,i,n),t.child;case 11:return Lp(e,t,t.type,t.pendingProps,n);case 7:return ke(e,t,t.pendingProps,n),t.child;case 8:return ke(e,t,t.pendingProps.children,n),t.child;case 12:return ke(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,qi(t,t.type,i.value),ke(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,Wa(t),a=Ke(a),i=i(a),t.flags|=1,ke(e,t,i,n),t.child;case 14:return Np(e,t,t.type,t.pendingProps,n);case 15:return X_(e,t,t.type,t.pendingProps,n);case 19:return Y_(e,t,n);case 31:return i=t.pendingProps,n=t.mode,i={mode:i.mode,children:i.children},e===null?(n=$l(i,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Ai(e.child,i),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return W_(e,t,n);case 24:return Wa(t),i=Ke(Ne),e===null?(a=Qh(),a===null&&(a=fe,r=Kh(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),t.memoizedState={parent:i,cache:a},jh(t),qi(t,Ne,a)):(e.lanes&n&&(vf(e,t),Hs(t,null,null,n),Fs()),a=e.memoizedState,r=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),qi(t,Ne,i)):(i=r.cache,qi(t,Ne,i),i!==a.cache&&mf(t,[Ne],n,!0))),ke(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(Z(156,t.tag))}function li(e){e.flags|=4}function Fp(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!zv(t)){if(t=Pn.current,t!==null&&((kt&4194048)===kt?ei!==null:(kt&62914560)!==kt&&!(kt&536870912)||t!==ei))throw zs=_f,$g;e.flags|=8192}}function Xo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Sg():536870912,e.lanes|=t,jr|=t)}function Ss(e,t){if(!jt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function oS(e,t,n){var i=t.pendingProps;switch(Zh(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Me(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Ri(Ne),Xr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(vs(t)?li(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,mp())),Me(t),null;case 26:return n=t.memoizedState,e===null?(li(t),n!==null?(Me(t),Fp(t,n)):(Me(t),t.flags&=-16777217)):n?n!==e.memoizedState?(li(t),Me(t),Fp(t,n)):(Me(t),t.flags&=-16777217):(e.memoizedProps!==i&&li(t),Me(t),t.flags&=-16777217),null;case 27:Il(t),n=ea.current;var a=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&li(t);else{if(!i){if(t.stateNode===null)throw Error(Z(166));return Me(t),null}e=$n.current,vs(t)?dp(t):(e=Ov(a,i,n),t.stateNode=e,li(t))}return Me(t),null;case 5:if(Il(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&li(t);else{if(!i){if(t.stateNode===null)throw Error(Z(166));return Me(t),null}if(e=$n.current,vs(t))dp(t);else{switch(a=sc(ea.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?a.createElement(n,{is:i.is}):a.createElement(n)}}e[Ze]=t,e[ln]=i;t:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;t:switch(We(e,n,i),n){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&li(t)}}return Me(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&li(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(Z(166));if(e=ea.current,vs(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=$e,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[Ze]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Uv(e.nodeValue,n)),e||Xa(t)}else e=sc(e).createTextNode(i),e[Ze]=t,t.stateNode=e}return Me(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=vs(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(Z(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(Z(317));a[Ze]=t}else vo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Me(t),a=!1}else a=mp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(yi(t),t):(yi(t),null)}if(yi(t),t.flags&128)return t.lanes=n,t;if(n=i!==null,e=e!==null&&e.memoizedState!==null,n){i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool);var r=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(i.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Xo(t,t.updateQueue),Me(t),null;case 4:return Xr(),e===null&&xd(t.stateNode.containerInfo),Me(t),null;case 10:return Ri(t.type),Me(t),null;case 19:if(Ve(Oe),a=t.memoizedState,a===null)return Me(t),null;if(i=(t.flags&128)!==0,r=a.rendering,r===null)if(i)Ss(a,!1);else{if(Te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=Ql(e),r!==null){for(t.flags|=128,Ss(a,!1),e=r.updateQueue,t.updateQueue=e,Xo(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Kg(n,e),n=n.sibling;return _e(Oe,Oe.current&1|2),t.child}e=e.sibling}a.tail!==null&&ti()>ec&&(t.flags|=128,i=!0,Ss(a,!1),t.lanes=4194304)}else{if(!i)if(e=Ql(r),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Xo(t,e),Ss(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!jt)return Me(t),null}else 2*ti()-a.renderingStartTime>ec&&n!==536870912&&(t.flags|=128,i=!0,Ss(a,!1),t.lanes=4194304);a.isBackwards?(r.sibling=t.child,t.child=r):(e=a.last,e!==null?e.sibling=r:t.child=r,a.last=r)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ti(),t.sibling=null,e=Oe.current,_e(Oe,i?e&1|2:e&1),t):(Me(t),null);case 22:case 23:return yi(t),Jh(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),n=t.updateQueue,n!==null&&Xo(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&Ve(Ga),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ri(Ne),Me(t),null;case 25:return null;case 30:return null}throw Error(Z(156,t.tag))}function lS(e,t){switch(Zh(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ri(Ne),Xr(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Il(t),null;case 13:if(yi(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Z(340));vo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ve(Oe),null;case 4:return Xr(),null;case 10:return Ri(t.type),null;case 22:case 23:return yi(t),Jh(),e!==null&&Ve(Ga),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ri(Ne),null;case 25:return null;default:return null}}function K_(e,t){switch(Zh(t),t.tag){case 3:Ri(Ne),Xr();break;case 26:case 27:case 5:Il(t);break;case 4:Xr();break;case 13:yi(t);break;case 19:Ve(Oe);break;case 10:Ri(t.type);break;case 22:case 23:yi(t),Jh(),e!==null&&Ve(Ga);break;case 24:Ri(Ne)}}function To(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var r=n.create,s=n.inst;i=r(),s.destroy=i}n=n.next}while(n!==a)}}catch(o){ce(t,t.return,o)}}function ha(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var r=a.next;i=r;do{if((i.tag&e)===e){var s=i.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(h){ce(a,l,h)}}}i=i.next}while(i!==r)}}catch(h){ce(t,t.return,h)}}function Q_(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{n_(t,n)}catch(i){ce(e,e.return,i)}}}function j_(e,t,n){n.props=Ya(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ce(e,t,i)}}function Vs(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){ce(e,t,a)}}function jn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){ce(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){ce(e,t,a)}else n.current=null}function J_(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){ce(e,e.return,a)}}function su(e,t,n){try{var i=e.stateNode;wS(i,e.type,n,t),i[ln]=t}catch(a){ce(e,e.return,a)}}function $_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&_a(e.type)||e.tag===4}function ou(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||$_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&_a(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cf(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Dc));else if(i!==4&&(i===27&&_a(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Cf(e,t,n),e=e.sibling;e!==null;)Cf(e,t,n),e=e.sibling}function tc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&_a(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(tc(e,t,n),e=e.sibling;e!==null;)tc(e,t,n),e=e.sibling}function tv(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);We(t,i,n),t[Ze]=e,t[ln]=n}catch(r){ce(e,e.return,r)}}var gi=!1,Ae=!1,lu=!1,Hp=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function cS(e,t){if(e=e.containerInfo,Bf=uc,e=Gg(e),kh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break t}var s=0,o=-1,l=-1,c=0,h=0,d=e,f=null;e:for(;;){for(var p;d!==n||a!==0&&d.nodeType!==3||(o=s+a),d!==r||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===e)break e;if(f===n&&++c===a&&(o=s),f===r&&++h===i&&(l=s),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(zf={focusedElem:e,selectionRange:n},uc=!1,Fe=t;Fe!==null;)if(t=Fe,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Fe=e;else for(;Fe!==null;){switch(t=Fe,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if(e&1024&&r!==null){e=void 0,n=t,a=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var S=Ya(n.type,a,n.elementType===n.type);e=i.getSnapshotBeforeUpdate(S,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(y){ce(n,n.return,y)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Ff(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ff(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(Z(163))}if(e=t.sibling,e!==null){e.return=t.return,Fe=e;break}Fe=t.return}}function ev(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Bi(e,n),i&4&&To(5,n);break;case 1:if(Bi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(s){ce(n,n.return,s)}else{var a=Ya(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){ce(n,n.return,s)}}i&64&&Q_(n),i&512&&Vs(n,n.return);break;case 3:if(Bi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{n_(e,t)}catch(s){ce(n,n.return,s)}}break;case 27:t===null&&i&4&&tv(n);case 26:case 5:Bi(e,n),t===null&&i&4&&J_(n),i&512&&Vs(n,n.return);break;case 12:Bi(e,n);break;case 13:Bi(e,n),i&4&&av(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=vS.bind(null,n),BS(e,n))));break;case 22:if(i=n.memoizedState!==null||gi,!i){t=t!==null&&t.memoizedState!==null||Ae,a=gi;var r=Ae;gi=i,(Ae=t)&&!r?ki(e,n,(n.subtreeFlags&8772)!==0):Bi(e,n),gi=a,Ae=r}break;case 30:break;default:Bi(e,n)}}function nv(e){var t=e.alternate;t!==null&&(e.alternate=null,nv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&zh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ge=null,an=!1;function ci(e,t,n){for(n=n.child;n!==null;)iv(e,t,n),n=n.sibling}function iv(e,t,n){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(ho,n)}catch{}switch(n.tag){case 26:Ae||jn(n,t),ci(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ae||jn(n,t);var i=ge,a=an;_a(n.type)&&(ge=n.stateNode,an=!1),ci(e,t,n),qs(n.stateNode),ge=i,an=a;break;case 5:Ae||jn(n,t);case 6:if(i=ge,a=an,ge=null,ci(e,t,n),ge=i,an=a,ge!==null)if(an)try{(ge.nodeType===9?ge.body:ge.nodeName==="HTML"?ge.ownerDocument.body:ge).removeChild(n.stateNode)}catch(r){ce(n,t,r)}else try{ge.removeChild(n.stateNode)}catch(r){ce(n,t,r)}break;case 18:ge!==null&&(an?(e=ge,Jp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),so(e)):Jp(ge,n.stateNode));break;case 4:i=ge,a=an,ge=n.stateNode.containerInfo,an=!0,ci(e,t,n),ge=i,an=a;break;case 0:case 11:case 14:case 15:Ae||ha(2,n,t),Ae||ha(4,n,t),ci(e,t,n);break;case 1:Ae||(jn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&j_(n,t,i)),ci(e,t,n);break;case 21:ci(e,t,n);break;case 22:Ae=(i=Ae)||n.memoizedState!==null,ci(e,t,n),Ae=i;break;default:ci(e,t,n)}}function av(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{so(e)}catch(n){ce(t,t.return,n)}}function uS(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Hp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Hp),t;default:throw Error(Z(435,e.tag))}}function cu(e,t){var n=uS(e);t.forEach(function(i){var a=xS.bind(null,e,i);n.has(i)||(n.add(i),i.then(a,a))})}function hn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],r=e,s=t,o=s;t:for(;o!==null;){switch(o.tag){case 27:if(_a(o.type)){ge=o.stateNode,an=!1;break t}break;case 5:ge=o.stateNode,an=!1;break t;case 3:case 4:ge=o.stateNode.containerInfo,an=!0;break t}o=o.return}if(ge===null)throw Error(Z(160));iv(r,s,a),ge=null,an=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)rv(t,e),t=t.sibling}var Gn=null;function rv(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hn(t,e),dn(e),i&4&&(ha(3,e,e.return),To(3,e),ha(5,e,e.return));break;case 1:hn(t,e),dn(e),i&512&&(Ae||n===null||jn(n,n.return)),i&64&&gi&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=Gn;if(hn(t,e),dn(e),i&512&&(Ae||n===null||jn(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":r=a.getElementsByTagName("title")[0],(!r||r[go]||r[Ze]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(i),a.head.insertBefore(r,a.querySelector("head > title"))),We(r,i,n),r[Ze]=e,He(r),i=r;break t;case"link":var s=im("link","href",a).get(i+(n.href||""));if(s){for(var o=0;o<s.length;o++)if(r=s[o],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(o,1);break e}}r=a.createElement(i),We(r,i,n),a.head.appendChild(r);break;case"meta":if(s=im("meta","content",a).get(i+(n.content||""))){for(o=0;o<s.length;o++)if(r=s[o],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(o,1);break e}}r=a.createElement(i),We(r,i,n),a.head.appendChild(r);break;default:throw Error(Z(468,i))}r[Ze]=e,He(r),i=r}e.stateNode=i}else am(a,e.type,e.stateNode);else e.stateNode=nm(a,i,e.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?am(a,e.type,e.stateNode):nm(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&su(e,e.memoizedProps,n.memoizedProps)}break;case 27:hn(t,e),dn(e),i&512&&(Ae||n===null||jn(n,n.return)),n!==null&&i&4&&su(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hn(t,e),dn(e),i&512&&(Ae||n===null||jn(n,n.return)),e.flags&32){a=e.stateNode;try{qr(a,"")}catch(p){ce(e,e.return,p)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,su(e,a,n!==null?n.memoizedProps:a)),i&1024&&(lu=!0);break;case 6:if(hn(t,e),dn(e),i&4){if(e.stateNode===null)throw Error(Z(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(p){ce(e,e.return,p)}}break;case 3:if(Cl=null,a=Gn,Gn=oc(t.containerInfo),hn(t,e),Gn=a,dn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{so(t.containerInfo)}catch(p){ce(e,e.return,p)}lu&&(lu=!1,sv(e));break;case 4:i=Gn,Gn=oc(e.stateNode.containerInfo),hn(t,e),dn(e),Gn=i;break;case 12:hn(t,e),dn(e);break;case 13:hn(t,e),dn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(gd=ti()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,cu(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=gi,h=Ae;if(gi=c||a,Ae=h||l,hn(t,e),Ae=h,gi=c,dn(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||gi||Ae||Da(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(r=l.stateNode,a)s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,f=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(p){ce(l,l.return,p)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(p){ce(l,l.return,p)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,cu(e,n))));break;case 19:hn(t,e),dn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,cu(e,i)));break;case 30:break;case 21:break;default:hn(t,e),dn(e)}}function dn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if($_(i)){n=i;break}i=i.return}if(n==null)throw Error(Z(160));switch(n.tag){case 27:var a=n.stateNode,r=ou(e);tc(e,r,a);break;case 5:var s=n.stateNode;n.flags&32&&(qr(s,""),n.flags&=-33);var o=ou(e);tc(e,o,s);break;case 3:case 4:var l=n.stateNode.containerInfo,c=ou(e);Cf(e,c,l);break;default:throw Error(Z(161))}}catch(h){ce(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;sv(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Bi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ev(e,t.alternate,t),t=t.sibling}function Da(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ha(4,t,t.return),Da(t);break;case 1:jn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&j_(t,t.return,n),Da(t);break;case 27:qs(t.stateNode);case 26:case 5:jn(t,t.return),Da(t);break;case 22:t.memoizedState===null&&Da(t);break;case 30:Da(t);break;default:Da(t)}e=e.sibling}}function ki(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,r=t,s=r.flags;switch(r.tag){case 0:case 11:case 15:ki(a,r,n),To(4,r);break;case 1:if(ki(a,r,n),i=r,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){ce(i,i.return,c)}if(i=r,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)e_(l[a],o)}catch(c){ce(i,i.return,c)}}n&&s&64&&Q_(r),Vs(r,r.return);break;case 27:tv(r);case 26:case 5:ki(a,r,n),n&&i===null&&s&4&&J_(r),Vs(r,r.return);break;case 12:ki(a,r,n);break;case 13:ki(a,r,n),n&&s&4&&av(a,r);break;case 22:r.memoizedState===null&&ki(a,r,n),Vs(r,r.return);break;case 30:break;default:ki(a,r,n)}t=t.sibling}}function hd(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&So(n))}function dd(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&So(e))}function Zn(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ov(e,t,n,i),t=t.sibling}function ov(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Zn(e,t,n,i),a&2048&&To(9,t);break;case 1:Zn(e,t,n,i);break;case 3:Zn(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&So(e)));break;case 12:if(a&2048){Zn(e,t,n,i),e=t.stateNode;try{var r=t.memoizedProps,s=r.id,o=r.onPostCommit;typeof o=="function"&&o(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){ce(t,t.return,l)}}else Zn(e,t,n,i);break;case 13:Zn(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,s=t.alternate,t.memoizedState!==null?r._visibility&2?Zn(e,t,n,i):ks(e,t):r._visibility&2?Zn(e,t,n,i):(r._visibility|=2,vr(e,t,n,i,(t.subtreeFlags&10256)!==0)),a&2048&&hd(s,t);break;case 24:Zn(e,t,n,i),a&2048&&dd(t.alternate,t);break;default:Zn(e,t,n,i)}}function vr(e,t,n,i,a){for(a=a&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,s=t,o=n,l=i,c=s.flags;switch(s.tag){case 0:case 11:case 15:vr(r,s,o,l,a),To(8,s);break;case 23:break;case 22:var h=s.stateNode;s.memoizedState!==null?h._visibility&2?vr(r,s,o,l,a):ks(r,s):(h._visibility|=2,vr(r,s,o,l,a)),a&&c&2048&&hd(s.alternate,s);break;case 24:vr(r,s,o,l,a),a&&c&2048&&dd(s.alternate,s);break;default:vr(r,s,o,l,a)}t=t.sibling}}function ks(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:ks(n,i),a&2048&&hd(i.alternate,i);break;case 24:ks(n,i),a&2048&&dd(i.alternate,i);break;default:ks(n,i)}t=t.sibling}}var Us=8192;function er(e){if(e.subtreeFlags&Us)for(e=e.child;e!==null;)lv(e),e=e.sibling}function lv(e){switch(e.tag){case 26:er(e),e.flags&Us&&e.memoizedState!==null&&KS(Gn,e.memoizedState,e.memoizedProps);break;case 5:er(e);break;case 3:case 4:var t=Gn;Gn=oc(e.stateNode.containerInfo),er(e),Gn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Us,Us=16777216,er(e),Us=t):er(e));break;default:er(e)}}function cv(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ms(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Fe=i,fv(i,e)}cv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)uv(e),e=e.sibling}function uv(e){switch(e.tag){case 0:case 11:case 15:Ms(e),e.flags&2048&&ha(9,e,e.return);break;case 3:Ms(e);break;case 12:Ms(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Al(e)):Ms(e);break;default:Ms(e)}}function Al(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Fe=i,fv(i,e)}cv(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ha(8,t,t.return),Al(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Al(t));break;default:Al(t)}e=e.sibling}}function fv(e,t){for(;Fe!==null;){var n=Fe;switch(n.tag){case 0:case 11:case 15:ha(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:So(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Fe=i;else t:for(n=e;Fe!==null;){i=Fe;var a=i.sibling,r=i.return;if(nv(i),i===n){Fe=null;break t}if(a!==null){a.return=r,Fe=a;break t}Fe=r}}}var fS={getCacheForType:function(e){var t=Ke(Ne),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},hS=typeof WeakMap=="function"?WeakMap:Map,ne=0,fe=null,Ht=null,kt=0,ee=0,gn=null,$i=!1,cs=!1,pd=!1,Li=0,Te=0,da=0,Va=0,md=0,On=0,jr=0,Xs=null,rn=null,wf=!1,gd=0,ec=1/0,nc=null,aa=null,Xe=0,ra=null,Jr=null,Hr=0,Df=0,Uf=null,hv=null,Ws=0,Lf=null;function Sn(){if(ne&2&&kt!==0)return kt&-kt;if(Ct.T!==null){var e=Yr;return e!==0?e:vd()}return Eg()}function dv(){On===0&&(On=!(kt&536870912)||jt?xg():536870912);var e=Pn.current;return e!==null&&(e.flags|=32),On}function Mn(e,t,n){(e===fe&&(ee===2||ee===9)||e.cancelPendingCommit!==null)&&($r(e,0),ta(e,kt,On,!1)),mo(e,n),(!(ne&2)||e!==fe)&&(e===fe&&(!(ne&2)&&(Va|=n),Te===4&&ta(e,kt,On,!1)),ri(e))}function pv(e,t,n){if(ne&6)throw Error(Z(327));var i=!n&&(t&124)===0&&(t&e.expiredLanes)===0||po(e,t),a=i?mS(e,t):uu(e,t,!0),r=i;do{if(a===0){cs&&!i&&ta(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!dS(n)){a=uu(e,t,!1),r=!1;continue}if(a===2){if(r=t,e.errorRecoveryDisabledLanes&r)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;t:{var o=e;a=Xs;var l=o.current.memoizedState.isDehydrated;if(l&&($r(o,s).flags|=256),s=uu(o,s,!1),s!==2){if(pd&&!l){o.errorRecoveryDisabledLanes|=r,Va|=r,a=4;break t}r=rn,rn=a,r!==null&&(rn===null?rn=r:rn.push.apply(rn,r))}a=s}if(r=!1,a!==2)continue}}if(a===1){$r(e,0),ta(e,t,0,!0);break}t:{switch(i=e,r=a,r){case 0:case 1:throw Error(Z(345));case 4:if((t&4194048)!==t)break;case 6:ta(i,t,On,!$i);break t;case 2:rn=null;break;case 3:case 5:break;default:throw Error(Z(329))}if((t&62914560)===t&&(a=gd+300-ti(),10<a)){if(ta(i,t,On,!$i),_c(i,0,!0)!==0)break t;i.timeoutHandle=Nv(Gp.bind(null,i,n,rn,nc,wf,t,On,Va,jr,$i,r,2,-0,0),a);break t}Gp(i,n,rn,nc,wf,t,On,Va,jr,$i,r,0,-0,0)}}break}while(!0);ri(e)}function Gp(e,t,n,i,a,r,s,o,l,c,h,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,(d&8192||(d&16785408)===16785408)&&(no={stylesheets:null,count:0,unsuspend:ZS},lv(t),d=QS(),d!==null)){e.cancelPendingCommit=d(kp.bind(null,e,t,r,n,i,a,s,o,l,h,1,f,p)),ta(e,r,s,!c);return}kp(e,t,r,n,i,a,s,o,l)}function dS(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!En(r(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ta(e,t,n,i){t&=~md,t&=~Va,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var r=31-xn(a),s=1<<r;i[r]=-1,a&=~s}n!==0&&Mg(e,n,t)}function Rc(){return ne&6?!0:(bo(0),!1)}function _d(){if(Ht!==null){if(ee===0)var e=Ht.return;else e=Ht,Mi=$a=null,id(e),Fr=null,$s=0,e=Ht;for(;e!==null;)K_(e.alternate,e),e=e.return;Ht=null}}function $r(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,US(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),_d(),fe=e,Ht=n=Ai(e.current,null),kt=t,ee=0,gn=null,$i=!1,cs=po(e,t),pd=!1,jr=On=md=Va=da=Te=0,rn=Xs=null,wf=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-xn(i),r=1<<a;t|=e[a],i&=~r}return Li=t,Mc(),n}function mv(e,t){It=null,Ct.H=Kl,t===Mo||t===Ec?(t=xp(),ee=3):t===$g?(t=xp(),ee=4):ee=t===k_?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,gn=t,Ht===null&&(Te=1,Jl(e,Nn(t,e.current)))}function gv(){var e=Ct.H;return Ct.H=Kl,e===null?Kl:e}function _v(){var e=Ct.A;return Ct.A=fS,e}function Nf(){Te=4,$i||(kt&4194048)!==kt&&Pn.current!==null||(cs=!0),!(da&134217727)&&!(Va&134217727)||fe===null||ta(fe,kt,On,!1)}function uu(e,t,n){var i=ne;ne|=2;var a=gv(),r=_v();(fe!==e||kt!==t)&&(nc=null,$r(e,t)),t=!1;var s=Te;t:do try{if(ee!==0&&Ht!==null){var o=Ht,l=gn;switch(ee){case 8:_d(),s=6;break t;case 3:case 2:case 9:case 6:Pn.current===null&&(t=!0);var c=ee;if(ee=0,gn=null,Ur(e,o,l,c),n&&cs){s=0;break t}break;default:c=ee,ee=0,gn=null,Ur(e,o,l,c)}}pS(),s=Te;break}catch(h){mv(e,h)}while(!0);return t&&e.shellSuspendCounter++,Mi=$a=null,ne=i,Ct.H=a,Ct.A=r,Ht===null&&(fe=null,kt=0,Mc()),s}function pS(){for(;Ht!==null;)vv(Ht)}function mS(e,t){var n=ne;ne|=2;var i=gv(),a=_v();fe!==e||kt!==t?(nc=null,ec=ti()+500,$r(e,t)):cs=po(e,t);t:do try{if(ee!==0&&Ht!==null){t=Ht;var r=gn;e:switch(ee){case 1:ee=0,gn=null,Ur(e,t,r,1);break;case 2:case 9:if(vp(r)){ee=0,gn=null,Vp(t);break}t=function(){ee!==2&&ee!==9||fe!==e||(ee=7),ri(e)},r.then(t,t);break t;case 3:ee=7;break t;case 4:ee=5;break t;case 7:vp(r)?(ee=0,gn=null,Vp(t)):(ee=0,gn=null,Ur(e,t,r,7));break;case 5:var s=null;switch(Ht.tag){case 26:s=Ht.memoizedState;case 5:case 27:var o=Ht;if(!s||zv(s)){ee=0,gn=null;var l=o.sibling;if(l!==null)Ht=l;else{var c=o.return;c!==null?(Ht=c,Cc(c)):Ht=null}break e}}ee=0,gn=null,Ur(e,t,r,5);break;case 6:ee=0,gn=null,Ur(e,t,r,6);break;case 8:_d(),Te=6;break t;default:throw Error(Z(462))}}gS();break}catch(h){mv(e,h)}while(!0);return Mi=$a=null,Ct.H=i,Ct.A=a,ne=n,Ht!==null?0:(fe=null,kt=0,Mc(),Te)}function gS(){for(;Ht!==null&&!I0();)vv(Ht)}function vv(e){var t=Z_(e.alternate,e,Li);e.memoizedProps=e.pendingProps,t===null?Cc(e):Ht=t}function Vp(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Pp(n,t,t.pendingProps,t.type,void 0,kt);break;case 11:t=Pp(n,t,t.pendingProps,t.type.render,t.ref,kt);break;case 5:id(t);default:K_(n,t),t=Ht=Kg(t,Li),t=Z_(n,t,Li)}e.memoizedProps=e.pendingProps,t===null?Cc(e):Ht=t}function Ur(e,t,n,i){Mi=$a=null,id(t),Fr=null,$s=0;var a=t.return;try{if(rS(e,a,t,n,kt)){Te=1,Jl(e,Nn(n,e.current)),Ht=null;return}}catch(r){if(a!==null)throw Ht=a,r;Te=1,Jl(e,Nn(n,e.current)),Ht=null;return}t.flags&32768?(jt||i===1?e=!0:cs||kt&536870912?e=!1:($i=e=!0,(i===2||i===9||i===3||i===6)&&(i=Pn.current,i!==null&&i.tag===13&&(i.flags|=16384))),xv(t,e)):Cc(t)}function Cc(e){var t=e;do{if(t.flags&32768){xv(t,$i);return}e=t.return;var n=oS(t.alternate,t,Li);if(n!==null){Ht=n;return}if(t=t.sibling,t!==null){Ht=t;return}Ht=t=e}while(t!==null);Te===0&&(Te=5)}function xv(e,t){do{var n=lS(e.alternate,e);if(n!==null){n.flags&=32767,Ht=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ht=e;return}Ht=e=n}while(e!==null);Te=6,Ht=null}function kp(e,t,n,i,a,r,s,o,l){e.cancelPendingCommit=null;do wc();while(Xe!==0);if(ne&6)throw Error(Z(327));if(t!==null){if(t===e.current)throw Error(Z(177));if(r=t.lanes|t.childLanes,r|=Xh,Z0(e,n,r,s,o,l),e===fe&&(Ht=fe=null,kt=0),Jr=t,ra=e,Hr=n,Df=r,Uf=a,hv=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,SS(Fl,function(){return Tv(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=Ct.T,Ct.T=null,a=Jt.p,Jt.p=2,s=ne,ne|=4;try{cS(e,t,n)}finally{ne=s,Jt.p=a,Ct.T=i}}Xe=1,Sv(),Mv(),yv()}}function Sv(){if(Xe===1){Xe=0;var e=ra,t=Jr,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=Ct.T,Ct.T=null;var i=Jt.p;Jt.p=2;var a=ne;ne|=4;try{rv(t,e);var r=zf,s=Gg(e.containerInfo),o=r.focusedElem,l=r.selectionRange;if(s!==o&&o&&o.ownerDocument&&Hg(o.ownerDocument.documentElement,o)){if(l!==null&&kh(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var d=o.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),S=o.textContent.length,y=Math.min(l.start,S),g=l.end===void 0?y:Math.min(l.end,S);!p.extend&&y>g&&(s=g,g=y,y=s);var u=up(o,y),m=up(o,g);if(u&&m&&(p.rangeCount!==1||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==m.node||p.focusOffset!==m.offset)){var _=d.createRange();_.setStart(u.node,u.offset),p.removeAllRanges(),y>g?(p.addRange(_),p.extend(m.node,m.offset)):(_.setEnd(m.node,m.offset),p.addRange(_))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var v=d[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}uc=!!Bf,zf=Bf=null}finally{ne=a,Jt.p=i,Ct.T=n}}e.current=t,Xe=2}}function Mv(){if(Xe===2){Xe=0;var e=ra,t=Jr,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=Ct.T,Ct.T=null;var i=Jt.p;Jt.p=2;var a=ne;ne|=4;try{ev(e,t.alternate,t)}finally{ne=a,Jt.p=i,Ct.T=n}}Xe=3}}function yv(){if(Xe===4||Xe===3){Xe=0,F0();var e=ra,t=Jr,n=Hr,i=hv;t.subtreeFlags&10256||t.flags&10256?Xe=5:(Xe=0,Jr=ra=null,Ev(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(aa=null),Bh(n),t=t.stateNode,vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(ho,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Ct.T,a=Jt.p,Jt.p=2,Ct.T=null;try{for(var r=e.onRecoverableError,s=0;s<i.length;s++){var o=i[s];r(o.value,{componentStack:o.stack})}}finally{Ct.T=t,Jt.p=a}}Hr&3&&wc(),ri(e),a=e.pendingLanes,n&4194090&&a&42?e===Lf?Ws++:(Ws=0,Lf=e):Ws=0,bo(0)}}function Ev(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,So(t)))}function wc(e){return Sv(),Mv(),yv(),Tv()}function Tv(){if(Xe!==5)return!1;var e=ra,t=Df;Df=0;var n=Bh(Hr),i=Ct.T,a=Jt.p;try{Jt.p=32>n?32:n,Ct.T=null,n=Uf,Uf=null;var r=ra,s=Hr;if(Xe=0,Jr=ra=null,Hr=0,ne&6)throw Error(Z(331));var o=ne;if(ne|=4,uv(r.current),ov(r,r.current,s,n),ne=o,bo(0,!1),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(ho,r)}catch{}return!0}finally{Jt.p=a,Ct.T=i,Ev(e,t)}}function Xp(e,t,n){t=Nn(n,t),t=bf(e.stateNode,t,2),e=ia(e,t,2),e!==null&&(mo(e,2),ri(e))}function ce(e,t,n){if(e.tag===3)Xp(e,e,n);else for(;t!==null;){if(t.tag===3){Xp(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(aa===null||!aa.has(i))){e=Nn(n,e),n=G_(2),i=ia(t,n,2),i!==null&&(V_(n,i,t,e),mo(i,2),ri(i));break}}t=t.return}}function fu(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new hS;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(pd=!0,a.add(n),e=_S.bind(null,e,t,n),t.then(e,e))}function _S(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,fe===e&&(kt&n)===n&&(Te===4||Te===3&&(kt&62914560)===kt&&300>ti()-gd?!(ne&2)&&$r(e,0):md|=n,jr===kt&&(jr=0)),ri(e)}function bv(e,t){t===0&&(t=Sg()),e=ls(e,t),e!==null&&(mo(e,t),ri(e))}function vS(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bv(e,n)}function xS(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(Z(314))}i!==null&&i.delete(t),bv(e,n)}function SS(e,t){return Oh(e,t)}var ic=null,xr=null,Of=!1,ac=!1,hu=!1,ka=0;function ri(e){e!==xr&&e.next===null&&(xr===null?ic=xr=e:xr=xr.next=e),ac=!0,Of||(Of=!0,yS())}function bo(e,t){if(!hu&&ac){hu=!0;do for(var n=!1,i=ic;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var r=0;else{var s=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-xn(42|e)+1)-1,r&=a&~(s&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Wp(i,r))}else r=kt,r=_c(i,i===fe?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(r&3)||po(i,r)||(n=!0,Wp(i,r));i=i.next}while(n);hu=!1}}function MS(){Av()}function Av(){ac=Of=!1;var e=0;ka!==0&&(DS()&&(e=ka),ka=0);for(var t=ti(),n=null,i=ic;i!==null;){var a=i.next,r=Rv(i,t);r===0?(i.next=null,n===null?ic=a:n.next=a,a===null&&(xr=n)):(n=i,(e!==0||r&3)&&(ac=!0)),i=a}bo(e)}function Rv(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var s=31-xn(r),o=1<<s,l=a[s];l===-1?(!(o&n)||o&i)&&(a[s]=Y0(o,t)):l<=t&&(e.expiredLanes|=o),r&=~o}if(t=fe,n=kt,n=_c(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ee===2||ee===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Ic(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||po(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Ic(i),Bh(n)){case 2:case 8:n=_g;break;case 32:n=Fl;break;case 268435456:n=vg;break;default:n=Fl}return i=Cv.bind(null,e),n=Oh(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Ic(i),e.callbackPriority=2,e.callbackNode=null,2}function Cv(e,t){if(Xe!==0&&Xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(wc()&&e.callbackNode!==n)return null;var i=kt;return i=_c(e,e===fe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(pv(e,i,t),Rv(e,ti()),e.callbackNode!=null&&e.callbackNode===n?Cv.bind(null,e):null)}function Wp(e,t){if(wc())return null;pv(e,t,!0)}function yS(){LS(function(){ne&6?Oh(gg,MS):Av()})}function vd(){return ka===0&&(ka=xg()),ka}function qp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vl(""+e)}function Yp(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function ES(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var r=qp((a[ln]||null).action),s=i.submitter;s&&(t=(t=s[ln]||null)?qp(t.formAction):s.getAttribute("formAction"),t!==null&&(r=t,s=null));var o=new vc("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ka!==0){var l=s?Yp(a,s):new FormData(a);Ef(n,{pending:!0,data:l,method:a.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=s?Yp(a,s):new FormData(a),Ef(n,{pending:!0,data:l,method:a.method,action:r},r,l))},currentTarget:a}]})}}for(var du=0;du<ff.length;du++){var pu=ff[du],TS=pu.toLowerCase(),bS=pu[0].toUpperCase()+pu.slice(1);Yn(TS,"on"+bS)}Yn(kg,"onAnimationEnd");Yn(Xg,"onAnimationIteration");Yn(Wg,"onAnimationStart");Yn("dblclick","onDoubleClick");Yn("focusin","onFocus");Yn("focusout","onBlur");Yn(Vx,"onTransitionRun");Yn(kx,"onTransitionStart");Yn(Xx,"onTransitionCancel");Yn(qg,"onTransitionEnd");Wr("onMouseEnter",["mouseout","mouseover"]);Wr("onMouseLeave",["mouseout","mouseover"]);Wr("onPointerEnter",["pointerout","pointerover"]);Wr("onPointerLeave",["pointerout","pointerover"]);Qa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qa("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var to="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(to));function wv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var r=void 0;if(t)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&a.isPropagationStopped())break t;r=o,a.currentTarget=c;try{r(a)}catch(h){jl(h)}a.currentTarget=null,r=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&a.isPropagationStopped())break t;r=o,a.currentTarget=c;try{r(a)}catch(h){jl(h)}a.currentTarget=null,r=l}}}}function Ft(e,t){var n=t[af];n===void 0&&(n=t[af]=new Set);var i=e+"__bubble";n.has(i)||(Dv(t,e,2,!1),n.add(i))}function mu(e,t,n){var i=0;t&&(i|=4),Dv(n,e,i,t)}var Wo="_reactListening"+Math.random().toString(36).slice(2);function xd(e){if(!e[Wo]){e[Wo]=!0,Tg.forEach(function(n){n!=="selectionchange"&&(AS.has(n)||mu(n,!1,e),mu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wo]||(t[Wo]=!0,mu("selectionchange",!1,t))}}function Dv(e,t,n,i){switch(Vv(t)){case 2:var a=$S;break;case 8:a=tM;break;default:a=Ed}n=a.bind(null,t,n,e),a=void 0,!lf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function gu(e,t,n,i,a){var r=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;o!==null;){if(s=yr(o),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){i=r=s;continue t}o=o.parentNode}}i=i.return}Lg(function(){var c=r,h=Fh(n),d=[];t:{var f=Yg.get(e);if(f!==void 0){var p=vc,S=e;switch(e){case"keypress":if(Sl(n)===0)break t;case"keydown":case"keyup":p=Sx;break;case"focusin":S="focus",p=qc;break;case"focusout":S="blur",p=qc;break;case"beforeblur":case"afterblur":p=qc;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=lx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Ex;break;case kg:case Xg:case Wg:p=fx;break;case qg:p=bx;break;case"scroll":case"scrollend":p=sx;break;case"wheel":p=Rx;break;case"copy":case"cut":case"paste":p=dx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=np;break;case"toggle":case"beforetoggle":p=wx}var y=(t&4)!==0,g=!y&&(e==="scroll"||e==="scrollend"),u=y?f!==null?f+"Capture":null:f;y=[];for(var m=c,_;m!==null;){var v=m;if(_=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||_===null||u===null||(v=Zs(m,u),v!=null&&y.push(eo(m,v,_))),g)break;m=m.return}0<y.length&&(f=new p(f,S,null,n,h),d.push({event:f,listeners:y}))}}if(!(t&7)){t:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==of&&(S=n.relatedTarget||n.fromElement)&&(yr(S)||S[ss]))break t;if((p||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,p?(S=n.relatedTarget||n.toElement,p=c,S=S?yr(S):null,S!==null&&(g=fo(S),y=S.tag,S!==g||y!==5&&y!==27&&y!==6)&&(S=null)):(p=null,S=c),p!==S)){if(y=tp,v="onMouseLeave",u="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(y=np,v="onPointerLeave",u="onPointerEnter",m="pointer"),g=p==null?f:Ds(p),_=S==null?f:Ds(S),f=new y(v,m+"leave",p,n,h),f.target=g,f.relatedTarget=_,v=null,yr(h)===c&&(y=new y(u,m+"enter",S,n,h),y.target=_,y.relatedTarget=g,v=y),g=v,p&&S)e:{for(y=p,u=S,m=0,_=y;_;_=nr(_))m++;for(_=0,v=u;v;v=nr(v))_++;for(;0<m-_;)y=nr(y),m--;for(;0<_-m;)u=nr(u),_--;for(;m--;){if(y===u||u!==null&&y===u.alternate)break e;y=nr(y),u=nr(u)}y=null}else y=null;p!==null&&Zp(d,f,p,y,!1),S!==null&&g!==null&&Zp(d,g,S,y,!0)}}t:{if(f=c?Ds(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=sp;else if(rp(f))if(Ig)C=Fx;else{C=zx;var A=Bx}else p=f.nodeName,!p||p.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&Ih(c.elementType)&&(C=sp):C=Ix;if(C&&(C=C(e,c))){zg(d,C,n,h);break t}A&&A(e,f,c),e==="focusout"&&c&&f.type==="number"&&c.memoizedProps.value!=null&&sf(f,"number",f.value)}switch(A=c?Ds(c):window,e){case"focusin":(rp(A)||A.contentEditable==="true")&&(br=A,cf=c,Ps=null);break;case"focusout":Ps=cf=br=null;break;case"mousedown":uf=!0;break;case"contextmenu":case"mouseup":case"dragend":uf=!1,fp(d,n,h);break;case"selectionchange":if(Gx)break;case"keydown":case"keyup":fp(d,n,h)}var b;if(Vh)t:{switch(e){case"compositionstart":var w="onCompositionStart";break t;case"compositionend":w="onCompositionEnd";break t;case"compositionupdate":w="onCompositionUpdate";break t}w=void 0}else Tr?Pg(e,n)&&(w="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(Og&&n.locale!=="ko"&&(Tr||w!=="onCompositionStart"?w==="onCompositionEnd"&&Tr&&(b=Ng()):(Ji=h,Hh="value"in Ji?Ji.value:Ji.textContent,Tr=!0)),A=rc(c,w),0<A.length&&(w=new ep(w,e,null,n,h),d.push({event:w,listeners:A}),b?w.data=b:(b=Bg(n),b!==null&&(w.data=b)))),(b=Ux?Lx(e,n):Nx(e,n))&&(w=rc(c,"onBeforeInput"),0<w.length&&(A=new ep("onBeforeInput","beforeinput",null,n,h),d.push({event:A,listeners:w}),A.data=b)),ES(d,e,c,n,h)}wv(d,t)})}function eo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function rc(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=Zs(e,n),a!=null&&i.unshift(eo(e,a,r)),a=Zs(e,t),a!=null&&i.push(eo(e,a,r))),e.tag===3)return i;e=e.return}return[]}function nr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Zp(e,t,n,i,a){for(var r=t._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=Zs(n,r),c!=null&&s.unshift(eo(n,c,l))):a||(c=Zs(n,r),c!=null&&s.push(eo(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var RS=/\r\n?/g,CS=/\u0000|\uFFFD/g;function Kp(e){return(typeof e=="string"?e:""+e).replace(RS,`
`).replace(CS,"")}function Uv(e,t){return t=Kp(t),Kp(e)===t}function Dc(){}function re(e,t,n,i,a,r){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||qr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&qr(e,""+i);break;case"className":Io(e,"class",i);break;case"tabIndex":Io(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Io(e,n,i);break;case"style":Ug(e,i,r);break;case"data":if(t!=="object"){Io(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=vl(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&re(e,t,"name",a.name,a,null),re(e,t,"formEncType",a.formEncType,a,null),re(e,t,"formMethod",a.formMethod,a,null),re(e,t,"formTarget",a.formTarget,a,null)):(re(e,t,"encType",a.encType,a,null),re(e,t,"method",a.method,a,null),re(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=vl(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Dc);break;case"onScroll":i!=null&&Ft("scroll",e);break;case"onScrollEnd":i!=null&&Ft("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Z(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(Z(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=vl(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Ft("beforetoggle",e),Ft("toggle",e),_l(e,"popover",i);break;case"xlinkActuate":oi(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":oi(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":oi(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":oi(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":oi(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":oi(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":oi(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":oi(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":oi(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":_l(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=ax.get(n)||n,_l(e,n,i))}}function Pf(e,t,n,i,a,r){switch(n){case"style":Ug(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Z(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(Z(60));e.innerHTML=n}}break;case"children":typeof i=="string"?qr(e,i):(typeof i=="number"||typeof i=="bigint")&&qr(e,""+i);break;case"onScroll":i!=null&&Ft("scroll",e);break;case"onScrollEnd":i!=null&&Ft("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Dc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!bg.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),r=e[ln]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,a),typeof i=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):_l(e,n,i)}}}function We(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ft("error",e),Ft("load",e);var i=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(s!=null)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Z(137,t));default:re(e,t,r,s,n,null)}}a&&re(e,t,"srcSet",n.srcSet,n,null),i&&re(e,t,"src",n.src,n,null);return;case"input":Ft("invalid",e);var o=r=s=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":a=h;break;case"type":s=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":r=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(Z(137,t));break;default:re(e,t,i,h,n,null)}}Cg(e,r,o,l,c,s,a,!1),Hl(e);return;case"select":Ft("invalid",e),i=s=r=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":r=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:re(e,t,a,o,n,null)}t=r,n=s,e.multiple=!!i,t!=null?Or(e,!!i,t,!1):n!=null&&Or(e,!!i,n,!0);return;case"textarea":Ft("invalid",e),r=a=i=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":i=o;break;case"defaultValue":a=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(Z(91));break;default:re(e,t,s,o,n,null)}Dg(e,i,a,r),Hl(e);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:re(e,t,l,i,n,null)}return;case"dialog":Ft("beforetoggle",e),Ft("toggle",e),Ft("cancel",e),Ft("close",e);break;case"iframe":case"object":Ft("load",e);break;case"video":case"audio":for(i=0;i<to.length;i++)Ft(to[i],e);break;case"image":Ft("error",e),Ft("load",e);break;case"details":Ft("toggle",e);break;case"embed":case"source":case"link":Ft("error",e),Ft("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(Z(137,t));default:re(e,t,c,i,n,null)}return;default:if(Ih(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&Pf(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&re(e,t,o,i,n,null))}function wS(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,s=null,o=null,l=null,c=null,h=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||re(e,t,p,null,i,d)}}for(var f in i){var p=i[f];if(d=n[f],i.hasOwnProperty(f)&&(p!=null||d!=null))switch(f){case"type":r=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":h=p;break;case"value":s=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(Z(137,t));break;default:p!==d&&re(e,t,f,p,i,d)}}rf(e,s,o,l,c,h,r,a);return;case"select":p=s=o=f=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(r)||re(e,t,r,null,i,l)}for(a in i)if(r=i[a],l=n[a],i.hasOwnProperty(a)&&(r!=null||l!=null))switch(a){case"value":f=r;break;case"defaultValue":o=r;break;case"multiple":s=r;default:r!==l&&re(e,t,a,r,i,l)}t=o,n=s,i=p,f!=null?Or(e,!!n,f,!1):!!i!=!!n&&(t!=null?Or(e,!!n,t,!0):Or(e,!!n,n?[]:"",!1));return;case"textarea":p=f=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:re(e,t,o,null,i,a)}for(s in i)if(a=i[s],r=n[s],i.hasOwnProperty(s)&&(a!=null||r!=null))switch(s){case"value":f=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(Z(91));break;default:a!==r&&re(e,t,s,a,i,r)}wg(e,f,p);return;case"option":for(var S in n)if(f=n[S],n.hasOwnProperty(S)&&f!=null&&!i.hasOwnProperty(S))switch(S){case"selected":e.selected=!1;break;default:re(e,t,S,null,i,f)}for(l in i)if(f=i[l],p=n[l],i.hasOwnProperty(l)&&f!==p&&(f!=null||p!=null))switch(l){case"selected":e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:re(e,t,l,f,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var y in n)f=n[y],n.hasOwnProperty(y)&&f!=null&&!i.hasOwnProperty(y)&&re(e,t,y,null,i,f);for(c in i)if(f=i[c],p=n[c],i.hasOwnProperty(c)&&f!==p&&(f!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(Z(137,t));break;default:re(e,t,c,f,i,p)}return;default:if(Ih(t)){for(var g in n)f=n[g],n.hasOwnProperty(g)&&f!==void 0&&!i.hasOwnProperty(g)&&Pf(e,t,g,void 0,i,f);for(h in i)f=i[h],p=n[h],!i.hasOwnProperty(h)||f===p||f===void 0&&p===void 0||Pf(e,t,h,f,i,p);return}}for(var u in n)f=n[u],n.hasOwnProperty(u)&&f!=null&&!i.hasOwnProperty(u)&&re(e,t,u,null,i,f);for(d in i)f=i[d],p=n[d],!i.hasOwnProperty(d)||f===p||f==null&&p==null||re(e,t,d,f,i,p)}var Bf=null,zf=null;function sc(e){return e.nodeType===9?e:e.ownerDocument}function Qp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Lv(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function If(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _u=null;function DS(){var e=window.event;return e&&e.type==="popstate"?e===_u?!1:(_u=e,!0):(_u=null,!1)}var Nv=typeof setTimeout=="function"?setTimeout:void 0,US=typeof clearTimeout=="function"?clearTimeout:void 0,jp=typeof Promise=="function"?Promise:void 0,LS=typeof queueMicrotask=="function"?queueMicrotask:typeof jp<"u"?function(e){return jp.resolve(null).then(e).catch(NS)}:Nv;function NS(e){setTimeout(function(){throw e})}function _a(e){return e==="head"}function Jp(e,t){var n=t,i=0,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<i&&8>i){n=i;var s=e.ownerDocument;if(n&1&&qs(s.documentElement),n&2&&qs(s.body),n&4)for(n=s.head,qs(n),s=n.firstChild;s;){var o=s.nextSibling,l=s.nodeName;s[go]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=o}}if(a===0){e.removeChild(r),so(t);return}a--}else n==="$"||n==="$?"||n==="$!"?a++:i=n.charCodeAt(0)-48;else i=0;n=r}while(n);so(t)}function Ff(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ff(n),zh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function OS(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[go])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Wn(e.nextSibling),e===null)break}return null}function PS(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Wn(e.nextSibling),e===null))return null;return e}function Hf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function BS(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Wn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Gf=null;function $p(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Ov(e,t,n){switch(t=sc(n),e){case"html":if(e=t.documentElement,!e)throw Error(Z(452));return e;case"head":if(e=t.head,!e)throw Error(Z(453));return e;case"body":if(e=t.body,!e)throw Error(Z(454));return e;default:throw Error(Z(451))}}function qs(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);zh(e)}var Bn=new Map,tm=new Set;function oc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Pi=Jt.d;Jt.d={f:zS,r:IS,D:FS,C:HS,L:GS,m:VS,X:XS,S:kS,M:WS};function zS(){var e=Pi.f(),t=Rc();return e||t}function IS(e){var t=os(e);t!==null&&t.tag===5&&t.type==="form"?R_(t):Pi.r(e)}var us=typeof document>"u"?null:document;function Pv(e,t,n){var i=us;if(i&&typeof t=="string"&&t){var a=Ln(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),tm.has(a)||(tm.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),We(t,"link",e),He(t),i.head.appendChild(t)))}}function FS(e){Pi.D(e),Pv("dns-prefetch",e,null)}function HS(e,t){Pi.C(e,t),Pv("preconnect",e,t)}function GS(e,t,n){Pi.L(e,t,n);var i=us;if(i&&e&&t){var a='link[rel="preload"][as="'+Ln(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Ln(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Ln(n.imageSizes)+'"]')):a+='[href="'+Ln(e)+'"]';var r=a;switch(t){case"style":r=ts(e);break;case"script":r=fs(e)}Bn.has(r)||(e=pe({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Bn.set(r,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(Ao(r))||t==="script"&&i.querySelector(Ro(r))||(t=i.createElement("link"),We(t,"link",e),He(t),i.head.appendChild(t)))}}function VS(e,t){Pi.m(e,t);var n=us;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Ln(i)+'"][href="'+Ln(e)+'"]',r=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=fs(e)}if(!Bn.has(r)&&(e=pe({rel:"modulepreload",href:e},t),Bn.set(r,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ro(r)))return}i=n.createElement("link"),We(i,"link",e),He(i),n.head.appendChild(i)}}}function kS(e,t,n){Pi.S(e,t,n);var i=us;if(i&&e){var a=Nr(i).hoistableStyles,r=ts(e);t=t||"default";var s=a.get(r);if(!s){var o={loading:0,preload:null};if(s=i.querySelector(Ao(r)))o.loading=5;else{e=pe({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Bn.get(r))&&Sd(e,n);var l=s=i.createElement("link");He(l),We(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Rl(s,t,i)}s={type:"stylesheet",instance:s,count:1,state:o},a.set(r,s)}}}function XS(e,t){Pi.X(e,t);var n=us;if(n&&e){var i=Nr(n).hoistableScripts,a=fs(e),r=i.get(a);r||(r=n.querySelector(Ro(a)),r||(e=pe({src:e,async:!0},t),(t=Bn.get(a))&&Md(e,t),r=n.createElement("script"),He(r),We(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function WS(e,t){Pi.M(e,t);var n=us;if(n&&e){var i=Nr(n).hoistableScripts,a=fs(e),r=i.get(a);r||(r=n.querySelector(Ro(a)),r||(e=pe({src:e,async:!0,type:"module"},t),(t=Bn.get(a))&&Md(e,t),r=n.createElement("script"),He(r),We(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function em(e,t,n,i){var a=(a=ea.current)?oc(a):null;if(!a)throw Error(Z(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ts(n.href),n=Nr(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ts(n.href);var r=Nr(a).hoistableStyles,s=r.get(e);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,s),(r=a.querySelector(Ao(e)))&&!r._p&&(s.instance=r,s.state.loading=5),Bn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Bn.set(e,n),r||qS(a,e,n,s.state))),t&&i===null)throw Error(Z(528,""));return s}if(t&&i!==null)throw Error(Z(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=fs(n),n=Nr(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(Z(444,e))}}function ts(e){return'href="'+Ln(e)+'"'}function Ao(e){return'link[rel="stylesheet"]['+e+"]"}function Bv(e){return pe({},e,{"data-precedence":e.precedence,precedence:null})}function qS(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),We(t,"link",n),He(t),e.head.appendChild(t))}function fs(e){return'[src="'+Ln(e)+'"]'}function Ro(e){return"script[async]"+e}function nm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Ln(n.href)+'"]');if(i)return t.instance=i,He(i),i;var a=pe({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),He(i),We(i,"style",a),Rl(i,n.precedence,e),t.instance=i;case"stylesheet":a=ts(n.href);var r=e.querySelector(Ao(a));if(r)return t.state.loading|=4,t.instance=r,He(r),r;i=Bv(n),(a=Bn.get(a))&&Sd(i,a),r=(e.ownerDocument||e).createElement("link"),He(r);var s=r;return s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),We(r,"link",i),t.state.loading|=4,Rl(r,n.precedence,e),t.instance=r;case"script":return r=fs(n.src),(a=e.querySelector(Ro(r)))?(t.instance=a,He(a),a):(i=n,(a=Bn.get(r))&&(i=pe({},n),Md(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),He(a),We(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(Z(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,Rl(i,n.precedence,e));return t.instance}function Rl(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,r=a,s=0;s<i.length;s++){var o=i[s];if(o.dataset.precedence===t)r=o;else if(r!==a)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Sd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Md(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Cl=null;function im(e,t,n){if(Cl===null){var i=new Map,a=Cl=new Map;a.set(n,i)}else a=Cl,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var r=n[a];if(!(r[go]||r[Ze]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(t)||"";s=e+s;var o=i.get(s);o?o.push(r):i.set(s,[r])}}return i}function am(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function YS(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function zv(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}var no=null;function ZS(){}function KS(e,t,n){if(no===null)throw Error(Z(475));var i=no;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(t.state.loading&4)){if(t.instance===null){var a=ts(n.href),r=e.querySelector(Ao(a));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=lc.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=r,He(r);return}r=e.ownerDocument||e,n=Bv(n),(a=Bn.get(a))&&Sd(n,a),r=r.createElement("link"),He(r);var s=r;s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),We(r,"link",n),t.instance=r}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&!(t.state.loading&3)&&(i.count++,t=lc.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function QS(){if(no===null)throw Error(Z(475));var e=no;return e.stylesheets&&e.count===0&&Vf(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Vf(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function lc(){if(this.count--,this.count===0){if(this.stylesheets)Vf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var cc=null;function Vf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,cc=new Map,t.forEach(jS,e),cc=null,lc.call(e))}function jS(e,t){if(!(t.state.loading&4)){var n=cc.get(e);if(n)var i=n.get(null);else{n=new Map,cc.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var s=a[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}a=t.instance,s=a.getAttribute("data-precedence"),r=n.get(s)||i,r===i&&n.set(null,a),n.set(s,a),this.count++,i=lc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),r?r.parentNode.insertBefore(a,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var io={$$typeof:vi,Provider:null,Consumer:null,_currentValue:za,_currentValue2:za,_threadCount:0};function JS(e,t,n,i,a,r,s,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Fc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fc(0),this.hiddenUpdates=Fc(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function Iv(e,t,n,i,a,r,s,o,l,c,h,d){return e=new JS(e,t,n,s,o,l,c,d),t=1,r===!0&&(t|=24),r=_n(3,null,null,t),e.current=r,r.stateNode=e,t=Kh(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:t},jh(r),e}function Fv(e){return e?(e=Cr,e):Cr}function Hv(e,t,n,i,a,r){a=Fv(a),i.context===null?i.context=a:i.pendingContext=a,i=na(t),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=ia(e,i,t),n!==null&&(Mn(n,e,t),Is(n,e,t))}function rm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yd(e,t){rm(e,t),(e=e.alternate)&&rm(e,t)}function Gv(e){if(e.tag===13){var t=ls(e,67108864);t!==null&&Mn(t,e,67108864),yd(e,67108864)}}var uc=!0;function $S(e,t,n,i){var a=Ct.T;Ct.T=null;var r=Jt.p;try{Jt.p=2,Ed(e,t,n,i)}finally{Jt.p=r,Ct.T=a}}function tM(e,t,n,i){var a=Ct.T;Ct.T=null;var r=Jt.p;try{Jt.p=8,Ed(e,t,n,i)}finally{Jt.p=r,Ct.T=a}}function Ed(e,t,n,i){if(uc){var a=kf(i);if(a===null)gu(e,t,i,fc,n),sm(e,i);else if(nM(a,e,t,n,i))i.stopPropagation();else if(sm(e,i),t&4&&-1<eM.indexOf(e)){for(;a!==null;){var r=os(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=Ca(r.pendingLanes);if(s!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var l=1<<31-xn(s);o.entanglements[1]|=l,s&=~l}ri(r),!(ne&6)&&(ec=ti()+500,bo(0))}}break;case 13:o=ls(r,2),o!==null&&Mn(o,r,2),Rc(),yd(r,2)}if(r=kf(i),r===null&&gu(e,t,i,fc,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else gu(e,t,i,null,n)}}function kf(e){return e=Fh(e),Td(e)}var fc=null;function Td(e){if(fc=null,e=yr(e),e!==null){var t=fo(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=hg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fc=e,null}function Vv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(H0()){case gg:return 2;case _g:return 8;case Fl:case G0:return 32;case vg:return 268435456;default:return 32}default:return 32}}var Xf=!1,sa=null,oa=null,la=null,ao=new Map,ro=new Map,Ki=[],eM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sm(e,t){switch(e){case"focusin":case"focusout":sa=null;break;case"dragenter":case"dragleave":oa=null;break;case"mouseover":case"mouseout":la=null;break;case"pointerover":case"pointerout":ao.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ro.delete(t.pointerId)}}function ys(e,t,n,i,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},t!==null&&(t=os(t),t!==null&&Gv(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function nM(e,t,n,i,a){switch(t){case"focusin":return sa=ys(sa,e,t,n,i,a),!0;case"dragenter":return oa=ys(oa,e,t,n,i,a),!0;case"mouseover":return la=ys(la,e,t,n,i,a),!0;case"pointerover":var r=a.pointerId;return ao.set(r,ys(ao.get(r)||null,e,t,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,ro.set(r,ys(ro.get(r)||null,e,t,n,i,a)),!0}return!1}function kv(e){var t=yr(e.target);if(t!==null){var n=fo(t);if(n!==null){if(t=n.tag,t===13){if(t=hg(n),t!==null){e.blockedOn=t,K0(e.priority,function(){if(n.tag===13){var i=Sn();i=Ph(i);var a=ls(n,i);a!==null&&Mn(a,n,i),yd(n,i)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=kf(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);of=i,n.target.dispatchEvent(i),of=null}else return t=os(n),t!==null&&Gv(t),e.blockedOn=n,!1;t.shift()}return!0}function om(e,t,n){wl(e)&&n.delete(t)}function iM(){Xf=!1,sa!==null&&wl(sa)&&(sa=null),oa!==null&&wl(oa)&&(oa=null),la!==null&&wl(la)&&(la=null),ao.forEach(om),ro.forEach(om)}function qo(e,t){e.blockedOn===t&&(e.blockedOn=null,Xf||(Xf=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,iM)))}var Yo=null;function lm(e){Yo!==e&&(Yo=e,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,function(){Yo===e&&(Yo=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(Td(i||n)===null)continue;break}var r=os(n);r!==null&&(e.splice(t,3),t-=3,Ef(r,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function so(e){function t(l){return qo(l,e)}sa!==null&&qo(sa,e),oa!==null&&qo(oa,e),la!==null&&qo(la,e),ao.forEach(t),ro.forEach(t);for(var n=0;n<Ki.length;n++){var i=Ki[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ki.length&&(n=Ki[0],n.blockedOn===null);)kv(n),n.blockedOn===null&&Ki.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],r=n[i+1],s=a[ln]||null;if(typeof r=="function")s||lm(n);else if(s){var o=null;if(r&&r.hasAttribute("formAction")){if(a=r,s=r[ln]||null)o=s.formAction;else if(Td(a)!==null)continue}else o=s.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),lm(n)}}}function bd(e){this._internalRoot=e}Uc.prototype.render=bd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Z(409));var n=t.current,i=Sn();Hv(n,i,e,t,null,null)};Uc.prototype.unmount=bd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hv(e.current,2,null,e,null,null),Rc(),t[ss]=null}};function Uc(e){this._internalRoot=e}Uc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Eg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ki.length&&t!==0&&t<Ki[n].priority;n++);Ki.splice(n,0,e),n===0&&kv(e)}};var cm=ug.version;if(cm!=="19.1.0")throw Error(Z(527,cm,"19.1.0"));Jt.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Z(188)):(e=Object.keys(e).join(","),Error(Z(268,e)));return e=N0(t),e=e!==null?dg(e):null,e=e===null?null:e.stateNode,e};var aM={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Ct,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zo.isDisabled&&Zo.supportsFiber)try{ho=Zo.inject(aM),vn=Zo}catch{}}gc.createRoot=function(e,t){if(!fg(e))throw Error(Z(299));var n=!1,i="",a=I_,r=F_,s=H_,o=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(o=t.unstable_transitionCallbacks)),t=Iv(e,1,!1,null,null,n,i,a,r,s,o,null),e[ss]=t.current,xd(e),new bd(t)};gc.hydrateRoot=function(e,t,n){if(!fg(e))throw Error(Z(299));var i=!1,a="",r=I_,s=F_,o=H_,l=null,c=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(l=n.unstable_transitionCallbacks),n.formState!==void 0&&(c=n.formState)),t=Iv(e,1,!0,t,n??null,i,a,r,s,o,l,c),t.context=Fv(null),n=t.current,i=Sn(),i=Ph(i),a=na(i),a.callback=null,ia(n,a,i),n=i,t.current.lanes=n,mo(t,n),ri(t),e[ss]=t.current,xd(e),new Uc(t)};gc.version="19.1.0";function Xv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xv)}catch(e){console.error(e)}}Xv(),og.exports=gc;var p1=og.exports;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ad="178",rM=0,um=1,sM=2,Wv=1,oM=2,mi=3,pa=0,sn=1,_i=2,ca=0,Gr=1,fm=2,hm=3,dm=4,lM=5,Na=100,cM=101,uM=102,fM=103,hM=104,dM=200,pM=201,mM=202,gM=203,Wf=204,qf=205,_M=206,vM=207,xM=208,SM=209,MM=210,yM=211,EM=212,TM=213,bM=214,Yf=0,Zf=1,Kf=2,es=3,Qf=4,jf=5,Jf=6,$f=7,qv=0,AM=1,RM=2,ua=0,CM=1,wM=2,DM=3,UM=4,LM=5,NM=6,OM=7,Yv=300,ns=301,is=302,th=303,eh=304,Lc=306,nh=1e3,Pa=1001,ih=1002,qn=1003,PM=1004,Ko=1005,Jn=1006,vu=1007,Ba=1008,Ni=1009,Zv=1010,Kv=1011,oo=1012,Rd=1013,Za=1014,Ei=1015,Co=1016,Cd=1017,wd=1018,lo=1020,Qv=35902,jv=1021,Jv=1022,Xn=1023,co=1026,uo=1027,$v=1028,Dd=1029,t0=1030,Ud=1031,Ld=1033,Dl=33776,Ul=33777,Ll=33778,Nl=33779,ah=35840,rh=35841,sh=35842,oh=35843,lh=36196,ch=37492,uh=37496,fh=37808,hh=37809,dh=37810,ph=37811,mh=37812,gh=37813,_h=37814,vh=37815,xh=37816,Sh=37817,Mh=37818,yh=37819,Eh=37820,Th=37821,Ol=36492,bh=36494,Ah=36495,e0=36283,Rh=36284,Ch=36285,wh=36286,BM=3200,zM=3201,IM=0,FM=1,Qi="",Cn="srgb",as="srgb-linear",hc="linear",ae="srgb",ir=7680,pm=519,HM=512,GM=513,VM=514,n0=515,kM=516,XM=517,WM=518,qM=519,mm=35044,gm="300 es",Ti=2e3,dc=2001;class hs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,t);t.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xu=Math.PI/180,Dh=180/Math.PI;function wo(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qe[e&255]+qe[e>>8&255]+qe[e>>16&255]+qe[e>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[n&63|128]+qe[n>>8&255]+"-"+qe[n>>16&255]+qe[n>>24&255]+qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]).toLowerCase()}function Vt(e,t,n){return Math.max(t,Math.min(n,e))}function YM(e,t){return(e%t+t)%t}function Su(e,t,n){return(1-n)*e+n*t}function Es(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function en(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}class $t{constructor(t=0,n=0){$t.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Vt(this.x,t.x,n.x),this.y=Vt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Vt(this.x,t,n),this.y=Vt(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Vt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),r=this.x-t.x,s=this.y-t.y;return this.x=r*i-s*a+t.x,this.y=r*a+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Do{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,r,s,o){let l=i[a+0],c=i[a+1],h=i[a+2],d=i[a+3];const f=r[s+0],p=r[s+1],S=r[s+2],y=r[s+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d;return}if(o===1){t[n+0]=f,t[n+1]=p,t[n+2]=S,t[n+3]=y;return}if(d!==y||l!==f||c!==p||h!==S){let g=1-o;const u=l*f+c*p+h*S+d*y,m=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const C=Math.sqrt(_),A=Math.atan2(C,u*m);g=Math.sin(g*A)/C,o=Math.sin(o*A)/C}const v=o*m;if(l=l*g+f*v,c=c*g+p*v,h=h*g+S*v,d=d*g+y*v,g===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,a,r,s){const o=i[a],l=i[a+1],c=i[a+2],h=i[a+3],d=r[s],f=r[s+1],p=r[s+2],S=r[s+3];return t[n]=o*S+h*d+l*p-c*f,t[n+1]=l*S+h*f+c*d-o*p,t[n+2]=c*S+h*p+o*f-l*d,t[n+3]=h*S-o*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,r=t._z,s=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(a/2),d=o(r/2),f=l(i/2),p=l(a/2),S=l(r/2);switch(s){case"XYZ":this._x=f*h*d+c*p*S,this._y=c*p*d-f*h*S,this._z=c*h*S+f*p*d,this._w=c*h*d-f*p*S;break;case"YXZ":this._x=f*h*d+c*p*S,this._y=c*p*d-f*h*S,this._z=c*h*S-f*p*d,this._w=c*h*d+f*p*S;break;case"ZXY":this._x=f*h*d-c*p*S,this._y=c*p*d+f*h*S,this._z=c*h*S+f*p*d,this._w=c*h*d-f*p*S;break;case"ZYX":this._x=f*h*d-c*p*S,this._y=c*p*d+f*h*S,this._z=c*h*S-f*p*d,this._w=c*h*d+f*p*S;break;case"YZX":this._x=f*h*d+c*p*S,this._y=c*p*d+f*h*S,this._z=c*h*S-f*p*d,this._w=c*h*d-f*p*S;break;case"XZY":this._x=f*h*d-c*p*S,this._y=c*p*d-f*h*S,this._z=c*h*S+f*p*d,this._w=c*h*d+f*p*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],r=n[8],s=n[1],o=n[5],l=n[9],c=n[2],h=n[6],d=n[10],f=i+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(s-a)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(s-a)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,r=t._z,s=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+s*o+a*c-r*l,this._y=a*h+s*l+r*o-i*c,this._z=r*h+s*c+i*l-a*o,this._w=s*h-i*o-a*l-r*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,a=this._y,r=this._z,s=this._w;let o=s*t._w+i*t._x+a*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=s,this._x=i,this._y=a,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*a+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=s*d+this._w*f,this._x=i*d+this._x*f,this._y=a*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,n=0,i=0){I.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(_m.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(_m.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,r=t.elements,s=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,r=t.x,s=t.y,o=t.z,l=t.w,c=2*(s*a-o*i),h=2*(o*n-r*a),d=2*(r*i-s*n);return this.x=n+l*c+s*d-o*h,this.y=i+l*h+o*c-r*d,this.z=a+l*d+r*h-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Vt(this.x,t.x,n.x),this.y=Vt(this.y,t.y,n.y),this.z=Vt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Vt(this.x,t,n),this.y=Vt(this.y,t,n),this.z=Vt(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,r=t.z,s=n.x,o=n.y,l=n.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Mu.copy(this).projectOnVector(t),this.sub(Mu)}reflect(t){return this.sub(Mu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Vt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mu=new I,_m=new Do;class Pt{constructor(t,n,i,a,r,s,o,l,c){Pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,r,s,o,l,c)}set(t,n,i,a,r,s,o,l,c){const h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],S=i[8],y=a[0],g=a[3],u=a[6],m=a[1],_=a[4],v=a[7],C=a[2],A=a[5],b=a[8];return r[0]=s*y+o*m+l*C,r[3]=s*g+o*_+l*A,r[6]=s*u+o*v+l*b,r[1]=c*y+h*m+d*C,r[4]=c*g+h*_+d*A,r[7]=c*u+h*v+d*b,r[2]=f*y+p*m+S*C,r[5]=f*g+p*_+S*A,r[8]=f*u+p*v+S*b,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*s*h-n*o*c-i*r*h+i*o*l+a*r*c-a*s*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*s-o*c,f=o*l-h*r,p=c*r-s*l,S=n*d+i*f+a*p;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/S;return t[0]=d*y,t[1]=(a*c-h*i)*y,t[2]=(o*i-a*s)*y,t[3]=f*y,t[4]=(h*n-a*l)*y,t[5]=(a*r-o*n)*y,t[6]=p*y,t[7]=(i*l-c*n)*y,t[8]=(s*n-i*r)*y,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+t,-a*c,a*l,-a*(-c*s+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(yu.makeScale(t,n)),this}rotate(t){return this.premultiply(yu.makeRotation(-t)),this}translate(t,n){return this.premultiply(yu.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const yu=new Pt;function i0(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function pc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function ZM(){const e=pc("canvas");return e.style.display="block",e}const vm={};function Vr(e){e in vm||(vm[e]=!0,console.warn(e))}function KM(e,t,n){return new Promise(function(i,a){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function QM(e){const t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function jM(e){const t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const xm=new Pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sm=new Pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function JM(){const e={enabled:!0,workingColorSpace:as,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===ae&&(a.r=Ci(a.r),a.g=Ci(a.g),a.b=Ci(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ae&&(a.r=kr(a.r),a.g=kr(a.g),a.b=kr(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Qi?hc:this.spaces[a].transfer},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return Vr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return Vr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,r)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[as]:{primaries:t,whitePoint:i,transfer:hc,toXYZ:xm,fromXYZ:Sm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:t,whitePoint:i,transfer:ae,toXYZ:xm,fromXYZ:Sm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),e}const qt=JM();function Ci(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function kr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let ar;class $M{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ar===void 0&&(ar=pc("canvas")),ar.width=t.width,ar.height=t.height;const a=ar.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=ar}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=pc("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=Ci(r[s]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ci(n[i]/255)*255):n[i]=Ci(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ty=0;class Nd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ty++}),this.uuid=wo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Eu(a[s].image)):r.push(Eu(a[s]))}else r=Eu(a);i.url=r}return n||(t.images[this.uuid]=i),i}}function Eu(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?$M.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ey=0;const Tu=new I;class on extends hs{constructor(t=on.DEFAULT_IMAGE,n=on.DEFAULT_MAPPING,i=Pa,a=Pa,r=Jn,s=Ba,o=Xn,l=Ni,c=on.DEFAULT_ANISOTROPY,h=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=wo(),this.name="",this.source=new Nd(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Tu).x}get height(){return this.source.getSize(Tu).y}get depth(){return this.source.getSize(Tu).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case nh:t.x=t.x-Math.floor(t.x);break;case Pa:t.x=t.x<0?0:1;break;case ih:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case nh:t.y=t.y-Math.floor(t.y);break;case Pa:t.y=t.y<0?0:1;break;case ih:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Yv;on.DEFAULT_ANISOTROPY=1;class Re{constructor(t=0,n=0,i=0,a=1){Re.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,r=this.w,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*n+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*n+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*n+s[7]*i+s[11]*a+s[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],S=l[9],y=l[2],g=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-y)<.01&&Math.abs(S-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+y)<.1&&Math.abs(S+g)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,v=(p+1)/2,C=(u+1)/2,A=(h+f)/4,b=(d+y)/4,w=(S+g)/4;return _>v&&_>C?_<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(_),a=A/i,r=b/i):v>C?v<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(v),i=A/a,r=w/a):C<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(C),i=b/r,a=w/r),this.set(i,a,r,n),this}let m=Math.sqrt((g-S)*(g-S)+(d-y)*(d-y)+(f-h)*(f-h));return Math.abs(m)<.001&&(m=1),this.x=(g-S)/m,this.y=(d-y)/m,this.z=(f-h)/m,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Vt(this.x,t.x,n.x),this.y=Vt(this.y,t.y,n.y),this.z=Vt(this.z,t.z,n.z),this.w=Vt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Vt(this.x,t,n),this.y=Vt(this.y,t,n),this.z=Vt(this.z,t,n),this.w=Vt(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ny extends hs{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Re(0,0,t,n),this.scissorTest=!1,this.viewport=new Re(0,0,t,n);const a={width:t,height:n,depth:i.depth},r=new on(a);this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const n={minFilter:Jn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},t.textures[n].image);this.textures[n].source=new Nd(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ka extends ny{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class a0 extends on{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=qn,this.minFilter=qn,this.wrapR=Pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class iy extends on{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=qn,this.minFilter=qn,this.wrapR=Pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uo{constructor(t=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(In.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(In.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=In.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)t.isMesh===!0?t.getVertexPosition(s,In):In.fromBufferAttribute(r,s),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qo.copy(i.boundingBox)),Qo.applyMatrix4(t.matrixWorld),this.union(Qo)}const a=t.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ts),jo.subVectors(this.max,Ts),rr.subVectors(t.a,Ts),sr.subVectors(t.b,Ts),or.subVectors(t.c,Ts),zi.subVectors(sr,rr),Ii.subVectors(or,sr),ya.subVectors(rr,or);let n=[0,-zi.z,zi.y,0,-Ii.z,Ii.y,0,-ya.z,ya.y,zi.z,0,-zi.x,Ii.z,0,-Ii.x,ya.z,0,-ya.x,-zi.y,zi.x,0,-Ii.y,Ii.x,0,-ya.y,ya.x,0];return!bu(n,rr,sr,or,jo)||(n=[1,0,0,0,1,0,0,0,1],!bu(n,rr,sr,or,jo))?!1:(Jo.crossVectors(zi,Ii),n=[Jo.x,Jo.y,Jo.z],bu(n,rr,sr,or,jo))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ui=[new I,new I,new I,new I,new I,new I,new I,new I],In=new I,Qo=new Uo,rr=new I,sr=new I,or=new I,zi=new I,Ii=new I,ya=new I,Ts=new I,jo=new I,Jo=new I,Ea=new I;function bu(e,t,n,i,a){for(let r=0,s=e.length-3;r<=s;r+=3){Ea.fromArray(e,r);const o=a.x*Math.abs(Ea.x)+a.y*Math.abs(Ea.y)+a.z*Math.abs(Ea.z),l=t.dot(Ea),c=n.dot(Ea),h=i.dot(Ea);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const ay=new Uo,bs=new I,Au=new I;class Od{constructor(t=new I,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):ay.setFromPoints(t).getCenter(i);let a=0;for(let r=0,s=t.length;r<s;r++)a=Math.max(a,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bs.subVectors(t,this.center);const n=bs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(bs,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Au.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bs.copy(t.center).add(Au)),this.expandByPoint(bs.copy(t.center).sub(Au))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const fi=new I,Ru=new I,$o=new I,Fi=new I,Cu=new I,tl=new I,wu=new I;class ry{constructor(t=new I,n=new I(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fi)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=fi.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(fi.copy(this.origin).addScaledVector(this.direction,n),fi.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){Ru.copy(t).add(n).multiplyScalar(.5),$o.copy(n).sub(t).normalize(),Fi.copy(this.origin).sub(Ru);const r=t.distanceTo(n)*.5,s=-this.direction.dot($o),o=Fi.dot(this.direction),l=-Fi.dot($o),c=Fi.lengthSq(),h=Math.abs(1-s*s);let d,f,p,S;if(h>0)if(d=s*l-o,f=s*o-l,S=r*h,d>=0)if(f>=-S)if(f<=S){const y=1/h;d*=y,f*=y,p=d*(d+s*f+2*o)+f*(s*d+f+2*l)+c}else f=r,d=Math.max(0,-(s*f+o)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(s*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-S?(d=Math.max(0,-(-s*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=S?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(s*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=s>0?-r:r,d=Math.max(0,-(s*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(Ru).addScaledVector($o,f),p}intersectSphere(t,n){fi.subVectors(t.center,this.origin);const i=fi.dot(this.direction),a=fi.dot(fi)-i*i,r=t.radius*t.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,r,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,a=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,a=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,s=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,s=(t.min.y-f.y)*h),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,fi)!==null}intersectTriangle(t,n,i,a,r){Cu.subVectors(n,t),tl.subVectors(i,t),wu.crossVectors(Cu,tl);let s=this.direction.dot(wu),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Fi.subVectors(this.origin,t);const l=o*this.direction.dot(tl.crossVectors(Fi,tl));if(l<0)return null;const c=o*this.direction.dot(Cu.cross(Fi));if(c<0||l+c>s)return null;const h=-o*Fi.dot(wu);return h<0?null:this.at(h/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(t,n,i,a,r,s,o,l,c,h,d,f,p,S,y,g){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,r,s,o,l,c,h,d,f,p,S,y,g)}set(t,n,i,a,r,s,o,l,c,h,d,f,p,S,y,g){const u=this.elements;return u[0]=t,u[4]=n,u[8]=i,u[12]=a,u[1]=r,u[5]=s,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=S,u[11]=y,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,a=1/lr.setFromMatrixColumn(t,0).length(),r=1/lr.setFromMatrixColumn(t,1).length(),s=1/lr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,r=t.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=s*h,p=s*d,S=o*h,y=o*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=p+S*c,n[5]=f-y*c,n[9]=-o*l,n[2]=y-f*c,n[6]=S+p*c,n[10]=s*l}else if(t.order==="YXZ"){const f=l*h,p=l*d,S=c*h,y=c*d;n[0]=f+y*o,n[4]=S*o-p,n[8]=s*c,n[1]=s*d,n[5]=s*h,n[9]=-o,n[2]=p*o-S,n[6]=y+f*o,n[10]=s*l}else if(t.order==="ZXY"){const f=l*h,p=l*d,S=c*h,y=c*d;n[0]=f-y*o,n[4]=-s*d,n[8]=S+p*o,n[1]=p+S*o,n[5]=s*h,n[9]=y-f*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(t.order==="ZYX"){const f=s*h,p=s*d,S=o*h,y=o*d;n[0]=l*h,n[4]=S*c-p,n[8]=f*c+y,n[1]=l*d,n[5]=y*c+f,n[9]=p*c-S,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(t.order==="YZX"){const f=s*l,p=s*c,S=o*l,y=o*c;n[0]=l*h,n[4]=y-f*d,n[8]=S*d+p,n[1]=d,n[5]=s*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*d+S,n[10]=f-y*d}else if(t.order==="XZY"){const f=s*l,p=s*c,S=o*l,y=o*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=f*d+y,n[5]=s*h,n[9]=p*d-S,n[2]=S*d-p,n[6]=o*h,n[10]=y*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sy,t,oy)}lookAt(t,n,i){const a=this.elements;return pn.subVectors(t,n),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Hi.crossVectors(i,pn),Hi.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Hi.crossVectors(i,pn)),Hi.normalize(),el.crossVectors(pn,Hi),a[0]=Hi.x,a[4]=el.x,a[8]=pn.x,a[1]=Hi.y,a[5]=el.y,a[9]=pn.y,a[2]=Hi.z,a[6]=el.z,a[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],S=i[2],y=i[6],g=i[10],u=i[14],m=i[3],_=i[7],v=i[11],C=i[15],A=a[0],b=a[4],w=a[8],T=a[12],M=a[1],U=a[5],V=a[9],G=a[13],q=a[2],J=a[6],N=a[10],k=a[14],B=a[3],tt=a[7],at=a[11],_t=a[15];return r[0]=s*A+o*M+l*q+c*B,r[4]=s*b+o*U+l*J+c*tt,r[8]=s*w+o*V+l*N+c*at,r[12]=s*T+o*G+l*k+c*_t,r[1]=h*A+d*M+f*q+p*B,r[5]=h*b+d*U+f*J+p*tt,r[9]=h*w+d*V+f*N+p*at,r[13]=h*T+d*G+f*k+p*_t,r[2]=S*A+y*M+g*q+u*B,r[6]=S*b+y*U+g*J+u*tt,r[10]=S*w+y*V+g*N+u*at,r[14]=S*T+y*G+g*k+u*_t,r[3]=m*A+_*M+v*q+C*B,r[7]=m*b+_*U+v*J+C*tt,r[11]=m*w+_*V+v*N+C*at,r[15]=m*T+_*G+v*k+C*_t,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],r=t[12],s=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],S=t[3],y=t[7],g=t[11],u=t[15];return S*(+r*l*d-a*c*d-r*o*f+i*c*f+a*o*p-i*l*p)+y*(+n*l*p-n*c*f+r*s*f-a*s*p+a*c*h-r*l*h)+g*(+n*c*d-n*o*p-r*s*d+i*s*p+r*o*h-i*c*h)+u*(-a*o*h-n*l*d+n*o*f+a*s*d-i*s*f+i*l*h)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],S=t[12],y=t[13],g=t[14],u=t[15],m=d*g*c-y*f*c+y*l*p-o*g*p-d*l*u+o*f*u,_=S*f*c-h*g*c-S*l*p+s*g*p+h*l*u-s*f*u,v=h*y*c-S*d*c+S*o*p-s*y*p-h*o*u+s*d*u,C=S*d*l-h*y*l-S*o*f+s*y*f+h*o*g-s*d*g,A=n*m+i*_+a*v+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return t[0]=m*b,t[1]=(y*f*r-d*g*r-y*a*p+i*g*p+d*a*u-i*f*u)*b,t[2]=(o*g*r-y*l*r+y*a*c-i*g*c-o*a*u+i*l*u)*b,t[3]=(d*l*r-o*f*r-d*a*c+i*f*c+o*a*p-i*l*p)*b,t[4]=_*b,t[5]=(h*g*r-S*f*r+S*a*p-n*g*p-h*a*u+n*f*u)*b,t[6]=(S*l*r-s*g*r-S*a*c+n*g*c+s*a*u-n*l*u)*b,t[7]=(s*f*r-h*l*r+h*a*c-n*f*c-s*a*p+n*l*p)*b,t[8]=v*b,t[9]=(S*d*r-h*y*r-S*i*p+n*y*p+h*i*u-n*d*u)*b,t[10]=(s*y*r-S*o*r+S*i*c-n*y*c-s*i*u+n*o*u)*b,t[11]=(h*o*r-s*d*r-h*i*c+n*d*c+s*i*p-n*o*p)*b,t[12]=C*b,t[13]=(h*y*a-S*d*a+S*i*f-n*y*f-h*i*g+n*d*g)*b,t[14]=(S*o*a-s*y*a-S*i*l+n*y*l+s*i*g-n*o*g)*b,t[15]=(s*d*a-h*o*a+h*i*l-n*d*l-s*i*f+n*o*f)*b,this}scale(t){const n=this.elements,i=t.x,a=t.y,r=t.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),r=1-i,s=t.x,o=t.y,l=t.z,c=r*s,h=r*o;return this.set(c*s+i,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+i,h*l-a*s,0,c*l-a*o,h*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,r,s){return this.set(1,i,r,0,t,1,s,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,c=r+r,h=s+s,d=o+o,f=r*c,p=r*h,S=r*d,y=s*h,g=s*d,u=o*d,m=l*c,_=l*h,v=l*d,C=i.x,A=i.y,b=i.z;return a[0]=(1-(y+u))*C,a[1]=(p+v)*C,a[2]=(S-_)*C,a[3]=0,a[4]=(p-v)*A,a[5]=(1-(f+u))*A,a[6]=(g+m)*A,a[7]=0,a[8]=(S+_)*b,a[9]=(g-m)*b,a[10]=(1-(f+y))*b,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;let r=lr.set(a[0],a[1],a[2]).length();const s=lr.set(a[4],a[5],a[6]).length(),o=lr.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),t.x=a[12],t.y=a[13],t.z=a[14],Fn.copy(this);const c=1/r,h=1/s,d=1/o;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=d,Fn.elements[9]*=d,Fn.elements[10]*=d,n.setFromRotationMatrix(Fn),i.x=r,i.y=s,i.z=o,this}makePerspective(t,n,i,a,r,s,o=Ti){const l=this.elements,c=2*r/(n-t),h=2*r/(i-a),d=(n+t)/(n-t),f=(i+a)/(i-a);let p,S;if(o===Ti)p=-(s+r)/(s-r),S=-2*s*r/(s-r);else if(o===dc)p=-s/(s-r),S=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,a,r,s,o=Ti){const l=this.elements,c=1/(n-t),h=1/(i-a),d=1/(s-r),f=(n+t)*c,p=(i+a)*h;let S,y;if(o===Ti)S=(s+r)*d,y=-2*d;else if(o===dc)S=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const lr=new I,Fn=new Ue,sy=new I(0,0,0),oy=new I(1,1,1),Hi=new I,el=new I,pn=new I,Mm=new Ue,ym=new Do;class Oi{constructor(t=0,n=0,i=0,a=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],h=a[9],d=a[2],f=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Vt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Mm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mm,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return ym.setFromEuler(this),this.setFromQuaternion(ym,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class r0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ly=0;const Em=new I,cr=new Do,hi=new Ue,nl=new I,As=new I,cy=new I,uy=new Do,Tm=new I(1,0,0),bm=new I(0,1,0),Am=new I(0,0,1),Rm={type:"added"},fy={type:"removed"},ur={type:"childadded",child:null},Du={type:"childremoved",child:null};class yn extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const t=new I,n=new Oi,i=new Do,a=new I(1,1,1);function r(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Pt}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new r0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return cr.setFromAxisAngle(t,n),this.quaternion.multiply(cr),this}rotateOnWorldAxis(t,n){return cr.setFromAxisAngle(t,n),this.quaternion.premultiply(cr),this}rotateX(t){return this.rotateOnAxis(Tm,t)}rotateY(t){return this.rotateOnAxis(bm,t)}rotateZ(t){return this.rotateOnAxis(Am,t)}translateOnAxis(t,n){return Em.copy(t).applyQuaternion(this.quaternion),this.position.add(Em.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Tm,t)}translateY(t){return this.translateOnAxis(bm,t)}translateZ(t){return this.translateOnAxis(Am,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?nl.copy(t):nl.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(As,nl,this.up):hi.lookAt(nl,As,this.up),this.quaternion.setFromRotationMatrix(hi),a&&(hi.extractRotation(a.matrixWorld),cr.setFromRotationMatrix(hi),this.quaternion.premultiply(cr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rm),ur.child=t,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(fy),Du.child=t,this.dispatchEvent(Du),Du.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rm),ur.child=t,this.dispatchEvent(ur),ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(t,n);if(s!==void 0)return s}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,t,cy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,uy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));a.material=o}else a.material=r(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(t.animations,l))}}if(n){const o=s(t.geometries),l=s(t.materials),c=s(t.textures),h=s(t.images),d=s(t.shapes),f=s(t.skeletons),p=s(t.animations),S=s(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),S.length>0&&(i.nodes=S)}return i.object=a,i;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}yn.DEFAULT_UP=new I(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new I,di=new I,Uu=new I,pi=new I,fr=new I,hr=new I,Cm=new I,Lu=new I,Nu=new I,Ou=new I,Pu=new Re,Bu=new Re,zu=new Re;class kn{constructor(t=new I,n=new I,i=new I){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),Hn.subVectors(t,n),a.cross(Hn);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(t,n,i,a,r){Hn.subVectors(a,n),di.subVectors(i,n),Uu.subVectors(t,n);const s=Hn.dot(Hn),o=Hn.dot(di),l=Hn.dot(Uu),c=di.dot(di),h=di.dot(Uu),d=s*c-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(c*l-o*h)*f,S=(s*h-o*l)*f;return r.set(1-p-S,S,p)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(t,n,i,a,r,s,o,l){return this.getBarycoord(t,n,i,a,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pi.x),l.addScaledVector(s,pi.y),l.addScaledVector(o,pi.z),l)}static getInterpolatedAttribute(t,n,i,a,r,s){return Pu.setScalar(0),Bu.setScalar(0),zu.setScalar(0),Pu.fromBufferAttribute(t,n),Bu.fromBufferAttribute(t,i),zu.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(Pu,r.x),s.addScaledVector(Bu,r.y),s.addScaledVector(zu,r.z),s}static isFrontFacing(t,n,i,a){return Hn.subVectors(i,n),di.subVectors(t,n),Hn.cross(di).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Hn.cross(di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return kn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return kn.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,r){return kn.getInterpolation(t,this.a,this.b,this.c,n,i,a,r)}containsPoint(t){return kn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return kn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,r=this.c;let s,o;fr.subVectors(a,i),hr.subVectors(r,i),Lu.subVectors(t,i);const l=fr.dot(Lu),c=hr.dot(Lu);if(l<=0&&c<=0)return n.copy(i);Nu.subVectors(t,a);const h=fr.dot(Nu),d=hr.dot(Nu);if(h>=0&&d<=h)return n.copy(a);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return s=l/(l-h),n.copy(i).addScaledVector(fr,s);Ou.subVectors(t,r);const p=fr.dot(Ou),S=hr.dot(Ou);if(S>=0&&p<=S)return n.copy(r);const y=p*c-l*S;if(y<=0&&c>=0&&S<=0)return o=c/(c-S),n.copy(i).addScaledVector(hr,o);const g=h*S-p*d;if(g<=0&&d-h>=0&&p-S>=0)return Cm.subVectors(r,a),o=(d-h)/(d-h+(p-S)),n.copy(a).addScaledVector(Cm,o);const u=1/(g+y+f);return s=y*u,o=f*u,n.copy(i).addScaledVector(fr,s).addScaledVector(hr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const s0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},il={h:0,s:0,l:0};function Iu(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class oe{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=qt.workingColorSpace){return this.r=t,this.g=n,this.b=i,qt.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=qt.workingColorSpace){if(t=YM(t,1),n=Vt(n,0,1),i=Vt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=Iu(s,r,t+1/3),this.g=Iu(s,r,t),this.b=Iu(s,r,t-1/3)}return qt.colorSpaceToWorking(this,a),this}setStyle(t,n=Cn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Cn){const i=s0[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}copyLinearToSRGB(t){return this.r=kr(t.r),this.g=kr(t.g),this.b=kr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Cn){return qt.workingToColorSpace(Ye.copy(this),t),Math.round(Vt(Ye.r*255,0,255))*65536+Math.round(Vt(Ye.g*255,0,255))*256+Math.round(Vt(Ye.b*255,0,255))}getHexString(t=Cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=qt.workingColorSpace){qt.workingToColorSpace(Ye.copy(this),n);const i=Ye.r,a=Ye.g,r=Ye.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let l,c;const h=(o+s)/2;if(o===s)l=0,c=0;else{const d=s-o;switch(c=h<=.5?d/(s+o):d/(2-s-o),s){case i:l=(a-r)/d+(a<r?6:0);break;case a:l=(r-i)/d+2;break;case r:l=(i-a)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=qt.workingColorSpace){return qt.workingToColorSpace(Ye.copy(this),n),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=Cn){qt.workingToColorSpace(Ye.copy(this),t);const n=Ye.r,i=Ye.g,a=Ye.b;return t!==Cn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(Gi),this.setHSL(Gi.h+t,Gi.s+n,Gi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Gi),t.getHSL(il);const i=Su(Gi.h,il.h,n),a=Su(Gi.s,il.s,n),r=Su(Gi.l,il.l,n);return this.setHSL(i,a,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ye=new oe;oe.NAMES=s0;let hy=0;class Nc extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=wo(),this.name="",this.type="Material",this.blending=Gr,this.side=pa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wf,this.blendDst=qf,this.blendEquation=Na,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(i.blending=this.blending),this.side!==pa&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wf&&(i.blendSrc=this.blendSrc),this.blendDst!==qf&&(i.blendDst=this.blendDst),this.blendEquation!==Na&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==es&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(n){const r=a(t.textures),s=a(t.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class o0 extends Nc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=qv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ce=new I,al=new $t;let dy=0;class ni{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dy++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=mm,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)al.fromBufferAttribute(this,n),al.applyMatrix3(t),this.setXY(n,al.x,al.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ce.fromBufferAttribute(this,n),Ce.applyMatrix3(t),this.setXYZ(n,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Ce.fromBufferAttribute(this,n),Ce.applyMatrix4(t),this.setXYZ(n,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ce.fromBufferAttribute(this,n),Ce.applyNormalMatrix(t),this.setXYZ(n,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ce.fromBufferAttribute(this,n),Ce.transformDirection(t),this.setXYZ(n,Ce.x,Ce.y,Ce.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Es(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=en(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Es(n,this.array)),n}setX(t,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Es(n,this.array)),n}setY(t,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Es(n,this.array)),n}setZ(t,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Es(n,this.array)),n}setW(t,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),a=en(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,r){return t*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),a=en(a,this.array),r=en(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==mm&&(t.usage=this.usage),t}}class l0 extends ni{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class c0 extends ni{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class ii extends ni{constructor(t,n,i){super(new Float32Array(t),n,i)}}let py=0;const An=new Ue,Fu=new yn,dr=new I,mn=new Uo,Rs=new Uo,Ie=new I;class va extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(i0(t)?c0:l0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Pt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return An.makeRotationFromQuaternion(t),this.applyMatrix4(An),this}rotateX(t){return An.makeRotationX(t),this.applyMatrix4(An),this}rotateY(t){return An.makeRotationY(t),this.applyMatrix4(An),this}rotateZ(t){return An.makeRotationZ(t),this.applyMatrix4(An),this}translate(t,n,i){return An.makeTranslation(t,n,i),this.applyMatrix4(An),this}scale(t,n,i){return An.makeScale(t,n,i),this.applyMatrix4(An),this}lookAt(t){return Fu.lookAt(t),Fu.updateMatrix(),this.applyMatrix4(Fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,r=t.length;a<r;a++){const s=t[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new ii(i,3))}else{const i=Math.min(t.length,n.count);for(let a=0;a<i;a++){const r=t[a];n.setXYZ(a,r.x,r.y,r.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Uo);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const r=n[i];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Od);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),n)for(let r=0,s=n.length;r<s;r++){const o=n[r];Rs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(mn.min,Rs.min),mn.expandByPoint(Ie),Ie.addVectors(mn.max,Rs.max),mn.expandByPoint(Ie)):(mn.expandByPoint(Rs.min),mn.expandByPoint(Rs.max))}mn.getCenter(i);let a=0;for(let r=0,s=t.count;r<s;r++)Ie.fromBufferAttribute(t,r),a=Math.max(a,i.distanceToSquared(Ie));if(n)for(let r=0,s=n.length;r<s;r++){const o=n[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ie.fromBufferAttribute(o,c),l&&(dr.fromBufferAttribute(t,c),Ie.add(dr)),a=Math.max(a,i.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let w=0;w<i.count;w++)o[w]=new I,l[w]=new I;const c=new I,h=new I,d=new I,f=new $t,p=new $t,S=new $t,y=new I,g=new I;function u(w,T,M){c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,M),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,T),S.fromBufferAttribute(r,M),h.sub(c),d.sub(c),p.sub(f),S.sub(f);const U=1/(p.x*S.y-S.x*p.y);isFinite(U)&&(y.copy(h).multiplyScalar(S.y).addScaledVector(d,-p.y).multiplyScalar(U),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-S.x).multiplyScalar(U),o[w].add(y),o[T].add(y),o[M].add(y),l[w].add(g),l[T].add(g),l[M].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:t.count}]);for(let w=0,T=m.length;w<T;++w){const M=m[w],U=M.start,V=M.count;for(let G=U,q=U+V;G<q;G+=3)u(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const _=new I,v=new I,C=new I,A=new I;function b(w){C.fromBufferAttribute(a,w),A.copy(C);const T=o[w];_.copy(T),_.sub(C.multiplyScalar(C.dot(T))).normalize(),v.crossVectors(A,T);const U=v.dot(l[w])<0?-1:1;s.setXYZW(w,_.x,_.y,_.z,U)}for(let w=0,T=m.length;w<T;++w){const M=m[w],U=M.start,V=M.count;for(let G=U,q=U+V;G<q;G+=3)b(t.getX(G+0)),b(t.getX(G+1)),b(t.getX(G+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ni(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const a=new I,r=new I,s=new I,o=new I,l=new I,c=new I,h=new I,d=new I;if(t)for(let f=0,p=t.count;f<p;f+=3){const S=t.getX(f+0),y=t.getX(f+1),g=t.getX(f+2);a.fromBufferAttribute(n,S),r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,g),h.subVectors(s,r),d.subVectors(a,r),h.cross(d),o.fromBufferAttribute(i,S),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(S,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)a.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),h.subVectors(s,r),d.subVectors(a,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Ie.fromBufferAttribute(t,n),Ie.normalize(),t.setXYZ(n,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let p=0,S=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*h;for(let u=0;u<h;u++)f[S++]=c[p++]}return new ni(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new va,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=t(l,i);n.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=t(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(a[l]=h,r=!0)}r&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const c in a){const h=a[c];this.setAttribute(c,h.clone(n))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let c=0,h=s.length;c<h;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wm=new Ue,Ta=new ry,rl=new Od,Dm=new I,sl=new I,ol=new I,ll=new I,Hu=new I,cl=new I,Um=new I,ul=new I;class bi extends yn{constructor(t=new va,n=new o0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(r&&o){cl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Hu.fromBufferAttribute(d,t),s?cl.addScaledVector(Hu,h):cl.addScaledVector(Hu.sub(n),h))}n.add(cl)}return n}raycast(t,n){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),rl.copy(i.boundingSphere),rl.applyMatrix4(r),Ta.copy(t.ray).recast(t.near),!(rl.containsPoint(Ta.origin)===!1&&(Ta.intersectSphere(rl,Dm)===null||Ta.origin.distanceToSquared(Dm)>(t.far-t.near)**2))&&(wm.copy(r).invert(),Ta.copy(t.ray).applyMatrix4(wm),!(i.boundingBox!==null&&Ta.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Ta)))}_computeIntersections(t,n,i){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let S=0,y=f.length;S<y;S++){const g=f[S],u=s[g.materialIndex],m=Math.max(g.start,p.start),_=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let v=m,C=_;v<C;v+=3){const A=o.getX(v),b=o.getX(v+1),w=o.getX(v+2);a=fl(this,u,t,i,c,h,d,A,b,w),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const S=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let g=S,u=y;g<u;g+=3){const m=o.getX(g),_=o.getX(g+1),v=o.getX(g+2);a=fl(this,s,t,i,c,h,d,m,_,v),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let S=0,y=f.length;S<y;S++){const g=f[S],u=s[g.materialIndex],m=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let v=m,C=_;v<C;v+=3){const A=v,b=v+1,w=v+2;a=fl(this,u,t,i,c,h,d,A,b,w),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const S=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=S,u=y;g<u;g+=3){const m=g,_=g+1,v=g+2;a=fl(this,s,t,i,c,h,d,m,_,v),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}}function my(e,t,n,i,a,r,s,o){let l;if(t.side===sn?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,t.side===pa,o),l===null)return null;ul.copy(o),ul.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(ul);return c<n.near||c>n.far?null:{distance:c,point:ul.clone(),object:e}}function fl(e,t,n,i,a,r,s,o,l,c){e.getVertexPosition(o,sl),e.getVertexPosition(l,ol),e.getVertexPosition(c,ll);const h=my(e,t,n,i,sl,ol,ll,Um);if(h){const d=new I;kn.getBarycoord(Um,sl,ol,ll,d),a&&(h.uv=kn.getInterpolatedAttribute(a,o,l,c,d,new $t)),r&&(h.uv1=kn.getInterpolatedAttribute(r,o,l,c,d,new $t)),s&&(h.normal=kn.getInterpolatedAttribute(s,o,l,c,d,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new I,materialIndex:0};kn.getNormal(sl,ol,ll,f.normal),h.face=f,h.barycoord=d}return h}class Lo extends va{constructor(t=1,n=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],h=[],d=[];let f=0,p=0;S("z","y","x",-1,-1,i,n,t,s,r,0),S("z","y","x",1,-1,i,n,-t,s,r,1),S("x","z","y",1,1,t,i,n,a,s,2),S("x","z","y",1,-1,t,i,-n,a,s,3),S("x","y","z",1,-1,t,n,i,a,r,4),S("x","y","z",-1,-1,t,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new ii(c,3)),this.setAttribute("normal",new ii(h,3)),this.setAttribute("uv",new ii(d,2));function S(y,g,u,m,_,v,C,A,b,w,T){const M=v/b,U=C/w,V=v/2,G=C/2,q=A/2,J=b+1,N=w+1;let k=0,B=0;const tt=new I;for(let at=0;at<N;at++){const _t=at*U-G;for(let Ot=0;Ot<J;Ot++){const Yt=Ot*M-V;tt[y]=Yt*m,tt[g]=_t*_,tt[u]=q,c.push(tt.x,tt.y,tt.z),tt[y]=0,tt[g]=0,tt[u]=A>0?1:-1,h.push(tt.x,tt.y,tt.z),d.push(Ot/b),d.push(1-at/w),k+=1}}for(let at=0;at<w;at++)for(let _t=0;_t<b;_t++){const Ot=f+_t+J*at,Yt=f+_t+J*(at+1),W=f+(_t+1)+J*(at+1),it=f+(_t+1)+J*at;l.push(Ot,Yt,it),l.push(Yt,W,it),B+=6}o.addGroup(p,B,T),p+=B,f+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function rs(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone():Array.isArray(a)?t[n][i]=a.slice():t[n][i]=a}}return t}function Je(e){const t={};for(let n=0;n<e.length;n++){const i=rs(e[n]);for(const a in i)t[a]=i[a]}return t}function gy(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function u0(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const _y={clone:rs,merge:Je};var vy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ma extends Nc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vy,this.fragmentShader=xy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rs(t.uniforms),this.uniformsGroups=gy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?n.uniforms[a]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?n.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[a]={type:"m4",value:s.toArray()}:n.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class f0 extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Ti}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vi=new I,Lm=new $t,Nm=new $t;class Vn extends f0{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Dh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(xu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Dh*2*Math.atan(Math.tan(xu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z)}getViewSize(t,n){return this.getViewBounds(t,Lm,Nm),n.subVectors(Nm,Lm)}setViewOffset(t,n,i,a,r,s){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(xu*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,n-=s.offsetY*i/c,a*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const pr=-90,mr=1;class Sy extends yn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Vn(pr,mr,t,n);a.layers=this.layers,this.add(a);const r=new Vn(pr,mr,t,n);r.layers=this.layers,this.add(r);const s=new Vn(pr,mr,t,n);s.layers=this.layers,this.add(s);const o=new Vn(pr,mr,t,n);o.layers=this.layers,this.add(o);const l=new Vn(pr,mr,t,n);l.layers=this.layers,this.add(l);const c=new Vn(pr,mr,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,r,s,o,l]=n;for(const c of n)this.remove(c);if(t===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===dc)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(n,r),t.setRenderTarget(i,1,a),t.render(n,s),t.setRenderTarget(i,2,a),t.render(n,o),t.setRenderTarget(i,3,a),t.render(n,l),t.setRenderTarget(i,4,a),t.render(n,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,a),t.render(n,h),t.setRenderTarget(d,f,p),t.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class h0 extends on{constructor(t=[],n=ns,i,a,r,s,o,l,c,h){super(t,n,i,a,r,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class My extends Ka{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new h0(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Lo(5,5,5),r=new ma({name:"CubemapFromEquirect",uniforms:rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:ca});r.uniforms.tEquirect.value=n;const s=new bi(a,r),o=n.minFilter;return n.minFilter===Ba&&(n.minFilter=Jn),new Sy(1,10,this).update(t,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(n,i,a);t.setRenderTarget(r)}}class hl extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yy={type:"move"};class Gu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){s=!0;for(const y of t.hand.values()){const g=n.getJointPose(y,i),u=this._getHandJoint(c,y);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,S=.005;c.inputState.pinching&&f>p+S?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-S&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yy)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new hl;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}class m1 extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Vu=new I,Ey=new I,Ty=new Pt;class Ua{constructor(t=new I(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=Vu.subVectors(i,n).cross(Ey.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(Vu),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:n.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||Ty.getNormalMatrix(t),a=this.coplanarPoint(Vu).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ba=new Od,by=new $t(.5,.5),dl=new I;class d0{constructor(t=new Ua,n=new Ua,i=new Ua,a=new Ua,r=new Ua,s=new Ua){this.planes=[t,n,i,a,r,s]}set(t,n,i,a,r,s){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Ti){const i=this.planes,a=t.elements,r=a[0],s=a[1],o=a[2],l=a[3],c=a[4],h=a[5],d=a[6],f=a[7],p=a[8],S=a[9],y=a[10],g=a[11],u=a[12],m=a[13],_=a[14],v=a[15];if(i[0].setComponents(l-r,f-c,g-p,v-u).normalize(),i[1].setComponents(l+r,f+c,g+p,v+u).normalize(),i[2].setComponents(l+s,f+h,g+S,v+m).normalize(),i[3].setComponents(l-s,f-h,g-S,v-m).normalize(),i[4].setComponents(l-o,f-d,g-y,v-_).normalize(),n===Ti)i[5].setComponents(l+o,f+d,g+y,v+_).normalize();else if(n===dc)i[5].setComponents(o,d,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ba.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ba)}intersectsSprite(t){ba.center.set(0,0,0);const n=by.distanceTo(t.center);return ba.radius=.7071067811865476+n,ba.applyMatrix4(t.matrixWorld),this.intersectsSphere(ba)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(dl.x=a.normal.x>0?t.max.x:t.min.x,dl.y=a.normal.y>0?t.max.y:t.min.y,dl.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(dl)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class p0 extends on{constructor(t,n,i=Za,a,r,s,o=qn,l=qn,c,h=co,d=1){if(h!==co&&h!==uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:n,depth:d};super(f,a,r,s,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Nd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Pd extends va{constructor(t=[],n=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:a};const r=[],s=[];o(a),c(i),h(),this.setAttribute("position",new ii(r,3)),this.setAttribute("normal",new ii(r.slice(),3)),this.setAttribute("uv",new ii(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(m){const _=new I,v=new I,C=new I;for(let A=0;A<n.length;A+=3)p(n[A+0],_),p(n[A+1],v),p(n[A+2],C),l(_,v,C,m)}function l(m,_,v,C){const A=C+1,b=[];for(let w=0;w<=A;w++){b[w]=[];const T=m.clone().lerp(v,w/A),M=_.clone().lerp(v,w/A),U=A-w;for(let V=0;V<=U;V++)V===0&&w===A?b[w][V]=T:b[w][V]=T.clone().lerp(M,V/U)}for(let w=0;w<A;w++)for(let T=0;T<2*(A-w)-1;T++){const M=Math.floor(T/2);T%2===0?(f(b[w][M+1]),f(b[w+1][M]),f(b[w][M])):(f(b[w][M+1]),f(b[w+1][M+1]),f(b[w+1][M]))}}function c(m){const _=new I;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(m),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){const m=new I;for(let _=0;_<r.length;_+=3){m.x=r[_+0],m.y=r[_+1],m.z=r[_+2];const v=g(m)/2/Math.PI+.5,C=u(m)/Math.PI+.5;s.push(v,1-C)}S(),d()}function d(){for(let m=0;m<s.length;m+=6){const _=s[m+0],v=s[m+2],C=s[m+4],A=Math.max(_,v,C),b=Math.min(_,v,C);A>.9&&b<.1&&(_<.2&&(s[m+0]+=1),v<.2&&(s[m+2]+=1),C<.2&&(s[m+4]+=1))}}function f(m){r.push(m.x,m.y,m.z)}function p(m,_){const v=m*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function S(){const m=new I,_=new I,v=new I,C=new I,A=new $t,b=new $t,w=new $t;for(let T=0,M=0;T<r.length;T+=9,M+=6){m.set(r[T+0],r[T+1],r[T+2]),_.set(r[T+3],r[T+4],r[T+5]),v.set(r[T+6],r[T+7],r[T+8]),A.set(s[M+0],s[M+1]),b.set(s[M+2],s[M+3]),w.set(s[M+4],s[M+5]),C.copy(m).add(_).add(v).divideScalar(3);const U=g(C);y(A,M+0,m,U),y(b,M+2,_,U),y(w,M+4,v,U)}}function y(m,_,v,C){C<0&&m.x===1&&(s[_]=m.x-1),v.x===0&&v.z===0&&(s[_]=C/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function u(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pd(t.vertices,t.indices,t.radius,t.details)}}class m0 extends Pd{constructor(t=1,n=0){const i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,r,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new m0(t.radius,t.detail)}}class Oc extends va{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const r=t/2,s=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,h=l+1,d=t/o,f=n/l,p=[],S=[],y=[],g=[];for(let u=0;u<h;u++){const m=u*f-s;for(let _=0;_<c;_++){const v=_*d-r;S.push(v,-m,0),y.push(0,0,1),g.push(_/o),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<o;m++){const _=m+c*u,v=m+c*(u+1),C=m+1+c*(u+1),A=m+1+c*u;p.push(_,v,A),p.push(v,C,A)}this.setIndex(p),this.setAttribute("position",new ii(S,3)),this.setAttribute("normal",new ii(y,3)),this.setAttribute("uv",new ii(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ay extends Nc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ry extends Nc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Cy extends f0{constructor(t=-1,n=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-t,s=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class wy extends Vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Om(e,t,n,i){const a=Dy(i);switch(n){case jv:return e*t;case $v:return e*t/a.components*a.byteLength;case Dd:return e*t/a.components*a.byteLength;case t0:return e*t*2/a.components*a.byteLength;case Ud:return e*t*2/a.components*a.byteLength;case Jv:return e*t*3/a.components*a.byteLength;case Xn:return e*t*4/a.components*a.byteLength;case Ld:return e*t*4/a.components*a.byteLength;case Dl:case Ul:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ll:case Nl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case rh:case oh:return Math.max(e,16)*Math.max(t,8)/4;case ah:case sh:return Math.max(e,8)*Math.max(t,8)/2;case lh:case ch:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case uh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case hh:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case dh:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ph:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case mh:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case gh:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case _h:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case vh:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case xh:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Sh:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Mh:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case yh:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Eh:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Th:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ol:case bh:case Ah:return Math.ceil(e/4)*Math.ceil(t/4)*16;case e0:case Rh:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ch:case wh:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Dy(e){switch(e){case Ni:case Zv:return{byteLength:1,components:1};case oo:case Kv:case Co:return{byteLength:2,components:1};case Cd:case wd:return{byteLength:2,components:4};case Za:case Rd:case Ei:return{byteLength:4,components:1};case Qv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ad}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ad);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function g0(){let e=null,t=!1,n=null,i=null;function a(r,s){n(r,s),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function Uy(e){const t=new WeakMap;function n(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,h);else{d.sort((p,S)=>p.start-S.start);let f=0;for(let p=1;p<d.length;p++){const S=d[f],y=d[p];y.start<=S.start+S.count+1?S.count=Math.max(S.count,y.start+y.count-S.start):(++f,d[f]=y)}d.length=f+1;for(let p=0,S=d.length;p<S;p++){const y=d[p];e.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}var Ly=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ny=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Oy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Py=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,By=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Iy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Gy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ky=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$y=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,eE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,iE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,aE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lE="gl_FragColor = linearToOutputTexel( gl_FragColor );",cE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_E=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,SE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ME=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,EE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,TE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,AE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,RE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,DE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,UE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,LE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,NE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,OE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,PE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,IE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,HE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,GE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ZE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,QE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$E=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,oT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,pT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_T=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ST=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,MT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ET=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,AT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,RT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,DT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const UT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,IT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,FT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,HT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,GT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,JT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$T=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ib=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ab=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ob=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,cb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ub=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zt={alphahash_fragment:Ly,alphahash_pars_fragment:Ny,alphamap_fragment:Oy,alphamap_pars_fragment:Py,alphatest_fragment:By,alphatest_pars_fragment:zy,aomap_fragment:Iy,aomap_pars_fragment:Fy,batching_pars_vertex:Hy,batching_vertex:Gy,begin_vertex:Vy,beginnormal_vertex:ky,bsdfs:Xy,iridescence_fragment:Wy,bumpmap_pars_fragment:qy,clipping_planes_fragment:Yy,clipping_planes_pars_fragment:Zy,clipping_planes_pars_vertex:Ky,clipping_planes_vertex:Qy,color_fragment:jy,color_pars_fragment:Jy,color_pars_vertex:$y,color_vertex:tE,common:eE,cube_uv_reflection_fragment:nE,defaultnormal_vertex:iE,displacementmap_pars_vertex:aE,displacementmap_vertex:rE,emissivemap_fragment:sE,emissivemap_pars_fragment:oE,colorspace_fragment:lE,colorspace_pars_fragment:cE,envmap_fragment:uE,envmap_common_pars_fragment:fE,envmap_pars_fragment:hE,envmap_pars_vertex:dE,envmap_physical_pars_fragment:TE,envmap_vertex:pE,fog_vertex:mE,fog_pars_vertex:gE,fog_fragment:_E,fog_pars_fragment:vE,gradientmap_pars_fragment:xE,lightmap_pars_fragment:SE,lights_lambert_fragment:ME,lights_lambert_pars_fragment:yE,lights_pars_begin:EE,lights_toon_fragment:bE,lights_toon_pars_fragment:AE,lights_phong_fragment:RE,lights_phong_pars_fragment:CE,lights_physical_fragment:wE,lights_physical_pars_fragment:DE,lights_fragment_begin:UE,lights_fragment_maps:LE,lights_fragment_end:NE,logdepthbuf_fragment:OE,logdepthbuf_pars_fragment:PE,logdepthbuf_pars_vertex:BE,logdepthbuf_vertex:zE,map_fragment:IE,map_pars_fragment:FE,map_particle_fragment:HE,map_particle_pars_fragment:GE,metalnessmap_fragment:VE,metalnessmap_pars_fragment:kE,morphinstance_vertex:XE,morphcolor_vertex:WE,morphnormal_vertex:qE,morphtarget_pars_vertex:YE,morphtarget_vertex:ZE,normal_fragment_begin:KE,normal_fragment_maps:QE,normal_pars_fragment:jE,normal_pars_vertex:JE,normal_vertex:$E,normalmap_pars_fragment:tT,clearcoat_normal_fragment_begin:eT,clearcoat_normal_fragment_maps:nT,clearcoat_pars_fragment:iT,iridescence_pars_fragment:aT,opaque_fragment:rT,packing:sT,premultiplied_alpha_fragment:oT,project_vertex:lT,dithering_fragment:cT,dithering_pars_fragment:uT,roughnessmap_fragment:fT,roughnessmap_pars_fragment:hT,shadowmap_pars_fragment:dT,shadowmap_pars_vertex:pT,shadowmap_vertex:mT,shadowmask_pars_fragment:gT,skinbase_vertex:_T,skinning_pars_vertex:vT,skinning_vertex:xT,skinnormal_vertex:ST,specularmap_fragment:MT,specularmap_pars_fragment:yT,tonemapping_fragment:ET,tonemapping_pars_fragment:TT,transmission_fragment:bT,transmission_pars_fragment:AT,uv_pars_fragment:RT,uv_pars_vertex:CT,uv_vertex:wT,worldpos_vertex:DT,background_vert:UT,background_frag:LT,backgroundCube_vert:NT,backgroundCube_frag:OT,cube_vert:PT,cube_frag:BT,depth_vert:zT,depth_frag:IT,distanceRGBA_vert:FT,distanceRGBA_frag:HT,equirect_vert:GT,equirect_frag:VT,linedashed_vert:kT,linedashed_frag:XT,meshbasic_vert:WT,meshbasic_frag:qT,meshlambert_vert:YT,meshlambert_frag:ZT,meshmatcap_vert:KT,meshmatcap_frag:QT,meshnormal_vert:jT,meshnormal_frag:JT,meshphong_vert:$T,meshphong_frag:tb,meshphysical_vert:eb,meshphysical_frag:nb,meshtoon_vert:ib,meshtoon_frag:ab,points_vert:rb,points_frag:sb,shadow_vert:ob,shadow_frag:lb,sprite_vert:cb,sprite_frag:ub},st={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},Kn={basic:{uniforms:Je([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Je([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new oe(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Je([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Je([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Je([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new oe(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Je([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Je([st.points,st.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Je([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Je([st.common,st.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Je([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Je([st.sprite,st.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Je([st.common,st.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Je([st.lights,st.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Kn.physical={uniforms:Je([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const pl={r:0,b:0,g:0},Aa=new Oi,fb=new Ue;function hb(e,t,n,i,a,r,s){const o=new oe(0);let l=r===!0?0:1,c,h,d=null,f=0,p=null;function S(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:t).get(v)),v}function y(_){let v=!1;const C=S(_);C===null?u(o,l):C&&C.isColor&&(u(C,1),v=!0);const A=e.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(_,v){const C=S(v);C&&(C.isCubeTexture||C.mapping===Lc)?(h===void 0&&(h=new bi(new Lo(1,1,1),new ma({name:"BackgroundCubeMaterial",uniforms:rs(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),Aa.copy(v.backgroundRotation),Aa.x*=-1,Aa.y*=-1,Aa.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Aa.y*=-1,Aa.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(fb.makeRotationFromEuler(Aa)),h.material.toneMapped=qt.getTransfer(C.colorSpace)!==ae,(d!==C||f!==C.version||p!==e.toneMapping)&&(h.material.needsUpdate=!0,d=C,f=C.version,p=e.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new bi(new Oc(2,2),new ma({name:"BackgroundMaterial",uniforms:rs(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:pa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=qt.getTransfer(C.colorSpace)!==ae,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||f!==C.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=C,f=C.version,p=e.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,v){_.getRGB(pl,u0(e)),i.buffers.color.setClear(pl.r,pl.g,pl.b,v,s)}function m(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),l=v,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(o,l)},render:y,addToRenderList:g,dispose:m}}function db(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=f(null);let r=a,s=!1;function o(M,U,V,G,q){let J=!1;const N=d(G,V,U);r!==N&&(r=N,c(r.object)),J=p(M,G,V,q),J&&S(M,G,V,q),q!==null&&t.update(q,e.ELEMENT_ARRAY_BUFFER),(J||s)&&(s=!1,v(M,U,V,G),q!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return e.createVertexArray()}function c(M){return e.bindVertexArray(M)}function h(M){return e.deleteVertexArray(M)}function d(M,U,V){const G=V.wireframe===!0;let q=i[M.id];q===void 0&&(q={},i[M.id]=q);let J=q[U.id];J===void 0&&(J={},q[U.id]=J);let N=J[G];return N===void 0&&(N=f(l()),J[G]=N),N}function f(M){const U=[],V=[],G=[];for(let q=0;q<n;q++)U[q]=0,V[q]=0,G[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:G,object:M,attributes:{},index:null}}function p(M,U,V,G){const q=r.attributes,J=U.attributes;let N=0;const k=V.getAttributes();for(const B in k)if(k[B].location>=0){const at=q[B];let _t=J[B];if(_t===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor)),at===void 0||at.attribute!==_t||_t&&at.data!==_t.data)return!0;N++}return r.attributesNum!==N||r.index!==G}function S(M,U,V,G){const q={},J=U.attributes;let N=0;const k=V.getAttributes();for(const B in k)if(k[B].location>=0){let at=J[B];at===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(at=M.instanceColor));const _t={};_t.attribute=at,at&&at.data&&(_t.data=at.data),q[B]=_t,N++}r.attributes=q,r.attributesNum=N,r.index=G}function y(){const M=r.newAttributes;for(let U=0,V=M.length;U<V;U++)M[U]=0}function g(M){u(M,0)}function u(M,U){const V=r.newAttributes,G=r.enabledAttributes,q=r.attributeDivisors;V[M]=1,G[M]===0&&(e.enableVertexAttribArray(M),G[M]=1),q[M]!==U&&(e.vertexAttribDivisor(M,U),q[M]=U)}function m(){const M=r.newAttributes,U=r.enabledAttributes;for(let V=0,G=U.length;V<G;V++)U[V]!==M[V]&&(e.disableVertexAttribArray(V),U[V]=0)}function _(M,U,V,G,q,J,N){N===!0?e.vertexAttribIPointer(M,U,V,q,J):e.vertexAttribPointer(M,U,V,G,q,J)}function v(M,U,V,G){y();const q=G.attributes,J=V.getAttributes(),N=U.defaultAttributeValues;for(const k in J){const B=J[k];if(B.location>=0){let tt=q[k];if(tt===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor)),tt!==void 0){const at=tt.normalized,_t=tt.itemSize,Ot=t.get(tt);if(Ot===void 0)continue;const Yt=Ot.buffer,W=Ot.type,it=Ot.bytesPerElement,Mt=W===e.INT||W===e.UNSIGNED_INT||tt.gpuType===Rd;if(tt.isInterleavedBufferAttribute){const ut=tt.data,yt=ut.stride,Zt=tt.offset;if(ut.isInstancedInterleavedBuffer){for(let wt=0;wt<B.locationSize;wt++)u(B.location+wt,ut.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let wt=0;wt<B.locationSize;wt++)g(B.location+wt);e.bindBuffer(e.ARRAY_BUFFER,Yt);for(let wt=0;wt<B.locationSize;wt++)_(B.location+wt,_t/B.locationSize,W,at,yt*it,(Zt+_t/B.locationSize*wt)*it,Mt)}else{if(tt.isInstancedBufferAttribute){for(let ut=0;ut<B.locationSize;ut++)u(B.location+ut,tt.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ut=0;ut<B.locationSize;ut++)g(B.location+ut);e.bindBuffer(e.ARRAY_BUFFER,Yt);for(let ut=0;ut<B.locationSize;ut++)_(B.location+ut,_t/B.locationSize,W,at,_t*it,_t/B.locationSize*ut*it,Mt)}}else if(N!==void 0){const at=N[k];if(at!==void 0)switch(at.length){case 2:e.vertexAttrib2fv(B.location,at);break;case 3:e.vertexAttrib3fv(B.location,at);break;case 4:e.vertexAttrib4fv(B.location,at);break;default:e.vertexAttrib1fv(B.location,at)}}}}m()}function C(){w();for(const M in i){const U=i[M];for(const V in U){const G=U[V];for(const q in G)h(G[q].object),delete G[q];delete U[V]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const U=i[M.id];for(const V in U){const G=U[V];for(const q in G)h(G[q].object),delete G[q];delete U[V]}delete i[M.id]}function b(M){for(const U in i){const V=i[U];if(V[M.id]===void 0)continue;const G=V[M.id];for(const q in G)h(G[q].object),delete G[q];delete V[M.id]}}function w(){T(),s=!0,r!==a&&(r=a,c(r.object))}function T(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:w,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:y,enableAttribute:g,disableUnusedAttributes:m}}function pb(e,t,n){let i;function a(c){i=c}function r(c,h){e.drawArrays(i,c,h),n.update(h,i,1)}function s(c,h,d){d!==0&&(e.drawArraysInstanced(i,c,h,d),n.update(h,i,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let S=0;S<d;S++)p+=h[S];n.update(p,i,1)}function l(c,h,d,f){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let S=0;S<c.length;S++)s(c[S],h[S],f[S]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let S=0;for(let y=0;y<d;y++)S+=h[y]*f[y];n.update(S,i,1)}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function mb(e,t,n,i){let a;function r(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(b){return!(b!==Xn&&i.convert(b)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const w=b===Co&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Ni&&i.convert(b)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Ei&&!w)}function l(b){if(b==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),u=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),C=S>0,A=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:S,maxTextureSize:y,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:C,maxSamples:A}}function gb(e){const t=this;let n=null,i=0,a=!1,r=!1;const s=new Ua,o=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||a;return a=f,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,p){const S=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,u=e.get(d);if(!a||S===null||S.length===0||r&&!g)r?h(null):c();else{const m=r?0:i,_=m*4;let v=u.clippingState||null;l.value=v,v=h(S,f,_,p);for(let C=0;C!==_;++C)v[C]=n[C];u.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,p,S){const y=d!==null?d.length:0;let g=null;if(y!==0){if(g=l.value,S!==!0||g===null){const u=p+y*4,m=f.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<u)&&(g=new Float32Array(u));for(let _=0,v=p;_!==y;++_,v+=4)s.copy(d[_]).applyMatrix4(m,o),s.normal.toArray(g,v),g[v+3]=s.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}function _b(e){let t=new WeakMap;function n(s,o){return o===th?s.mapping=ns:o===eh&&(s.mapping=is),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===th||o===eh)if(t.has(s)){const l=t.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new My(l.height);return c.fromEquirectangularTexture(e,s),t.set(s,c),s.addEventListener("dispose",a),n(c.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const Lr=4,Pm=[.125,.215,.35,.446,.526,.582],Oa=20,ku=new Cy,Bm=new oe;let Xu=null,Wu=0,qu=0,Yu=!1;const La=(1+Math.sqrt(5))/2,gr=1/La,zm=[new I(-La,gr,0),new I(La,gr,0),new I(-gr,0,La),new I(gr,0,La),new I(0,La,-gr),new I(0,La,gr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],vb=new I;class Im{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,a=100,r={}){const{size:s=256,position:o=vb}=r;Xu=this._renderer.getRenderTarget(),Wu=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel(),Yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xu,Wu,qu),this._renderer.xr.enabled=Yu,t.scissorTest=!1,ml(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===ns||t.mapping===is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xu=this._renderer.getRenderTarget(),Wu=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel(),Yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:Co,format:Xn,colorSpace:as,depthBuffer:!1},a=Fm(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fm(t,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xb(r)),this._blurMaterial=Sb(r,t,n)}return a}_compileMaterial(t){const n=new bi(this._lodPlanes[0],t);this._renderer.compile(n,ku)}_sceneToCubeUV(t,n,i,a,r){const l=new Vn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Bm),d.toneMapping=ua,d.autoClear=!1;const S=new o0({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),y=new bi(new Lo,S);let g=!1;const u=t.background;u?u.isColor&&(S.color.copy(u),t.background=null,g=!0):(S.color.copy(Bm),g=!0);for(let m=0;m<6;m++){const _=m%3;_===0?(l.up.set(0,c[m],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[m],r.y,r.z)):_===1?(l.up.set(0,0,c[m]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[m],r.z)):(l.up.set(0,c[m],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[m]));const v=this._cubeSize;ml(a,_*v,m>2?v:0,v,v),d.setRenderTarget(a),g&&d.render(y,l),d.render(t,l)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=u}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===ns||t.mapping===is;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hm());const r=a?this._cubemapMaterial:this._equirectMaterial,s=new bi(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ml(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,ku)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=zm[(a-r-1)%zm.length];this._blur(t,r-1,r,s,o)}n.autoClear=i}_blur(t,n,i,a,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,n,i,a,"latitudinal",r),this._halfBlur(s,t,i,i,a,"longitudinal",r)}_halfBlur(t,n,i,a,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new bi(this._lodPlanes[a],c),f=c.uniforms,p=this._sizeLods[i]-1,S=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Oa-1),y=r/S,g=isFinite(r)?1+Math.floor(h*y):Oa;g>Oa&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Oa}`);const u=[];let m=0;for(let b=0;b<Oa;++b){const w=b/y,T=Math.exp(-w*w/2);u.push(T),b===0?m+=T:b<g&&(m+=2*T)}for(let b=0;b<u.length;b++)u[b]=u[b]/m;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=u,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=S,f.mipInt.value=_-i;const v=this._sizeLods[a],C=3*v*(a>_-Lr?a-_+Lr:0),A=4*(this._cubeSize-v);ml(n,C,A,3*v,2*v),l.setRenderTarget(n),l.render(d,ku)}}function xb(e){const t=[],n=[],i=[];let a=e;const r=e-Lr+1+Pm.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);n.push(o);let l=1/o;s>e-Lr?l=Pm[s-e+Lr-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,S=6,y=3,g=2,u=1,m=new Float32Array(y*S*p),_=new Float32Array(g*S*p),v=new Float32Array(u*S*p);for(let A=0;A<p;A++){const b=A%3*2/3-1,w=A>2?0:-1,T=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];m.set(T,y*S*A),_.set(f,g*S*A);const M=[A,A,A,A,A,A];v.set(M,u*S*A)}const C=new va;C.setAttribute("position",new ni(m,y)),C.setAttribute("uv",new ni(_,g)),C.setAttribute("faceIndex",new ni(v,u)),t.push(C),a>Lr&&a--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Fm(e,t,n){const i=new Ka(e,t,n);return i.texture.mapping=Lc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ml(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function Sb(e,t,n){const i=new Float32Array(Oa),a=new I(0,1,0);return new ma({name:"SphericalGaussianBlur",defines:{n:Oa,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ca,depthTest:!1,depthWrite:!1})}function Hm(){return new ma({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ca,depthTest:!1,depthWrite:!1})}function Gm(){return new ma({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ca,depthTest:!1,depthWrite:!1})}function Bd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Mb(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===th||l===eh,h=l===ns||l===is;if(c||h){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new Im(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&a(p)?(n===null&&(n=new Im(e)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function a(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function s(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function yb(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&Vr("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function Eb(e,t,n,i){const a={},r=new WeakMap;function s(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const S in f.attributes)t.remove(f.attributes[S]);f.removeEventListener("dispose",s),delete a[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return a[f.id]===!0||(f.addEventListener("dispose",s),a[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)t.update(f[p],e.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,S=d.attributes.position;let y=0;if(p!==null){const m=p.array;y=p.version;for(let _=0,v=m.length;_<v;_+=3){const C=m[_+0],A=m[_+1],b=m[_+2];f.push(C,A,A,b,b,C)}}else if(S!==void 0){const m=S.array;y=S.version;for(let _=0,v=m.length/3-1;_<v;_+=3){const C=_+0,A=_+1,b=_+2;f.push(C,A,A,b,b,C)}}else return;const g=new(i0(f)?c0:l0)(f,1);g.version=y;const u=r.get(d);u&&t.remove(u),r.set(d,g)}function h(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Tb(e,t,n){let i;function a(f){i=f}let r,s;function o(f){r=f.type,s=f.bytesPerElement}function l(f,p){e.drawElements(i,p,r,f*s),n.update(p,i,1)}function c(f,p,S){S!==0&&(e.drawElementsInstanced(i,p,r,f*s,S),n.update(p,i,S))}function h(f,p,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,S);let g=0;for(let u=0;u<S;u++)g+=p[u];n.update(g,i,1)}function d(f,p,S,y){if(S===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<f.length;u++)c(f[u]/s,p[u],y[u]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,y,0,S);let u=0;for(let m=0;m<S;m++)u+=p[m]*y[m];n.update(u,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function bb(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(n.calls++,s){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function Ab(e,t,n){const i=new WeakMap,a=new Re;function r(s,o,l){const c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let T=function(){b.dispose(),i.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],m=o.morphAttributes.color||[];let _=0;p===!0&&(_=1),S===!0&&(_=2),y===!0&&(_=3);let v=o.attributes.position.count*_,C=1;v>t.maxTextureSize&&(C=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const A=new Float32Array(v*C*4*d),b=new a0(A,v,C,d);b.type=Ei,b.needsUpdate=!0;const w=_*4;for(let M=0;M<d;M++){const U=g[M],V=u[M],G=m[M],q=v*C*4*M;for(let J=0;J<U.count;J++){const N=J*w;p===!0&&(a.fromBufferAttribute(U,J),A[q+N+0]=a.x,A[q+N+1]=a.y,A[q+N+2]=a.z,A[q+N+3]=0),S===!0&&(a.fromBufferAttribute(V,J),A[q+N+4]=a.x,A[q+N+5]=a.y,A[q+N+6]=a.z,A[q+N+7]=0),y===!0&&(a.fromBufferAttribute(G,J),A[q+N+8]=a.x,A[q+N+9]=a.y,A[q+N+10]=a.z,A[q+N+11]=G.itemSize===4?a.w:1)}}f={count:d,texture:b,size:new $t(v,C)},i.set(o,f),o.addEventListener("dispose",T)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,n);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];const S=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",S),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:r}}function Rb(e,t,n,i){let a=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,d=t.get(l,h);if(a.get(d)!==c&&(t.update(d),a.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;a.get(f)!==c&&(f.update(),a.set(f,c))}return d}function s(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:s}}const _0=new on,Vm=new p0(1,1),v0=new a0,x0=new iy,S0=new h0,km=[],Xm=[],Wm=new Float32Array(16),qm=new Float32Array(9),Ym=new Float32Array(4);function ds(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let r=km[a];if(r===void 0&&(r=new Float32Array(a),km[a]=r),t!==0){i.toArray(r,0);for(let s=1,o=0;s!==t;++s)o+=n,e[s].toArray(r,o)}return r}function Be(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function ze(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Pc(e,t){let n=Xm[t];n===void 0&&(n=new Int32Array(t),Xm[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function Cb(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function wb(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Be(n,t))return;e.uniform2fv(this.addr,t),ze(n,t)}}function Db(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Be(n,t))return;e.uniform3fv(this.addr,t),ze(n,t)}}function Ub(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Be(n,t))return;e.uniform4fv(this.addr,t),ze(n,t)}}function Lb(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Be(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ze(n,t)}else{if(Be(n,i))return;Ym.set(i),e.uniformMatrix2fv(this.addr,!1,Ym),ze(n,i)}}function Nb(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Be(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ze(n,t)}else{if(Be(n,i))return;qm.set(i),e.uniformMatrix3fv(this.addr,!1,qm),ze(n,i)}}function Ob(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Be(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ze(n,t)}else{if(Be(n,i))return;Wm.set(i),e.uniformMatrix4fv(this.addr,!1,Wm),ze(n,i)}}function Pb(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Bb(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Be(n,t))return;e.uniform2iv(this.addr,t),ze(n,t)}}function zb(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Be(n,t))return;e.uniform3iv(this.addr,t),ze(n,t)}}function Ib(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Be(n,t))return;e.uniform4iv(this.addr,t),ze(n,t)}}function Fb(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Hb(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Be(n,t))return;e.uniform2uiv(this.addr,t),ze(n,t)}}function Gb(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Be(n,t))return;e.uniform3uiv(this.addr,t),ze(n,t)}}function Vb(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Be(n,t))return;e.uniform4uiv(this.addr,t),ze(n,t)}}function kb(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let r;this.type===e.SAMPLER_2D_SHADOW?(Vm.compareFunction=n0,r=Vm):r=_0,n.setTexture2D(t||r,a)}function Xb(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||x0,a)}function Wb(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||S0,a)}function qb(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||v0,a)}function Yb(e){switch(e){case 5126:return Cb;case 35664:return wb;case 35665:return Db;case 35666:return Ub;case 35674:return Lb;case 35675:return Nb;case 35676:return Ob;case 5124:case 35670:return Pb;case 35667:case 35671:return Bb;case 35668:case 35672:return zb;case 35669:case 35673:return Ib;case 5125:return Fb;case 36294:return Hb;case 36295:return Gb;case 36296:return Vb;case 35678:case 36198:case 36298:case 36306:case 35682:return kb;case 35679:case 36299:case 36307:return Xb;case 35680:case 36300:case 36308:case 36293:return Wb;case 36289:case 36303:case 36311:case 36292:return qb}}function Zb(e,t){e.uniform1fv(this.addr,t)}function Kb(e,t){const n=ds(t,this.size,2);e.uniform2fv(this.addr,n)}function Qb(e,t){const n=ds(t,this.size,3);e.uniform3fv(this.addr,n)}function jb(e,t){const n=ds(t,this.size,4);e.uniform4fv(this.addr,n)}function Jb(e,t){const n=ds(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function $b(e,t){const n=ds(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function tA(e,t){const n=ds(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function eA(e,t){e.uniform1iv(this.addr,t)}function nA(e,t){e.uniform2iv(this.addr,t)}function iA(e,t){e.uniform3iv(this.addr,t)}function aA(e,t){e.uniform4iv(this.addr,t)}function rA(e,t){e.uniform1uiv(this.addr,t)}function sA(e,t){e.uniform2uiv(this.addr,t)}function oA(e,t){e.uniform3uiv(this.addr,t)}function lA(e,t){e.uniform4uiv(this.addr,t)}function cA(e,t,n){const i=this.cache,a=t.length,r=Pc(n,a);Be(i,r)||(e.uniform1iv(this.addr,r),ze(i,r));for(let s=0;s!==a;++s)n.setTexture2D(t[s]||_0,r[s])}function uA(e,t,n){const i=this.cache,a=t.length,r=Pc(n,a);Be(i,r)||(e.uniform1iv(this.addr,r),ze(i,r));for(let s=0;s!==a;++s)n.setTexture3D(t[s]||x0,r[s])}function fA(e,t,n){const i=this.cache,a=t.length,r=Pc(n,a);Be(i,r)||(e.uniform1iv(this.addr,r),ze(i,r));for(let s=0;s!==a;++s)n.setTextureCube(t[s]||S0,r[s])}function hA(e,t,n){const i=this.cache,a=t.length,r=Pc(n,a);Be(i,r)||(e.uniform1iv(this.addr,r),ze(i,r));for(let s=0;s!==a;++s)n.setTexture2DArray(t[s]||v0,r[s])}function dA(e){switch(e){case 5126:return Zb;case 35664:return Kb;case 35665:return Qb;case 35666:return jb;case 35674:return Jb;case 35675:return $b;case 35676:return tA;case 5124:case 35670:return eA;case 35667:case 35671:return nA;case 35668:case 35672:return iA;case 35669:case 35673:return aA;case 5125:return rA;case 36294:return sA;case 36295:return oA;case 36296:return lA;case 35678:case 36198:case 36298:case 36306:case 35682:return cA;case 35679:case 36299:case 36307:return uA;case 35680:case 36300:case 36308:case 36293:return fA;case 36289:case 36303:case 36311:case 36292:return hA}}class pA{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Yb(n.type)}}class mA{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=dA(n.type)}}class gA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(t,n[o.id],i)}}}const Zu=/(\w+)(\])?(\[|\.)?/g;function Zm(e,t){e.seq.push(t),e.map[t.id]=t}function _A(e,t,n){const i=e.name,a=i.length;for(Zu.lastIndex=0;;){const r=Zu.exec(i),s=Zu.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){Zm(n,c===void 0?new pA(o,e,t):new mA(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new gA(o),Zm(n,d)),n=d}}}class Pl{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=t.getActiveUniform(n,a),s=t.getUniformLocation(n,r.name);_A(r,s,this)}}setValue(t,n,i,a){const r=this.map[n];r!==void 0&&r.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let r=0,s=n.length;r!==s;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,r=t.length;a!==r;++a){const s=t[a];s.id in n&&i.push(s)}return i}}function Km(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const vA=37297;let xA=0;function SA(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===t?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}const Qm=new Pt;function MA(e){qt._getMatrix(Qm,qt.workingColorSpace,e);const t=`mat3( ${Qm.elements.map(n=>n.toFixed(4))} )`;switch(qt.getTransfer(e)){case hc:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function jm(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t).trim();if(i&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const s=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+SA(e.getShaderSource(t),s)}else return a}function yA(e,t){const n=MA(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function EA(e,t){let n;switch(t){case CM:n="Linear";break;case wM:n="Reinhard";break;case DM:n="Cineon";break;case UM:n="ACESFilmic";break;case NM:n="AgX";break;case OM:n="Neutral";break;case LM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const gl=new I;function TA(){qt.getLuminanceCoefficients(gl);const e=gl.x.toFixed(4),t=gl.y.toFixed(4),n=gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bA(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function AA(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function RA(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=e.getActiveAttrib(t,a),s=r.name;let o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:e.getAttribLocation(t,s),locationSize:o}}return n}function Ls(e){return e!==""}function Jm(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $m(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const CA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uh(e){return e.replace(CA,DA)}const wA=new Map;function DA(e,t){let n=zt[t];if(n===void 0){const i=wA.get(t);if(i!==void 0)n=zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Uh(n)}const UA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tg(e){return e.replace(UA,LA)}function LA(e,t,n,i){let a="";for(let r=parseInt(t);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function eg(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function NA(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Wv?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===oM?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===mi&&(t="SHADOWMAP_TYPE_VSM"),t}function OA(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case ns:case is:t="ENVMAP_TYPE_CUBE";break;case Lc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function PA(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case is:t="ENVMAP_MODE_REFRACTION";break}return t}function BA(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case qv:t="ENVMAP_BLENDING_MULTIPLY";break;case AM:t="ENVMAP_BLENDING_MIX";break;case RM:t="ENVMAP_BLENDING_ADD";break}return t}function zA(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function IA(e,t,n,i){const a=e.getContext(),r=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=NA(n),c=OA(n),h=PA(n),d=BA(n),f=zA(n),p=bA(n),S=AA(r),y=a.createProgram();let g,u,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(Ls).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(Ls).join(`
`),u.length>0&&(u+=`
`)):(g=[eg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),u=[eg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ua?"#define TONE_MAPPING":"",n.toneMapping!==ua?zt.tonemapping_pars_fragment:"",n.toneMapping!==ua?EA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,yA("linearToOutputTexel",n.outputColorSpace),TA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ls).join(`
`)),s=Uh(s),s=Jm(s,n),s=$m(s,n),o=Uh(o),o=Jm(o,n),o=$m(o,n),s=tg(s),o=tg(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",n.glslVersion===gm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===gm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const _=m+g+s,v=m+u+o,C=Km(a,a.VERTEX_SHADER,_),A=Km(a,a.FRAGMENT_SHADER,v);a.attachShader(y,C),a.attachShader(y,A),n.index0AttributeName!==void 0?a.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function b(U){if(e.debug.checkShaderErrors){const V=a.getProgramInfoLog(y).trim(),G=a.getShaderInfoLog(C).trim(),q=a.getShaderInfoLog(A).trim();let J=!0,N=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if(J=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,y,C,A);else{const k=jm(a,C,"vertex"),B=jm(a,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+V+`
`+k+`
`+B)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(G===""||q==="")&&(N=!1);N&&(U.diagnostics={runnable:J,programLog:V,vertexShader:{log:G,prefix:g},fragmentShader:{log:q,prefix:u}})}a.deleteShader(C),a.deleteShader(A),w=new Pl(a,y),T=RA(a,y)}let w;this.getUniforms=function(){return w===void 0&&b(this),w};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=a.getProgramParameter(y,vA)),M},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=xA++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=A,this}let FA=0;class HA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(t);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new GA(t),n.set(t,i)),i}}class GA{constructor(t){this.id=FA++,this.code=t,this.usedTimes=0}}function VA(e,t,n,i,a,r,s){const o=new r0,l=new HA,c=new Set,h=[],d=a.logarithmicDepthBuffer,f=a.vertexTextures;let p=a.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return c.add(T),T===0?"uv":`uv${T}`}function g(T,M,U,V,G){const q=V.fog,J=G.geometry,N=T.isMeshStandardMaterial?V.environment:null,k=(T.isMeshStandardMaterial?n:t).get(T.envMap||N),B=k&&k.mapping===Lc?k.image.height:null,tt=S[T.type];T.precision!==null&&(p=a.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const at=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,_t=at!==void 0?at.length:0;let Ot=0;J.morphAttributes.position!==void 0&&(Ot=1),J.morphAttributes.normal!==void 0&&(Ot=2),J.morphAttributes.color!==void 0&&(Ot=3);let Yt,W,it,Mt;if(tt){const te=Kn[tt];Yt=te.vertexShader,W=te.fragmentShader}else Yt=T.vertexShader,W=T.fragmentShader,l.update(T),it=l.getVertexShaderID(T),Mt=l.getFragmentShaderID(T);const ut=e.getRenderTarget(),yt=e.state.buffers.depth.getReversed(),Zt=G.isInstancedMesh===!0,wt=G.isBatchedMesh===!0,ve=!!T.map,xe=!!T.matcap,Kt=!!k,D=!!T.aoMap,Qe=!!T.lightMap,Qt=!!T.bumpMap,ue=!!T.normalMap,vt=!!T.displacementMap,Xt=!!T.emissiveMap,Tt=!!T.metalnessMap,Bt=!!T.roughnessMap,Le=T.anisotropy>0,R=T.clearcoat>0,x=T.dispersion>0,z=T.iridescence>0,Y=T.sheen>0,Q=T.transmission>0,X=Le&&!!T.anisotropyMap,xt=R&&!!T.clearcoatMap,ot=R&&!!T.clearcoatNormalMap,gt=R&&!!T.clearcoatRoughnessMap,St=z&&!!T.iridescenceMap,j=z&&!!T.iridescenceThicknessMap,ft=Y&&!!T.sheenColorMap,Rt=Y&&!!T.sheenRoughnessMap,At=!!T.specularMap,rt=!!T.specularColorMap,Lt=!!T.specularIntensityMap,L=Q&&!!T.transmissionMap,lt=Q&&!!T.thicknessMap,$=!!T.gradientMap,dt=!!T.alphaMap,et=T.alphaTest>0,K=!!T.alphaHash,pt=!!T.extensions;let Nt=ua;T.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Nt=e.toneMapping);const he={shaderID:tt,shaderType:T.type,shaderName:T.name,vertexShader:Yt,fragmentShader:W,defines:T.defines,customVertexShaderID:it,customFragmentShaderID:Mt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:wt,batchingColor:wt&&G._colorsTexture!==null,instancing:Zt,instancingColor:Zt&&G.instanceColor!==null,instancingMorph:Zt&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ut===null?e.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:as,alphaToCoverage:!!T.alphaToCoverage,map:ve,matcap:xe,envMap:Kt,envMapMode:Kt&&k.mapping,envMapCubeUVHeight:B,aoMap:D,lightMap:Qe,bumpMap:Qt,normalMap:ue,displacementMap:f&&vt,emissiveMap:Xt,normalMapObjectSpace:ue&&T.normalMapType===FM,normalMapTangentSpace:ue&&T.normalMapType===IM,metalnessMap:Tt,roughnessMap:Bt,anisotropy:Le,anisotropyMap:X,clearcoat:R,clearcoatMap:xt,clearcoatNormalMap:ot,clearcoatRoughnessMap:gt,dispersion:x,iridescence:z,iridescenceMap:St,iridescenceThicknessMap:j,sheen:Y,sheenColorMap:ft,sheenRoughnessMap:Rt,specularMap:At,specularColorMap:rt,specularIntensityMap:Lt,transmission:Q,transmissionMap:L,thicknessMap:lt,gradientMap:$,opaque:T.transparent===!1&&T.blending===Gr&&T.alphaToCoverage===!1,alphaMap:dt,alphaTest:et,alphaHash:K,combine:T.combine,mapUv:ve&&y(T.map.channel),aoMapUv:D&&y(T.aoMap.channel),lightMapUv:Qe&&y(T.lightMap.channel),bumpMapUv:Qt&&y(T.bumpMap.channel),normalMapUv:ue&&y(T.normalMap.channel),displacementMapUv:vt&&y(T.displacementMap.channel),emissiveMapUv:Xt&&y(T.emissiveMap.channel),metalnessMapUv:Tt&&y(T.metalnessMap.channel),roughnessMapUv:Bt&&y(T.roughnessMap.channel),anisotropyMapUv:X&&y(T.anisotropyMap.channel),clearcoatMapUv:xt&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:ot&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:j&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&y(T.sheenRoughnessMap.channel),specularMapUv:At&&y(T.specularMap.channel),specularColorMapUv:rt&&y(T.specularColorMap.channel),specularIntensityMapUv:Lt&&y(T.specularIntensityMap.channel),transmissionMapUv:L&&y(T.transmissionMap.channel),thicknessMapUv:lt&&y(T.thicknessMap.channel),alphaMapUv:dt&&y(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(ue||Le),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!J.attributes.uv&&(ve||dt),fog:!!q,useFog:T.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:yt,skinning:G.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Ot,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:Nt,decodeVideoTexture:ve&&T.map.isVideoTexture===!0&&qt.getTransfer(T.map.colorSpace)===ae,decodeVideoTextureEmissive:Xt&&T.emissiveMap.isVideoTexture===!0&&qt.getTransfer(T.emissiveMap.colorSpace)===ae,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===_i,flipSided:T.side===sn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:pt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&T.extensions.multiDraw===!0||wt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return he.vertexUv1s=c.has(1),he.vertexUv2s=c.has(2),he.vertexUv3s=c.has(3),c.clear(),he}function u(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const U in T.defines)M.push(U),M.push(T.defines[U]);return T.isRawShaderMaterial===!1&&(m(M,T),_(M,T),M.push(e.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function m(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function _(T,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),T.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),T.push(o.mask)}function v(T){const M=S[T.type];let U;if(M){const V=Kn[M];U=_y.clone(V.uniforms)}else U=T.uniforms;return U}function C(T,M){let U;for(let V=0,G=h.length;V<G;V++){const q=h[V];if(q.cacheKey===M){U=q,++U.usedTimes;break}}return U===void 0&&(U=new IA(e,M,T,r),h.push(U)),U}function A(T){if(--T.usedTimes===0){const M=h.indexOf(T);h[M]=h[h.length-1],h.pop(),T.destroy()}}function b(T){l.remove(T)}function w(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:v,acquireProgram:C,releaseProgram:A,releaseShaderCache:b,programs:h,dispose:w}}function kA(){let e=new WeakMap;function t(s){return e.has(s)}function n(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function i(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:r}}function XA(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function ng(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function ig(){const e=[];let t=0;const n=[],i=[],a=[];function r(){t=0,n.length=0,i.length=0,a.length=0}function s(d,f,p,S,y,g){let u=e[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:S,renderOrder:d.renderOrder,z:y,group:g},e[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=S,u.renderOrder=d.renderOrder,u.z=y,u.group=g),t++,u}function o(d,f,p,S,y,g){const u=s(d,f,p,S,y,g);p.transmission>0?i.push(u):p.transparent===!0?a.push(u):n.push(u)}function l(d,f,p,S,y,g){const u=s(d,f,p,S,y,g);p.transmission>0?i.unshift(u):p.transparent===!0?a.unshift(u):n.unshift(u)}function c(d,f){n.length>1&&n.sort(d||XA),i.length>1&&i.sort(f||ng),a.length>1&&a.sort(f||ng)}function h(){for(let d=t,f=e.length;d<f;d++){const p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:o,unshift:l,finish:h,sort:c}}function WA(){let e=new WeakMap;function t(i,a){const r=e.get(i);let s;return r===void 0?(s=new ig,e.set(i,[s])):a>=r.length?(s=new ig,r.push(s)):s=r[a],s}function n(){e=new WeakMap}return{get:t,dispose:n}}function qA(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new I,color:new oe};break;case"SpotLight":n={position:new I,direction:new I,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new oe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":n={color:new oe,position:new I,halfWidth:new I,halfHeight:new I};break}return e[t.id]=n,n}}}function YA(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let ZA=0;function KA(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function QA(e){const t=new qA,n=YA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const a=new I,r=new Ue,s=new Ue;function o(c){let h=0,d=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,S=0,y=0,g=0,u=0,m=0,_=0,v=0,C=0,A=0,b=0;c.sort(KA);for(let T=0,M=c.length;T<M;T++){const U=c[T],V=U.color,G=U.intensity,q=U.distance,J=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=V.r*G,d+=V.g*G,f+=V.b*G;else if(U.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(U.sh.coefficients[N],G);b++}else if(U.isDirectionalLight){const N=t.get(U);if(N.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const k=U.shadow,B=n.get(U);B.shadowIntensity=k.intensity,B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,i.directionalShadow[p]=B,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=U.shadow.matrix,m++}i.directional[p]=N,p++}else if(U.isSpotLight){const N=t.get(U);N.position.setFromMatrixPosition(U.matrixWorld),N.color.copy(V).multiplyScalar(G),N.distance=q,N.coneCos=Math.cos(U.angle),N.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),N.decay=U.decay,i.spot[y]=N;const k=U.shadow;if(U.map&&(i.spotLightMap[C]=U.map,C++,k.updateMatrices(U),U.castShadow&&A++),i.spotLightMatrix[y]=k.matrix,U.castShadow){const B=n.get(U);B.shadowIntensity=k.intensity,B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,i.spotShadow[y]=B,i.spotShadowMap[y]=J,v++}y++}else if(U.isRectAreaLight){const N=t.get(U);N.color.copy(V).multiplyScalar(G),N.halfWidth.set(U.width*.5,0,0),N.halfHeight.set(0,U.height*.5,0),i.rectArea[g]=N,g++}else if(U.isPointLight){const N=t.get(U);if(N.color.copy(U.color).multiplyScalar(U.intensity),N.distance=U.distance,N.decay=U.decay,U.castShadow){const k=U.shadow,B=n.get(U);B.shadowIntensity=k.intensity,B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,B.shadowCameraNear=k.camera.near,B.shadowCameraFar=k.camera.far,i.pointShadow[S]=B,i.pointShadowMap[S]=J,i.pointShadowMatrix[S]=U.shadow.matrix,_++}i.point[S]=N,S++}else if(U.isHemisphereLight){const N=t.get(U);N.skyColor.copy(U.color).multiplyScalar(G),N.groundColor.copy(U.groundColor).multiplyScalar(G),i.hemi[u]=N,u++}}g>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const w=i.hash;(w.directionalLength!==p||w.pointLength!==S||w.spotLength!==y||w.rectAreaLength!==g||w.hemiLength!==u||w.numDirectionalShadows!==m||w.numPointShadows!==_||w.numSpotShadows!==v||w.numSpotMaps!==C||w.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=g,i.point.length=S,i.hemi.length=u,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=v+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=b,w.directionalLength=p,w.pointLength=S,w.spotLength=y,w.rectAreaLength=g,w.hemiLength=u,w.numDirectionalShadows=m,w.numPointShadows=_,w.numSpotShadows=v,w.numSpotMaps=C,w.numLightProbes=b,i.version=ZA++)}function l(c,h){let d=0,f=0,p=0,S=0,y=0;const g=h.matrixWorldInverse;for(let u=0,m=c.length;u<m;u++){const _=c[u];if(_.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(g),d++}else if(_.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(g),p++}else if(_.isRectAreaLight){const v=i.rectArea[S];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),s.identity(),r.copy(_.matrixWorld),r.premultiply(g),s.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),S++}else if(_.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){const v=i.hemi[y];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),y++}}}return{setup:o,setupView:l,state:i}}function ag(e){const t=new QA(e),n=[],i=[];function a(h){c.camera=h,n.length=0,i.length=0}function r(h){n.push(h)}function s(h){i.push(h)}function o(){t.setup(n)}function l(h){t.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function jA(e){let t=new WeakMap;function n(a,r=0){const s=t.get(a);let o;return s===void 0?(o=new ag(e),t.set(a,[o])):r>=s.length?(o=new ag(e),s.push(o)):o=s[r],o}function i(){t=new WeakMap}return{get:n,dispose:i}}const JA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$A=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function t1(e,t,n){let i=new d0;const a=new $t,r=new $t,s=new Re,o=new Ay({depthPacking:zM}),l=new Ry,c={},h=n.maxTextureSize,d={[pa]:sn,[sn]:pa,[_i]:_i},f=new ma({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:JA,fragmentShader:$A}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const S=new va;S.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new bi(S,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wv;let u=this.type;this.render=function(A,b,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const T=e.getRenderTarget(),M=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),V=e.state;V.setBlending(ca),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const G=u!==mi&&this.type===mi,q=u===mi&&this.type!==mi;for(let J=0,N=A.length;J<N;J++){const k=A[J],B=k.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const tt=B.getFrameExtents();if(a.multiply(tt),r.copy(B.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(r.x=Math.floor(h/tt.x),a.x=r.x*tt.x,B.mapSize.x=r.x),a.y>h&&(r.y=Math.floor(h/tt.y),a.y=r.y*tt.y,B.mapSize.y=r.y)),B.map===null||G===!0||q===!0){const _t=this.type!==mi?{minFilter:qn,magFilter:qn}:{};B.map!==null&&B.map.dispose(),B.map=new Ka(a.x,a.y,_t),B.map.texture.name=k.name+".shadowMap",B.camera.updateProjectionMatrix()}e.setRenderTarget(B.map),e.clear();const at=B.getViewportCount();for(let _t=0;_t<at;_t++){const Ot=B.getViewport(_t);s.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),V.viewport(s),B.updateMatrices(k,_t),i=B.getFrustum(),v(b,w,B.camera,k,this.type)}B.isPointLightShadow!==!0&&this.type===mi&&m(B,w),B.needsUpdate=!1}u=this.type,g.needsUpdate=!1,e.setRenderTarget(T,M,U)};function m(A,b){const w=t.update(y);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ka(a.x,a.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(b,null,w,f,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(b,null,w,p,y,null)}function _(A,b,w,T){let M=null;const U=w.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)M=U;else if(M=w.isPointLight===!0?l:o,e.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const V=M.uuid,G=b.uuid;let q=c[V];q===void 0&&(q={},c[V]=q);let J=q[G];J===void 0&&(J=M.clone(),q[G]=J,b.addEventListener("dispose",C)),M=J}if(M.visible=b.visible,M.wireframe=b.wireframe,T===mi?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:d[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,w.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=e.properties.get(M);V.light=w}return M}function v(A,b,w,T,M){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===mi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,A.matrixWorld);const G=t.update(A),q=A.material;if(Array.isArray(q)){const J=G.groups;for(let N=0,k=J.length;N<k;N++){const B=J[N],tt=q[B.materialIndex];if(tt&&tt.visible){const at=_(A,tt,T,M);A.onBeforeShadow(e,A,b,w,G,at,B),e.renderBufferDirect(w,null,G,at,A,B),A.onAfterShadow(e,A,b,w,G,at,B)}}}else if(q.visible){const J=_(A,q,T,M);A.onBeforeShadow(e,A,b,w,G,J,null),e.renderBufferDirect(w,null,G,J,A,null),A.onAfterShadow(e,A,b,w,G,J,null)}}const V=A.children;for(let G=0,q=V.length;G<q;G++)v(V[G],b,w,T,M)}function C(A){A.target.removeEventListener("dispose",C);for(const w in c){const T=c[w],M=A.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const e1={[Yf]:Zf,[Kf]:Jf,[Qf]:$f,[es]:jf,[Zf]:Yf,[Jf]:Kf,[$f]:Qf,[jf]:es};function n1(e,t){function n(){let L=!1;const lt=new Re;let $=null;const dt=new Re(0,0,0,0);return{setMask:function(et){$!==et&&!L&&(e.colorMask(et,et,et,et),$=et)},setLocked:function(et){L=et},setClear:function(et,K,pt,Nt,he){he===!0&&(et*=Nt,K*=Nt,pt*=Nt),lt.set(et,K,pt,Nt),dt.equals(lt)===!1&&(e.clearColor(et,K,pt,Nt),dt.copy(lt))},reset:function(){L=!1,$=null,dt.set(-1,0,0,0)}}}function i(){let L=!1,lt=!1,$=null,dt=null,et=null;return{setReversed:function(K){if(lt!==K){const pt=t.get("EXT_clip_control");K?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT),lt=K;const Nt=et;et=null,this.setClear(Nt)}},getReversed:function(){return lt},setTest:function(K){K?ut(e.DEPTH_TEST):yt(e.DEPTH_TEST)},setMask:function(K){$!==K&&!L&&(e.depthMask(K),$=K)},setFunc:function(K){if(lt&&(K=e1[K]),dt!==K){switch(K){case Yf:e.depthFunc(e.NEVER);break;case Zf:e.depthFunc(e.ALWAYS);break;case Kf:e.depthFunc(e.LESS);break;case es:e.depthFunc(e.LEQUAL);break;case Qf:e.depthFunc(e.EQUAL);break;case jf:e.depthFunc(e.GEQUAL);break;case Jf:e.depthFunc(e.GREATER);break;case $f:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}dt=K}},setLocked:function(K){L=K},setClear:function(K){et!==K&&(lt&&(K=1-K),e.clearDepth(K),et=K)},reset:function(){L=!1,$=null,dt=null,et=null,lt=!1}}}function a(){let L=!1,lt=null,$=null,dt=null,et=null,K=null,pt=null,Nt=null,he=null;return{setTest:function(te){L||(te?ut(e.STENCIL_TEST):yt(e.STENCIL_TEST))},setMask:function(te){lt!==te&&!L&&(e.stencilMask(te),lt=te)},setFunc:function(te,zn,si){($!==te||dt!==zn||et!==si)&&(e.stencilFunc(te,zn,si),$=te,dt=zn,et=si)},setOp:function(te,zn,si){(K!==te||pt!==zn||Nt!==si)&&(e.stencilOp(te,zn,si),K=te,pt=zn,Nt=si)},setLocked:function(te){L=te},setClear:function(te){he!==te&&(e.clearStencil(te),he=te)},reset:function(){L=!1,lt=null,$=null,dt=null,et=null,K=null,pt=null,Nt=null,he=null}}}const r=new n,s=new i,o=new a,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,p=[],S=null,y=!1,g=null,u=null,m=null,_=null,v=null,C=null,A=null,b=new oe(0,0,0),w=0,T=!1,M=null,U=null,V=null,G=null,q=null;const J=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,k=0;const B=e.getParameter(e.VERSION);B.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(B)[1]),N=k>=1):B.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),N=k>=2);let tt=null,at={};const _t=e.getParameter(e.SCISSOR_BOX),Ot=e.getParameter(e.VIEWPORT),Yt=new Re().fromArray(_t),W=new Re().fromArray(Ot);function it(L,lt,$,dt){const et=new Uint8Array(4),K=e.createTexture();e.bindTexture(L,K),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let pt=0;pt<$;pt++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(lt,0,e.RGBA,1,1,dt,0,e.RGBA,e.UNSIGNED_BYTE,et):e.texImage2D(lt+pt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,et);return K}const Mt={};Mt[e.TEXTURE_2D]=it(e.TEXTURE_2D,e.TEXTURE_2D,1),Mt[e.TEXTURE_CUBE_MAP]=it(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[e.TEXTURE_2D_ARRAY]=it(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Mt[e.TEXTURE_3D]=it(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ut(e.DEPTH_TEST),s.setFunc(es),Qt(!1),ue(um),ut(e.CULL_FACE),D(ca);function ut(L){h[L]!==!0&&(e.enable(L),h[L]=!0)}function yt(L){h[L]!==!1&&(e.disable(L),h[L]=!1)}function Zt(L,lt){return d[L]!==lt?(e.bindFramebuffer(L,lt),d[L]=lt,L===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=lt),L===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=lt),!0):!1}function wt(L,lt){let $=p,dt=!1;if(L){$=f.get(lt),$===void 0&&($=[],f.set(lt,$));const et=L.textures;if($.length!==et.length||$[0]!==e.COLOR_ATTACHMENT0){for(let K=0,pt=et.length;K<pt;K++)$[K]=e.COLOR_ATTACHMENT0+K;$.length=et.length,dt=!0}}else $[0]!==e.BACK&&($[0]=e.BACK,dt=!0);dt&&e.drawBuffers($)}function ve(L){return S!==L?(e.useProgram(L),S=L,!0):!1}const xe={[Na]:e.FUNC_ADD,[cM]:e.FUNC_SUBTRACT,[uM]:e.FUNC_REVERSE_SUBTRACT};xe[fM]=e.MIN,xe[hM]=e.MAX;const Kt={[dM]:e.ZERO,[pM]:e.ONE,[mM]:e.SRC_COLOR,[Wf]:e.SRC_ALPHA,[MM]:e.SRC_ALPHA_SATURATE,[xM]:e.DST_COLOR,[_M]:e.DST_ALPHA,[gM]:e.ONE_MINUS_SRC_COLOR,[qf]:e.ONE_MINUS_SRC_ALPHA,[SM]:e.ONE_MINUS_DST_COLOR,[vM]:e.ONE_MINUS_DST_ALPHA,[yM]:e.CONSTANT_COLOR,[EM]:e.ONE_MINUS_CONSTANT_COLOR,[TM]:e.CONSTANT_ALPHA,[bM]:e.ONE_MINUS_CONSTANT_ALPHA};function D(L,lt,$,dt,et,K,pt,Nt,he,te){if(L===ca){y===!0&&(yt(e.BLEND),y=!1);return}if(y===!1&&(ut(e.BLEND),y=!0),L!==lM){if(L!==g||te!==T){if((u!==Na||v!==Na)&&(e.blendEquation(e.FUNC_ADD),u=Na,v=Na),te)switch(L){case Gr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case fm:e.blendFunc(e.ONE,e.ONE);break;case hm:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case dm:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Gr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case fm:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case hm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}m=null,_=null,C=null,A=null,b.set(0,0,0),w=0,g=L,T=te}return}et=et||lt,K=K||$,pt=pt||dt,(lt!==u||et!==v)&&(e.blendEquationSeparate(xe[lt],xe[et]),u=lt,v=et),($!==m||dt!==_||K!==C||pt!==A)&&(e.blendFuncSeparate(Kt[$],Kt[dt],Kt[K],Kt[pt]),m=$,_=dt,C=K,A=pt),(Nt.equals(b)===!1||he!==w)&&(e.blendColor(Nt.r,Nt.g,Nt.b,he),b.copy(Nt),w=he),g=L,T=!1}function Qe(L,lt){L.side===_i?yt(e.CULL_FACE):ut(e.CULL_FACE);let $=L.side===sn;lt&&($=!$),Qt($),L.blending===Gr&&L.transparent===!1?D(ca):D(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),r.setMask(L.colorWrite);const dt=L.stencilWrite;o.setTest(dt),dt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Xt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ut(e.SAMPLE_ALPHA_TO_COVERAGE):yt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(L){M!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),M=L)}function ue(L){L!==rM?(ut(e.CULL_FACE),L!==U&&(L===um?e.cullFace(e.BACK):L===sM?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):yt(e.CULL_FACE),U=L}function vt(L){L!==V&&(N&&e.lineWidth(L),V=L)}function Xt(L,lt,$){L?(ut(e.POLYGON_OFFSET_FILL),(G!==lt||q!==$)&&(e.polygonOffset(lt,$),G=lt,q=$)):yt(e.POLYGON_OFFSET_FILL)}function Tt(L){L?ut(e.SCISSOR_TEST):yt(e.SCISSOR_TEST)}function Bt(L){L===void 0&&(L=e.TEXTURE0+J-1),tt!==L&&(e.activeTexture(L),tt=L)}function Le(L,lt,$){$===void 0&&(tt===null?$=e.TEXTURE0+J-1:$=tt);let dt=at[$];dt===void 0&&(dt={type:void 0,texture:void 0},at[$]=dt),(dt.type!==L||dt.texture!==lt)&&(tt!==$&&(e.activeTexture($),tt=$),e.bindTexture(L,lt||Mt[L]),dt.type=L,dt.texture=lt)}function R(){const L=at[tt];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function x(){try{e.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function z(){try{e.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{e.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{e.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{e.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{e.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{e.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{e.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{e.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{e.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(L){Yt.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),Yt.copy(L))}function Rt(L){W.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),W.copy(L))}function At(L,lt){let $=c.get(lt);$===void 0&&($=new WeakMap,c.set(lt,$));let dt=$.get(L);dt===void 0&&(dt=e.getUniformBlockIndex(lt,L.name),$.set(L,dt))}function rt(L,lt){const dt=c.get(lt).get(L);l.get(lt)!==dt&&(e.uniformBlockBinding(lt,dt,L.__bindingPointIndex),l.set(lt,dt))}function Lt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),h={},tt=null,at={},d={},f=new WeakMap,p=[],S=null,y=!1,g=null,u=null,m=null,_=null,v=null,C=null,A=null,b=new oe(0,0,0),w=0,T=!1,M=null,U=null,V=null,G=null,q=null,Yt.set(0,0,e.canvas.width,e.canvas.height),W.set(0,0,e.canvas.width,e.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ut,disable:yt,bindFramebuffer:Zt,drawBuffers:wt,useProgram:ve,setBlending:D,setMaterial:Qe,setFlipSided:Qt,setCullFace:ue,setLineWidth:vt,setPolygonOffset:Xt,setScissorTest:Tt,activeTexture:Bt,bindTexture:Le,unbindTexture:R,compressedTexImage2D:x,compressedTexImage3D:z,texImage2D:St,texImage3D:j,updateUBOMapping:At,uniformBlockBinding:rt,texStorage2D:ot,texStorage3D:gt,texSubImage2D:Y,texSubImage3D:Q,compressedTexSubImage2D:X,compressedTexSubImage3D:xt,scissor:ft,viewport:Rt,reset:Lt}}function i1(e,t,n,i,a,r,s){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $t,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,x){return p?new OffscreenCanvas(R,x):pc("canvas")}function y(R,x,z){let Y=1;const Q=Le(R);if((Q.width>z||Q.height>z)&&(Y=z/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const X=Math.floor(Y*Q.width),xt=Math.floor(Y*Q.height);d===void 0&&(d=S(X,xt));const ot=x?S(X,xt):d;return ot.width=X,ot.height=xt,ot.getContext("2d").drawImage(R,0,0,X,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+X+"x"+xt+")."),ot}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function g(R){return R.generateMipmaps}function u(R){e.generateMipmap(R)}function m(R){return R.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?e.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function _(R,x,z,Y,Q=!1){if(R!==null){if(e[R]!==void 0)return e[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let X=x;if(x===e.RED&&(z===e.FLOAT&&(X=e.R32F),z===e.HALF_FLOAT&&(X=e.R16F),z===e.UNSIGNED_BYTE&&(X=e.R8)),x===e.RED_INTEGER&&(z===e.UNSIGNED_BYTE&&(X=e.R8UI),z===e.UNSIGNED_SHORT&&(X=e.R16UI),z===e.UNSIGNED_INT&&(X=e.R32UI),z===e.BYTE&&(X=e.R8I),z===e.SHORT&&(X=e.R16I),z===e.INT&&(X=e.R32I)),x===e.RG&&(z===e.FLOAT&&(X=e.RG32F),z===e.HALF_FLOAT&&(X=e.RG16F),z===e.UNSIGNED_BYTE&&(X=e.RG8)),x===e.RG_INTEGER&&(z===e.UNSIGNED_BYTE&&(X=e.RG8UI),z===e.UNSIGNED_SHORT&&(X=e.RG16UI),z===e.UNSIGNED_INT&&(X=e.RG32UI),z===e.BYTE&&(X=e.RG8I),z===e.SHORT&&(X=e.RG16I),z===e.INT&&(X=e.RG32I)),x===e.RGB_INTEGER&&(z===e.UNSIGNED_BYTE&&(X=e.RGB8UI),z===e.UNSIGNED_SHORT&&(X=e.RGB16UI),z===e.UNSIGNED_INT&&(X=e.RGB32UI),z===e.BYTE&&(X=e.RGB8I),z===e.SHORT&&(X=e.RGB16I),z===e.INT&&(X=e.RGB32I)),x===e.RGBA_INTEGER&&(z===e.UNSIGNED_BYTE&&(X=e.RGBA8UI),z===e.UNSIGNED_SHORT&&(X=e.RGBA16UI),z===e.UNSIGNED_INT&&(X=e.RGBA32UI),z===e.BYTE&&(X=e.RGBA8I),z===e.SHORT&&(X=e.RGBA16I),z===e.INT&&(X=e.RGBA32I)),x===e.RGB&&z===e.UNSIGNED_INT_5_9_9_9_REV&&(X=e.RGB9_E5),x===e.RGBA){const xt=Q?hc:qt.getTransfer(Y);z===e.FLOAT&&(X=e.RGBA32F),z===e.HALF_FLOAT&&(X=e.RGBA16F),z===e.UNSIGNED_BYTE&&(X=xt===ae?e.SRGB8_ALPHA8:e.RGBA8),z===e.UNSIGNED_SHORT_4_4_4_4&&(X=e.RGBA4),z===e.UNSIGNED_SHORT_5_5_5_1&&(X=e.RGB5_A1)}return(X===e.R16F||X===e.R32F||X===e.RG16F||X===e.RG32F||X===e.RGBA16F||X===e.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function v(R,x){let z;return R?x===null||x===Za||x===lo?z=e.DEPTH24_STENCIL8:x===Ei?z=e.DEPTH32F_STENCIL8:x===oo&&(z=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Za||x===lo?z=e.DEPTH_COMPONENT24:x===Ei?z=e.DEPTH_COMPONENT32F:x===oo&&(z=e.DEPTH_COMPONENT16),z}function C(R,x){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==qn&&R.minFilter!==Jn?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function A(R){const x=R.target;x.removeEventListener("dispose",A),w(x),x.isVideoTexture&&h.delete(x)}function b(R){const x=R.target;x.removeEventListener("dispose",b),M(x)}function w(R){const x=i.get(R);if(x.__webglInit===void 0)return;const z=R.source,Y=f.get(z);if(Y){const Q=Y[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(R),Object.keys(Y).length===0&&f.delete(z)}i.remove(R)}function T(R){const x=i.get(R);e.deleteTexture(x.__webglTexture);const z=R.source,Y=f.get(z);delete Y[x.__cacheKey],s.memory.textures--}function M(R){const x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let Q=0;Q<x.__webglFramebuffer[Y].length;Q++)e.deleteFramebuffer(x.__webglFramebuffer[Y][Q]);else e.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)e.deleteFramebuffer(x.__webglFramebuffer[Y]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const z=R.textures;for(let Y=0,Q=z.length;Y<Q;Y++){const X=i.get(z[Y]);X.__webglTexture&&(e.deleteTexture(X.__webglTexture),s.memory.textures--),i.remove(z[Y])}i.remove(R)}let U=0;function V(){U=0}function G(){const R=U;return R>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+a.maxTextures),U+=1,R}function q(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function J(R,x){const z=i.get(R);if(R.isVideoTexture&&Tt(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(z,R,x);return}}n.bindTexture(e.TEXTURE_2D,z.__webglTexture,e.TEXTURE0+x)}function N(R,x){const z=i.get(R);if(R.version>0&&z.__version!==R.version){Mt(z,R,x);return}n.bindTexture(e.TEXTURE_2D_ARRAY,z.__webglTexture,e.TEXTURE0+x)}function k(R,x){const z=i.get(R);if(R.version>0&&z.__version!==R.version){Mt(z,R,x);return}n.bindTexture(e.TEXTURE_3D,z.__webglTexture,e.TEXTURE0+x)}function B(R,x){const z=i.get(R);if(R.version>0&&z.__version!==R.version){ut(z,R,x);return}n.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture,e.TEXTURE0+x)}const tt={[nh]:e.REPEAT,[Pa]:e.CLAMP_TO_EDGE,[ih]:e.MIRRORED_REPEAT},at={[qn]:e.NEAREST,[PM]:e.NEAREST_MIPMAP_NEAREST,[Ko]:e.NEAREST_MIPMAP_LINEAR,[Jn]:e.LINEAR,[vu]:e.LINEAR_MIPMAP_NEAREST,[Ba]:e.LINEAR_MIPMAP_LINEAR},_t={[HM]:e.NEVER,[qM]:e.ALWAYS,[GM]:e.LESS,[n0]:e.LEQUAL,[VM]:e.EQUAL,[WM]:e.GEQUAL,[kM]:e.GREATER,[XM]:e.NOTEQUAL};function Ot(R,x){if(x.type===Ei&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Jn||x.magFilter===vu||x.magFilter===Ko||x.magFilter===Ba||x.minFilter===Jn||x.minFilter===vu||x.minFilter===Ko||x.minFilter===Ba)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(R,e.TEXTURE_WRAP_S,tt[x.wrapS]),e.texParameteri(R,e.TEXTURE_WRAP_T,tt[x.wrapT]),(R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY)&&e.texParameteri(R,e.TEXTURE_WRAP_R,tt[x.wrapR]),e.texParameteri(R,e.TEXTURE_MAG_FILTER,at[x.magFilter]),e.texParameteri(R,e.TEXTURE_MIN_FILTER,at[x.minFilter]),x.compareFunction&&(e.texParameteri(R,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(R,e.TEXTURE_COMPARE_FUNC,_t[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===qn||x.minFilter!==Ko&&x.minFilter!==Ba||x.type===Ei&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");e.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,a.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Yt(R,x){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",A));const Y=x.source;let Q=f.get(Y);Q===void 0&&(Q={},f.set(Y,Q));const X=q(x);if(X!==R.__cacheKey){Q[X]===void 0&&(Q[X]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,z=!0),Q[X].usedTimes++;const xt=Q[R.__cacheKey];xt!==void 0&&(Q[R.__cacheKey].usedTimes--,xt.usedTimes===0&&T(x)),R.__cacheKey=X,R.__webglTexture=Q[X].texture}return z}function W(R,x,z){return Math.floor(Math.floor(R/z)/x)}function it(R,x,z,Y){const X=R.updateRanges;if(X.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,z,Y,x.data);else{X.sort((j,ft)=>j.start-ft.start);let xt=0;for(let j=1;j<X.length;j++){const ft=X[xt],Rt=X[j],At=ft.start+ft.count,rt=W(Rt.start,x.width,4),Lt=W(ft.start,x.width,4);Rt.start<=At+1&&rt===Lt&&W(Rt.start+Rt.count-1,x.width,4)===rt?ft.count=Math.max(ft.count,Rt.start+Rt.count-ft.start):(++xt,X[xt]=Rt)}X.length=xt+1;const ot=e.getParameter(e.UNPACK_ROW_LENGTH),gt=e.getParameter(e.UNPACK_SKIP_PIXELS),St=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let j=0,ft=X.length;j<ft;j++){const Rt=X[j],At=Math.floor(Rt.start/4),rt=Math.ceil(Rt.count/4),Lt=At%x.width,L=Math.floor(At/x.width),lt=rt,$=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Lt),e.pixelStorei(e.UNPACK_SKIP_ROWS,L),n.texSubImage2D(e.TEXTURE_2D,0,Lt,L,lt,$,z,Y,x.data)}R.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ot),e.pixelStorei(e.UNPACK_SKIP_PIXELS,gt),e.pixelStorei(e.UNPACK_SKIP_ROWS,St)}}function Mt(R,x,z){let Y=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=e.TEXTURE_3D);const Q=Yt(R,x),X=x.source;n.bindTexture(Y,R.__webglTexture,e.TEXTURE0+z);const xt=i.get(X);if(X.version!==xt.__version||Q===!0){n.activeTexture(e.TEXTURE0+z);const ot=qt.getPrimaries(qt.workingColorSpace),gt=x.colorSpace===Qi?null:qt.getPrimaries(x.colorSpace),St=x.colorSpace===Qi||ot===gt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let j=y(x.image,!1,a.maxTextureSize);j=Bt(x,j);const ft=r.convert(x.format,x.colorSpace),Rt=r.convert(x.type);let At=_(x.internalFormat,ft,Rt,x.colorSpace,x.isVideoTexture);Ot(Y,x);let rt;const Lt=x.mipmaps,L=x.isVideoTexture!==!0,lt=xt.__version===void 0||Q===!0,$=X.dataReady,dt=C(x,j);if(x.isDepthTexture)At=v(x.format===uo,x.type),lt&&(L?n.texStorage2D(e.TEXTURE_2D,1,At,j.width,j.height):n.texImage2D(e.TEXTURE_2D,0,At,j.width,j.height,0,ft,Rt,null));else if(x.isDataTexture)if(Lt.length>0){L&&lt&&n.texStorage2D(e.TEXTURE_2D,dt,At,Lt[0].width,Lt[0].height);for(let et=0,K=Lt.length;et<K;et++)rt=Lt[et],L?$&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,rt.width,rt.height,ft,Rt,rt.data):n.texImage2D(e.TEXTURE_2D,et,At,rt.width,rt.height,0,ft,Rt,rt.data);x.generateMipmaps=!1}else L?(lt&&n.texStorage2D(e.TEXTURE_2D,dt,At,j.width,j.height),$&&it(x,j,ft,Rt)):n.texImage2D(e.TEXTURE_2D,0,At,j.width,j.height,0,ft,Rt,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){L&&lt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,dt,At,Lt[0].width,Lt[0].height,j.depth);for(let et=0,K=Lt.length;et<K;et++)if(rt=Lt[et],x.format!==Xn)if(ft!==null)if(L){if($)if(x.layerUpdates.size>0){const pt=Om(rt.width,rt.height,x.format,x.type);for(const Nt of x.layerUpdates){const he=rt.data.subarray(Nt*pt/rt.data.BYTES_PER_ELEMENT,(Nt+1)*pt/rt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,Nt,rt.width,rt.height,1,ft,he)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,0,rt.width,rt.height,j.depth,ft,rt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,et,At,rt.width,rt.height,j.depth,0,rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?$&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,0,rt.width,rt.height,j.depth,ft,Rt,rt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,et,At,rt.width,rt.height,j.depth,0,ft,Rt,rt.data)}else{L&&lt&&n.texStorage2D(e.TEXTURE_2D,dt,At,Lt[0].width,Lt[0].height);for(let et=0,K=Lt.length;et<K;et++)rt=Lt[et],x.format!==Xn?ft!==null?L?$&&n.compressedTexSubImage2D(e.TEXTURE_2D,et,0,0,rt.width,rt.height,ft,rt.data):n.compressedTexImage2D(e.TEXTURE_2D,et,At,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?$&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,rt.width,rt.height,ft,Rt,rt.data):n.texImage2D(e.TEXTURE_2D,et,At,rt.width,rt.height,0,ft,Rt,rt.data)}else if(x.isDataArrayTexture)if(L){if(lt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,dt,At,j.width,j.height,j.depth),$)if(x.layerUpdates.size>0){const et=Om(j.width,j.height,x.format,x.type);for(const K of x.layerUpdates){const pt=j.data.subarray(K*et/j.data.BYTES_PER_ELEMENT,(K+1)*et/j.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,K,j.width,j.height,1,ft,Rt,pt)}x.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ft,Rt,j.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,At,j.width,j.height,j.depth,0,ft,Rt,j.data);else if(x.isData3DTexture)L?(lt&&n.texStorage3D(e.TEXTURE_3D,dt,At,j.width,j.height,j.depth),$&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ft,Rt,j.data)):n.texImage3D(e.TEXTURE_3D,0,At,j.width,j.height,j.depth,0,ft,Rt,j.data);else if(x.isFramebufferTexture){if(lt)if(L)n.texStorage2D(e.TEXTURE_2D,dt,At,j.width,j.height);else{let et=j.width,K=j.height;for(let pt=0;pt<dt;pt++)n.texImage2D(e.TEXTURE_2D,pt,At,et,K,0,ft,Rt,null),et>>=1,K>>=1}}else if(Lt.length>0){if(L&&lt){const et=Le(Lt[0]);n.texStorage2D(e.TEXTURE_2D,dt,At,et.width,et.height)}for(let et=0,K=Lt.length;et<K;et++)rt=Lt[et],L?$&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,ft,Rt,rt):n.texImage2D(e.TEXTURE_2D,et,At,ft,Rt,rt);x.generateMipmaps=!1}else if(L){if(lt){const et=Le(j);n.texStorage2D(e.TEXTURE_2D,dt,At,et.width,et.height)}$&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ft,Rt,j)}else n.texImage2D(e.TEXTURE_2D,0,At,ft,Rt,j);g(x)&&u(Y),xt.__version=X.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ut(R,x,z){if(x.image.length!==6)return;const Y=Yt(R,x),Q=x.source;n.bindTexture(e.TEXTURE_CUBE_MAP,R.__webglTexture,e.TEXTURE0+z);const X=i.get(Q);if(Q.version!==X.__version||Y===!0){n.activeTexture(e.TEXTURE0+z);const xt=qt.getPrimaries(qt.workingColorSpace),ot=x.colorSpace===Qi?null:qt.getPrimaries(x.colorSpace),gt=x.colorSpace===Qi||xt===ot?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const St=x.isCompressedTexture||x.image[0].isCompressedTexture,j=x.image[0]&&x.image[0].isDataTexture,ft=[];for(let K=0;K<6;K++)!St&&!j?ft[K]=y(x.image[K],!0,a.maxCubemapSize):ft[K]=j?x.image[K].image:x.image[K],ft[K]=Bt(x,ft[K]);const Rt=ft[0],At=r.convert(x.format,x.colorSpace),rt=r.convert(x.type),Lt=_(x.internalFormat,At,rt,x.colorSpace),L=x.isVideoTexture!==!0,lt=X.__version===void 0||Y===!0,$=Q.dataReady;let dt=C(x,Rt);Ot(e.TEXTURE_CUBE_MAP,x);let et;if(St){L&&lt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,dt,Lt,Rt.width,Rt.height);for(let K=0;K<6;K++){et=ft[K].mipmaps;for(let pt=0;pt<et.length;pt++){const Nt=et[pt];x.format!==Xn?At!==null?L?$&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,0,0,Nt.width,Nt.height,At,Nt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,Lt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?$&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,0,0,Nt.width,Nt.height,At,rt,Nt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,Lt,Nt.width,Nt.height,0,At,rt,Nt.data)}}}else{if(et=x.mipmaps,L&&lt){et.length>0&&dt++;const K=Le(ft[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,dt,Lt,K.width,K.height)}for(let K=0;K<6;K++)if(j){L?$&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ft[K].width,ft[K].height,At,rt,ft[K].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Lt,ft[K].width,ft[K].height,0,At,rt,ft[K].data);for(let pt=0;pt<et.length;pt++){const he=et[pt].image[K].image;L?$&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,0,0,he.width,he.height,At,rt,he.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,Lt,he.width,he.height,0,At,rt,he.data)}}else{L?$&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,At,rt,ft[K]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Lt,At,rt,ft[K]);for(let pt=0;pt<et.length;pt++){const Nt=et[pt];L?$&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,0,0,At,rt,Nt.image[K]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,Lt,At,rt,Nt.image[K])}}}g(x)&&u(e.TEXTURE_CUBE_MAP),X.__version=Q.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function yt(R,x,z,Y,Q,X){const xt=r.convert(z.format,z.colorSpace),ot=r.convert(z.type),gt=_(z.internalFormat,xt,ot,z.colorSpace),St=i.get(x),j=i.get(z);if(j.__renderTarget=x,!St.__hasExternalTextures){const ft=Math.max(1,x.width>>X),Rt=Math.max(1,x.height>>X);Q===e.TEXTURE_3D||Q===e.TEXTURE_2D_ARRAY?n.texImage3D(Q,X,gt,ft,Rt,x.depth,0,xt,ot,null):n.texImage2D(Q,X,gt,ft,Rt,0,xt,ot,null)}n.bindFramebuffer(e.FRAMEBUFFER,R),Xt(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Y,Q,j.__webglTexture,0,vt(x)):(Q===e.TEXTURE_2D||Q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Y,Q,j.__webglTexture,X),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Zt(R,x,z){if(e.bindRenderbuffer(e.RENDERBUFFER,R),x.depthBuffer){const Y=x.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,X=v(x.stencilBuffer,Q),xt=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ot=vt(x);Xt(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ot,X,x.width,x.height):z?e.renderbufferStorageMultisample(e.RENDERBUFFER,ot,X,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,X,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,xt,e.RENDERBUFFER,R)}else{const Y=x.textures;for(let Q=0;Q<Y.length;Q++){const X=Y[Q],xt=r.convert(X.format,X.colorSpace),ot=r.convert(X.type),gt=_(X.internalFormat,xt,ot,X.colorSpace),St=vt(x);z&&Xt(x)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,St,gt,x.width,x.height):Xt(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,St,gt,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,gt,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function wt(R,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),J(x.depthTexture,0);const Q=Y.__webglTexture,X=vt(x);if(x.depthTexture.format===co)Xt(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0,X):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0);else if(x.depthTexture.format===uo)Xt(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0,X):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ve(R){const x=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const Y=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=Y}if(R.depthTexture&&!x.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const Y=R.texture.mipmaps;Y&&Y.length>0?wt(x.__webglFramebuffer[0],R):wt(x.__webglFramebuffer,R)}else if(z){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=e.createRenderbuffer(),Zt(x.__webglDepthbuffer[Y],R,!1);else{const Q=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[Y];e.bindRenderbuffer(e.RENDERBUFFER,X),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,X)}}else{const Y=R.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),Zt(x.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,X),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,X)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function xe(R,x,z){const Y=i.get(R);x!==void 0&&yt(Y.__webglFramebuffer,R,R.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),z!==void 0&&ve(R)}function Kt(R){const x=R.texture,z=i.get(R),Y=i.get(x);R.addEventListener("dispose",b);const Q=R.textures,X=R.isWebGLCubeRenderTarget===!0,xt=Q.length>1;if(xt||(Y.__webglTexture===void 0&&(Y.__webglTexture=e.createTexture()),Y.__version=x.version,s.memory.textures++),X){z.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[ot]=[];for(let gt=0;gt<x.mipmaps.length;gt++)z.__webglFramebuffer[ot][gt]=e.createFramebuffer()}else z.__webglFramebuffer[ot]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)z.__webglFramebuffer[ot]=e.createFramebuffer()}else z.__webglFramebuffer=e.createFramebuffer();if(xt)for(let ot=0,gt=Q.length;ot<gt;ot++){const St=i.get(Q[ot]);St.__webglTexture===void 0&&(St.__webglTexture=e.createTexture(),s.memory.textures++)}if(R.samples>0&&Xt(R)===!1){z.__webglMultisampledFramebuffer=e.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ot=0;ot<Q.length;ot++){const gt=Q[ot];z.__webglColorRenderbuffer[ot]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,z.__webglColorRenderbuffer[ot]);const St=r.convert(gt.format,gt.colorSpace),j=r.convert(gt.type),ft=_(gt.internalFormat,St,j,gt.colorSpace,R.isXRRenderTarget===!0),Rt=vt(R);e.renderbufferStorageMultisample(e.RENDERBUFFER,Rt,ft,R.width,R.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,z.__webglColorRenderbuffer[ot])}e.bindRenderbuffer(e.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=e.createRenderbuffer(),Zt(z.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(X){n.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),Ot(e.TEXTURE_CUBE_MAP,x);for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0)for(let gt=0;gt<x.mipmaps.length;gt++)yt(z.__webglFramebuffer[ot][gt],R,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,gt);else yt(z.__webglFramebuffer[ot],R,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);g(x)&&u(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(xt){for(let ot=0,gt=Q.length;ot<gt;ot++){const St=Q[ot],j=i.get(St);n.bindTexture(e.TEXTURE_2D,j.__webglTexture),Ot(e.TEXTURE_2D,St),yt(z.__webglFramebuffer,R,St,e.COLOR_ATTACHMENT0+ot,e.TEXTURE_2D,0),g(St)&&u(e.TEXTURE_2D)}n.unbindTexture()}else{let ot=e.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ot=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ot,Y.__webglTexture),Ot(ot,x),x.mipmaps&&x.mipmaps.length>0)for(let gt=0;gt<x.mipmaps.length;gt++)yt(z.__webglFramebuffer[gt],R,x,e.COLOR_ATTACHMENT0,ot,gt);else yt(z.__webglFramebuffer,R,x,e.COLOR_ATTACHMENT0,ot,0);g(x)&&u(ot),n.unbindTexture()}R.depthBuffer&&ve(R)}function D(R){const x=R.textures;for(let z=0,Y=x.length;z<Y;z++){const Q=x[z];if(g(Q)){const X=m(R),xt=i.get(Q).__webglTexture;n.bindTexture(X,xt),u(X),n.unbindTexture()}}}const Qe=[],Qt=[];function ue(R){if(R.samples>0){if(Xt(R)===!1){const x=R.textures,z=R.width,Y=R.height;let Q=e.COLOR_BUFFER_BIT;const X=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,xt=i.get(R),ot=x.length>1;if(ot)for(let St=0;St<x.length;St++)n.bindFramebuffer(e.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+St,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,xt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+St,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);const gt=R.texture.mipmaps;gt&&gt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let St=0;St<x.length;St++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=e.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=e.STENCIL_BUFFER_BIT)),ot){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,xt.__webglColorRenderbuffer[St]);const j=i.get(x[St]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,j,0)}e.blitFramebuffer(0,0,z,Y,0,0,z,Y,Q,e.NEAREST),l===!0&&(Qe.length=0,Qt.length=0,Qe.push(e.COLOR_ATTACHMENT0+St),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Qe.push(X),Qt.push(X),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Qt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Qe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ot)for(let St=0;St<x.length;St++){n.bindFramebuffer(e.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+St,e.RENDERBUFFER,xt.__webglColorRenderbuffer[St]);const j=i.get(x[St]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,xt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+St,e.TEXTURE_2D,j,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const x=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function vt(R){return Math.min(a.maxSamples,R.samples)}function Xt(R){const x=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Tt(R){const x=s.render.frame;h.get(R)!==x&&(h.set(R,x),R.update())}function Bt(R,x){const z=R.colorSpace,Y=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==as&&z!==Qi&&(qt.getTransfer(z)===ae?(Y!==Xn||Q!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),x}function Le(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=V,this.setTexture2D=J,this.setTexture2DArray=N,this.setTexture3D=k,this.setTextureCube=B,this.rebindTextures=xe,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Xt}function a1(e,t){function n(i,a=Qi){let r;const s=qt.getTransfer(a);if(i===Ni)return e.UNSIGNED_BYTE;if(i===Cd)return e.UNSIGNED_SHORT_4_4_4_4;if(i===wd)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Qv)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Zv)return e.BYTE;if(i===Kv)return e.SHORT;if(i===oo)return e.UNSIGNED_SHORT;if(i===Rd)return e.INT;if(i===Za)return e.UNSIGNED_INT;if(i===Ei)return e.FLOAT;if(i===Co)return e.HALF_FLOAT;if(i===jv)return e.ALPHA;if(i===Jv)return e.RGB;if(i===Xn)return e.RGBA;if(i===co)return e.DEPTH_COMPONENT;if(i===uo)return e.DEPTH_STENCIL;if(i===$v)return e.RED;if(i===Dd)return e.RED_INTEGER;if(i===t0)return e.RG;if(i===Ud)return e.RG_INTEGER;if(i===Ld)return e.RGBA_INTEGER;if(i===Dl||i===Ul||i===Ll||i===Nl)if(s===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Dl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ul)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ll)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Nl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Dl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ul)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ll)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Nl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ah||i===rh||i===sh||i===oh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ah)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===rh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===oh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lh||i===ch||i===uh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===lh||i===ch)return s===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===uh)return s===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fh||i===hh||i===dh||i===ph||i===mh||i===gh||i===_h||i===vh||i===xh||i===Sh||i===Mh||i===yh||i===Eh||i===Th)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===fh)return s===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hh)return s===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dh)return s===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ph)return s===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mh)return s===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gh)return s===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_h)return s===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vh)return s===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xh)return s===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sh)return s===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mh)return s===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yh)return s===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Eh)return s===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Th)return s===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ol||i===bh||i===Ah)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ol)return s===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ah)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===e0||i===Rh||i===Ch||i===wh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ol)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Rh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ch)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===lo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const r1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class o1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){const a=new on,r=t.properties.get(a);r.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new ma({vertexShader:r1,fragmentShader:s1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new bi(new Oc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class l1 extends hs{constructor(t,n){super();const i=this;let a=null,r=1,s=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,S=null;const y=new o1,g=n.getContextAttributes();let u=null,m=null;const _=[],v=[],C=new $t;let A=null;const b=new Vn;b.viewport=new Re;const w=new Vn;w.viewport=new Re;const T=[b,w],M=new wy;let U=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let it=_[W];return it===void 0&&(it=new Gu,_[W]=it),it.getTargetRaySpace()},this.getControllerGrip=function(W){let it=_[W];return it===void 0&&(it=new Gu,_[W]=it),it.getGripSpace()},this.getHand=function(W){let it=_[W];return it===void 0&&(it=new Gu,_[W]=it),it.getHandSpace()};function G(W){const it=v.indexOf(W.inputSource);if(it===-1)return;const Mt=_[it];Mt!==void 0&&(Mt.update(W.inputSource,W.frame,c||s),Mt.dispatchEvent({type:W.type,data:W.inputSource}))}function q(){a.removeEventListener("select",G),a.removeEventListener("selectstart",G),a.removeEventListener("selectend",G),a.removeEventListener("squeeze",G),a.removeEventListener("squeezestart",G),a.removeEventListener("squeezeend",G),a.removeEventListener("end",q),a.removeEventListener("inputsourceschange",J);for(let W=0;W<_.length;W++){const it=v[W];it!==null&&(v[W]=null,_[W].disconnect(it))}U=null,V=null,y.reset(),t.setRenderTarget(u),p=null,f=null,d=null,a=null,m=null,Yt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return S},this.getSession=function(){return a},this.setSession=async function(W){if(a=W,a!==null){if(u=t.getRenderTarget(),a.addEventListener("select",G),a.addEventListener("selectstart",G),a.addEventListener("selectend",G),a.addEventListener("squeeze",G),a.addEventListener("squeezestart",G),a.addEventListener("squeezeend",G),a.addEventListener("end",q),a.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await n.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(C),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,ut=null,yt=null;g.depth&&(yt=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Mt=g.stencil?uo:co,ut=g.stencil?lo:Za);const Zt={colorFormat:n.RGBA8,depthFormat:yt,scaleFactor:r};d=new XRWebGLBinding(a,n),f=d.createProjectionLayer(Zt),a.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),m=new Ka(f.textureWidth,f.textureHeight,{format:Xn,type:Ni,depthTexture:new p0(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Mt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,n,Mt),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),m=new Ka(p.framebufferWidth,p.framebufferHeight,{format:Xn,type:Ni,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),Yt.setContext(a),Yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function J(W){for(let it=0;it<W.removed.length;it++){const Mt=W.removed[it],ut=v.indexOf(Mt);ut>=0&&(v[ut]=null,_[ut].disconnect(Mt))}for(let it=0;it<W.added.length;it++){const Mt=W.added[it];let ut=v.indexOf(Mt);if(ut===-1){for(let Zt=0;Zt<_.length;Zt++)if(Zt>=v.length){v.push(Mt),ut=Zt;break}else if(v[Zt]===null){v[Zt]=Mt,ut=Zt;break}if(ut===-1)break}const yt=_[ut];yt&&yt.connect(Mt)}}const N=new I,k=new I;function B(W,it,Mt){N.setFromMatrixPosition(it.matrixWorld),k.setFromMatrixPosition(Mt.matrixWorld);const ut=N.distanceTo(k),yt=it.projectionMatrix.elements,Zt=Mt.projectionMatrix.elements,wt=yt[14]/(yt[10]-1),ve=yt[14]/(yt[10]+1),xe=(yt[9]+1)/yt[5],Kt=(yt[9]-1)/yt[5],D=(yt[8]-1)/yt[0],Qe=(Zt[8]+1)/Zt[0],Qt=wt*D,ue=wt*Qe,vt=ut/(-D+Qe),Xt=vt*-D;if(it.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Xt),W.translateZ(vt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),yt[10]===-1)W.projectionMatrix.copy(it.projectionMatrix),W.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const Tt=wt+vt,Bt=ve+vt,Le=Qt-Xt,R=ue+(ut-Xt),x=xe*ve/Bt*Tt,z=Kt*ve/Bt*Tt;W.projectionMatrix.makePerspective(Le,R,x,z,Tt,Bt),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function tt(W,it){it===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(it.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(a===null)return;let it=W.near,Mt=W.far;y.texture!==null&&(y.depthNear>0&&(it=y.depthNear),y.depthFar>0&&(Mt=y.depthFar)),M.near=w.near=b.near=it,M.far=w.far=b.far=Mt,(U!==M.near||V!==M.far)&&(a.updateRenderState({depthNear:M.near,depthFar:M.far}),U=M.near,V=M.far),b.layers.mask=W.layers.mask|2,w.layers.mask=W.layers.mask|4,M.layers.mask=b.layers.mask|w.layers.mask;const ut=W.parent,yt=M.cameras;tt(M,ut);for(let Zt=0;Zt<yt.length;Zt++)tt(yt[Zt],ut);yt.length===2?B(M,b,w):M.projectionMatrix.copy(b.projectionMatrix),at(W,M,ut)};function at(W,it,Mt){Mt===null?W.matrix.copy(it.matrixWorld):(W.matrix.copy(Mt.matrixWorld),W.matrix.invert(),W.matrix.multiply(it.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(it.projectionMatrix),W.projectionMatrixInverse.copy(it.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Dh*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let _t=null;function Ot(W,it){if(h=it.getViewerPose(c||s),S=it,h!==null){const Mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(m,p.framebuffer),t.setRenderTarget(m));let ut=!1;Mt.length!==M.cameras.length&&(M.cameras.length=0,ut=!0);for(let wt=0;wt<Mt.length;wt++){const ve=Mt[wt];let xe=null;if(p!==null)xe=p.getViewport(ve);else{const D=d.getViewSubImage(f,ve);xe=D.viewport,wt===0&&(t.setRenderTargetTextures(m,D.colorTexture,D.depthStencilTexture),t.setRenderTarget(m))}let Kt=T[wt];Kt===void 0&&(Kt=new Vn,Kt.layers.enable(wt),Kt.viewport=new Re,T[wt]=Kt),Kt.matrix.fromArray(ve.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(ve.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(xe.x,xe.y,xe.width,xe.height),wt===0&&(M.matrix.copy(Kt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ut===!0&&M.cameras.push(Kt)}const yt=a.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&d){const wt=d.getDepthInformation(Mt[0]);wt&&wt.isValid&&wt.texture&&y.init(t,wt,a.renderState)}}for(let Mt=0;Mt<_.length;Mt++){const ut=v[Mt],yt=_[Mt];ut!==null&&yt!==void 0&&yt.update(ut,it,c||s)}_t&&_t(W,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),S=null}const Yt=new g0;Yt.setAnimationLoop(Ot),this.setAnimationLoop=function(W){_t=W},this.dispose=function(){}}}const Ra=new Oi,c1=new Ue;function u1(e,t){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,u0(e)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function a(g,u,m,_,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(g,u):u.isMeshToonMaterial?(r(g,u),d(g,u)):u.isMeshPhongMaterial?(r(g,u),h(g,u)):u.isMeshStandardMaterial?(r(g,u),f(g,u),u.isMeshPhysicalMaterial&&p(g,u,v)):u.isMeshMatcapMaterial?(r(g,u),S(g,u)):u.isMeshDepthMaterial?r(g,u):u.isMeshDistanceMaterial?(r(g,u),y(g,u)):u.isMeshNormalMaterial?r(g,u):u.isLineBasicMaterial?(s(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?l(g,u,m,_):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===sn&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===sn&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const m=t.get(u),_=m.envMap,v=m.envMapRotation;_&&(g.envMap.value=_,Ra.copy(v),Ra.x*=-1,Ra.y*=-1,Ra.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ra.y*=-1,Ra.z*=-1),g.envMapRotation.value.setFromMatrix4(c1.makeRotationFromEuler(Ra)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function s(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,m,_){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*m,g.scale.value=_*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function h(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function d(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function f(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function p(g,u,m){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===sn&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function S(g,u){u.matcap&&(g.matcap.value=u.matcap)}function y(g,u){const m=t.get(u).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function f1(e,t,n,i){let a={},r={},s=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,_){const v=_.program;i.uniformBlockBinding(m,v)}function c(m,_){let v=a[m.id];v===void 0&&(S(m),v=h(m),a[m.id]=v,m.addEventListener("dispose",g));const C=_.program;i.updateUBOMapping(m,C);const A=t.render.frame;r[m.id]!==A&&(f(m),r[m.id]=A)}function h(m){const _=d();m.__bindingPointIndex=_;const v=e.createBuffer(),C=m.__size,A=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,v),e.bufferData(e.UNIFORM_BUFFER,C,A),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,v),v}function d(){for(let m=0;m<o;m++)if(s.indexOf(m)===-1)return s.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(m){const _=a[m.id],v=m.uniforms,C=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let A=0,b=v.length;A<b;A++){const w=Array.isArray(v[A])?v[A]:[v[A]];for(let T=0,M=w.length;T<M;T++){const U=w[T];if(p(U,A,T,C)===!0){const V=U.__offset,G=Array.isArray(U.value)?U.value:[U.value];let q=0;for(let J=0;J<G.length;J++){const N=G[J],k=y(N);typeof N=="number"||typeof N=="boolean"?(U.__data[0]=N,e.bufferSubData(e.UNIFORM_BUFFER,V+q,U.__data)):N.isMatrix3?(U.__data[0]=N.elements[0],U.__data[1]=N.elements[1],U.__data[2]=N.elements[2],U.__data[3]=0,U.__data[4]=N.elements[3],U.__data[5]=N.elements[4],U.__data[6]=N.elements[5],U.__data[7]=0,U.__data[8]=N.elements[6],U.__data[9]=N.elements[7],U.__data[10]=N.elements[8],U.__data[11]=0):(N.toArray(U.__data,q),q+=k.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,V,U.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(m,_,v,C){const A=m.value,b=_+"_"+v;if(C[b]===void 0)return typeof A=="number"||typeof A=="boolean"?C[b]=A:C[b]=A.clone(),!0;{const w=C[b];if(typeof A=="number"||typeof A=="boolean"){if(w!==A)return C[b]=A,!0}else if(w.equals(A)===!1)return w.copy(A),!0}return!1}function S(m){const _=m.uniforms;let v=0;const C=16;for(let b=0,w=_.length;b<w;b++){const T=Array.isArray(_[b])?_[b]:[_[b]];for(let M=0,U=T.length;M<U;M++){const V=T[M],G=Array.isArray(V.value)?V.value:[V.value];for(let q=0,J=G.length;q<J;q++){const N=G[q],k=y(N),B=v%C,tt=B%k.boundary,at=B+tt;v+=tt,at!==0&&C-at<k.storage&&(v+=C-at),V.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=v,v+=k.storage}}}const A=v%C;return A>0&&(v+=C-A),m.__size=v,m.__cache={},this}function y(m){const _={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=48,_.storage=48):m.isMatrix4?(_.boundary=64,_.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),_}function g(m){const _=m.target;_.removeEventListener("dispose",g);const v=s.indexOf(_.__bindingPointIndex);s.splice(v,1),e.deleteBuffer(a[_.id]),delete a[_.id],delete r[_.id]}function u(){for(const m in a)e.deleteBuffer(a[m]);s=[],a={},r={}}return{bind:l,update:c,dispose:u}}class g1{constructor(t={}){const{canvas:n=ZM(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const S=new Uint32Array(4),y=new Int32Array(4);let g=null,u=null;const m=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ua,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let C=!1;this._outputColorSpace=Cn;let A=0,b=0,w=null,T=-1,M=null;const U=new Re,V=new Re;let G=null;const q=new oe(0);let J=0,N=n.width,k=n.height,B=1,tt=null,at=null;const _t=new Re(0,0,N,k),Ot=new Re(0,0,N,k);let Yt=!1;const W=new d0;let it=!1,Mt=!1;const ut=new Ue,yt=new Ue,Zt=new I,wt=new Re,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function Kt(){return w===null?B:1}let D=i;function Qe(E,O){return n.getContext(E,O)}try{const E={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ad}`),n.addEventListener("webglcontextlost",dt,!1),n.addEventListener("webglcontextrestored",et,!1),n.addEventListener("webglcontextcreationerror",K,!1),D===null){const O="webgl2";if(D=Qe(O,E),D===null)throw Qe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Qt,ue,vt,Xt,Tt,Bt,Le,R,x,z,Y,Q,X,xt,ot,gt,St,j,ft,Rt,At,rt,Lt,L;function lt(){Qt=new yb(D),Qt.init(),rt=new a1(D,Qt),ue=new mb(D,Qt,t,rt),vt=new n1(D,Qt),ue.reverseDepthBuffer&&f&&vt.buffers.depth.setReversed(!0),Xt=new bb(D),Tt=new kA,Bt=new i1(D,Qt,vt,Tt,ue,rt,Xt),Le=new _b(v),R=new Mb(v),x=new Uy(D),Lt=new db(D,x),z=new Eb(D,x,Xt,Lt),Y=new Rb(D,z,x,Xt),ft=new Ab(D,ue,Bt),gt=new gb(Tt),Q=new VA(v,Le,R,Qt,ue,Lt,gt),X=new u1(v,Tt),xt=new WA,ot=new jA(Qt),j=new hb(v,Le,R,vt,Y,p,l),St=new t1(v,Y,ue),L=new f1(D,Xt,ue,vt),Rt=new pb(D,Qt,Xt),At=new Tb(D,Qt,Xt),Xt.programs=Q.programs,v.capabilities=ue,v.extensions=Qt,v.properties=Tt,v.renderLists=xt,v.shadowMap=St,v.state=vt,v.info=Xt}lt();const $=new l1(v,D);this.xr=$,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Qt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Qt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(E){E!==void 0&&(B=E,this.setSize(N,k,!1))},this.getSize=function(E){return E.set(N,k)},this.setSize=function(E,O,F=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,k=O,n.width=Math.floor(E*B),n.height=Math.floor(O*B),F===!0&&(n.style.width=E+"px",n.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(N*B,k*B).floor()},this.setDrawingBufferSize=function(E,O,F){N=E,k=O,B=F,n.width=Math.floor(E*F),n.height=Math.floor(O*F),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(U)},this.getViewport=function(E){return E.copy(_t)},this.setViewport=function(E,O,F,H){E.isVector4?_t.set(E.x,E.y,E.z,E.w):_t.set(E,O,F,H),vt.viewport(U.copy(_t).multiplyScalar(B).round())},this.getScissor=function(E){return E.copy(Ot)},this.setScissor=function(E,O,F,H){E.isVector4?Ot.set(E.x,E.y,E.z,E.w):Ot.set(E,O,F,H),vt.scissor(V.copy(Ot).multiplyScalar(B).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(E){vt.setScissorTest(Yt=E)},this.setOpaqueSort=function(E){tt=E},this.setTransparentSort=function(E){at=E},this.getClearColor=function(E){return E.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor(...arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,F=!0){let H=0;if(E){let P=!1;if(w!==null){const nt=w.texture.format;P=nt===Ld||nt===Ud||nt===Dd}if(P){const nt=w.texture.type,ct=nt===Ni||nt===Za||nt===oo||nt===lo||nt===Cd||nt===wd,mt=j.getClearColor(),ht=j.getClearAlpha(),Dt=mt.r,Ut=mt.g,Et=mt.b;ct?(S[0]=Dt,S[1]=Ut,S[2]=Et,S[3]=ht,D.clearBufferuiv(D.COLOR,0,S)):(y[0]=Dt,y[1]=Ut,y[2]=Et,y[3]=ht,D.clearBufferiv(D.COLOR,0,y))}else H|=D.COLOR_BUFFER_BIT}O&&(H|=D.DEPTH_BUFFER_BIT),F&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",dt,!1),n.removeEventListener("webglcontextrestored",et,!1),n.removeEventListener("webglcontextcreationerror",K,!1),j.dispose(),xt.dispose(),ot.dispose(),Tt.dispose(),Le.dispose(),R.dispose(),Y.dispose(),Lt.dispose(),L.dispose(),Q.dispose(),$.dispose(),$.removeEventListener("sessionstart",zd),$.removeEventListener("sessionend",Id),xa.stop()};function dt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function et(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const E=Xt.autoReset,O=St.enabled,F=St.autoUpdate,H=St.needsUpdate,P=St.type;lt(),Xt.autoReset=E,St.enabled=O,St.autoUpdate=F,St.needsUpdate=H,St.type=P}function K(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function pt(E){const O=E.target;O.removeEventListener("dispose",pt),Nt(O)}function Nt(E){he(E),Tt.remove(E)}function he(E){const O=Tt.get(E).programs;O!==void 0&&(O.forEach(function(F){Q.releaseProgram(F)}),E.isShaderMaterial&&Q.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,F,H,P,nt){O===null&&(O=ve);const ct=P.isMesh&&P.matrixWorld.determinant()<0,mt=M0(E,O,F,H,P);vt.setMaterial(H,ct);let ht=F.index,Dt=1;if(H.wireframe===!0){if(ht=z.getWireframeAttribute(F),ht===void 0)return;Dt=2}const Ut=F.drawRange,Et=F.attributes.position;let Gt=Ut.start*Dt,ie=(Ut.start+Ut.count)*Dt;nt!==null&&(Gt=Math.max(Gt,nt.start*Dt),ie=Math.min(ie,(nt.start+nt.count)*Dt)),ht!==null?(Gt=Math.max(Gt,0),ie=Math.min(ie,ht.count)):Et!=null&&(Gt=Math.max(Gt,0),ie=Math.min(ie,Et.count));const ye=ie-Gt;if(ye<0||ye===1/0)return;Lt.setup(P,H,mt,F,ht);let de,le=Rt;if(ht!==null&&(de=x.get(ht),le=At,le.setIndex(de)),P.isMesh)H.wireframe===!0?(vt.setLineWidth(H.wireframeLinewidth*Kt()),le.setMode(D.LINES)):le.setMode(D.TRIANGLES);else if(P.isLine){let bt=H.linewidth;bt===void 0&&(bt=1),vt.setLineWidth(bt*Kt()),P.isLineSegments?le.setMode(D.LINES):P.isLineLoop?le.setMode(D.LINE_LOOP):le.setMode(D.LINE_STRIP)}else P.isPoints?le.setMode(D.POINTS):P.isSprite&&le.setMode(D.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Vr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),le.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))le.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const bt=P._multiDrawStarts,Se=P._multiDrawCounts,Wt=P._multiDrawCount,un=ht?x.get(ht).bytesPerElement:1,tr=Tt.get(H).currentProgram.getUniforms();for(let fn=0;fn<Wt;fn++)tr.setValue(D,"_gl_DrawID",fn),le.render(bt[fn]/un,Se[fn])}else if(P.isInstancedMesh)le.renderInstances(Gt,ye,P.count);else if(F.isInstancedBufferGeometry){const bt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Se=Math.min(F.instanceCount,bt);le.renderInstances(Gt,ye,Se)}else le.render(Gt,ye)};function te(E,O,F){E.transparent===!0&&E.side===_i&&E.forceSinglePass===!1?(E.side=sn,E.needsUpdate=!0,Oo(E,O,F),E.side=pa,E.needsUpdate=!0,Oo(E,O,F),E.side=_i):Oo(E,O,F)}this.compile=function(E,O,F=null){F===null&&(F=E),u=ot.get(F),u.init(O),_.push(u),F.traverseVisible(function(P){P.isLight&&P.layers.test(O.layers)&&(u.pushLight(P),P.castShadow&&u.pushShadow(P))}),E!==F&&E.traverseVisible(function(P){P.isLight&&P.layers.test(O.layers)&&(u.pushLight(P),P.castShadow&&u.pushShadow(P))}),u.setupLights();const H=new Set;return E.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const nt=P.material;if(nt)if(Array.isArray(nt))for(let ct=0;ct<nt.length;ct++){const mt=nt[ct];te(mt,F,P),H.add(mt)}else te(nt,F,P),H.add(nt)}),u=_.pop(),H},this.compileAsync=function(E,O,F=null){const H=this.compile(E,O,F);return new Promise(P=>{function nt(){if(H.forEach(function(ct){Tt.get(ct).currentProgram.isReady()&&H.delete(ct)}),H.size===0){P(E);return}setTimeout(nt,10)}Qt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let zn=null;function si(E){zn&&zn(E)}function zd(){xa.stop()}function Id(){xa.start()}const xa=new g0;xa.setAnimationLoop(si),typeof self<"u"&&xa.setContext(self),this.setAnimationLoop=function(E){zn=E,$.setAnimationLoop(E),E===null?xa.stop():xa.start()},$.addEventListener("sessionstart",zd),$.addEventListener("sessionend",Id),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(O),O=$.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,O,w),u=ot.get(E,_.length),u.init(O),_.push(u),yt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),W.setFromProjectionMatrix(yt),Mt=this.localClippingEnabled,it=gt.init(this.clippingPlanes,Mt),g=xt.get(E,m.length),g.init(),m.push(g),$.enabled===!0&&$.isPresenting===!0){const nt=v.xr.getDepthSensingMesh();nt!==null&&Bc(nt,O,-1/0,v.sortObjects)}Bc(E,O,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(tt,at),xe=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,xe&&j.addToRenderList(g,E),this.info.render.frame++,it===!0&&gt.beginShadows();const F=u.state.shadowsArray;St.render(F,E,O),it===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=g.opaque,P=g.transmissive;if(u.setupLights(),O.isArrayCamera){const nt=O.cameras;if(P.length>0)for(let ct=0,mt=nt.length;ct<mt;ct++){const ht=nt[ct];Hd(H,P,E,ht)}xe&&j.render(E);for(let ct=0,mt=nt.length;ct<mt;ct++){const ht=nt[ct];Fd(g,E,ht,ht.viewport)}}else P.length>0&&Hd(H,P,E,O),xe&&j.render(E),Fd(g,E,O);w!==null&&b===0&&(Bt.updateMultisampleRenderTarget(w),Bt.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(v,E,O),Lt.resetDefaultState(),T=-1,M=null,_.pop(),_.length>0?(u=_[_.length-1],it===!0&&gt.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function Bc(E,O,F,H){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)F=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||W.intersectsSprite(E)){H&&wt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(yt);const ct=Y.update(E),mt=E.material;mt.visible&&g.push(E,ct,mt,F,wt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||W.intersectsObject(E))){const ct=Y.update(E),mt=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),wt.copy(E.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),wt.copy(ct.boundingSphere.center)),wt.applyMatrix4(E.matrixWorld).applyMatrix4(yt)),Array.isArray(mt)){const ht=ct.groups;for(let Dt=0,Ut=ht.length;Dt<Ut;Dt++){const Et=ht[Dt],Gt=mt[Et.materialIndex];Gt&&Gt.visible&&g.push(E,ct,Gt,F,wt.z,Et)}}else mt.visible&&g.push(E,ct,mt,F,wt.z,null)}}const nt=E.children;for(let ct=0,mt=nt.length;ct<mt;ct++)Bc(nt[ct],O,F,H)}function Fd(E,O,F,H){const P=E.opaque,nt=E.transmissive,ct=E.transparent;u.setupLightsView(F),it===!0&&gt.setGlobalState(v.clippingPlanes,F),H&&vt.viewport(U.copy(H)),P.length>0&&No(P,O,F),nt.length>0&&No(nt,O,F),ct.length>0&&No(ct,O,F),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Hd(E,O,F,H){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[H.id]===void 0&&(u.state.transmissionRenderTarget[H.id]=new Ka(1,1,{generateMipmaps:!0,type:Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float")?Co:Ni,minFilter:Ba,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const nt=u.state.transmissionRenderTarget[H.id],ct=H.viewport||U;nt.setSize(ct.z*v.transmissionResolutionScale,ct.w*v.transmissionResolutionScale);const mt=v.getRenderTarget(),ht=v.getActiveCubeFace(),Dt=v.getActiveMipmapLevel();v.setRenderTarget(nt),v.getClearColor(q),J=v.getClearAlpha(),J<1&&v.setClearColor(16777215,.5),v.clear(),xe&&j.render(F);const Ut=v.toneMapping;v.toneMapping=ua;const Et=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),u.setupLightsView(H),it===!0&&gt.setGlobalState(v.clippingPlanes,H),No(E,F,H),Bt.updateMultisampleRenderTarget(nt),Bt.updateRenderTargetMipmap(nt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let ie=0,ye=O.length;ie<ye;ie++){const de=O[ie],le=de.object,bt=de.geometry,Se=de.material,Wt=de.group;if(Se.side===_i&&le.layers.test(H.layers)){const un=Se.side;Se.side=sn,Se.needsUpdate=!0,Gd(le,F,H,bt,Se,Wt),Se.side=un,Se.needsUpdate=!0,Gt=!0}}Gt===!0&&(Bt.updateMultisampleRenderTarget(nt),Bt.updateRenderTargetMipmap(nt))}v.setRenderTarget(mt,ht,Dt),v.setClearColor(q,J),Et!==void 0&&(H.viewport=Et),v.toneMapping=Ut}function No(E,O,F){const H=O.isScene===!0?O.overrideMaterial:null;for(let P=0,nt=E.length;P<nt;P++){const ct=E[P],mt=ct.object,ht=ct.geometry,Dt=ct.group;let Ut=ct.material;Ut.allowOverride===!0&&H!==null&&(Ut=H),mt.layers.test(F.layers)&&Gd(mt,O,F,ht,Ut,Dt)}}function Gd(E,O,F,H,P,nt){E.onBeforeRender(v,O,F,H,P,nt),E.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),P.onBeforeRender(v,O,F,H,E,nt),P.transparent===!0&&P.side===_i&&P.forceSinglePass===!1?(P.side=sn,P.needsUpdate=!0,v.renderBufferDirect(F,O,H,P,E,nt),P.side=pa,P.needsUpdate=!0,v.renderBufferDirect(F,O,H,P,E,nt),P.side=_i):v.renderBufferDirect(F,O,H,P,E,nt),E.onAfterRender(v,O,F,H,P,nt)}function Oo(E,O,F){O.isScene!==!0&&(O=ve);const H=Tt.get(E),P=u.state.lights,nt=u.state.shadowsArray,ct=P.state.version,mt=Q.getParameters(E,P.state,nt,O,F),ht=Q.getProgramCacheKey(mt);let Dt=H.programs;H.environment=E.isMeshStandardMaterial?O.environment:null,H.fog=O.fog,H.envMap=(E.isMeshStandardMaterial?R:Le).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Dt===void 0&&(E.addEventListener("dispose",pt),Dt=new Map,H.programs=Dt);let Ut=Dt.get(ht);if(Ut!==void 0){if(H.currentProgram===Ut&&H.lightsStateVersion===ct)return kd(E,mt),Ut}else mt.uniforms=Q.getUniforms(E),E.onBeforeCompile(mt,v),Ut=Q.acquireProgram(mt,ht),Dt.set(ht,Ut),H.uniforms=mt.uniforms;const Et=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Et.clippingPlanes=gt.uniform),kd(E,mt),H.needsLights=E0(E),H.lightsStateVersion=ct,H.needsLights&&(Et.ambientLightColor.value=P.state.ambient,Et.lightProbe.value=P.state.probe,Et.directionalLights.value=P.state.directional,Et.directionalLightShadows.value=P.state.directionalShadow,Et.spotLights.value=P.state.spot,Et.spotLightShadows.value=P.state.spotShadow,Et.rectAreaLights.value=P.state.rectArea,Et.ltc_1.value=P.state.rectAreaLTC1,Et.ltc_2.value=P.state.rectAreaLTC2,Et.pointLights.value=P.state.point,Et.pointLightShadows.value=P.state.pointShadow,Et.hemisphereLights.value=P.state.hemi,Et.directionalShadowMap.value=P.state.directionalShadowMap,Et.directionalShadowMatrix.value=P.state.directionalShadowMatrix,Et.spotShadowMap.value=P.state.spotShadowMap,Et.spotLightMatrix.value=P.state.spotLightMatrix,Et.spotLightMap.value=P.state.spotLightMap,Et.pointShadowMap.value=P.state.pointShadowMap,Et.pointShadowMatrix.value=P.state.pointShadowMatrix),H.currentProgram=Ut,H.uniformsList=null,Ut}function Vd(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=Pl.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function kd(E,O){const F=Tt.get(E);F.outputColorSpace=O.outputColorSpace,F.batching=O.batching,F.batchingColor=O.batchingColor,F.instancing=O.instancing,F.instancingColor=O.instancingColor,F.instancingMorph=O.instancingMorph,F.skinning=O.skinning,F.morphTargets=O.morphTargets,F.morphNormals=O.morphNormals,F.morphColors=O.morphColors,F.morphTargetsCount=O.morphTargetsCount,F.numClippingPlanes=O.numClippingPlanes,F.numIntersection=O.numClipIntersection,F.vertexAlphas=O.vertexAlphas,F.vertexTangents=O.vertexTangents,F.toneMapping=O.toneMapping}function M0(E,O,F,H,P){O.isScene!==!0&&(O=ve),Bt.resetTextureUnits();const nt=O.fog,ct=H.isMeshStandardMaterial?O.environment:null,mt=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:as,ht=(H.isMeshStandardMaterial?R:Le).get(H.envMap||ct),Dt=H.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ut=!!F.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Et=!!F.morphAttributes.position,Gt=!!F.morphAttributes.normal,ie=!!F.morphAttributes.color;let ye=ua;H.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ye=v.toneMapping);const de=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,le=de!==void 0?de.length:0,bt=Tt.get(H),Se=u.state.lights;if(it===!0&&(Mt===!0||E!==M)){const je=E===M&&H.id===T;gt.setState(H,E,je)}let Wt=!1;H.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Se.state.version||bt.outputColorSpace!==mt||P.isBatchedMesh&&bt.batching===!1||!P.isBatchedMesh&&bt.batching===!0||P.isBatchedMesh&&bt.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&bt.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&bt.instancing===!1||!P.isInstancedMesh&&bt.instancing===!0||P.isSkinnedMesh&&bt.skinning===!1||!P.isSkinnedMesh&&bt.skinning===!0||P.isInstancedMesh&&bt.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&bt.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&bt.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&bt.instancingMorph===!1&&P.morphTexture!==null||bt.envMap!==ht||H.fog===!0&&bt.fog!==nt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==gt.numPlanes||bt.numIntersection!==gt.numIntersection)||bt.vertexAlphas!==Dt||bt.vertexTangents!==Ut||bt.morphTargets!==Et||bt.morphNormals!==Gt||bt.morphColors!==ie||bt.toneMapping!==ye||bt.morphTargetsCount!==le)&&(Wt=!0):(Wt=!0,bt.__version=H.version);let un=bt.currentProgram;Wt===!0&&(un=Oo(H,O,P));let tr=!1,fn=!1,ps=!1;const me=un.getUniforms(),Tn=bt.uniforms;if(vt.useProgram(un.program)&&(tr=!0,fn=!0,ps=!0),H.id!==T&&(T=H.id,fn=!0),tr||M!==E){vt.buffers.depth.getReversed()?(ut.copy(E.projectionMatrix),QM(ut),jM(ut),me.setValue(D,"projectionMatrix",ut)):me.setValue(D,"projectionMatrix",E.projectionMatrix),me.setValue(D,"viewMatrix",E.matrixWorldInverse);const tn=me.map.cameraPosition;tn!==void 0&&tn.setValue(D,Zt.setFromMatrixPosition(E.matrixWorld)),ue.logarithmicDepthBuffer&&me.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&me.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,fn=!0,ps=!0)}if(P.isSkinnedMesh){me.setOptional(D,P,"bindMatrix"),me.setOptional(D,P,"bindMatrixInverse");const je=P.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),me.setValue(D,"boneTexture",je.boneTexture,Bt))}P.isBatchedMesh&&(me.setOptional(D,P,"batchingTexture"),me.setValue(D,"batchingTexture",P._matricesTexture,Bt),me.setOptional(D,P,"batchingIdTexture"),me.setValue(D,"batchingIdTexture",P._indirectTexture,Bt),me.setOptional(D,P,"batchingColorTexture"),P._colorsTexture!==null&&me.setValue(D,"batchingColorTexture",P._colorsTexture,Bt));const bn=F.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&ft.update(P,F,un),(fn||bt.receiveShadow!==P.receiveShadow)&&(bt.receiveShadow=P.receiveShadow,me.setValue(D,"receiveShadow",P.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Tn.envMap.value=ht,Tn.flipEnvMap.value=ht.isCubeTexture&&ht.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&O.environment!==null&&(Tn.envMapIntensity.value=O.environmentIntensity),fn&&(me.setValue(D,"toneMappingExposure",v.toneMappingExposure),bt.needsLights&&y0(Tn,ps),nt&&H.fog===!0&&X.refreshFogUniforms(Tn,nt),X.refreshMaterialUniforms(Tn,H,B,k,u.state.transmissionRenderTarget[E.id]),Pl.upload(D,Vd(bt),Tn,Bt)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Pl.upload(D,Vd(bt),Tn,Bt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&me.setValue(D,"center",P.center),me.setValue(D,"modelViewMatrix",P.modelViewMatrix),me.setValue(D,"normalMatrix",P.normalMatrix),me.setValue(D,"modelMatrix",P.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const je=H.uniformsGroups;for(let tn=0,zc=je.length;tn<zc;tn++){const Sa=je[tn];L.update(Sa,un),L.bind(Sa,un)}}return un}function y0(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function E0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,O,F){const H=Tt.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Tt.get(E.texture).__webglTexture=O,Tt.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:F,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){const F=Tt.get(E);F.__webglFramebuffer=O,F.__useDefaultFramebuffer=O===void 0};const T0=D.createFramebuffer();this.setRenderTarget=function(E,O=0,F=0){w=E,A=O,b=F;let H=!0,P=null,nt=!1,ct=!1;if(E){const ht=Tt.get(E);if(ht.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(D.FRAMEBUFFER,null),H=!1;else if(ht.__webglFramebuffer===void 0)Bt.setupRenderTarget(E);else if(ht.__hasExternalTextures)Bt.rebindTextures(E,Tt.get(E.texture).__webglTexture,Tt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Et=E.depthTexture;if(ht.__boundDepthTexture!==Et){if(Et!==null&&Tt.has(Et)&&(E.width!==Et.image.width||E.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(E)}}const Dt=E.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(ct=!0);const Ut=Tt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ut[O])?P=Ut[O][F]:P=Ut[O],nt=!0):E.samples>0&&Bt.useMultisampledRTT(E)===!1?P=Tt.get(E).__webglMultisampledFramebuffer:Array.isArray(Ut)?P=Ut[F]:P=Ut,U.copy(E.viewport),V.copy(E.scissor),G=E.scissorTest}else U.copy(_t).multiplyScalar(B).floor(),V.copy(Ot).multiplyScalar(B).floor(),G=Yt;if(F!==0&&(P=T0),vt.bindFramebuffer(D.FRAMEBUFFER,P)&&H&&vt.drawBuffers(E,P),vt.viewport(U),vt.scissor(V),vt.setScissorTest(G),nt){const ht=Tt.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,ht.__webglTexture,F)}else if(ct){const ht=Tt.get(E.texture),Dt=O;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ht.__webglTexture,F,Dt)}else if(E!==null&&F!==0){const ht=Tt.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ht.__webglTexture,F)}T=-1},this.readRenderTargetPixels=function(E,O,F,H,P,nt,ct,mt=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=Tt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ct!==void 0&&(ht=ht[ct]),ht){vt.bindFramebuffer(D.FRAMEBUFFER,ht);try{const Dt=E.textures[mt],Ut=Dt.format,Et=Dt.type;if(!ue.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-H&&F>=0&&F<=E.height-P&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+mt),D.readPixels(O,F,H,P,rt.convert(Ut),rt.convert(Et),nt))}finally{const Dt=w!==null?Tt.get(w).__webglFramebuffer:null;vt.bindFramebuffer(D.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(E,O,F,H,P,nt,ct,mt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=Tt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ct!==void 0&&(ht=ht[ct]),ht)if(O>=0&&O<=E.width-H&&F>=0&&F<=E.height-P){vt.bindFramebuffer(D.FRAMEBUFFER,ht);const Dt=E.textures[mt],Ut=Dt.format,Et=Dt.type;if(!ue.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Gt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Gt),D.bufferData(D.PIXEL_PACK_BUFFER,nt.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+mt),D.readPixels(O,F,H,P,rt.convert(Ut),rt.convert(Et),0);const ie=w!==null?Tt.get(w).__webglFramebuffer:null;vt.bindFramebuffer(D.FRAMEBUFFER,ie);const ye=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await KM(D,ye,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Gt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,nt),D.deleteBuffer(Gt),D.deleteSync(ye),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,F=0){const H=Math.pow(2,-F),P=Math.floor(E.image.width*H),nt=Math.floor(E.image.height*H),ct=O!==null?O.x:0,mt=O!==null?O.y:0;Bt.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,F,0,0,ct,mt,P,nt),vt.unbindTexture()};const b0=D.createFramebuffer(),A0=D.createFramebuffer();this.copyTextureToTexture=function(E,O,F=null,H=null,P=0,nt=null){nt===null&&(P!==0?(Vr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),nt=P,P=0):nt=0);let ct,mt,ht,Dt,Ut,Et,Gt,ie,ye;const de=E.isCompressedTexture?E.mipmaps[nt]:E.image;if(F!==null)ct=F.max.x-F.min.x,mt=F.max.y-F.min.y,ht=F.isBox3?F.max.z-F.min.z:1,Dt=F.min.x,Ut=F.min.y,Et=F.isBox3?F.min.z:0;else{const bn=Math.pow(2,-P);ct=Math.floor(de.width*bn),mt=Math.floor(de.height*bn),E.isDataArrayTexture?ht=de.depth:E.isData3DTexture?ht=Math.floor(de.depth*bn):ht=1,Dt=0,Ut=0,Et=0}H!==null?(Gt=H.x,ie=H.y,ye=H.z):(Gt=0,ie=0,ye=0);const le=rt.convert(O.format),bt=rt.convert(O.type);let Se;O.isData3DTexture?(Bt.setTexture3D(O,0),Se=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Bt.setTexture2DArray(O,0),Se=D.TEXTURE_2D_ARRAY):(Bt.setTexture2D(O,0),Se=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const Wt=D.getParameter(D.UNPACK_ROW_LENGTH),un=D.getParameter(D.UNPACK_IMAGE_HEIGHT),tr=D.getParameter(D.UNPACK_SKIP_PIXELS),fn=D.getParameter(D.UNPACK_SKIP_ROWS),ps=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,de.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,de.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Dt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ut),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Et);const me=E.isDataArrayTexture||E.isData3DTexture,Tn=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){const bn=Tt.get(E),je=Tt.get(O),tn=Tt.get(bn.__renderTarget),zc=Tt.get(je.__renderTarget);vt.bindFramebuffer(D.READ_FRAMEBUFFER,tn.__webglFramebuffer),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,zc.__webglFramebuffer);for(let Sa=0;Sa<ht;Sa++)me&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tt.get(E).__webglTexture,P,Et+Sa),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tt.get(O).__webglTexture,nt,ye+Sa)),D.blitFramebuffer(Dt,Ut,ct,mt,Gt,ie,ct,mt,D.DEPTH_BUFFER_BIT,D.NEAREST);vt.bindFramebuffer(D.READ_FRAMEBUFFER,null),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(P!==0||E.isRenderTargetTexture||Tt.has(E)){const bn=Tt.get(E),je=Tt.get(O);vt.bindFramebuffer(D.READ_FRAMEBUFFER,b0),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,A0);for(let tn=0;tn<ht;tn++)me?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,bn.__webglTexture,P,Et+tn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,bn.__webglTexture,P),Tn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,je.__webglTexture,nt,ye+tn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,je.__webglTexture,nt),P!==0?D.blitFramebuffer(Dt,Ut,ct,mt,Gt,ie,ct,mt,D.COLOR_BUFFER_BIT,D.NEAREST):Tn?D.copyTexSubImage3D(Se,nt,Gt,ie,ye+tn,Dt,Ut,ct,mt):D.copyTexSubImage2D(Se,nt,Gt,ie,Dt,Ut,ct,mt);vt.bindFramebuffer(D.READ_FRAMEBUFFER,null),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Tn?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Se,nt,Gt,ie,ye,ct,mt,ht,le,bt,de.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Se,nt,Gt,ie,ye,ct,mt,ht,le,de.data):D.texSubImage3D(Se,nt,Gt,ie,ye,ct,mt,ht,le,bt,de):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,nt,Gt,ie,ct,mt,le,bt,de.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,nt,Gt,ie,de.width,de.height,le,de.data):D.texSubImage2D(D.TEXTURE_2D,nt,Gt,ie,ct,mt,le,bt,de);D.pixelStorei(D.UNPACK_ROW_LENGTH,Wt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,un),D.pixelStorei(D.UNPACK_SKIP_PIXELS,tr),D.pixelStorei(D.UNPACK_SKIP_ROWS,fn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ps),nt===0&&O.generateMipmaps&&D.generateMipmap(Se),vt.unbindTexture()},this.copyTextureToTexture3D=function(E,O,F=null,H=null,P=0){return Vr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,O,F,H,P)},this.initRenderTarget=function(E){Tt.get(E).__webglFramebuffer===void 0&&Bt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Bt.setTextureCube(E,0):E.isData3DTexture?Bt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Bt.setTexture2DArray(E,0):Bt.setTexture2D(E,0),vt.unbindTexture()},this.resetState=function(){A=0,b=0,w=null,vt.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),n.unpackColorSpace=qt._getUnpackColorSpace()}}export{oe as C,m0 as I,o0 as M,Vn as P,m1 as S,I as V,g1 as W,bi as a,p1 as c,d1 as j};
