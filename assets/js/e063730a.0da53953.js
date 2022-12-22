"use strict";(self.webpackChunkbratislava_github_io=self.webpackChunkbratislava_github_io||[]).push([[191],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>u});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=m(o),u=a,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||r;return o?n.createElement(h,s(s({ref:t},p),{},{components:o})):n.createElement(h,s({ref:t},p))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var m=2;m<r;m++)s[m]=o[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2111:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var n=o(7462),a=(o(7294),o(3905));const r={},s="Forms",i={unversionedId:"bratislava.sk/forms-general",id:"bratislava.sk/forms-general",title:"Forms",description:"\ud83d\udd27 This section, as well as the feature itself, is a work-in-progress.",source:"@site/docs/bratislava.sk/forms-general.md",sourceDirName:"bratislava.sk",slug:"/bratislava.sk/forms-general",permalink:"/docs/bratislava.sk/forms-general",draft:!1,editUrl:"https://github.com/bratislava/bratislava.github.io/edit/master/docs/bratislava.sk/forms-general.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Colors and themes setup",permalink:"/docs/bratislava.sk/colors-and-themes"},next:{title:"Custom RJSF widgets",permalink:"/docs/bratislava.sk/forms-uischema"}},l={},m=[{value:"Basic \u2018architecture\u2019 of frontend eForms:",id:"basic-architecture-of-frontend-eforms",level:2},{value:"Adding new eForm",id:"adding-new-eform",level:2},{value:"Developing custom form components",id:"developing-custom-form-components",level:2},{value:"How to create new RJSF component",id:"how-to-create-new-rjsf-component",level:2}],p={toc:m};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"forms"},"Forms"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud83d\udd27 This section, as well as the feature itself, is a work-in-progress.")),(0,a.kt)("p",null,"We are using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rjsf-team/react-jsonschema-form"},"react-jsonschema-form")," with our custom form components as widgets to build our form system."),(0,a.kt)("p",null,"We use ",(0,a.kt)("a",{parentName:"p",href:"https://ajv.js.org/"},"AJV")," for validation (and so does react-jsonschema-form)."),(0,a.kt)("p",null,"Read more about ",(0,a.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSON Schema"),"."),(0,a.kt)("h2",{id:"basic-architecture-of-frontend-eforms"},"Basic \u2018architecture\u2019 of frontend eForms:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"base path for code is /next in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/bratislava/bratislava.sk"},"codebase")),(0,a.kt)("li",{parentName:"ul"},"all form definitions, files and configs are exported from /backed/forms/index.ts"),(0,a.kt)("li",{parentName:"ul"},"everything is rendered in page/","[","eform","]",".tsx - the eform param should match the key exported from backend/forms/index"),(0,a.kt)("li",{parentName:"ul"},"all ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rjsf-team/react-jsonschema-form"},"rjsf")," config (i.e. custom components to be rendered as input fields) are linked & configured in components/forms/ThemedForm.tsx"),(0,a.kt)("li",{parentName:"ul"},"all the logic between the steps (storing & persisting state, validating & submitting) should concentrate in useFormStepper hook in utils/forms.ts"),(0,a.kt)("li",{parentName:"ul"},"all the forms are submited to pages/api/forms/","[","id","]","/submit.ts - where id matches the key exported from backend/forms/index . Validation (json & xml), transformation, and forwarding to our forms BE service lives in here"),(0,a.kt)("li",{parentName:"ul"},"any supporting functionality should be \u2018linked\u2019 to ine of these entry points")),(0,a.kt)("h2",{id:"adding-new-eform"},"Adding new eForm"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a JSON schema. ",(0,a.kt)("a",{parentName:"li",href:"https://rjsf-team.github.io/react-jsonschema-form/"},"RJSF playground ")," may be useful."),(0,a.kt)("li",{parentName:"ol"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@bratislava/json-schema-xsd-tools"},"@bratislava/json-schema-xsd-tools")," globally - run ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn global add @bratislava/json-schema-xsd-tools")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"npm i -g @bratislava/json-schema-xsd-tools")),(0,a.kt)("li",{parentName:"ol"},"Run command ",(0,a.kt)("inlineCode",{parentName:"li"},"json-schema-xsd-tools generate -j <json-path> -o <out>"),", where ",(0,a.kt)("inlineCode",{parentName:"li"},"json-path")," is path to prepared JSON schema and ",(0,a.kt)("inlineCode",{parentName:"li"},"out")," is eForm name (default form)."),(0,a.kt)("li",{parentName:"ol"},"File ",(0,a.kt)("inlineCode",{parentName:"li"},"<out>.ts")," and folder ",(0,a.kt)("inlineCode",{parentName:"li"},"<out>")," are generated. Output folder includes XSD schema, stylesheets (for text, html and pdf transformations), xml template and some mock data. Copy these files into ",(0,a.kt)("inlineCode",{parentName:"li"},"/backend/forms")," in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/bratislava/bratislava.sk"},"bratislava.sk"),". Also update ",(0,a.kt)("inlineCode",{parentName:"li"},"/backed/forms/index.ts"),"."),(0,a.kt)("li",{parentName:"ol"},"Run tests - run ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn test")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"npm run test"),". If you would like to exclude form from tests (not recommended), include form name to ",(0,a.kt)("inlineCode",{parentName:"li"},"excludeKeys")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"__tests__/forms.test.ts"))),(0,a.kt)("h2",{id:"developing-custom-form-components"},"Developing custom form components"),(0,a.kt)("p",null,"react-jsonschema-form let's you ",(0,a.kt)("a",{parentName:"p",href:"https://react-jsonschema-form.readthedocs.io/en/latest/advanced-customization/custom-themes/"},"extend the theme"),", as well as specify ",(0,a.kt)("a",{parentName:"p",href:"https://react-jsonschema-form.readthedocs.io/en/latest/usage/widgets/"},"custom widgets")," and ",(0,a.kt)("a",{parentName:"p",href:"https://react-jsonschema-form.readthedocs.io/en/latest/advanced-customization/custom-templates/"},"templates"),"."),(0,a.kt)("p",null,"Since we have our own design system for forms, we prefer overriding all of the components (widgets) using the theme setup. Our custom - themed - form component can be found in ",(0,a.kt)("inlineCode",{parentName:"p"},"components/forms/ThemedForm.tsx"),". You can see it used on ",(0,a.kt)("inlineCode",{parentName:"p"},"pages/forms/[eform].tsx"),"."),(0,a.kt)("p",null,"You can find list of widgets, fields and templates to override in the react-jsonschema-form docs linked above."),(0,a.kt)("h2",{id:"how-to-create-new-rjsf-component"},"How to create new RJSF component"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create ",(0,a.kt)("strong",{parentName:"li"},"new component")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"/components/forms/")," - if your new component is composed out of multiple components, create a folder for all of these components. It's important to keep your component ",(0,a.kt)("strong",{parentName:"li"},"controlled")," by ",(0,a.kt)("strong",{parentName:"li"},"value")," and ",(0,a.kt)("strong",{parentName:"li"},"onChange")," event."),(0,a.kt)("li",{parentName:"ol"},"Add your new component to ",(0,a.kt)("strong",{parentName:"li"},"styleguide"),", to show how it works. You should create component ",(0,a.kt)("strong",{parentName:"li"},"ShowCase")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"/components/styleguide/showcases/")," where you will show all possible versions of the component wrapped in Wrapper and Stack. Then you will use ShowCase in ",(0,a.kt)("inlineCode",{parentName:"li"},"/pages/styleguide"),"."),(0,a.kt)("li",{parentName:"ol"},"To use correctly your component in RJSF, I would encourage you to create a ",(0,a.kt)("strong",{parentName:"li"},"widget wrapper")," (where you will use component) in ",(0,a.kt)("inlineCode",{parentName:"li"},"/components/forms/widget-wrappers/")," for multiple reasons."),(0,a.kt)("li",{parentName:"ol"},"First reason to use a widget wrapper is the usage of ",(0,a.kt)("strong",{parentName:"li"},"custom props")," in your component. All RJSF widgets have ",(0,a.kt)("a",{parentName:"li",href:"https://react-jsonschema-form.readthedocs.io/en/docs/advanced-customization/custom-widgets-fields/#adding-your-own-custom-widgets"},"these props")," available to use. But we may want to use some more custom props. They can be passed in ",(0,a.kt)("strong",{parentName:"li"},"options")," object in prop. You should read all custom props from options in the widget wrapper and pass them to the original component."),(0,a.kt)("li",{parentName:"ol"},"Second reason to use a widget wrapper is ",(0,a.kt)("strong",{parentName:"li"},"handling of onChange and value types"),". Some components like DatePicker, Select, or Upload may have not primitive types like string, number or array, etc., which are needed in RJSF. It's necessary to handle value and onChange types, to be compatible with the original component."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Map")," your widget component ",(0,a.kt)("strong",{parentName:"li"},"into schema"),". In ",(0,a.kt)("inlineCode",{parentName:"li"},"/components/forms/ThemedForm.tsx")," add it in object ",(0,a.kt)("strong",{parentName:"li"},"theme")," inside ",(0,a.kt)("strong",{parentName:"li"},"widgets")," property. You can also choose a special name for the component in RJSF."),(0,a.kt)("li",{parentName:"ol"},"Now we can use components in any RJSF form. For ",(0,a.kt)("strong",{parentName:"li"},"testing")," purposes, we can use it in ",(0,a.kt)("inlineCode",{parentName:"li"},"/backend/forms/test"),". We can reach this form in a browser at URL ",(0,a.kt)("inlineCode",{parentName:"li"},"/forms/test"),"."),(0,a.kt)("li",{parentName:"ol"},"Add a new form widget in ",(0,a.kt)("strong",{parentName:"li"},"schema.json"),". There is a list of all form steps. It's better to create a new step where you can create multiple form widgets which will use your custom component. You can read how to add the custom component in schema.json at ",(0,a.kt)("a",{parentName:"li",href:"https://react-jsonschema-form.readthedocs.io/en/docs/advanced-customization/custom-widgets-fields/#adding-your-own-custom-widgets"},"RJSF docs"),". You need to choose value type and optionally also the title and which form widgets will be required."),(0,a.kt)("li",{parentName:"ol"},"Define which custom component will be used in ",(0,a.kt)("strong",{parentName:"li"},"uiSchema.json"),". Do not forget, you must define form widgets exactly like they are ",(0,a.kt)("strong",{parentName:"li"},"nested")," in schema.json. It's possible to choose which custom component will be used in the form for chosen widget through ",(0,a.kt)("inlineCode",{parentName:"li"},'"ui:widget"')," with a name you choose when you mapped your component in ThemedForm. If you want to forbid the default label, you can set ",(0,a.kt)("inlineCode",{parentName:"li"},'"ui:label"')," to false. It's possible to set here multiple component props. All custom props, which are not defined by RJSF, is possible to set through ",(0,a.kt)("inlineCode",{parentName:"li"},'"ui:options"'),". You will find more about uiSchema again in ",(0,a.kt)("a",{parentName:"li",href:"https://react-jsonschema-form.readthedocs.io/en/docs/advanced-customization/custom-widgets-fields/#adding-your-own-custom-widgets"},"RJSF docs"),"."),(0,a.kt)("li",{parentName:"ol"},"When finished, add a description of the widget to the docs here, to know how to set correctly uiSchema.")))}c.isMDXComponent=!0}}]);