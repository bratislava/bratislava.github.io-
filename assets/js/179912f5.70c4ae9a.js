"use strict";(self.webpackChunkbratislava_github_io=self.webpackChunkbratislava_github_io||[]).push([[1026],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),h=l(n),m=o,u=h["".concat(c,".").concat(m)]||h[m]||d[m]||i;return n?a.createElement(u,s(s({ref:t},p),{},{components:n})):a.createElement(u,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=h;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8471:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},s="General Concepts",r={unversionedId:"strapi/general-concepts",id:"strapi/general-concepts",title:"General Concepts",description:"We use Strapi as our Headless CMS, from which we pull data into Next.js frontend via GraphQL.",source:"@site/docs/strapi/general-concepts.md",sourceDirName:"strapi",slug:"/strapi/general-concepts",permalink:"/docs/strapi/general-concepts",draft:!1,editUrl:"https://github.com/bratislava/bratislava.github.io/edit/master/docs/strapi/general-concepts.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Strapi",permalink:"/docs/category/strapi"},next:{title:"Setup",permalink:"/docs/strapi/setup"}},c={},l=[{value:"Basic concepts of a headless CMS",id:"basic-concepts-of-a-headless-cms",level:2},{value:"&quot;Template&quot; content - pages &amp; entities which always display the same data model",id:"template-content---pages--entities-which-always-display-the-same-data-model",level:3},{value:"Dynamic content with Strapi CMS",id:"dynamic-content-with-strapi-cms",level:3},{value:"Multiple dynamic sections",id:"multiple-dynamic-sections",level:4},{value:"Sharing the same components within multiple content-Types",id:"sharing-the-same-components-within-multiple-content-types",level:4},{value:"Creating content-types and displaying it on frontend",id:"creating-content-types-and-displaying-it-on-frontend",level:2}],p={toc:l};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"general-concepts"},"General Concepts"),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"https://strapi.io/"},"Strapi")," as our Headless CMS, from which we pull data into Next.js frontend via GraphQL."),(0,o.kt)("p",null,"If you are not a developer and are interested primarily in managing content within Strapi, ",(0,o.kt)("a",{parentName:"p",href:"https://docs.strapi.io/user-docs/latest/content-manager/introduction-to-content-manager.html"},"this Strapi user guide on Content Manager")," is a good start."),(0,o.kt)("p",null,"The rest of this section will talk about the basic concepts of modelling our data within Strapi and the way we pull it into our frontend applications."),(0,o.kt)("h2",{id:"basic-concepts-of-a-headless-cms"},"Basic concepts of a headless CMS"),(0,o.kt)("p",null,"A headless CMS like Strapi, as opposed to a 'regular' CMS like Wordpress, does not send us a finished, styled webpages, but sends only raw data to our frontend (our Next.js application) - based on the format and contents of this data we decide what to render."),(0,o.kt)("p",null,"You can read more in ",(0,o.kt)("a",{parentName:"p",href:"https://strapi.io/what-is-headless-cms"},"this Strapi article")),(0,o.kt)("p",null,"Let's distinguish two use-cases from our page ecosystem to illustrate this."),(0,o.kt)("h3",{id:"template-content---pages--entities-which-always-display-the-same-data-model"},'"Template" content - pages & entities which always display the same data model'),(0,o.kt)("p",null,'A straightforward application of the Headless CMS concept is when we have a template page on our frontend and we just fill it with data coming from Strapi. An example of this are "Events" from city-library.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4557).Z,width:"1294",height:"661"})),(0,o.kt)("p",null,"Each of the Event pages contains a cover image, date, title, a rich-text field for text detail, and a few other fields. To implement this, Event is first created as a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.strapi.io/developer-docs/latest/development/backend-customization/models.html#content-types"},"content-type model")," within our Strapi server and populated with all the fields we may require (again, refer to Strapi docs). Instances of the Event model are then pulled into our frontend app using GraphQL."),(0,o.kt)("p",null,"For more info on GraphQL, getting the GraphQL data into React and browsing the gql queries ",(0,o.kt)("a",{parentName:"p",href:"/docs/graphql"},"see the appropriate section"),"."),(0,o.kt)("p",null,"In this use-case, data is always 'consumed' by the same React component(s)."),(0,o.kt)("h3",{id:"dynamic-content-with-strapi-cms"},"Dynamic content with Strapi CMS"),(0,o.kt)("p",null,"Sometimes we want a more 'page-builder' like experience as a Strapi administrator - we may want to add various different React components (think rich-text, tables, galleries, accordions...) to the page or article we are writing, and have control over the order in which they appear. To do this, we are using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.strapi.io/user-docs/latest/content-types-builder/configuring-fields-content-type.html#components"},"Strapi components")," - not to be confused with React components, these are simply reusable data models or in other words combinations of several Strapi data fields - which we then place into ",(0,o.kt)("a",{parentName:"p",href:"https://docs.strapi.io/user-docs/latest/content-types-builder/configuring-fields-content-type.html#dynamic-zones"},"Dynamic Zones")," within their parent content-type. You can see how Dynamic Zones are fetched with GraphQL ",(0,o.kt)("a",{parentName:"p",href:"https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/graphql-api.html#fetch-dynamic-zone-data"},"here"),"."),(0,o.kt)("p",null,"On React's side, we then need to map each Strapi Component instance to an instance of a React component which can render it's data. There is usually a one-to-one mapping between the ",(0,o.kt)("inlineCode",{parentName:"p"},"__typename")," field fetched via gql and a React component. A good example of this is the ",(0,o.kt)("inlineCode",{parentName:"p"},"Sections.tsx")," file from bratislava.sk page:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const SectionContent = ({ section, locale }: { section: SectionsFragment; locale?: string }) => {\n  const { t } = useTranslation("common")\n  switch (section.__typename) {\n    case "ComponentSectionsNarrowText":\n      return (\n        <NarrowText\n          align={section.align ?? undefined}\n          content={section.content ?? undefined}\n          width={section.width ?? undefined}\n          hasBackground={section.hasBackground ?? false}\n        />\n      )\n\n    case "ComponentSectionsIconTitleDesc":\n      return (\n        <RentBenefits\n          title={section.title}\n          list={section.list}\n          linkLabel={t("readMore")}\n          hasBackground={section.hasBackground ?? false}\n        />\n      )\n\n    case "ComponentSectionsDocumentList":\n      return <DocumentList />\n\n    case "ComponentSectionsColumnedText":\n      return (\n        <ColumnedText\n          content={section.content ?? ""}\n          hasBackground={section.hasBackground ?? false}\n        />\n      )\n    // ... and many more sections cases\n  }\n}\n\nconst Sections = ({\n  sections,\n  locale,\n}: {\n  sections: (SectionsFragment | null)[]\n  locale?: string\n}) => {\n  return (\n    <>\n      {sections.map((section, index) => (\n        // eslint-disable-next-line react/no-array-index-key\n        <SectionContent key={index} section={section} locale={locale} />\n      ))}\n    </>\n  )\n}\n\nexport default Sections\n')),(0,o.kt)("p",null,"Mapping the data this way, we'll get our page-builder experience - the CMS admins being able to add new dynamic React components (from a pre-defined set) to their articles by adding the matching Strapi component to lists of dynamic zones within Strapi."),(0,o.kt)("h4",{id:"multiple-dynamic-sections"},"Multiple dynamic sections"),(0,o.kt)("p",null,"You may require multiple 'dynamic' sections within your content-types. I.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"Page")," model in bratislava.sk consists of ",(0,o.kt)("inlineCode",{parentName:"p"},"PageHeaderSections")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Sections")," - the first one is content rendered in Page Header, the other within the 'body' of the page. Page header has it's own set of components which works within this context and is distinct from the components rendered in the body."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5900).Z,width:"1041",height:"601"}),"\n",(0,o.kt)("img",{src:n(9468).Z,width:"1026",height:"322"}),"\n",(0,o.kt)("img",{src:n(7664).Z,width:"1016",height:"598"})),(0,o.kt)("h4",{id:"sharing-the-same-components-within-multiple-content-types"},"Sharing the same components within multiple content-Types"),(0,o.kt)("p",null,"The above does not mean that for each dynamic section the set of Strapi components need to be distinct. I.e. the body of ",(0,o.kt)("inlineCode",{parentName:"p"},"Pages")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"BlogPosts")," consists of the same set of elements, and subsequentially, the code for the two renders the same set of React components and their respective content-types allow for same set of Strapi Components in their Sections dynamic zone."),(0,o.kt)("h2",{id:"creating-content-types-and-displaying-it-on-frontend"},"Creating content-types and displaying it on frontend"),(0,o.kt)("p",null,"The steps when adding a completely new entity model are roughly as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"create a content-type within Strapi - good introduction ",(0,o.kt)("a",{parentName:"li",href:"https://docs.strapi.io/user-docs/latest/content-types-builder/introduction-to-content-types-builder.html"},"here"),", project specifics within the docs of each of our projects as needed. Creating content-types modifies the code, therefore ",(0,o.kt)("strong",{parentName:"li"},"you need to do this from a locally running instance, and commit the changes into git.")),(0,o.kt)("li",{parentName:"ul"},"write the GraphQL query and generate code which fetches it with GraphQL Codegen - see our GraphQL docs(TODO)"),(0,o.kt)("li",{parentName:"ul"},"fetching the data in Next.js and displaying it within our frontend 'template' - see our GraphQL docs(TODO)")),(0,o.kt)("p",null,"For a more concrete example ",(0,o.kt)("a",{parentName:"p",href:"/docs/bratislava.sk/add-new-component-to-sections"},"check out the guide for adding sections to bratislava.sk")," - note that specifics may vary slightly from project to project."))}d.isMDXComponent=!0},9468:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dynamic-zone-header-a01af4209a1edd725d0129999d6193f5.png"},7664:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dynamic-zone-3c83f329d70ed71870a2b2a90e4f4b73.png"},4557:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lib-event-63d81f1c4d77458aa481349fd81c2475.png"},5900:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/page-builder-3bce1a14fa115309228eda4f7f9fd99d.png"}}]);