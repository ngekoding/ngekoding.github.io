import B from"./Icon.b770163d.js";import{_ as C}from"./nuxt-link.b7d6556c.js";import{h as H,b as I,Z as g,m as w,f as L,o as r,M as i,u as o,F as _,a4 as s,K as p,a5 as t,a6 as x,a0 as h,a7 as v,a8 as D,a9 as P}from"./entry.94a41314.js";import{q as f}from"./query.6e2e2a10.js";import{g as V}from"./image.cbe1ec3e.js";import"./config.e420f170.js";import"./Icon.vue.80bd5a09.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./utils.f99a5f80.js";function q(b){return b.replace(/(?:\r\n|\r|\n)/g,"<br>")}const F={class:"container mx-auto pt-24 lg:pt-28 pb-8 px-8 lg:px-28"},O=t("p",null,"The page you are looking for doesn't exists.",-1),S=t("p",{class:"absolute text-sm left-full pl-1.5 transition ease-in-out lg:translate-x-5 lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100"}," Back ",-1),W={class:"inline-block text-sm text-gray-700 relative"},$=t("span",{class:"absolute w-1 h-1 rounded-full bg-purple-400 top-1/2 -translate-y-1/2 -right-2"},null,-1),A={class:"mt-2 text-[11vw] md:text-5xl lg:text-6xl leading-none font-bold md:max-w-[80%] lg:max-w-[60%]"},E={class:"mt-10 max-w-5xl flex flex-col gap-y-5 lg:flex-row lg:gap-x-24"},G=["innerHTML"],K={class:"lg:basis-1/3 lg:flex-shrink-0"},R=t("h4",{class:"font-bold"}," Technologies ",-1),Z={class:"flex flex-wrap gap-1 font-mono text-xs mt-1"},J={class:"mt-6 space-y-4"},Q=["alt"],U={class:"w-full mt-6 lg:fixed lg:w-[270px] lg:bottom-9 lg:right-9 group"},X=["src","alt"],Y={class:"h-full bg-white rounded-lg py-5 lg:px-6"},tt={class:"flex items-center justify-between"},et=t("h4",{class:"font-semibold"}," Next Project ",-1),ot={class:"flex gap-x-2"},lt={class:"text-xl font-medium mt-2"},gt=H({__name:"[...slug]",async setup(b){let e,a;const{path:y}=I(),l=([e,a]=g(()=>f("work").where({_path:y}).findOne()),e=await e,a(),e),[k,j]=([e,a]=g(()=>f().only(["_path","title","category","thumbnail"]).findSurround(y)),e=await e,a(),e),M=([e,a]=g(()=>f("work").sort({_id:1}).only(["_path","title","category","thumbnail"]).limit(1).find()),e=await e,a(),e),z=([e,a]=g(()=>f("work").sort({_id:-1}).only(["_path","title","category","thumbnail"]).limit(1).find()),e=await e,a(),e),N=w(()=>k??z[0]),d=w(()=>j??M[0]);return L({title:`${l==null?void 0:l.title} Project`}),(m,st)=>{const c=B,u=C,T=D("lazy");return r(),i("main",F,[o(l)?(r(),i(_,{key:1},[s(u,{to:{path:"/",hash:"#work"},class:"relative mb-7 w-10 h-10 md:w-11 md:h-11 lg:fixed lg:top-20 lg:left-9 lg:w-12 lg:h-12 flex items-center justify-center bg-gray-50 hover:bg-purple-50 rounded-full group"},{default:p(()=>[s(c,{name:"material-symbols:arrow-back"}),S]),_:1}),t("div",W,[x(h(o(l).category)+" ",1),$]),t("h1",A,h(o(l).title),1),t("div",E,[t("p",{class:"lg:flex-auto",innerHTML:("nl2br"in m?m.nl2br:o(q))(o(l).content)},null,8,G),t("div",K,[t("div",null,[R,t("div",Z,[(r(!0),i(_,null,v(o(l).technologies,n=>(r(),i("span",{key:n,class:"inline-block px-3 py-1 bg-purple-400 text-white rounded-full"},h(n),1))),128))])]),s(u,{to:o(l).url,target:"_blank",class:"block mt-5 text-purple-500 group"},{default:p(()=>[x(" Open Project "),s(c,{name:"material-symbols:arrow-right-alt",size:"18px",class:"group-hover:translate-x-0.5"})]),_:1},8,["to"])])]),t("div",J,[(r(!0),i(_,null,v(o(l).screenshots,n=>(r(),i("div",{key:n,class:"border border-gray-100"},[P(t("img",{alt:n.alt,class:"w-full"},null,8,Q),[[T,{src:n.url,loading:("getMinifiedImg"in m?m.getMinifiedImg:o(V))(n.url)}]])]))),128))]),t("div",U,[t("img",{src:o(d).thumbnail,alt:o(d).title,class:"hidden lg:block absolute -z-10 h-24 w-full object-cover rounded-t-lg bottom-full transition duration-300 ease-in-out translate-y-5 opacity-0 group-hover:translate-y-2 group-hover:opacity-100"},null,8,X),t("div",Y,[t("div",tt,[et,t("div",ot,[s(u,{to:o(N)._path,class:"bg-gray-50 hover:bg-purple-50 w-11 h-11 rounded-full flex items-center justify-center"},{default:p(()=>[s(c,{name:"material-symbols:arrow-back"})]),_:1},8,["to"]),s(u,{to:o(d)._path,class:"bg-gray-50 hover:bg-purple-50 w-11 h-11 rounded-full flex items-center justify-center"},{default:p(()=>[s(c,{name:"material-symbols:arrow-forward"})]),_:1},8,["to"])])]),t("h2",lt,h(o(d).title),1)])])],64)):(r(),i(_,{key:0},[O,s(u,{to:"/",class:"block mt-4 font-mono text-sm text-purple-500 group"},{default:p(()=>[s(c,{name:"material-symbols:keyboard-backspace",size:"18px",class:"group-hover:-translate-x-0.5"}),x(" Go Home ")]),_:1})],64))])}}});export{gt as default};
