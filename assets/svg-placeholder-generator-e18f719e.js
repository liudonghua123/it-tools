import{d as T,n as s,b as y,v as C,o as F,f as D,g as i,k as l,w as n,i as o,x as u,l as h,F as N,y as E,m as H,D as I}from"./index-9a786956.js";import{T as B}from"./TextareaCopyable-84be020e.js";import{a as P}from"./downloadBase64-5f8126ef.js";import{t as j}from"./base64-6a7151fc.js";import{_ as L}from"./InputNumber-a44e8533.js";import{_ as M}from"./FormItem-9e9fe000.js";import{_ as R}from"./ColorPicker-0db2f519.js";import{_ as W}from"./Switch-2076c40b.js";import{_ as q}from"./Form-1ce67568.js";import"./Copy-17f950e6.js";import"./Scrollbar-e4d13672.js";import"./index-59633b8d.js";import"./___vite-browser-external_commonjs-proxy-07818cd7.js";import"./use-locale-cbb62ef0.js";import"./use-form-item-4fef73c0.js";import"./Button-fa1eaf49.js";import"./is-browser-fc34c9a6.js";import"./color-to-class-b0332f36.js";import"./Remove-67502ba4.js";import"./InputGroup-d8ced5f4.js";const A={flex:"","gap-3":""},J={flex:"","gap-3":""},K={flex:"","gap-3":""},O={flex:"","justify-center":"","gap-3":""},Q=["src"],X=T({__name:"svg-placeholder-generator",setup(Y){const p=s(600),r=s(350),c=s(26),v=s("#cccccc"),f=s("#333333"),g=s(!0),_=s(""),b=y(()=>{const m=p.value,e=r.value,d=_.value.length>0?_.value:`${m}x${e}`,a=g.value?` width="${m}" height="${e}"`:"";return`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${m} ${e}"${a}>
  <rect width="${m}" height="${e}" fill="${v.value}"></rect>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="${c.value}px" fill="${f.value}">${d}</text>   
</svg>
  `.trim()}),x=y(()=>`data:image/svg+xml;base64,${j(b.value)}`),{copy:k}=C({source:b}),{copy:S}=C({source:x}),{download:U}=P({source:x});return(m,e)=>{const d=L,a=M,w=R,V=E,z=W,G=q,$=H;return F(),D(N,null,[i("div",null,[l(G,{"label-placement":"left","label-width":"100"},{default:n(()=>[i("div",A,[l(a,{label:"Width (in px)","flex-1":""},{default:n(()=>[l(d,{value:o(p),"onUpdate:value":e[0]||(e[0]=t=>u(p)?p.value=t:null),placeholder:"SVG width...",min:"1"},null,8,["value"])]),_:1}),l(a,{label:"Background","flex-1":""},{default:n(()=>[l(w,{value:o(v),"onUpdate:value":e[1]||(e[1]=t=>u(v)?v.value=t:null),modes:["hex"]},null,8,["value"])]),_:1})]),i("div",J,[l(a,{label:"Height (in px)","flex-1":""},{default:n(()=>[l(d,{value:o(r),"onUpdate:value":e[2]||(e[2]=t=>u(r)?r.value=t:null),placeholder:"SVG height...",min:"1"},null,8,["value"])]),_:1}),l(a,{label:"Text color","flex-1":""},{default:n(()=>[l(w,{value:o(f),"onUpdate:value":e[3]||(e[3]=t=>u(f)?f.value=t:null),modes:["hex"]},null,8,["value"])]),_:1})]),i("div",K,[l(a,{label:"Font size","flex-1":""},{default:n(()=>[l(d,{value:o(c),"onUpdate:value":e[4]||(e[4]=t=>u(c)?c.value=t:null),placeholder:"Font size...",min:"1"},null,8,["value"])]),_:1}),l(V,{value:o(_),"onUpdate:value":e[5]||(e[5]=t=>u(_)?_.value=t:null),label:"Custom text",placeholder:`Default is ${o(p)}x${o(r)}`,"label-position":"left","label-width":"100px","label-align":"right","flex-1":""},null,8,["value","placeholder"])]),l(a,{label:"Use exact size","label-placement":"left"},{default:n(()=>[l(z,{value:o(g),"onUpdate:value":e[6]||(e[6]=t=>u(g)?g.value=t:null)},null,8,["value"])]),_:1})]),_:1}),l(a,{label:"SVG HTML element"},{default:n(()=>[l(B,{value:o(b),"copy-placement":"none"},null,8,["value"])]),_:1}),l(a,{label:"SVG in Base64"},{default:n(()=>[l(B,{value:o(x),"copy-placement":"none"},null,8,["value"])]),_:1}),i("div",O,[l($,{onClick:e[7]||(e[7]=t=>o(k)())},{default:n(()=>[h(" Copy svg ")]),_:1}),l($,{onClick:e[8]||(e[8]=t=>o(S)())},{default:n(()=>[h(" Copy base64 ")]),_:1}),l($,{onClick:e[9]||(e[9]=t=>o(U)())},{default:n(()=>[h(" Download svg ")]),_:1})])]),i("img",{src:o(x),alt:"Image"},null,8,Q)],64)}}});const be=I(X,[["__scopeId","data-v-1d07fa51"]]);export{be as default};