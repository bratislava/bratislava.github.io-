"use strict";(self.webpackChunkbratislava_github_io=self.webpackChunkbratislava_github_io||[]).push([[8767],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={},l="Kubernetes / Lens setup",s={unversionedId:"recipes/kubernetes-lens-setup",id:"recipes/kubernetes-lens-setup",title:"Kubernetes / Lens setup",description:"You can only do this with sufficient access rights - ask Innovations team or Bratislava IT department if connecting to k8s infrastructure is relevant to you.",source:"@site/docs/recipes/kubernetes-lens-setup.md",sourceDirName:"recipes",slug:"/recipes/kubernetes-lens-setup",permalink:"/docs/recipes/kubernetes-lens-setup",draft:!1,editUrl:"https://github.com/bratislava/bratislava.github.io/edit/master/docs/recipes/kubernetes-lens-setup.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Connecting to GraphQL APIs using GraphQL Codegen",permalink:"/docs/recipes/graphql-codegen-setup"},next:{title:"Load Production or Staging database dump in local development",permalink:"/docs/recipes/load-strapi-db-in-local-dev"}},o={},u=[{value:"Installation",id:"installation",level:2},{value:"Login",id:"login",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kubernetes--lens-setup"},"Kubernetes / Lens setup"),(0,a.kt)("p",null,"You can only do this with sufficient access rights - ask Innovations team or Bratislava IT department if connecting to k8s infrastructure is relevant to you."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install kubectl ",(0,a.kt)("inlineCode",{parentName:"li"},"brew install kubectl")," (",(0,a.kt)("inlineCode",{parentName:"li"},"apt install kubectl"),")"),(0,a.kt)("li",{parentName:"ul"},"Download and install vsphere tanzu plugin ",(0,a.kt)("a",{parentName:"li",href:"https://k8s.tanzu.bratislava.sk"},"here"),", you need to be connected on cable or through VPN to magistrat",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Windows - copy ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl-vsphere")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"c:/windows/system32")," (needed admin rights) otherwise ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl vsphere login")," commands will not work"))),(0,a.kt)("li",{parentName:"ul"},"Install kubeseal ",(0,a.kt)("inlineCode",{parentName:"li"},"brew install kubeseal")," (",(0,a.kt)("inlineCode",{parentName:"li"},"apt install kubeseal"),"), for generating secrets"),(0,a.kt)("li",{parentName:"ul"},"Downlad and install lens ",(0,a.kt)("a",{parentName:"li",href:"https://k8slens.dev"},"here")),(0,a.kt)("li",{parentName:"ul"},"optional - if connecting from the outside, ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/adrienverge/openfortivpn"},"openfortivpn")," or similar for establishing VPN connection")),(0,a.kt)("h2",{id:"login"},"Login"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"if you're not on local magistrate network, connect to VPN: ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo openfortivpn vpn.bratislava.sk:443 --username=user.name --trusted-cert 249c03e8a78ee9b45b9f2afa2e13bd59da1384b7377d133fa0caff86af45b28d")),(0,a.kt)("li",{parentName:"ul"},"run kubectl login commands",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"main login \\\n",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl vsphere login --server=10.10.10.1 --insecure-skip-tls-verify -u {{username}}"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"to login through Windows you need to set password ",(0,a.kt)("inlineCode",{parentName:"li"},"export KUBECTL_VSPHERE_PASSWORD={{password}}")))),(0,a.kt)("li",{parentName:"ul"},"logins to clusters",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kubectl vsphere login --server=10.10.10.1 --insecure-skip-tls-verify --tanzu-kubernetes-cluster-name=tkg-innov-dev -u {{username}}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kubectl vsphere login --server=10.10.10.1 --insecure-skip-tls-verify --tanzu-kubernetes-cluster-name=tkg-innov-staging -u {{username}}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kubectl vsphere login --server=10.10.10.1 --insecure-skip-tls-verify --tanzu-kubernetes-cluster-name=tkg-innov-prod -u {{username}}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kubectl vsphere login --server=10.10.10.1 --insecure-skip-tls-verify --tanzu-kubernetes-cluster-name=tkg-master -u {{username}}")," \\\n(optional, you don't need this, its only master cluster)"))))),(0,a.kt)("li",{parentName:"ul"},"open Lens and you shoud see clusters")))}c.isMDXComponent=!0}}]);