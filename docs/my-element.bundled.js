/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t=new WeakMap,s=s=>"function"==typeof s&&t.has(s),i=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,s,i=null)=>{for(;s!==i;){const i=s.nextSibling;t.removeChild(s),s=i}},n={},o={},h=`{{lit-${String(Math.random()).slice(2)}}}`,r=`\x3c!--${h}--\x3e`,c=new RegExp(`${h}|${r}`),l="$lit$";class a{constructor(t,s){this.parts=[],this.element=s;const i=[],e=[],n=document.createTreeWalker(s.content,133,null,!1);let o=0,r=-1,a=0;const{strings:d,values:{length:w}}=t;for(;a<w;){const t=n.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const s=t.attributes,{length:i}=s;let e=0;for(let t=0;t<i;t++)u(s[t].name,l)&&e++;for(;e-- >0;){const s=d[a],i=f.exec(s)[2],e=i.toLowerCase()+l,n=t.getAttribute(e);t.removeAttribute(e);const o=n.split(c);this.parts.push({type:"attribute",index:r,name:i,strings:o}),a+=o.length-1}}"TEMPLATE"===t.tagName&&(e.push(t),n.currentNode=t.content)}else if(3===t.nodeType){const s=t.data;if(s.indexOf(h)>=0){const e=t.parentNode,n=s.split(c),o=n.length-1;for(let s=0;s<o;s++){let i,o=n[s];if(""===o)i=p();else{const t=f.exec(o);null!==t&&u(t[2],l)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-l.length)+t[3]),i=document.createTextNode(o)}e.insertBefore(i,t),this.parts.push({type:"node",index:++r})}""===n[o]?(e.insertBefore(p(),t),i.push(t)):t.data=n[o],a+=o}}else if(8===t.nodeType)if(t.data===h){const s=t.parentNode;null!==t.previousSibling&&r!==o||(r++,s.insertBefore(p(),t)),o=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(i.push(t),r--),a++}else{let s=-1;for(;-1!==(s=t.data.indexOf(h,s+1));)this.parts.push({type:"node",index:-1}),a++}}else n.currentNode=e.pop()}for(const t of i)t.parentNode.removeChild(t)}}const u=(t,s)=>{const i=t.length-s.length;return i>=0&&t.slice(i)===s},d=t=>-1!==t.index,p=()=>document.createComment(""),f=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class w{constructor(t,s,i){this.t=[],this.template=t,this.processor=s,this.options=i}update(t){let s=0;for(const i of this.t)void 0!==i&&i.setValue(t[s]),s++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const t=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),s=[],e=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let o,h=0,r=0,c=n.nextNode();for(;h<e.length;)if(o=e[h],d(o)){for(;r<o.index;)r++,"TEMPLATE"===c.nodeName&&(s.push(c),n.currentNode=c.content),null===(c=n.nextNode())&&(n.currentNode=s.pop(),c=n.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(c,o.name,o.strings,this.options));h++}else this.t.push(void 0),h++;return i&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const m=` ${h} `;class y{constructor(t,s,i,e){this.strings=t,this.values=s,this.type=i,this.processor=e}getHTML(){const t=this.strings.length-1;let s="",i=!1;for(let e=0;e<t;e++){const t=this.strings[e],n=t.lastIndexOf("\x3c!--");i=(n>-1||i)&&-1===t.indexOf("--\x3e",n+1);const o=f.exec(t);s+=null===o?t+(i?m:r):t.substr(0,o.index)+o[1]+o[2]+l+o[3]+h}return s+=this.strings[t],s}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const v=t=>null===t||!("object"==typeof t||"function"==typeof t),b=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class g{constructor(t,s,i){this.dirty=!0,this.element=t,this.name=s,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new x(this)}_getValue(){const t=this.strings,s=t.length-1;let i="";for(let e=0;e<s;e++){i+=t[e];const s=this.parts[e];if(void 0!==s){const t=s.value;if(v(t)||!b(t))i+="string"==typeof t?t:String(t);else for(const s of t)i+="string"==typeof s?s:String(s)}}return i+=t[s],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class x{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===n||v(t)&&t===this.value||(this.value=t,s(t)||(this.committer.dirty=!0))}commit(){for(;s(this.value);){const t=this.value;this.value=n,t(this)}this.value!==n&&this.committer.commit()}}class S{constructor(t){this.value=void 0,this.s=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(p()),this.endNode=t.appendChild(p())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.i(this.startNode=p()),t.i(this.endNode=p())}insertAfterPart(t){t.i(this.startNode=p()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.s=t}commit(){for(;s(this.s);){const t=this.s;this.s=n,t(this)}const t=this.s;t!==n&&(v(t)?t!==this.value&&this.o(t):t instanceof y?this.h(t):t instanceof Node?this.l(t):b(t)?this.u(t):t===o?(this.value=o,this.clear()):this.o(t))}i(t){this.endNode.parentNode.insertBefore(t,this.endNode)}l(t){this.value!==t&&(this.clear(),this.i(t),this.value=t)}o(t){const s=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);s===this.endNode.previousSibling&&3===s.nodeType?s.data=i:this.l(document.createTextNode(i)),this.value=t}h(t){const s=this.options.templateFactory(t);if(this.value instanceof w&&this.value.template===s)this.value.update(t.values);else{const i=new w(s,t.processor,this.options),e=i._clone();i.update(t.values),this.l(e),this.value=i}}u(t){Array.isArray(this.value)||(this.value=[],this.clear());const s=this.value;let i,e=0;for(const n of t)i=s[e],void 0===i&&(i=new S(this.options),s.push(i),0===e?i.appendIntoPart(this):i.insertAfterPart(s[e-1])),i.setValue(n),i.commit(),e++;e<s.length&&(s.length=e,this.clear(i&&i.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class _{constructor(t,s,i){if(this.value=void 0,this.s=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=s,this.strings=i}setValue(t){this.s=t}commit(){for(;s(this.s);){const t=this.s;this.s=n,t(this)}if(this.s===n)return;const t=!!this.s;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.s=n}}class C extends g{constructor(t,s,i){super(t,s,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new A(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class A extends x{}let P=!1;try{const t={get capture(){return P=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class M{constructor(t,s,i){this.value=void 0,this.s=void 0,this.element=t,this.eventName=s,this.eventContext=i,this.p=t=>this.handleEvent(t)}setValue(t){this.s=t}commit(){for(;s(this.s);){const t=this.s;this.s=n,t(this)}if(this.s===n)return;const t=this.s,i=this.value,e=null==t||null!=i&&(t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive),o=null!=t&&(null==i||e);e&&this.element.removeEventListener(this.eventName,this.p,this.m),o&&(this.m=k(t),this.element.addEventListener(this.eventName,this.p,this.m)),this.value=t,this.s=n}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const k=t=>t&&(P?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const E=new class{handleAttributeExpressions(t,s,i,e){const n=s[0];if("."===n){return new C(t,s.slice(1),i).parts}return"@"===n?[new M(t,s.slice(1),e.eventContext)]:"?"===n?[new _(t,s.slice(1),i)]:new g(t,s,i).parts}handleTextExpression(t){return new S(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function $(t){let s=T.get(t.type);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},T.set(t.type,s));let i=s.stringsArray.get(t.strings);if(void 0!==i)return i;const e=t.strings.join(h);return i=s.keyString.get(e),void 0===i&&(i=new a(t,t.getTemplateElement()),s.keyString.set(e,i)),s.stringsArray.set(t.strings,i),i}const T=new Map,j=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const U=(t,...s)=>new y(t,s,"html",E),O=133;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function N(t,s){const{element:{content:i},parts:e}=t,n=document.createTreeWalker(i,O,null,!1);let o=F(e),h=e[o],r=-1,c=0;const l=[];let a=null;for(;n.nextNode();){r++;const t=n.currentNode;for(t.previousSibling===a&&(a=null),s.has(t)&&(l.push(t),null===a&&(a=t)),null!==a&&c++;void 0!==h&&h.index===r;)h.index=null!==a?-1:h.index-c,o=F(e,o),h=e[o]}l.forEach(t=>t.parentNode.removeChild(t))}const V=t=>{let s=11===t.nodeType?0:1;const i=document.createTreeWalker(t,O,null,!1);for(;i.nextNode();)s++;return s},F=(t,s=-1)=>{for(let i=s+1;i<t.length;i++){const s=t[i];if(d(s))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const q=(t,s)=>`${t}--${s}`;let I=!0;void 0===window.ShadyCSS?I=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),I=!1);const R=t=>s=>{const i=q(s.type,t);let e=T.get(i);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},T.set(i,e));let n=e.stringsArray.get(s.strings);if(void 0!==n)return n;const o=s.strings.join(h);if(n=e.keyString.get(o),void 0===n){const i=s.getTemplateElement();I&&window.ShadyCSS.prepareTemplateDom(i,t),n=new a(s,i),e.keyString.set(o,n)}return e.stringsArray.set(s.strings,n),n},z=["html","svg"],J=new Set,W=(t,s,i)=>{J.add(t);const e=i?i.element:document.createElement("template"),n=s.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(e,t);const h=document.createElement("style");for(let t=0;t<o;t++){const s=n[t];s.parentNode.removeChild(s),h.textContent+=s.textContent}(t=>{z.forEach(s=>{const i=T.get(q(s,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:s}}=t,i=new Set;Array.from(s.querySelectorAll("style")).forEach(t=>{i.add(t)}),N(t,i)})})})(t);const r=e.content;i?function(t,s,i=null){const{element:{content:e},parts:n}=t;if(null==i)return void e.appendChild(s);const o=document.createTreeWalker(e,O,null,!1);let h=F(n),r=0,c=-1;for(;o.nextNode();){for(c++,o.currentNode===i&&(r=V(s),i.parentNode.insertBefore(s,i));-1!==h&&n[h].index===c;){if(r>0){for(;-1!==h;)n[h].index+=r,h=F(n,h);return}h=F(n,h)}}}(i,h,r.firstChild):r.insertBefore(h,r.firstChild),window.ShadyCSS.prepareTemplateStyles(e,t);const c=r.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)s.insertBefore(c.cloneNode(!0),s.firstChild);else if(i){r.insertBefore(h,r.firstChild);const t=new Set;t.add(h),N(i,t)}};window.JSCompiler_renameProperty=(t,s)=>t;const H={toAttribute(t,s){switch(s){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,s){switch(s){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},L=(t,s)=>s!==t&&(s==s||t==t),B={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:L},D=Promise.resolve(!0),G=1,K=4,Q=8,X=16,Y=32,Z="finalized";class tt extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=D,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((s,i)=>{const e=this._attributeNameForProperty(i,s);void 0!==e&&(this._attributeToPropertyMap.set(e,i),t.push(e))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,s)=>this._classProperties.set(s,t))}}static createProperty(t,s=B){if(this._ensureClassProperties(),this._classProperties.set(t,s),s.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[i]},set(s){const e=this[t];this[i]=s,this._requestUpdate(t,e)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(Z)||t.finalize(),this[Z]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,s=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of s)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,s){const i=s.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,s,i=L){return i(t,s)}static _propertyValueFromAttribute(t,s){const i=s.type,e=s.converter||H,n="function"==typeof e?e:e.fromAttribute;return n?n(t,i):t}static _propertyValueToAttribute(t,s){if(void 0===s.reflect)return;const i=s.type,e=s.converter;return(e&&e.toAttribute||H.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,s)=>{if(this.hasOwnProperty(s)){const t=this[s];delete this[s],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(s,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,s)=>this[s]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|Y,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,s,i){s!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,s,i=B){const e=this.constructor,n=e._attributeNameForProperty(t,i);if(void 0!==n){const t=e._propertyValueToAttribute(s,i);if(void 0===t)return;this._updateState=this._updateState|Q,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=this._updateState&~Q}}_attributeToProperty(t,s){if(this._updateState&Q)return;const i=this.constructor,e=i._attributeToPropertyMap.get(t);if(void 0!==e){const t=i._classProperties.get(e)||B;this._updateState=this._updateState|X,this[e]=i._propertyValueFromAttribute(s,t),this._updateState=this._updateState&~X}}_requestUpdate(t,s){let i=!0;if(void 0!==t){const e=this.constructor,n=e._classProperties.get(t)||B;e._valueHasChanged(this[t],s,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,s),!0!==n.reflect||this._updateState&X||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):i=!1}!this._hasRequestedUpdate&&i&&this._enqueueUpdate()}requestUpdate(t,s){return this._requestUpdate(t,s),this.updateComplete}async _enqueueUpdate(){let t,s;this._updateState=this._updateState|K;const i=this._updatePromise;this._updatePromise=new Promise((i,e)=>{t=i,s=e});try{await i}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){s(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&Y}get _hasRequestedUpdate(){return this._updateState&K}get hasUpdated(){return this._updateState&G}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const s=this._changedProperties;try{t=this.shouldUpdate(s),t&&this.update(s)}catch(s){throw t=!1,s}finally{this._markUpdated()}t&&(this._updateState&G||(this._updateState=this._updateState|G,this.firstUpdated(s)),this.updated(s))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~K}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,s)=>this._propertyToAttribute(s,this[s],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}tt[Z]=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const st="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,it=Symbol();class et{constructor(t,s){if(s!==it)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(st?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const nt=(t,...s)=>{const i=s.reduce((s,i,e)=>s+(t=>{if(t instanceof et)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[e+1],t[0]);return new et(i,it)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const ot=t=>t.flat?t.flat(1/0):function t(s,i=[]){for(let e=0,n=s.length;e<n;e++){const n=s[e];Array.isArray(n)?t(n,i):i.push(n)}return i}(t);class ht extends tt{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,s=[];if(Array.isArray(t)){ot(t).reduceRight((t,s)=>(t.add(s),t),new Set).forEach(t=>s.unshift(t))}else t&&s.push(t);return s}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?st?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const s=this.render();s instanceof y&&this.constructor.render(s,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const s=document.createElement("style");s.textContent=t.cssText,this.renderRoot.appendChild(s)}))}render(){}}ht.finalized=!0,ht.render=(t,s,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,o=j.has(s),h=I&&11===s.nodeType&&!!s.host,r=h&&!J.has(n),c=r?document.createDocumentFragment():s;if(((t,s,i)=>{let n=j.get(s);void 0===n&&(e(s,s.firstChild),j.set(s,n=new S(Object.assign({templateFactory:$},i))),n.appendInto(s)),n.setValue(t),n.commit()})(t,c,Object.assign({templateFactory:R(n)},i)),r){const t=j.get(c);j.delete(c);const i=t.value instanceof w?t.value.template:void 0;W(n,c,i),e(s,s.firstChild),s.appendChild(c),j.set(s,t)}!o&&h&&window.ShadyCSS.styleElement(s.host)};
/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class rt extends ht{static get styles(){return nt`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
    `}static get properties(){return{name:{type:String},count:{type:Number}}}constructor(){super(),this.name="World",this.count=0}render(){return U`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `}_onClick(){this.count++}}window.customElements.define("my-element",rt);export{rt as MyElement};
