(this["webpackJsonpjavascript-calculator"]=this["webpackJsonpjavascript-calculator"]||[]).push([[0],[,,,,,,,function(e,i,t){e.exports=t(16)},,,,,function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){"use strict";t.r(i);var s=t(0),r=t.n(s),n=t(2),a=t.n(n),u=(t(12),t(3)),o=t(4),c=t(6),l=t(5);t(13);function p(e){return r.a.createElement("div",{className:"Display"},r.a.createElement("div",{className:"Expression"},e.expression),r.a.createElement("div",{id:"display",className:"Input"},e.input))}function v(e){return r.a.createElement("button",{className:"Key "+e.keyData.class,id:e.keyData.id,onClick:e.onClick,type:"button",value:e.keyData.value},e.keyData.value)}t(14);var d=[{id:"clear",class:"clear",value:"AC"},{id:"delete",class:"delete",value:"C"},{id:"divide",class:"operator",value:"/"},{id:"multiply",class:"operator",value:"*"},{id:"subtract",class:"operator",value:"-"},{id:"add",class:"operator",value:"+"},{id:"equals",class:"equals",value:"="},{id:"decimal",class:"digit",value:"."},{id:"zero",class:"digit",value:"0"},{id:"one",class:"digit",value:"1"},{id:"two",class:"digit",value:"2"},{id:"three",class:"digit",value:"3"},{id:"four",class:"digit",value:"4"},{id:"five",class:"digit",value:"5"},{id:"six",class:"digit",value:"6"},{id:"seven",class:"digit",value:"7"},{id:"eight",class:"digit",value:"8"},{id:"nine",class:"digit",value:"9"}];function f(e){return r.a.createElement("div",{className:"KeyPad"},d.map((function(i){return r.a.createElement(v,{key:i.id,keyData:i,onClick:e.onClick})})))}function h(e){var i;try{i=function(e){if(Number.isNaN(e))return NaN;if(0===e)return"0";var i=Math.abs(e);if(1e-6<=i&&i<1)return(Math.round(1e9*e)/1e9).toString();var t=Number(e).toPrecision(10);return i<1e-6||1e10<=i?Number(t).toExponential():Number(t).toString()}(function(e){var i=e.match(/(?:\d+(?:\.\d*)?(?:e[-+]\d+)?)|[-+*/=]/g);return function(){var e=t(),s=i.shift();for(;;)switch(s){case"+":e+=t(),s=i.shift();break;case"-":e-=t(),s=i.shift();break;case"=":return e;default:throw new Error("expression error")}}();function t(){for(var e=s(),t=i.shift();;)switch(t){case"*":e*=s(),t=i.shift();break;case"/":var r=s();if(0===r)throw new Error("divide by zero");e/=r,t=i.shift();break;default:return i.unshift(t),e}}function s(){var e=i.shift();if("-"===e)return-s();var t=Number(e);if(Number.isNaN(t))throw new Error("primary expected");return t}}(e.expression))}catch(t){i=t.message}return{input:i,isResult:!e.isResult,isEquals:!e.isEquals}}var g=function(e){return{expression:e.expression.slice(0,-e.input.length)+"0",input:"0"}};var x=function(e,i){return{expression:e.expression.slice(0,-2)+i,isNegative:!e.isNegative,isEquals:!e.isEquals}},m=function(e,i){return{expression:e.expression.slice(0,-1)+i,isOperator:!e.isOperator,isEquals:!e.isEquals}},N=function(e,i){return{expression:e.expression+i,isEquals:!e.isEquals}};var E=function(e,i){return{expression:e.input+i,input:i,isResult:!e.isResult,isOperator:!e.isOperator}},k=function(e,i){return{expression:e.expression.slice(0,-2)+i,input:i,isNegative:!e.isNegative,isOperator:!e.isOperator}},O=function(e,i){return{expression:e.expression+i,input:i,isNegative:!e.isNegative,isOperator:!e.isOperator}},b=function(e,i){return{expression:e.expression.slice(0,-1)+i,input:i}},y=function(e,i){return{expression:e.expression+i,input:i,isOperator:!e.isOperator}};function w(e,i){var t=e.input,s=e.isResult,r=e.isNegative,n=e.isOperator;return function(e,i){return e.replace(/[.-]/g,"").length===i}(t,10)&&!s?e:s?q(e,i):r?R(e,i):n?C(e,i):"0"===t?D(e,i):j(e,i)}var q=function(e,i){return{expression:i,input:i,isResult:!e.isResult}},R=function(e,i){return{expression:e.expression+i,input:e.input+i,isNegative:!e.isNegative}},C=function(e,i){return{expression:e.expression+i,input:i,isOperator:!e.isOperator}},D=function(e,i){return{expression:e.expression.slice(0,-1)+i,input:i}},j=function(e,i){return{expression:e.expression+i,input:e.input+i}};function S(e,i){switch(i){case"AC":return{expression:"0",input:"0",isResult:!1,isEquals:!1,isNegative:!1,isOperator:!1};case"C":return function(e){var i=e.isResult,t=e.isNegative,s=e.isOperator;return i||t||s?e:g(e)}(e);case"=":return function(e,i){var t=e.isResult,s=e.isNegative,r=e.isOperator;return t?e:s?x(e,i):r?m(e,i):N(e,i)}(e,i);case"+":case"-":case"*":case"/":return function(e,i){var t=e.isResult,s=e.isNegative,r=e.isOperator;return t?E(e,i):s?k(e,i):r?"-"===i?O(e,i):b(e,i):y(e,i)}(e,i);case".":return function(e,i){var t=e.input,s=e.isResult,r=e.isNegative,n=e.isOperator;return t.includes(i)&&!s?e:w(e,"0"===t||s||r||n?"0"+i:i)}(e,i);default:return w(e,i)}}t(15);var A=function(e){Object(c.a)(t,e);var i=Object(l.a)(t);function t(e){var s;return Object(u.a)(this,t),(s=i.call(this,e)).handleClick=function(e){var i=e.target.value;s.setState((function(e){return S(e,i)}))},s.state={expression:"0",input:"0",isResult:!1,isEquals:!1,isNegative:!1,isOperator:!1},s}return Object(o.a)(t,[{key:"componentDidUpdate",value:function(e,i,t){this.state.isEquals&&this.setState(h)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,{expression:this.state.expression,input:this.state.input}),r.a.createElement(f,{onClick:this.handleClick}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[7,1,2]]]);
//# sourceMappingURL=main.7b741f65.chunk.js.map