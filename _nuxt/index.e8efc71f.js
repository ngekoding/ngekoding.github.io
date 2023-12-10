import{_ as q}from"./_plugin-vue_export-helper.c27b6911.js";import{o as f,c as h,a as s,t as b,f as L,g as p,F as D,r as j,b as m,d as C,h as se,i as oe,j as A,k as B,l as k,m as N,n as F,q as O,s as G,w,v as K,T as ae,x as J,y as re,z as ie}from"./entry.dbdfab54.js";import U from"./Icon.185821a2.js";import{n as S,_ as ce}from"./nuxt-img.e3bbf166.js";import{_ as R}from"./nuxt-link.195c4348.js";import{u as ue}from"./index.3ff63929.js";import{u as de,q as pe}from"./query.5798b482.js";import"./preview.bf8cdf13.js";const me={},fe={id:"hero",class:"min-h-screen pt-16 flex flex-col justify-center"},_e={class:"flex items-center font-mono"},ge=s("span",{class:"inline-block w-1 h-1 bg-purple-500 rounded-full"},null,-1),he={class:"ml-2 text-base lg:text-lg"},be=s("h1",{class:"big-heading text-purple-500"}," Nur Muhammad. ",-1),xe={class:"big-heading"},ve={class:"mt-6 max-w-xl text-base lg:max-w-lg lg:text-xl"};function ye(e,n){return f(),h("section",fe,[s("p",_e,[ge,s("span",he,b(e.$t("landing.hero.intro")),1)]),be,s("h1",xe,b(e.$t("landing.hero.slogan")),1),s("p",ve,b(e.$t("landing.hero.summary")),1)])}const $e=q(me,[["render",ye]]),we=""+globalThis.__publicAssetsURL("img/profile.png"),ke=[{label:"HTML",usedIn:["ftugm"]},{label:"CSS",usedIn:["ftugm"]},{label:"JavaScript",usedIn:["ftugm"]},{label:"Vue.js",usedIn:["ftugm"]},{label:"Nuxt.js",usedIn:[]},{label:"Sass",usedIn:["ftugm"]},{label:"Tailwind CSS",usedIn:["ftugm"]},{label:"PHP",usedIn:["ftugm"]},{label:"CodeIgniter",usedIn:["ftugm"]},{label:"Yii2",usedIn:["ftugm"]},{label:"Laravel/Lumen",usedIn:["ftugm"]},{label:"Node.js",usedIn:["ftugm"]},{label:"Express.js",usedIn:["ftugm"]},{label:"Google Apps Script",usedIn:["ftugm"]},{label:"MySQL",usedIn:["ftugm"]}],Q=ke,Se={id:"about",class:"scroll-mt-20 pb-4 mt-20"},Le={class:"text-2xl font-semibold text-purple-500"},Te={class:"mt-4 flex flex-col md:flex-row gap-5 md:gap-14"},De={class:"flex-1 order-last md:order-first"},Ie=["innerHTML"],je={class:"my-4"},He={class:"font-mono text-sm grid grid-flow-col grid-rows-8 sm:grid-rows-5 auto-cols-max gap-y-2 gap-x-6"},Oe=s("div",{class:"md:basis-1/3 lg:basis-1/4 order-first md:order-last"},[s("div",{class:"sm:max-w-sm mx-auto overflow-hidden rounded-3xl border border-gray-300 shadow-xl"},[s("img",{src:we,alt:"Profile",class:"object-cover"})])],-1),Pe=L({__name:"AboutSection",setup(e){return(n,l)=>{const o=U;return f(),h("section",Se,[s("h2",Le,b(n.$t("landing.about.title")),1),s("div",Te,[s("div",De,[s("p",{innerHTML:("nl2br"in n?n.nl2br:p(S))(n.$t("landing.about.description"))},null,8,Ie),s("p",je,b(n.$t("landing.about.usedTechnologiesTitle")),1),s("ul",He,[(f(!0),h(D,null,j(p(Q),(t,c)=>(f(),h("li",{key:`technology-${c}`},[m(o,{name:"material-symbols:play-arrow-outline",class:"text-purple-500"}),C(" "+b(t.label),1)]))),128))])]),Oe])])}}});var T=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(T||{});function P(e,n,...l){if(e in n){let t=n[e];return typeof t=="function"?t(...l):t}let o=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(t=>`"${t}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,P),o}var E=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(E||{}),Me=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Me||{});function z({visible:e=!0,features:n=0,ourProps:l,theirProps:o,...t}){var c;let a=Z(o,l),i=Object.assign(t,{props:a});if(e||n&2&&a.static)return M(i);if(n&1){let r=(c=a.unmount)==null||c?0:1;return P(r,{0(){return null},1(){return M({...t,props:{...a,hidden:!0,style:{display:"none"}}})}})}return M(i)}function M({props:e,attrs:n,slots:l,slot:o,name:t}){var c,a;let{as:i,...r}=Ce(e,["unmount","static"]),u=(c=l.default)==null?void 0:c.call(l,o),_={};if(o){let x=!1,d=[];for(let[v,y]of Object.entries(o))typeof y=="boolean"&&(x=!0),y===!0&&d.push(v);x&&(_["data-headlessui-state"]=d.join(" "))}if(i==="template"){if(u=X(u??[]),Object.keys(r).length>0||Object.keys(n).length>0){let[x,...d]=u??[];if(!Ee(x)||d.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${t} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(r).concat(Object.keys(n)).map(g=>g.trim()).filter((g,I,le)=>le.indexOf(g)===I).sort((g,I)=>g.localeCompare(I)).map(g=>`  - ${g}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(g=>`  - ${g}`).join(`
`)].join(`
`));let v=Z((a=x.props)!=null?a:{},r),y=se(x,v);for(let g in v)g.startsWith("on")&&(y.props||(y.props={}),y.props[g]=v[g]);return y}return Array.isArray(u)&&u.length===1?u[0]:u}return oe(i,Object.assign({},r,_),{default:()=>u})}function X(e){return e.flatMap(n=>n.type===D?X(n.children):[n])}function Z(...e){if(e.length===0)return{};if(e.length===1)return e[0];let n={},l={};for(let o of e)for(let t in o)t.startsWith("on")&&typeof o[t]=="function"?(l[t]!=null||(l[t]=[]),l[t].push(o[t])):n[t]=o[t];if(n.disabled||n["aria-disabled"])return Object.assign(n,Object.fromEntries(Object.keys(l).map(o=>[o,void 0])));for(let o in l)Object.assign(n,{[o](t,...c){let a=l[o];for(let i of a){if(t instanceof Event&&t.defaultPrevented)return;i(t,...c)}}});return n}function Ce(e,n=[]){let l=Object.assign({},e);for(let o of n)o in l&&delete l[o];return l}function Ee(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let Ae=0;function Be(){return++Ae}function W(){return Be()}function $(e){var n;return e==null||e.value==null?null:(n=e.value.$el)!=null?n:e.value}let ee=Symbol("Context");var H=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(H||{});function Ne(){return A(ee,null)}function Ue(e){B(ee,e)}function Y(e,n){if(e)return e;let l=n??"button";if(typeof l=="string"&&l.toLowerCase()==="button")return"button"}function Re(e,n){let l=k(Y(e.value.type,e.value.as));return N(()=>{l.value=Y(e.value.type,e.value.as)}),F(()=>{var o;l.value||$(n)&&$(n)instanceof HTMLButtonElement&&!((o=$(n))!=null&&o.hasAttribute("type"))&&(l.value="button")}),l}var ze=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ze||{});let te=Symbol("DisclosureContext");function V(e){let n=A(te,null);if(n===null){let l=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,V),l}return n}let ne=Symbol("DisclosurePanelContext");function Ve(){return A(ne,null)}let We=L({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(e,{slots:n,attrs:l}){let o=k(e.defaultOpen?0:1),t=k(null),c=k(null),a={buttonId:k(`headlessui-disclosure-button-${W()}`),panelId:k(`headlessui-disclosure-panel-${W()}`),disclosureState:o,panel:t,button:c,toggleDisclosure(){o.value=P(o.value,{0:1,1:0})},closeDisclosure(){o.value!==1&&(o.value=1)},close(i){a.closeDisclosure();let r=(()=>i?i instanceof HTMLElement?i:i.value instanceof HTMLElement?$(i):$(a.button):$(a.button))();r==null||r.focus()}};return B(te,a),Ue(O(()=>P(o.value,{0:H.Open,1:H.Closed}))),()=>{let{defaultOpen:i,...r}=e,u={open:o.value===0,close:a.close};return z({theirProps:r,ourProps:{},slot:u,slots:n,attrs:l,name:"Disclosure"})}}}),Ye=L({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:n,slots:l,expose:o}){let t=V("DisclosureButton"),c=Ve(),a=O(()=>c===null?!1:c.value===t.panelId.value);N(()=>{a.value||e.id!==null&&(t.buttonId.value=e.id)}),G(()=>{a.value||(t.buttonId.value=null)});let i=k(null);o({el:i,$el:i}),a.value||F(()=>{t.button.value=i.value});let r=Re(O(()=>({as:e.as,type:n.type})),i);function u(){var d;e.disabled||(a.value?(t.toggleDisclosure(),(d=$(t.button))==null||d.focus()):t.toggleDisclosure())}function _(d){var v;if(!e.disabled)if(a.value)switch(d.key){case T.Space:case T.Enter:d.preventDefault(),d.stopPropagation(),t.toggleDisclosure(),(v=$(t.button))==null||v.focus();break}else switch(d.key){case T.Space:case T.Enter:d.preventDefault(),d.stopPropagation(),t.toggleDisclosure();break}}function x(d){switch(d.key){case T.Space:d.preventDefault();break}}return()=>{var d;let v={open:t.disclosureState.value===0},{id:y,...g}=e,I=a.value?{ref:i,type:r.value,onClick:u,onKeydown:_}:{id:(d=t.buttonId.value)!=null?d:y,ref:i,type:r.value,"aria-expanded":t.disclosureState.value===0,"aria-controls":t.disclosureState.value===0||$(t.panel)?t.panelId.value:void 0,disabled:e.disabled?!0:void 0,onClick:u,onKeydown:_,onKeyup:x};return z({ourProps:I,theirProps:g,slot:v,attrs:n,slots:l,name:"DisclosureButton"})}}}),qe=L({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:n,slots:l,expose:o}){let t=V("DisclosurePanel");N(()=>{e.id!==null&&(t.panelId.value=e.id)}),G(()=>{t.panelId.value=null}),o({el:t.panel,$el:t.panel}),B(ne,t.panelId);let c=Ne(),a=O(()=>c!==null?(c.value&H.Open)===H.Open:t.disclosureState.value===0);return()=>{var i;let r={open:t.disclosureState.value===0,close:t.close},{id:u,..._}=e,x={id:(i=t.panelId.value)!=null?i:u,ref:t.panel};return z({ourProps:x,theirProps:_,slot:r,attrs:n,slots:l,features:E.RenderStrategy|E.Static,visible:a.value,name:"DisclosurePanel"})}}});const Fe=""+globalThis.__publicAssetsURL("img/logo-ugm.png"),Ge={id:"experience",class:"scroll-mt-20 mt-20"},Ke=["innerHTML"],Je={class:"max-w-2xl mx-auto mt-8"},Qe=s("div",{class:"grow text-left"}," Full Stack Developer @ Fakultas Teknik UGM ",-1),Xe={class:"hidden md:block"},Ze={class:"flex-1 order-last md:order-first"},et={class:"text-gray-600 text-sm flex flex-wrap flex-col md:flex-row gap-1 md:gap-x-5 md:gap-y-1"},tt={class:"flex items-center gap-2"},nt={class:"flex flex-wrap items-center gap-x-2"},lt={class:"flex items-center gap-2"},st=s("div",null,"Yogyakarta, Indonesia",-1),ot=s("div",null,"ft.ugm.ac.id",-1),at=["innerHTML"],rt={class:"mt-4 font-mono text-xs text-white flex flex-wrap gap-x-1 gap-y-1"},it=s("div",null,[s("img",{src:Fe,alt:"Logo UGM",class:"w-24"})],-1),ct=L({__name:"ExperienceSection",setup(e){const n=Q.filter(l=>l.usedIn.includes("ftugm"));return(l,o)=>{const t=U,c=Ye,a=R,i=qe,r=We;return f(),h("section",Ge,[s("h2",{class:"leading-none text-[11vw] md:text-5xl lg:text-6xl font-semibold text-purple-500 text-center",innerHTML:("nl2br"in l?l.nl2br:p(S))(l.$t("landing.experience.title"))},null,8,Ke),s("div",Je,[m(r,{"default-open":!0},{default:w(({open:u})=>[m(c,{class:K(["w-full text-white flex items-center py-2 px-4 rounded-lg",[u?"bg-purple-500":"bg-purple-700"]])},{default:w(()=>[Qe,s("div",Xe,b(l.$t("landing.experience.dateShort")),1),m(t,{name:u?"material-symbols:remove":"material-symbols:add",size:"18px",class:"text-white ml-4"},null,8,["name"])]),_:2},1032,["class"]),m(ae,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform -translate-y-2 opacity-0","enter-to-class":"transform translate-y-0 opacity-100","leave-active-class":"transition duration-75 ease-out","leave-from-class":"transform translate-y-0 opacity-100","leave-to-class":"transform -translate-y-2 opacity-0"},{default:w(()=>[m(i,{class:"bg-purple-50 p-4 rounded-lg mt-1 flex flex-col md:flex-row md:items-center gap-5"},{default:w(()=>[s("div",Ze,[s("div",et,[s("div",tt,[m(t,{name:"material-symbols:date-range-outline"}),s("div",nt,b(l.$t("landing.experience.date")),1)]),s("div",lt,[m(t,{name:"material-symbols:location-on"}),st]),m(a,{to:"http://ft.ugm.ac.id",target:"_blank",class:"flex items-center gap-2"},{default:w(()=>[m(t,{name:"material-symbols:open-in-new"}),ot]),_:1})]),s("p",{class:"mt-4",innerHTML:("nl2br"in l?l.nl2br:p(S))(l.$t("landing.experience.description"))},null,8,at),s("div",rt,[(f(!0),h(D,null,j(p(n),(_,x)=>(f(),h("span",{key:`ftugm-technology-${x}`,class:"inline-block bg-purple-400 py-1 px-3 rounded-full"},b(_.label),1))),128))])]),it]),_:1})]),_:1})]),_:1})])])}}}),ut={id:"work",class:"scroll-mt-20 mt-20"},dt=["innerHTML"],pt=["innerHTML"],mt={class:"mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4"},ft={class:"px-3 mt-3 mb-2"},_t={class:"text-lg font-medium line-clamp-1"},gt=L({__name:"WorkSection",async setup(e){let n,l;const o=ue(),{locale:t}=J(),{data:c}=([n,l]=re(()=>de(`works:${t.value}`,()=>pe("work").where({_locale:t.value}).only(["_path","title","category","thumbnail"]).find())),n=await n,l(),n);return(a,i)=>{const r=ce,u=R;return f(),h("section",ut,[s("h2",{class:"leading-none text-[11vw] md:text-5xl lg:text-6xl font-semibold text-purple-500",innerHTML:("nl2br"in a?a.nl2br:p(S))(a.$t("landing.work.title"))},null,8,dt),s("p",{class:"max-w-xl text-xl mt-6",innerHTML:("nl2br"in a?a.nl2br:p(S))(a.$t("landing.work.description"))},null,8,pt),s("div",mt,[(f(!0),h(D,null,j(p(c),_=>(f(),ie(u,{key:_.title,to:p(o)(_._path),class:"rounded-3xl xl:rounded-[32px] md:p-2.5 md:hover:shadow-[0_0_56px_rgba(54,54,86,0.12)] transition duration-300"},{default:w(()=>[m(r,{src:_.thumbnail,class:"w-full aspect-video object-cover rounded-2xl xl:rounded-3xl",loading:"lazy",placeholder:""},null,8,["src"]),s("div",ft,[s("h4",_t,b(_.title),1),s("div",null,b(_.category),1)])]),_:2},1032,["to"]))),128))])])}}}),ht=[{url:"https://m.me/about.nurmuhammad",text:"Messenger"},{url:"https://wa.me/6287864423038",text:"WhatsApp"},{url:"https://linkedin.com/in/nur-muhammad",text:"LinkedIn"},{url:"https://youtube.com/@nrmuhammad",text:"YouTube"},{url:"https://github.com/ngekoding",text:"GitHub"}],bt=ht,xt={id:"contact",class:"scroll-mt-20 mt-20 bg-purple-50"},vt={class:"container mx-auto px-8 flex flex-col xl:flex-row lg:px-28"},yt={class:"flex-none order-2 xl:order-1 py-16 xl:py-20"},$t={class:"max-w-lg flex flex-col items-start lg:pr-8"},wt=["innerHTML"],kt=["innerHTML"],St={class:"leading-8"},Lt={class:"flex-1 order-1 -mt-5 xl:order-2 xl:-mt-0"},Tt={class:"flex flex-col text-center items-center gap-5 lg:flex-row lg:text-left"},Dt=["src","alt"],It={class:"font-medium leading-tight"},jt={class:"mt-1 text-xs italic"},Ht={class:"flex-1 mt-6"},Ot={class:"relative"},Pt={class:"relative z-10"},Mt=L({__name:"ContactSection",setup(e){const{tm:n,rt:l}=J(),o=n("recommendations");return(t,c)=>{const a=R,i=U;return f(),h("footer",xt,[s("div",vt,[s("div",yt,[s("div",$t,[s("h3",{class:"text-4xl font-bold text-purple-600",innerHTML:("nl2br"in t?t.nl2br:p(S))(t.$t("landing.contact.title"))},null,8,wt),s("p",{class:"mt-4",innerHTML:("nl2br"in t?t.nl2br:p(S))(t.$t("landing.contact.description"))},null,8,kt),m(a,{to:"mailto:about.nurmuhammad@gmail.com",class:"inline-block font-bold text-lg md:text-xl lg:text-2xl my-10 border-b-2 border-dotted border-purple-300 hover:border-purple-500"},{default:w(()=>[C(" about.nurmuhammad@gmail.com ")]),_:1}),s("ul",St,[(f(!0),h(D,null,j(p(bt),r=>(f(),h("li",{key:r.url},[m(a,{to:r.url,target:"_blank",class:"hover:text-purple-500"},{default:w(()=>[C(b(r.text),1)]),_:2},1032,["to"])]))),128))])])]),s("div",Lt,[(f(!0),h(D,null,j(p(o),(r,u)=>(f(),h("div",{key:`recommendation-${u}`,class:K(["text-white p-6 md:p-10 first:rounded-t-lg last:rounded-b-lg xl:first:rounded-t-none xl:last:rounded-b-none",p(l)(r.meta.class)])},[s("div",Tt,[s("img",{src:p(l)(r.author.avatar),alt:p(l)(r.author.name),class:"w-[90px] h-[90px] lg:w-[70px] lg:h-[70px] rounded-full border-2 border-white"},null,8,Dt),s("div",null,[s("div",It,b(p(l)(r.author.name)),1),s("div",jt,b(p(l)(r.author.position)),1)])]),s("div",Ht,[s("div",Ot,[m(i,{name:"bx:bxs-quote-alt-right",class:"absolute z-0 -top-3 -left-3 md:-left-5 text-black/20 text-[50px] rotate-180"}),s("p",Pt,b(p(l)(r.message)),1)])])],2))),128))])])])}}}),Ct={},Et={id:"landing-page"},At={class:"container mx-auto px-8 lg:px-28"};function Bt(e,n){const l=$e,o=Pe,t=ct,c=gt,a=Mt;return f(),h("div",Et,[s("main",At,[m(l),m(o),m(t),m(c)]),m(a)])}const Ft=q(Ct,[["render",Bt]]);export{Ft as default};
