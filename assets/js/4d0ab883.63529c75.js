"use strict";(self.webpackChunkbratislava_github_io=self.webpackChunkbratislava_github_io||[]).push([[7288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={},i="Moving to live production checklist",s={unversionedId:"recipes/production-deployment-checklist",id:"recipes/production-deployment-checklist",title:"Moving to live production checklist",description:"What to not forget when moving from staging to live production.",source:"@site/docs/recipes/production-deployment-checklist.md",sourceDirName:"recipes",slug:"/recipes/production-deployment-checklist",permalink:"/docs/recipes/production-deployment-checklist",draft:!1,editUrl:"https://github.com/bratislava/bratislava.github.io/edit/master/docs/recipes/production-deployment-checklist.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setup Postgres & tools",permalink:"/docs/recipes/postgres-setup"},next:{title:"Sentry initial setup",permalink:"/docs/recipes/sentry-setup"}},l={},p=[{value:"What to not forget when moving from staging to live production.",id:"what-to-not-forget-when-moving-from-staging-to-live-production",level:3},{value:"1. Set up secrets on production",id:"1-set-up-secrets-on-production",level:2},{value:"2. Deploy the app to production.",id:"2-deploy-the-app-to-production",level:2},{value:"3. Synchronize databases from staging",id:"3-synchronize-databases-from-staging",level:2},{value:"4. Add external hostname in ingress.",id:"4-add-external-hostname-in-ingress",level:2},{value:"5. Check if everything is fine",id:"5-check-if-everything-is-fine",level:2},{value:"6. Add a new domain to the internal DNS",id:"6-add-a-new-domain-to-the-internal-dns",level:2},{value:"7. Prepare for the final hostname move",id:"7-prepare-for-the-final-hostname-move",level:2},{value:"8. Add new hostname to ingress and config.json",id:"8-add-new-hostname-to-ingress-and-configjson",level:2},{value:"9. Set domain TTL (needs to be done few days before the move)",id:"9-set-domain-ttl-needs-to-be-done-few-days-before-the-move",level:2},{value:"10. Change DNS records to kubernetes records",id:"10-change-dns-records-to-kubernetes-records",level:2},{value:"11. Check the status",id:"11-check-the-status",level:2},{value:"Webpage is not in kubernetes",id:"webpage-is-not-in-kubernetes",level:2},{value:"Certificate is invalid",id:"certificate-is-invalid",level:2},{value:"Other problem with certificate",id:"other-problem-with-certificate",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"moving-to-live-production-checklist"},"Moving to live production checklist"),(0,o.kt)("h3",{id:"what-to-not-forget-when-moving-from-staging-to-live-production"},"What to not forget when moving from staging to live production."),(0,o.kt)("h2",{id:"1-set-up-secrets-on-production"},"1. Set up secrets on production"),(0,o.kt)("p",null,"Don't forget to check folder /kubernetes/base/secrets and synchronize all needed secrets to the ",(0,o.kt)("inlineCode",{parentName:"p"},"prod")," cluster.\nHandy commands for secrets:"),(0,o.kt)("p",null,"We are saving secrets by kubeseal. You need to run this command that creates the file ",(0,o.kt)("inlineCode",{parentName:"p"},"database.secret.yml"),", where all our values are encrypted and safe to add to the repository."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubeseal --controller-name=sealed-secrets --scope=namespace-wide --namespace=standalone --format=yaml < database.yml > database.secret.yml\n")),(0,o.kt)("p",null,"If you want to propagate a sealed secret to Kubernetes, you can run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f database.secret.yml\n")),(0,o.kt)("h2",{id:"2-deploy-the-app-to-production"},"2. Deploy the app to production."),(0,o.kt)("p",null,"If the project uses pipelines, you can quickly call bratiska-cli with the command ",(0,o.kt)("inlineCode",{parentName:"p"},"bratiska-cli tag prod")," from the app folder. If you are not using pipelines, you need to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"git checkout master")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"git pull")),(0,o.kt)("li",{parentName:"ol"},"move to the folder where is ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," located"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"bratiska-cli deploy --production"))),(0,o.kt)("h2",{id:"3-synchronize-databases-from-staging"},"3. Synchronize databases from staging"),(0,o.kt)("p",null,"If the deployment has the database, don't forget to move the newest version to production. You can grab the db from azure backup pipelines or download it from the staging cluster directly. If you have a db file, you can run the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Have a look on this guide: ",(0,o.kt)("a",{parentName:"li",href:"https://bratislava.github.io/docs/strapi/sync-strapi-db-to-different-env"},"https://bratislava.github.io/docs/strapi/sync-strapi-db-to-different-env"))),(0,o.kt)("h2",{id:"4-add-external-hostname-in-ingress"},"4. Add external hostname in ingress."),(0,o.kt)("p",null,"If the web is going to be live in a different address, you must first add ",(0,o.kt)("inlineCode",{parentName:"p"},"bratislavainovuje.sk")," as your hostname to check if all network features are working correctly.\nLike here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  tls:\n    - hosts:\n        - marianum-next.bratislava.sk\n        - www.marianum-next.bratislava.sk\n        - www.bratislavainovuje.sk\n        - bratislavainovuje.sk\n      secretName: marianum-next-tls\n  rules:\n    - host: marianum-next.bratislava.sk\n      http:\n        paths:\n          - path: /\n            pathType: ImplementationSpecific\n            backend:\n              service:\n                name: marianum-next-app\n                port:\n                  number: 80\n    - host: www.marianum-next.bratislava.sk\n      http:\n        paths:\n          - path: /\n            pathType: ImplementationSpecific\n            backend:\n              service:\n                name: marianum-next-app\n                port:\n                  number: 80\n    - host: bratislavainovuje.sk\n      http:\n        paths:\n          - path: /\n            pathType: ImplementationSpecific\n            backend:\n              service:\n                name: marianum-next-app\n                port:\n                  number: 80\n    - host: www.bratislavainovuje.sk\n      http:\n        paths:\n          - path: /\n            pathType: ImplementationSpecific\n            backend:\n              service:\n                name: marianum-next-app\n                port:\n                  number: 80\n")),(0,o.kt)("p",null,"As you can see ",(0,o.kt)("inlineCode",{parentName:"p"},"marianum-next.bratislava.sk")," is default app name and ",(0,o.kt)("inlineCode",{parentName:"p"},"bratislavainovuje.sk")," is new host name."),(0,o.kt)("p",null,"Also, don't forget to update ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"kubernetes/envs/Prod")," where the host is specified:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "host": "bratislavainovuje.sk"\n}\n')),(0,o.kt)("h2",{id:"5-check-if-everything-is-fine"},"5. Check if everything is fine"),(0,o.kt)("p",null,"Now you need to check if all website features are working fine and if there are no bugs. It is worth trying external services used on the page if they work away from the ",(0,o.kt)("inlineCode",{parentName:"p"},"bratislava.sk")," domain."),(0,o.kt)("h2",{id:"6-add-a-new-domain-to-the-internal-dns"},"6. Add a new domain to the internal DNS"),(0,o.kt)("p",null,"Your new domain needs to be manually added to the internal network DNS. Please get in touch with ",(0,o.kt)("a",{parentName:"p",href:"mailto:filip.krajcik@bratislava.sk"},"filip.krajcik@bratislava.sk")," on this issue. Otherwise, certificate creation will not work!"),(0,o.kt)("h2",{id:"7-prepare-for-the-final-hostname-move"},"7. Prepare for the final hostname move"),(0,o.kt)("p",null,"The new domain must check its current DNS records to avoid misconfiguration. So use this website for nslookup:\n",(0,o.kt)("a",{parentName:"p",href:"https://www.nslookup.io/domains/bratislavainovuje.sk/dns-records/"},"https://www.nslookup.io/domains/bratislavainovuje.sk/dns-records/")," where you add your desired domain.\nIf the results contain AAAA records, it is necessary to remove them immediately because this can cause an issue. Our kubernetes infrastructure is IPV4 only. So after removal in 15 mins, AAAA records should be empty.\nRecheck if everything is done with the website: ",(0,o.kt)("a",{parentName:"p",href:"https://www.nslookup.io."},"https://www.nslookup.io."),"\nAlso, it is good to check if everything is prepared for let's encrypt where you add your new domain: ",(0,o.kt)("a",{parentName:"p",href:"https://letsdebug.net/"},"https://letsdebug.net/")),(0,o.kt)("h2",{id:"8-add-new-hostname-to-ingress-and-configjson"},"8. Add new hostname to ingress and config.json"),(0,o.kt)("p",null,"The time has come, now add to ingress your new hostname, same as you added ",(0,o.kt)("inlineCode",{parentName:"p"},"bratislavainovuje.sk"),". Also, you need to change a value in ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json")," to your new hostname:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "host": "newhostname.sk"\n}\n')),(0,o.kt)("p",null,"Let things propagate, and we are now ready for the moving procedure."),(0,o.kt)("h2",{id:"9-set-domain-ttl-needs-to-be-done-few-days-before-the-move"},"9. Set domain TTL (needs to be done few days before the move)"),(0,o.kt)("p",null,"Few days before the move, you need to set the TTL of the domain to 5 minute. This will speed up the propagation of the new DNS records. You can do this in the domain provider.\nHour before the move, you need to set the TTL to 1 minute."),(0,o.kt)("h2",{id:"10-change-dns-records-to-kubernetes-records"},"10. Change DNS records to kubernetes records"),(0,o.kt)("p",null,"Set A records in DNS to kubernetes public IP: ",(0,o.kt)("inlineCode",{parentName:"p"},"90.176.20.247"),"\nDelete any remaining AAAA records, as this can cause certificate issues."),(0,o.kt)("h2",{id:"11-check-the-status"},"11. Check the status"),(0,o.kt)("p",null,"After 15 mins, all changes should be propagated, and the new Certificate with a domain should be properly running in our production kubernetes. If something is failing, check the Troubleshooting section."),(0,o.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h2",{id:"webpage-is-not-in-kubernetes"},"Webpage is not in kubernetes"),(0,o.kt)("p",null,"The webpage link still shows the old version on the old server. Check if DNS was changed correctly and if there are no remaining AAAA records that can point out to the different server."),(0,o.kt)("h2",{id:"certificate-is-invalid"},"Certificate is invalid"),(0,o.kt)("p",null,"If you receive an error on acme request 404 or 503, there is a chance that some DNS records are not properly routed.\nCheck ",(0,o.kt)("a",{parentName:"p",href:"https://letsdebug.net/"},"https://letsdebug.net/")," and type the domain there and see if there are some errors.\nCheck if the Certificate is generated for the ",(0,o.kt)("inlineCode",{parentName:"p"},"www")," domain like ",(0,o.kt)("inlineCode",{parentName:"p"},"www.bratislavainovuje.sk")," and see if there are the same errors or Certificate is generated without any problem."),(0,o.kt)("h2",{id:"other-problem-with-certificate"},"Other problem with certificate"),(0,o.kt)("p",null,"If you have any other problem with certificate, please contact Richard Dvorsky, he can help you with this issue."))}c.isMDXComponent=!0}}]);