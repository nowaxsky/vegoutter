"use strict";(self.webpackChunkgatsby_starter_apple=self.webpackChunkgatsby_starter_apple||[]).push([[691],{6738:function(t,e,a){a.r(e);var n=a(5785),i=a(7294),r=a(9),o=a(6968),l=a(7626),d=a(9624),c=a(5106),g=a(8291),m=r.default.main.withConfig({displayName:"pages__Main",componentId:"sc-1891g3r-0"})(["min-width:var(--min-width);min-height:calc(100vh - var(--nav-height) - var(--footer-height));background-color:var(--color-background);"]),u=r.default.div.withConfig({displayName:"pages__Content",componentId:"sc-1891g3r-1"})(["box-sizing:content-box;width:87.5%;max-width:var(--width);padding-top:var(--sizing-lg);padding-bottom:var(--sizing-lg);margin:0 auto;@media (max-width:","){padding-top:var(--grid-gap-lg);width:87.5%;}"],(function(t){return t.theme.device.sm})),s=r.default.h2.withConfig({displayName:"pages__PostTitle",componentId:"sc-1891g3r-2"})(["font-size:2rem;font-weight:var(--font-weight-extra-bold);margin-bottom:var(--sizing-md);line-height:1.21875;@media (max-width:","){font-size:1.75rem;}"],(function(t){return t.theme.device.sm}));e.default=function(t){var e=t.pageContext,a=t.data,r=(0,i.useState)([]),h=r[0],f=r[1],p=e.category,v=a.allMarkdownRemark.edges;(0,i.useLayoutEffect)((function(){(p?v.filter((function(t){var e,a=t.node;return(null==a||null===(e=a.frontmatter)||void 0===e?void 0:e.category)===p})):v).forEach((function(t){var e=t.node,a=e.id,i=(null==e?void 0:e.fields).slug,r=null==e?void 0:e.frontmatter,o=r.title,l=r.desc,d=r.date,c=r.category,g=r.thumbnail,m=r.alt,u=g.childImageSharp;f((function(t){return[].concat((0,n.Z)(t),[{id:a,slug:i,title:o,desc:l,date:d,category:c,thumbnail:null==u?void 0:u.id,alt:m}])}))}))}),[p,v]);var w=(0,o.Z)(),b=p||w.postTitle;return i.createElement(l.Z,null,i.createElement(d.Z,{title:"Home"}),i.createElement(m,null,i.createElement(u,null,i.createElement(g.Z,{categoryList:a.allMarkdownRemark.group,categoryTitle:"領域"}),i.createElement(s,null,b),i.createElement(c.Z,{posts:h}))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-4f91c151ccad8bfdb086.js.map