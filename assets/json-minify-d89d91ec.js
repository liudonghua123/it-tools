import{_ as a}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-be1e393a.js";import{l as r}from"./index-231c3e11.js";import{w as i}from"./defaults-4d6daddf.js";import{d as s,o as l,c as p}from"./index-0fa17e6f.js";import"./TextareaCopyable-1a5d2c2f.js";import"./Copy-44a92a20.js";import"./Scrollbar-75888e96.js";const u=`{
	"hello": [
		"world"
	]
}`,N=s({__name:"json-minify",setup(m){const t=o=>i(()=>JSON.stringify(r.parse(o),null,0),""),e=[{validator:o=>o===""||r.parse(o),message:"Provided JSON is not valid."}];return(o,f)=>{const n=a;return l(),p(n,{"input-label":"Your raw JSON","input-default":u,"input-placeholder":"Paste your raw JSON here...","output-label":"Minified version of your JSON","output-language":"json","input-validation-rules":e,transformer:t})}}});export{N as default};
