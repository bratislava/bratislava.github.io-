"use strict";(self.webpackChunkbratislava_github_io=self.webpackChunkbratislava_github_io||[]).push([[191],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>u});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=m(o),u=r,h=d["".concat(l,".").concat(u)]||d[u]||p[u]||a;return o?n.createElement(h,s(s({ref:t},c),{},{components:o})):n.createElement(h,s({ref:t},c))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var m=2;m<a;m++)s[m]=o[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2111:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var n=o(7462),r=(o(7294),o(3905));const a={},s="Forms",i={unversionedId:"bratislava.sk/forms-general",id:"bratislava.sk/forms-general",title:"Forms",description:"\ud83d\udd27 This section, as well as the feature itself, is a work-in-progress.",source:"@site/docs/bratislava.sk/forms-general.md",sourceDirName:"bratislava.sk",slug:"/bratislava.sk/forms-general",permalink:"/docs/bratislava.sk/forms-general",draft:!1,editUrl:"https://github.com/bratislava/bratislava.github.io/edit/master/docs/bratislava.sk/forms-general.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Colors and themes setup",permalink:"/docs/bratislava.sk/colors-and-themes"},next:{title:"Custom RJSF widgets",permalink:"/docs/bratislava.sk/forms-uischema"}},l={},m=[{value:"Basic \u2018architecture\u2019 of frontend eForms:",id:"basic-architecture-of-frontend-eforms",level:2},{value:"Developing custom form components",id:"developing-custom-form-components",level:2},{value:"How to create new RJSF component",id:"how-to-create-new-rjsf-component",level:2}],c={toc:m};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"forms"},"Forms"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udd27 This section, as well as the feature itself, is a work-in-progress.")),(0,r.kt)("p",null,"We are using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rjsf-team/react-jsonschema-form"},"react-jsonschema-form")," with our custom form components as widgets to build our form system."),(0,r.kt)("p",null,"We use ",(0,r.kt)("a",{parentName:"p",href:"https://ajv.js.org/"},"AJV")," for validation (and so does react-jsonschema-form)."),(0,r.kt)("p",null,"Read more about ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSON Schema"),"."),(0,r.kt)("h2",{id:"basic-architecture-of-frontend-eforms"},"Basic \u2018architecture\u2019 of frontend eForms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"base path for code is /next in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bratislava/bratislava.sk"},"codebase")),(0,r.kt)("li",{parentName:"ul"},"all form definitions, files and configs are exported from /backed/forms/index.ts"),(0,r.kt)("li",{parentName:"ul"},"everything is rendered in page/","[","eform","]",".tsx - the eform param should match the key exported from backend/forms/index"),(0,r.kt)("li",{parentName:"ul"},"all ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/rjsf-team/react-jsonschema-form"},"rjsf")," config (i.e. custom components to be rendered as input fields) are linked & configured in components/forms/ThemedForm.tsx"),(0,r.kt)("li",{parentName:"ul"},"all the logic between the steps (storing & persisting state, validating & submitting) should concentrate in useFormStepper hook in utils/forms.ts"),(0,r.kt)("li",{parentName:"ul"},"all the forms are submited to pages/api/forms/","[","id","]","/submit.ts - where id matches the key exported from backend/forms/index . Validation (json & xml), transformation, and forwarding to our forms BE service lives in here"),(0,r.kt)("li",{parentName:"ul"},"any supporting functionality should be \u2018linked\u2019 to ine of these entry points")),(0,r.kt)("h2",{id:"developing-custom-form-components"},"Developing custom form components"),(0,r.kt)("p",null,"react-jsonschema-form let's you ",(0,r.kt)("a",{parentName:"p",href:"https://react-jsonschema-form.readthedocs.io/en/latest/advanced-customization/custom-themes/"},"extend the theme"),", as well as specify ",(0,r.kt)("a",{parentName:"p",href:"https://react-jsonschema-form.readthedocs.io/en/latest/usage/widgets/"},"custom widgets")," and ",(0,r.kt)("a",{parentName:"p",href:"https://react-jsonschema-form.readthedocs.io/en/latest/advanced-customization/custom-templates/"},"templates"),"."),(0,r.kt)("p",null,"Since we have our own design system for forms, we prefer overriding all of the components (widgets) using the theme setup. Our custom - themed - form component can be found in ",(0,r.kt)("inlineCode",{parentName:"p"},"components/forms/ThemedForm.tsx"),". You can see it used on ",(0,r.kt)("inlineCode",{parentName:"p"},"pages/forms/[eform].tsx"),"."),(0,r.kt)("p",null,"You can find list of widgets, fields and templates to override in the react-jsonschema-form docs linked above."),(0,r.kt)("h2",{id:"how-to-create-new-rjsf-component"},"How to create new RJSF component"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create ",(0,r.kt)("strong",{parentName:"li"},"new component")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"/components/forms/")," - if your new component is composed out of multiple components, create a folder for all of these components. It's important to keep your component ",(0,r.kt)("strong",{parentName:"li"},"controlled")," by ",(0,r.kt)("strong",{parentName:"li"},"value")," and ",(0,r.kt)("strong",{parentName:"li"},"onChange")," event."),(0,r.kt)("li",{parentName:"ol"},"Add your new component to ",(0,r.kt)("strong",{parentName:"li"},"styleguide"),", to show how it works. You should create component ",(0,r.kt)("strong",{parentName:"li"},"ShowCase")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"/components/styleguide/showcases/")," where you will show all possible versions of the component wrapped in Wrapper and Stack. Then you will use ShowCase in  ",(0,r.kt)("inlineCode",{parentName:"li"},"/pages/styleguide"),"."),(0,r.kt)("li",{parentName:"ol"},"To use correctly your component in RJSF, I would encourage you to create a ",(0,r.kt)("strong",{parentName:"li"},"widget wrapper")," (where you will use component) in ",(0,r.kt)("inlineCode",{parentName:"li"},"/components/forms/widget-wrappers/")," for multiple reasons."),(0,r.kt)("li",{parentName:"ol"},"First reason to use a widget wrapper is the usage of ",(0,r.kt)("strong",{parentName:"li"},"custom props")," in your component. All RJSF widgets have ",(0,r.kt)("a",{parentName:"li",href:"https://react-jsonschema-form.readthedocs.io/en/docs/advanced-customization/custom-widgets-fields/#adding-your-own-custom-widgets"},"these props")," available to use. But we may want to use some more custom props. They can be passed in ",(0,r.kt)("strong",{parentName:"li"},"options")," object in prop. You should read all custom props from options in the widget wrapper and pass them to the original component."),(0,r.kt)("li",{parentName:"ol"},"Second reason to use a widget wrapper is ",(0,r.kt)("strong",{parentName:"li"},"handling of onChange and value types"),". Some components like DatePicker, Select, or Upload may have not primitive types like string, number or array, etc., which are needed in RJSF.  It's necessary to handle value and onChange types, to be compatible with the original component."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Map")," your widget component ",(0,r.kt)("strong",{parentName:"li"},"into schema"),". In ",(0,r.kt)("inlineCode",{parentName:"li"},"/components/forms/ThemedForm.tsx")," add it in object ",(0,r.kt)("strong",{parentName:"li"},"theme")," inside ",(0,r.kt)("strong",{parentName:"li"},"widgets")," property. You can also choose a special name for the component in RJSF."),(0,r.kt)("li",{parentName:"ol"},"Now we can use components in any RJSF form. For ",(0,r.kt)("strong",{parentName:"li"},"testing")," purposes, we can use it in ",(0,r.kt)("inlineCode",{parentName:"li"},"/backend/forms/test"),". We can reach this form in a browser at URL ",(0,r.kt)("inlineCode",{parentName:"li"},"/forms/test"),"."),(0,r.kt)("li",{parentName:"ol"},"Add a new form widget in ",(0,r.kt)("strong",{parentName:"li"},"schema.json"),". There is a list of all form steps. It's better to create a new step where you can create multiple form widgets which will use your custom component. You can read how to add the custom component in schema.json at ",(0,r.kt)("a",{parentName:"li",href:"https://react-jsonschema-form.readthedocs.io/en/docs/advanced-customization/custom-widgets-fields/#adding-your-own-custom-widgets"},"RJSF docs"),". You need to choose value type and optionally also the title and which form widgets will be required."),(0,r.kt)("li",{parentName:"ol"},"Define which custom component will be used in ",(0,r.kt)("strong",{parentName:"li"},"uiSchema.json"),". Do not forget, you must define form widgets exactly like they are ",(0,r.kt)("strong",{parentName:"li"},"nested")," in schema.json. It's possible to choose which custom component will be used in the form for chosen widget through ",(0,r.kt)("inlineCode",{parentName:"li"},'"ui:widget"')," with a name you choose when you mapped your component in ThemedForm. If you want to forbid the default label, you can set ",(0,r.kt)("inlineCode",{parentName:"li"},'"ui:label"')," to false. It's possible to set here multiple component props. All custom props, which are not defined by RJSF, is possible to set through ",(0,r.kt)("inlineCode",{parentName:"li"},'"ui:options"'),". You will find more about uiSchema again in ",(0,r.kt)("a",{parentName:"li",href:"https://react-jsonschema-form.readthedocs.io/en/docs/advanced-customization/custom-widgets-fields/#adding-your-own-custom-widgets"},"RJSF docs"),"."),(0,r.kt)("li",{parentName:"ol"},"When finished, add a description of the widget to the docs here, to know how to set correctly uiSchema.")))}p.isMDXComponent=!0}}]);