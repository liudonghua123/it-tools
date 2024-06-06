import{d as v,n as P,p as k,o as h,f as x,g as o,k as a,w as u,i as r,x as g,as as K,l as w,F as C,m as B}from"./index-118e9019.js";import{l as m}from"./index-ce5f2cbe.js";import{T as c}from"./TextareaCopyable-506102a8.js";import{a as T}from"./defaults-4d6daddf.js";import{a as V}from"./computedRefreshable-09d387fa.js";import{_ as R}from"./InputNumber-b64d6ef5.js";import{_ as A}from"./FormItem-7699df70.js";import"./___vite-browser-external_commonjs-proxy-503c6e67.js";import"./Copy-94ad49f6.js";import"./Scrollbar-f12896ae.js";import"./use-locale-e151857b.js";import"./use-form-item-7597ef39.js";import"./Button-6d000cc3.js";import"./is-browser-fc34c9a6.js";import"./color-to-class-b0332f36.js";import"./Remove-217deff7.js";const N="/it-tools/assets/prime.worker.min-e367bd53.js";function E({bits:s=2048}){return new Promise((e,t)=>m.pki.rsa.generateKeyPair({bits:s,workerScript:N},(i,n)=>{if(i){t(i);return}e(n)}))}async function F(s={}){const{privateKey:e,publicKey:t}=await E(s);return{publicKeyPem:m.pki.publicKeyToPem(t),privateKeyPem:m.pki.privateKeyToPem(e)}}const j={style:{flex:"0 0 100%"}},D={"item-style":"flex: 1 1 0",style:{"max-width":"600px"},"mx-auto":"",flex:"","gap-3":""},O=o("h3",null,"Public key",-1),S=o("h3",null,"Private key",-1),te=v({__name:"rsa-key-pair-generator",setup(s){const e=P(2048),t={publicKeyPem:"",privateKeyPem:""},{attrs:i}=k({source:e,rules:[{message:"Bits should be 256 <= bits <= 16384 and be a multiple of 8",validator:l=>l>=256&&l<=16384&&l%8===0}]}),[n,_]=V(()=>T(()=>F({bits:e.value}),t),t);return(l,p)=>{const f=R,d=A,y=B;return h(),x(C,null,[o("div",j,[o("div",D,[a(d,K({label:"Bits :"},r(i),{"label-placement":"left","label-width":"100"}),{default:u(()=>[a(f,{value:r(e),"onUpdate:value":p[0]||(p[0]=b=>g(e)?e.value=b:null),min:"256",max:"16384",step:"8"},null,8,["value"])]),_:1},16),a(y,{onClick:r(_)},{default:u(()=>[w(" Refresh key-pair ")]),_:1},8,["onClick"])])]),o("div",null,[O,a(c,{value:r(n).publicKeyPem},null,8,["value"])]),o("div",null,[S,a(c,{value:r(n).privateKeyPem},null,8,["value"])])],64)}}});export{te as default};
