import{_ as s}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-1a2fe8bc.js";import{p as t}from"./public-api-1d5b2fbb.js";import{i}from"./boolean-c7e7c785.js";import{w as m}from"./defaults-4d6daddf.js";import{d as p,o as u,c as l}from"./index-9a6ca606.js";import"./TextareaCopyable-a864b4ed.js";import"./Copy-c590c9a7.js";import"./Scrollbar-b1c1d388.js";const b=p({__name:"yaml-to-json",setup(c){function a(o){return m(()=>{const r=t(o);return r?JSON.stringify(r,null,3):""},"")}const e=[{validator:o=>i(()=>t(o)),message:"Provided YAML is not valid."}];return(o,r)=>{const n=s;return u(),l(n,{"input-label":"Your YAML","input-placeholder":"Paste your yaml here...","output-label":"JSON from your YAML","output-language":"json","input-validation-rules":e,transformer:a})}}});export{b as default};