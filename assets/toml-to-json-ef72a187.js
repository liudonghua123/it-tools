import{_ as e}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-f1609130.js";import{p as s}from"./toml-esm-9c5f6a1e.js";import{w as n}from"./defaults-4d6daddf.js";import{i}from"./toml.services-387bcfeb.js";import{d as m,o as p,c as l}from"./index-9a786956.js";import"./TextareaCopyable-84be020e.js";import"./Copy-17f950e6.js";import"./Scrollbar-e4d13672.js";import"./boolean-c7e7c785.js";const v=m({__name:"toml-to-json",setup(u){const r=o=>o===""?"":n(()=>JSON.stringify(s(o),null,3),""),t=[{validator:i,message:"Provided TOML is not valid."}];return(o,c)=>{const a=e;return p(),l(a,{"input-label":"Your TOML","input-placeholder":"Paste your TOML here...","output-label":"JSON from your TOML","output-language":"json","input-validation-rules":t,transformer:r})}}});export{v as default};