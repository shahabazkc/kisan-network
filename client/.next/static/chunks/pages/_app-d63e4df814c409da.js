(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8679:function(e,t,r){"use strict";var n=r(9864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},u={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},f={};function i(e){return n.isMemo(e)?c:f[e.$$typeof]||o}f[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},f[n.Memo]=c;var a=Object.defineProperty,s=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,y=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,d=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(d){var o=p(r);o&&o!==d&&e(t,o,n)}var c=s(r);l&&(c=c.concat(l(r)));for(var f=i(t),b=i(r),v=0;v<c.length;++v){var m=c[v];if(!u[m]&&(!n||!n[m])&&(!b||!b[m])&&(!f||!f[m])){var S=y(r,m);try{a(t,m,S)}catch(w){}}}}return t}},6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(5849)}])},5849:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return E}});var n=r(5893),o=(r(6774),r(894),r(9473)),u=r(2146);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){c(e,t,r[t])}))}return e}var i={menu:{currentTab:"contacts"},composeData:{firstName:"",lastName:"",number:"",message:""}};function a(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var s="function"===typeof Symbol&&Symbol.observable||"@@observable",l=function(){return Math.random().toString(36).substring(7).split("").join(".")},y={INIT:"@@redux/INIT"+l(),REPLACE:"@@redux/REPLACE"+l(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+l()}};function p(e){if("object"!==typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function d(e,t,r){var n;if("function"===typeof t&&"function"===typeof r||"function"===typeof r&&"function"===typeof arguments[3])throw new Error(a(0));if("function"===typeof t&&"undefined"===typeof r&&(r=t,t=void 0),"undefined"!==typeof r){if("function"!==typeof r)throw new Error(a(1));return r(d)(e,t)}if("function"!==typeof e)throw new Error(a(2));var o=e,u=t,c=[],f=c,i=!1;function l(){f===c&&(f=c.slice())}function b(){if(i)throw new Error(a(3));return u}function v(e){if("function"!==typeof e)throw new Error(a(4));if(i)throw new Error(a(5));var t=!0;return l(),f.push(e),function(){if(t){if(i)throw new Error(a(6));t=!1,l();var r=f.indexOf(e);f.splice(r,1),c=null}}}function m(e){if(!p(e))throw new Error(a(7));if("undefined"===typeof e.type)throw new Error(a(8));if(i)throw new Error(a(9));try{i=!0,u=o(u,e)}finally{i=!1}for(var t=c=f,r=0;r<t.length;r++){(0,t[r])()}return e}function S(e){if("function"!==typeof e)throw new Error(a(10));o=e,m({type:y.REPLACE})}function w(){var e,t=v;return(e={subscribe:function(e){if("object"!==typeof e||null===e)throw new Error(a(11));function r(){e.next&&e.next(b())}return r(),{unsubscribe:t(r)}}})[s]=function(){return this},e}return m({type:y.INIT}),(n={dispatch:m,subscribe:v,getState:b,replaceReducer:S})[s]=w,n}var b;function v(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}var m=(null===(b=r.g.window)||void 0===b?void 0:b.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)||v,S=function(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];0,"function"===typeof e[o]&&(r[o]=e[o])}var u,c=Object.keys(r);try{!function(e){Object.keys(e).forEach((function(t){var r=e[t];if("undefined"===typeof r(void 0,{type:y.INIT}))throw new Error(a(12));if("undefined"===typeof r(void 0,{type:y.PROBE_UNKNOWN_ACTION()}))throw new Error(a(13))}))}(r)}catch(f){u=f}return function(e,t){if(void 0===e&&(e={}),u)throw u;for(var n=!1,o={},f=0;f<c.length;f++){var i=c[f],s=r[i],l=e[i],y=s(l,t);if("undefined"===typeof y){t&&t.type;throw new Error(a(14))}o[i]=y,n=n||y!==l}return(n=n||c.length!==Object.keys(e).length)?o:e}}({menu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.Z:return f({},e,{menu:t.payload});case u.Vx:return f({},e,{composeData:t.payload});default:return e}}}),w=d(S,m());function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){h(e,t,r[t])}))}return e}var E=function(e){var t=e.Component,r=e.pageProps;return(0,n.jsx)(o.zt,{store:w,children:(0,n.jsx)(t,g({},r))})}},2146:function(e,t,r){"use strict";r.d(t,{Vx:function(){return o},Z:function(){return n}});var n="CHANGE_TAB",o="CHANGE_COMPOSE_DATA"},894:function(){},6774:function(){},9921:function(e,t){"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,u=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,f=r?Symbol.for("react.profiler"):60114,i=r?Symbol.for("react.provider"):60109,a=r?Symbol.for("react.context"):60110,s=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,y=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,d=r?Symbol.for("react.suspense_list"):60120,b=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116,m=r?Symbol.for("react.block"):60121,S=r?Symbol.for("react.fundamental"):60117,w=r?Symbol.for("react.responder"):60118,h=r?Symbol.for("react.scope"):60119;function g(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case s:case l:case u:case f:case c:case p:return e;default:switch(e=e&&e.$$typeof){case a:case y:case v:case b:case i:return e;default:return t}}case o:return t}}}function E(e){return g(e)===l}t.AsyncMode=s,t.ConcurrentMode=l,t.ContextConsumer=a,t.ContextProvider=i,t.Element=n,t.ForwardRef=y,t.Fragment=u,t.Lazy=v,t.Memo=b,t.Portal=o,t.Profiler=f,t.StrictMode=c,t.Suspense=p,t.isAsyncMode=function(e){return E(e)||g(e)===s},t.isConcurrentMode=E,t.isContextConsumer=function(e){return g(e)===a},t.isContextProvider=function(e){return g(e)===i},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return g(e)===y},t.isFragment=function(e){return g(e)===u},t.isLazy=function(e){return g(e)===v},t.isMemo=function(e){return g(e)===b},t.isPortal=function(e){return g(e)===o},t.isProfiler=function(e){return g(e)===f},t.isStrictMode=function(e){return g(e)===c},t.isSuspense=function(e){return g(e)===p},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===u||e===l||e===f||e===c||e===p||e===d||"object"===typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===b||e.$$typeof===i||e.$$typeof===a||e.$$typeof===y||e.$$typeof===S||e.$$typeof===w||e.$$typeof===h||e.$$typeof===m)},t.typeOf=g},9864:function(e,t,r){"use strict";e.exports=r(9921)},9473:function(e,t,r){"use strict";r.d(t,{zt:function(){return w},I0:function(){return O},v9:function(){return d}});var n=r(1688),o=r(2798),u=r(3935);let c=function(e){e()};const f=()=>c;var i=r(7294);const a=i.createContext(null);function s(){return(0,i.useContext)(a)}let l=()=>{throw new Error("uSES not initialized!")};const y=(e,t)=>e===t;function p(e=a){const t=e===a?s:()=>(0,i.useContext)(e);return function(e,r=y){const{store:n,subscription:o,getServerState:u}=t(),c=l(o.addNestedSub,n.getState,u||n.getState,e,r);return(0,i.useDebugValue)(c),c}}const d=p();r(8679),r(2973);const b={notify(){},get:()=>[]};function v(e,t){let r,n=b;function o(){c.onStateChange&&c.onStateChange()}function u(){r||(r=t?t.addNestedSub(o):e.subscribe(o),n=function(){const e=f();let t=null,r=null;return{clear(){t=null,r=null},notify(){e((()=>{let e=t;for(;e;)e.callback(),e=e.next}))},get(){let e=[],r=t;for(;r;)e.push(r),r=r.next;return e},subscribe(e){let n=!0,o=r={callback:e,next:null,prev:r};return o.prev?o.prev.next=o:t=o,function(){n&&null!==t&&(n=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())}const c={addNestedSub:function(e){return u(),n.subscribe(e)},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:o,isSubscribed:function(){return Boolean(r)},trySubscribe:u,tryUnsubscribe:function(){r&&(r(),r=void 0,n.clear(),n=b)},getListeners:()=>n};return c}const m=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement)?i.useLayoutEffect:i.useEffect;let S=null;var w=function({store:e,context:t,children:r,serverState:n}){const o=(0,i.useMemo)((()=>{const t=v(e);return{store:e,subscription:t,getServerState:n?()=>n:void 0}}),[e,n]),u=(0,i.useMemo)((()=>e.getState()),[e]);m((()=>{const{subscription:t}=o;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),u!==e.getState()&&t.notifyNestedSubs(),()=>{t.tryUnsubscribe(),t.onStateChange=void 0}}),[o,u]);const c=t||a;return i.createElement(c.Provider,{value:o},r)};function h(e=a){const t=e===a?s:()=>(0,i.useContext)(e);return function(){const{store:e}=t();return e}}const g=h();function E(e=a){const t=e===a?g:h(e);return function(){return t().dispatch}}const O=E();var x,P;x=o.useSyncExternalStoreWithSelector,l=x,(e=>{S=e})(n.useSyncExternalStore),P=u.unstable_batchedUpdates,c=P},8359:function(e,t){"use strict";var r,n=Symbol.for("react.element"),o=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),a=Symbol.for("react.context"),s=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),v=Symbol.for("react.offscreen");function m(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case u:case f:case c:case y:case p:return e;default:switch(e=e&&e.$$typeof){case s:case a:case l:case b:case d:case i:return e;default:return t}}case o:return t}}}r=Symbol.for("react.module.reference")},2973:function(e,t,r){"use strict";r(8359)},3250:function(e,t,r){"use strict";var n=r(7294);var o="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},u=n.useState,c=n.useEffect,f=n.useLayoutEffect,i=n.useDebugValue;function a(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!o(e,r)}catch(n){return!0}}var s="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=u({inst:{value:r,getSnapshot:t}}),o=n[0].inst,s=n[1];return f((function(){o.value=r,o.getSnapshot=t,a(o)&&s({inst:o})}),[e,r,t]),c((function(){return a(o)&&s({inst:o}),e((function(){a(o)&&s({inst:o})}))}),[e]),i(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:s},6742:function(e,t,r){"use strict";var n=r(7294),o=r(1688);var u="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},c=o.useSyncExternalStore,f=n.useRef,i=n.useEffect,a=n.useMemo,s=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var l=f(null);if(null===l.current){var y={hasValue:!1,value:null};l.current=y}else y=l.current;l=a((function(){function e(e){if(!i){if(i=!0,c=e,e=n(e),void 0!==o&&y.hasValue){var t=y.value;if(o(t,e))return f=t}return f=e}if(t=f,u(c,e))return t;var r=n(e);return void 0!==o&&o(t,r)?t:(c=e,f=r)}var c,f,i=!1,a=void 0===r?null:r;return[function(){return e(t())},null===a?void 0:function(){return e(a())}]}),[t,r,n,o]);var p=c(e,l[0],l[1]);return i((function(){y.hasValue=!0,y.value=p}),[p]),s(p),p}},1688:function(e,t,r){"use strict";e.exports=r(3250)},2798:function(e,t,r){"use strict";e.exports=r(6742)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6840),t(880)}));var r=e.O();_N_E=r}]);