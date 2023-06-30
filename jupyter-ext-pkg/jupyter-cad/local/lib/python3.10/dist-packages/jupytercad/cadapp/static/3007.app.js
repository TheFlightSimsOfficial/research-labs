"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[3007],{60914:(t,e,o)=>{var i,n,r,a,c;o.d(e,{Qf:()=>a,TE:()=>n,t4:()=>r}),function(t){t.copyText=function(t){var e=document.body,o=function(i){i.preventDefault(),i.stopPropagation(),i.clipboardData.setData("text",t),e.removeEventListener("copy",o,!0)};e.addEventListener("copy",o,!0),document.execCommand("copy")}}(i||(i={})),function(t){t.boxSizing=function(t){var e=window.getComputedStyle(t),o=parseFloat(e.borderTopWidth)||0,i=parseFloat(e.borderLeftWidth)||0,n=parseFloat(e.borderRightWidth)||0,r=parseFloat(e.borderBottomWidth)||0,a=parseFloat(e.paddingTop)||0,c=parseFloat(e.paddingLeft)||0,l=parseFloat(e.paddingRight)||0,s=parseFloat(e.paddingBottom)||0;return{borderTop:o,borderLeft:i,borderRight:n,borderBottom:r,paddingTop:a,paddingLeft:c,paddingRight:l,paddingBottom:s,horizontalSum:i+c+l+n,verticalSum:o+a+s+r}},t.sizeLimits=function(t){var e=window.getComputedStyle(t),o=parseFloat(e.minWidth)||0,i=parseFloat(e.minHeight)||0,n=parseFloat(e.maxWidth)||1/0,r=parseFloat(e.maxHeight)||1/0;return{minWidth:o,minHeight:i,maxWidth:n=Math.max(o,n),maxHeight:r=Math.max(i,r)}},t.hitTest=function(t,e,o){var i=t.getBoundingClientRect();return e>=i.left&&e<i.right&&o>=i.top&&o<i.bottom},t.scrollIntoViewIfNeeded=function(t,e){var o=t.getBoundingClientRect(),i=e.getBoundingClientRect();i.top<=o.top&&i.bottom>=o.bottom||(i.top<o.top&&i.height<=o.height||i.bottom>o.bottom&&i.height>=o.height?t.scrollTop-=o.top-i.top:(i.top<o.top&&i.height>o.height||i.bottom>o.bottom&&i.height<o.height)&&(t.scrollTop-=o.bottom-i.bottom))}}(n||(n={})),function(t){t.IS_MAC=!!navigator.platform.match(/Mac/i),t.IS_WIN=!!navigator.platform.match(/Win/i),t.IS_IE=/Trident/.test(navigator.userAgent),t.IS_EDGE=/Edge/.test(navigator.userAgent),t.accelKey=function(e){return t.IS_MAC?e.metaKey:e.ctrlKey}}(r||(r={})),function(t){t.calculateSpecificity=function(t){if(t in c.specificityCache)return c.specificityCache[t];var e=c.calculateSingle(t);return c.specificityCache[t]=e},t.isValid=function(t){if(t in c.validityCache)return c.validityCache[t];var e=!0;try{c.testElem.querySelector(t)}catch(t){e=!1}return c.validityCache[t]=e},t.matches=function(t,e){return c.protoMatchFunc.call(t,e)}}(a||(a={})),function(t){var e;t.specificityCache=Object.create(null),t.validityCache=Object.create(null),t.testElem=document.createElement("div"),t.protoMatchFunc=(e=Element.prototype).matches||e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector||function(t){var e=this,o=e.ownerDocument?e.ownerDocument.querySelectorAll(t):[];return-1!==Array.prototype.indexOf.call(o,e)},t.calculateSingle=function(t){var e=0,u=0,h=0;function p(e){var o=t.match(e);return null!==o&&(t=t.slice(o[0].length),!0)}for(t=(t=t.split(",",1)[0]).replace(s," $1 ");t.length>0;)if(p(o))e++;else if(p(i))u++;else if(p(n))u++;else if(p(a))h++;else if(p(c))u++;else if(p(r))h++;else if(!p(l))return 0;return(e=Math.min(e,255))<<16|(u=Math.min(u,255))<<8|Math.min(h,255)};var o=/^#[^\s\+>~#\.\[:]+/,i=/^\.[^\s\+>~#\.\[:]+/,n=/^\[[^\]]+\]/,r=/^[^\s\+>~#\.\[:]+/,a=/^(::[^\s\+>~#\.\[:]+|:first-line|:first-letter|:before|:after)/,c=/^:[^\s\+>~#\.\[:]+/,l=/^[\s\+>~\*]+/,s=/:not\(([^\)]+)\)/g}(c||(c={}))},30041:(t,e,o)=>{function i(){return r.keyboardLayout}o.d(e,{Vc:()=>i});var n=function(){function t(e,o,i){void 0===i&&(i=[]),this.name=e,this._codes=o,this._keys=t.extractKeys(o),this._modifierKeys=t.convertToKeySet(i)}return t.prototype.keys=function(){return Object.keys(this._keys)},t.prototype.isValidKey=function(t){return t in this._keys},t.prototype.isModifierKey=function(t){return t in this._modifierKeys},t.prototype.keyForKeydownEvent=function(t){return this._codes[t.keyCode]||""},t}();!function(t){t.extractKeys=function(t){var e=Object.create(null);for(var o in t)e[t[o]]=!0;return e},t.convertToKeySet=function(t){for(var e=Object(null),o=0,i=t.length;o<i;++o)e[t[o]]=!0;return e}}(n||(n={}));var r,a=new n("en-us",{8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",27:"Escape",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",61:"=",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",91:"Meta",93:"ContextMenu",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",224:"Meta"},["Shift","Ctrl","Alt","Meta"]);!function(t){t.keyboardLayout=a}(r||(r={}))}}]);