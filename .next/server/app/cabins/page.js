(()=>{var e={};e.id=66,e.ids=[66],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},2361:e=>{"use strict";e.exports=require("events")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1808:e=>{"use strict";e.exports=require("net")},1017:e=>{"use strict";e.exports=require("path")},5477:e=>{"use strict";e.exports=require("punycode")},2781:e=>{"use strict";e.exports=require("stream")},4404:e=>{"use strict";e.exports=require("tls")},7310:e=>{"use strict";e.exports=require("url")},9796:e=>{"use strict";e.exports=require("zlib")},739:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>m,tree:()=>c}),t(3384),t(4071),t(7126),t(784),t(9204),t(1888);var r=t(3191),i=t(8716),a=t(7922),n=t.n(a),o=t(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);t.d(s,l);let c=["",{children:["cabins",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,3384)),"/Users/kerst1/Documents/Udemy/REACT/wild-oasis-website/app/cabins/page.js"]}]},{loading:[()=>Promise.resolve().then(t.bind(t,4071)),"/Users/kerst1/Documents/Udemy/REACT/wild-oasis-website/app/cabins/loading.js"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,4998))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,7126)),"/Users/kerst1/Documents/Udemy/REACT/wild-oasis-website/app/layout.js"],error:[()=>Promise.resolve().then(t.bind(t,784)),"/Users/kerst1/Documents/Udemy/REACT/wild-oasis-website/app/error.js"],loading:[()=>Promise.resolve().then(t.bind(t,9204)),"/Users/kerst1/Documents/Udemy/REACT/wild-oasis-website/app/loading.js"],"not-found":[()=>Promise.resolve().then(t.bind(t,1888)),"/Users/kerst1/Documents/Udemy/REACT/wild-oasis-website/app/not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,4998))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/kerst1/Documents/Udemy/REACT/wild-oasis-website/app/cabins/page.js"],p="/cabins/page",u={require:t,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/cabins/page",pathname:"/cabins",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},3908:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,2481,23)),Promise.resolve().then(t.t.bind(t,9404,23))},3384:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>m,metadata:()=>u});var r=t(9510),i=t(1159),a=t(7710),n=t(7371),o=t(8568);let l=function({cabin:e}){let{id:s,name:t,maxCapacity:i,regularPrice:l,discount:c,image:d}=e;return(0,r.jsxs)("div",{className:"flex border-primary-800 border",children:[r.jsx("div",{className:"flex-1 relative",children:r.jsx(a.default,{src:d,fill:!0,alt:`Cabin ${t}`,className:"object-cover border-r border-primary-800"})}),(0,r.jsxs)("div",{className:"flex-grow",children:[(0,r.jsxs)("div",{className:"pt-5 pb-4 px-7 bg-primary-950",children:[(0,r.jsxs)("h3",{className:"text-accent-500 font-semibold text-2xl mb-3",children:["Cabin ",t]}),(0,r.jsxs)("div",{className:"flex gap-3 items-center mb-2",children:[r.jsx(o.Z,{className:"h-5 w-5 text-primary-600"}),(0,r.jsxs)("p",{className:"text-lg text-primary-200",children:["For up to ",r.jsx("span",{className:"font-bold",children:i})," guests"]})]}),(0,r.jsxs)("p",{className:"flex gap-3 justify-end items-baseline",children:[c>0?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("span",{className:"text-3xl font-[350]",children:["$",l-c]}),(0,r.jsxs)("span",{className:"line-through font-semibold text-primary-600",children:["$",l]})]}):(0,r.jsxs)("span",{className:"text-3xl font-[350]",children:["$",l]}),r.jsx("span",{className:"text-primary-200",children:"/ night"})]})]}),r.jsx("div",{className:"bg-primary-950 border-t border-t-primary-800 text-right",children:r.jsx(n.default,{href:`/cabins/${s}`,className:"border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900",children:"Details & reservation →"})})]})]})};var c=t(5929);async function d(){let e=await (0,c.ee)();return e.length?r.jsx("div",{className:"grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14",children:e.map(e=>r.jsx(l,{cabin:e},e.id))}):null}var p=t(3804);let u={title:"Cabins"};function m(){return(0,r.jsxs)("div",{children:[r.jsx("h1",{className:"text-4xl mb-5 text-accent-400 font-medium",children:"Our Luxury Cabins"}),r.jsx("p",{className:"text-primary-200 text-lg mb-10",children:"Cozy yet luxurious cabins, located right in the heart of the Italian Dolomites. Imagine waking up to beautiful mountain views, spending your days exploring the dark forests around, or just relaxing in your private hot tub under the stars. Enjoy nature's beauty in your own little home away from home. The perfect spot for a peaceful, calm vacation. Welcome to paradise."}),r.jsx(i.Suspense,{fallback:r.jsx(p.Z,{}),children:r.jsx(d,{})})]})}}};var s=require("../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[948,807,290,434],()=>t(739));module.exports=r})();