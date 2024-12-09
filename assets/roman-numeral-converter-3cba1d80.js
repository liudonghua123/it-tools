import{d as L,n as C,b as y,p as R,v as g,o as k,f as B,k as i,w as _,g as p,cD as T,cE as $,i as n,x,t as N,l as I,m as h,z as E,y as O,D as S}from"./index-c993e4da.js";import{_ as U}from"./InputNumber-ee82c400.js";import{_ as j}from"./FormItem-c0b32e53.js";import"./use-locale-df018282.js";import"./use-form-item-6fbb21ac.js";import"./Input-2ce09a3d.js";import"./Button-eeef12d0.js";import"./is-browser-fc34c9a6.js";import"./color-to-class-b0332f36.js";import"./Remove-ed06f3fd.js";const m=1,d=3999;function z(e){if(e<m||e>d)return"";const t={M:1e3,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};let a="";for(const o in t)for(;e>=t[o];)a+=o,e-=t[o];return a}const P=/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;function A(e){return P.test(e)}function G(e){if(!A(e))return null;const t={I:1,V:5,X:10,L:50,C:100,D:500,M:1e3};return[...e].reduce((a,o,r,c)=>t[c[r+1]]>t[o]?a-t[o]:a+t[o],0)}const W={flex:"","items-center":"","justify-between":""},q={class:"result"},F={flex:"","items-center":"","justify-between":""},H={class:"result"},J=L({__name:"roman-numeral-converter",setup(e){const t=C(42),a=y(()=>z(t.value)),{attrs:o}=R({source:t,rules:[{validator:u=>u>=m&&u<=d,message:`We can only convert numbers between ${m.toLocaleString()} and ${d.toLocaleString()}`}]}),r=C("XLII"),c=y(()=>G(r.value)),v=R({source:r,rules:[{validator:u=>A(u),message:"The input you entered is not a valid roman number"}]}),{copy:X}=g({source:a,text:"Roman number copied to the clipboard"}),{copy:M}=g({source:()=>String(c),text:"Arabic number copied to the clipboard"});return(u,s)=>{const V=U,w=j,f=h,b=E,D=O;return k(),B("div",null,[i(b,{title:"Arabic to roman"},{default:_(()=>[p("div",W,[i(w,T($(n(o))),{default:_(()=>[i(V,{value:n(t),"onUpdate:value":s[0]||(s[0]=l=>x(t)?t.value=l:null),min:1,style:{width:"200px"},"show-button":!1},null,8,["value"])]),_:1},16),p("div",q,N(n(a)),1),i(f,{autofocus:"",disabled:n(o).validationStatus==="error",onClick:s[1]||(s[1]=l=>n(X)())},{default:_(()=>[I(" Copy ")]),_:1},8,["disabled"])])]),_:1}),i(b,{title:"Roman to arabic","mt-5":""},{default:_(()=>[p("div",F,[i(D,{value:n(r),"onUpdate:value":s[2]||(s[2]=l=>x(r)?r.value=l:null),style:{width:"200px"},validation:n(v)},null,8,["value","validation"]),p("div",H,N(n(c)),1),i(f,{disabled:!n(v).isValid,onClick:s[3]||(s[3]=l=>n(M)())},{default:_(()=>[I(" Copy ")]),_:1},8,["disabled"])])]),_:1})])}}});const rt=S(J,[["__scopeId","data-v-b1e0d482"]]);export{rt as default};
