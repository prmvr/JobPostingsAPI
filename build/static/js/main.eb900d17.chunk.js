(this.webpackJsonpgithub_jobs=this.webpackJsonpgithub_jobs||[]).push([[0],{141:function(e,A,t){"use strict";t.r(A);var c=t(1),a=t.n(c),n=t(53),o=t.n(n),s=(t(39),t(6)),r=t(7),g=t(36),C=t.n(g),i=t(54),l=t(0),j=Object(c.createContext)(),h=function(e){var A=e.children,t="savedTheme_key",a=JSON.parse(localStorage.getItem(t)),n=Object(c.useState)(a),o=Object(r.a)(n,2),s=o[0],g=o[1],C=Object(c.useState)(!1),i=Object(r.a)(C,2),h=i[0],I=i[1],Q=Object(c.useState)({}),d=Object(r.a)(Q,2),E=(d[0],d[1]);return Object(c.useEffect)((function(){s?document.body.classList.remove("night"):document.body.classList.add("night")}),[s]),Object(l.jsx)(j.Provider,{value:{lightTheme:s,toggleTheme:function(){g(!s);var e=s;localStorage.setItem(t,JSON.stringify(!e))},fullTimeOnly:function(){I(!h)},setJobType:function(e){E(e)},dateFormat:function(e){e=new Date(e);var A=Math.floor((new Date-e)/1e3),t=A/31536e3;return t>1?Math.floor(t)+" Years Ago":(t=A/2628288)>1?(t=1)?Math.floor(t)+" Year Ago":Math.floor(t)+" Month Ago":(t=A/86400)>1?(t=1)?Math.floor(t)+" Day Ago":Math.floor(t)+" Days Ago":(t=A/3600)>1?(t=1)?Math.floor(t)+" Hour Ago":Math.floor(t)+" Hours Ago":"Less than an Hour Ago"}},children:A})};function I(e,A){switch(A.type){case"make-req":return{loading:!0,jobs:[],error:!1};case"get-data":return Object(s.a)(Object(s.a)({},e),{},{jobs:A.payload,loading:!1,error:!1});case"errors":return Object(s.a)(Object(s.a)({},e),{},{error:!0,jobs:[],loading:!1});case"has-next-page":return Object(s.a)(Object(s.a)({},e),{},{hasNextPage:A.payload});default:return e}}var Q=t(18);function d(e){var A=e.job,t=Object(c.useState)(!1),a=Object(r.a)(t,2),n=(a[0],a[1],function(e){if("Full Time"==e)return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAYAAAA/mZ5CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMzSURBVHgB7d2hUhVhGIDhXwaDECxgoGowO2a72YrVbvYmrI7RitlLsGDWgEED4yDBAs6IA0IySOK8nlnOeZ64Zb/y7v7hm90b23s7ZwOYycoAZiYkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgsDqmLjN1bVx/9bmWFQfjvbH8enJP9cfrG+N9ZWbg78Ofx+Pjz+/jymafEgXET2783Asqudf310a0uPb9xb6AXIVFxFNNSRHOwgICQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAw+aXVysXm8HVycD7vxhxm3lhdG7O6WLq9bPG2No97XNXShPTqYHd8mujm8GVen887D2/uPhmz2j3an9u8U+VoBwEhQUBIEBASBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBIQEASFBQEgQEBIEhASBpfmK0IutR2MKnn5+O1g83kgQEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBIQEASFBQEgQWJrt75ff3o8vv34M+B+WJqSj05NxeHK9/mzO9eFoBwEhQUBIEBASBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBIQEASFBQEgQEBIEhASBG9t7O2cDmIk3EgSEBAEhQUBIEBASBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBIE/3W5LQxevFpwAAAAASUVORK5CYII=";if("Part Time"==e)return"data:image/png;base64,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";return"data:image/png;base64,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"}(A.type)),o=Object(c.useContext)(j).lightTheme;var s=(0,Object(c.useContext)(j).dateFormat)(A.created_at);return Object(l.jsx)("div",{className:o?"card":"card dark",children:Object(l.jsxs)(Q.b,{to:"/JobDescription/".concat(A.id),children:[Object(l.jsxs)("div",{className:"card-top",children:[Object(l.jsx)("p",{className:"card-type dot",children:A.type}),Object(l.jsx)("p",{className:"card-type",children:s})]}),Object(l.jsx)("h3",{className:"card-title",children:A.title}),Object(l.jsx)("img",{className:"card-icon",src:n,alt:"Logo"}),Object(l.jsx)("p",{className:"card-company",children:A.company}),Object(l.jsx)("p",{className:"card-location",children:A.location})]})})}function E(e){var A=e.jobs;return Object(l.jsx)("div",{className:"container",children:A.map((function(e){return Object(l.jsx)(d,{job:e},e.id)}))})}var b=t(20);function u(){var e=Object(c.useContext)(j).toggleTheme,A=Object(c.useContext)(j).lightTheme;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("label",{htmlFor:"checkbox",className:"checkbox-holder",children:[Object(l.jsx)("input",{type:"checkbox",name:"checkbox",className:"slider-checkbox",value:"toggle",onChange:function(A){return A.target.value,void e()},defaultChecked:!A}),Object(l.jsx)("span",{className:"slider"})]})})}function B(e){var A=e.params,t=e.setParamsHandler,a=Object(c.useContext)(j).lightTheme,n=(Object(c.useContext)(j),Object(c.useState)({description:A.description,location:A.location,full_time:A.full_time})),o=Object(r.a)(n,2),g=o[0],C=o[1];function i(e){var A=e.target.name,t=e.target.value;return C("full_time"==A?function(t){return Object(s.a)(Object(s.a)({},t),{},Object(b.a)({},A,e.target.checked))}:function(e){return Object(s.a)(Object(s.a)({},e),{},Object(b.a)({},A,t))})}return Object(l.jsx)("div",{children:Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(g)},children:Object(l.jsxs)("div",{className:a?"nav":"dark-nav",children:[Object(l.jsx)("input",{type:"text",placeholder:"Job Description..",value:g.description,name:"description",onChange:i}),Object(l.jsx)("input",{type:"text",placeholder:"Location",value:g.location,name:"location",onChange:i}),Object(l.jsx)("input",{type:"checkbox",name:"full_time",className:"ft",onChange:i,value:g.full_time}),Object(l.jsx)("label",{htmlFor:"fulltime",children:"Full-Time Only"}),Object(l.jsx)("button",{value:"submit",type:"submit",children:"Search"}),Object(l.jsx)(u,{})]})})})}var p=t(2),O=t(56),m=t.n(O);function k(e){var A=e.match,t=e.jobs;console.log(t);var a=t.filter((function(e){return e.id==A.params.id}))[0]||{},n=a.type,o=a.created_at,s=a.location,r=a.title,g=a.company,C=a.url,i=(a.company_logo,a.company_url),h=a.description,I=Object(c.useContext)(j).lightTheme,d=(0,Object(c.useContext)(j).dateFormat)(o);return null!=i&&i.length>6&&i,Object(l.jsxs)("div",{className:I?"card-desc":"dark-desc",children:[Object(l.jsxs)("div",{className:"nav pos-nav",children:[Object(l.jsx)(Q.b,{to:"/",className:"btn",children:"\u2b05 Go Back"}),Object(l.jsx)(u,{})]}),Object(l.jsxs)("div",{className:"body",children:[Object(l.jsxs)("div",{className:"desc-job",children:[Object(l.jsxs)("div",{className:"top",children:[Object(l.jsx)("p",{className:"card-type dot",children:n}),Object(l.jsx)("p",{className:"card-type",children:d})]}),Object(l.jsx)("h1",{className:"title",children:r}),Object(l.jsxs)("p",{className:"desc-location",children:[s," ",g]}),Object(l.jsx)("a",{href:C,className:"btn apply",children:"Apply Now"})]}),Object(l.jsx)(m.a,{className:"desc-text",source:h}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{})]}),Object(l.jsxs)("div",{className:"desc-job desc-card",children:[Object(l.jsxs)("div",{className:"top",children:[Object(l.jsx)("p",{className:"card-type dot",children:n}),Object(l.jsx)("p",{className:"card-type",children:d})]}),Object(l.jsx)("h1",{className:"title",children:r}),Object(l.jsx)("p",{className:"desc-location",children:s}),Object(l.jsx)("a",{href:"{url}",className:"btn apply",children:"Apply Now"})]})]})}function S(e){var A=e.page,t=e.setPage,a=e.hasNextPage,n=Object(c.useContext)(j).lightTheme;function o(e){t(e)}return Object(l.jsxs)("div",{className:n?"pages":"pages-dark",children:[A>2&&Object(l.jsx)("p",{className:"page",onClick:function(e){return o(1)},children:"1..."}),1!==A&&Object(l.jsx)("p",{className:"page",onClick:function(e){return o(A-1)},children:A-1}),Object(l.jsx)("p",{className:"page active",children:A}),a&&Object(l.jsx)("p",{onClick:function(e){return o(A+1)},children:A+1})]})}var x=function(){var e=Object(c.useState)({description:"",location:"",full_time:!1}),A=Object(r.a)(e,2),t=A[0],a=A[1],n=Object(c.useState)(1),o=Object(r.a)(n,2),g=o[0],j=o[1],d=function(e,A){var t=Object(c.useReducer)(I,{loading:!0,jobs:[],error:!1,hasNextPage:!1}),a=Object(r.a)(t,2),n=a[0],o=a[1],s="".concat("https://stark-mesa-12909.herokuapp.com","/https://jobs.github.com/positions.json");return Object(c.useEffect)((function(){var t="".concat(s,"?description=").concat(A.description,"&location=").concat(A.location,"&full_time=").concat(A.full_time,"&page=").concat(e,"&markdown=true"),c="".concat(s,"?description=").concat(A.description,"&location=").concat(A.location,"&full_time=").concat(A.full_time,"&page=").concat(e+1,"&markdown=true");function a(){return(a=Object(i.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{"Access-Control-Allow-Origin":!0,headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){if(!e.ok)throw o({type:"errors",payload:!0}),new Error(e.status);return e.json()})).then((function(e){o({type:"get-data",payload:e})})).catch((function(e){o({type:"errors",payload:!0})}));case 2:return e.next=4,fetch(c,{mode:"cors",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){o({type:"has-next-page",payload:0!==e.length})})).catch((function(e){o({type:"errors",payload:!0})}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o({type:"make-req"}),function(){a.apply(this,arguments)}()}),[A,e]),n}(g,t),b=d.jobs,u=d.loading,O=d.error,m=d.hasNextPage;function x(e){a(e)}return Object(l.jsx)(h,{children:Object(l.jsx)(Q.a,{children:Object(l.jsxs)(p.c,{children:[Object(l.jsx)(p.a,{path:"/",exact:!0,component:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(B,{params:t,setParamsHandler:x}),Object(l.jsx)(S,{page:g,setPage:j,hasNextPage:m}),u&&Object(l.jsx)("h2",{className:"loading",children:"loading..."}),O&&Object(l.jsx)("h2",{className:"error",children:"There was an error. Please refresh and try again"}),Object(l.jsx)(E,{jobs:b})]})}}),Object(l.jsx)(p.a,{path:"/JobDescription/:id",component:function(e){return Object(l.jsx)(k,Object(s.a)(Object(s.a)({},e),{},{jobs:b}))}})]})})})};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))},39:function(e,A,t){}},[[141,1,2]]]);
//# sourceMappingURL=main.eb900d17.chunk.js.map