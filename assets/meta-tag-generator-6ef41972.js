import{d as $,R as r,H as v,aD as re,G as k,J as C,aB as L,K as ye,b6 as Se,aq as ge,aS as be,aZ as Ve,ay as Ce,a$ as Ie,a_ as Re,co as $e,am as Be,an as ae,n as ee,ar as N,aE as Ae,L as ve,b as U,O as De,b2 as oe,b3 as j,b7 as se,cp as z,cq as q,aN as Me,aJ as Z,q as Oe,e as ue,o as S,f as W,g as H,F as J,h as ce,i as V,k as X,w as Y,t as pe,c as F,l as xe,W as Ue,y as je,X as Ee,D as Le}from"./index-637acb98.js";import{T as Ne}from"./TextareaCopyable-c5dd4be7.js";import{f as We}from"./use-form-item-a8f9fb5b.js";import{b as Fe,N as te,B as E}from"./Button-4da5839c.js";import{u as Ge}from"./use-locale-f0337434.js";import{A as de,R as Ke}from"./Remove-7a6d1460.js";import{_ as ze}from"./FormItem-b3f5f06b.js";import{_ as qe}from"./InputGroupLabel-d847899b.js";import{_ as Ze}from"./InputGroup-4cb77bfe.js";import"./Copy-48950a3f.js";import"./Scrollbar-93a118c1.js";import"./is-browser-fc34c9a6.js";import"./color-to-class-b0332f36.js";const He=$({name:"ArrowDown",render(){return r("svg",{viewBox:"0 0 28 28",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},r("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},r("g",{"fill-rule":"nonzero"},r("path",{d:"M23.7916,15.2664 C24.0788,14.9679 24.0696,14.4931 23.7711,14.206 C23.4726,13.9188 22.9978,13.928 22.7106,14.2265 L14.7511,22.5007 L14.7511,3.74792 C14.7511,3.33371 14.4153,2.99792 14.0011,2.99792 C13.5869,2.99792 13.2511,3.33371 13.2511,3.74793 L13.2511,22.4998 L5.29259,14.2265 C5.00543,13.928 4.53064,13.9188 4.23213,14.206 C3.93361,14.4931 3.9244,14.9679 4.21157,15.2664 L13.2809,24.6944 C13.6743,25.1034 14.3289,25.1034 14.7223,24.6944 L23.7916,15.2664 Z"}))))}}),Je=$({name:"ArrowUp",render(){return r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r("g",{fill:"none"},r("path",{d:"M3.13 9.163a.5.5 0 1 0 .74.674L9.5 3.67V17.5a.5.5 0 0 0 1 0V3.672l5.63 6.165a.5.5 0 0 0 .738-.674l-6.315-6.916a.746.746 0 0 0-.632-.24a.746.746 0 0 0-.476.24L3.131 9.163z",fill:"currentColor"})))}}),d="0!important",ke="-1px!important";function O(e){return C(e+"-type",[k("& +",[v("button",{},[C(e+"-type",[L("border",{borderLeftWidth:d}),L("state-border",{left:ke})])])])])}function x(e){return C(e+"-type",[k("& +",[v("button",[C(e+"-type",[L("border",{borderTopWidth:d}),L("state-border",{top:ke})])])])])}const Xe=v("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[re("vertical",{flexDirection:"row"},[re("rtl",[v("button",[k("&:first-child:not(:last-child)",`
 margin-right: ${d};
 border-top-right-radius: ${d};
 border-bottom-right-radius: ${d};
 `),k("&:last-child:not(:first-child)",`
 margin-left: ${d};
 border-top-left-radius: ${d};
 border-bottom-left-radius: ${d};
 `),k("&:not(:first-child):not(:last-child)",`
 margin-left: ${d};
 margin-right: ${d};
 border-radius: ${d};
 `),O("default"),C("ghost",[O("primary"),O("info"),O("success"),O("warning"),O("error")])])])]),C("vertical",{flexDirection:"column"},[v("button",[k("&:first-child:not(:last-child)",`
 margin-bottom: ${d};
 margin-left: ${d};
 margin-right: ${d};
 border-bottom-left-radius: ${d};
 border-bottom-right-radius: ${d};
 `),k("&:last-child:not(:first-child)",`
 margin-top: ${d};
 margin-left: ${d};
 margin-right: ${d};
 border-top-left-radius: ${d};
 border-top-right-radius: ${d};
 `),k("&:not(:first-child):not(:last-child)",`
 margin: ${d};
 border-radius: ${d};
 `),x("default"),C("ghost",[x("primary"),x("info"),x("success"),x("warning"),x("error")])])])]),Ye={size:{type:String,default:void 0},vertical:Boolean},Qe=$({name:"ButtonGroup",props:Ye,setup(e){const{mergedClsPrefixRef:a,mergedRtlRef:l}=ye(e);return Se("-button-group",Xe,a),ge(Fe,e),{rtlEnabled:be("ButtonGroup",l,a),mergedClsPrefix:a}},render(){const{mergedClsPrefix:e}=this;return r("div",{class:[`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}}),et=()=>$e,tt=Ve({name:"DynamicInput",common:Ce,peers:{Input:Ie,Button:Re},self:et}),at=tt,le=Be("n-dynamic-input"),lt=$({name:"DynamicInputInputPreset",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:""},disabled:Boolean,parentPath:String,path:String,onUpdateValue:{type:Function,required:!0}},setup(){const{mergedThemeRef:e,placeholderRef:a}=ae(le);return{mergedTheme:e,placeholder:a}},render(){const{mergedTheme:e,placeholder:a,value:l,clsPrefix:o,onUpdateValue:u,disabled:n}=this;return r("div",{class:`${o}-dynamic-input-preset-input`},r(te,{theme:e.peers.Input,"theme-overrides":e.peerOverrides.Input,value:l,placeholder:a,onUpdateValue:u,disabled:n}))}}),it=$({name:"DynamicInputPairPreset",props:{clsPrefix:{type:String,required:!0},value:{type:Object,default:()=>({key:"",value:""})},disabled:Boolean,parentPath:String,path:String,onUpdateValue:{type:Function,required:!0}},setup(e){const{mergedThemeRef:a,keyPlaceholderRef:l,valuePlaceholderRef:o}=ae(le);return{mergedTheme:a,keyPlaceholder:l,valuePlaceholder:o,handleKeyInput(u){e.onUpdateValue({key:u,value:e.value.value})},handleValueInput(u){e.onUpdateValue({key:e.value.key,value:u})}}},render(){const{mergedTheme:e,keyPlaceholder:a,valuePlaceholder:l,value:o,clsPrefix:u,disabled:n}=this;return r("div",{class:`${u}-dynamic-input-preset-pair`},r(te,{theme:e.peers.Input,"theme-overrides":e.peerOverrides.Input,value:o.key,class:`${u}-dynamic-input-pair-input`,placeholder:a,onUpdateValue:this.handleKeyInput,disabled:n}),r(te,{theme:e.peers.Input,"theme-overrides":e.peerOverrides.Input,value:o.value,class:`${u}-dynamic-input-pair-input`,placeholder:l,onUpdateValue:this.handleValueInput,disabled:n}))}}),nt=v("dynamic-input",{width:"100%"},[v("dynamic-input-item",`
 margin-bottom: 10px;
 display: flex;
 flex-wrap: nowrap;
 `,[v("dynamic-input-preset-input",{flex:1,alignItems:"center"}),v("dynamic-input-preset-pair",`
 flex: 1;
 display: flex;
 align-items: center;
 `,[v("dynamic-input-pair-input",[k("&:first-child",{"margin-right":"12px"})])]),L("action",`
 align-self: flex-start;
 display: flex;
 justify-content: flex-end;
 flex-shrink: 0;
 flex-grow: 0;
 margin: var(--action-margin);
 `,[C("icon",{cursor:"pointer"})]),k("&:last-child",{marginBottom:0})]),v("form-item",`
 padding-top: 0 !important;
 margin-right: 0 !important;
 `,[v("form-item-blank",{paddingTop:"0 !important"})])]),G=new WeakMap,rt=Object.assign(Object.assign({},ve.props),{max:Number,min:{type:Number,default:0},value:Array,defaultValue:{type:Array,default:()=>[]},preset:{type:String,default:"input"},keyField:String,itemStyle:[String,Object],keyPlaceholder:{type:String,default:""},valuePlaceholder:{type:String,default:""},placeholder:{type:String,default:""},disabled:Boolean,showSortButton:Boolean,createButtonProps:Object,onCreate:Function,onRemove:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClear:Function,onInput:[Function,Array]}),ot=$({name:"DynamicInput",props:rt,setup(e,{slots:a}){const{mergedComponentPropsRef:l,mergedClsPrefixRef:o,mergedRtlRef:u,inlineThemeDisabled:n}=ye(),m=ae(We,null),h=ee(e.defaultValue),w=N(e,"value"),y=Ae(w,h),f=ve("DynamicInput","-dynamic-input",nt,at,e,o),B=U(()=>{const{value:t}=y;if(Array.isArray(t)){const{max:i}=e;return i!==void 0&&t.length>=i}return!1}),I=U(()=>{const{value:t}=y;return Array.isArray(t)?t.length<=e.min:!0}),A=U(()=>{var t,i;return(i=(t=l?.value)===null||t===void 0?void 0:t.DynamicInput)===null||i===void 0?void 0:i.buttonSize});function g(t){const{onInput:i,"onUpdate:value":p,onUpdateValue:s}=e;i&&Z(i,t),p&&Z(p,t),s&&Z(s,t),h.value=t}function _(t,i){if(t==null||typeof t!="object")return i;const p=z(t)?q(t):t;let s=G.get(p);return s===void 0&&G.set(p,s=Me()),s}function R(t,i){const{value:p}=y,s=Array.from(p??[]),P=s[t];if(s[t]=i,P&&i&&typeof P=="object"&&typeof i=="object"){const Te=z(P)?q(P):P,Pe=z(i)?q(i):i,ne=G.get(Te);ne!==void 0&&G.set(Pe,ne)}g(s)}function b(){T(-1)}function T(t){const{value:i}=y,{onCreate:p}=e,s=Array.from(i??[]);if(p)s.splice(t+1,0,p(t+1)),g(s);else if(a.default)s.splice(t+1,0,null),g(s);else switch(e.preset){case"input":s.splice(t+1,0,""),g(s);break;case"pair":s.splice(t+1,0,{key:"",value:""}),g(s);break}}function c(t){const{value:i}=y;if(!Array.isArray(i))return;const{min:p}=e;if(i.length<=p)return;const{onRemove:s}=e;s&&s(t);const P=Array.from(i);P.splice(t,1),g(P)}function D(t,i,p){if(i<0||p<0||i>=t.length||p>=t.length||i===p)return;const s=t[i];t[i]=t[p],t[p]=s}function we(t,i){const{value:p}=y;if(!Array.isArray(p))return;const s=Array.from(p);t==="up"&&D(s,i,i-1),t==="down"&&D(s,i,i+1),g(s)}ge(le,{mergedThemeRef:f,keyPlaceholderRef:N(e,"keyPlaceholder"),valuePlaceholderRef:N(e,"valuePlaceholder"),placeholderRef:N(e,"placeholder")});const _e=be("DynamicInput",u,o),ie=U(()=>{const{self:{actionMargin:t,actionMarginRtl:i}}=f.value;return{"--action-margin":t,"--action-margin-rtl":i}}),M=n?De("dynamic-input",void 0,ie,e):void 0;return{locale:Ge("DynamicInput").localeRef,rtlEnabled:_e,buttonSize:A,mergedClsPrefix:o,NFormItem:m,uncontrolledValue:h,mergedValue:y,insertionDisabled:B,removeDisabled:I,handleCreateClick:b,ensureKey:_,handleValueChange:R,remove:c,move:we,createItem:T,mergedTheme:f,cssVars:n?void 0:ie,themeClass:M?.themeClass,onRender:M?.onRender}},render(){const{$slots:e,buttonSize:a,mergedClsPrefix:l,mergedValue:o,locale:u,mergedTheme:n,keyField:m,itemStyle:h,preset:w,showSortButton:y,NFormItem:f,ensureKey:B,handleValueChange:I,remove:A,createItem:g,move:_,onRender:R,disabled:b}=this;return R?.(),r("div",{class:[`${l}-dynamic-input`,this.rtlEnabled&&`${l}-dynamic-input--rtl`,this.themeClass],style:this.cssVars},!Array.isArray(o)||o.length===0?r(E,Object.assign({block:!0,ghost:!0,dashed:!0,size:a},this.createButtonProps,{disabled:this.insertionDisabled||b,theme:n.peers.Button,themeOverrides:n.peerOverrides.Button,onClick:this.handleCreateClick}),{default:()=>oe(e["create-button-default"],()=>[u.create]),icon:()=>oe(e["create-button-icon"],()=>[r(j,{clsPrefix:l},{default:()=>r(de,null)})])}):o.map((T,c)=>r("div",{key:m?T[m]:B(T,c),"data-key":m?T[m]:B(T,c),class:`${l}-dynamic-input-item`,style:h},se(e.default,{value:o[c],index:c},()=>[w==="input"?r(lt,{disabled:b,clsPrefix:l,value:o[c],parentPath:f?f.path.value:void 0,path:f?.path.value?`${f.path.value}[${c}]`:void 0,onUpdateValue:D=>{I(c,D)}}):w==="pair"?r(it,{disabled:b,clsPrefix:l,value:o[c],parentPath:f?f.path.value:void 0,path:f?.path.value?`${f.path.value}[${c}]`:void 0,onUpdateValue:D=>{I(c,D)}}):null]),se(e.action,{value:o[c],index:c,create:g,remove:A,move:_},()=>[r("div",{class:`${l}-dynamic-input-item__action`},r(Qe,{size:a},{default:()=>[r(E,{disabled:this.removeDisabled||b,theme:n.peers.Button,themeOverrides:n.peerOverrides.Button,circle:!0,onClick:()=>{A(c)}},{icon:()=>r(j,{clsPrefix:l},{default:()=>r(Ke,null)})}),r(E,{disabled:this.insertionDisabled||b,circle:!0,theme:n.peers.Button,themeOverrides:n.peerOverrides.Button,onClick:()=>{g(c)}},{icon:()=>r(j,{clsPrefix:l},{default:()=>r(de,null)})}),y?r(E,{disabled:c===0||b,circle:!0,theme:n.peers.Button,themeOverrides:n.peerOverrides.Button,onClick:()=>{_("up",c)}},{icon:()=>r(j,{clsPrefix:l},{default:()=>r(Je,null)})}):null,y?r(E,{disabled:c===o.length-1||b,circle:!0,theme:n.peers.Button,themeOverrides:n.peerOverrides.Button,onClick:()=>{_("down",c)}},{icon:()=>r(j,{clsPrefix:l},{default:()=>r(He,null)})}):null]}))]))))}}),Q={"og:description":"twitter:description","og:title":"twitter:title","og:image":"twitter:image","og:image:url":"twitter:image","og:image:alt":"twitter:image:alt"};function st({existingMeta:e,twitterMeta:a}){return e.filter(({key:l})=>l in Q&&a.find(o=>o.key===Q[l])===void 0).map(({key:l,value:o})=>({key:Q[l]??l,value:o}))}const ut=e=>typeof e=="object"&&!Array.isArray(e)&&e!==null&&!(e instanceof Date),ct=e=>e.split(":").map(pt).join(":"),pt=e=>e.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)?.map(a=>a.toLowerCase()).join("_")??"";function me({title:e,flatMetadata:a,type:l}){return a.length===0?[]:[`<!-- ${e} -->`,...ft({flatMetadata:a,type:l})]}function dt({twitter:e,...a},{indentation:l=0,indentWith:o="  ",generateTwitterCompatibleMeta:u=!1}={}){const n=he(a,{basePrefix:"og"}),m=he(e,{basePrefix:"twitter"});return[me({title:"og meta",flatMetadata:n,type:"property"}),me({title:"twitter meta",flatMetadata:[...m,...u?st({existingMeta:n,twitterMeta:m}):[]],type:"name"})].filter(y=>y&&y.length>0).map(y=>y.map(f=>o.repeat(l)+f).join(`
`)).join(`

`)}function mt(e){return e instanceof Date?e.toISOString():String(e)}function he(e,{separator:a=":",basePrefix:l=""}={}){const o=[],u=(n,m="")=>{if(!(n===void 0||n===""))if(ut(n))for(const[h,w]of Object.entries(n)){const y=[m,ct(h)].filter(Boolean).join(a);u(w,y)}else if(Array.isArray(n))for(const h of n)u(h,m);else o.push({key:m,value:mt(n)})};return u(e,l),o}function ht({flatMetadata:{key:e,value:a},type:l}){return`<meta ${l.trim()}="${e.trim()}" value="${a.trim()}" />`}function ft({flatMetadata:e,type:a}){return e.map(l=>ht({flatMetadata:l,type:a}))}const yt={name:"Article",elements:[{type:"input",label:"Publishing date",key:"article:published_time",placeholder:"When the article was first published..."},{type:"input",label:"Modification date",key:"article:modified_time",placeholder:"When the article was last changed..."},{type:"input",label:"Expiration date",key:"article:expiration_time",placeholder:"When the article is out of date after..."},{type:"input",label:"Author",key:"article:author",placeholder:"Writers of the article..."},{type:"input",label:"Section",key:"article:section",placeholder:"A high-level section name. E.g. Technology.."},{type:"input",label:"Tag",key:"article:tag",placeholder:"Tag words associated with this article..."}]},gt={name:"Book",elements:[{type:"input",label:"Author",key:"book:author",placeholder:"Who wrote this book..."},{type:"input",label:"ISBN",key:"book:isbn",placeholder:"The International Standard Book Number..."},{type:"input",label:"Release date",key:"book:release_date",placeholder:"The date the book was released..."},{type:"input",label:"Tag",key:"book:tag",placeholder:"Tag words associated with this book..."}]},bt={name:"Album details",elements:[{type:"input",label:"Song",key:"music:song",placeholder:"The song on this album..."},{type:"input",label:"Disc",key:"music:song:disc",placeholder:"The same as music:album:disc but in reverse..."},{type:"input",label:"Track",key:"music:song:track",placeholder:"The same as music:album:track but in reverse..."},{type:"input",label:"Musician",key:"music:musician",placeholder:"The musician that made this song..."},{type:"input",label:"Release date",key:"music:release_date",placeholder:"The date the album was released..."}]},vt={name:"Playlist details",elements:[{type:"input",label:"Song",key:"music:song",placeholder:"The song on this album..."},{type:"input",label:"Disc",key:"music:song:disc",placeholder:"The same as music:album:disc but in reverse..."},{type:"input",label:"Track",key:"music:song:track",placeholder:"The same as music:album:track but in reverse..."},{type:"input",label:"Creator",key:"music:creator",placeholder:"The creator of this playlist..."}]},kt={name:"Radio station details",elements:[{type:"input",label:"Creator",key:"music:creator",placeholder:"The creator of this radio station..."}]},wt={name:"Song details",elements:[{type:"input",label:"Duration",placeholder:"The duration of the song...",key:"music:duration"},{type:"input",label:"Album",placeholder:"The album this song is from...",key:"music:album"},{type:"input",label:"Disc",placeholder:"Which disc of the album this song is on...",key:"music:album:disk"},{type:"input",label:"Track",placeholder:" Which track this song is...",key:"music:album:track"},{type:"input-multiple",label:"Musician",placeholder:"The musician that made this song...",key:"music:musician"}]},_t={name:"Profile",elements:[{type:"input",label:"First name",placeholder:"Enter the first name of the person...",key:"profile:first_name"},{type:"input",label:"Last name",placeholder:"Enter the last name of the person...",key:"profile:last_name"},{type:"input",label:"Username",placeholder:"Enter the username of the person...",key:"profile:username"},{type:"input",label:"Gender",placeholder:"Enter the gender of the person...",key:"profile:gender"}]},K={name:"Movie details",elements:[{type:"input-multiple",label:"Actor",key:"video:actor",placeholder:"Name of the actress/actor..."},{type:"input-multiple",label:"Director",key:"video:director",placeholder:"Name of the director..."},{type:"input-multiple",label:"Writer",key:"video:writer",placeholder:"Writers of the movie..."},{type:"input",label:"Duration",key:"video:duration",placeholder:"The movie's length in seconds..."},{type:"input",label:"Release date",key:"video:release_date",placeholder:"The date the movie was released..."},{type:"input",label:"Tag",key:"video:tag",placeholder:"Tag words associated with this movie..."}]},Tt={name:"Video episode details",elements:[...K.elements,{type:"input",label:"Series",key:"video:series",placeholder:"Which series this episode belongs to..."}]},Pt={name:"Other video details",elements:[...K.elements]},St={name:"TV show details",elements:[...K.elements]},Vt={name:"Image",elements:[{type:"input",label:"Image url",placeholder:"The url of your website social image...",key:"image"},{type:"input",label:"Image alt",placeholder:"The alternative text of your website social image...",key:"image:alt"},{type:"input",label:"Width",placeholder:"Width in px of your website social image...",key:"image:width"},{type:"input",label:"Height",placeholder:"Height in px of your website social image...",key:"image:height"}]},Ct={name:"Twitter",elements:[{type:"select",options:[{label:"Summary",value:"summary"},{label:"Summary with large image",value:"summary_large_image"},{label:"Application",value:"app"},{label:"Player",value:"player"}],label:"Card type",placeholder:"The Twitter card type...",key:"twitter:card"},{type:"input",label:"Site account",placeholder:"The name of the Twitter account of the site (ex: @ittoolsdottech)...",key:"twitter:site"},{type:"input",label:"Creator acc.",placeholder:"The name of the Twitter account of the creator (ex: @cthmsst)...",key:"twitter:creator"}]},It=[{label:"Website",value:"website"},{label:"Article",value:"article"},{label:"Book",value:"book"},{label:"Profile",value:"profile"},{type:"group",label:"Music",key:"Music",children:[{label:"Song",value:"music.song"},{label:"Music album",value:"music.album"},{label:"Playlist",value:"music.playlist"},{label:"Radio station",value:"music.radio_station"}]},{type:"group",label:"Video",key:"Video",children:[{label:"Movie",value:"video.movie"},{label:"Episode",value:"video.episode"},{label:"TV show",value:"video.tv_show"},{label:"Other video",value:"video.other"}]}],Rt={name:"General information",elements:[{type:"select",label:"Page type",placeholder:"Select the type of your website...",key:"type",options:It},{type:"input",label:"Title",placeholder:"Enter the title of your website...",key:"title"},{type:"input",label:"Description",placeholder:"Enter the description of your website...",key:"description"},{type:"input",label:"Page URL",placeholder:"Enter the url of your website...",key:"url"}]},fe={"music.song":wt,"music.album":bt,"music.playlist":vt,"music.radio_station":kt,"video.movie":K,"video.episode":Tt,"video.tv_show":St,"video.other":Pt,profile:_t,article:yt,book:gt},$t={"mb-5px":""},Bt=$({__name:"meta-tag-generator",setup(e){const a=ee({type:"website","twitter:card":"summary_large_image"});Oe(()=>ee(a.value.type),(u,n)=>{const m=fe[n.value];m&&m.elements.forEach(({key:h})=>{a.value[h]=""})});const l=U(()=>{const u=[Rt,Vt,Ct],n=fe[a.value.type];return n&&u.push(n),u}),o=U(()=>{const u=ue.chain(a.value).pickBy((m,h)=>h.startsWith("twitter:")).mapKeys((m,h)=>h.replace(/^twitter:/,"")).value(),n=ue.pickBy(a.value,(m,h)=>!h.startsWith("twitter:"));return dt({...n,twitter:u},{generateTwitterCompatibleMeta:!0})});return(u,n)=>{const m=qe,h=je,w=ot,y=Ee,f=Ze,B=ze;return S(),W(J,null,[H("div",null,[(S(!0),W(J,null,ce(V(l),({name:I,elements:A})=>(S(),W("div",{key:I,style:{"margin-bottom":"15px"}},[H("div",$t,pe(I),1),(S(!0),W(J,null,ce(A,({key:g,type:_,label:R,placeholder:b,...T})=>(S(),F(f,{key:g},{default:Y(()=>[X(m,{style:{flex:"0 0 110px"}},{default:Y(()=>[xe(pe(R),1)]),_:2},1024),_==="input"?(S(),F(h,{key:0,value:V(a)[g],"onUpdate:value":c=>V(a)[g]=c,placeholder:b,clearable:""},null,8,["value","onUpdate:value","placeholder"])):_==="input-multiple"?(S(),F(w,{key:1,value:V(a)[g],"onUpdate:value":c=>V(a)[g]=c,min:1,placeholder:b,"default-value":[""],"show-sort-button":!0},null,8,["value","onUpdate:value","placeholder"])):_==="select"?(S(),F(y,{key:2,value:V(a)[g],"onUpdate:value":c=>V(a)[g]=c,"w-full":"",placeholder:b,options:T.options},null,8,["value","onUpdate:value","placeholder","options"])):Ue("",!0)]),_:2},1024))),128))]))),128))]),H("div",null,[X(B,{label:"Your meta tags"},{default:Y(()=>[X(Ne,{value:V(o),language:"html"},null,8,["value"])]),_:1})])],64)}}});const Kt=Le(Bt,[["__scopeId","data-v-63153b5c"]]);export{Kt as default};
