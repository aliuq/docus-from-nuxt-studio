import v from"./TabsHeader.7b8b6fe6.js";import{d as o,O as r,k as u}from"./entry.469379ce.js";const d=(n,i)=>n.type&&n.type.tag&&n.type.tag===i,b=o({data(){return{activeTabIndex:0,counter:0}},render(){var c,s;const n=((s=(c=this.$slots)==null?void 0:c.default)==null?void 0:s.call(c))||[],i=n.map((e,p)=>{var a,t,_;return{label:((a=e==null?void 0:e.props)==null?void 0:a.filename)||((t=e==null?void 0:e.props)==null?void 0:t.label)||`${p}`,active:((_=e==null?void 0:e.props)==null?void 0:_.active)||!1,component:e}});return r("div",{class:{"code-group":!0,"first-tab":this.activeTabIndex===0}},[r(v,{ref:"tabs-header",activeTabIndex:this.activeTabIndex,tabs:i,"onUpdate:activeTabIndex":e=>this.activeTabIndex=e}),r("div",{class:"code-group-content",text:this.activeTabIndex},n.map((e,p)=>{var a,t;return r("div",{style:{display:p===this.activeTabIndex?"block":"none"},class:{"":!d(e,"code")&&!d(e,"pre")}},[d(e,"code")||d(e,"pre")?e:r("div",{class:{"preview-canvas":!0}},[((t=(a=e.children)==null?void 0:a.default)==null?void 0:t.call(a))||e.children])])}))])}});const m=u(b,[["__scopeId","data-v-ea40957b"]]);export{m as default};
