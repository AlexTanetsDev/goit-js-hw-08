function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var r,o,i,a,f,u,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function x(e){return c=e,f=setTimeout(k,t),l?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function k(){var e=v();if(j(e))return S(e);f=setTimeout(k,function(e){var n=t-(e-u);return s?m(n,i-(e-c)):n}(e))}function S(e){return f=void 0,p&&r?y(e):(r=o=void 0,a)}function h(){var e=v(),n=j(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return x(u);if(s)return f=setTimeout(k,t),y(u)}return void 0===f&&(f=setTimeout(k,t)),a}return t=b(t)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},h.flush=function(){return void 0===f?a:S(v())},h}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};const y={feedBackForm:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form  input"),textArea:document.querySelector(".feedback-form  textarea")},x={},j=JSON.parse(localStorage.getItem("feedback-form-state"));j&&(j.email&&(y.input.value=j.email),j.message&&(y.textArea.value=j.message)),y.feedBackForm.addEventListener("input",e(t)((e=>{"email"===e.target.name?(x.email=e.target.value,x.message=y.textArea.value):(x.message=e.target.value,x.email=y.input.value),localStorage.setItem("feedback-form-state",JSON.stringify(x))}),500)),y.feedBackForm.addEventListener("submit",(e=>{e.preventDefault(),console.log(x),y.feedBackForm.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.129aef0a.js.map