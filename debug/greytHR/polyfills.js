"use strict";(self.webpackChunkess=self.webpackChunkess||[]).push([[3461],{91360:(de,ue,it)=>{it(74124);const we=":";Error;const rt=function(o,...i){if(rt.translate){const f=rt.translate(o,i);o=f[0],i=f[1]}let u=ot(o[0],o.raw[0]);for(let f=1;f<o.length;f++)u+=i[f-1]+ot(o[f],o.raw[f]);return u},_e=":";function ot(o,i){return i.charAt(0)===_e?o.substring(function Ce(o,i){for(let u=1,f=1;u<o.length;u++,f++)if("\\"===i[f])f++;else if(o[u]===we)return u;throw new Error(`Unterminated $localize metadata block in "${i}".`)}(o,i)+1):o}globalThis.$localize=rt},74124:()=>{const de=globalThis;function ue(e){return(de.__Zone_symbol_prefix||"__zone_symbol__")+e}const we=Object.getOwnPropertyDescriptor,qe=Object.defineProperty,$e=Object.getPrototypeOf,pt=Object.create,He=Array.prototype.slice,at="addEventListener",Xe="removeEventListener",lt=ue(at),Ye=ue(Xe),Te="true",Ee="false",Ae=ue("");function Ke(e,r){return Zone.current.wrap(e,r)}function Je(e,r,l,t,a){return Zone.current.scheduleMacroTask(e,r,l,t,a)}const U=ue,Be=typeof window<"u",Re=Be?window:void 0,ee=Be&&Re||globalThis,ut="removeAttribute";function Ue(e,r){for(let l=e.length-1;l>=0;l--)"function"==typeof e[l]&&(e[l]=Ke(e[l],r+"_"+l));return e}function Pe(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&typeof e.set>"u")}const ft=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Ie=!("nw"in ee)&&typeof ee.process<"u"&&"[object process]"===ee.process.toString(),et=!Ie&&!ft&&!(!Be||!Re.HTMLElement),tt=typeof ee.process<"u"&&"[object process]"===ee.process.toString()&&!ft&&!(!Be||!Re.HTMLElement),ze={},yt=U("enable_beforeunload"),ht=function(e){if(!(e=e||ee.event))return;let r=ze[e.type];r||(r=ze[e.type]=U("ON_PROPERTY"+e.type));const l=this||e.target||ee,t=l[r];let a;return et&&l===Re&&"error"===e.type?(a=t&&t.call(this,e.message,e.filename,e.lineno,e.colno,e.error),!0===a&&e.preventDefault()):(a=t&&t.apply(this,arguments),"beforeunload"===e.type&&ee[yt]&&"string"==typeof a?e.returnValue=a:null!=a&&!a&&e.preventDefault()),a};function dt(e,r,l){let t=we(e,r);if(!t&&l&&we(l,r)&&(t={enumerable:!0,configurable:!0}),!t||!t.configurable)return;const a=U("on"+r+"patched");if(e.hasOwnProperty(a)&&e[a])return;delete t.writable,delete t.value;const _=t.get,y=t.set,k=r.slice(2);let w=ze[k];w||(w=ze[k]=U("ON_PROPERTY"+k)),t.set=function(M){let m=this;!m&&e===ee&&(m=ee),m&&("function"==typeof m[w]&&m.removeEventListener(k,ht),y&&y.call(m,null),m[w]=M,"function"==typeof M&&m.addEventListener(k,ht,!1))},t.get=function(){let M=this;if(!M&&e===ee&&(M=ee),!M)return null;const m=M[w];if(m)return m;if(_){let O=_.call(this);if(O)return t.set.call(this,O),"function"==typeof M[ut]&&M.removeAttribute(r),O}return null},qe(e,r,t),e[a]=!0}function nt(e,r,l){if(r)for(let t=0;t<r.length;t++)dt(e,"on"+r[t],l);else{const t=[];for(const a in e)"on"==a.slice(0,2)&&t.push(a);for(let a=0;a<t.length;a++)dt(e,t[a],l)}}const ge=U("originalInstance");function Ce(e){const r=ee[e];if(!r)return;ee[U(e)]=r,ee[e]=function(){const a=Ue(arguments,e);switch(a.length){case 0:this[ge]=new r;break;case 1:this[ge]=new r(a[0]);break;case 2:this[ge]=new r(a[0],a[1]);break;case 3:this[ge]=new r(a[0],a[1],a[2]);break;case 4:this[ge]=new r(a[0],a[1],a[2],a[3]);break;default:throw new Error("Arg list too long.")}},pe(ee[e],r);const l=new r(function(){});let t;for(t in l)"XMLHttpRequest"===e&&"responseBlob"===t||function(a){"function"==typeof l[a]?ee[e].prototype[a]=function(){return this[ge][a].apply(this[ge],arguments)}:qe(ee[e].prototype,a,{set:function(_){"function"==typeof _?(this[ge][a]=Ke(_,e+"."+a),pe(this[ge][a],_)):this[ge][a]=_},get:function(){return this[ge][a]}})}(t);for(t in r)"prototype"!==t&&r.hasOwnProperty(t)&&(ee[e][t]=r[t])}function me(e,r,l){let t=e;for(;t&&!t.hasOwnProperty(r);)t=$e(t);!t&&e[r]&&(t=e);const a=U(r);let _=null;if(t&&(!(_=t[a])||!t.hasOwnProperty(a))&&(_=t[a]=t[r],Pe(t&&we(t,r)))){const k=l(_,a,r);t[r]=function(){return k(this,arguments)},pe(t[r],_)}return _}function Nt(e,r,l){let t=null;function a(_){const y=_.data;return y.args[y.cbIdx]=function(){_.invoke.apply(this,arguments)},t.apply(y.target,y.args),_}t=me(e,r,_=>function(y,k){const w=l(y,k);return w.cbIdx>=0&&"function"==typeof k[w.cbIdx]?Je(w.name,k[w.cbIdx],w,a):_.apply(y,k)})}function pe(e,r){e[U("OriginalDelegate")]=r}let _t=!1,gt=!1;function Et(){if(_t)return gt;_t=!0;try{const e=Re.navigator.userAgent;(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/"))&&(gt=!0)}catch{}return gt}function kt(e){return"function"==typeof e}function vt(e){return"number"==typeof e}let Oe=!1;if(typeof window<"u")try{const e=Object.defineProperty({},"passive",{get:function(){Oe=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{Oe=!1}const rt={useG:!0},_e={},ot={},o=new RegExp("^"+Ae+"(\\w+)(true|false)$"),i=U("propagationStopped");function u(e,r){const l=(r?r(e):e)+Ee,t=(r?r(e):e)+Te,a=Ae+l,_=Ae+t;_e[e]={},_e[e][Ee]=a,_e[e][Te]=_}function f(e,r,l,t){const a=t&&t.add||at,_=t&&t.rm||Xe,y=t&&t.listeners||"eventListeners",k=t&&t.rmAll||"removeAllListeners",w=U(a),M="."+a+":",m="prependListener",O="."+m+":",B=function(S,T,G){if(S.isRemoved)return;const q=S.callback;let oe;"object"==typeof q&&q.handleEvent&&(S.callback=v=>q.handleEvent(v),S.originalDelegate=q);try{S.invoke(S,T,[G])}catch(v){oe=v}const X=S.options;return X&&"object"==typeof X&&X.once&&T[_].call(T,G.type,S.originalDelegate?S.originalDelegate:S.callback,X),oe};function W(S,T,G){if(!(T=T||e.event))return;const q=S||T.target||e,oe=q[_e[T.type][G?Te:Ee]];if(oe){const X=[];if(1===oe.length){const v=B(oe[0],q,T);v&&X.push(v)}else{const v=oe.slice();for(let Q=0;Q<v.length&&(!T||!0!==T[i]);Q++){const x=B(v[Q],q,T);x&&X.push(x)}}if(1===X.length)throw X[0];for(let v=0;v<X.length;v++){const Q=X[v];r.nativeScheduleMicroTask(()=>{throw Q})}}}const J=function(S){return W(this,S,!1)},ae=function(S){return W(this,S,!0)};function le(S,T){if(!S)return!1;let G=!0;T&&void 0!==T.useG&&(G=T.useG);const q=T&&T.vh;let oe=!0;T&&void 0!==T.chkDup&&(oe=T.chkDup);let X=!1;T&&void 0!==T.rt&&(X=T.rt);let v=S;for(;v&&!v.hasOwnProperty(a);)v=$e(v);if(!v&&S[a]&&(v=S),!v||v[w])return!1;const Q=T&&T.eventNameToString,x={},D=v[w]=v[a],I=v[U(_)]=v[_],A=v[U(y)]=v[y],he=v[U(k)]=v[k];let te;T&&T.prepend&&(te=v[U(T.prepend)]=v[T.prepend]);const ne=G?function(c){if(!x.isExisting)return D.call(x.target,x.eventName,x.capture?ae:J,x.options)}:function(c){return D.call(x.target,x.eventName,c.invoke,x.options)},z=G?function(c){if(!c.isRemoved){const d=_e[c.eventName];let N;d&&(N=d[c.capture?Te:Ee]);const L=N&&c.target[N];if(L)for(let b=0;b<L.length;b++)if(L[b]===c){L.splice(b,1),c.isRemoved=!0,c.removeAbortListener&&(c.removeAbortListener(),c.removeAbortListener=null),0===L.length&&(c.allRemoved=!0,c.target[N]=null);break}}if(c.allRemoved)return I.call(c.target,c.eventName,c.capture?ae:J,c.options)}:function(c){return I.call(c.target,c.eventName,c.invoke,c.options)},Se=T&&T.diff?T.diff:function(c,d){const N=typeof d;return"function"===N&&c.callback===d||"object"===N&&c.originalDelegate===d},Ne=Zone[U("UNPATCHED_EVENTS")],ye=e[U("PASSIVE_EVENTS")],h=function(c,d,N,L,b=!1,Z=!1){return function(){const $=this||e;let H=arguments[0];T&&T.transferEventName&&(H=T.transferEventName(H));let Y=arguments[1];if(!Y)return c.apply(this,arguments);if(Ie&&"uncaughtException"===H)return c.apply(this,arguments);let K=!1;if("function"!=typeof Y){if(!Y.handleEvent)return c.apply(this,arguments);K=!0}if(q&&!q(c,Y,$,arguments))return;const Me=Oe&&!!ye&&-1!==ye.indexOf(H),ve=function g(c){if("object"==typeof c&&null!==c){const d={...c};return c.signal&&(d.signal=c.signal),d}return c}(function j(c,d){return!Oe&&"object"==typeof c&&c?!!c.capture:Oe&&d?"boolean"==typeof c?{capture:c,passive:!0}:c?"object"==typeof c&&!1!==c.passive?{...c,passive:!0}:c:{passive:!0}:c}(arguments[2],Me)),Fe=ve?.signal;if(Fe?.aborted)return;if(Ne)for(let be=0;be<Ne.length;be++)if(H===Ne[be])return Me?c.call($,H,Y,ve):c.apply(this,arguments);const Pt=!!ve&&("boolean"==typeof ve||ve.capture),Ct=!(!ve||"object"!=typeof ve)&&ve.once,xt=Zone.current;let St=_e[H];St||(u(H,Q),St=_e[H]);const Ot=St[Pt?Te:Ee];let mt,We=$[Ot],Dt=!1;if(We){if(Dt=!0,oe)for(let be=0;be<We.length;be++)if(Se(We[be],Y))return}else We=$[Ot]=[];const Lt=$.constructor.name,Mt=ot[Lt];Mt&&(mt=Mt[H]),mt||(mt=Lt+d+(Q?Q(H):H)),x.options=ve,Ct&&(x.options.once=!1),x.target=$,x.capture=Pt,x.eventName=H,x.isExisting=Dt;const st=G?rt:void 0;st&&(st.taskData=x),Fe&&(x.options.signal=void 0);const ke=xt.scheduleEventTask(mt,Y,st,N,L);if(Fe){x.options.signal=Fe;const be=()=>ke.zone.cancelTask(ke);c.call(Fe,"abort",be,{once:!0}),ke.removeAbortListener=()=>Fe.removeEventListener("abort",be)}return x.target=null,st&&(st.taskData=null),Ct&&(x.options.once=!0),!Oe&&"boolean"==typeof ke.options||(ke.options=ve),ke.target=$,ke.capture=Pt,ke.eventName=H,K&&(ke.originalDelegate=Y),Z?We.unshift(ke):We.push(ke),b?$:void 0}};return v[a]=h(D,M,ne,z,X),te&&(v[m]=h(te,O,function(c){return te.call(x.target,x.eventName,c.invoke,x.options)},z,X,!0)),v[_]=function(){const c=this||e;let d=arguments[0];T&&T.transferEventName&&(d=T.transferEventName(d));const N=arguments[2],L=!!N&&("boolean"==typeof N||N.capture),b=arguments[1];if(!b)return I.apply(this,arguments);if(q&&!q(I,b,c,arguments))return;const Z=_e[d];let $;Z&&($=Z[L?Te:Ee]);const H=$&&c[$];if(H)for(let Y=0;Y<H.length;Y++){const K=H[Y];if(Se(K,b))return H.splice(Y,1),K.isRemoved=!0,0!==H.length||(K.allRemoved=!0,c[$]=null,L||"string"!=typeof d)||(c[Ae+"ON_PROPERTY"+d]=null),K.zone.cancelTask(K),X?c:void 0}return I.apply(this,arguments)},v[y]=function(){const c=this||e;let d=arguments[0];T&&T.transferEventName&&(d=T.transferEventName(d));const N=[],L=E(c,Q?Q(d):d);for(let b=0;b<L.length;b++){const Z=L[b];N.push(Z.originalDelegate?Z.originalDelegate:Z.callback)}return N},v[k]=function(){const c=this||e;let d=arguments[0];if(d){T&&T.transferEventName&&(d=T.transferEventName(d));const N=_e[d];if(N){const Z=c[N[Ee]],$=c[N[Te]];if(Z){const H=Z.slice();for(let Y=0;Y<H.length;Y++){const K=H[Y];this[_].call(this,d,K.originalDelegate?K.originalDelegate:K.callback,K.options)}}if($){const H=$.slice();for(let Y=0;Y<H.length;Y++){const K=H[Y];this[_].call(this,d,K.originalDelegate?K.originalDelegate:K.callback,K.options)}}}}else{const N=Object.keys(c);for(let L=0;L<N.length;L++){const Z=o.exec(N[L]);let $=Z&&Z[1];$&&"removeListener"!==$&&this[k].call(this,$)}this[k].call(this,"removeListener")}if(X)return this},pe(v[a],D),pe(v[_],I),he&&pe(v[k],he),A&&pe(v[y],A),!0}let re=[];for(let S=0;S<l.length;S++)re[S]=le(l[S],t);return re}function E(e,r){if(!r){const _=[];for(let y in e){const k=o.exec(y);let w=k&&k[1];if(w&&(!r||w===r)){const M=e[y];if(M)for(let m=0;m<M.length;m++)_.push(M[m])}}return _}let l=_e[r];l||(u(r),l=_e[r]);const t=e[l[Ee]],a=e[l[Te]];return t?a?t.concat(a):t.slice():a?a.slice():[]}function R(e,r){const l=e.Event;l&&l.prototype&&r.patchMethod(l.prototype,"stopImmediatePropagation",t=>function(a,_){a[i]=!0,t&&t.apply(a,_)})}const F=U("zoneTask");function V(e,r,l,t){let a=null,_=null;l+=t;const y={};function k(M){const m=M.data;m.args[0]=function(){return M.invoke.apply(this,arguments)};const O=a.apply(e,m.args);return vt(O)?m.handleId=O:(m.handle=O,m.isRefreshable=kt(O.refresh)),M}function w(M){const{handle:m,handleId:O}=M.data;return _.call(e,m??O)}a=me(e,r+=t,M=>function(m,O){if(kt(O[0])){const B={isRefreshable:!1,isPeriodic:"Interval"===t,delay:"Timeout"===t||"Interval"===t?O[1]||0:void 0,args:O},W=O[0];O[0]=function(){try{return W.apply(this,arguments)}finally{const{handle:G,handleId:q,isPeriodic:oe,isRefreshable:X}=B;!oe&&!X&&(q?delete y[q]:G&&(G[F]=null))}};const J=Je(r,O[0],B,k,w);if(!J)return J;const{handleId:ae,handle:le,isRefreshable:re,isPeriodic:S}=J.data;if(ae)y[ae]=J;else if(le&&(le[F]=J,re&&!S)){const T=le.refresh;le.refresh=function(){const{zone:G,state:q}=J;return"notScheduled"===q?(J._state="scheduled",G._updateTaskCount(J,1)):"running"===q&&(J._state="scheduling"),T.call(this)}}return le??ae??J}return M.apply(e,O)}),_=me(e,l,M=>function(m,O){const B=O[0];let W;vt(B)?(W=y[B],delete y[B]):(W=B?.[F],W?B[F]=null:W=B),W?.type?W.cancelFn&&W.zone.cancelTask(W):M.apply(e,O)})}function je(e,r,l){if(!l||0===l.length)return r;const t=l.filter(_=>_.target===e);if(!t||0===t.length)return r;const a=t[0].ignoreProperties;return r.filter(_=>-1===a.indexOf(_))}function Ve(e,r,l,t){e&&nt(e,je(e,r,l),t)}function fe(e){return Object.getOwnPropertyNames(e).filter(r=>r.startsWith("on")&&r.length>2).map(r=>r.substring(2))}function wt(e,r,l,t,a){const _=Zone.__symbol__(t);if(r[_])return;const y=r[_]=r[t];r[t]=function(k,w,M){return w&&w.prototype&&a.forEach(function(m){const O=`${l}.${t}::`+m,B=w.prototype;try{if(B.hasOwnProperty(m)){const W=e.ObjectGetOwnPropertyDescriptor(B,m);W&&W.value?(W.value=e.wrapWithCurrentZone(W.value,O),e._redefineProperty(w.prototype,m,W)):B[m]&&(B[m]=e.wrapWithCurrentZone(B[m],O))}else B[m]&&(B[m]=e.wrapWithCurrentZone(B[m],O))}catch{}}),y.call(r,k,w,M)},e.attachOriginToPatched(r[t],y)}const It=function ct(){const e=globalThis,r=!0===e[ue("forceDuplicateZoneCheck")];if(e.Zone&&(r||"function"!=typeof e.Zone.__symbol__))throw new Error("Zone already loaded.");return e.Zone??=function it(){const e=de.performance;function r(j){e&&e.mark&&e.mark(j)}function l(j,p){e&&e.measure&&e.measure(j,p)}r("Zone");let t=(()=>{class j{static#e=this.__symbol__=ue;static assertZonePatched(){if(de.Promise!==x.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let n=j.current;for(;n.parent;)n=n.parent;return n}static get current(){return I.zone}static get currentTask(){return A}static __load_patch(n,s,P=!1){if(x.hasOwnProperty(n)){const C=!0===de[ue("forceDuplicateZoneCheck")];if(!P&&C)throw Error("Already loaded patch: "+n)}else if(!de["__Zone_disable_"+n]){const C="Zone:"+n;r(C),x[n]=s(de,j,D),l(C,C)}}get parent(){return this._parent}get name(){return this._name}constructor(n,s){this._parent=n,this._name=s?s.name||"unnamed":"<root>",this._properties=s&&s.properties||{},this._zoneDelegate=new _(this,this._parent&&this._parent._zoneDelegate,s)}get(n){const s=this.getZoneWith(n);if(s)return s._properties[n]}getZoneWith(n){let s=this;for(;s;){if(s._properties.hasOwnProperty(n))return s;s=s._parent}return null}fork(n){if(!n)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,n)}wrap(n,s){if("function"!=typeof n)throw new Error("Expecting function got: "+n);const P=this._zoneDelegate.intercept(this,n,s),C=this;return function(){return C.runGuarded(P,this,arguments,s)}}run(n,s,P,C){I={parent:I,zone:this};try{return this._zoneDelegate.invoke(this,n,s,P,C)}finally{I=I.parent}}runGuarded(n,s=null,P,C){I={parent:I,zone:this};try{try{return this._zoneDelegate.invoke(this,n,s,P,C)}catch(ne){if(this._zoneDelegate.handleError(this,ne))throw ne}}finally{I=I.parent}}runTask(n,s,P){if(n.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(n.zone||le).name+"; Execution: "+this.name+")");const C=n,{type:ne,data:{isPeriodic:z=!1,isRefreshable:Le=!1}={}}=n;if(n.state===re&&(ne===Q||ne===v))return;const Se=n.state!=G;Se&&C._transitionTo(G,T);const Ne=A;A=C,I={parent:I,zone:this};try{ne==v&&n.data&&!z&&!Le&&(n.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,C,s,P)}catch(ye){if(this._zoneDelegate.handleError(this,ye))throw ye}}finally{const ye=n.state;if(ye!==re&&ye!==oe)if(ne==Q||z||Le&&ye===S)Se&&C._transitionTo(T,G,S);else{const g=C._zoneDelegates;this._updateTaskCount(C,-1),Se&&C._transitionTo(re,G,re),Le&&(C._zoneDelegates=g)}I=I.parent,A=Ne}}scheduleTask(n){if(n.zone&&n.zone!==this){let P=this;for(;P;){if(P===n.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${n.zone.name}`);P=P.parent}}n._transitionTo(S,re);const s=[];n._zoneDelegates=s,n._zone=this;try{n=this._zoneDelegate.scheduleTask(this,n)}catch(P){throw n._transitionTo(oe,S,re),this._zoneDelegate.handleError(this,P),P}return n._zoneDelegates===s&&this._updateTaskCount(n,1),n.state==S&&n._transitionTo(T,S),n}scheduleMicroTask(n,s,P,C){return this.scheduleTask(new y(X,n,s,P,C,void 0))}scheduleMacroTask(n,s,P,C,ne){return this.scheduleTask(new y(v,n,s,P,C,ne))}scheduleEventTask(n,s,P,C,ne){return this.scheduleTask(new y(Q,n,s,P,C,ne))}cancelTask(n){if(n.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(n.zone||le).name+"; Execution: "+this.name+")");if(n.state===T||n.state===G){n._transitionTo(q,T,G);try{this._zoneDelegate.cancelTask(this,n)}catch(s){throw n._transitionTo(oe,q),this._zoneDelegate.handleError(this,s),s}return this._updateTaskCount(n,-1),n._transitionTo(re,q),n.runCount=-1,n}}_updateTaskCount(n,s){const P=n._zoneDelegates;-1==s&&(n._zoneDelegates=null);for(let C=0;C<P.length;C++)P[C]._updateTaskCount(n.type,s)}}return j})();const a={name:"",onHasTask:(j,p,n,s)=>j.hasTask(n,s),onScheduleTask:(j,p,n,s)=>j.scheduleTask(n,s),onInvokeTask:(j,p,n,s,P,C)=>j.invokeTask(n,s,P,C),onCancelTask:(j,p,n,s)=>j.cancelTask(n,s)};class _{get zone(){return this._zone}constructor(p,n,s){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this._zone=p,this._parentDelegate=n,this._forkZS=s&&(s&&s.onFork?s:n._forkZS),this._forkDlgt=s&&(s.onFork?n:n._forkDlgt),this._forkCurrZone=s&&(s.onFork?this._zone:n._forkCurrZone),this._interceptZS=s&&(s.onIntercept?s:n._interceptZS),this._interceptDlgt=s&&(s.onIntercept?n:n._interceptDlgt),this._interceptCurrZone=s&&(s.onIntercept?this._zone:n._interceptCurrZone),this._invokeZS=s&&(s.onInvoke?s:n._invokeZS),this._invokeDlgt=s&&(s.onInvoke?n:n._invokeDlgt),this._invokeCurrZone=s&&(s.onInvoke?this._zone:n._invokeCurrZone),this._handleErrorZS=s&&(s.onHandleError?s:n._handleErrorZS),this._handleErrorDlgt=s&&(s.onHandleError?n:n._handleErrorDlgt),this._handleErrorCurrZone=s&&(s.onHandleError?this._zone:n._handleErrorCurrZone),this._scheduleTaskZS=s&&(s.onScheduleTask?s:n._scheduleTaskZS),this._scheduleTaskDlgt=s&&(s.onScheduleTask?n:n._scheduleTaskDlgt),this._scheduleTaskCurrZone=s&&(s.onScheduleTask?this._zone:n._scheduleTaskCurrZone),this._invokeTaskZS=s&&(s.onInvokeTask?s:n._invokeTaskZS),this._invokeTaskDlgt=s&&(s.onInvokeTask?n:n._invokeTaskDlgt),this._invokeTaskCurrZone=s&&(s.onInvokeTask?this._zone:n._invokeTaskCurrZone),this._cancelTaskZS=s&&(s.onCancelTask?s:n._cancelTaskZS),this._cancelTaskDlgt=s&&(s.onCancelTask?n:n._cancelTaskDlgt),this._cancelTaskCurrZone=s&&(s.onCancelTask?this._zone:n._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const P=s&&s.onHasTask;(P||n&&n._hasTaskZS)&&(this._hasTaskZS=P?s:a,this._hasTaskDlgt=n,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,s.onScheduleTask||(this._scheduleTaskZS=a,this._scheduleTaskDlgt=n,this._scheduleTaskCurrZone=this._zone),s.onInvokeTask||(this._invokeTaskZS=a,this._invokeTaskDlgt=n,this._invokeTaskCurrZone=this._zone),s.onCancelTask||(this._cancelTaskZS=a,this._cancelTaskDlgt=n,this._cancelTaskCurrZone=this._zone))}fork(p,n){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,p,n):new t(p,n)}intercept(p,n,s){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,p,n,s):n}invoke(p,n,s,P,C){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,p,n,s,P,C):n.apply(s,P)}handleError(p,n){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,p,n)}scheduleTask(p,n){let s=n;if(this._scheduleTaskZS)this._hasTaskZS&&s._zoneDelegates.push(this._hasTaskDlgtOwner),s=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,p,n),s||(s=n);else if(n.scheduleFn)n.scheduleFn(n);else{if(n.type!=X)throw new Error("Task is missing scheduleFn.");J(n)}return s}invokeTask(p,n,s,P){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,p,n,s,P):n.callback.apply(s,P)}cancelTask(p,n){let s;if(this._cancelTaskZS)s=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,p,n);else{if(!n.cancelFn)throw Error("Task is not cancelable");s=n.cancelFn(n)}return s}hasTask(p,n){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,p,n)}catch(s){this.handleError(p,s)}}_updateTaskCount(p,n){const s=this._taskCounts,P=s[p],C=s[p]=P+n;if(C<0)throw new Error("More tasks executed then were scheduled.");0!=P&&0!=C||this.hasTask(this._zone,{microTask:s.microTask>0,macroTask:s.macroTask>0,eventTask:s.eventTask>0,change:p})}}class y{constructor(p,n,s,P,C,ne){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=p,this.source=n,this.data=P,this.scheduleFn=C,this.cancelFn=ne,!s)throw new Error("callback is not defined");this.callback=s;const z=this;this.invoke=p===Q&&P&&P.useG?y.invokeTask:function(){return y.invokeTask.call(de,z,this,arguments)}}static invokeTask(p,n,s){p||(p=this),he++;try{return p.runCount++,p.zone.runTask(p,n,s)}finally{1==he&&ae(),he--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(re,S)}_transitionTo(p,n,s){if(this._state!==n&&this._state!==s)throw new Error(`${this.type} '${this.source}': can not transition to '${p}', expecting state '${n}'${s?" or '"+s+"'":""}, was '${this._state}'.`);this._state=p,p==re&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const k=ue("setTimeout"),w=ue("Promise"),M=ue("then");let B,m=[],O=!1;function W(j){if(B||de[w]&&(B=de[w].resolve(0)),B){let p=B[M];p||(p=B.then),p.call(B,j)}else de[k](j,0)}function J(j){0===he&&0===m.length&&W(ae),j&&m.push(j)}function ae(){if(!O){for(O=!0;m.length;){const j=m;m=[];for(let p=0;p<j.length;p++){const n=j[p];try{n.zone.runTask(n,null,null)}catch(s){D.onUnhandledError(s)}}}D.microtaskDrainDone(),O=!1}}const le={name:"NO ZONE"},re="notScheduled",S="scheduling",T="scheduled",G="running",q="canceling",oe="unknown",X="microTask",v="macroTask",Q="eventTask",x={},D={symbol:ue,currentZoneFrame:()=>I,onUnhandledError:te,microtaskDrainDone:te,scheduleMicroTask:J,showUncaughtError:()=>!t[ue("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:te,patchMethod:()=>te,bindArguments:()=>[],patchThen:()=>te,patchMacroTask:()=>te,patchEventPrototype:()=>te,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>te,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>te,wrapWithCurrentZone:()=>te,filterProperties:()=>[],attachOriginToPatched:()=>te,_redefineProperty:()=>te,patchCallbacks:()=>te,nativeScheduleMicroTask:W};let I={parent:null,zone:new t(null,null)},A=null,he=0;function te(){}return l("Zone","Zone"),t}(),e.Zone}();(function At(e){(function Ze(e){e.__load_patch("ZoneAwarePromise",(r,l,t)=>{const a=Object.getOwnPropertyDescriptor,_=Object.defineProperty,k=t.symbol,w=[],M=!1!==r[k("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],m=k("Promise"),O=k("then"),B="__creationTrace__";t.onUnhandledError=g=>{if(t.showUncaughtError()){const h=g&&g.rejection;h?console.error("Unhandled Promise rejection:",h instanceof Error?h.message:h,"; Zone:",g.zone.name,"; Task:",g.task&&g.task.source,"; Value:",h,h instanceof Error?h.stack:void 0):console.error(g)}},t.microtaskDrainDone=()=>{for(;w.length;){const g=w.shift();try{g.zone.runGuarded(()=>{throw g.throwOriginal?g.rejection:g})}catch(h){J(h)}}};const W=k("unhandledPromiseRejectionHandler");function J(g){t.onUnhandledError(g);try{const h=l[W];"function"==typeof h&&h.call(this,g)}catch{}}function ae(g){return g&&g.then}function le(g){return g}function re(g){return z.reject(g)}const S=k("state"),T=k("value"),G=k("finally"),q=k("parentPromiseValue"),oe=k("parentPromiseState"),X="Promise.then",v=null,Q=!0,x=!1,D=0;function I(g,h){return c=>{try{j(g,h,c)}catch(d){j(g,!1,d)}}}const A=function(){let g=!1;return function(c){return function(){g||(g=!0,c.apply(null,arguments))}}},he="Promise resolved with itself",te=k("currentTaskTrace");function j(g,h,c){const d=A();if(g===c)throw new TypeError(he);if(g[S]===v){let N=null;try{("object"==typeof c||"function"==typeof c)&&(N=c&&c.then)}catch(L){return d(()=>{j(g,!1,L)})(),g}if(h!==x&&c instanceof z&&c.hasOwnProperty(S)&&c.hasOwnProperty(T)&&c[S]!==v)n(c),j(g,c[S],c[T]);else if(h!==x&&"function"==typeof N)try{N.call(c,d(I(g,h)),d(I(g,!1)))}catch(L){d(()=>{j(g,!1,L)})()}else{g[S]=h;const L=g[T];if(g[T]=c,g[G]===G&&h===Q&&(g[S]=g[oe],g[T]=g[q]),h===x&&c instanceof Error){const b=l.currentTask&&l.currentTask.data&&l.currentTask.data[B];b&&_(c,te,{configurable:!0,enumerable:!1,writable:!0,value:b})}for(let b=0;b<L.length;)s(g,L[b++],L[b++],L[b++],L[b++]);if(0==L.length&&h==x){g[S]=D;let b=c;try{throw new Error("Uncaught (in promise): "+function y(g){return g&&g.toString===Object.prototype.toString?(g.constructor&&g.constructor.name||"")+": "+JSON.stringify(g):g?g.toString():Object.prototype.toString.call(g)}(c)+(c&&c.stack?"\n"+c.stack:""))}catch(Z){b=Z}M&&(b.throwOriginal=!0),b.rejection=c,b.promise=g,b.zone=l.current,b.task=l.currentTask,w.push(b),t.scheduleMicroTask()}}}return g}const p=k("rejectionHandledHandler");function n(g){if(g[S]===D){try{const h=l[p];h&&"function"==typeof h&&h.call(this,{rejection:g[T],promise:g})}catch{}g[S]=x;for(let h=0;h<w.length;h++)g===w[h].promise&&w.splice(h,1)}}function s(g,h,c,d,N){n(g);const L=g[S],b=L?"function"==typeof d?d:le:"function"==typeof N?N:re;h.scheduleMicroTask(X,()=>{try{const Z=g[T],$=!!c&&G===c[G];$&&(c[q]=Z,c[oe]=L);const H=h.run(b,void 0,$&&b!==re&&b!==le?[]:[Z]);j(c,!0,H)}catch(Z){j(c,!1,Z)}},c)}const C=function(){},ne=r.AggregateError;class z{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(h){return h instanceof z?h:j(new this(null),Q,h)}static reject(h){return j(new this(null),x,h)}static withResolvers(){const h={};return h.promise=new z((c,d)=>{h.resolve=c,h.reject=d}),h}static any(h){if(!h||"function"!=typeof h[Symbol.iterator])return Promise.reject(new ne([],"All promises were rejected"));const c=[];let d=0;try{for(let b of h)d++,c.push(z.resolve(b))}catch{return Promise.reject(new ne([],"All promises were rejected"))}if(0===d)return Promise.reject(new ne([],"All promises were rejected"));let N=!1;const L=[];return new z((b,Z)=>{for(let $=0;$<c.length;$++)c[$].then(H=>{N||(N=!0,b(H))},H=>{L.push(H),d--,0===d&&(N=!0,Z(new ne(L,"All promises were rejected")))})})}static race(h){let c,d,N=new this((Z,$)=>{c=Z,d=$});function L(Z){c(Z)}function b(Z){d(Z)}for(let Z of h)ae(Z)||(Z=this.resolve(Z)),Z.then(L,b);return N}static all(h){return z.allWithCallback(h)}static allSettled(h){return(this&&this.prototype instanceof z?this:z).allWithCallback(h,{thenCallback:d=>({status:"fulfilled",value:d}),errorCallback:d=>({status:"rejected",reason:d})})}static allWithCallback(h,c){let d,N,L=new this((H,Y)=>{d=H,N=Y}),b=2,Z=0;const $=[];for(let H of h){ae(H)||(H=this.resolve(H));const Y=Z;try{H.then(K=>{$[Y]=c?c.thenCallback(K):K,b--,0===b&&d($)},K=>{c?($[Y]=c.errorCallback(K),b--,0===b&&d($)):N(K)})}catch(K){N(K)}b++,Z++}return b-=2,0===b&&d($),L}constructor(h){const c=this;if(!(c instanceof z))throw new Error("Must be an instanceof Promise.");c[S]=v,c[T]=[];try{const d=A();h&&h(d(I(c,Q)),d(I(c,x)))}catch(d){j(c,!1,d)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return z}then(h,c){let d=this.constructor?.[Symbol.species];(!d||"function"!=typeof d)&&(d=this.constructor||z);const N=new d(C),L=l.current;return this[S]==v?this[T].push(L,N,h,c):s(this,L,N,h,c),N}catch(h){return this.then(null,h)}finally(h){let c=this.constructor?.[Symbol.species];(!c||"function"!=typeof c)&&(c=z);const d=new c(C);d[G]=G;const N=l.current;return this[S]==v?this[T].push(N,d,h,h):s(this,N,d,h,h),d}}z.resolve=z.resolve,z.reject=z.reject,z.race=z.race,z.all=z.all;const Le=r[m]=r.Promise;r.Promise=z;const Se=k("thenPatched");function Ne(g){const h=g.prototype,c=a(h,"then");if(c&&(!1===c.writable||!c.configurable))return;const d=h.then;h[O]=d,g.prototype.then=function(N,L){return new z((Z,$)=>{d.call(this,Z,$)}).then(N,L)},g[Se]=!0}return t.patchThen=Ne,Le&&(Ne(Le),me(r,"fetch",g=>function ye(g){return function(h,c){let d=g.apply(h,c);if(d instanceof z)return d;let N=d.constructor;return N[Se]||Ne(N),d}}(g))),Promise[l.__symbol__("uncaughtPromiseErrors")]=w,z})})(e),function bt(e){e.__load_patch("toString",r=>{const l=Function.prototype.toString,t=U("OriginalDelegate"),a=U("Promise"),_=U("Error"),y=function(){if("function"==typeof this){const m=this[t];if(m)return"function"==typeof m?l.call(m):Object.prototype.toString.call(m);if(this===Promise){const O=r[a];if(O)return l.call(O)}if(this===Error){const O=r[_];if(O)return l.call(O)}}return l.call(this)};y[t]=l,Function.prototype.toString=y;const k=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":k.call(this)}})}(e),function Rt(e){e.__load_patch("util",(r,l,t)=>{const a=fe(r);t.patchOnProperties=nt,t.patchMethod=me,t.bindArguments=Ue,t.patchMacroTask=Nt;const _=l.__symbol__("BLACK_LISTED_EVENTS"),y=l.__symbol__("UNPATCHED_EVENTS");r[y]&&(r[_]=r[y]),r[_]&&(l[_]=l[y]=r[_]),t.patchEventPrototype=R,t.patchEventTarget=f,t.isIEOrEdge=Et,t.ObjectDefineProperty=qe,t.ObjectGetOwnPropertyDescriptor=we,t.ObjectCreate=pt,t.ArraySlice=He,t.patchClass=Ce,t.wrapWithCurrentZone=Ke,t.filterProperties=je,t.attachOriginToPatched=pe,t._redefineProperty=Object.defineProperty,t.patchCallbacks=wt,t.getGlobalObjects=()=>({globalSources:ot,zoneSymbolEventNames:_e,eventNames:a,isBrowser:et,isMix:tt,isNode:Ie,TRUE_STR:Te,FALSE_STR:Ee,ZONE_SYMBOL_PREFIX:Ae,ADD_EVENT_LISTENER_STR:at,REMOVE_EVENT_LISTENER_STR:Xe})})}(e)})(It),function se(e){e.__load_patch("legacy",r=>{const l=r[e.__symbol__("legacyPatch")];l&&l()}),e.__load_patch("timers",r=>{const l="set",t="clear";V(r,l,t,"Timeout"),V(r,l,t,"Interval"),V(r,l,t,"Immediate")}),e.__load_patch("requestAnimationFrame",r=>{V(r,"request","cancel","AnimationFrame"),V(r,"mozRequest","mozCancel","AnimationFrame"),V(r,"webkitRequest","webkitCancel","AnimationFrame")}),e.__load_patch("blocking",(r,l)=>{const t=["alert","prompt","confirm"];for(let a=0;a<t.length;a++)me(r,t[a],(y,k,w)=>function(M,m){return l.current.run(y,r,m,w)})}),e.__load_patch("EventTarget",(r,l,t)=>{(function xe(e,r){r.patchEventPrototype(e,r)})(r,t),function De(e,r){if(Zone[r.symbol("patchEventTarget")])return;const{eventNames:l,zoneSymbolEventNames:t,TRUE_STR:a,FALSE_STR:_,ZONE_SYMBOL_PREFIX:y}=r.getGlobalObjects();for(let w=0;w<l.length;w++){const M=l[w],B=y+(M+_),W=y+(M+a);t[M]={},t[M][_]=B,t[M][a]=W}const k=e.EventTarget;k&&k.prototype&&r.patchEventTarget(e,r,[k&&k.prototype])}(r,t);const a=r.XMLHttpRequestEventTarget;a&&a.prototype&&t.patchEventTarget(r,t,[a.prototype])}),e.__load_patch("MutationObserver",(r,l,t)=>{Ce("MutationObserver"),Ce("WebKitMutationObserver")}),e.__load_patch("IntersectionObserver",(r,l,t)=>{Ce("IntersectionObserver")}),e.__load_patch("FileReader",(r,l,t)=>{Ce("FileReader")}),e.__load_patch("on_property",(r,l,t)=>{!function Ge(e,r){if(Ie&&!tt||Zone[e.symbol("patchEvents")])return;const l=r.__Zone_ignore_on_properties;let t=[];if(et){const a=window;t=t.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const _=function Tt(){try{const e=Re.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:a,ignoreProperties:["error"]}]:[];Ve(a,fe(a),l&&l.concat(_),$e(a))}t=t.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let a=0;a<t.length;a++){const _=r[t[a]];_&&_.prototype&&Ve(_.prototype,fe(_.prototype),l)}}(t,r)}),e.__load_patch("customElements",(r,l,t)=>{!function ie(e,r){const{isBrowser:l,isMix:t}=r.getGlobalObjects();(l||t)&&e.customElements&&"customElements"in e&&r.patchCallbacks(r,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"])}(r,t)}),e.__load_patch("XHR",(r,l)=>{!function M(m){const O=m.XMLHttpRequest;if(!O)return;const B=O.prototype;let J=B[lt],ae=B[Ye];if(!J){const D=m.XMLHttpRequestEventTarget;if(D){const I=D.prototype;J=I[lt],ae=I[Ye]}}const le="readystatechange",re="scheduled";function S(D){const I=D.data,A=I.target;A[y]=!1,A[w]=!1;const he=A[_];J||(J=A[lt],ae=A[Ye]),he&&ae.call(A,le,he);const te=A[_]=()=>{if(A.readyState===A.DONE)if(!I.aborted&&A[y]&&D.state===re){const p=A[l.__symbol__("loadfalse")];if(0!==A.status&&p&&p.length>0){const n=D.invoke;D.invoke=function(){const s=A[l.__symbol__("loadfalse")];for(let P=0;P<s.length;P++)s[P]===D&&s.splice(P,1);!I.aborted&&D.state===re&&n.call(D)},p.push(D)}else D.invoke()}else!I.aborted&&!1===A[y]&&(A[w]=!0)};return J.call(A,le,te),A[t]||(A[t]=D),Q.apply(A,I.args),A[y]=!0,D}function T(){}function G(D){const I=D.data;return I.aborted=!0,x.apply(I.target,I.args)}const q=me(B,"open",()=>function(D,I){return D[a]=0==I[2],D[k]=I[1],q.apply(D,I)}),X=U("fetchTaskAborting"),v=U("fetchTaskScheduling"),Q=me(B,"send",()=>function(D,I){if(!0===l.current[v]||D[a])return Q.apply(D,I);{const A={target:D,url:D[k],isPeriodic:!1,args:I,aborted:!1},he=Je("XMLHttpRequest.send",T,A,S,G);D&&!0===D[w]&&!A.aborted&&he.state===re&&he.invoke()}}),x=me(B,"abort",()=>function(D,I){const A=function W(D){return D[t]}(D);if(A&&"string"==typeof A.type){if(null==A.cancelFn||A.data&&A.data.aborted)return;A.zone.cancelTask(A)}else if(!0===l.current[X])return x.apply(D,I)})}(r);const t=U("xhrTask"),a=U("xhrSync"),_=U("xhrListener"),y=U("xhrScheduled"),k=U("xhrURL"),w=U("xhrErrorBeforeScheduled")}),e.__load_patch("geolocation",r=>{r.navigator&&r.navigator.geolocation&&function Qe(e,r){const l=e.constructor.name;for(let t=0;t<r.length;t++){const a=r[t],_=e[a];if(_){if(!Pe(we(e,a)))continue;e[a]=(k=>{const w=function(){return k.apply(this,Ue(arguments,l+"."+a))};return pe(w,k),w})(_)}}}(r.navigator.geolocation,["getCurrentPosition","watchPosition"])}),e.__load_patch("PromiseRejectionEvent",(r,l)=>{function t(a){return function(_){E(r,a).forEach(k=>{const w=r.PromiseRejectionEvent;if(w){const M=new w(a,{promise:_.promise,reason:_.rejection});k.invoke(M)}})}}r.PromiseRejectionEvent&&(l[U("unhandledPromiseRejectionHandler")]=t("unhandledrejection"),l[U("rejectionHandledHandler")]=t("rejectionhandled"))}),e.__load_patch("queueMicrotask",(r,l,t)=>{!function ce(e,r){r.patchMethod(e,"queueMicrotask",l=>function(t,a){Zone.current.scheduleMicroTask("queueMicrotask",a[0])})}(r,t)})}(It)}},de=>{de(de.s=91360)}]);
//# sourceMappingURL=polyfills.js.map