import{a as y,b as T,c as m}from"./chunk.A233NMW4.js";import{a as C}from"./chunk.TWZDCIM2.js";import{a as A}from"./chunk.NAOKYE7Y.js";import{a as f}from"./chunk.AR2QSYXF.js";import{a as M,b as n,c as x}from"./chunk.SMFJUIOR.js";import{a as v,b as a,c as b,g as H}from"./chunk.IKUI3UUK.js";import{c as L,e as w,f as u}from"./chunk.SYBSOZNG.js";import{e as s}from"./chunk.I4CX4JT3.js";var i=class extends x{constructor(t){if(super(t),this.it=u,t.type!==M.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===u||t==null)return this._t=void 0,this.it=t;if(t===w)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};i.directiveName="unsafeHTML",i.resultType=1;var G=n(i);var o=class extends i{};o.directiveName="unsafeSVG",o.resultType=2;var D=n(o);var p,r=class extends H{constructor(){super(...arguments);this.svg="";this.label="";this.library="default"}connectedCallback(){super.connectedCallback(),y(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),T(this)}getUrl(){let e=m(this.library);return this.name&&e?e.resolver(this.name):this.src}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var g;let e=m(this.library),c=this.getUrl();if(p||(p=new DOMParser),c)try{let h=await C(c);if(c!==this.getUrl())return;if(h.ok){let l=p.parseFromString(h.svg,"text/html").body.querySelector("svg");l!==null?(l.part.add("svg"),(g=e==null?void 0:e.mutator)==null||g.call(e,l),this.svg=l.outerHTML,this.emit("sl-load")):(this.svg="",this.emit("sl-error"))}else this.svg="",this.emit("sl-error")}catch(h){this.emit("sl-error")}else this.svg.length>0&&(this.svg="")}render(){return L` ${D(this.svg)} `}};r.styles=A,s([b()],r.prototype,"svg",2),s([a({reflect:!0})],r.prototype,"name",2),s([a()],r.prototype,"src",2),s([a()],r.prototype,"label",2),s([a({reflect:!0})],r.prototype,"library",2),s([f("label")],r.prototype,"handleLabelChange",1),s([f(["name","src","library"])],r.prototype,"setIcon",1),r=s([v("sl-icon")],r);export{G as a,r as b};
/*! Bundled license information:

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-svg.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
