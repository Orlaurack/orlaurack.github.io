/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(t,e){if(!t)throw at(e)},at=function(t){return new Error("Firebase Database ("+Vo.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Uh=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},vs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,c=r>>2,u=(r&3)<<4|a>>4;let d=(a&15)<<2|h>>6,p=h&63;l||(p=64,o||(d=64)),i.push(n[c],n[u],n[d],n[p])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Go(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Uh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||h==null||u==null)throw Error();const d=r<<2|a>>4;if(i.push(d),h!==64){const p=a<<4&240|h>>2;if(i.push(p),u!==64){const g=h<<6&192|u;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},zo=function(t){const e=Go(t);return vs.encodeByteArray(e,!0)},_n=function(t){return zo(t).replace(/\./g,"")},gn=function(t){try{return vs.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(t){return qo(void 0,t)}function qo(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Hh(n)||(t[n]=qo(t[n],e[n]));return t}function Hh(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Es(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ae())}function Wh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ko(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yo(){return Vo.NODE_ADMIN===!0}function jh(){try{return typeof indexedDB=="object"}catch{return!1}}function $h(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function Vh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=()=>Vh().__FIREBASE_DEFAULTS__,zh=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&gn(t[1]);return e&&JSON.parse(e)},Cs=()=>{try{return Gh()||zh()||qh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Kh=t=>{var e,n;return(n=(e=Cs())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Yh=t=>{const e=Kh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Xh=()=>{var t;return(t=Cs())===null||t===void 0?void 0:t.config},Qh=t=>{var e;return(e=Cs())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[_n(JSON.stringify(n)),_n(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh="FirebaseError";class Ne extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Zh,Object.setPrototypeOf(this,Ne.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vt.prototype.create)}}class Vt{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?ec(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ne(s,a,i)}}function ec(t,e){return t.replace(tc,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const tc=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t){return JSON.parse(t)}function x(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=At(gn(r[0])||""),n=At(gn(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},nc=function(t){const e=Xo(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ic=function(t){const e=Xo(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function nt(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function kr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mn(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function $i(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Dr(r)&&Dr(o)){if(!$i(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Dr(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)i[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const d=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],h,c;for(let u=0;u<80;u++){u<40?u<20?(h=a^r&(o^a),c=1518500249):(h=r^o^a,c=1859775393):u<60?(h=r&o|a&(r|o),c=2400959708):(h=r^o^a,c=3395469782);const d=(s<<5|s>>>27)+h+l+c+i[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function rc(t,e){const n=new oc(t,e);return n.subscribe.bind(n)}class oc{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");ac(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Ci),s.error===void 0&&(s.error=Ci),s.complete===void 0&&(s.complete=Ci);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ac(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ci(){}function ws(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,f(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Gn=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t){return t&&t._delegate?t._delegate:t}class we{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Vn;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uc(e))try{this.getOrInitializeService({instanceIdentifier:Pe})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Pe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pe){return this.instances.has(e)}getOptions(e=Pe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:cc(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Pe){return this.component?this.component.multipleInstances?e:Pe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cc(t){return t===Pe?void 0:t}function uc(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hc(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(b||(b={}));const fc={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},pc=b.INFO,_c={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},gc=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=_c[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zn{constructor(e){this.name=e,this._logLevel=pc,this._logHandler=gc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in b))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...e),this._logHandler(this,b.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...e),this._logHandler(this,b.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,b.INFO,...e),this._logHandler(this,b.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,b.WARN,...e),this._logHandler(this,b.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...e),this._logHandler(this,b.ERROR,...e)}}const mc=(t,e)=>e.some(n=>t instanceof n);let Pr,Or;function yc(){return Pr||(Pr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vc(){return Or||(Or=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qo=new WeakMap,Vi=new WeakMap,Jo=new WeakMap,Ii=new WeakMap,Ts=new WeakMap;function Ec(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ve(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Qo.set(n,t)}).catch(()=>{}),Ts.set(e,t),e}function Cc(t){if(Vi.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Vi.set(t,e)}let Gi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Jo.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ve(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ic(t){Gi=t(Gi)}function wc(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(wi(this),e,...n);return Jo.set(i,e.sort?e.sort():[e]),ve(i)}:vc().includes(t)?function(...e){return t.apply(wi(this),e),ve(Qo.get(this))}:function(...e){return ve(t.apply(wi(this),e))}}function Tc(t){return typeof t=="function"?wc(t):(t instanceof IDBTransaction&&Cc(t),mc(t,yc())?new Proxy(t,Gi):t)}function ve(t){if(t instanceof IDBRequest)return Ec(t);if(Ii.has(t))return Ii.get(t);const e=Tc(t);return e!==t&&(Ii.set(t,e),Ts.set(e,t)),e}const wi=t=>Ts.get(t);function Sc(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=ve(o);return i&&o.addEventListener("upgradeneeded",l=>{i(ve(o.result),l.oldVersion,l.newVersion,ve(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const bc=["get","getKey","getAll","getAllKeys","count"],Nc=["put","add","delete","clear"],Ti=new Map;function xr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ti.get(e))return Ti.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Nc.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||bc.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return i&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),s&&l.done]))[0]};return Ti.set(e,r),r}Ic(t=>({...t,get:(e,n,i)=>xr(e,n)||t.get(e,n,i),has:(e,n)=>!!xr(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Rc(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Rc(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zi="@firebase/app",Mr="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We=new zn("@firebase/app"),kc="@firebase/app-compat",Dc="@firebase/analytics-compat",Pc="@firebase/analytics",Oc="@firebase/app-check-compat",xc="@firebase/app-check",Mc="@firebase/auth",Lc="@firebase/auth-compat",Fc="@firebase/database",Uc="@firebase/database-compat",Bc="@firebase/functions",Hc="@firebase/functions-compat",Wc="@firebase/installations",jc="@firebase/installations-compat",$c="@firebase/messaging",Vc="@firebase/messaging-compat",Gc="@firebase/performance",zc="@firebase/performance-compat",qc="@firebase/remote-config",Kc="@firebase/remote-config-compat",Yc="@firebase/storage",Xc="@firebase/storage-compat",Qc="@firebase/firestore",Jc="@firebase/firestore-compat",Zc="firebase",eu="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="[DEFAULT]",tu={[zi]:"fire-core",[kc]:"fire-core-compat",[Pc]:"fire-analytics",[Dc]:"fire-analytics-compat",[xc]:"fire-app-check",[Oc]:"fire-app-check-compat",[Mc]:"fire-auth",[Lc]:"fire-auth-compat",[Fc]:"fire-rtdb",[Uc]:"fire-rtdb-compat",[Bc]:"fire-fn",[Hc]:"fire-fn-compat",[Wc]:"fire-iid",[jc]:"fire-iid-compat",[$c]:"fire-fcm",[Vc]:"fire-fcm-compat",[Gc]:"fire-perf",[zc]:"fire-perf-compat",[qc]:"fire-rc",[Kc]:"fire-rc-compat",[Yc]:"fire-gcs",[Xc]:"fire-gcs-compat",[Qc]:"fire-fst",[Jc]:"fire-fst-compat","fire-js":"fire-js",[Zc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=new Map,Ki=new Map;function nu(t,e){try{t.container.addComponent(e)}catch(n){We.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function je(t){const e=t.name;if(Ki.has(e))return We.debug(`There were multiple attempts to register component ${e}.`),!1;Ki.set(e,t);for(const n of yn.values())nu(n,t);return!0}function iu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ee=new Vt("app","Firebase",su);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new we("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ee.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=eu;function Zo(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:qi,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Ee.create("bad-app-name",{appName:String(s)});if(n||(n=Xh()),!n)throw Ee.create("no-options");const r=yn.get(s);if(r){if($i(n,r.options)&&$i(i,r.config))return r;throw Ee.create("duplicate-app",{appName:s})}const o=new dc(s);for(const l of Ki.values())o.addComponent(l);const a=new ru(n,i,o);return yn.set(s,a),a}function ou(t=qi){const e=yn.get(t);if(!e&&t===qi)return Zo();if(!e)throw Ee.create("no-app",{appName:t});return e}function se(t,e,n){var i;let s=(i=tu[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),We.warn(a.join(" "));return}je(new we(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au="firebase-heartbeat-database",lu=1,Rt="firebase-heartbeat-store";let Si=null;function ea(){return Si||(Si=Sc(au,lu,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Rt)}}}).catch(t=>{throw Ee.create("idb-open",{originalErrorMessage:t.message})})),Si}async function hu(t){try{return(await ea()).transaction(Rt).objectStore(Rt).get(ta(t))}catch(e){if(e instanceof Ne)We.warn(e.message);else{const n=Ee.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});We.warn(n.message)}}}async function Lr(t,e){try{const i=(await ea()).transaction(Rt,"readwrite");return await i.objectStore(Rt).put(e,ta(t)),i.done}catch(n){if(n instanceof Ne)We.warn(n.message);else{const i=Ee.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});We.warn(i.message)}}}function ta(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=1024,uu=30*24*60*60*1e3;class du{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pu(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Fr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=uu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Fr(),{heartbeatsToSend:n,unsentEntries:i}=fu(this._heartbeatsCache.heartbeats),s=_n(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Fr(){return new Date().toISOString().substring(0,10)}function fu(t,e=cu){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Ur(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ur(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class pu{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jh()?$h().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await hu(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Lr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Lr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ur(t){return _n(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(t){je(new we("platform-logger",e=>new Ac(e),"PRIVATE")),je(new we("heartbeat",e=>new du(e),"PRIVATE")),se(zi,Mr,t),se(zi,Mr,"esm2017"),se("fire-js","")}_u("");var gu="firebase",mu="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */se(gu,mu,"app");function na(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function ia(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yu=ia,sa=new Vt("auth","Firebase",ia());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new zn("@firebase/auth");function pn(t,...e){Br.logLevel<=b.ERROR&&Br.error(`Auth (${qn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(t,...e){throw Ss(t,...e)}function ra(t,...e){return Ss(t,...e)}function vu(t,e,n){const i=Object.assign(Object.assign({},yu()),{[e]:n});return new Vt("auth","Firebase",i).create(e,{appName:t.name})}function Ss(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return sa.create(t,...e)}function S(t,e,...n){if(!t)throw Ss(e,...n)}function Ct(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pn(e),new Error(e)}function vn(t,e){t||Ct(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new Map;function xe(t){vn(t instanceof Function,"Expected a class definition");let e=Wr.get(t);return e?(vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wr.set(t,e),e)}function Eu(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(xe);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Cu(){return jr()==="http:"||jr()==="https:"}function jr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Cu()||Wh()||"connection"in navigator)?navigator.onLine:!0}function wu(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=Es()||Ko()}get(){return Iu()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(t,e){vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=new Gt(3e4,6e4);async function aa(t,e,n,i,s={}){return la(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Is(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),oa.fetch()(ha(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function la(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Su),e);try{const s=new Nu(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ln(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,h]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ln(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ln(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ln(t,"user-disabled",o);const c=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw vu(t,c,h);Hr(t,c)}}catch(s){if(s instanceof Ne)throw s;Hr(t,"network-request-failed")}}function ha(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Tu(t.config,s):`${t.config.apiScheme}://${s}`}class Nu{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(ra(this.auth,"network-request-failed")),bu.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ln(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=ra(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Au(t,e){return aa(t,"POST","/v1/accounts:delete",e)}async function Ru(t,e){return aa(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ku(t,e=!1){const n=he(t),i=await n.getIdToken(e),s=ca(i);S(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:It(bi(s.auth_time)),issuedAtTime:It(bi(s.iat)),expirationTime:It(bi(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function bi(t){return Number(t)*1e3}function ca(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return pn("JWT malformed, contained fewer than 3 sections"),null;try{const s=gn(n);return s?JSON.parse(s):(pn("Failed to decode base64 JWT payload"),null)}catch(s){return pn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Du(t){const e=ca(t);return S(e,"internal-error"),S(typeof e.exp<"u","internal-error"),S(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Ne&&Pu(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Pu({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=It(this.lastLoginAt),this.creationTime=It(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(t){var e;const n=t.auth,i=await t.getIdToken(),s=await Yi(t,Ru(n,{idToken:i}));S(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Lu(r.providerUserInfo):[],a=Mu(t.providerData,o),l=t.isAnonymous,h=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),c=l?h:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ua(r.createdAt,r.lastLoginAt),isAnonymous:c};Object.assign(t,u)}async function xu(t){const e=he(t);await En(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Mu(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Lu(t){return t.map(e=>{var{providerId:n}=e,i=na(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fu(t,e){const n=await la(t,{},async()=>{const i=Is({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=ha(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",oa.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S(typeof e.idToken<"u","internal-error"),S(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Du(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return S(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await Fu(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new kt;return i&&(S(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(S(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(S(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new kt,this.toJSON())}_performRefresh(){return Ct("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t,e){S(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xe{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=na(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ou(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ua(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Yi(this,this.stsTokenManager.getToken(this.auth,e));return S(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ku(this,e)}reload(){return xu(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Xe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await En(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Yi(this,Au(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,h,c;const u=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,ue=(h=n.createdAt)!==null&&h!==void 0?h:void 0,ke=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:De,emailVerified:an,isAnonymous:Ar,providerData:vi,stsTokenManager:Rr}=n;S(De&&Rr,e,"internal-error");const Lh=kt.fromJSON(this.name,Rr);S(typeof De=="string",e,"internal-error"),ye(u,e.name),ye(d,e.name),S(typeof an=="boolean",e,"internal-error"),S(typeof Ar=="boolean",e,"internal-error"),ye(p,e.name),ye(g,e.name),ye(I,e.name),ye(O,e.name),ye(ue,e.name),ye(ke,e.name);const Ei=new Xe({uid:De,auth:e,email:d,emailVerified:an,displayName:u,isAnonymous:Ar,photoURL:g,phoneNumber:p,tenantId:I,stsTokenManager:Lh,createdAt:ue,lastLoginAt:ke});return vi&&Array.isArray(vi)&&(Ei.providerData=vi.map(Fh=>Object.assign({},Fh))),O&&(Ei._redirectEventId=O),Ei}static async _fromIdTokenResponse(e,n,i=!1){const s=new kt;s.updateFromServerResponse(n);const r=new Xe({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await En(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}da.type="NONE";const $r=da;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(t,e,n){return`firebase:${t}:${e}:${n}`}class Qe{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Ni(this.userKey,s.apiKey,r),this.fullPersistenceKey=Ni("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Qe(xe($r),e,i);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let r=s[0]||xe($r);const o=Ni(i,e.config.apiKey,e.name);let a=null;for(const h of n)try{const c=await h._get(o);if(c){const u=Xe._fromJSON(e,c);h!==r&&(a=u),r=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Qe(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async h=>{if(h!==r)try{await h._remove(o)}catch{}})),new Qe(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Uu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($u(e))return"Blackberry";if(Vu(e))return"Webos";if(Bu(e))return"Safari";if((e.includes("chrome/")||Hu(e))&&!e.includes("edge/"))return"Chrome";if(ju(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Uu(t=ae()){return/firefox\//i.test(t)}function Bu(t=ae()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hu(t=ae()){return/crios\//i.test(t)}function Wu(t=ae()){return/iemobile/i.test(t)}function ju(t=ae()){return/android/i.test(t)}function $u(t=ae()){return/blackberry/i.test(t)}function Vu(t=ae()){return/webos/i.test(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(t,e=[]){let n;switch(t){case"Browser":n=Vr(ae());break;case"Worker":n=`${Vr(ae())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qn}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,n,i){this.app=e,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gr(this),this.idTokenSubscription=new Gr(this),this.beforeStateQueue=new Gu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sa,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xe(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Qe.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await En(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wu()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?he(e):null;return n&&S(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(xe(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Vt("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xe(e)||this._popupRedirectResolver;S(n,this,"argument-error"),this.redirectPersistenceManager=await Qe.create(this,[xe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return S(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fa(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(n["X-Firebase-Client"]=i),n}}function qu(t){return he(t)}class Gr{constructor(e){this.auth=e,this.observer=null,this.addObserver=rc(n=>this.observer=n)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}new Gt(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Gt(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Gt(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Gt(5e3,15e3);var zr="@firebase/auth",qr="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Xu(t){je(new we("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=i.options;return((a,l)=>{S(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),S(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const h={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fa(t)},c=new zu(a,l,h);return Eu(c,n),c})(i,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),je(new we("auth-internal",e=>{const n=qu(e.getProvider("auth").getImmediate());return(i=>new Ku(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),se(zr,qr,Yu(t)),se(zr,qr,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=5*60;Qh("authIdTokenMaxAge");Xu("Browser");var Ju=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_,bs=bs||{},y=Ju||self;function Cn(){}function Kn(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function zt(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Zu(t){return Object.prototype.hasOwnProperty.call(t,Ai)&&t[Ai]||(t[Ai]=++ed)}var Ai="closure_uid_"+(1e9*Math.random()>>>0),ed=0;function td(t,e,n){return t.call.apply(t.bind,arguments)}function nd(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function $(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?$=td:$=nd,$.apply(null,arguments)}function hn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function W(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function Ae(){this.s=this.s,this.o=this.o}var id=0;Ae.prototype.s=!1;Ae.prototype.na=function(){!this.s&&(this.s=!0,this.M(),id!=0)&&Zu(this)};Ae.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const pa=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ns(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Kr(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Kn(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function V(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}V.prototype.h=function(){this.defaultPrevented=!0};var sd=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{y.addEventListener("test",Cn,e),y.removeEventListener("test",Cn,e)}catch{}return t}();function In(t){return/^[\s\xa0]*$/.test(t)}var Yr=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ri(t,e){return t<e?-1:t>e?1:0}function Yn(){var t=y.navigator;return t&&(t=t.userAgent)?t:""}function ie(t){return Yn().indexOf(t)!=-1}function As(t){return As[" "](t),t}As[" "]=Cn;function rd(t){var e=ld;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var od=ie("Opera"),Dt=ie("Trident")||ie("MSIE"),_a=ie("Edge"),Xi=_a||Dt,ga=ie("Gecko")&&!(Yn().toLowerCase().indexOf("webkit")!=-1&&!ie("Edge"))&&!(ie("Trident")||ie("MSIE"))&&!ie("Edge"),ad=Yn().toLowerCase().indexOf("webkit")!=-1&&!ie("Edge");function ma(){var t=y.document;return t?t.documentMode:void 0}var Qi;e:{var ki="",Di=function(){var t=Yn();if(ga)return/rv:([^\);]+)(\)|;)/.exec(t);if(_a)return/Edge\/([\d\.]+)/.exec(t);if(Dt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ad)return/WebKit\/(\S+)/.exec(t);if(od)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Di&&(ki=Di?Di[1]:""),Dt){var Pi=ma();if(Pi!=null&&Pi>parseFloat(ki)){Qi=String(Pi);break e}}Qi=ki}var ld={};function hd(){return rd(function(){let t=0;const e=Yr(String(Qi)).split("."),n=Yr("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=Ri(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||Ri(s[2].length==0,r[2].length==0)||Ri(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}y.document&&Dt&&ma();function Pt(t,e){if(V.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ga){e:{try{As(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:cd[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Pt.X.h.call(this)}}W(Pt,V);var cd={2:"touch",3:"pen",4:"mouse"};Pt.prototype.h=function(){Pt.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var qt="closure_listenable_"+(1e6*Math.random()|0),ud=0;function dd(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=s,this.key=++ud,this.ba=this.ea=!1}function Xn(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Rs(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function ya(t){const e={};for(const n in t)e[n]=t[n];return e}const Xr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function va(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<Xr.length;r++)n=Xr[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Qn(t){this.src=t,this.g={},this.h=0}Qn.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Zi(t,e,i,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new dd(e,this.src,r,!!i,s),e.ea=n,t.push(e)),e};function Ji(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=pa(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Xn(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Zi(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==i)return s}return-1}var ks="closure_lm_"+(1e6*Math.random()|0),Oi={};function Ea(t,e,n,i,s){if(i&&i.once)return Ia(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ea(t,e[r],n,i,s);return null}return n=Os(n),t&&t[qt]?t.N(e,n,zt(i)?!!i.capture:!!i,s):Ca(t,e,n,!1,i,s)}function Ca(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=zt(s)?!!s.capture:!!s,a=Ps(t);if(a||(t[ks]=a=new Qn(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=fd(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)sd||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(Ta(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function fd(){function t(n){return e.call(t.src,t.listener,n)}const e=pd;return t}function Ia(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ia(t,e[r],n,i,s);return null}return n=Os(n),t&&t[qt]?t.O(e,n,zt(i)?!!i.capture:!!i,s):Ca(t,e,n,!0,i,s)}function wa(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)wa(t,e[r],n,i,s);else i=zt(i)?!!i.capture:!!i,n=Os(n),t&&t[qt]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Zi(r,n,i,s),-1<n&&(Xn(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ps(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Zi(e,n,i,s)),(n=-1<t?e[t]:null)&&Ds(n))}function Ds(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[qt])Ji(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Ta(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Ps(e))?(Ji(n,t),n.h==0&&(n.src=null,e[ks]=null)):Xn(t)}}}function Ta(t){return t in Oi?Oi[t]:Oi[t]="on"+t}function pd(t,e){if(t.ba)t=!0;else{e=new Pt(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&Ds(t),t=n.call(i,e)}return t}function Ps(t){return t=t[ks],t instanceof Qn?t:null}var xi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Os(t){return typeof t=="function"?t:(t[xi]||(t[xi]=function(e){return t.handleEvent(e)}),t[xi])}function B(){Ae.call(this),this.i=new Qn(this),this.P=this,this.I=null}W(B,Ae);B.prototype[qt]=!0;B.prototype.removeEventListener=function(t,e,n,i){wa(this,t,e,n,i)};function H(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new V(e,t);else if(e instanceof V)e.target=e.target||t;else{var s=e;e=new V(i,t),va(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=cn(o,i,!0,e)&&s}if(o=e.g=t,s=cn(o,i,!0,e)&&s,s=cn(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=cn(o,i,!1,e)&&s}B.prototype.M=function(){if(B.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Xn(n[i]);delete t.g[e],t.h--}}this.I=null};B.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};B.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function cn(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Ji(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var xs=y.JSON.stringify;function _d(){var t=Na;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class gd{constructor(){this.h=this.g=null}add(e,n){const i=Sa.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Sa=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new md,t=>t.reset());class md{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function yd(t){y.setTimeout(()=>{throw t},0)}function ba(t,e){es||vd(),ts||(es(),ts=!0),Na.add(t,e)}var es;function vd(){var t=y.Promise.resolve(void 0);es=function(){t.then(Ed)}}var ts=!1,Na=new gd;function Ed(){for(var t;t=_d();){try{t.h.call(t.g)}catch(n){yd(n)}var e=Sa;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ts=!1}function Jn(t,e){B.call(this),this.h=t||1,this.g=e||y,this.j=$(this.lb,this),this.l=Date.now()}W(Jn,B);_=Jn.prototype;_.ca=!1;_.R=null;_.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),H(this,"tick"),this.ca&&(Ms(this),this.start()))}};_.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ms(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}_.M=function(){Jn.X.M.call(this),Ms(this),delete this.g};function Ls(t,e,n){if(typeof t=="function")n&&(t=$(t,n));else if(t&&typeof t.handleEvent=="function")t=$(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:y.setTimeout(t,e||0)}function Aa(t){t.g=Ls(()=>{t.g=null,t.i&&(t.i=!1,Aa(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Cd extends Ae{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Aa(this)}M(){super.M(),this.g&&(y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ot(t){Ae.call(this),this.h=t,this.g={}}W(Ot,Ae);var Qr=[];function Ra(t,e,n,i){Array.isArray(n)||(n&&(Qr[0]=n.toString()),n=Qr);for(var s=0;s<n.length;s++){var r=Ea(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function ka(t){Rs(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ds(e)},t),t.g={}}Ot.prototype.M=function(){Ot.X.M.call(this),ka(this)};Ot.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Zn(){this.g=!0}Zn.prototype.Aa=function(){this.g=!1};function Id(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var h=a[l].split("=");if(1<h.length){var c=h[0];h=h[1];var u=c.split("_");o=2<=u.length&&u[1]=="type"?o+(c+"="+h+"&"):o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function wd(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function Ke(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Sd(t,n)+(i?" "+i:"")})}function Td(t,e){t.info(function(){return"TIMEOUT: "+e})}Zn.prototype.info=function(){};function Sd(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return xs(n)}catch{return e}}var lt={},Jr=null;function Fs(){return Jr=Jr||new B}lt.Pa="serverreachability";function Da(t){V.call(this,lt.Pa,t)}W(Da,V);function xt(t){const e=Fs();H(e,new Da(e))}lt.STAT_EVENT="statevent";function Pa(t,e){V.call(this,lt.STAT_EVENT,t),this.stat=e}W(Pa,V);function G(t){const e=Fs();H(e,new Pa(e,t))}lt.Qa="timingevent";function Oa(t,e){V.call(this,lt.Qa,t),this.size=e}W(Oa,V);function Kt(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return y.setTimeout(function(){t()},e)}var Us={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},bd={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Bs(){}Bs.prototype.h=null;function Zr(t){return t.h||(t.h=t.i())}function Nd(){}var Yt={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Hs(){V.call(this,"d")}W(Hs,V);function Ws(){V.call(this,"c")}W(Ws,V);var ns;function ei(){}W(ei,Bs);ei.prototype.g=function(){return new XMLHttpRequest};ei.prototype.i=function(){return{}};ns=new ei;function Xt(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new Ot(this),this.O=Ad,t=Xi?125:void 0,this.T=new Jn(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new xa}function xa(){this.i=null,this.g="",this.h=!1}var Ad=45e3,is={},wn={};_=Xt.prototype;_.setTimeout=function(t){this.O=t};function ss(t,e,n){t.K=1,t.v=ni(_e(e)),t.s=n,t.P=!0,Ma(t,null)}function Ma(t,e){t.F=Date.now(),Qt(t),t.A=_e(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),$a(n.i,"t",i),t.C=0,n=t.l.H,t.h=new xa,t.g=cl(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Cd($(t.La,t,t.g),t.N)),Ra(t.S,t.g,"readystatechange",t.ib),e=t.H?ya(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),xt(),Id(t.j,t.u,t.A,t.m,t.U,t.s)}_.ib=function(t){t=t.target;const e=this.L;e&&de(t)==3?e.l():this.La(t)};_.La=function(t){try{if(t==this.g)e:{const c=de(this.g);var e=this.g.Ea();const u=this.g.aa();if(!(3>c)&&(c!=3||Xi||this.g&&(this.h.h||this.g.fa()||io(this.g)))){this.I||c!=4||e==7||(e==8||0>=u?xt(3):xt(2)),ti(this);var n=this.g.aa();this.Y=n;t:if(La(this)){var i=io(this.g);t="";var s=i.length,r=de(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Me(this),wt(this);var o="";break t}this.h.i=new y.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,wd(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!In(a)){var h=a;break t}}h=null}if(n=h)Ke(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,rs(this,n);else{this.i=!1,this.o=3,G(12),Me(this),wt(this);break e}}this.P?(Fa(this,c,o),Xi&&this.i&&c==3&&(Ra(this.S,this.T,"tick",this.hb),this.T.start())):(Ke(this.j,this.m,o,null),rs(this,o)),c==4&&Me(this),this.i&&!this.I&&(c==4?ol(this.l,this):(this.i=!1,Qt(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,G(12)):(this.o=0,G(13)),Me(this),wt(this)}}}catch{}finally{}};function La(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Fa(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=Rd(t,n),s==wn){e==4&&(t.o=4,G(14),i=!1),Ke(t.j,t.m,null,"[Incomplete Response]");break}else if(s==is){t.o=4,G(15),Ke(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Ke(t.j,t.m,s,null),rs(t,s);La(t)&&s!=wn&&s!=is&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,G(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ks(e),e.K=!0,G(11))):(Ke(t.j,t.m,n,"[Invalid Chunked Response]"),Me(t),wt(t))}_.hb=function(){if(this.g){var t=de(this.g),e=this.g.fa();this.C<e.length&&(ti(this),Fa(this,t,e),this.i&&t!=4&&Qt(this))}};function Rd(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?wn:(n=Number(e.substring(n,i)),isNaN(n)?is:(i+=1,i+n>e.length?wn:(e=e.substr(i,n),t.C=i+n,e)))}_.cancel=function(){this.I=!0,Me(this)};function Qt(t){t.V=Date.now()+t.O,Ua(t,t.O)}function Ua(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Kt($(t.gb,t),e)}function ti(t){t.B&&(y.clearTimeout(t.B),t.B=null)}_.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Td(this.j,this.A),this.K!=2&&(xt(),G(17)),Me(this),this.o=2,wt(this)):Ua(this,this.V-t)};function wt(t){t.l.G==0||t.I||ol(t.l,t)}function Me(t){ti(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ms(t.T),ka(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function rs(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||os(n.h,t))){if(!t.J&&os(n.h,t)&&n.G==3){try{var i=n.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)bn(n),oi(n);else break e;qs(n),G(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=Kt($(n.cb,n),6e3));if(1>=za(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Le(n,11)}else if((t.J||n.g==t)&&bn(n),!In(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let h=s[e];if(n.T=h[0],h=h[1],n.G==2)if(h[0]=="c"){n.I=h[1],n.ka=h[2];const c=h[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const u=h[4];u!=null&&(n.Ca=u,n.j.info("SVER="+n.Ca));const d=h[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=i.h;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(js(r,r.h),r.h=null))}if(i.D){const I=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(i.za=I,k(i.F,i.D,I))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=hl(i,i.H?i.ka:null,i.V),o.J){qa(i.h,o);var a=o,l=i.J;l&&a.setTimeout(l),a.B&&(ti(a),Qt(a)),i.g=o}else sl(i);0<n.i.length&&ai(n)}else h[0]!="stop"&&h[0]!="close"||Le(n,7);else n.G==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?Le(n,7):zs(n):h[0]!="noop"&&n.l&&n.l.wa(h),n.A=0)}}xt(4)}catch{}}function kd(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Kn(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function Dd(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Kn(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function Ba(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Kn(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Dd(t),i=kd(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var Ha=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pd(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Be(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Be){this.h=e!==void 0?e:t.h,Tn(this,t.j),this.s=t.s,this.g=t.g,Sn(this,t.m),this.l=t.l,e=t.i;var n=new Mt;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),eo(this,n),this.o=t.o}else t&&(n=String(t).match(Ha))?(this.h=!!e,Tn(this,n[1]||"",!0),this.s=vt(n[2]||""),this.g=vt(n[3]||"",!0),Sn(this,n[4]),this.l=vt(n[5]||"",!0),eo(this,n[6]||"",!0),this.o=vt(n[7]||"")):(this.h=!!e,this.i=new Mt(null,this.h))}Be.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Et(e,to,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Et(e,to,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Et(n,n.charAt(0)=="/"?Md:xd,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Et(n,Fd)),t.join("")};function _e(t){return new Be(t)}function Tn(t,e,n){t.j=n?vt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Sn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function eo(t,e,n){e instanceof Mt?(t.i=e,Ud(t.i,t.h)):(n||(e=Et(e,Ld)),t.i=new Mt(e,t.h))}function k(t,e,n){t.i.set(e,n)}function ni(t){return k(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function vt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Et(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Od),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Od(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var to=/[#\/\?@]/g,xd=/[#\?:]/g,Md=/[#\?]/g,Ld=/[#\?@]/g,Fd=/#/g;function Mt(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Re(t){t.g||(t.g=new Map,t.h=0,t.i&&Pd(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}_=Mt.prototype;_.add=function(t,e){Re(this),this.i=null,t=ht(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Wa(t,e){Re(t),e=ht(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ja(t,e){return Re(t),e=ht(t,e),t.g.has(e)}_.forEach=function(t,e){Re(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};_.oa=function(){Re(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};_.W=function(t){Re(this);let e=[];if(typeof t=="string")ja(this,t)&&(e=e.concat(this.g.get(ht(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};_.set=function(t,e){return Re(this),this.i=null,t=ht(this,t),ja(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};_.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function $a(t,e,n){Wa(t,e),0<n.length&&(t.i=null,t.g.set(ht(t,e),Ns(n)),t.h+=n.length)}_.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function ht(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Ud(t,e){e&&!t.j&&(Re(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(Wa(this,i),$a(this,s,n))},t)),t.j=e}var Bd=class{constructor(t,e){this.h=t,this.g=e}};function Va(t){this.l=t||Hd,y.PerformanceNavigationTiming?(t=y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(y.g&&y.g.Ga&&y.g.Ga()&&y.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Hd=10;function Ga(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function za(t){return t.h?1:t.g?t.g.size:0}function os(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function js(t,e){t.g?t.g.add(e):t.h=e}function qa(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Va.prototype.cancel=function(){if(this.i=Ka(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ka(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Ns(t.i)}function $s(){}$s.prototype.stringify=function(t){return y.JSON.stringify(t,void 0)};$s.prototype.parse=function(t){return y.JSON.parse(t,void 0)};function Wd(){this.g=new $s}function jd(t,e,n){const i=n||"";try{Ba(t,function(s,r){let o=s;zt(s)&&(o=xs(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function $d(t,e){const n=new Zn;if(y.Image){const i=new Image;i.onload=hn(un,n,i,"TestLoadImage: loaded",!0,e),i.onerror=hn(un,n,i,"TestLoadImage: error",!1,e),i.onabort=hn(un,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=hn(un,n,i,"TestLoadImage: timeout",!1,e),y.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function un(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function ii(t){this.l=t.ac||null,this.j=t.jb||!1}W(ii,Bs);ii.prototype.g=function(){return new si(this.l,this.j)};ii.prototype.i=function(t){return function(){return t}}({});function si(t,e){B.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Vs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}W(si,B);var Vs=0;_=si.prototype;_.open=function(t,e){if(this.readyState!=Vs)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Lt(this)};_.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||y).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};_.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jt(this)),this.readyState=Vs};_.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Lt(this)),this.g&&(this.readyState=3,Lt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ya(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Ya(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}_.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Jt(this):Lt(this),this.readyState==3&&Ya(this)}};_.Va=function(t){this.g&&(this.response=this.responseText=t,Jt(this))};_.Ua=function(t){this.g&&(this.response=t,Jt(this))};_.ga=function(){this.g&&Jt(this)};function Jt(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Lt(t)}_.setRequestHeader=function(t,e){this.v.append(t,e)};_.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};_.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Lt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(si.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Vd=y.JSON.parse;function P(t){B.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Xa,this.K=this.L=!1}W(P,B);var Xa="",Gd=/^https?$/i,zd=["POST","PUT"];_=P.prototype;_.Ka=function(t){this.L=t};_.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ns.g(),this.C=this.u?Zr(this.u):Zr(ns),this.g.onreadystatechange=$(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){no(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=y.FormData&&t instanceof y.FormData,!(0<=pa(zd,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Za(this),0<this.B&&((this.K=qd(this.g))?(this.g.timeout=this.B,this.g.ontimeout=$(this.qa,this)):this.A=Ls(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){no(this,r)}};function qd(t){return Dt&&hd()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}_.qa=function(){typeof bs<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,H(this,"timeout"),this.abort(8))};function no(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Qa(t),ri(t)}function Qa(t){t.D||(t.D=!0,H(t,"complete"),H(t,"error"))}_.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,H(this,"complete"),H(this,"abort"),ri(this))};_.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ri(this,!0)),P.X.M.call(this)};_.Ha=function(){this.s||(this.F||this.v||this.l?Ja(this):this.fb())};_.fb=function(){Ja(this)};function Ja(t){if(t.h&&typeof bs<"u"&&(!t.C[1]||de(t)!=4||t.aa()!=2)){if(t.v&&de(t)==4)Ls(t.Ha,0,t);else if(H(t,"readystatechange"),de(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var s=String(t.H).match(Ha)[1]||null;if(!s&&y.self&&y.self.location){var r=y.self.location.protocol;s=r.substr(0,r.length-1)}i=!Gd.test(s?s.toLowerCase():"")}n=i}if(n)H(t,"complete"),H(t,"success");else{t.m=6;try{var o=2<de(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Qa(t)}}finally{ri(t)}}}}function ri(t,e){if(t.g){Za(t);const n=t.g,i=t.C[0]?Cn:null;t.g=null,t.C=null,e||H(t,"ready");try{n.onreadystatechange=i}catch{}}}function Za(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(y.clearTimeout(t.A),t.A=null)}function de(t){return t.g?t.g.readyState:0}_.aa=function(){try{return 2<de(this)?this.g.status:-1}catch{return-1}};_.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};_.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Vd(e)}};function io(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Xa:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}_.Ea=function(){return this.m};_.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function el(t){let e="";return Rs(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Gs(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=el(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):k(t,e,n))}function pt(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function tl(t){this.Ca=0,this.i=[],this.j=new Zn,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=pt("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=pt("baseRetryDelayMs",5e3,t),this.bb=pt("retryDelaySeedMs",1e4,t),this.$a=pt("forwardChannelMaxRetries",2,t),this.ta=pt("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Va(t&&t.concurrentRequestLimit),this.Fa=new Wd,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}_=tl.prototype;_.ma=8;_.G=1;function zs(t){if(nl(t),t.G==3){var e=t.U++,n=_e(t.F);k(n,"SID",t.I),k(n,"RID",e),k(n,"TYPE","terminate"),Zt(t,n),e=new Xt(t,t.j,e,void 0),e.K=2,e.v=ni(_e(n)),n=!1,y.navigator&&y.navigator.sendBeacon&&(n=y.navigator.sendBeacon(e.v.toString(),"")),!n&&y.Image&&(new Image().src=e.v,n=!0),n||(e.g=cl(e.l,null),e.g.da(e.v)),e.F=Date.now(),Qt(e)}ll(t)}function oi(t){t.g&&(Ks(t),t.g.cancel(),t.g=null)}function nl(t){oi(t),t.u&&(y.clearTimeout(t.u),t.u=null),bn(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&y.clearTimeout(t.m),t.m=null)}function ai(t){Ga(t.h)||t.m||(t.m=!0,ba(t.Ja,t),t.C=0)}function Kd(t,e){return za(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Kt($(t.Ja,t,e),al(t,t.C)),t.C++,!0)}_.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new Xt(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=ya(r),va(r,this.S)):r=this.S),this.o!==null||this.N||(s.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=il(this,s,e),n=_e(this.F),k(n,"RID",t),k(n,"CVER",22),this.D&&k(n,"X-HTTP-Session-Id",this.D),Zt(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(el(r)))+"&"+e:this.o&&Gs(n,this.o,r)),js(this.h,s),this.Ya&&k(n,"TYPE","init"),this.O?(k(n,"$req",e),k(n,"SID","null"),s.Z=!0,ss(s,n,null)):ss(s,n,e),this.G=2}}else this.G==3&&(t?so(this,t):this.i.length==0||Ga(this.h)||so(this))};function so(t,e){var n;e?n=e.m:n=t.U++;const i=_e(t.F);k(i,"SID",t.I),k(i,"RID",n),k(i,"AID",t.T),Zt(t,i),t.o&&t.s&&Gs(i,t.o,t.s),n=new Xt(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=il(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),js(t.h,n),ss(n,i,e)}function Zt(t,e){t.ia&&Rs(t.ia,function(n,i){k(e,i,n)}),t.l&&Ba({},function(n,i){k(e,i,n)})}function il(t,e,n){n=Math.min(t.i.length,n);var i=t.l?$(t.l.Ra,t.l,t):null;e:{var s=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let h=s[l].h;const c=s[l].g;if(h-=r,0>h)r=Math.max(0,s[l].h-100),a=!1;else try{jd(c,o,"req"+h+"_")}catch{i&&i(c)}}if(a){i=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,i}function sl(t){t.g||t.u||(t.Z=1,ba(t.Ia,t),t.A=0)}function qs(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Kt($(t.Ia,t),al(t,t.A)),t.A++,!0)}_.Ia=function(){if(this.u=null,rl(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Kt($(this.eb,this),t)}};_.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,G(10),oi(this),rl(this))};function Ks(t){t.B!=null&&(y.clearTimeout(t.B),t.B=null)}function rl(t){t.g=new Xt(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=_e(t.sa);k(e,"RID","rpc"),k(e,"SID",t.I),k(e,"CI",t.L?"0":"1"),k(e,"AID",t.T),k(e,"TYPE","xmlhttp"),Zt(t,e),t.o&&t.s&&Gs(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=ni(_e(e)),n.s=null,n.P=!0,Ma(n,t)}_.cb=function(){this.v!=null&&(this.v=null,oi(this),qs(this),G(19))};function bn(t){t.v!=null&&(y.clearTimeout(t.v),t.v=null)}function ol(t,e){var n=null;if(t.g==e){bn(t),Ks(t),t.g=null;var i=2}else if(os(t.h,e))n=e.D,qa(t.h,e),i=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=Fs(),H(i,new Oa(i,n)),ai(t)}else sl(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(i==1&&Kd(t,e)||i==2&&qs(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:Le(t,5);break;case 4:Le(t,10);break;case 3:Le(t,6);break;default:Le(t,2)}}}function al(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Le(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=$(t.kb,t);n||(n=new Be("//www.google.com/images/cleardot.gif"),y.location&&y.location.protocol=="http"||Tn(n,"https"),ni(n)),$d(n.toString(),i)}else G(2);t.G=0,t.l&&t.l.va(e),ll(t),nl(t)}_.kb=function(t){t?(this.j.info("Successfully pinged google.com"),G(2)):(this.j.info("Failed to ping google.com"),G(1))};function ll(t){if(t.G=0,t.la=[],t.l){const e=Ka(t.h);(e.length!=0||t.i.length!=0)&&(Kr(t.la,e),Kr(t.la,t.i),t.h.i.length=0,Ns(t.i),t.i.length=0),t.l.ua()}}function hl(t,e,n){var i=n instanceof Be?_e(n):new Be(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),Sn(i,i.m);else{var s=y.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new Be(null,void 0);i&&Tn(r,i),e&&(r.g=e),s&&Sn(r,s),n&&(r.l=n),i=r}return n=t.D,e=t.za,n&&e&&k(i,n,e),k(i,"VER",t.ma),Zt(t,i),i}function cl(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new P(new ii({jb:!0})):new P(t.ra),e.Ka(t.H),e}function ul(){}_=ul.prototype;_.xa=function(){};_.wa=function(){};_.va=function(){};_.ua=function(){};_.Ra=function(){};function J(t,e){B.call(this),this.g=new tl(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!In(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!In(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ct(this)}W(J,B);J.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;G(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=hl(t,null,t.V),ai(t)};J.prototype.close=function(){zs(this.g)};J.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=xs(t),t=n);e.i.push(new Bd(e.ab++,t)),e.G==3&&ai(e)};J.prototype.M=function(){this.g.l=null,delete this.j,zs(this.g),delete this.g,J.X.M.call(this)};function dl(t){Hs.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}W(dl,Hs);function fl(){Ws.call(this),this.status=1}W(fl,Ws);function ct(t){this.g=t}W(ct,ul);ct.prototype.xa=function(){H(this.g,"a")};ct.prototype.wa=function(t){H(this.g,new dl(t))};ct.prototype.va=function(t){H(this.g,new fl)};ct.prototype.ua=function(){H(this.g,"b")};J.prototype.send=J.prototype.u;J.prototype.open=J.prototype.m;J.prototype.close=J.prototype.close;Us.NO_ERROR=0;Us.TIMEOUT=8;Us.HTTP_ERROR=6;bd.COMPLETE="complete";Nd.EventType=Yt;Yt.OPEN="a";Yt.CLOSE="b";Yt.ERROR="c";Yt.MESSAGE="d";B.prototype.listen=B.prototype.N;P.prototype.listenOnce=P.prototype.O;P.prototype.getLastError=P.prototype.Oa;P.prototype.getLastErrorCode=P.prototype.Ea;P.prototype.getStatus=P.prototype.aa;P.prototype.getResponseJson=P.prototype.Sa;P.prototype.getResponseText=P.prototype.fa;P.prototype.send=P.prototype.da;P.prototype.setWithCredentials=P.prototype.Ka;const ro="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}q.UNAUTHENTICATED=new q(null),q.GOOGLE_CREDENTIALS=new q("google-credentials-uid"),q.FIRST_PARTY=new q("first-party-uid"),q.MOCK_USER=new q("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let li="9.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new zn("@firebase/firestore");function Q(t,...e){if(Nn.logLevel<=b.DEBUG){const n=e.map(pl);Nn.debug(`Firestore (${li}): ${t}`,...n)}}function Ys(t,...e){if(Nn.logLevel<=b.ERROR){const n=e.map(pl);Nn.error(`Firestore (${li}): ${t}`,...n)}}function pl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(t="Unexpected state"){const e=`FIRESTORE (${li}) INTERNAL ASSERTION FAILED: `+t;throw Ys(e),new Error(e)}function An(t,e){t||_l()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends Ne{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Xd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(q.UNAUTHENTICATED))}shutdown(){}}class Qd{constructor(e){this.t=e,this.currentUser=q.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new Je;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Je,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Je)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(An(typeof i.accessToken=="string"),new Yd(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return An(e===null||typeof e=="string"),new q(e)}}class Jd{constructor(e,n,i,s){this.h=e,this.l=n,this.m=i,this.g=s,this.type="FirstParty",this.user=q.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(An(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Zd{constructor(e,n,i,s){this.h=e,this.l=n,this.m=i,this.g=s}getToken(){return Promise.resolve(new Jd(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(q.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ef{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tf{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const i=r=>{r.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,Q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?s(r):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(An(typeof n.token=="string"),this.A=n.token,new ef(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=nf(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function gl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,n,i,s,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Rn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Rn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Rn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oo,w;(w=oo||(oo={}))[w.OK=0]="OK",w[w.CANCELLED=1]="CANCELLED",w[w.UNKNOWN=2]="UNKNOWN",w[w.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",w[w.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",w[w.NOT_FOUND=5]="NOT_FOUND",w[w.ALREADY_EXISTS=6]="ALREADY_EXISTS",w[w.PERMISSION_DENIED=7]="PERMISSION_DENIED",w[w.UNAUTHENTICATED=16]="UNAUTHENTICATED",w[w.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",w[w.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",w[w.ABORTED=10]="ABORTED",w[w.OUT_OF_RANGE=11]="OUT_OF_RANGE",w[w.UNIMPLEMENTED=12]="UNIMPLEMENTED",w[w.INTERNAL=13]="INTERNAL",w[w.UNAVAILABLE=14]="UNAVAILABLE",w[w.DATA_LOSS=15]="DATA_LOSS";function Mi(){return typeof document<"u"?document:null}class of{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=i,this.yo=s,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),i=Math.max(0,Date.now()-this.Eo),s=Math.max(0,n-i);s>0&&Q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Je,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new Xs(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(re.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function af(t,e){if(Ys("AsyncQueue",`${e}: ${t}`),gl(t))return new oe(re.UNAVAILABLE,`${e}: ${t}`);throw t}function lf(t,e,n,i){if(e===!0&&i===!0)throw new oe(re.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=new Map;class lo{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new oe(re.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new oe(re.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,lf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new oe(re.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new oe(re.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lo(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Xd;switch(n.type){case"gapi":const i=n.client;return new Zd(i,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new oe(re.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ao.get(e);n&&(Q("ComponentProvider","Removing Datastore"),ao.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=q.UNAUTHENTICATED,this.clientId=sf.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{Q("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(Q("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new oe(re.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Je;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=af(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}class uf{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new of(this,"async_queue_retry"),this.Wc=()=>{const n=Mi();n&&Q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Mi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Mi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Je;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!gl(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(i=>{this.Kc=i,this.Gc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw Ys("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Gc=!1,i))));return this.Bc=n,n}enqueueAfterDelay(e,n,i){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const s=Xs.createAndSchedule(this,e,n,i,r=>this.Yc(r));return this.Uc.push(s),s}zc(){this.Kc&&_l()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class df extends hf{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new uf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ff(this),this._firestoreClient.terminate()}}function ff(t){var e;const n=t._freezeSettings(),i=function(s,r,o,a){return new rf(s,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new cf(t._authCredentials,t._appCheckCredentials,t._queue,i)}(function(t,e=!0){(function(n){li=n})(qn),je(new we("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new df(new Qd(n.getProvider("auth-internal")),new tf(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new oe(re.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rn(a.options.projectId,l)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),se(ro,"3.8.0",t),se(ro,"3.8.0","esm2017")})();const ho="@firebase/database",co="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ml="";function pf(t){ml=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),x(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:At(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return me(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new _f(e)}}catch{}return new gf},Fe=yl("localStorage"),as=yl("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=new zn("@firebase/database"),mf=function(){let t=1;return function(){return t++}}(),vl=function(t){const e=lc(t),n=new sc;n.update(e);const i=n.digest();return vs.encodeByteArray(i)},en=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=en.apply(null,i):typeof i=="object"?e+=x(i):e+=i,e+=" "}return e};let He=null,uo=!0;const yf=function(t,e){f(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ze.logLevel=b.VERBOSE,He=Ze.log.bind(Ze),e&&as.set("logging_enabled",!0)):typeof t=="function"?He=t:(He=null,as.remove("logging_enabled"))},j=function(...t){if(uo===!0&&(uo=!1,He===null&&as.get("logging_enabled")===!0&&yf(!0)),He){const e=en.apply(null,t);He(e)}},tn=function(t){return function(...e){j(t,...e)}},ls=function(...t){const e="FIREBASE INTERNAL ERROR: "+en(...t);Ze.error(e)},ge=function(...t){const e=`FIREBASE FATAL ERROR: ${en(...t)}`;throw Ze.error(e),new Error(e)},Y=function(...t){const e="FIREBASE WARNING: "+en(...t);Ze.warn(e)},vf=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Y("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},El=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Ef=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},it="[MIN_NAME]",$e="[MAX_NAME]",ut=function(t,e){if(t===e)return 0;if(t===it||e===$e)return-1;if(e===it||t===$e)return 1;{const n=fo(t),i=fo(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},Cf=function(t,e){return t===e?0:t<e?-1:1},_t=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+x(e))},Qs=function(t){if(typeof t!="object"||t===null)return x(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=x(e[i]),n+=":",n+=Qs(t[e[i]]);return n+="}",n},Cl=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function X(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Il=function(t){f(!El(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const h=[];for(l=n;l;l-=1)h.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)h.push(r%2?1:0),r=Math.floor(r/2);h.push(s?1:0),h.reverse();const c=h.join("");let u="";for(l=0;l<64;l+=8){let d=parseInt(c.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},If=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},wf=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Tf(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const Sf=new RegExp("^-?(0*)\\d{1,10}$"),bf=-2147483648,Nf=2147483647,fo=function(t){if(Sf.test(t)){const e=Number(t);if(e>=bf&&e<=Nf)return e}return null},dt=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Y("Exception was thrown by user callback.",n),e},Math.floor(0))}},Af=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Tt=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Y(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(j("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Y(e)}}class et{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}et.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js="5",wl="v",Tl="s",Sl="r",bl="f",Nl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Al="ls",Rl="p",hs="ac",kl="websocket",Dl="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n,i,s,r=!1,o="",a=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Fe.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Fe.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Df(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ol(t,e,n){f(typeof e=="string","typeof type must == string"),f(typeof n=="object","typeof params must == object");let i;if(e===kl)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Dl)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Df(t)&&(n.ns=t.namespace);const s=[];return X(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(){this.counters_={}}incrementCounter(e,n=1){me(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Bh(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li={},Fi={};function Zs(t){const e=t.toString();return Li[e]||(Li[e]=new Pf),Li[e]}function Of(t,e){const n=t.toString();return Fi[n]||(Fi[n]=e()),Fi[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&dt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po="start",Mf="close",Lf="pLPCommand",Ff="pRTLPCB",xl="id",Ml="pw",Ll="ser",Uf="cb",Bf="seg",Hf="ts",Wf="d",jf="dframe",Fl=1870,Ul=30,$f=Fl-Ul,Vf=25e3,Gf=3e4;class Ye{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=tn(e),this.stats_=Zs(n),this.urlFn=l=>(this.appCheckToken&&(l[hs]=this.appCheckToken),Ol(n,Dl,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new xf(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Gf)),Ef(()=>{if(this.isClosed_)return;this.scriptTagHolder=new er((...r)=>{const[o,a,l,h,c]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===po)this.id=a,this.password=l;else if(o===Mf)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[po]="t",i[Ll]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Uf]=this.scriptTagHolder.uniqueCallbackIdentifier),i[wl]=Js,this.transportSessionId&&(i[Tl]=this.transportSessionId),this.lastSessionId&&(i[Al]=this.lastSessionId),this.applicationId&&(i[Rl]=this.applicationId),this.appCheckToken&&(i[hs]=this.appCheckToken),typeof location<"u"&&location.hostname&&Nl.test(location.hostname)&&(i[Sl]=bl);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ye.forceAllow_=!0}static forceDisallow(){Ye.forceDisallow_=!0}static isAvailable(){return Ye.forceAllow_?!0:!Ye.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!If()&&!wf()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=x(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=zo(n),s=Cl(i,$f);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[jf]="t",i[xl]=e,i[Ml]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=x(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class er{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=mf(),window[Lf+this.uniqueCallbackIdentifier]=e,window[Ff+this.uniqueCallbackIdentifier]=n,this.myIFrame=er.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){j("frame writing exception"),a.stack&&j(a.stack),j(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||j("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[xl]=this.myID,e[Ml]=this.myPW,e[Ll]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ul+i.length<=Fl;){const o=this.pendingSegs.shift();i=i+"&"+Bf+s+"="+o.seg+"&"+Hf+s+"="+o.ts+"&"+Wf+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(Vf)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{j("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf=16384,qf=45e3;let kn=null;typeof MozWebSocket<"u"?kn=MozWebSocket:typeof WebSocket<"u"&&(kn=WebSocket);class Z{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=tn(this.connId),this.stats_=Zs(n),this.connURL=Z.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[wl]=Js,typeof location<"u"&&location.hostname&&Nl.test(location.hostname)&&(o[Sl]=bl),n&&(o[Tl]=n),i&&(o[Al]=i),s&&(o[hs]=s),r&&(o[Rl]=r),Ol(e,kl,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Fe.set("previous_websocket_failure",!0);try{let i;Yo(),this.mySock=new kn(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Z.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&kn!==null&&!Z.forceDisallow_}static previouslyFailed(){return Fe.isInMemoryStorage||Fe.get("previous_websocket_failure")===!0}markConnectionHealthy(){Fe.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=At(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(f(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=x(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Cl(n,zf);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(qf))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Z.responsesRequiredToBeHealthy=2;Z.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ye,Z]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Z&&Z.isAvailable();let i=n&&!Z.previouslyFailed();if(e.webSocketOnly&&(n||Y("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Z];else{const s=this.transports_=[];for(const r of Ft.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Ft.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ft.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf=6e4,Yf=5e3,Xf=10*1024,Qf=100*1024,Ui="t",_o="d",Jf="s",go="r",Zf="e",mo="o",yo="a",vo="n",Eo="p",ep="h";class tp{constructor(e,n,i,s,r,o,a,l,h,c){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=h,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=tn("c:"+this.id+":"),this.transportManager_=new Ft(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Tt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Qf?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Xf?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ui in e){const n=e[Ui];n===yo?this.upgradeIfSecondaryHealthy_():n===go?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===mo&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=_t("t",e),i=_t("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Eo,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:yo,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:vo,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=_t("t",e),i=_t("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=_t(Ui,e);if(_o in e){const i=e[_o];if(n===ep)this.onHandshake_(i);else if(n===vo){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Jf?this.onConnectionShutdown_(i):n===go?this.onReset_(i):n===Zf?ls("Server Error: "+i):n===mo?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ls("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Js!==i&&Y("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Tt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Kf))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Tt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Yf))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Eo,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Fe.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e){this.allowedEvents_=e,this.listeners_={},f(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){f(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Hl{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Es()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Dn}getInitialEvent(e){return f(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=32,Io=768;class N{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function T(){return new N("")}function v(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Te(t){return t.pieces_.length-t.pieceNum_}function A(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new N(t.pieces_,e)}function Wl(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function np(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function jl(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function $l(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new N(e,0)}function M(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof N)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new N(n,0)}function C(t){return t.pieceNum_>=t.pieces_.length}function z(t,e){const n=v(t),i=v(e);if(n===null)return e;if(n===i)return z(A(t),A(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function tr(t,e){if(Te(t)!==Te(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function ee(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Te(t)>Te(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class ip{constructor(e,n){this.errorPrefix_=n,this.parts_=jl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Gn(this.parts_[i]);Vl(this)}}function sp(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Gn(e),Vl(t)}function rp(t){const e=t.parts_.pop();t.byteLength_-=Gn(e),t.parts_.length>0&&(t.byteLength_-=1)}function Vl(t){if(t.byteLength_>Io)throw new Error(t.errorPrefix_+"has a key path longer than "+Io+" bytes ("+t.byteLength_+").");if(t.parts_.length>Co)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Co+") or object contains a cycle "+Oe(t))}function Oe(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends Hl{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new nr}getInitialEvent(e){return f(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=1e3,op=60*5*1e3,wo=30*1e3,ap=1.3,lp=3e4,hp="server_kill",To=3;class pe extends Bl{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=pe.nextPersistentConnectionId_++,this.log_=tn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=gt,this.maxReconnectDelay_=op,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Yo())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");nr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Dn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(x(r)),f(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new Vn,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),f(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,h=a.s;pe.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),h!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(h,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&me(e,"w")){const i=nt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Y(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ic(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=wo)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=nc(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+x(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ls("Unrecognized action received from server: "+x(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){f(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=gt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=gt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>lp&&(this.reconnectDelay_=gt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ap)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+pe.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},h=function(u){f(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:h};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?j("getToken() completed but was canceled"):(j("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new tp(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,p=>{Y(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(hp)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Y(u),l())}}}interrupt(e){j("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){j("Resuming connection for reason: "+e),delete this.interruptReasons_[e],kr(this.interruptReasons_)&&(this.reconnectDelay_=gt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>Qs(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new N(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){j("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=To&&(this.reconnectDelay_=wo,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){j("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=To&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ml.replace(/\./g,"-")]=1,Es()?e["framework.cordova"]=1:Ko()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Dn.getInstance().currentlyOnline();return kr(this.interruptReasons_)&&e}}pe.nextPersistentConnectionId_=0;pe.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new E(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new E(it,e),s=new E(it,n);return this.compare(i,s)!==0}minPost(){return E.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dn;class Gl extends hi{static get __EMPTY_NODE(){return dn}static set __EMPTY_NODE(e){dn=e}compare(e,n){return ut(e.name,n.name)}isDefinedOn(e){throw at("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return E.MIN}maxPost(){return new E($e,dn)}makePost(e,n){return f(typeof e=="string","KeyIndex indexValue must always be a string."),new E(e,dn)}toString(){return".key"}}const tt=new Gl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class F{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i!=null?i:F.RED,this.left=s!=null?s:K.EMPTY_NODE,this.right=r!=null?r:K.EMPTY_NODE}copy(e,n,i,s,r){return new F(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return K.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return K.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,F.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,F.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}F.RED=!0;F.BLACK=!1;class cp{copy(e,n,i,s,r){return this}insert(e,n,i){return new F(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class K{constructor(e,n=K.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new K(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,F.BLACK,null,null))}remove(e){return new K(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,F.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new fn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new fn(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new fn(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new fn(this.root_,null,this.comparator_,!0,e)}}K.EMPTY_NODE=new cp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(t,e){return ut(t.name,e.name)}function ir(t,e){return ut(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cs;function dp(t){cs=t}const zl=function(t){return typeof t=="number"?"number:"+Il(t):"string:"+t},ql=function(t){if(t.isLeafNode()){const e=t.val();f(typeof e=="string"||typeof e=="number"||typeof e=="object"&&me(e,".sv"),"Priority must be a string or number.")}else f(t===cs||t.isEmpty(),"priority of unexpected type.");f(t===cs||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let So;class L{constructor(e,n=L.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,f(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ql(this.priorityNode_)}static set __childrenNodeConstructor(e){So=e}static get __childrenNodeConstructor(){return So}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new L(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:L.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return C(e)?this:v(e)===".priority"?this.priorityNode_:L.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:L.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=v(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(f(i!==".priority"||Te(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,L.__childrenNodeConstructor.EMPTY_NODE.updateChild(A(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+zl(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Il(this.value_):e+=this.value_,this.lazyHash_=vl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===L.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof L.__childrenNodeConstructor?-1:(f(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=L.VALUE_TYPE_ORDER.indexOf(n),r=L.VALUE_TYPE_ORDER.indexOf(i);return f(s>=0,"Unknown leaf type: "+n),f(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}L.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kl,Yl;function fp(t){Kl=t}function pp(t){Yl=t}class _p extends hi{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?ut(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return E.MIN}maxPost(){return new E($e,new L("[PRIORITY-POST]",Yl))}makePost(e,n){const i=Kl(e);return new E(n,new L("[PRIORITY-POST]",i))}toString(){return".priority"}}const D=new _p;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp=Math.log(2);class mp{constructor(e){const n=r=>parseInt(Math.log(r)/gp,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Pn=function(t,e,n,i){t.sort(e);const s=function(l,h){const c=h-l;let u,d;if(c===0)return null;if(c===1)return u=t[l],d=n?n(u):u,new F(d,u.node,F.BLACK,null,null);{const p=parseInt(c/2,10)+l,g=s(l,p),I=s(p+1,h);return u=t[p],d=n?n(u):u,new F(d,u.node,F.BLACK,g,I)}},r=function(l){let h=null,c=null,u=t.length;const d=function(g,I){const O=u-g,ue=u;u-=g;const ke=s(O+1,ue),De=t[O],an=n?n(De):De;p(new F(an,De.node,I,null,ke))},p=function(g){h?(h.left=g,h=g):(c=g,h=g)};for(let g=0;g<l.count;++g){const I=l.nextBitIsOne(),O=Math.pow(2,l.count-(g+1));I?d(O,F.BLACK):(d(O,F.BLACK),d(O,F.RED))}return c},o=new mp(t.length),a=r(o);return new K(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bi;const qe={};class fe{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return f(qe&&D,"ChildrenNode.ts has not been loaded"),Bi=Bi||new fe({".priority":qe},{".priority":D}),Bi}get(e){const n=nt(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof K?n:null}hasIndex(e){return me(this.indexSet_,e.toString())}addIndex(e,n){f(e!==tt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(E.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Pn(i,e.getCompare()):a=qe;const l=e.toString(),h=Object.assign({},this.indexSet_);h[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new fe(c,h)}addToIndexes(e,n){const i=mn(this.indexes_,(s,r)=>{const o=nt(this.indexSet_,r);if(f(o,"Missing index implementation for "+r),s===qe)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(E.Wrap);let h=l.getNext();for(;h;)h.name!==e.name&&a.push(h),h=l.getNext();return a.push(e),Pn(a,o.getCompare())}else return qe;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new E(e.name,a))),l.insert(e,e.node)}});return new fe(i,this.indexSet_)}removeFromIndexes(e,n){const i=mn(this.indexes_,s=>{if(s===qe)return s;{const r=n.get(e.name);return r?s.remove(new E(e.name,r)):s}});return new fe(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mt;class m{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&ql(this.priorityNode_),this.children_.isEmpty()&&f(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return mt||(mt=new m(new K(ir),null,fe.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||mt}updatePriority(e){return this.children_.isEmpty()?this:new m(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?mt:n}}getChild(e){const n=v(e);return n===null?this:this.getImmediateChild(n).getChild(A(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(f(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new E(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?mt:this.priorityNode_;return new m(s,o,r)}}updateChild(e,n){const i=v(e);if(i===null)return n;{f(v(e)!==".priority"||Te(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(A(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(D,(o,a)=>{n[o]=a.val(e),i++,r&&m.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+zl(this.getPriority().val())+":"),this.forEachChild(D,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":vl(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new E(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new E(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new E(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,E.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,E.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===nn?-1:0}withIndex(e){if(e===tt||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new m(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===tt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(D),s=n.getIterator(D);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===tt?null:this.indexMap_.get(e.toString())}}m.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class yp extends m{constructor(){super(new K(ir),m.EMPTY_NODE,fe.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return m.EMPTY_NODE}isEmpty(){return!1}}const nn=new yp;Object.defineProperties(E,{MIN:{value:new E(it,m.EMPTY_NODE)},MAX:{value:new E($e,nn)}});Gl.__EMPTY_NODE=m.EMPTY_NODE;L.__childrenNodeConstructor=m;dp(nn);pp(nn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp=!0;function U(t,e=null){if(t===null)return m.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),f(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new L(n,U(e))}if(!(t instanceof Array)&&vp){const n=[];let i=!1;if(X(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=U(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new E(o,l)))}}),n.length===0)return m.EMPTY_NODE;const r=Pn(n,up,o=>o.name,ir);if(i){const o=Pn(n,D.getCompare());return new m(r,U(e),new fe({".priority":o},{".priority":D}))}else return new m(r,U(e),fe.Default)}else{let n=m.EMPTY_NODE;return X(t,(i,s)=>{if(me(t,i)&&i.substring(0,1)!=="."){const r=U(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(U(e))}}fp(U);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep extends hi{constructor(e){super(),this.indexPath_=e,f(!C(e)&&v(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?ut(e.name,n.name):r}makePost(e,n){const i=U(e),s=m.EMPTY_NODE.updateChild(this.indexPath_,i);return new E(n,s)}maxPost(){const e=m.EMPTY_NODE.updateChild(this.indexPath_,nn);return new E($e,e)}toString(){return jl(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp extends hi{compare(e,n){const i=e.node.compareTo(n.node);return i===0?ut(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return E.MIN}maxPost(){return E.MAX}makePost(e,n){const i=U(e);return new E(n,i)}toString(){return".value"}}const Ip=new Cp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(t){return{type:"value",snapshotNode:t}}function st(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ut(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Bt(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function wp(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){f(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(Ut(n,a)):f(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(st(n,i)):o.trackChildChange(Bt(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(D,(s,r)=>{n.hasChild(s)||i.trackChildChange(Ut(s,r))}),n.isLeafNode()||n.forEachChild(D,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Bt(s,r,o))}else i.trackChildChange(st(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?m.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.indexedFilter_=new sr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ht.getStartPost_(e),this.endPost_=Ht.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,s,r,o){return this.matches(new E(n,i))||(i=m.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=m.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(m.EMPTY_NODE);const r=this;return n.forEachChild(D,(o,a)=>{r.matches(new E(o,a))||(s=s.updateImmediateChild(o,m.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Ht(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new E(n,i))||(i=m.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=m.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=m.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(m.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,m.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,p)=>u(p,d)}else o=this.index_.getCompare();const a=e;f(a.numChildren()===this.limit_,"");const l=new E(n,i),h=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let d=s.getChildAfterChild(this.index_,h,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(c&&!i.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(Bt(n,i,u)),a.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(Ut(n,u));const I=a.updateImmediateChild(n,m.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(st(d.name,d.node)),I.updateImmediateChild(d.name,d.node)):I}}else return i.isEmpty()?e:c&&o(h,l)>=0?(r!=null&&(r.trackChildChange(Ut(h.name,h.node)),r.trackChildChange(st(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(h.name,m.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=D}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return f(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return f(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:it}hasEnd(){return this.endSet_}getIndexEndValue(){return f(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return f(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:$e}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return f(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===D}copy(){const e=new rr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Sp(t){return t.loadsAllData()?new sr(t.getIndex()):t.hasLimit()?new Tp(t):new Ht(t)}function bo(t){const e={};if(t.isDefault())return e;let n;if(t.index_===D?n="$priority":t.index_===Ip?n="$value":t.index_===tt?n="$key":(f(t.index_ instanceof Ep,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=x(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=x(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+x(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=x(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+x(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function No(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==D&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Bl{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=tn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(f(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=On.getListenId_(e,i),a={};this.listens_[o]=a;const l=bo(e._queryParams);this.restRequest_(r+".json",l,(h,c)=>{let u=c;if(h===404&&(u=null,h=null),h===null&&this.onDataUpdate_(r,u,!1,i),nt(this.listens_,o)===a){let d;h?h===401?d="permission_denied":d="rest_error:"+h:d="ok",s(d,null)}})}unlisten(e,n){const i=On.getListenId_(e,n);delete this.listens_[i]}get(e){const n=bo(e._queryParams),i=e._path.toString(),s=new Vn;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Is(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=At(a.responseText)}catch{Y("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Y("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(){this.rootNode_=m.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(){return{value:null,children:new Map}}function Ql(t,e,n){if(C(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=v(e);t.children.has(i)||t.children.set(i,xn());const s=t.children.get(i);e=A(e),Ql(s,e,n)}}function us(t,e,n){t.value!==null?n(e,t.value):Np(t,(i,s)=>{const r=new N(e.toString()+"/"+i);us(s,r,n)})}function Np(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&X(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=10*1e3,Rp=30*1e3,kp=5*60*1e3;class Dp{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Ap(e);const i=Ao+(Rp-Ao)*Math.random();Tt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;X(e,(s,r)=>{r>0&&me(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Tt(this.reportStats_.bind(this),Math.floor(Math.random()*2*kp))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(te||(te={}));function Jl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function or(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ar(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=te.ACK_USER_WRITE,this.source=Jl()}operationForChild(e){if(C(this.path)){if(this.affectedTree.value!=null)return f(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new N(e));return new Mn(T(),n,this.revert)}}else return f(v(this.path)===e,"operationForChild called for unrelated child."),new Mn(A(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,n){this.source=e,this.path=n,this.type=te.LISTEN_COMPLETE}operationForChild(e){return C(this.path)?new Wt(this.source,T()):new Wt(this.source,A(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=te.OVERWRITE}operationForChild(e){return C(this.path)?new Ve(this.source,T(),this.snap.getImmediateChild(e)):new Ve(this.source,A(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=te.MERGE}operationForChild(e){if(C(this.path)){const n=this.children.subtree(new N(e));return n.isEmpty()?null:n.value?new Ve(this.source,T(),n.value):new jt(this.source,T(),n)}else return f(v(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new jt(this.source,A(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(C(e))return this.isFullyInitialized()&&!this.filtered_;const n=v(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Op(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(wp(o.childName,o.snapshotNode))}),yt(t,s,"child_removed",e,i,n),yt(t,s,"child_added",e,i,n),yt(t,s,"child_moved",r,i,n),yt(t,s,"child_changed",e,i,n),yt(t,s,"value",e,i,n),s}function yt(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>Mp(t,a,l)),o.forEach(a=>{const l=xp(t,a,r);s.forEach(h=>{h.respondsTo(a.type)&&e.push(h.createEvent(l,t.query_))})})}function xp(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Mp(t,e,n){if(e.childName==null||n.childName==null)throw at("Should only compare child_ events.");const i=new E(e.childName,e.snapshotNode),s=new E(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(t,e){return{eventCache:t,serverCache:e}}function St(t,e,n,i){return ci(new Se(e,n,i),t.serverCache)}function Zl(t,e,n,i){return ci(t.eventCache,new Se(e,n,i))}function Ln(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ge(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hi;const Lp=()=>(Hi||(Hi=new K(Cf)),Hi);class R{constructor(e,n=Lp()){this.value=e,this.children=n}static fromObject(e){let n=new R(null);return X(e,(i,s)=>{n=n.set(new N(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:T(),value:this.value};if(C(e))return null;{const i=v(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(A(e),n);return r!=null?{path:M(new N(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(C(e))return this;{const n=v(e),i=this.children.get(n);return i!==null?i.subtree(A(e)):new R(null)}}set(e,n){if(C(e))return new R(n,this.children);{const i=v(e),r=(this.children.get(i)||new R(null)).set(A(e),n),o=this.children.insert(i,r);return new R(this.value,o)}}remove(e){if(C(e))return this.children.isEmpty()?new R(null):new R(null,this.children);{const n=v(e),i=this.children.get(n);if(i){const s=i.remove(A(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new R(null):new R(this.value,r)}else return this}}get(e){if(C(e))return this.value;{const n=v(e),i=this.children.get(n);return i?i.get(A(e)):null}}setTree(e,n){if(C(e))return n;{const i=v(e),r=(this.children.get(i)||new R(null)).setTree(A(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new R(this.value,o)}}fold(e){return this.fold_(T(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(M(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,T(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(C(e))return null;{const r=v(e),o=this.children.get(r);return o?o.findOnPath_(A(e),M(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,T(),n)}foreachOnPath_(e,n,i){if(C(e))return this;{this.value&&i(n,this.value);const s=v(e),r=this.children.get(s);return r?r.foreachOnPath_(A(e),M(n,s),i):new R(null)}}foreach(e){this.foreach_(T(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(M(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.writeTree_=e}static empty(){return new ne(new R(null))}}function bt(t,e,n){if(C(e))return new ne(new R(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=z(s,e);return r=r.updateChild(o,n),new ne(t.writeTree_.set(s,r))}else{const s=new R(n),r=t.writeTree_.setTree(e,s);return new ne(r)}}}function Ro(t,e,n){let i=t;return X(n,(s,r)=>{i=bt(i,M(e,s),r)}),i}function ko(t,e){if(C(e))return ne.empty();{const n=t.writeTree_.setTree(e,new R(null));return new ne(n)}}function ds(t,e){return ze(t,e)!=null}function ze(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(z(n.path,e)):null}function Do(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(D,(i,s)=>{e.push(new E(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new E(i,s.value))}),e}function Ce(t,e){if(C(e))return t;{const n=ze(t,e);return n!=null?new ne(new R(n)):new ne(t.writeTree_.subtree(e))}}function fs(t){return t.writeTree_.isEmpty()}function rt(t,e){return eh(T(),t.writeTree_,e)}function eh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(f(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=eh(M(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(M(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t,e){return sh(e,t)}function Fp(t,e,n,i,s){f(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=bt(t.visibleWrites,e,n)),t.lastWriteId=i}function Up(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function Bp(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);f(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Hp(a,i.path)?s=!1:ee(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Wp(t),!0;if(i.snap)t.visibleWrites=ko(t.visibleWrites,i.path);else{const a=i.children;X(a,l=>{t.visibleWrites=ko(t.visibleWrites,M(i.path,l))})}return!0}else return!1}function Hp(t,e){if(t.snap)return ee(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ee(M(t.path,n),e))return!0;return!1}function Wp(t){t.visibleWrites=th(t.allWrites,jp,T()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function jp(t){return t.visible}function th(t,e,n){let i=ne.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)ee(n,o)?(a=z(n,o),i=bt(i,a,r.snap)):ee(o,n)&&(a=z(o,n),i=bt(i,T(),r.snap.getChild(a)));else if(r.children){if(ee(n,o))a=z(n,o),i=Ro(i,a,r.children);else if(ee(o,n))if(a=z(o,n),C(a))i=Ro(i,T(),r.children);else{const l=nt(r.children,v(a));if(l){const h=l.getChild(A(a));i=bt(i,T(),h)}}}else throw at("WriteRecord should have .snap or .children")}}return i}function nh(t,e,n,i,s){if(!i&&!s){const r=ze(t.visibleWrites,e);if(r!=null)return r;{const o=Ce(t.visibleWrites,e);if(fs(o))return n;if(n==null&&!ds(o,T()))return null;{const a=n||m.EMPTY_NODE;return rt(o,a)}}}else{const r=Ce(t.visibleWrites,e);if(!s&&fs(r))return n;if(!s&&n==null&&!ds(r,T()))return null;{const o=function(h){return(h.visible||s)&&(!i||!~i.indexOf(h.writeId))&&(ee(h.path,e)||ee(e,h.path))},a=th(t.allWrites,o,e),l=n||m.EMPTY_NODE;return rt(a,l)}}}function $p(t,e,n){let i=m.EMPTY_NODE;const s=ze(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(D,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Ce(t.visibleWrites,e);return n.forEachChild(D,(o,a)=>{const l=rt(Ce(r,new N(o)),a);i=i.updateImmediateChild(o,l)}),Do(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Ce(t.visibleWrites,e);return Do(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Vp(t,e,n,i,s){f(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=M(e,n);if(ds(t.visibleWrites,r))return null;{const o=Ce(t.visibleWrites,r);return fs(o)?s.getChild(n):rt(o,s.getChild(n))}}function Gp(t,e,n,i){const s=M(e,n),r=ze(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Ce(t.visibleWrites,s);return rt(o,i.getNode().getImmediateChild(n))}else return null}function zp(t,e){return ze(t.visibleWrites,e)}function qp(t,e,n,i,s,r,o){let a;const l=Ce(t.visibleWrites,e),h=ze(l,T());if(h!=null)a=h;else if(n!=null)a=rt(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],u=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let p=d.getNext();for(;p&&c.length<s;)u(p,i)!==0&&c.push(p),p=d.getNext();return c}else return[]}function Kp(){return{visibleWrites:ne.empty(),allWrites:[],lastWriteId:-1}}function Fn(t,e,n,i){return nh(t.writeTree,t.treePath,e,n,i)}function lr(t,e){return $p(t.writeTree,t.treePath,e)}function Po(t,e,n,i){return Vp(t.writeTree,t.treePath,e,n,i)}function Un(t,e){return zp(t.writeTree,M(t.treePath,e))}function Yp(t,e,n,i,s,r){return qp(t.writeTree,t.treePath,e,n,i,s,r)}function hr(t,e,n){return Gp(t.writeTree,t.treePath,e,n)}function ih(t,e){return sh(M(t.treePath,e),t.writeTree)}function sh(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;f(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),f(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Bt(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,Ut(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,st(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Bt(i,e.snapshotNode,s.oldSnap));else throw at("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const rh=new Qp;class cr{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Se(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return hr(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ge(this.viewCache_),r=Yp(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(t){return{filter:t}}function Zp(t,e){f(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),f(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function e_(t,e,n,i,s){const r=new Xp;let o,a;if(n.type===te.OVERWRITE){const h=n;h.source.fromUser?o=ps(t,e,h.path,h.snap,i,s,r):(f(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.serverCache.isFiltered()&&!C(h.path),o=Bn(t,e,h.path,h.snap,i,s,a,r))}else if(n.type===te.MERGE){const h=n;h.source.fromUser?o=n_(t,e,h.path,h.children,i,s,r):(f(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.serverCache.isFiltered(),o=_s(t,e,h.path,h.children,i,s,a,r))}else if(n.type===te.ACK_USER_WRITE){const h=n;h.revert?o=r_(t,e,h.path,i,s,r):o=i_(t,e,h.path,h.affectedTree,i,s,r)}else if(n.type===te.LISTEN_COMPLETE)o=s_(t,e,n.path,i,r);else throw at("Unknown operation type: "+n.type);const l=r.getChanges();return t_(e,o,l),{viewCache:o,changes:l}}function t_(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Ln(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Xl(Ln(e)))}}function oh(t,e,n,i,s,r){const o=e.eventCache;if(Un(i,n)!=null)return e;{let a,l;if(C(n))if(f(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=Ge(e),c=h instanceof m?h:m.EMPTY_NODE,u=lr(i,c);a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const h=Fn(i,Ge(e));a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const h=v(n);if(h===".priority"){f(Te(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const u=Po(i,n,c,l);u!=null?a=t.filter.updatePriority(c,u):a=o.getNode()}else{const c=A(n);let u;if(o.isCompleteForChild(h)){l=e.serverCache.getNode();const d=Po(i,n,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(h).updateChild(c,d):u=o.getNode().getImmediateChild(h)}else u=hr(i,h,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),h,u,c,s,r):a=o.getNode()}}return St(e,a,o.isFullyInitialized()||C(n),t.filter.filtersNodes())}}function Bn(t,e,n,i,s,r,o,a){const l=e.serverCache;let h;const c=o?t.filter:t.filter.getIndexedFilter();if(C(n))h=c.updateFullNode(l.getNode(),i,null);else if(c.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,i);h=c.updateFullNode(l.getNode(),p,null)}else{const p=v(n);if(!l.isCompleteForPath(n)&&Te(n)>1)return e;const g=A(n),O=l.getNode().getImmediateChild(p).updateChild(g,i);p===".priority"?h=c.updatePriority(l.getNode(),O):h=c.updateChild(l.getNode(),p,O,g,rh,null)}const u=Zl(e,h,l.isFullyInitialized()||C(n),c.filtersNodes()),d=new cr(s,u,r);return oh(t,u,n,s,d,a)}function ps(t,e,n,i,s,r,o){const a=e.eventCache;let l,h;const c=new cr(s,e,r);if(C(n))h=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=St(e,h,!0,t.filter.filtersNodes());else{const u=v(n);if(u===".priority")h=t.filter.updatePriority(e.eventCache.getNode(),i),l=St(e,h,a.isFullyInitialized(),a.isFiltered());else{const d=A(n),p=a.getNode().getImmediateChild(u);let g;if(C(d))g=i;else{const I=c.getCompleteChild(u);I!=null?Wl(d)===".priority"&&I.getChild($l(d)).isEmpty()?g=I:g=I.updateChild(d,i):g=m.EMPTY_NODE}if(p.equals(g))l=e;else{const I=t.filter.updateChild(a.getNode(),u,g,d,c,o);l=St(e,I,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Oo(t,e){return t.eventCache.isCompleteForChild(e)}function n_(t,e,n,i,s,r,o){let a=e;return i.foreach((l,h)=>{const c=M(n,l);Oo(e,v(c))&&(a=ps(t,a,c,h,s,r,o))}),i.foreach((l,h)=>{const c=M(n,l);Oo(e,v(c))||(a=ps(t,a,c,h,s,r,o))}),a}function xo(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function _s(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,h;C(n)?h=i:h=new R(null).setTree(n,i);const c=e.serverCache.getNode();return h.children.inorderTraversal((u,d)=>{if(c.hasChild(u)){const p=e.serverCache.getNode().getImmediateChild(u),g=xo(t,p,d);l=Bn(t,l,new N(u),g,s,r,o,a)}}),h.children.inorderTraversal((u,d)=>{const p=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!c.hasChild(u)&&!p){const g=e.serverCache.getNode().getImmediateChild(u),I=xo(t,g,d);l=Bn(t,l,new N(u),I,s,r,o,a)}}),l}function i_(t,e,n,i,s,r,o){if(Un(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(C(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Bn(t,e,n,l.getNode().getChild(n),s,r,a,o);if(C(n)){let h=new R(null);return l.getNode().forEachChild(tt,(c,u)=>{h=h.set(new N(c),u)}),_s(t,e,n,h,s,r,a,o)}else return e}else{let h=new R(null);return i.foreach((c,u)=>{const d=M(n,c);l.isCompleteForPath(d)&&(h=h.set(c,l.getNode().getChild(d)))}),_s(t,e,n,h,s,r,a,o)}}function s_(t,e,n,i,s){const r=e.serverCache,o=Zl(e,r.getNode(),r.isFullyInitialized()||C(n),r.isFiltered());return oh(t,o,n,i,rh,s)}function r_(t,e,n,i,s,r){let o;if(Un(i,n)!=null)return e;{const a=new cr(i,e,s),l=e.eventCache.getNode();let h;if(C(n)||v(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Fn(i,Ge(e));else{const u=e.serverCache.getNode();f(u instanceof m,"serverChildren would be complete if leaf node"),c=lr(i,u)}c=c,h=t.filter.updateFullNode(l,c,r)}else{const c=v(n);let u=hr(i,c,e.serverCache);u==null&&e.serverCache.isCompleteForChild(c)&&(u=l.getImmediateChild(c)),u!=null?h=t.filter.updateChild(l,c,u,A(n),a,r):e.eventCache.getNode().hasChild(c)?h=t.filter.updateChild(l,c,m.EMPTY_NODE,A(n),a,r):h=l,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Fn(i,Ge(e)),o.isLeafNode()&&(h=t.filter.updateFullNode(h,o,r)))}return o=e.serverCache.isFullyInitialized()||Un(i,T())!=null,St(e,h,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new sr(i.getIndex()),r=Sp(i);this.processor_=Jp(r);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(m.EMPTY_NODE,o.getNode(),null),h=r.updateFullNode(m.EMPTY_NODE,a.getNode(),null),c=new Se(l,o.isFullyInitialized(),s.filtersNodes()),u=new Se(h,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=ci(u,c),this.eventGenerator_=new Pp(this.query_)}get query(){return this.query_}}function a_(t){return t.viewCache_.serverCache.getNode()}function l_(t){return Ln(t.viewCache_)}function h_(t,e){const n=Ge(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!C(e)&&!n.getImmediateChild(v(e)).isEmpty())?n.getChild(e):null}function Mo(t){return t.eventRegistrations_.length===0}function c_(t,e){t.eventRegistrations_.push(e)}function Lo(t,e,n){const i=[];if(n){f(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function Fo(t,e,n,i){e.type===te.MERGE&&e.source.queryId!==null&&(f(Ge(t.viewCache_),"We should always have a full cache before handling merges"),f(Ln(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=e_(t.processor_,s,e,n,i);return Zp(t.processor_,r.viewCache),f(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,ah(t,r.changes,r.viewCache.eventCache.getNode(),null)}function u_(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(D,(r,o)=>{i.push(st(r,o))}),n.isFullyInitialized()&&i.push(Xl(n.getNode())),ah(t,i,n.getNode(),e)}function ah(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return Op(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hn;class lh{constructor(){this.views=new Map}}function d_(t){f(!Hn,"__referenceConstructor has already been defined"),Hn=t}function f_(){return f(Hn,"Reference.ts has not been loaded"),Hn}function p_(t){return t.views.size===0}function ur(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return f(r!=null,"SyncTree gave us an op for an invalid query."),Fo(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(Fo(o,e,n,i));return r}}function hh(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Fn(n,s?i:null),l=!1;a?l=!0:i instanceof m?(a=lr(n,i),l=!1):(a=m.EMPTY_NODE,l=!1);const h=ci(new Se(a,l,!1),new Se(i,s,!1));return new o_(e,h)}return o}function __(t,e,n,i,s,r){const o=hh(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),c_(o,n),u_(o,n)}function g_(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const a=be(t);if(s==="default")for(const[l,h]of t.views.entries())o=o.concat(Lo(h,n,i)),Mo(h)&&(t.views.delete(l),h.query._queryParams.loadsAllData()||r.push(h.query));else{const l=t.views.get(s);l&&(o=o.concat(Lo(l,n,i)),Mo(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!be(t)&&r.push(new(f_())(e._repo,e._path)),{removed:r,events:o}}function ch(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ie(t,e){let n=null;for(const i of t.views.values())n=n||h_(i,e);return n}function uh(t,e){if(e._queryParams.loadsAllData())return di(t);{const i=e._queryIdentifier;return t.views.get(i)}}function dh(t,e){return uh(t,e)!=null}function be(t){return di(t)!=null}function di(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wn;function m_(t){f(!Wn,"__referenceConstructor has already been defined"),Wn=t}function y_(){return f(Wn,"Reference.ts has not been loaded"),Wn}let v_=1;class Uo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new R(null),this.pendingWriteTree_=Kp(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function fh(t,e,n,i,s){return Fp(t.pendingWriteTree_,e,n,i,s),s?rn(t,new Ve(Jl(),e,n)):[]}function Ue(t,e,n=!1){const i=Up(t.pendingWriteTree_,e);if(Bp(t.pendingWriteTree_,e)){let r=new R(null);return i.snap!=null?r=r.set(T(),!0):X(i.children,o=>{r=r.set(new N(o),!0)}),rn(t,new Mn(i.path,r,n))}else return[]}function sn(t,e,n){return rn(t,new Ve(or(),e,n))}function E_(t,e,n){const i=R.fromObject(n);return rn(t,new jt(or(),e,i))}function C_(t,e){return rn(t,new Wt(or(),e))}function I_(t,e,n){const i=fr(t,n);if(i){const s=pr(i),r=s.path,o=s.queryId,a=z(r,e),l=new Wt(ar(o),a);return _r(t,r,l)}else return[]}function jn(t,e,n,i,s=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||dh(o,e))){const l=g_(o,e,n,i);p_(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const h=l.removed;if(a=l.events,!s){const c=h.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(r,(d,p)=>be(p));if(c&&!u){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const p=S_(d);for(let g=0;g<p.length;++g){const I=p[g],O=I.query,ue=mh(t,I);t.listenProvider_.startListening(Nt(O),$t(t,O),ue.hashFn,ue.onComplete)}}}!u&&h.length>0&&!i&&(c?t.listenProvider_.stopListening(Nt(e),null):h.forEach(d=>{const p=t.queryToTagMap.get(fi(d));t.listenProvider_.stopListening(Nt(d),p)}))}b_(t,h)}return a}function ph(t,e,n,i){const s=fr(t,i);if(s!=null){const r=pr(s),o=r.path,a=r.queryId,l=z(o,e),h=new Ve(ar(a),l,n);return _r(t,o,h)}else return[]}function w_(t,e,n,i){const s=fr(t,i);if(s){const r=pr(s),o=r.path,a=r.queryId,l=z(o,e),h=R.fromObject(n),c=new jt(ar(a),l,h);return _r(t,o,c)}else return[]}function gs(t,e,n,i=!1){const s=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(s,(d,p)=>{const g=z(d,s);r=r||Ie(p,g),o=o||be(p)});let a=t.syncPointTree_.get(s);a?(o=o||be(a),r=r||Ie(a,T())):(a=new lh,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=m.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((p,g)=>{const I=Ie(g,T());I&&(r=r.updateImmediateChild(p,I))}));const h=dh(a,e);if(!h&&!e._queryParams.loadsAllData()){const d=fi(e);f(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=N_();t.queryToTagMap.set(d,p),t.tagToQueryMap.set(p,d)}const c=ui(t.pendingWriteTree_,s);let u=__(a,e,n,c,r,l);if(!h&&!o&&!i){const d=uh(a,e);u=u.concat(A_(t,e,d))}return u}function dr(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=z(o,e),h=Ie(a,l);if(h)return h});return nh(s,e,r,n,!0)}function T_(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(h,c)=>{const u=z(h,n);i=i||Ie(c,u)});let s=t.syncPointTree_.get(n);s?i=i||Ie(s,T()):(s=new lh,t.syncPointTree_=t.syncPointTree_.set(n,s));const r=i!=null,o=r?new Se(i,!0,!1):null,a=ui(t.pendingWriteTree_,e._path),l=hh(s,e,a,r?o.getNode():m.EMPTY_NODE,r);return l_(l)}function rn(t,e){return _h(e,t.syncPointTree_,null,ui(t.pendingWriteTree_,T()))}function _h(t,e,n,i){if(C(t.path))return gh(t,e,n,i);{const s=e.get(T());n==null&&s!=null&&(n=Ie(s,T()));let r=[];const o=v(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const h=n?n.getImmediateChild(o):null,c=ih(i,o);r=r.concat(_h(a,l,h,c))}return s&&(r=r.concat(ur(s,t,i,n))),r}}function gh(t,e,n,i){const s=e.get(T());n==null&&s!=null&&(n=Ie(s,T()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,h=ih(i,o),c=t.operationForChild(o);c&&(r=r.concat(gh(c,a,l,h)))}),s&&(r=r.concat(ur(s,t,i,n))),r}function mh(t,e){const n=e.query,i=$t(t,n);return{hashFn:()=>(a_(e)||m.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?I_(t,n._path,i):C_(t,n._path);{const r=Tf(s,n);return jn(t,n,null,r)}}}}function $t(t,e){const n=fi(e);return t.queryToTagMap.get(n)}function fi(t){return t._path.toString()+"$"+t._queryIdentifier}function fr(t,e){return t.tagToQueryMap.get(e)}function pr(t){const e=t.indexOf("$");return f(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new N(t.substr(0,e))}}function _r(t,e,n){const i=t.syncPointTree_.get(e);f(i,"Missing sync point for query tag that we're tracking");const s=ui(t.pendingWriteTree_,e);return ur(i,n,s,null)}function S_(t){return t.fold((e,n,i)=>{if(n&&be(n))return[di(n)];{let s=[];return n&&(s=ch(n)),X(i,(r,o)=>{s=s.concat(o)}),s}})}function Nt(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(y_())(t._repo,t._path):t}function b_(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=fi(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function N_(){return v_++}function A_(t,e,n){const i=e._path,s=$t(t,e),r=mh(t,n),o=t.listenProvider_.startListening(Nt(e),s,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(i);if(s)f(!be(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((h,c,u)=>{if(!C(h)&&c&&be(c))return[di(c).query];{let d=[];return c&&(d=d.concat(ch(c).map(p=>p.query))),X(u,(p,g)=>{d=d.concat(g)}),d}});for(let h=0;h<l.length;++h){const c=l[h];t.listenProvider_.stopListening(Nt(c),$t(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new gr(n)}node(){return this.node_}}class mr{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=M(this.path_,e);return new mr(this.syncTree_,n)}node(){return dr(this.syncTree_,this.path_)}}const R_=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Bo=function(t,e,n){if(!t||typeof t!="object")return t;if(f(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return k_(t[".sv"],e,n);if(typeof t[".sv"]=="object")return D_(t[".sv"],e);f(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},k_=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:f(!1,"Unexpected server value: "+t)}},D_=function(t,e,n){t.hasOwnProperty("increment")||f(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&f(!1,"Unexpected increment value: "+i);const s=e.node();if(f(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},P_=function(t,e,n,i){return yr(e,new mr(n,t),i)},yh=function(t,e,n){return yr(t,new gr(e),n)};function yr(t,e,n){const i=t.getPriority().val(),s=Bo(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Bo(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new L(a,U(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new L(s))),o.forEachChild(D,(a,l)=>{const h=yr(l,e.getImmediateChild(a),n);h!==l&&(r=r.updateImmediateChild(a,h))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Er(t,e){let n=e instanceof N?e:new N(e),i=t,s=v(n);for(;s!==null;){const r=nt(i.node.children,s)||{children:{},childCount:0};i=new vr(s,i,r),n=A(n),s=v(n)}return i}function ft(t){return t.node.value}function vh(t,e){t.node.value=e,ms(t)}function Eh(t){return t.node.childCount>0}function O_(t){return ft(t)===void 0&&!Eh(t)}function pi(t,e){X(t.node.children,(n,i)=>{e(new vr(n,t,i))})}function Ch(t,e,n,i){n&&!i&&e(t),pi(t,s=>{Ch(s,e,!0,i)}),n&&i&&e(t)}function x_(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function on(t){return new N(t.parent===null?t.name:on(t.parent)+"/"+t.name)}function ms(t){t.parent!==null&&M_(t.parent,t.name,t)}function M_(t,e,n){const i=O_(n),s=me(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,ms(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,ms(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_=/[\[\].#$\/\u0000-\u001F\u007F]/,F_=/[\[\].#$\u0000-\u001F\u007F]/,Wi=10*1024*1024,Ih=function(t){return typeof t=="string"&&t.length!==0&&!L_.test(t)},wh=function(t){return typeof t=="string"&&t.length!==0&&!F_.test(t)},U_=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),wh(t)},B_=function(t,e,n,i){i&&e===void 0||Cr(ws(t,"value"),e,n)},Cr=function(t,e,n){const i=n instanceof N?new ip(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Oe(i));if(typeof e=="function")throw new Error(t+"contains a function "+Oe(i)+" with contents = "+e.toString());if(El(e))throw new Error(t+"contains "+e.toString()+" "+Oe(i));if(typeof e=="string"&&e.length>Wi/3&&Gn(e)>Wi)throw new Error(t+"contains a string greater than "+Wi+" utf8 bytes "+Oe(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(X(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ih(o)))throw new Error(t+" contains an invalid key ("+o+") "+Oe(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);sp(i,o),Cr(t,a,i),rp(i)}),s&&r)throw new Error(t+' contains ".value" child '+Oe(i)+" in addition to actual children.")}},Th=function(t,e,n,i){if(!(i&&n===void 0)&&!wh(n))throw new Error(ws(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},H_=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Th(t,e,n,i)},W_=function(t,e){if(v(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},j_=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ih(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!U_(n))throw new Error(ws(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ir(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!tr(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Sh(t,e,n){Ir(t,n),bh(t,i=>tr(i,e))}function le(t,e,n){Ir(t,n),bh(t,i=>ee(i,e)||ee(e,i))}function bh(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(V_(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function V_(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();He&&j("event: "+n.toString()),dt(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_="repo_interrupt",z_=25;class q_{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $_,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=xn(),this.transactionQueueTree_=new vr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function K_(t,e,n){if(t.stats_=Zs(t.repoInfo_),t.forceRestClient_||Af())t.server_=new On(t.repoInfo_,(i,s,r,o)=>{Ho(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Wo(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{x(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new pe(t.repoInfo_,e,(i,s,r,o)=>{Ho(t,i,s,r,o)},i=>{Wo(t,i)},i=>{X_(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=Of(t.repoInfo_,()=>new Dp(t.stats_,t.server_)),t.infoData_=new bp,t.infoSyncTree_=new Uo({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=sn(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Tr(t,"connected",!1),t.serverSyncTree_=new Uo({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const h=o(a,l);le(t.eventQueue_,i._path,h)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function Y_(t){const n=t.infoData_.getNode(new N(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function wr(t){return R_({timestamp:Y_(t)})}function Ho(t,e,n,i,s){t.dataUpdateCount++;const r=new N(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=mn(n,h=>U(h));o=w_(t.serverSyncTree_,r,l,s)}else{const l=U(n);o=ph(t.serverSyncTree_,r,l,s)}else if(i){const l=mn(n,h=>U(h));o=E_(t.serverSyncTree_,r,l)}else{const l=U(n);o=sn(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=gi(t,r)),le(t.eventQueue_,a,o)}function Wo(t,e){Tr(t,"connected",e),e===!1&&Z_(t)}function X_(t,e){X(e,(n,i)=>{Tr(t,n,i)})}function Tr(t,e,n){const i=new N("/.info/"+e),s=U(n);t.infoData_.updateSnapshot(i,s);const r=sn(t.infoSyncTree_,i,s);le(t.eventQueue_,i,r)}function Nh(t){return t.nextWriteId_++}function Q_(t,e,n){const i=T_(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(s=>{const r=U(s).withIndex(e._queryParams.getIndex());gs(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=sn(t.serverSyncTree_,e._path,r);else{const a=$t(t.serverSyncTree_,e);o=ph(t.serverSyncTree_,e._path,r,a)}return le(t.eventQueue_,e._path,o),jn(t.serverSyncTree_,e,n,null,!0),r},s=>(_i(t,"get for query "+x(e)+" failed: "+s),Promise.reject(new Error(s))))}function J_(t,e,n,i,s){_i(t,"set",{path:e.toString(),value:n,priority:i});const r=wr(t),o=U(n,i),a=dr(t.serverSyncTree_,e),l=yh(o,a,r),h=Nh(t),c=fh(t.serverSyncTree_,e,l,h,!0);Ir(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(d,p)=>{const g=d==="ok";g||Y("set at "+e+" failed: "+d);const I=Ue(t.serverSyncTree_,h,!g);le(t.eventQueue_,e,I),ng(t,s,d,p)});const u=Ph(t,e);gi(t,u),le(t.eventQueue_,u,[])}function Z_(t){_i(t,"onDisconnectEvents");const e=wr(t),n=xn();us(t.onDisconnect_,T(),(s,r)=>{const o=P_(s,r,t.serverSyncTree_,e);Ql(n,s,o)});let i=[];us(n,T(),(s,r)=>{i=i.concat(sn(t.serverSyncTree_,s,r));const o=Ph(t,s);gi(t,o)}),t.onDisconnect_=xn(),le(t.eventQueue_,T(),i)}function eg(t,e,n){let i;v(e._path)===".info"?i=gs(t.infoSyncTree_,e,n):i=gs(t.serverSyncTree_,e,n),Sh(t.eventQueue_,e._path,i)}function jo(t,e,n){let i;v(e._path)===".info"?i=jn(t.infoSyncTree_,e,n):i=jn(t.serverSyncTree_,e,n),Sh(t.eventQueue_,e._path,i)}function tg(t){t.persistentConnection_&&t.persistentConnection_.interrupt(G_)}function _i(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),j(n,...e)}function ng(t,e,n,i){e&&dt(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function Ah(t,e,n){return dr(t.serverSyncTree_,e,n)||m.EMPTY_NODE}function Sr(t,e=t.transactionQueueTree_){if(e||mi(t,e),ft(e)){const n=kh(t,e);f(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&ig(t,on(e),n)}else Eh(e)&&pi(e,n=>{Sr(t,n)})}function ig(t,e,n){const i=n.map(h=>h.currentWriteId),s=Ah(t,e,i);let r=s;const o=s.hash();for(let h=0;h<n.length;h++){const c=n[h];f(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const u=z(e,c.path);r=r.updateChild(u,c.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,h=>{_i(t,"transaction put response",{path:l.toString(),status:h});let c=[];if(h==="ok"){const u=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(Ue(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&u.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();mi(t,Er(t.transactionQueueTree_,e)),Sr(t,t.transactionQueueTree_),le(t.eventQueue_,e,c);for(let d=0;d<u.length;d++)dt(u[d])}else{if(h==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{Y("transaction at "+l.toString()+" failed: "+h);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=h}gi(t,e)}},o)}function gi(t,e){const n=Rh(t,e),i=on(n),s=kh(t,n);return sg(t,s,i),i}function sg(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],h=z(n,l.path);let c=!1,u;if(f(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,u=l.abortReason,s=s.concat(Ue(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=z_)c=!0,u="maxretry",s=s.concat(Ue(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Ah(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){Cr("transaction failed: Data returned ",p,l.path);let g=U(p);typeof p=="object"&&p!=null&&me(p,".priority")||(g=g.updatePriority(d.getPriority()));const O=l.currentWriteId,ue=wr(t),ke=yh(g,d,ue);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=ke,l.currentWriteId=Nh(t),o.splice(o.indexOf(O),1),s=s.concat(fh(t.serverSyncTree_,l.path,ke,l.currentWriteId,l.applyLocally)),s=s.concat(Ue(t.serverSyncTree_,O,!0))}else c=!0,u="nodata",s=s.concat(Ue(t.serverSyncTree_,l.currentWriteId,!0))}le(t.eventQueue_,n,s),s=[],c&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}mi(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)dt(i[a]);Sr(t,t.transactionQueueTree_)}function Rh(t,e){let n,i=t.transactionQueueTree_;for(n=v(e);n!==null&&ft(i)===void 0;)i=Er(i,n),e=A(e),n=v(e);return i}function kh(t,e){const n=[];return Dh(t,e,n),n.sort((i,s)=>i.order-s.order),n}function Dh(t,e,n){const i=ft(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);pi(e,s=>{Dh(t,s,n)})}function mi(t,e){const n=ft(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,vh(e,n.length>0?n:void 0)}pi(e,i=>{mi(t,i)})}function Ph(t,e){const n=on(Rh(t,e)),i=Er(t.transactionQueueTree_,e);return x_(i,s=>{ji(t,s)}),ji(t,i),Ch(i,s=>{ji(t,s)}),n}function ji(t,e){const n=ft(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(f(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(f(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Ue(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?vh(e,void 0):n.length=r+1,le(t.eventQueue_,on(e),s);for(let o=0;o<i.length;o++)dt(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function og(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Y(`Invalid query segment '${n}' in query '${t}'`)}return e}const $o=function(t,e){const n=ag(t),i=n.namespace;n.domain==="firebase.com"&&ge(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&ge("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||vf();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Pl(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new N(n.pathString)}},ag=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let h=t.indexOf("//");h>=0&&(a=t.substring(0,h-1),t=t.substring(h+2));let c=t.indexOf("/");c===-1&&(c=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(c,u)),c<u&&(s=rg(t.substring(c,u)));const d=og(t.substring(Math.min(t.length,u)));h=e.indexOf(":"),h>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(h+1),10)):h=e.length;const p=e.slice(0,h);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+x(this.snapshot.exportVal())}}class xh{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return f(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return C(this._path)?null:Wl(this._path)}get ref(){return new ce(this._repo,this._path)}get _queryIdentifier(){const e=No(this._queryParams),n=Qs(e);return n==="{}"?"default":n}get _queryObject(){return No(this._queryParams)}isEqual(e){if(e=he(e),!(e instanceof br))return!1;const n=this._repo===e._repo,i=tr(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+np(this._path)}}class ce extends br{constructor(e,n){super(e,n,new rr,!1)}get parent(){const e=$l(this._path);return e===null?null:new ce(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ot{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new N(e),i=$n(this.ref,e);return new ot(this._node.getChild(n),i,D)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new ot(s,$n(this.ref,i),D)))}hasChild(e){const n=new N(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Cg(t,e){return t=he(t),t._checkNotDeleted("ref"),e!==void 0?$n(t._root,e):t._root}function $n(t,e){return t=he(t),v(t._path)===null?H_("child","path",e,!1):Th("child","path",e,!1),new ce(t._repo,M(t._path,e))}function Ig(t,e){t=he(t),W_("set",t._path),B_("set",e,t._path,!1);const n=new Vn;return J_(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function wg(t){t=he(t);const e=new Mh(()=>{}),n=new yi(e);return Q_(t._repo,t,n).then(i=>new ot(i,new ce(t._repo,t._path),t._queryParams.getIndex()))}class yi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new Oh("value",this,new ot(e.snapshotNode,new ce(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new xh(this,e,n):null}matches(e){return e instanceof yi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Nr{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new xh(this,e,n):null}createEvent(e,n){f(e.childName!=null,"Child events should have a childName.");const i=$n(new ce(n._repo,n._path),e.childName),s=n._queryParams.getIndex();return new Oh(e.type,this,new ot(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Nr?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function lg(t,e,n,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=n,h=(c,u)=>{jo(t._repo,t,a),l(c,u)};h.userCallback=n.userCallback,h.context=n.context,n=h}const o=new Mh(n,r||void 0),a=e==="value"?new yi(o):new Nr(e,o);return eg(t._repo,t,a),()=>jo(t._repo,t,a)}function Tg(t,e,n,i){return lg(t,"value",e,n,i)}d_(ce);m_(ce);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="FIREBASE_DATABASE_EMULATOR_HOST",ys={};let cg=!1;function ug(t,e,n,i){t.repoInfo_=new Pl(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),i&&(t.authTokenProvider_=i)}function dg(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||ge("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),j("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=$o(r,s),a=o.repoInfo,l,h;typeof process<"u"&&process.env&&(h=process.env[hg]),h?(l=!0,r=`http://${h}?ns=${a.namespace}`,o=$o(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const c=s&&l?new et(et.OWNER):new kf(t.name,t.options,e);j_("Invalid Firebase Database URL",o),C(o.path)||ge("Database URL must point to the root of a Firebase Database (not including a child path).");const u=pg(a,t,c,new Rf(t.name,n));return new _g(u,t)}function fg(t,e){const n=ys[e];(!n||n[t.key]!==t)&&ge(`Database ${e}(${t.repoInfo_}) has already been deleted.`),tg(t),delete n[t.key]}function pg(t,e,n,i){let s=ys[e.name];s||(s={},ys[e.name]=s);let r=s[t.toURLString()];return r&&ge("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new q_(t,cg,n,i),s[t.toURLString()]=r,r}class _g{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(K_(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ce(this._repo,T())),this._rootInternal}_delete(){return this._rootInternal!==null&&(fg(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ge("Cannot call "+e+" on a deleted database.")}}function gg(t=ou(),e){const n=iu(t,"database").getImmediate({identifier:e}),i=Yh("database");return i&&mg(n,...i),n}function mg(t,e,n,i={}){t=he(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&ge("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&ge('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new et(et.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Jh(i.mockUserToken,t.app.options.projectId);r=new et(o)}ug(s,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(t){pf(qn),je(new we("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return dg(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),se(ho,co,t),se(ho,co,"esm2017")}pe.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};pe.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};yg();const vg={apiKey:"AIzaSyAjL0zdeot5k1cuORNqyrC9tYVlkalNjdQ",authDomain:"mulgriplay.firebaseapp.com",databaseURL:"https://mulgriplay-default-rtdb.europe-west1.firebasedatabase.app",projectId:"mulgriplay",storageBucket:"mulgriplay.appspot.com",messagingSenderId:"819071278555",appId:"1:819071278555:web:4e8df69ce497e70b499bfe",measurementId:"G-WBDNL86PBZ"},Eg=Zo(vg),Sg=()=>gg(Eg);export{wg as g,Tg as o,Cg as r,Ig as s,Sg as u};
