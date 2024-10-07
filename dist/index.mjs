import r from"react";var e=function(){return e=Object.assign||function(r){for(var e,n=1,t=arguments.length;n<t;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r},e.apply(this,arguments)};function n(r,e){var n={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.indexOf(t)<0&&(n[t]=r[t]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(r);o<t.length;o++)e.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(r,t[o])&&(n[t[o]]=r[t[o]])}return n}function t(r,e,n){if(n||2===arguments.length)for(var t,o=0,a=e.length;o<a;o++)!t&&o in e||(t||(t=Array.prototype.slice.call(e,0,o)),t[o]=e[o]);return r.concat(t||Array.prototype.slice.call(e))}"function"==typeof SuppressedError&&SuppressedError;var o,a={exports:{}},i={};var s,l,c={};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function u(){return s||(s=1,"production"!==process.env.NODE_ENV&&function(){var e=r,n=Symbol.for("react.element"),t=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),h=Symbol.for("react.offscreen"),v=Symbol.iterator;var y=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function g(r){for(var e=arguments.length,n=new Array(e>1?e-1:0),t=1;t<e;t++)n[t-1]=arguments[t];!function(r,e,n){var t=y.ReactDebugCurrentFrame,o=t.getStackAddendum();""!==o&&(e+="%s",n=n.concat([o]));var a=n.map((function(r){return String(r)}));a.unshift("Warning: "+e),Function.prototype.apply.call(console[r],console,a)}("error",r,n)}var x;function b(r){return r.displayName||"Context"}function w(r){if(null==r)return null;if("number"==typeof r.tag&&g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof r)return r.displayName||r.name||null;if("string"==typeof r)return r;switch(r){case o:return"Fragment";case t:return"Portal";case i:return"Profiler";case a:return"StrictMode";case p:return"Suspense";case d:return"SuspenseList"}if("object"==typeof r)switch(r.$$typeof){case l:return b(r)+".Consumer";case s:return b(r._context)+".Provider";case u:return function(r,e,n){var t=r.displayName;if(t)return t;var o=e.displayName||e.name||"";return""!==o?n+"("+o+")":n}(r,r.render,"ForwardRef");case f:var e=r.displayName||null;return null!==e?e:w(r.type)||"Memo";case m:var n=r,c=n._payload,h=n._init;try{return w(h(c))}catch(r){return null}}return null}x=Symbol.for("react.module.reference");var k,j,N,S,O,_,C,E=Object.assign,R=0;function T(){}T.__reactDisabledLog=!0;var P,D=y.ReactCurrentDispatcher;function F(r,e,n){if(void 0===P)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);P=t&&t[1]||""}return"\n"+P+r}var B,$=!1,z="function"==typeof WeakMap?WeakMap:Map;function I(r,e){if(!r||$)return"";var n,t=B.get(r);if(void 0!==t)return t;$=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=D.current,D.current=null,function(){if(0===R){k=console.log,j=console.info,N=console.warn,S=console.error,O=console.group,_=console.groupCollapsed,C=console.groupEnd;var r={configurable:!0,enumerable:!0,value:T,writable:!0};Object.defineProperties(console,{info:r,log:r,warn:r,error:r,group:r,groupCollapsed:r,groupEnd:r})}R++}();try{if(e){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(i,[])}catch(r){n=r}Reflect.construct(r,[],i)}else{try{i.call()}catch(r){n=r}r.call(i.prototype)}}else{try{throw Error()}catch(r){n=r}r()}}catch(e){if(e&&n&&"string"==typeof e.stack){for(var s=e.stack.split("\n"),l=n.stack.split("\n"),c=s.length-1,u=l.length-1;c>=1&&u>=0&&s[c]!==l[u];)u--;for(;c>=1&&u>=0;c--,u--)if(s[c]!==l[u]){if(1!==c||1!==u)do{if(c--,--u<0||s[c]!==l[u]){var p="\n"+s[c].replace(" at new "," at ");return r.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",r.displayName)),"function"==typeof r&&B.set(r,p),p}}while(c>=1&&u>=0);break}}}finally{$=!1,D.current=o,function(){if(0==--R){var r={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:E({},r,{value:k}),info:E({},r,{value:j}),warn:E({},r,{value:N}),error:E({},r,{value:S}),group:E({},r,{value:O}),groupCollapsed:E({},r,{value:_}),groupEnd:E({},r,{value:C})})}R<0&&g("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var d=r?r.displayName||r.name:"",f=d?F(d):"";return"function"==typeof r&&B.set(r,f),f}function L(r,e,n){if(null==r)return"";if("function"==typeof r)return I(r,!(!(t=r.prototype)||!t.isReactComponent));var t;if("string"==typeof r)return F(r);switch(r){case p:return F("Suspense");case d:return F("SuspenseList")}if("object"==typeof r)switch(r.$$typeof){case u:return I(r.render,!1);case f:return L(r.type,e,n);case m:var o=r,a=o._payload,i=o._init;try{return L(i(a),e,n)}catch(r){}}return""}B=new z;var A=Object.prototype.hasOwnProperty,U={},W=y.ReactDebugCurrentFrame;function Y(r){if(r){var e=r._owner,n=L(r.type,r._source,e?e.type:null);W.setExtraStackFrame(n)}else W.setExtraStackFrame(null)}var M=Array.isArray;function K(r){return M(r)}function H(r){return""+r}function q(r){if(function(r){try{return H(r),!1}catch(r){return!0}}(r))return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(r){return"function"==typeof Symbol&&Symbol.toStringTag&&r[Symbol.toStringTag]||r.constructor.name||"Object"}(r)),H(r)}var V,Z,G,J=y.ReactCurrentOwner,X={key:!0,ref:!0,__self:!0,__source:!0};G={};function Q(r,e,t,o,a){var i,s={},l=null,c=null;for(i in void 0!==t&&(q(t),l=""+t),function(r){if(A.call(r,"key")){var e=Object.getOwnPropertyDescriptor(r,"key").get;if(e&&e.isReactWarning)return!1}return void 0!==r.key}(e)&&(q(e.key),l=""+e.key),function(r){if(A.call(r,"ref")){var e=Object.getOwnPropertyDescriptor(r,"ref").get;if(e&&e.isReactWarning)return!1}return void 0!==r.ref}(e)&&(c=e.ref,function(r,e){if("string"==typeof r.ref&&J.current&&e&&J.current.stateNode!==e){var n=w(J.current.type);G[n]||(g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',w(J.current.type),r.ref),G[n]=!0)}}(e,a)),e)A.call(e,i)&&!X.hasOwnProperty(i)&&(s[i]=e[i]);if(r&&r.defaultProps){var u=r.defaultProps;for(i in u)void 0===s[i]&&(s[i]=u[i])}if(l||c){var p="function"==typeof r?r.displayName||r.name||"Unknown":r;l&&function(r,e){var n=function(){V||(V=!0,g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",e))};n.isReactWarning=!0,Object.defineProperty(r,"key",{get:n,configurable:!0})}(s,p),c&&function(r,e){var n=function(){Z||(Z=!0,g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",e))};n.isReactWarning=!0,Object.defineProperty(r,"ref",{get:n,configurable:!0})}(s,p)}return function(r,e,t,o,a,i,s){var l={$$typeof:n,type:r,key:e,ref:t,props:s,_owner:i,_store:{}};return Object.defineProperty(l._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(l,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(l,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(l.props),Object.freeze(l)),l}(r,l,c,a,o,J.current,s)}var rr,er=y.ReactCurrentOwner,nr=y.ReactDebugCurrentFrame;function tr(r){if(r){var e=r._owner,n=L(r.type,r._source,e?e.type:null);nr.setExtraStackFrame(n)}else nr.setExtraStackFrame(null)}function or(r){return"object"==typeof r&&null!==r&&r.$$typeof===n}function ar(){if(er.current){var r=w(er.current.type);if(r)return"\n\nCheck the render method of `"+r+"`."}return""}rr=!1;var ir={};function sr(r,e){if(r._store&&!r._store.validated&&null==r.key){r._store.validated=!0;var n=function(r){var e=ar();if(!e){var n="string"==typeof r?r:r.displayName||r.name;n&&(e="\n\nCheck the top-level render call using <"+n+">.")}return e}(e);if(!ir[n]){ir[n]=!0;var t="";r&&r._owner&&r._owner!==er.current&&(t=" It was passed a child from "+w(r._owner.type)+"."),tr(r),g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',n,t),tr(null)}}}function lr(r,e){if("object"==typeof r)if(K(r))for(var n=0;n<r.length;n++){var t=r[n];or(t)&&sr(t,e)}else if(or(r))r._store&&(r._store.validated=!0);else if(r){var o=function(r){if(null===r||"object"!=typeof r)return null;var e=v&&r[v]||r["@@iterator"];return"function"==typeof e?e:null}(r);if("function"==typeof o&&o!==r.entries)for(var a,i=o.call(r);!(a=i.next()).done;)or(a.value)&&sr(a.value,e)}}function cr(r){var e,n=r.type;if(null!=n&&"string"!=typeof n){if("function"==typeof n)e=n.propTypes;else{if("object"!=typeof n||n.$$typeof!==u&&n.$$typeof!==f)return;e=n.propTypes}if(e){var t=w(n);!function(r,e,n,t,o){var a=Function.call.bind(A);for(var i in r)if(a(r,i)){var s=void 0;try{if("function"!=typeof r[i]){var l=Error((t||"React class")+": "+n+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof r[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw l.name="Invariant Violation",l}s=r[i](e,i,t,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(r){s=r}!s||s instanceof Error||(Y(o),g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",t||"React class",n,i,typeof s),Y(null)),s instanceof Error&&!(s.message in U)&&(U[s.message]=!0,Y(o),g("Failed %s type: %s",n,s.message),Y(null))}}(e,r.props,"prop",t,r)}else if(void 0!==n.PropTypes&&!rr){rr=!0,g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",w(n)||"Unknown")}"function"!=typeof n.getDefaultProps||n.getDefaultProps.isReactClassApproved||g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}var ur={};function pr(r,e,t,c,v,y){var b=function(r){return"string"==typeof r||"function"==typeof r||r===o||r===i||r===a||r===p||r===d||r===h||"object"==typeof r&&null!==r&&(r.$$typeof===m||r.$$typeof===f||r.$$typeof===s||r.$$typeof===l||r.$$typeof===u||r.$$typeof===x||void 0!==r.getModuleId)}(r);if(!b){var k="";(void 0===r||"object"==typeof r&&null!==r&&0===Object.keys(r).length)&&(k+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var j;k+=ar(),null===r?j="null":K(r)?j="array":void 0!==r&&r.$$typeof===n?(j="<"+(w(r.type)||"Unknown")+" />",k=" Did you accidentally export a JSX literal instead of a component?"):j=typeof r,g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",j,k)}var N=Q(r,e,t,v,y);if(null==N)return N;if(b){var S=e.children;if(void 0!==S)if(c)if(K(S)){for(var O=0;O<S.length;O++)lr(S[O],r);Object.freeze&&Object.freeze(S)}else g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else lr(S,r)}if(A.call(e,"key")){var _=w(r),C=Object.keys(e).filter((function(r){return"key"!==r})),E=C.length>0?"{key: someKey, "+C.join(": ..., ")+": ...}":"{key: someKey}";if(!ur[_+E])g('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',E,_,C.length>0?"{"+C.join(": ..., ")+": ...}":"{}",_),ur[_+E]=!0}return r===o?function(r){for(var e=Object.keys(r.props),n=0;n<e.length;n++){var t=e[n];if("children"!==t&&"key"!==t){tr(r),g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",t),tr(null);break}}null!==r.ref&&(tr(r),g("Invalid attribute `ref` supplied to `React.Fragment`."),tr(null))}(N):cr(N),N}var dr=function(r,e,n){return pr(r,e,n,!1)},fr=function(r,e,n){return pr(r,e,n,!0)};c.Fragment=o,c.jsx=dr,c.jsxs=fr}()),c}var p=(l||(l=1,"production"===process.env.NODE_ENV?a.exports=function(){if(o)return i;o=1;var e=r,n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(r,e,t){var o,i={},c=null,u=null;for(o in void 0!==t&&(c=""+t),void 0!==e.key&&(c=""+e.key),void 0!==e.ref&&(u=e.ref),e)a.call(e,o)&&!l.hasOwnProperty(o)&&(i[o]=e[o]);if(r&&r.defaultProps)for(o in e=r.defaultProps)void 0===i[o]&&(i[o]=e[o]);return{$$typeof:n,type:r,key:c,ref:u,props:i,_owner:s.current}}return i.Fragment=t,i.jsx=c,i.jsxs=c,i}():a.exports=u()),a.exports);function d(r,e){void 0===e&&(e={});var n=e.insertAt;if(r&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&t.firstChild?t.insertBefore(o,t.firstChild):t.appendChild(o),o.styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r))}}d(".custom-multi-select {\r\n  position: relative;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  background: #fff;\r\n}\r\n.select-box {\r\n  padding: 3px 6px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  flex-grow: 3;\r\n  gap: 4px;\r\n  border-radius: 4px;\r\n  transition: background 0.3s;\r\n  position: relative;\r\n  min-height: 26px;\r\n}\r\n.input-container {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 4px;\r\n  width: 92%;\r\n}\r\n\r\n.select-box:hover,\r\n.select-box:focus {\r\n  background: #f9f9f9;\r\n}\r\n.dropdown {\r\n  position: absolute;\r\n  /* top: -115%; */\r\n  left: 0;\r\n  width: 100%;\r\n  border: 1px solid #ccc;\r\n  background-color: #fff;\r\n  z-index: 1000;\r\n  overflow-y: auto;\r\n  outline: none;\r\n  border-radius: 4px;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\r\n  transition: opacity 0.3s ease, transform 0.3s ease;\r\n}\r\n.option-list {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.option-item {\r\n  padding: 8px;\r\n  cursor: pointer;\r\n  transition: background 0.3s;\r\n}\r\n.option-item:hover,\r\n.option-item.focused {\r\n  background-color: #f0f0f0;\r\n}\r\n.selected-values {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 4px;\r\n}\r\n.selected-option {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 5px;\r\n  align-items: center;\r\n  background-color: #e0e0e0;\r\n  border-radius: 4px;\r\n  padding: 3px 6px;\r\n  margin-right: 4px;\r\n  font-size: 12px;\r\n}\r\n.remove-individual {\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n  position: relative;\r\n  top: -2px;\r\n}\r\n.remove-individual:hover {\r\n  color: red;\r\n}\r\n.clear-all {\r\n  width: 8%;\r\n  cursor: pointer;\r\n  font-size: 22px;\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.clear-all:hover {\r\n  color: red;\r\n}\r\n\r\n.no-options {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.custom-multi-select.disabled {\r\n  opacity: 0.5; /* Make it look disabled */\r\n  pointer-events: none; /* Prevent any interactions */\r\n}\r\n");var f=function(r){var t=r.isHidden,o=r.isDisabled,a=r.value,i=r.onChange,s=r.onKeyDown,l=r.placeholder,c=r.inputref,u=n(r,["isHidden","isDisabled","value","onChange","onKeyDown","placeholder","inputref"]),d=function(r){return{label:"custom-input",color:"inherit",flex:1,background:"transparent",opacity:r?0:1,width:"100%",border:"none",outline:"none",padding:"8px",borderRadius:"4px",height:"8px"}}(t);return p.jsx("input",e({type:"text",style:d,placeholder:l,disabled:o,value:a,onChange:i,onKeyDown:s,ref:c},u))};var m=function(o){var a=o.options,i=o.onChange,s=o.value,l=o.placeholder,c=void 0===l?"Select Option":l,u=o.width,d=void 0===u?"200px":u,m=o.visibleOptions,h=void 0===m?7:m,v=o.ismulti,y=void 0!==v&&v,g=o.isDisabled,x=void 0!==g&&g,b=o.showPersonaForSelected,w=void 0!==b&&b,k=o.menuPlacement,j=void 0===k?"auto":k;n(o,["options","onChange","value","placeholder","width","visibleOptions","ismulti","isDisabled","showPersonaForSelected","menuPlacement"]);var N=r.useState([]),S=N[0],O=N[1],_=r.useState(""),C=_[0],E=_[1],R=r.useState(!1),T=R[0],P=R[1],D=r.useState({}),F=D[0],B=D[1],$=r.useState(-1),z=$[0],I=$[1],L=p.jsx("svg",{height:"15",width:"15",viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",style:{cursor:"pointer"},children:p.jsx("path",{d:"M10 9.586l4.95-4.95c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41L11.414 10l4.95 4.95c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0L10 11.414l-4.95 4.95c-.39.39-1.02.39-1.41 0s-.39-1.02 0-1.41L8.586 10 3.636 5.05c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0L10 8.586z",fill:"#63625e",stroke:"#63625e",strokeWidth:"0.8"})});r.useEffect((function(){if(y)Array.isArray(s)&&function(r){return null!=r&&null!=r&&0!==r.length}(s)?O(t([],s,!0)):O([]);else if("object"==typeof s&&s){var r=[];r.push(s),O(t([],r,!0))}else O([]);I(-1)}),[s,y]);var A=function(r){i(y?r:r[0])},U=r.useRef(null),W=r.useRef(null),Y=function(){P((function(r){var e=!r;return e&&(U.current.focus(),setTimeout((function(){W.current&&W.current.focus()}),0)),e}))},M=function(r){if(y){var e=S.some((function(e){return e.value===r.value}))?S.filter((function(e){return e.value!==r.value})):t(t([],S,!0),[r],!1);O(e),A(e)}else O([r]),A([r]),P(!1);E("")},K=function(r){P(!0),U.current.focus(),E(r.target.value)},H=function(r){if("Backspace"===r.key){if(C.length>0)return void K(r);if(!y)return;var e=S.slice(0,-1);O(e),A(e)}"Enter"===r.key&&(y?V.length>0&&M(V[0]):Z.length>0&&M(Z[0]))},q=function(r){var e=null==S?void 0:S.filter((function(e){return e.value!==r.value}));O(e),A(e)},V=y?a.filter((function(r){return r.label.toLowerCase().includes(C.toLowerCase())})).filter((function(r){return!(null==S?void 0:S.some((function(e){return e.value===r.value})))})):[],Z=a.filter((function(r){return r.label.toLowerCase().includes(C.toLowerCase())})),G=function(r){if(y){if("ArrowDown"===r.key)r.preventDefault(),I((function(r){return(r+1)%V.length}));else if("ArrowUp"===r.key)r.preventDefault(),I((function(r){return(r-1+V.length)%V.length}));else if("Enter"===r.key){r.preventDefault(),(e=V[z])&&M(e)}}else if("ArrowDown"===r.key)r.preventDefault(),I((function(r){return(r+1)%Z.length}));else if("ArrowUp"===r.key)r.preventDefault(),I((function(r){return(r-1+Z.length)%Z.length}));else if("Enter"===r.key){var e;r.preventDefault(),(e=Z[z])&&M(e)}},J="string"==typeof h&&"all"==h?"auto":"".concat(35*h,"px"),X=function(r){U.current&&!U.current.contains(r.target)&&P(!1)};return r.useEffect((function(){return document.addEventListener("mousedown",X),function(){document.removeEventListener("mousedown",X)}}),[]),r.useEffect((function(){if(T&&U.current){var r=U.current.getBoundingClientRect(),e=r.top,n=window.innerHeight-r.bottom;"auto"===j?n<r.height&&e>=r.height?B({bottom:"115%",top:"auto"}):B({top:"115%",bottom:"auto"}):B({top:"top"===j?"auto":"115%",bottom:"top"===j?"115%":"auto"})}}),[T,j]),p.jsxs("div",{className:"custom-multi-select ".concat(x?"disabled":""),ref:U,style:{width:d},onKeyDown:G,children:[y?p.jsxs("div",{className:"select-box",onClick:x?void 0:Y,role:"button","aria-expanded":T,"aria-haspopup":"listbox",children:[p.jsx("div",{className:"input-container",children:T?p.jsx(p.Fragment,{children:p.jsxs("div",{className:"selected-values",children:[S.length>0&&S.map((function(r){return p.jsxs("span",{className:"selected-option",children:[w&&r.persona?r.persona:r.label,p.jsx("span",{className:"remove-individual",onClick:function(e){e.stopPropagation(),q(r)},"aria-label":"Remove ".concat(r.label),children:"×"})]},r.value)})),p.jsx(f,{isHidden:!T,isDisabled:x,value:C,inputref:W,onChange:K,onClick:function(r){return r.stopPropagation()},onKeyDown:function(r){return H(r)},placeholder:0===S.length?c:""})]})}):p.jsx("div",{className:"selected-values",children:0===S.length?c:S.map((function(r){return p.jsxs("span",{className:"selected-option",children:[w&&r.persona?r.persona:r.label,p.jsx("span",{className:"remove-individual",onClick:function(e){e.stopPropagation(),q(r)},"aria-label":"Remove ".concat(r.label),children:"×"})]},r.value)}))})}),p.jsxs("div",{className:"clear-all",style:{right:S.length?"8px":"0px"},children:[S.length>0&&p.jsx("span",{onClick:x?void 0:function(){O([]),A([])},"aria-label":"Clear all selected options",children:L}),p.jsx("span",{style:{position:"relative",top:"1px"},children:p.jsx("svg",{height:"20",width:"20",viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",className:"css-tj5bde-Svg",children:p.jsx("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z",fill:"#63625e"})})})]})]}):p.jsx(p.Fragment,{children:p.jsxs("div",{className:"select-box",onClick:x?void 0:Y,role:"button","aria-expanded":T,"aria-haspopup":"listbox",children:[p.jsx("div",{className:"input-container",children:T?p.jsx(p.Fragment,{children:p.jsx("div",{children:p.jsx(f,{isHidden:!T,isDisabled:x,value:C,inputref:W,onChange:K,onClick:function(r){return r.stopPropagation()},onKeyDown:function(r){return H(r)},placeholder:0===S.length?c:S[0].label})})}):p.jsx("div",{children:0===S.length?c:S.map((function(r){return p.jsx("span",{className:"",children:w&&r.persona?r.persona:r.label},r.value)}))})}),p.jsx("div",{className:"clear-all",style:{top:"50%",right:"0px"},children:p.jsx("span",{children:p.jsx("svg",{height:"20",width:"20",viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",className:"css-tj5bde-Svg",children:p.jsx("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"})})})})]})}),T&&(y?p.jsx(p.Fragment,{children:p.jsx("div",{className:"dropdown",onKeyDown:G,tabIndex:0,style:F,role:"listbox",children:0==V.length?p.jsx("div",{children:p.jsx("div",{className:"option-item no-options",children:"No Options "})}):p.jsx("ul",{className:"option-list",children:V.map((function(r,e){return p.jsx("li",{className:"option-item ".concat(e===z?"focused":""),onClick:function(){return M(r)},role:"option","aria-selected":S.some((function(e){return e.value===r.value})),"aria-label":r.label,children:r.persona?r.persona:r.label},r.value)}))})})}):p.jsx(p.Fragment,{children:p.jsx("div",{className:"dropdown",onKeyDown:G,tabIndex:0,style:e(e({},F),{maxHeight:J}),role:"listbox",children:0==Z.length?p.jsx("div",{children:p.jsx("div",{className:"option-item no-options",children:"No Options "})}):p.jsx("ul",{className:"option-list",children:Z.map((function(r,e){return p.jsx("li",{className:"option-item ".concat(e===z?"focused":""),onClick:function(){return M(r)},role:"option","aria-selected":S.some((function(e){return e.value===r.value})),"aria-label":r.label,children:r.persona?r.persona:r.label},r.value)}))})})}))]})};d('.dialog {\r\n  background: rgba(0, 0, 0, 0.4);\r\n  display: grid;\r\n  position: fixed;\r\n  z-index: 1060;\r\n  inset: 0;\r\n  grid-template-areas:\r\n    "top-start top top-end"\r\n    "center-start center center-end"\r\n    "bottom-start bottom-center bottom-end";\r\n  grid-template-rows: minmax(min-content, auto) minmax(min-content, auto) minmax(\r\n      min-content,\r\n      auto\r\n    );\r\n  height: 100%;\r\n  padding: 0.625em;\r\n  overflow-x: hidden;\r\n  transition: background-color 0.1s;\r\n  grid-template-columns: auto minmax(0, 1fr) auto;\r\n  position: absolute;\r\n}\r\n.dialogSurface {\r\n  border-radius: 0px !important;\r\n\r\n  width: 330px;\r\n  color: var(--lightThemeTextColorBlack);\r\n  background: var(--lightThemeBGcolorWhite);\r\n  display: grid;\r\n  grid-column: 2;\r\n  grid-row: 2;\r\n  place-self: center center;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  grid-template-columns: minmax(0, 100%);\r\n  max-width: 100%;\r\n  padding: 10px 1px;\r\n  border: none;\r\n  min-height: 220px;\r\n}\r\n\r\n.dialogBody {\r\n  display: flex !important;\r\n  justify-content: center;\r\n  border-radius: 0px !important;\r\n  background: var(--lightThemeBGcolorWhite) !important;\r\n  flex-direction: column !important;\r\n  align-items: center !important;\r\n  gap: 15px;\r\n  padding: 10px;\r\n}\r\n\r\n.modal {\r\n  text-align: center;\r\n}\r\n\r\n.error-icon {\r\n  position: relative;\r\n  width: 100px;\r\n  height: 100px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.error-circle {\r\n  width: 75%;\r\n  height: 75%;\r\n  border-radius: 50%;\r\n  background-color: transparent;\r\n  border: 4px solid #f27474;\r\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);\r\n  position: absolute;\r\n  top: 10%;\r\n  left: 10%;\r\n  transform: translate(-50%, -50%);\r\n  animation: pulse 1s ease-in-out forwards;\r\n}\r\n\r\n.error-cross {\r\n  position: absolute;\r\n  top: 58%;\r\n  left: 58%;\r\n  width: 50%;\r\n  height: 50%;\r\n  transform: translate(-50%, -50%);\r\n  animation: bounce 0.4s ease-in-out forwards;\r\n  animation-delay: 0.5s;\r\n}\r\n\r\n.line {\r\n  position: absolute;\r\n  width: 4px;\r\n  height: 46px;\r\n  background-color: #f27474;\r\n  border-radius: 5px;\r\n  top: 40%;\r\n  left: 36%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.line-1 {\r\n  transform: translate(-50%, -50%) rotate(45deg);\r\n}\r\n\r\n.line-2 {\r\n  transform: translate(-50%, -50%) rotate(-45deg);\r\n}\r\n\r\n.dialogTitle {\r\n  font-size: 18px !important;\r\n  text-align: center !important;\r\n  font-weight: 400;\r\n  color: var(--lightThemeTextColorBlack) !important;\r\n  font-family: "Segoe UI WestEuropean", "Segoe UI", -apple-system,\r\n    BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;\r\n}\r\n\r\n.checkmark-container {\r\n  width: 80px;\r\n  height: 80px;\r\n  position: relative;\r\n}\r\n\r\n.checkmark-circle {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n  border: 4px solid #4caf50;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  box-sizing: border-box;\r\n  animation: circle-fill 0.08s ease-in-out forwards;\r\n}\r\n\r\n.checkmark-icon {\r\n  position: relative;\r\n  width: 80px;\r\n  height: 80px;\r\n}\r\n\r\n.checkmark-line {\r\n  width: 0;\r\n  height: 4px;\r\n  background-color: #4caf50;\r\n  border-radius: 2px;\r\n  position: absolute;\r\n  transform-origin: left center;\r\n}\r\n\r\n.checkmark-line-tip {\r\n  top: 30px;\r\n  left: 20px;\r\n  transform: rotate(45deg);\r\n  animation: line-tip 0.15s ease-in-out 0.15s forwards;\r\n}\r\n\r\n.checkmark-line-long {\r\n  top: 35px;\r\n  left: 10px;\r\n  transform: rotate(-45deg);\r\n  animation: line-long 0.18s ease-in-out 0.18s forwards;\r\n}\r\n.overlay {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.warning-icon {\r\n  display: inline-block;\r\n  width: 80px;\r\n  height: 80px;\r\n  border: 2px solid #f39c12;\r\n  border-radius: 50%;\r\n  position: relative;\r\n  animation: pulse 1.5s infinite, moveZ 2s infinite;\r\n}\r\n\r\n.exclamation {\r\n  font-size: 60px;\r\n  color: #f39c12;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  animation: swing 0.5s ease-out forwards;\r\n}\r\n.blue-icon {\r\n  border: 2px solid #0174e7;\r\n}\r\n.blue-color-mark {\r\n  color: #0174e7;\r\n}\r\n\r\n.message {\r\n  text-align: center;\r\n  font-size: 18px;\r\n  color: var(--lightThemeTextColorBlack) !important;\r\n  font-weight: 400;\r\n  padding: 15px 15px 10px 15px;\r\n  font-size: "Segoe UI WestEuropean", "Segoe UI", -apple-system,\r\n    BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;\r\n  margin: 0;\r\n  padding: 1em 1.6em 0.3em;\r\n  overflow: auto;\r\n  font-size: 1.125em;\r\n  line-height: normal;\r\n  text-align: center;\r\n  word-wrap: break-word;\r\n  word-break: break-word;\r\n}\r\n\r\n.buttons {\r\n  gap: 15px;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.yes-button {\r\n  border: none;\r\n  color: var(--lightdarkColor) !important;\r\n  font-size: 16px;\r\n  background-color: var(--ActiveTabBGColor) !important;\r\n  min-width: 90px;\r\n  padding: 9px;\r\n  max-width: 10px;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n}\r\n\r\n.no-button {\r\n  border: 1px solid #8a8886;\r\n  color: rgb(7, 7, 7);\r\n  font-size: 16px;\r\n  background-color: #fff !important;\r\n  min-width: 90px;\r\n  padding: 9px;\r\n  max-width: 10px;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n}\r\n\r\n.sweetalert-question-icon {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100px;\r\n  height: 100px;\r\n  position: relative;\r\n}\r\n\r\n.circle {\r\n  width: 80px;\r\n  height: 80px;\r\n\r\n  border: 2px solid #87adbd;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n\r\n  animation: bounceOnce 1s ease-in-out forwards;\r\n}\r\n\r\n.question-mark {\r\n  font-size: 50px;\r\n  font-weight: bold;\r\n  color: #87adbd;\r\n  font-family: Arial, sans-serif;\r\n  position: absolute;\r\n  animation: rotateZOnce 1s ease-in-out forwards;\r\n}\r\n\r\n.circle::before {\r\n  content: "";\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n\r\n  position: absolute;\r\n  top: -4px;\r\n  left: -4px;\r\n  z-index: -1;\r\n}\r\n\r\n@keyframes circle-fill {\r\n  0% {\r\n    transform: scale(0);\r\n    opacity: 0;\r\n  }\r\n\r\n  50% {\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes line-tip {\r\n  0% {\r\n    width: 0;\r\n    left: 13px;\r\n    top: 34px;\r\n  }\r\n\r\n  50% {\r\n    width: 30px;\r\n    left: 13px;\r\n  }\r\n\r\n  100% {\r\n    width: 30px;\r\n    left: 13px;\r\n    top: 34px;\r\n  }\r\n}\r\n\r\n@keyframes line-long {\r\n  0% {\r\n    width: 0;\r\n    left: 32px;\r\n    top: 56px;\r\n  }\r\n\r\n  50% {\r\n    width: 25px;\r\n    left: 32px;\r\n  }\r\n\r\n  100% {\r\n    width: 45px;\r\n    left: 32px;\r\n    top: 55px;\r\n  }\r\n}\r\n\r\n@keyframes pulse {\r\n  0%,\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n\r\n  50% {\r\n    transform: scale(1.1);\r\n  }\r\n}\r\n\r\n@keyframes swing {\r\n  0% {\r\n    transform: translate(-50%, -50%) rotate(0deg);\r\n  }\r\n\r\n  25% {\r\n    transform: translate(-50%, -50%) rotate(-15deg);\r\n  }\r\n\r\n  50% {\r\n    transform: translate(-50%, -50%) rotate(10deg);\r\n  }\r\n\r\n  75% {\r\n    transform: translate(-50%, -50%) rotate(-5deg);\r\n  }\r\n\r\n  100% {\r\n    transform: translate(-50%, -50%) rotate(0deg);\r\n  }\r\n}\r\n\r\n@keyframes moveZ {\r\n  0% {\r\n    transform: scale(1);\r\n  }\r\n\r\n  50% {\r\n    transform: scale(1.05);\r\n  }\r\n\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n@keyframes pulse {\r\n  0% {\r\n    transform: scale(1);\r\n  }\r\n\r\n  100% {\r\n    transform: scale(1.1);\r\n  }\r\n}\r\n\r\n@keyframes bounce {\r\n  0% {\r\n    transform: translate(-50%, -50%) translateY(0);\r\n  }\r\n\r\n  50% {\r\n    transform: translate(-50%, -50%) translateY(-15px);\r\n  }\r\n\r\n  100% {\r\n    transform: translate(-50%, -50%) translateY(0);\r\n  }\r\n}\r\n\r\n@keyframes bounceOnce {\r\n  0% {\r\n    transform: translateY(0);\r\n  }\r\n  40% {\r\n    transform: translateY(-10px);\r\n  }\r\n  60% {\r\n    transform: translateY(-5px);\r\n  }\r\n  100% {\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n@keyframes rotateZOnce {\r\n  0% {\r\n    transform: rotateY(0deg);\r\n  }\r\n  100% {\r\n    transform: rotateY(-360deg);\r\n  }\r\n}\r\n');var h=function(r){var e=r.title;return p.jsx("div",{className:"dialog",children:p.jsx("div",{className:"dialogSurface",children:p.jsxs("div",{className:"dialogBody",children:[p.jsxs("div",{className:"checkmark-container",children:[p.jsx("div",{className:"checkmark-circle"}),p.jsxs("div",{className:"checkmark-icon",children:[p.jsx("div",{className:"checkmark-line checkmark-line-tip"}),p.jsx("div",{className:"checkmark-line checkmark-line-long"})]})]}),p.jsx("div",{className:"dialogTitle",children:e})]})})})},v=function(r){var e=r.title;return p.jsx("div",{className:"dialog",children:p.jsx("div",{className:"dialogSurface",children:p.jsxs("div",{className:"dialogBody",children:[p.jsx("div",{className:"modal",children:p.jsxs("div",{className:"error-icon",children:[p.jsx("div",{className:"error-circle"}),p.jsxs("div",{className:"error-cross",children:[p.jsx("div",{className:"line line-1"}),p.jsx("div",{className:"line line-2"})]})]})}),p.jsxs("div",{className:"dialogTitle",children:[" ",e]})]})})})},y=function(r){var e=r.title;return p.jsx("div",{className:"dialog",children:p.jsx("div",{className:"dialogSurface",children:p.jsxs("div",{className:"dialogBody",children:[p.jsx("div",{className:"overlay",children:p.jsx("div",{className:"warning-icon blue-icon",children:p.jsx("div",{className:"exclamation blue-color-mark",children:"!"})})}),p.jsxs("div",{className:"dialogTitle",children:[" ",e]})]})})})},g=function(r){var e=r.title,n=r.confirmButtonText,t=r.cancelButtonText,o=r.onClose;return p.jsx("div",{className:"dialog",children:p.jsx("div",{className:"dialogSurface",children:p.jsx("div",{className:"dialogBody",children:p.jsxs("div",{className:"overlay",children:[p.jsx("div",{className:"warning-icon",children:p.jsx("div",{className:"exclamation",children:"!"})}),p.jsx("div",{className:"message",children:e}),p.jsxs("div",{className:"buttons",children:[p.jsx("button",{onClick:function(){o({isConfirmed:!0})},className:"yes-button",children:n||"Confirm"}),p.jsx("button",{onClick:function(){o({isConfirmed:!1})},className:"no-button",children:t||"Cancel"})]})]})})})})},x=function(r){var e=r.title,n=r.confirmButtonText,t=r.cancelButtonText,o=r.onClose;return p.jsx("div",{className:"dialog",children:p.jsx("div",{className:"dialogSurface",children:p.jsx("div",{className:"dialogBody",children:p.jsxs("div",{className:"overlay",children:[p.jsx("div",{className:"circle",children:p.jsx("span",{className:"question-mark",children:"?"})}),p.jsx("div",{className:"message",children:e}),p.jsxs("div",{className:"buttons",children:[p.jsx("button",{onClick:function(){o({isConfirmed:!0})},className:"yes-button",children:n||"Confirm"}),p.jsx("button",{onClick:function(){o({isConfirmed:!1})},className:"no-button",children:t||"Cancel"})]})]})})})})};export{m as CustomSelect,v as MyError,y as MyInfo,x as MyQuestion,h as MySuccess,g as MyWarning};
//# sourceMappingURL=index.mjs.map
