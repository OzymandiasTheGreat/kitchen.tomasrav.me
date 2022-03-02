"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[688],{16775:function(e,t,n){var r=n(57423),o=n(7295),i=n(91003);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var a={max:1,min:0},l=function(e){return r.createElement("circle",{cx:"16",cy:"16",fill:"none",r:"14",strokeWidth:"4",style:e})},u=r.forwardRef((function(e,t){var n=e.animating,o=void 0===n||n,u=e.color,E=void 0===u?"#1976D2":u,_=e.hidesWhenStopped,h=void 0===_||_,d=e.size,P=void 0===d?"small":d,p=e.style,v=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["animating","color","hidesWhenStopped","size","style"]),y=r.createElement("svg",{height:"100%",viewBox:"0 0 32 32",width:"100%"},l({stroke:E,opacity:.2}),l({stroke:E,strokeDasharray:80,strokeDashoffset:60}));return r.createElement(i.Z,s({},v,{accessibilityRole:"progressbar",accessibilityValue:a,ref:t,style:[c.container,p]}),r.createElement(i.Z,{children:y,style:["number"===typeof P?{height:P,width:P}:f[P],c.animation,!o&&c.animationPause,!o&&h&&c.hidesWhenStopped]}))}));u.displayName="ActivityIndicator";var c=o.Z.create({container:{alignItems:"center",justifyContent:"center"},hidesWhenStopped:{visibility:"hidden"},animation:{animationDuration:"0.75s",animationKeyframes:[{"0%":{transform:[{rotate:"0deg"}]},"100%":{transform:[{rotate:"360deg"}]}}],animationTimingFunction:"linear",animationIterationCount:"infinite"},animationPause:{animationPlayState:"paused"}}),f=o.Z.create({small:{width:20,height:20},large:{width:36,height:36}});t.Z=u},52406:function(e,t,n){var r=n(57423),o=n(56921),i=n(4954),s=n(7295),a=n(91003);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){return{child:{opacity:null!==e&&void 0!==e?e:.85},underlay:{backgroundColor:void 0===t?"black":t}}}function c(e){return null!=e.onPress||null!=e.onPressIn||null!=e.onPressOut||null!=e.onLongPress}var f=s.Z.create({root:{userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),E=r.memo(r.forwardRef((function(e,t){var n=e.activeOpacity,E=e.children,_=e.delayPressIn,h=e.delayPressOut,d=e.delayLongPress,P=e.disabled,p=e.focusable,v=e.onHideUnderlay,y=e.onLongPress,g=e.onPress,R=e.onPressIn,T=e.onPressOut,S=e.onShowUnderlay,m=e.rejectResponderTermination,D=e.style,O=e.testOnly_pressed,b=e.underlayColor,N=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["activeOpacity","children","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onHideUnderlay","onLongPress","onPress","onPressIn","onPressOut","onShowUnderlay","rejectResponderTermination","style","testOnly_pressed","underlayColor"]),A=(0,r.useRef)(null),L=(0,o.Z)(t,A),C=(0,r.useState)(!0===O?u(n,b):null),I=C[0],k=C[1],Z=(0,r.useCallback)((function(){c(e)&&(k(u(n,b)),null!=S&&S())}),[n,S,e,b]),w=(0,r.useCallback)((function(){!0!==O&&c(e)&&(k(null),null!=v&&v())}),[v,e,O]),j=(0,r.useMemo)((function(){return{cancelable:!m,disabled:P,delayLongPress:d,delayPressStart:_,delayPressEnd:h,onLongPress:y,onPress:g,onPressStart:function(e){Z(),null!=R&&R(e)},onPressEnd:function(e){w(),null!=T&&T(e)}}}),[d,_,h,P,y,g,R,T,m,Z,w]),G=(0,i.Z)(A,j),M=r.Children.only(E);return r.createElement(a.Z,l({},N,G,{accessibilityDisabled:P,focusable:!P&&!1!==p,ref:L,style:[f.root,D,!P&&f.actionable,I&&I.underlay]}),r.cloneElement(M,{style:s.Z.compose(M.props.style,I&&I.child)}))})));E.displayName="TouchableHighlight",t.Z=E},10048:function(e,t,n){var r=n(53500);t.Z=r.Z},53500:function(e,t,n){var r=n(91003),o=n(57423);function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){var t,n;function s(){return e.apply(this,arguments)||this}n=e,(t=s).prototype=Object.create(n.prototype),t.prototype.constructor=t,i(t,n);var l=s.prototype;return l.setNativeProps=function(){},l.render=function(){return o.default.createElement(r.Z,{style:[a,this.props.style]},this.props.children)},s}(o.default.Component),a={};t.Z=s},4954:function(e,t,n){n.d(t,{Z:function(){return R}});var r="DELAY",o="ERROR",i="LONG_PRESS_DETECTED",s="NOT_RESPONDER",a="RESPONDER_ACTIVE_LONG_PRESS_START",l="RESPONDER_ACTIVE_PRESS_START",u="RESPONDER_INACTIVE_PRESS_START",c="RESPONDER_RELEASE",f="RESPONDER_TERMINATED",E=Object.freeze({NOT_RESPONDER:{DELAY:o,RESPONDER_GRANT:u,RESPONDER_RELEASE:o,RESPONDER_TERMINATED:o,LONG_PRESS_DETECTED:o},RESPONDER_INACTIVE_PRESS_START:{DELAY:l,RESPONDER_GRANT:o,RESPONDER_RELEASE:s,RESPONDER_TERMINATED:s,LONG_PRESS_DETECTED:o},RESPONDER_ACTIVE_PRESS_START:{DELAY:o,RESPONDER_GRANT:o,RESPONDER_RELEASE:s,RESPONDER_TERMINATED:s,LONG_PRESS_DETECTED:a},RESPONDER_ACTIVE_LONG_PRESS_START:{DELAY:o,RESPONDER_GRANT:o,RESPONDER_RELEASE:s,RESPONDER_TERMINATED:s,LONG_PRESS_DETECTED:a},ERROR:{DELAY:s,RESPONDER_GRANT:u,RESPONDER_RELEASE:s,RESPONDER_TERMINATED:s,LONG_PRESS_DETECTED:s}}),_=function(e){return e===l||e===a},h=function(e){return"button"===e.getAttribute("role")},d=function(e){return e===u||e===l||e===a},P=function(e){var t=e.key,n=e.target.getAttribute("role");return"Enter"===t||(" "===t||"Spacebar"===t)&&"button"===n},p=function(){function e(e){this._eventHandlers=null,this._isPointerTouch=!1,this._longPressDelayTimeout=null,this._longPressDispatched=!1,this._pressDelayTimeout=null,this._pressOutDelayTimeout=null,this._touchState=s,this.configure(e)}var t=e.prototype;return t.configure=function(e){this._config=e},t.reset=function(){this._cancelLongPressDelayTimeout(),this._cancelPressDelayTimeout(),this._cancelPressOutDelayTimeout()},t.getEventHandlers=function(){return null==this._eventHandlers&&(this._eventHandlers=this._createEventHandlers()),this._eventHandlers},t._createEventHandlers=function(){var e=this,t=function(t,n){t.persist(),e._cancelPressOutDelayTimeout(),e._longPressDispatched=!1,e._selectionTerminated=!1,e._touchState=s,e._isPointerTouch="touchstart"===t.nativeEvent.type,e._receiveSignal("RESPONDER_GRANT",t);var o=v(e._config.delayPressStart,0,50);!1!==n&&o>0?e._pressDelayTimeout=setTimeout((function(){e._receiveSignal(r,t)}),o):e._receiveSignal(r,t);var i=v(e._config.delayLongPress,10,450);e._longPressDelayTimeout=setTimeout((function(){e._handleLongPress(t)}),i+o)},n=function(t){e._receiveSignal(c,t)},o=function t(r){var o=e._config.onPress,i=r.target;if(e._touchState!==s&&P(r)){n(r),document.removeEventListener("keyup",t);var a=i.getAttribute("role"),l=i.tagName.toLowerCase();null==o||("link"===a||"a"===l||"button"===l||"input"===l||"select"===l||"textarea"===l)||o(r)}};return{onStartShouldSetResponder:function(t){var n=e._config.disabled;return n&&h(t.currentTarget)&&t.stopPropagation(),null==n||!n},onKeyDown:function(n){var r=e._config.disabled,i=n.key,a=n.target;if(!r&&P(n)){e._touchState===s&&(t(n,!1),document.addEventListener("keyup",o));var l=a.getAttribute("role");(" "===i||"Spacebar"===i)&&("button"===l||"menuitem"===l)&&n.preventDefault(),n.stopPropagation()}},onResponderGrant:function(e){return t(e)},onResponderMove:function(t){null!=e._config.onPressMove&&e._config.onPressMove(t);var n=y(t);if(null!=e._touchActivatePosition){var r=e._touchActivatePosition.pageX-n.pageX,o=e._touchActivatePosition.pageY-n.pageY;Math.hypot(r,o)>10&&e._cancelLongPressDelayTimeout()}},onResponderRelease:function(e){return n(e)},onResponderTerminate:function(t){"selectionchange"===t.nativeEvent.type&&(e._selectionTerminated=!0),e._receiveSignal(f,t)},onResponderTerminationRequest:function(t){var n=e._config,r=n.cancelable,o=n.disabled,i=n.onLongPress;return!(!o&&null!=i&&e._isPointerTouch&&"contextmenu"===t.nativeEvent.type)&&(null==r||r)},onClick:function(t){var n=e._config,r=n.disabled,o=n.onPress;r?h(t.currentTarget)&&t.stopPropagation():(t.stopPropagation(),e._longPressDispatched||e._selectionTerminated?t.preventDefault():null!=o&&!1===t.altKey&&o(t))},onContextMenu:function(t){var n=e._config,r=n.disabled,o=n.onLongPress;r?h(t.currentTarget)&&t.stopPropagation():null!=o&&e._isPointerTouch&&!t.defaultPrevented&&(t.preventDefault(),t.stopPropagation())}}},t._receiveSignal=function(e,t){var n=this._touchState,r=null;null!=E[n]&&(r=E[n][e]),this._touchState===s&&e===c||(null==r||r===o?console.error("PressResponder: Invalid signal "+e+" for state "+n+" on responder"):n!==r&&(this._performTransitionSideEffects(n,r,e,t),this._touchState=r))},t._performTransitionSideEffects=function(e,t,n,r){if(function(e){return e===f||e===c}(n)&&(this._isPointerTouch=!1,this._touchActivatePosition=null,this._cancelLongPressDelayTimeout()),d(e)&&n===i){var o=this._config.onLongPress;null!=o&&null==r.nativeEvent.key&&(o(r),this._longPressDispatched=!0)}var s=_(e),l=_(t);if(!s&&l?this._activate(r):s&&!l&&this._deactivate(r),d(e)&&n===c){var u=this._config,E=u.onLongPress;if(null!=u.onPress)null!=E&&e===a||l||s||(this._activate(r),this._deactivate(r))}this._cancelPressDelayTimeout()},t._activate=function(e){var t=this._config,n=t.onPressChange,r=t.onPressStart,o=y(e);this._touchActivatePosition={pageX:o.pageX,pageY:o.pageY},null!=r&&r(e),null!=n&&n(!0)},t._deactivate=function(e){var t=this._config,n=t.onPressChange,r=t.onPressEnd;function o(){null!=r&&r(e),null!=n&&n(!1)}var i=v(this._config.delayPressEnd);i>0?this._pressOutDelayTimeout=setTimeout((function(){o()}),i):o()},t._handleLongPress=function(e){this._touchState!==l&&this._touchState!==a||this._receiveSignal(i,e)},t._cancelLongPressDelayTimeout=function(){null!=this._longPressDelayTimeout&&(clearTimeout(this._longPressDelayTimeout),this._longPressDelayTimeout=null)},t._cancelPressDelayTimeout=function(){null!=this._pressDelayTimeout&&(clearTimeout(this._pressDelayTimeout),this._pressDelayTimeout=null)},t._cancelPressOutDelayTimeout=function(){null!=this._pressOutDelayTimeout&&(clearTimeout(this._pressOutDelayTimeout),this._pressOutDelayTimeout=null)},e}();function v(e,t,n){return void 0===t&&(t=0),void 0===n&&(n=0),Math.max(t,null!==e&&void 0!==e?e:n)}function y(e){var t=e.nativeEvent,n=t.changedTouches,r=t.touches;return null!=r&&r.length>0?r[0]:null!=n&&n.length>0?n[0]:e.nativeEvent}var g=n(57423);function R(e,t){var n=(0,g.useRef)(null);null==n.current&&(n.current=new p(t));var r=n.current;return(0,g.useEffect)((function(){r.configure(t)}),[t,r]),(0,g.useEffect)((function(){return function(){r.reset()}}),[r]),(0,g.useDebugValue)(t),r.getEventHandlers()}},36864:function(e,t,n){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},27812:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(52587);var o=n(2937);function i(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);