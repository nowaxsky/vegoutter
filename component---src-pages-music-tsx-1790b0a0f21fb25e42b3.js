"use strict";(self.webpackChunkgatsby_starter_apple=self.webpackChunkgatsby_starter_apple||[]).push([[781],{9241:function(e,t,a){a.d(t,{Z:function(){return I}});var i=a(7294),n=a(5444),r=a(9),o=a(7949),l=r.default.span.withConfig({displayName:"tag__Tag",componentId:"sc-gm6zv7-0"})(["display:block;font-size:0.875rem;font-weight:var(--font-weight-semi-bold);color:var(--color-text-3);line-height:1.5;"]),c=a(6277),d=a(6125),s=function(e){var t=e.src,a=e.alt,r=(0,n.useStaticQuery)("48878111"),o=(0,i.useMemo)((function(){var e=r.allImageSharp.edges.find((function(e){return e.node.id===t}));return null==e?void 0:e.node.gatsbyImageData}),[t,r.allImageSharp.edges]);return i.createElement(u,null,i.createElement(m,null,i.createElement(d.G,{image:o,loading:"eager",alt:null!=a?a:"Thumbnail Image"})))},u=r.default.div.withConfig({displayName:"centeredImg__ThumbnailWrapper",componentId:"sc-ku254p-0"})(['position:relative;width:100%;&::after{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;background-color:var(--color-dimmed);transition:0.3s ease;}']),m=r.default.div.withConfig({displayName:"centeredImg__InnerWrapper",componentId:"sc-ku254p-1"})(["overflow:hidden;"]),f=i.memo(s),g=a(3911),p=function(e){var t,a=e.thumbnail,n=e.alt,r=e.category,d=e.title,s=e.desc,u=e.date,m=e.tags,p=null===(t=g.w.find((function(e){return e.name===r})))||void 0===t?void 0:t.description,y=m.map((function(e){return"#"+e})).join(" ");return i.createElement(h,null,i.createElement(f,{src:a,alt:n}),i.createElement(v,null,i.createElement("div",null,i.createElement(o.Z,null,p),i.createElement(l,null,y),i.createElement(b,null,d),i.createElement(w,null,s)),i.createElement(c.Z,{dateTime:u},u)))},h=r.default.div.withConfig({displayName:"card__Wrapper",componentId:"sc-nx3lqc-0"})(["position:relative;display:flex;flex-direction:column;overflow:hidden;height:100%;border-radius:var(--border-radius-base);background-color:var(--color-card);transform:translateZ(0);"]),v=r.default.div.withConfig({displayName:"card__Text",componentId:"sc-nx3lqc-1"})(["display:flex;flex-direction:column;flex:1 1 auto;justify-content:space-between;padding:var(--sizing-md);& > *{display:block;}"]),b=r.default.h3.withConfig({displayName:"card__Title",componentId:"sc-nx3lqc-2"})(["margin-top:var(--sizing-xs);font-size:var(--text-lg);font-weight:var(--font-weight-bold);line-height:1.3;@media (max-width:","){font-size:1.3125rem;}@media (max-width:","){font-size:var(--text-md);}"],(function(e){return e.theme.device.md}),(function(e){return e.theme.device.sm})),w=r.default.p.withConfig({displayName:"card__Desc",componentId:"sc-nx3lqc-3"})(["line-height:1.5;margin-top:8px;padding-bottom:var(--sizing-sm);color:var(--color-text-2);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-break:break-word;overflow:hidden;text-overflow:ellipsis;"]),y=i.memo(p),x=a(5785),E=function(e){var t=e.posts,a=e.scrollEdgeRef,n=e.maxPostNum,r=void 0===n?10:n,o=e.offsetY,l=void 0===o?400:o,c=(0,i.useState)(!1),d=c[0],s=c[1],u=(0,i.useState)([]),m=u[0],f=u[1],g=(0,i.useState)(!1),p=g[0],h=g[1],v=(0,i.useState)(!1),b=v[0],w=v[1],y=(0,i.useRef)();return(0,i.useLayoutEffect)((function(){t.length&&!p&&(s(t.length>r),f((0,x.Z)(t.slice(0,r))),h(!0))}),[p,t,r]),(0,i.useEffect)((function(){var e=a.current,i={rootMargin:"0px 0px "+l+"px 0px",threshold:[0]};return y.current=new IntersectionObserver((function(e){d&&e.forEach((function(e){var a,i,n;b?e.isIntersecting&&(a=m.length,i=a<t.length,n=i?t.slice(a,a+r):[],s(i),f([].concat((0,x.Z)(m),(0,x.Z)(n)))):w(!0)}))}),i),y.current.observe(e),function(){return y.current&&y.current.disconnect()}})),m},_=r.default.ul.withConfig({displayName:"postGrid__Grid",componentId:"sc-14uqf8l-0"})(["display:grid;grid-gap:var(--grid-gap-xl);grid-template-columns:repeat(2,1fr);list-style:none;& > li{margin-bottom:0;}@media (max-width:","){grid-gap:var(--grid-gap-lg);}"],(function(e){return e.theme.device.sm})),k=r.default.li.withConfig({displayName:"postGrid__List",componentId:"sc-14uqf8l-1"})(["box-sizing:border-box;grid-column:span 1;a{display:block;height:100%;}a:hover ","::after,a:focus ","::after{opacity:1;}& .gatsby-image-wrapper{transition:opacity 1s ease-out,transform 0.5s ease;}a:hover,a:focus{.gatsby-image-wrapper{transform:scale(1.03);}}@media (max-width:","){grid-column:span 2;}"],u,u,(function(e){return e.theme.device.sm})),I=function(e){var t=e.posts,a=(0,i.useRef)(null),r=E({posts:t,scrollEdgeRef:a,maxPostNum:10,offsetY:200});return i.createElement(_,{role:"list"},r.map((function(e){var t=e.id,a=e.slug,r=e.title,o=e.desc,l=e.date,c=e.category,d=e.tags,s=e.thumbnail,u=e.alt,m=r+" - "+c+" - Posted on "+l;return i.createElement(k,{key:t,role:"listitem"},i.createElement(n.Link,{to:null!=a?a:"","aria-label":m},i.createElement(y,{thumbnail:s,alt:u,category:c,title:r,desc:o,date:l,tags:d})))})),i.createElement("div",{ref:a}))}},5135:function(e,t,a){a.d(t,{Z:function(){return p}});var i=a(7294),n=a(5444),r=a(9),o=a(1804),l=a.n(o),c=function(e){var t=e.ref,a=e.targetId;(0,i.useLayoutEffect)((function(){var e=t.current;if(e&&e.scrollWidth>=e.offsetWidth){var i=e.querySelector("#"+a);if(i){var n=i.offsetLeft-e.offsetLeft;e.scrollTo(n-e.offsetWidth/2+i.offsetWidth/2,0)}}}),[t,a])},d="active",s=r.default.nav.withConfig({displayName:"tagFilter__Nav",componentId:"sc-1roymi1-0"})(["display:flex;align-items:center;background-color:var(--color-card);margin-bottom:48px;padding:12px var(--sizing-md);border-radius:var(--border-radius-base);a#active{color:var(--color-white);background-color:var(--color-blue);}@media (max-width:","){padding:12px;}"],(function(e){return e.theme.device.sm})),u=r.default.em.withConfig({displayName:"tagFilter__TagTitle",componentId:"sc-1roymi1-1"})(["position:static;width:auto;height:auto;clip:auto;white-space:auto;flex-shrink:0;font-size:var(--text-base);font-weight:var(--font-weight-semi-bold);font-style:initial;margin-right:var(--sizing-lg);@media (max-width:","){position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(1px,1px,1px,1px);white-space:no-wrap;}"],(function(e){return e.theme.device.sm})),m=(0,r.default)(n.Link).withConfig({displayName:"tagFilter__TagButton",componentId:"sc-1roymi1-2"})(["cursor:pointer;display:block;background-color:var(--color-tag-button);padding:var(--sizing-sm) var(--sizing-base);border-radius:var(--border-radius-base);font-size:0.875rem;font-weight:var(--font-weight-semi-bold);:focus{outline:none;}&:hover{color:var(--color-white);background-color:var(--color-blue);}&:focus-visible{color:var(--color-white);background-color:var(--color-blue);}"]),f=r.default.div.withConfig({displayName:"tagFilter__Divider",componentId:"sc-1roymi1-3"})(["width:1px;height:32px;margin:0 var(--sizing-sm);transform:translateX(-50%);background-color:var(--color-divider);"]),g=r.default.ul.withConfig({displayName:"tagFilter__TagUl",componentId:"sc-1roymi1-4"})(["display:flex;list-style:none;overflow-x:auto;-ms-overflow-style:none;scrollbar-width:none;li + li{margin-left:6px;}"]),p=function(e){var t=e.tagList,a=e.category,n=(0,i.useRef)(null),r=function(e){return e.isCurrent?{id:d,tabIndex:-1}:{}};return c({ref:n,targetId:d}),i.createElement(s,{"aria-label":"Tag Filter"},i.createElement(u,null,"分類標籤"),i.createElement(m,{getProps:r,to:"/"+a+"/"},"全部"),i.createElement(f,null),i.createElement(g,{ref:n,className:"invisible-scrollbar"},t.sort((function(e,t){return t.totalCount-e.totalCount})).map((function(e){var t=e.fieldValue;return i.createElement("li",{key:t},i.createElement(m,{getProps:r,to:"/"+a+"/tag/"+l()(t)+"/"},t))}))))}},9240:function(e,t,a){a.r(t);var i=a(5785),n=a(7294),r=a(9),o=a(6968),l=a(7626),c=a(9624),d=a(9241),s=a(5135),u=r.default.main.withConfig({displayName:"music__Main",componentId:"sc-1yau1u7-0"})(["min-width:var(--min-width);min-height:calc(100vh - var(--nav-height) - var(--footer-height));background-color:var(--color-background);"]),m=r.default.div.withConfig({displayName:"music__Content",componentId:"sc-1yau1u7-1"})(["box-sizing:content-box;width:87.5%;max-width:var(--width);padding-top:var(--sizing-lg);padding-bottom:var(--sizing-lg);margin:0 auto;@media (max-width:","){padding-top:var(--grid-gap-lg);width:87.5%;}"],(function(e){return e.theme.device.sm})),f=r.default.h2.withConfig({displayName:"music__PostTitle",componentId:"sc-1yau1u7-2"})(["font-size:2rem;font-weight:var(--font-weight-extra-bold);margin-bottom:var(--sizing-md);line-height:1.21875;@media (max-width:","){font-size:1.75rem;}"],(function(e){return e.theme.device.sm}));t.default=function(e){var t=e.pageContext,a=e.data,r=(0,n.useState)([]),g=r[0],p=r[1],h=t.tag,v=a.allMarkdownRemark.edges;(0,n.useLayoutEffect)((function(){(h?v.filter((function(e){var t,a=e.node;return null==a||null===(t=a.frontmatter)||void 0===t?void 0:t.tags.includes(h)})):v).forEach((function(e){var t=e.node,a=t.id,n=(null==t?void 0:t.fields).slug,r=null==t?void 0:t.frontmatter,o=r.title,l=r.desc,c=r.date,d=r.category,s=r.tags,u=r.thumbnail,m=r.alt,f=u.childImageSharp;p((function(e){return[].concat((0,i.Z)(e),[{id:a,slug:n,title:o,desc:l,date:c,category:d,tags:s,thumbnail:null==f?void 0:f.id,alt:m}])}))}))}),[h,v]);(0,o.Z)();var b=h;return n.createElement(l.Z,null,n.createElement(c.Z,{title:"Home"}),n.createElement(u,null,n.createElement(m,null,n.createElement(s.Z,{tagList:a.allMarkdownRemark.group,category:"music"}),n.createElement(f,null,b),n.createElement(d.Z,{posts:g}))))}}}]);
//# sourceMappingURL=component---src-pages-music-tsx-1790b0a0f21fb25e42b3.js.map