import{r as l,a0 as f,ah as g,ad as y,d as k,u as b,b as u,c as m,F as x,ai as B,n as p,e as C,t as H,K as S,aj as A,Y as T,f as q,k as D}from"./entry.469379ce.js";const L=()=>{const a=l(),s=l([]),c=l([]),d=e=>e.forEach(t=>{const r=t.target.id;t.isIntersecting?s.value.push(r):s.value=s.value.filter(n=>n!==r)}),i=e=>e.forEach(t=>{a.value.observe(t)});return f(s,(e,t)=>{e.length===0?c.value=t:c.value=e},{deep:!0}),g(()=>a.value=new IntersectionObserver(d)),y(()=>{var e;return(e=a.value)==null?void 0:e.disconnect()}),{visibleHeadings:s,activeHeadings:c,updateHeadings:i}},M={class:"docs-toc-links"},$=["href","onClick"],w=k({__name:"DocsTocLinks",props:{links:{type:Array,default:()=>[]}},emits:["move"],setup(a,{emit:s}){const c=s,d=b(),{activeHeadings:i,updateHeadings:e}=L();setTimeout(()=>{e([...document.querySelectorAll(".document-driven-page h1, .docus-content h1"),...document.querySelectorAll(".document-driven-page h2, .docus-content h2"),...document.querySelectorAll(".document-driven-page h3, .docus-content h3"),...document.querySelectorAll(".document-driven-page h4, .docus-content h4")])},300);function t(n){d.push(`#${n}`),c("move",n)}function r(n){c("move",n)}return(n,v)=>{const h=E;return u(),m("ul",M,[(u(!0),m(x,null,B(a.links,o=>(u(),m("li",{key:o.text,class:p([`depth-${o.depth}`])},[C("a",{href:`#${o.id}`,class:p([S(i).includes(o.id)&&"active"]),onClick:A(_=>t(o.id),["prevent"])},H(o.text),11,$),o.children?(u(),T(h,{key:0,links:o.children,onMove:v[0]||(v[0]=_=>r(_))},null,8,["links"])):q("",!0)],2))),128))])}}});const E=D(w,[["__scopeId","data-v-7527d99e"]]);export{E as default};
