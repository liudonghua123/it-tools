import{d as S,n as c,b as y,v as A,o as B,f as k,k as a,i as n,x as o,g as d,w as T,l as C,y as E,X as M,m as U}from"./index-c993e4da.js";import{_ as w}from"./InputCopyable.vue_vue_type_script_setup_true_lang-58e73b47.js";import{c as t}from"./index-d63c9dc4.js";import{c as P}from"./hash-text.service-9de4e2c4.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./___vite-browser-external_commonjs-proxy-33e0b364.js";const D={flex:"","flex-col":"","gap-4":""},N={flex:"","gap-2":""},R={flex:"","gap-2":""},V={flex:"","justify-center":""},K=S({__name:"hmac-generator",setup($){const H={MD5:t.HmacMD5,RIPEMD160:t.HmacRIPEMD160,SHA1:t.HmacSHA1,SHA3:t.HmacSHA3,SHA224:t.HmacSHA224,SHA256:t.HmacSHA256,SHA384:t.HmacSHA384,SHA512:t.HmacSHA512};function _(s,e){return e==="Bin"?P(s.toString(t.enc.Hex)):s.toString(t.enc[e])}const i=c(""),u=c(""),r=c("SHA256"),p=c("Hex"),v=c("Text"),m=y(()=>{const s=v.value==="Text"?u.value:t.enc.Hex.parse(u.value);return _(H[r.value](i.value,s),p.value)}),{copy:b}=A({source:m});return(s,e)=>{const f=E,x=M,g=w,h=U;return B(),k("div",D,[a(f,{value:n(i),"onUpdate:value":e[0]||(e[0]=l=>o(i)?i.value=l:null),multiline:"","raw-text":"",placeholder:"Plain text to compute the hash...",rows:"3",autosize:"",autofocus:"",label:"Plain text to compute the hash"},null,8,["value"]),d("div",N,[a(f,{value:n(u),"onUpdate:value":e[1]||(e[1]=l=>o(u)?u.value=l:null),placeholder:"Enter the secret key...",label:"Secret key","raw-text":"",clearable:"","flex-1":""},null,8,["value"]),a(x,{value:n(v),"onUpdate:value":e[2]||(e[2]=l=>o(v)?v.value=l:null),label:"Key encoding","flex-1":"",placeholder:"Select the key encoding...",options:[{label:"Plain Text",value:"Text"},{label:"Hexadecimal Text",value:"Hex"}]},null,8,["value"])]),d("div",R,[a(x,{value:n(r),"onUpdate:value":e[3]||(e[3]=l=>o(r)?r.value=l:null),label:"Hashing function","flex-1":"",placeholder:"Select an hashing function...",options:Object.keys(H).map(l=>({label:l,value:l}))},null,8,["value","options"]),a(x,{value:n(p),"onUpdate:value":e[4]||(e[4]=l=>o(p)?p.value=l:null),label:"Output encoding","flex-1":"",placeholder:"Select the result encoding...",options:[{label:"Binary (base 2)",value:"Bin"},{label:"Hexadecimal (base 16)",value:"Hex"},{label:"Base64 (base 64)",value:"Base64"},{label:"Base64-url (base 64 with url safe chars)",value:"Base64url"}]},null,8,["value","options"])]),a(g,{value:n(m),"onUpdate:value":e[5]||(e[5]=l=>o(m)?m.value=l:null),type:"textarea",placeholder:"The result of the HMAC...",label:"HMAC of your text"},null,8,["value"]),d("div",V,[a(h,{onClick:e[6]||(e[6]=l=>n(b)())},{default:T(()=>[C(" Copy HMAC ")]),_:1})])])}}});export{K as default};