"use strict";(self.webpackChunkbratislava_github_io=self.webpackChunkbratislava_github_io||[]).push([[44],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(r),g=n,m=f["".concat(l,".").concat(g)]||f[g]||u[g]||i;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1424:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:1},o="Grafana Alerting",s={unversionedId:"recipes/alerting/grafana_alerting",id:"recipes/alerting/grafana_alerting",title:"Grafana Alerting",description:"In recipes for this section, we will discuss",source:"@site/docs/recipes/alerting/grafana_alerting.md",sourceDirName:"recipes/alerting",slug:"/recipes/alerting/grafana_alerting",permalink:"/docs/recipes/alerting/grafana_alerting",draft:!1,editUrl:"https://github.com/bratislava/bratislava.github.io/edit/master/docs/recipes/alerting/grafana_alerting.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Recipes",permalink:"/docs/category/recipes"},next:{title:"Contact Points",permalink:"/docs/recipes/alerting/contact-point"}},l={},p=[],c={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"grafana-alerting"},"Grafana Alerting"),(0,n.kt)("p",null,"In recipes for this section, we will discuss"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"How to setup a new ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://grafana.bratislava.sk/alerting/list"},"alert"))," for your application"),(0,n.kt)("li",{parentName:"ul"},"How to link alerts with specific ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://grafana.com/docs/grafana/latest/alerting/contact-points/"},"contact points"))," for better relevant targeting ",(0,n.kt)("a",{parentName:"li",href:"/docs/recipes/alerting/contact-point"},"\u21f2"),".")),(0,n.kt)("p",null,"We, somewhat arbitrary, split the alert into 3 different categories"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Alerting on application ",(0,n.kt)("strong",{parentName:"li"},"system resources")," (CPU, Memory, Disk, etc.) ",(0,n.kt)("a",{parentName:"li",href:"/docs/recipes/alerting/resource_alert"},"\u21f2")),(0,n.kt)("li",{parentName:"ul"},"Alerting on application's ",(0,n.kt)("strong",{parentName:"li"},"logs")," and specific keywords or pattern in those logs ",(0,n.kt)("a",{parentName:"li",href:"/docs/recipes/alerting/log_alert"},"\u21f2")),(0,n.kt)("li",{parentName:"ul"},"Alerting on ",(0,n.kt)("strong",{parentName:"li"},"availability")," of specific endpoints or data provided by those endpoints ",(0,n.kt)("a",{parentName:"li",href:"/docs/recipes/alerting/endpoint_alert"},"\u21f2"))),(0,n.kt)("p",null,"This categorization is in line with the supporting Grafana applications/data sources, that all have different use-cases and all need a bit different syntax. Currently we support"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},(0,n.kt)("a",{parentName:"em",href:"https://prometheus.io/"},"Prometheus"))," is a monitoring tool that sits on top of our kubernetes infrastructure and provides various metrics about nodes and application health, resources, etc."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},(0,n.kt)("a",{parentName:"em",href:"https://grafana.com/oss/loki/"},"Loki"))," is a Grafana application that specializes in logs monitoring and alerting."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},(0,n.kt)("a",{parentName:"em",href:"https://grafana.com/grafana/plugins/yesoreyeram-infinity-datasource/"},"Infinity"))," is a very simple application that provides HTTP requests capabilities, it can be used to monitor health endpoint and is capable of parsing JSON responses and alerting on them")),(0,n.kt)("p",null,"And for more information on how all of this is setup, please visit ",(0,n.kt)("a",{parentName:"p",href:"/docs/deployment-and-infrastructure/grafana"},"Observability and Monitoring")," section."))}u.isMDXComponent=!0}}]);