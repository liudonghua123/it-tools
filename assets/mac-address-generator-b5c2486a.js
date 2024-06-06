import{e as v,d as U,E as _,n as V,v as B,o as M,f as j,g as m,k as n,i as s,x as c,w as f,t as N,l as y,y as R,a1 as P,z as T,m as $}from"./index-637acb98.js";import{c as E}from"./computedRefreshable-9c6ed8d2.js";import{u as F}from"./macAddress-dfc6fc26.js";import{_ as L}from"./InputNumber-b191b026.js";import"./use-locale-f0337434.js";import"./use-form-item-a8f9fb5b.js";import"./Button-4da5839c.js";import"./is-browser-fc34c9a6.js";import"./color-to-class-b0332f36.js";import"./Remove-7a6d1460.js";function z(l){return(l.match(/[^0-9a-f]/i)===null?l.match(/.{1,2}/g)??[]:l.split(/[^0-9a-f]/i)).filter(Boolean).map(t=>t.padStart(2,"0"))}function D({prefix:l="",separator:o=":",getRandomByte:t=()=>v.random(0,255).toString(16).padStart(2,"0")}={}){const r=z(l),p=v.times(6-r.length,t);return[...r,...p].join(o)}const Q={flex:"","flex-col":"","justify-center":"","gap-2":""},q={flex:"","items-center":""},G=m("label",{"w-150px":"","pr-12px":"","text-right":""}," Quantity:",-1),H={"m-0":"","m-x-auto":""},I={flex:"","justify-center":"","gap-2":""},se=U({__name:"mac-address-generator",setup(l){const o=_("mac-address-generator-amount",1),t=_("mac-address-generator-prefix","64:16:7F"),r=F(t),p=[{label:"Uppercase",value:u=>u.toUpperCase()},{label:"Lowercase",value:u=>u.toLowerCase()}],i=V(p[0].value),x=[{label:":",value:":"},{label:"-",value:"-"},{label:".",value:"."},{label:"None",value:""}],d=_("mac-address-generator-separator",x[0].value),[b,C]=E(()=>r.isValid?v.times(o.value,()=>i.value(D({prefix:t.value,separator:d.value}))).join(`
`):""),{copy:w}=B({source:b,text:"MAC addresses copied to the clipboard"});return(u,e)=>{const A=L,S=R,g=P,k=T,h=$;return M(),j("div",Q,[m("div",q,[G,n(A,{value:s(o),"onUpdate:value":e[0]||(e[0]=a=>c(o)?o.value=a:null),min:"1",max:"100","flex-1":""},null,8,["value"])]),n(S,{value:s(t),"onUpdate:value":e[1]||(e[1]=a=>c(t)?t.value=a:null),label:"MAC address prefix:",placeholder:"Set a prefix, e.g. 64:16:7F",clearable:"","label-position":"left",spellcheck:"false",validation:s(r),"raw-text":"","label-width":"150px","label-align":"right"},null,8,["value","validation"]),n(g,{value:s(i),"onUpdate:value":e[2]||(e[2]=a=>c(i)?i.value=a:null),options:p,label:"Case:","label-width":"150px","label-align":"right"},null,8,["value"]),n(g,{value:s(d),"onUpdate:value":e[3]||(e[3]=a=>c(d)?d.value=a:null),options:x,label:"Separator:","label-width":"150px","label-align":"right"},null,8,["value"]),n(k,{"mt-5":"",flex:"","data-test-id":"ulids"},{default:f(()=>[m("pre",H,N(s(b)),1)]),_:1}),m("div",I,[n(h,{"data-test-id":"refresh",onClick:e[4]||(e[4]=a=>s(C)())},{default:f(()=>[y(" Refresh ")]),_:1}),n(h,{onClick:e[5]||(e[5]=a=>s(w)())},{default:f(()=>[y(" Copy ")]),_:1})])])}}});export{se as default};
