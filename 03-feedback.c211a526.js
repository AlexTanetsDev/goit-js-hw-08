!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return s.Date.now()};function b(e,t,n){var r,i,a,u,f,c,l=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function S(e){return l=e,f=setTimeout(x,t),d?b(e):u}function k(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=a}function x(){var e=g();if(k(e))return O(e);f=setTimeout(x,function(e){var n=t-(e-c);return s?p(n,a-(e-l)):n}(e))}function O(e){return f=void 0,m&&r?b(e):(r=i=void 0,u)}function h(){var e=g(),n=k(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return S(c);if(s)return f=setTimeout(x,t),b(c)}return void 0===f&&(f=setTimeout(x,t)),u}return t=j(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?v(j(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},h.flush=function(){return void 0===f?u:O(g())},h}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?c(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var S={feedBackForm:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form  input"),textArea:document.querySelector(".feedback-form  textarea")},k={},x=JSON.parse(localStorage.getItem("feedback-form-state"));x&&(x.email&&(S.input.value=x.email),x.message&&(S.textArea.value=x.message)),S.feedBackForm.addEventListener("input",e(t)((function(e){"email"===e.target.name?(k.email=e.target.value,k.message=S.textArea.value):(k.message=e.target.value,k.email=S.input.value),localStorage.setItem("feedback-form-state",JSON.stringify(k))}),500)),S.feedBackForm.addEventListener("submit",(function(e){e.preventDefault(),console.log(k),S.feedBackForm.reset(),localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.c211a526.js.map
