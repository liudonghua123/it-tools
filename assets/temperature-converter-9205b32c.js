import{d as R,bB as w,e as s,o as c,f,F as g,h as k,i as v,c as x,w as a,k as u,l as p,t as K}from"./index-c993e4da.js";import{_ as C}from"./InputGroupLabel-2d76ef35.js";import{_ as F}from"./InputNumber-ee82c400.js";import{_ as N}from"./InputGroup-b89ae566.js";import"./use-locale-df018282.js";import"./use-form-item-6fbb21ac.js";import"./Input-2ce09a3d.js";import"./Button-eeef12d0.js";import"./is-browser-fc34c9a6.js";import"./color-to-class-b0332f36.js";import"./Remove-ed06f3fd.js";const b=e=>e+273.15,D=e=>e-273.15,B=e=>(e+459.67)*(5/9),y=e=>e*(9/5)-459.67,E=e=>e*(5/9),U=e=>e*(9/5),V=e=>373.15-2/3*e,j=e=>3/2*(373.15-e),L=e=>e*(100/33)+273.15,M=e=>(e-273.15)*(33/100),O=e=>e*(5/4)+273.15,S=e=>(e-273.15)*(4/5),$=e=>(e-7.5)*(40/21)+273.15,q=e=>(e-273.15)*(21/40)+7.5,Z=R({__name:"temperature-converter",setup(e){const n=w({kelvin:{title:"Kelvin",unit:"K",ref:0,toKelvin:s.identity,fromKelvin:s.identity},celsius:{title:"Celsius",unit:"°C",ref:0,toKelvin:b,fromKelvin:D},fahrenheit:{title:"Fahrenheit",unit:"°F",ref:0,toKelvin:B,fromKelvin:y},rankine:{title:"Rankine",unit:"°R",ref:0,toKelvin:E,fromKelvin:U},delisle:{title:"Delisle",unit:"°De",ref:0,toKelvin:V,fromKelvin:j},newton:{title:"Newton",unit:"°N",ref:0,toKelvin:L,fromKelvin:M},reaumur:{title:"Réaumur",unit:"°Ré",ref:0,toKelvin:O,fromKelvin:S},romer:{title:"Rømer",unit:"°Rø",ref:0,toKelvin:$,fromKelvin:q}});function m(i){const{ref:_,toKelvin:o}=n[i],r=o(_)??0;s.chain(n).omit(i).forEach(({fromKelvin:l},t)=>{n[t].ref=Math.floor((l(r)??0)*100)/100}).value()}return m("kelvin"),(i,_)=>{const o=C,r=F,l=N;return c(),f("div",null,[(c(!0),f(g,null,k(Object.entries(v(n)),([t,{title:d,unit:h}])=>(c(),x(l,{key:t,"mb-3":"","w-full":""},{default:a(()=>[u(o,{style:{width:"100px"}},{default:a(()=>[p(K(d),1)]),_:2},1024),u(r,{value:v(n)[t].ref,"onUpdate:value":[T=>v(n)[t].ref=T,()=>m(t)],style:{flex:"1"}},null,8,["value","onUpdate:value"]),u(o,{style:{width:"50px"}},{default:a(()=>[p(K(h),1)]),_:2},1024)]),_:2},1024))),128))])}}});export{Z as default};