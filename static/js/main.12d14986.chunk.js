(this["webpackJsonpReact-Portfolio"]=this["webpackJsonpReact-Portfolio"]||[]).push([[0],{23:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),n=a(14),i=a.n(n),s=(a(23),a(4)),o=a.p+"static/media/cover.0f31d1a7.jpg",l=a(0);var j=function(e){return Object(l.jsxs)("header",{className:"flex-row space-between px-1",children:[Object(l.jsx)("h1",{children:"Maximos.S"}),Object(l.jsx)("img",{src:o,alt:"wooden background"}),e.children]})};function m(e){return e.charAt(0).toUpperCase()+e.slice(1)}function d(e){return e.replace(/-/g," ").replace(/(^\w|\s\w)/g,(function(e){return e.toUpperCase()}))}var h=function(e){var t=e.pages,a=void 0===t?[]:t,c=e.setCurrentPage,n=e.currentPage;return Object(r.useEffect)((function(){document.title=m(n.name)}),[n]),Object(l.jsx)("nav",{children:Object(l.jsx)("ul",{className:"flex-row",children:a.map((function(e){return Object(l.jsx)("li",{className:"mx-5 ".concat(n.name===e.name&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){return c(e)},children:m(e.name)})},e.name)}))})})},p=function(e){return Object(l.jsx)("div",{children:e.children})},b=a(36),u=a.p+"static/media/Personal-Pic.cb0d89ae.jpg";var x=function(){return Object(l.jsx)("section",{className:"my-5",children:Object(l.jsxs)("div",{className:"my-2",children:[Object(l.jsx)("div",{className:"profile-img my-5",children:Object(l.jsx)(b.a,{alt:"avatar",src:u,sx:{width:250,height:200},children:" "})}),Object(l.jsx)("p",{children:"A passionate learner with a strong desire to grow, I am excited to embark on a new journey in the world of tech. Having one step to complete the Full Stack Web Developer program at Carlton University Coding Bootcamp. During my time at the bootcamp , I started gaining proficiency in a range of programming languages and frameworks, including HTML, CSS, JavaScript, React, and Node.js. I also learned how to use databases and APIs to create complex web applications. Overall , I am enthusiastick about the prospect of entering the tech industry and trying to make a meaningful contribution to the field."})]})})};var g=function(e){var t=e.project;console.log(t);var a=t.name,r=t.repo,c=t.link,n=t.description,i=t.image;return Object(l.jsxs)("div",{className:"project",children:[Object(l.jsx)("img",{src:i,alt:d(a&&a),className:"project-bg"}),Object(l.jsxs)("div",{className:"project-text",children:[Object(l.jsxs)("h3",{children:[Object(l.jsx)("a",{href:c&&c,children:d(a&&a)})," ",Object(l.jsx)("a",{href:r&&r,children:Object(l.jsx)("i",{className:"fab fa-github"})})]}),Object(l.jsx)("p",{children:n})]})]},a&&a)},O=a.p+"static/media/e-commerce.2bd03508.jpg",f=a.p+"static/media/employe-tracker.dd499be5.jpg",v=a.p+"static/media/tech-blog.347a3a2e.jpg",S=a.p+"static/media/weather-dashboard.2c163e97.jpg",k=a.p+"static/media/team-profile-gen.b0d32744.png",w=a.p+"static/media/note-taker.8c45e095.jpg",M=a.p+"static/media/book-search.ca709f33.jpg";var N=function(){var e=Object(r.useState)([{name:"E-Commerce-Backend",description:"JavaScript/Node/Express/SQL/HTML/CSS",link:"https://drive.google.com/file/d/1NA7sYT6xxgpDGeDKbUUyCh9Minfnh7HJ/view",repo:"https://github.com/MaximosSarmpas/Max-E-commerce-Backend",image:O},{name:"Employee-Tracker",description:"JavaScript/SQL/Node/HTML/CSS",link:"https://drive.google.com/file/d/1G58sf2H3ryHG9nDVjDZaI5kvvItVdyDU/view",repo:"https://github.com/MaximosSarmpas/Max-Employee-Tracker",image:f},{name:"Tech-Blog",description:"JavaScript/Node/Express/SQL/Handle-bars/HTML/CSS",link:"https://pure-woodland-52896.herokuapp.com/dashboard",repo:"https://github.com/MaximosSarmpas/Max-Tech-Blog",image:v},{name:"Weather-Dashboard",description:"JavaScript/jQuery/HTML/CSS/Server-Side API/Web API",link:"https://maximossarmpas.github.io/Max-Weather-Dashboard/",repo:"https://github.com/MaximosSarmpas/Max-Weather-Dashboard",image:S},{name:"Team-Profile-Generator",description:"JavaScript/Jest/HTML/CSS",link:"https://drive.google.com/file/d/1C4VGDQSRCBVJOqj5_QD5mpNgjkfhz912/view",repo:"https://github.com/MaximosSarmpas/Max-Team-Profile-Generator",image:k},{name:"Note-Taker",description:"JavaScript/Express/HTML/CSS",link:"https://thawing-plains-48231.herokuapp.com/notes",repo:"https://github.com/MaximosSarmpas/Max-Note-Taker",image:w},{name:"Book-Search-Engine",description:"JavaScript/GraphQL/React,MongoDB/Node.js/",link:"https://aqueous-journey-31563.herokuapp.com/",repo:"https://github.com/MaximosSarmpas/Max-Book-Search-Engine",image:M}]),t=Object(s.a)(e,1)[0];return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"flex-row",children:t&&t.map((function(e,t){return Object(l.jsx)(g,{project:e&&e},"project"+t)}))})})},y=a(2),C=a(11);var T=function(){var e=Object(r.useState)({name:"",email:"",message:""}),t=Object(s.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)(""),i=Object(s.a)(n,2),o=i[0],j=i[1],m=a.name,d=a.email,h=a.message,p=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);j(t?"":"Your email is invalid.")}else e.target.value.length?j(""):j("".concat(e.target.name," is required."));o||(c(Object(C.a)(Object(C.a)({},a),{},Object(y.a)({},e.target.name,e.target.value))),console.log("Handle Form",a))};return Object(l.jsx)("section",{children:Object(l.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),o||console.log("Submit Form",a)},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",name:"name",defaultValue:m,onBlur:p})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(l.jsx)("input",{type:"email",name:"email",defaultValue:d,onBlur:p})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{name:"message",rows:"5",defaultValue:h,onBlur:p})]}),o&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:o})}),Object(l.jsx)("button",{type:"submit",children:"Submit"})]})})};var B=function(){return Object(l.jsx)("section",{className:"my-5",children:Object(l.jsxs)("div",{className:"my-2",children:[Object(l.jsx)("h3",{children:"No proffesional experience in IT industry"}),Object(l.jsx)("h3",{children:"Front-end "}),Object(l.jsx)("h3",{children:"(entry level)"}),Object(l.jsxs)("ul",{className:"skills",children:[Object(l.jsx)("li",{children:"HTML"}),Object(l.jsx)("li",{children:"CSS"}),Object(l.jsx)("li",{children:"JavaScript"}),Object(l.jsx)("li",{children:"jQuery"}),Object(l.jsx)("li",{children:"Responsive Design"}),Object(l.jsx)("li",{children:"Bootstrap"}),Object(l.jsx)("li",{children:"React"})]}),Object(l.jsx)("h3",{children:"Back-end "}),Object(l.jsx)("h3",{children:"(entry level)"}),Object(l.jsxs)("ul",{className:"skills",children:[Object(l.jsx)("li",{children:"APIs"}),Object(l.jsx)("li",{children:"Node.js"}),Object(l.jsx)("li",{children:"Express"}),Object(l.jsx)("li",{children:"MySQL"}),Object(l.jsx)("li",{children:"MongoDB, Mongoose"}),Object(l.jsx)("li",{children:"REST"}),Object(l.jsx)("li",{children:"GraphQL"})]})]})})};var D=function(e){var t=e.currentPage;return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:m(t.name)}),Object(l.jsx)(p,{children:function(){switch(t.name){case"about me":default:return Object(l.jsx)(x,{});case"portfolio":return Object(l.jsx)(N,{});case"contact":return Object(l.jsx)(T,{});case"resume":return Object(l.jsx)(B,{})}}()})]})};var P=function(){return Object(l.jsx)("footer",{className:"flex-row px-1",children:[{name:"fab fa-github",link:"https://github.com/MaximosSarmpas"},{name:"fab fa-linkedin",link:"https://linkedin.com/in/maximos-sarmpas-53b30a275/"}].map((function(e){return Object(l.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("i",{className:e.name})},e.name)}))})};var L=function(){var e=Object(r.useState)([{name:"about me"},{name:"resume"},{name:"portfolio"},{name:"contact"}]),t=Object(s.a)(e,1)[0],a=Object(r.useState)(t[0]),c=Object(s.a)(a,2),n=c[0],i=c[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(j,{children:Object(l.jsx)(h,{pages:t,setCurrentPage:i,currentPage:n})}),Object(l.jsx)("main",{children:Object(l.jsx)(D,{currentPage:n})}),Object(l.jsx)(P,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(L,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.12d14986.chunk.js.map