var Ce=Object.defineProperty;var te=Object.getOwnPropertySymbols;var ke=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var ne=(t,n,a)=>n in t?Ce(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,ae=(t,n)=>{for(var a in n||(n={}))ke.call(n,a)&&ne(t,a,n[a]);if(te)for(var a of te(n))ve.call(n,a)&&ne(t,a,n[a]);return t};var oe=(t,n,a)=>new Promise((o,r)=>{var s=i=>{try{p(a.next(i))}catch(u){r(u)}},c=i=>{try{p(a.throw(i))}catch(u){r(u)}},p=i=>i.done?o(i.value):Promise.resolve(i.value).then(s,c);p((a=a.apply(t,n)).next())});import{r as l,u as M,h as j,j as v,k as re,l as L,R as e,n as y,I as se,H as V,P as Se,F as Ie,L as T,o as W,p as D,q as le,s as O,t as U,C as H,V as ce,v as K,x as Fe,y as ie,z as ue,A as Me,D as G,E as Re,G as Pe,J as Be,K as Te,M as He,N as Ae,O as $e,Q as ze,U as Le,W as De,X as Oe}from"./vendor.2bf3c6ec.js";import{a as pe,i as de,b as A,I as b,G as me,M as Ue,B as Ne,c as je,d as Ve,F as We,g as Ke,e as Ge,O as qe,f as Je}from"./index.1a703921.js";import{_ as fe}from"./index.3664b769.js";import{c as Qe}from"./copy-clip.08e8f9de.js";const ge=(...t)=>t.join("/").replace(/\/{2,}/g,"/");let q;const Xe=pe.CancelToken,Ye=()=>{const{password:t,page:n}=l.exports.useContext(b),{pathname:a}=M();let o=a;return{path:()=>de.post("path",{path:o,password:t,page_num:n.page_num,page_size:n.page_size},{cancelToken:new Xe(function(s){q=s})}),cancelPath:()=>{q&&q()},mkdir:r=>{const s=ge(o,r);return A.post("mkdir",{path:s})},rename:(r,s)=>{const c=ge(o,s);return A.post("rename",{name:r,path:c})},move:(r,s)=>A.post("move",{src_dir:o,dst_dir:s,names:r}),copy:(r,s)=>A.post("copy",{src_dir:o,dst_dir:s,names:r}),refresh:()=>A.post("refresh",{path:o})}};function Ze(t){return me({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M352 115h90c3.3 0 6-2.7 6-6 0-8.2-3.7-16-10-21.3l-77.1-64.2c-4.9-4.1-14.2-7.4-20.6-7.4-4.1 0-7.4 3.3-7.4 7.4V96c.1 10.5 8.6 19 19.1 19z"}},{tag:"path",attr:{d:"M307 96V16H176c-17.6 0-32 14.4-32 32v336c0 17.6 14.4 32 32 32h240c17.6 0 32-14.4 32-32V141h-96c-24.8 0-45-20.2-45-45z"}},{tag:"path",attr:{d:"M116 412V80H96c-17.6 0-32 14.4-32 32v352c0 17.6 14.4 32 32 32h256c17.6 0 32-14.4 32-32v-20H148c-17.6 0-32-14.4-32-32z"}}]})(t)}function kt(t){return me({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 119c0-13.3-9.4-23-22.8-23H198.9c-2.8 0-4.3-.6-6.1-2.4l-22.5-22.5-.2-.2c-4.9-4.6-8.9-6.9-17.3-6.9H56.7C42.9 64 32 74.3 32 87v73.7c0 1.6 1.7 1.5 3 .7s5-1.4 7-1.4h428c2 0 5.7.6 7 1.4 1.3.8 3 .9 3-.7V119zM32 416.4c0 17.5 14.2 31.6 31.6 31.6H448c17.6 0 32-14.4 32-32V204c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v212.4z"}}]})(t)}const et=(t=!1)=>{const{type:n}=l.exports.useContext(b);let{pathname:a}=M(),o="/";o==="/"&&(o=window.location.origin+"/");let r=a.endsWith("/")?a.slice(0,-1):a;return n==="file"&&(r=r.substring(0,r.lastIndexOf("/"))),t?`${o}p${r}`:`${o}d${r}`},tt=t=>Ue.hashStr(t),he=t=>tt(t).slice(8,24),nt=()=>{const{getSetting:t,password:n,loggedIn:a}=l.exports.useContext(b);return(o,r=!0)=>{const s=r?encodeURI(o):o;if(t("check down link")!=="true")return s;const c=o.split("/").pop(),p=localStorage.getItem("admin-token");if(a){const u=he(`alist-${p}-${c}`);return s+(r?encodeURI(`?sign=${u}`):`?sign=${u}`)}if(!n)return s;const i=he(`alist-${n}-${c}`);return s+(r?encodeURI(`?pw=${i}`):`?pw=${i}`)}},xe=(t=!1,n=!0)=>{const a=et(t),o=nt(),{files:r}=l.exports.useContext(b);return(s=void 0)=>{s||(s=r[0]);let c=a;return c.endsWith(s.name)||(c=`${c}/${s.name}`),o(c,n)}};function at(t){return{all:t=t||new Map,on:function(n,a){var o=t.get(n);o?o.push(a):t.set(n,[a])},off:function(n,a){var o=t.get(n);o&&(a?o.splice(o.indexOf(a)>>>0,1):t.set(n,[]))},emit:function(n,a){var o=t.get(n);o&&o.slice().map(function(r){r(a)}),(o=t.get("*"))&&o.slice().map(function(r){r(n,a)})}}}const J=at();function ot(t){if(!t)return"-";const n=1024;return t<n?t+"B":t<Math.pow(n,2)?(t/n).toFixed(2)+"K":t<Math.pow(n,3)?(t/Math.pow(n,2)).toFixed(2)+"M":t<Math.pow(n,4)?(t/Math.pow(n,3)).toFixed(2)+"G":(t/Math.pow(n,4)).toFixed(2)+"T"}const vt=(...t)=>t.join("/").replace(/\/{2,}/g,"/");let Ee=new Date().valueOf(),we=0;const rt=l.exports.forwardRef((t,n)=>{l.exports.useImperativeHandle(n,()=>({upload:()=>{c(0),document.querySelector("#upload-input").click()}}));const{password:a}=l.exports.useContext(b),{pathname:o}=M(),r=j(),[s,c]=l.exports.useState(50),{t:p}=v(),{isOpen:i,onOpen:u,onClose:x}=re(),S=L("gray.100","gray.600"),[C,E]=l.exports.useState("Uploading");return e.createElement(y,null,e.createElement(se,{display:"none",type:"file",multiple:!0,id:"upload-input",onChange:d=>{const g=d.target.files,_=g[0];if(!g||!_)return;u();const w=new FormData;for(let m=0;m<g.length;m++)w.append("files",g[m],g[m].name);w.append("path",o),w.append("password",a),de.post("upload",w,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:m=>{if(m.lengthComputable){const k=m.loaded/m.total*100|0;console.log("complete",k),c(k);const I=new Date().valueOf(),$=(I-Ee)/1e3;if($>1){const P=(m.loaded-we)/$,B=(m.total-m.loaded)/P;E(`${ot(P)}/s  (${p("about remaining")} ${Math.round(B)}${p("s")})`),Ee=I,we=m.loaded}k===100&&E("Back-end processing")}}}).then(m=>{x();const k=document.querySelector("#upload-input");k.value="";const I=m.data;r({title:p(I.message),status:I.code===200?"success":"error",duration:3e3,isClosable:!0}),J.emit("refresh")})}}),e.createElement(y,{zIndex:99,w:{base:"80vw",md:"40vw"},position:"fixed",bottom:"20px",right:"20px",bgColor:S,rounded:"lg",p:4,display:i?"block":"none"},e.createElement(V,{mb:2,fontSize:20},p(C),"..."),e.createElement(Se,{hasStripe:!0,isAnimated:!0,rounded:"lg",value:s})))}),st=()=>{const{t}=v(),n=xe(),a=j(),{show:o,setShow:r,type:s,getSetting:c,files:p,multiSelect:i,selectFiles:u,meta:x,loggedIn:S}=l.exports.useContext(b),C=c("logo"),E=L(C.split(",").shift(),C.split(",").pop());M();const d=l.exports.useRef(null);return e.createElement(Ie,{className:"header",px:"2",py:"2",justify:"space-between",w:"full"},e.createElement(T,{to:"/",className:"logo"},E.includes("http")?e.createElement(W,{fallback:e.createElement(D,{color:c("icon color")||"#1890ff"}),rounded:"lg",h:"44px",w:"auto",src:E}):e.createElement(V,null,E)),e.createElement(le,{className:"buttons",spacing:"2"},s==="file"&&e.createElement(O,{shouldWrapChildren:!0,hasArrow:!0,placement:"bottom",label:t("Download")},e.createElement(U,{cursor:"pointer",boxSize:6,as:Ne,onClick:()=>{if(s==="file"){let g=n();window.open(g,"_blank");return}}})),s==="folder"&&!c("no upload").split(",").includes(x.driver)&&(x.upload||S)&&e.createElement(y,null,e.createElement(O,{shouldWrapChildren:!0,hasArrow:!0,placement:"bottom",label:t("Upload file")},e.createElement(U,{cursor:"pointer",boxSize:6,as:je,onClick:()=>{d.current.upload()}})),e.createElement(rt,{ref:d})),s!=="error"&&e.createElement(O,{shouldWrapChildren:!0,hasArrow:!0,placement:"bottom",label:t("Copy direct link")},e.createElement(U,{cursor:"pointer",boxSize:6,as:Ze,onClick:()=>{let g="";if(s==="file")g=n();else{let _=p;i&&(_=u),g=_.filter(w=>w.type!==1).map(w=>n(w)).join(`
`)}Qe(g),a({title:t("Copied"),status:"success",duration:3e3,isClosable:!0})}})),e.createElement(O,{shouldWrapChildren:!0,hasArrow:!0,placement:"bottom",label:t("switch to layout view",{layout:t(o==="list"?"grid":"list")})},e.createElement(U,{boxSize:6,cursor:"pointer",onClick:()=>{r(o==="list"?"grid":"list"),localStorage.setItem("show",o==="list"?"grid":"list")},as:o==="list"?Ve:We}))))},lt=()=>(v(),l.exports.useContext(b),e.createElement(H,{py:"4",className:"footer"},e.createElement(ce,null,e.createElement(le,{spacing:"2",className:"line0"},e.createElement(K,{isExternal:!0,href:"https://space.bilibili.com/1533406766"},e.createElement(W,{h:"32px",w:"auto",src:"../images/bilibili.png"})),e.createElement(K,{isExternal:!0,href:"https://afdian.net/@luomuyu"},e.createElement(W,{h:"32px",w:"auto",src:"../images/afdian.png"}))),e.createElement(K,{className:"line1",isExternal:!0,href:"https://beian.miit.gov.cn/"},"\u5180ICP\u590720002037\u53F7-7"),e.createElement(T,{to:"/@manage"},"Copyright \xA9 2022 \u6D1B\u6C90\u8BED.All Rights Reserved.")))),ct=()=>{const t=M(),{t:n}=v();return e.createElement(Fe,{spacing:"1",className:"nav",w:"full",px:"2"},e.createElement(ie,null,e.createElement(ue,{_hover:{textDecoration:"none",bg:"rgba(132,133,141,0.18)"},p:"1",rounded:"lg",as:T,to:"/"},Ke("home emoji"),n("Home"))),t.pathname.slice(1).split("/").map((a,o)=>{const r=o===t.pathname.split("/").length-2,s=t.pathname.split("/").slice(0,o+2).join("/");return e.createElement(ie,{key:s,isCurrentPage:r},e.createElement(ue,{isCurrentPage:r,wordBreak:"break-word",as:r?void 0:T,to:encodeURI(s),_hover:{textDecoration:"none",bg:"rgba(132,133,141,0.18)"},p:"1",rounded:"lg"},a))}))},it=({msg:t})=>{const{t:n}=v();return e.createElement(y,{className:"error",textAlign:"center",py:10,px:6},e.createElement(V,{display:"inline-block",size:"xl"},n("ERROR")),e.createElement(Me,{fontSize:"18px",my:3},n(t)),e.createElement(T,{to:"/"},e.createElement(G,{variant:"solid"},n("Back Home"))))},ut=5,pt=[],_e=({file:t,readme:n})=>{L("light","dark");const[a,o]=e.useState(""),[r,s]=e.useState(""),{getSetting:c}=l.exports.useContext(b);let p=xe(!0)(t);v();const i=t.name.endsWith(".html"),[u,x]=e.useState(!1),S=()=>{n&&t.type===-1&&(p=t.url),pe.get(p,{responseType:"blob"}).then(C=>oe(void 0,null,function*(){const E=C.data;let d=yield E.text();d.includes("\uFFFD")&&(d=new TextDecoder("gbk").decode(yield E.arrayBuffer())),i&&s(d),t.name.endsWith(".md")?o(d):o("```"+t.name.split(".").pop()+`
`+d+"\n```")}))};return l.exports.useEffect(()=>(S(),()=>{o("")}),[]),a?e.createElement(y,{w:"full"},i&&e.createElement(Re,{display:"flex",alignItems:"center",m:"1"},e.createElement(Pe,{htmlFor:"render",mb:"0"},"Render?"),e.createElement(Be,{id:"render",isChecked:u,onChange:()=>{x(!u)}})),u?e.createElement("iframe",{srcDoc:r,style:{width:"100%",borderRadius:"0.75rem",boxShadow:"#00000031 0px 1px 10px 5px",minHeight:"70vh"}}):e.createElement(y,{className:"markdown-body"},e.createElement(Ge,null,a))):e.createElement(H,{w:"full"},e.createElement(D,{color:c("icon color"),size:"xl"}))};var St=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",type:ut,exts:pt,default:_e});const dt=l.exports.lazy(()=>fe(()=>import(""+(window.__dynamicImportHandler__||function(t){return t})("./index.513fb8b1.js")+""),(window.__dynamicImportPreload__ || function(importer) { return importer; })(["assets/index.513fb8b1.js","assets/index.e3c95b11.css","assets/vendor.2bf3c6ec.js","assets/index.1a703921.js","assets/index.0d01f00c.css","assets/index.3664b769.js","assets/clsx.m.5ceb7575.js","assets/index.esm.5d66e813.js","assets/copy-clip.08e8f9de.js"]))),mt=l.exports.lazy(()=>fe(()=>import(""+(window.__dynamicImportHandler__||function(t){return t})("./file.15359fb0.js")+""),(window.__dynamicImportPreload__ || function(importer) { return importer; })(["assets/file.15359fb0.js","assets/file.1f390765.css","assets/vendor.2bf3c6ec.js","assets/clsx.m.5ceb7575.js","assets/index.1a703921.js","assets/index.0d01f00c.css","assets/index.3664b769.js","assets/index.esm.5d66e813.js","assets/useTitle.f437284d.js","assets/copy-clip.08e8f9de.js"]))),ft=()=>{const t=L("white","gray.700");v();const{getSetting:n,setPassword:a,password:o,settingLoaded:r,type:s,msg:c,files:p}=l.exports.useContext(b),i=l.exports.useMemo(()=>{if(s==="file")return;const u=p.find(x=>x.name.toLowerCase()==="readme.md");return u===void 0&&location.pathname==="/"&&n("home readme url")?{name:"README.md",size:0,type:-1,driver:"local",updated_at:"",thumbnail:"",url:n("home readme url")}:u},[p,s,r]);return e.createElement(H,{className:"index-box",w:"full"},e.createElement(qe,{list:!0}),e.createElement(ce,{className:"root-box",w:{base:"95%",lg:"980px"}},e.createElement(st,null),e.createElement(ct,null),e.createElement(y,{className:"main-box",rounded:"xl",shadow:"lg",bgColor:t,w:"full"},s==="loading"?e.createElement(H,{w:"full",py:"4"},e.createElement(D,{color:n("icon color")||"#1890ff",size:"xl"})):e.createElement(y,{className:"content-box",w:"full",p:"2"},e.createElement(l.exports.Suspense,{fallback:e.createElement(H,{h:"full"},e.createElement(D,{color:n("icon color")||"#1890ff",size:"xl"}))},s==="folder"||s==="nexting"?e.createElement(dt,null):s==="file"?e.createElement(mt,null):e.createElement(it,{msg:c})))),s!=="loading"&&i&&e.createElement(y,{className:"readme-box",rounded:"xl",shadow:"lg",bgColor:t,w:"full",p:"4"},e.createElement(_e,{file:i,readme:!0})),e.createElement(lt,null)))};const gt=(t,n)=>{const a=l.exports.useRef(!1);l.exports.useEffect(()=>{a.current?t():a.current=!0},n)},ht=t=>{const[n,a]=l.exports.useState({current:!1}),o=l.exports.useCallback(()=>{a({current:!0})},[n]);return l.exports.useEffect(()=>{n.current===!0&&a({current:!1})},[n]),l.exports.useEffect(()=>{n.current&&t()}),o};let Q=!1,N=!1;const xt=t=>{const{type:n,setType:a,setSelectFiles:o,setFiles:r,setLastFiles:s,files:c,setMsg:p,sort:i,password:u,setPassword:x,setMeta:S,getSetting:C,setPage:E,page:d,settingLoaded:g}=l.exports.useContext(b),{t:_}=v(),w=Te(),m=M(),k=j(),{path:I,cancelPath:$}=Ye(),R=ht(()=>{if(!g)return;$(),console.log("refresh"),console.log(d);const h=C("load type");n==="folder"&&s(c),d.page_num===1||h==="all"||h==="pagination"?(a("loading"),o([]),r([])):a("nexting"),I().then(F=>{const f=F.data;p(f.message),f.code===200?(f.data.type==="file"?r(f.data.files):d.page_num===1||h==="all"||h==="pagination"?r(P(f.data.files)):r([...c,...f.data.files]),S(f.data.meta),a(f.data.type)):(f.code===401&&N&&(k({title:_(f.message),status:"error",duration:3e3,isClosable:!0}),N=!1),f.code===1001&&(k({title:_(f.message),status:"warning",duration:3e3,isClosable:!0}),w.push("/@manage")),f.code===401?a("unauthorized"):a("error"))})}),P=h=>{const{orderBy:F,reverse:f}=i;return F?h.sort((Z,ee)=>Z[F]<ee[F]?f?1:-1:Z[F]>ee[F]?f?-1:1:0):h},X=()=>{if(Q){Q=!1;return}R()},B=()=>{d.page_num!==1&&(Q=!0,E({page_num:1,page_size:d.page_size})),R()};l.exports.useEffect(()=>{const h=P(c);r([...h])},[i]),l.exports.useEffect(()=>(B(),J.on("refresh",B),()=>{J.off("refresh",B)}),[m.pathname]),gt(()=>{X()},[d]);const{isOpen:be,onClose:z,onOpen:ye}=re(),Y=e.useRef();return l.exports.useEffect(()=>{n==="unauthorized"&&ye()},[n]),e.createElement(e.Fragment,null,e.createElement(e.Fragment,ae({},t)),e.createElement(He,{initialFocusRef:Y,isOpen:be,onClose:()=>{z()}},e.createElement(Ae,null),e.createElement($e,null,e.createElement(ze,null,_("Input password")),e.createElement(Le,null),e.createElement(De,{pb:6},e.createElement(se,{type:"password",ref:Y,value:u,onChange:h=>{x(h.target.value)},onKeyUp:h=>{h.key==="Enter"&&(localStorage.setItem("password",u),N=!0,R(),z())}})),e.createElement(Oe,null,e.createElement(G,{onClick:()=>{localStorage.setItem("password",u),N=!0,R(),z()},mr:3},_("Ok")),e.createElement(G,{colorScheme:"gray",onClick:()=>{w.goBack(),z()}},_("Cancel"))))))},Et=()=>e.createElement(Je,null,e.createElement(xt,null,e.createElement(ft,null)));var It=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Et});export{kt as I,St as _,nt as a,Ye as b,J as c,xe as d,ot as g,It as i,vt as p,et as u};
