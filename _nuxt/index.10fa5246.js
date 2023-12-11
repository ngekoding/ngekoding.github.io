import{_ as q}from"./_plugin-vue_export-helper.c27b6911.js";import{o as f,c as h,a as s,t as b,f as L,g as p,F as D,r as H,b as m,d as C,h as se,i as oe,j as A,k as B,l as S,m as N,n as F,q as O,s as G,w,v as K,T as ae,x as J,y as re,z as ie}from"./entry.ae4cacee.js";import U from"./Icon.07d8f92e.js";import{n as k,_ as ce}from"./nuxt-img.d71aed6a.js";import{_ as R}from"./nuxt-link.3050cc2f.js";import{u as ue}from"./index.433a9933.js";import{u as de,q as pe}from"./query.444366d7.js";import"./preview.b8631db3.js";const me={},fe={id:"hero",class:"min-h-screen pt-16 flex flex-col justify-center"},_e={class:"flex items-center font-mono"},ge=s("span",{class:"inline-block w-1 h-1 bg-purple-500 rounded-full"},null,-1),he={class:"ml-2 text-base lg:text-lg"},be=s("h1",{class:"big-heading text-purple-500"}," Nur Muhammad. ",-1),xe={class:"big-heading"},ve={class:"mt-6 max-w-xl text-base lg:max-w-lg lg:text-xl"};function ye(e,l){return f(),h("section",fe,[s("p",_e,[ge,s("span",he,b(e.$t("landing.hero.intro")),1)]),be,s("h1",xe,b(e.$t("landing.hero.slogan")),1),s("p",ve,b(e.$t("landing.hero.summary")),1)])}const $e=q(me,[["render",ye]]),we=""+globalThis.__publicAssetsURL("img/profile.png"),ke=[{label:"HTML",usedIn:["ftugm"]},{label:"CSS",usedIn:["ftugm"]},{label:"JavaScript",usedIn:["ftugm"]},{label:"Vue.js",usedIn:["ftugm"]},{label:"Nuxt.js",usedIn:[]},{label:"Sass",usedIn:["ftugm"]},{label:"Tailwind CSS",usedIn:["ftugm"]},{label:"PHP",usedIn:["ftugm"]},{label:"CodeIgniter",usedIn:["ftugm"]},{label:"Yii2",usedIn:["ftugm"]},{label:"Laravel/Lumen",usedIn:["ftugm"]},{label:"Node.js",usedIn:["ftugm"]},{label:"Express.js",usedIn:["ftugm"]},{label:"Google Apps Script",usedIn:["ftugm"]},{label:"MySQL",usedIn:["ftugm"]}],Q=ke,Se={id:"about",class:"scroll-mt-20 pb-4 mt-20"},Le={class:"flex flex-col md:flex-row gap-5 md:gap-14"},Te={class:"flex-1 order-last md:order-first z-10"},De={class:"text-2xl font-semibold text-purple-500 mb-4 -mt-[40px] md:mt-0"},Ie=["innerHTML"],He={class:"my-4"},je={class:"font-mono text-sm grid grid-flow-col grid-rows-8 sm:grid-rows-5 auto-cols-max gap-y-2 gap-x-6"},Oe=s("div",{class:"md:basis-1/2 lg:basis-1/3 order-first md:order-last"},[s("div",{class:"sm:max-w-sm mx-auto relative"},[s("img",{src:we,alt:"Profile",class:"object-cover"}),s("div",{class:"absolute -bottom-0.5 w-full h-[120px] bg-gradient-to-t from-white to-transparent"})])],-1),Pe=L({__name:"AboutSection",setup(e){return(l,n)=>{const o=U;return f(),h("section",Se,[s("div",Le,[s("div",Te,[s("h2",De,b(l.$t("landing.about.title")),1),s("p",{innerHTML:("nl2br"in l?l.nl2br:p(k))(l.$t("landing.about.description"))},null,8,Ie),s("p",He,b(l.$t("landing.about.usedTechnologiesTitle")),1),s("ul",je,[(f(!0),h(D,null,H(p(Q),(t,c)=>(f(),h("li",{key:`technology-${c}`},[m(o,{name:"material-symbols:play-arrow-outline",class:"text-purple-500"}),C(" "+b(t.label),1)]))),128))])]),Oe])])}}});var T=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(T||{});function P(e,l,...n){if(e in l){let t=l[e];return typeof t=="function"?t(...n):t}let o=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(l).map(t=>`"${t}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,P),o}var E=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(E||{}),Me=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Me||{});function z({visible:e=!0,features:l=0,ourProps:n,theirProps:o,...t}){var c;let a=Z(o,n),i=Object.assign(t,{props:a});if(e||l&2&&a.static)return M(i);if(l&1){let r=(c=a.unmount)==null||c?0:1;return P(r,{0(){return null},1(){return M({...t,props:{...a,hidden:!0,style:{display:"none"}}})}})}return M(i)}function M({props:e,attrs:l,slots:n,slot:o,name:t}){var c,a;let{as:i,...r}=Ce(e,["unmount","static"]),u=(c=n.default)==null?void 0:c.call(n,o),_={};if(o){let x=!1,d=[];for(let[v,y]of Object.entries(o))typeof y=="boolean"&&(x=!0),y===!0&&d.push(v);x&&(_["data-headlessui-state"]=d.join(" "))}if(i==="template"){if(u=X(u??[]),Object.keys(r).length>0||Object.keys(l).length>0){let[x,...d]=u??[];if(!Ee(x)||d.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${t} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(r).concat(Object.keys(l)).map(g=>g.trim()).filter((g,I,le)=>le.indexOf(g)===I).sort((g,I)=>g.localeCompare(I)).map(g=>`  - ${g}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(g=>`  - ${g}`).join(`
`)].join(`
`));let v=Z((a=x.props)!=null?a:{},r),y=se(x,v);for(let g in v)g.startsWith("on")&&(y.props||(y.props={}),y.props[g]=v[g]);return y}return Array.isArray(u)&&u.length===1?u[0]:u}return oe(i,Object.assign({},r,_),{default:()=>u})}function X(e){return e.flatMap(l=>l.type===D?X(l.children):[l])}function Z(...e){if(e.length===0)return{};if(e.length===1)return e[0];let l={},n={};for(let o of e)for(let t in o)t.startsWith("on")&&typeof o[t]=="function"?(n[t]!=null||(n[t]=[]),n[t].push(o[t])):l[t]=o[t];if(l.disabled||l["aria-disabled"])return Object.assign(l,Object.fromEntries(Object.keys(n).map(o=>[o,void 0])));for(let o in n)Object.assign(l,{[o](t,...c){let a=n[o];for(let i of a){if(t instanceof Event&&t.defaultPrevented)return;i(t,...c)}}});return l}function Ce(e,l=[]){let n=Object.assign({},e);for(let o of l)o in n&&delete n[o];return n}function Ee(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let Ae=0;function Be(){return++Ae}function W(){return Be()}function $(e){var l;return e==null||e.value==null?null:(l=e.value.$el)!=null?l:e.value}let ee=Symbol("Context");var j=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(j||{});function Ne(){return A(ee,null)}function Ue(e){B(ee,e)}function Y(e,l){if(e)return e;let n=l??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function Re(e,l){let n=S(Y(e.value.type,e.value.as));return N(()=>{n.value=Y(e.value.type,e.value.as)}),F(()=>{var o;n.value||$(l)&&$(l)instanceof HTMLButtonElement&&!((o=$(l))!=null&&o.hasAttribute("type"))&&(n.value="button")}),n}var ze=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ze||{});let te=Symbol("DisclosureContext");function V(e){let l=A(te,null);if(l===null){let n=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,V),n}return l}let ne=Symbol("DisclosurePanelContext");function Ve(){return A(ne,null)}let We=L({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(e,{slots:l,attrs:n}){let o=S(e.defaultOpen?0:1),t=S(null),c=S(null),a={buttonId:S(`headlessui-disclosure-button-${W()}`),panelId:S(`headlessui-disclosure-panel-${W()}`),disclosureState:o,panel:t,button:c,toggleDisclosure(){o.value=P(o.value,{0:1,1:0})},closeDisclosure(){o.value!==1&&(o.value=1)},close(i){a.closeDisclosure();let r=(()=>i?i instanceof HTMLElement?i:i.value instanceof HTMLElement?$(i):$(a.button):$(a.button))();r==null||r.focus()}};return B(te,a),Ue(O(()=>P(o.value,{0:j.Open,1:j.Closed}))),()=>{let{defaultOpen:i,...r}=e,u={open:o.value===0,close:a.close};return z({theirProps:r,ourProps:{},slot:u,slots:l,attrs:n,name:"Disclosure"})}}}),Ye=L({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:l,slots:n,expose:o}){let t=V("DisclosureButton"),c=Ve(),a=O(()=>c===null?!1:c.value===t.panelId.value);N(()=>{a.value||e.id!==null&&(t.buttonId.value=e.id)}),G(()=>{a.value||(t.buttonId.value=null)});let i=S(null);o({el:i,$el:i}),a.value||F(()=>{t.button.value=i.value});let r=Re(O(()=>({as:e.as,type:l.type})),i);function u(){var d;e.disabled||(a.value?(t.toggleDisclosure(),(d=$(t.button))==null||d.focus()):t.toggleDisclosure())}function _(d){var v;if(!e.disabled)if(a.value)switch(d.key){case T.Space:case T.Enter:d.preventDefault(),d.stopPropagation(),t.toggleDisclosure(),(v=$(t.button))==null||v.focus();break}else switch(d.key){case T.Space:case T.Enter:d.preventDefault(),d.stopPropagation(),t.toggleDisclosure();break}}function x(d){switch(d.key){case T.Space:d.preventDefault();break}}return()=>{var d;let v={open:t.disclosureState.value===0},{id:y,...g}=e,I=a.value?{ref:i,type:r.value,onClick:u,onKeydown:_}:{id:(d=t.buttonId.value)!=null?d:y,ref:i,type:r.value,"aria-expanded":t.disclosureState.value===0,"aria-controls":t.disclosureState.value===0||$(t.panel)?t.panelId.value:void 0,disabled:e.disabled?!0:void 0,onClick:u,onKeydown:_,onKeyup:x};return z({ourProps:I,theirProps:g,slot:v,attrs:l,slots:n,name:"DisclosureButton"})}}}),qe=L({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:l,slots:n,expose:o}){let t=V("DisclosurePanel");N(()=>{e.id!==null&&(t.panelId.value=e.id)}),G(()=>{t.panelId.value=null}),o({el:t.panel,$el:t.panel}),B(ne,t.panelId);let c=Ne(),a=O(()=>c!==null?(c.value&j.Open)===j.Open:t.disclosureState.value===0);return()=>{var i;let r={open:t.disclosureState.value===0,close:t.close},{id:u,..._}=e,x={id:(i=t.panelId.value)!=null?i:u,ref:t.panel};return z({ourProps:x,theirProps:_,slot:r,attrs:l,slots:n,features:E.RenderStrategy|E.Static,visible:a.value,name:"DisclosurePanel"})}}});const Fe=""+globalThis.__publicAssetsURL("img/logo-ugm.png"),Ge={id:"experience",class:"scroll-mt-20 mt-20"},Ke=["innerHTML"],Je={class:"max-w-3xl mx-auto mt-8"},Qe=s("div",{class:"grow text-left"}," Full Stack Developer @ Fakultas Teknik UGM ",-1),Xe={class:"hidden md:block"},Ze={class:"flex-1 order-last md:order-first"},et={class:"text-gray-600 text-sm flex flex-col gap-1"},tt={class:"flex items-start gap-2"},nt=["innerHTML"],lt={class:"flex items-center gap-2"},st=s("div",null,"Yogyakarta, Indonesia",-1),ot=s("div",null,"ft.ugm.ac.id",-1),at=["innerHTML"],rt={class:"mt-4 font-mono text-xs text-white flex flex-wrap gap-x-1 gap-y-1"},it=s("div",null,[s("img",{src:Fe,alt:"Logo UGM",class:"w-24"})],-1),ct=L({__name:"ExperienceSection",setup(e){const l=Q.filter(n=>n.usedIn.includes("ftugm"));return(n,o)=>{const t=U,c=Ye,a=R,i=qe,r=We;return f(),h("section",Ge,[s("h2",{class:"leading-none text-[11vw] md:text-5xl lg:text-6xl font-semibold text-purple-500 text-center",innerHTML:("nl2br"in n?n.nl2br:p(k))(n.$t("landing.experience.title"))},null,8,Ke),s("div",Je,[m(r,{"default-open":!0},{default:w(({open:u})=>[m(c,{class:K(["w-full text-white flex items-center py-2 px-4 rounded-lg",[u?"bg-purple-500":"bg-purple-700"]])},{default:w(()=>[Qe,s("div",Xe,b(n.$t("landing.experience.dateShort")),1),m(t,{name:u?"material-symbols:remove":"material-symbols:add",size:"18px",class:"text-white ml-4"},null,8,["name"])]),_:2},1032,["class"]),m(ae,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform -translate-y-2 opacity-0","enter-to-class":"transform translate-y-0 opacity-100","leave-active-class":"transition duration-75 ease-out","leave-from-class":"transform translate-y-0 opacity-100","leave-to-class":"transform -translate-y-2 opacity-0"},{default:w(()=>[m(i,{class:"bg-purple-50 p-4 rounded-lg mt-1 flex flex-col md:flex-row md:items-center gap-5"},{default:w(()=>[s("div",Ze,[s("div",et,[s("div",tt,[m(t,{name:"material-symbols:date-range-outline",class:"flex-shrink-0 mt-[3px]"}),s("div",{innerHTML:("nl2br"in n?n.nl2br:p(k))(n.$t("landing.experience.date"))},null,8,nt)]),s("div",lt,[m(t,{name:"material-symbols:location-on",class:"flex-shrink-0"}),st]),m(a,{to:"http://ft.ugm.ac.id",target:"_blank",class:"flex items-center gap-2"},{default:w(()=>[m(t,{name:"material-symbols:open-in-new",class:"flex-shrink-0"}),ot]),_:1})]),s("p",{class:"mt-4",innerHTML:("nl2br"in n?n.nl2br:p(k))(n.$t("landing.experience.description"))},null,8,at),s("div",rt,[(f(!0),h(D,null,H(p(l),(_,x)=>(f(),h("span",{key:`ftugm-technology-${x}`,class:"inline-block bg-purple-400 py-1 px-3 rounded-full"},b(_.label),1))),128))])]),it]),_:1})]),_:1})]),_:1})])])}}}),ut={id:"work",class:"scroll-mt-20 mt-20"},dt=["innerHTML"],pt=["innerHTML"],mt={class:"mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4"},ft={class:"px-3 mt-3 mb-2"},_t={class:"text-lg font-medium line-clamp-1"},gt=L({__name:"WorkSection",async setup(e){let l,n;const o=ue(),{locale:t}=J(),{data:c}=([l,n]=re(()=>de(`works:${t.value}`,()=>pe("work").where({_locale:t.value}).only(["_path","title","category","thumbnail"]).find())),l=await l,n(),l);return(a,i)=>{const r=ce,u=R;return f(),h("section",ut,[s("h2",{class:"leading-none text-[11vw] md:text-5xl lg:text-6xl font-semibold text-purple-500",innerHTML:("nl2br"in a?a.nl2br:p(k))(a.$t("landing.work.title"))},null,8,dt),s("p",{class:"max-w-xl text-xl mt-6",innerHTML:("nl2br"in a?a.nl2br:p(k))(a.$t("landing.work.description"))},null,8,pt),s("div",mt,[(f(!0),h(D,null,H(p(c),_=>(f(),ie(u,{key:_.title,to:p(o)(_._path),class:"rounded-3xl xl:rounded-[32px] md:p-2.5 md:hover:shadow-[0_0_56px_rgba(54,54,86,0.12)] transition duration-300"},{default:w(()=>[m(r,{src:_.thumbnail,class:"w-full aspect-video object-cover rounded-2xl xl:rounded-3xl",loading:"lazy",placeholder:""},null,8,["src"]),s("div",ft,[s("h4",_t,b(_.title),1),s("div",null,b(_.category),1)])]),_:2},1032,["to"]))),128))])])}}}),ht=[{url:"https://m.me/about.nurmuhammad",text:"Messenger",icon:"simple-icons:messenger"},{url:"https://wa.me/6287864423038",text:"WhatsApp",icon:"simple-icons:whatsapp"},{url:"https://linkedin.com/in/nur-muhammad",text:"LinkedIn",icon:"simple-icons:linkedin"},{url:"https://youtube.com/@nrmuhammad",text:"YouTube",icon:"simple-icons:youtube"},{url:"https://github.com/ngekoding",text:"GitHub",icon:"simple-icons:github"}],bt=ht,xt={id:"contact",class:"scroll-mt-20 mt-20 bg-purple-50"},vt={class:"container mx-auto px-8 flex flex-col xl:flex-row lg:px-28"},yt={class:"flex-none order-2 xl:order-1 py-16 xl:py-20"},$t={class:"max-w-lg flex flex-col items-start lg:pr-8"},wt=["innerHTML"],kt=["innerHTML"],St={class:"leading-8"},Lt={class:"flex-1 order-1 -mt-5 xl:order-2 xl:-mt-0"},Tt={class:"flex flex-col text-center items-center gap-5 lg:flex-row lg:text-left"},Dt=["src","alt"],It={class:"font-medium leading-tight"},Ht={class:"mt-1 text-xs italic"},jt={class:"flex-1 mt-6"},Ot={class:"relative"},Pt={class:"relative z-10"},Mt=L({__name:"ContactSection",setup(e){const{tm:l,rt:n}=J(),o=l("recommendations");return(t,c)=>{const a=R,i=U;return f(),h("footer",xt,[s("div",vt,[s("div",yt,[s("div",$t,[s("h3",{class:"text-4xl font-bold text-purple-600",innerHTML:("nl2br"in t?t.nl2br:p(k))(t.$t("landing.contact.title"))},null,8,wt),s("p",{class:"mt-4",innerHTML:("nl2br"in t?t.nl2br:p(k))(t.$t("landing.contact.description"))},null,8,kt),m(a,{to:"mailto:about.nurmuhammad@gmail.com",class:"inline-block font-bold text-lg md:text-xl lg:text-2xl my-10 border-b-2 border-dotted border-purple-300 hover:border-purple-500"},{default:w(()=>[C(" about.nurmuhammad@gmail.com ")]),_:1}),s("ul",St,[(f(!0),h(D,null,H(p(bt),r=>(f(),h("li",{key:r.url},[m(a,{to:r.url,target:"_blank",class:"flex items-center py-0.5 hover:text-purple-500"},{default:w(()=>[m(i,{name:r.icon,class:"mr-3"},null,8,["name"]),C(" "+b(r.text),1)]),_:2},1032,["to"])]))),128))])])]),s("div",Lt,[(f(!0),h(D,null,H(p(o),(r,u)=>(f(),h("div",{key:`recommendation-${u}`,class:K(["text-white p-6 md:p-10 first:rounded-t-lg last:rounded-b-lg xl:first:rounded-t-none xl:last:rounded-b-none",p(n)(r.meta.class)])},[s("div",Tt,[s("img",{src:p(n)(r.author.avatar),alt:p(n)(r.author.name),class:"w-[90px] h-[90px] lg:w-[70px] lg:h-[70px] rounded-full border-2 border-white"},null,8,Dt),s("div",null,[s("div",It,b(p(n)(r.author.name)),1),s("div",Ht,b(p(n)(r.author.position)),1)])]),s("div",jt,[s("div",Ot,[m(i,{name:"bx:bxs-quote-alt-right",class:"absolute z-0 -top-3 -left-3 md:-left-5 text-black/20 text-[50px] rotate-180"}),s("p",Pt,b(p(n)(r.message)),1)])])],2))),128))])])])}}}),Ct={},Et={id:"landing-page"},At={class:"container mx-auto px-8 lg:px-28"};function Bt(e,l){const n=$e,o=Pe,t=ct,c=gt,a=Mt;return f(),h("div",Et,[s("main",At,[m(n),m(o),m(t),m(c)]),m(a)])}const Ft=q(Ct,[["render",Bt]]);export{Ft as default};
