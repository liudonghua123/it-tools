import{d as T,n as b,b as x,v,o as h,f as I,k as a,w as p,i as l,x as d,g as f,l as _,F as A,y as S,m as k,z as E}from"./index-637acb98.js";import{w as N}from"./defaults-4d6daddf.js";import{i as j}from"./boolean-c7e7c785.js";function F(i,{separator:e=" "}={}){return i.split("").map(n=>n.charCodeAt(0).toString(2).padStart(8,"0")).join(e)}function g(i){const e=i.replace(/[^01]/g,"");if(e.length%8)throw new Error("Invalid binary string");return e.split(/(\d{8})/).filter(Boolean).map(n=>String.fromCharCode(Number.parseInt(n,2))).join("")}const U={"mt-2":"",flex:"","justify-center":""},V={"mt-2":"",flex:"","justify-center":""},D=T({__name:"text-to-binary",setup(i){const e=b(""),n=x(()=>F(e.value)),{copy:w}=v({source:n}),u=b(""),r=x(()=>N(()=>g(u.value),"")),B=[{validator:y=>j(()=>g(y)),message:"Binary should be a valid ASCII binary string with multiples of 8 bits"}],{copy:C}=v({source:r});return(y,t)=>{const s=S,c=k,m=E;return h(),I(A,null,[a(m,{title:"Text to ASCII binary"},{default:p(()=>[a(s,{value:l(e),"onUpdate:value":t[0]||(t[0]=o=>d(e)?e.value=o:null),multiline:"",placeholder:"e.g. 'Hello world'",label:"Enter text to convert to binary",autosize:"",autofocus:"","raw-text":"","test-id":"text-to-binary-input"},null,8,["value"]),a(s,{value:l(n),"onUpdate:value":t[1]||(t[1]=o=>d(n)?n.value=o:null),label:"Binary from your text",multiline:"","raw-text":"",readonly:"","mt-2":"",placeholder:"The binary representation of your text will be here","test-id":"text-to-binary-output"},null,8,["value"]),f("div",U,[a(c,{disabled:!l(n),onClick:t[2]||(t[2]=o=>l(w)())},{default:p(()=>[_(" Copy binary to clipboard ")]),_:1},8,["disabled"])])]),_:1}),a(m,{title:"ASCII binary to text"},{default:p(()=>[a(s,{value:l(u),"onUpdate:value":t[3]||(t[3]=o=>d(u)?u.value=o:null),multiline:"",placeholder:"e.g. '01001000 01100101 01101100 01101100 01101111'",label:"Enter binary to convert to text",autosize:"","raw-text":"","validation-rules":B,"test-id":"binary-to-text-input"},null,8,["value"]),a(s,{value:l(r),"onUpdate:value":t[4]||(t[4]=o=>d(r)?r.value=o:null),label:"Text from your binary",multiline:"","raw-text":"",readonly:"","mt-2":"",placeholder:"The text representation of your binary will be here","test-id":"binary-to-text-output"},null,8,["value"]),f("div",V,[a(c,{disabled:!l(r),onClick:t[5]||(t[5]=o=>l(C)())},{default:p(()=>[_(" Copy text to clipboard ")]),_:1},8,["disabled"])])]),_:1})],64)}}});export{D as default};
