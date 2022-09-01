"use strict";(self.webpackChunkbratislava_github_io=self.webpackChunkbratislava_github_io||[]).push([[4417],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=p(n),d=o,m=g["".concat(l,".").concat(d)]||g[d]||c[d]||s;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const s={},a="Logging",i={unversionedId:"nestjs/Logging",id:"nestjs/Logging",title:"Logging",description:"For now use nest default logger, but it will be adjusted in few months",source:"@site/docs/nestjs/Logging.md",sourceDirName:"nestjs",slug:"/nestjs/Logging",permalink:"/docs/nestjs/Logging",draft:!1,editUrl:"https://github.com/bratislava/bratislava.github.io/edit/master/docs/nestjs/Logging.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kubernetes",permalink:"/docs/nestjs/Kubernetes"},next:{title:"Module",permalink:"/docs/nestjs/Module"}},l={},p=[{value:"Installation",id:"installation",level:2},{value:"Setup",id:"setup",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"logging"},"Logging"),(0,o.kt)("p",null,"For now use nest default logger, but it will be adjusted in few months"),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"nothing"),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"create service ",(0,o.kt)("inlineCode",{parentName:"p"},"services/vendors/my-logger.service.ts"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Injectable, NestMiddleware, Logger } from '@nestjs/common';\n\nimport { Request, Response, NextFunction } from 'express';\n\n@Injectable()\nexport class AppLoggerMiddleware implements NestMiddleware {\n  use(request: Request, response: Response, next: NextFunction): void {\n    const { ip, method, originalUrl } = request;\n\n    const userAgent = request.get('user-agent') || '';\n    response.on('close', () => {\n      const { statusCode } = response;\n      const contentLength = response.get('content-length');\n      let status = 'HTTP';\n      if (statusCode >= 400) {\n        status = 'ERROR HTTP';\n      }\n      const logger = new Logger(status);\n\n      logger.log(\n        `${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip},  request-body: ${JSON.stringify(\n          request.body\n        )}, response-data: ???`\n      );\n    });\n\n    next();\n  }\n}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"update ",(0,o.kt)("inlineCode",{parentName:"p"},"app.module.ts")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AppModule {}\n")),(0,o.kt)("p",{parentName:"li"},"into"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AppModule implements NestModule {\n  configure(consumer: MiddlewareConsumer): void {\n    consumer.apply(AppLoggerMiddleware).forRoutes('*');\n  }\n}\n")))))}c.isMDXComponent=!0}}]);