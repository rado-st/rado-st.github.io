(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{30:function(e,a,t){e.exports=t.p+"static/media/profile-pic.39297b93.jpg"},32:function(e,a,t){e.exports=t.p+"static/media/portfolio.ad15cb98.png"},33:function(e,a,t){e.exports=t.p+"static/media/gulvsliping.11202042.png"},37:function(e,a,t){e.exports=t(50)},50:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(20),r=t.n(c),s=t(8),o=t(9),m=t(11),i=t(10),p=t(14),u=t(13),E=t(54),d=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleMenuClick=function(){n.setState({openMenu:!n.state.openMenu})},n.state={openMenu:!1},n}return Object(o.a)(t,[{key:"render",value:function(){var e=this,a=this.state.openMenu,t=[{name:"Home",path:"/",exact:!0},{name:"Skills",path:"/skills"},{name:"Projects",path:"/projects"},{name:"Contact",path:"/contact"}].map((function(a){return l.a.createElement("li",{className:"nav-item",key:a.name},l.a.createElement(u.c,{to:a.path,exact:!!a.exact&&a.exact,onClick:e.handleMenuClick,className:"nav-link"},a.name))}));return l.a.createElement("div",null,l.a.createElement("div",{className:"title_hamburger",onClick:this.handleMenuClick},l.a.createElement("div",{className:"hamburger_line hamburger_top".concat(a?"--open":"")}),l.a.createElement("div",{className:"hamburger_line hamburger_middle".concat(a?"--open":"")}),l.a.createElement("div",{className:"hamburger_line hamburger_bottom".concat(a?"--open":"")})),l.a.createElement("nav",{className:"header_nav".concat(a?" header_nav--open":"")},l.a.createElement("ul",{className:"nav"},t)))}}]),t}(l.a.Component),h=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleScroll=function(e){0===window.scrollY&&!0===n.state.scroll?n.setState({scroll:!1}):0!==window.scrollY&&!0!==n.state.scroll&&n.setState({scroll:!0})},n.state={scroll:!1},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.state.scroll;return l.a.createElement("header",{id:"header",className:"header".concat(e?" header--scroll":"")},l.a.createElement("div",{className:"title"},l.a.createElement("span",{className:"title_name"},l.a.createElement(u.b,{to:"/"},"Rados\u0142aw Stan")),l.a.createElement("span",{className:"title_subtitle"},"Front-end developer")),l.a.createElement(d,null))}}]),t}(l.a.Component),N=t(30),b=t.n(N),f=function(){return l.a.createElement("section",{className:"home"},l.a.createElement("div",{className:"home_header"},l.a.createElement("img",{src:b.a,alt:"profile",className:"home_img"})),l.a.createElement("span",{className:"home_title"},"Hello!"),l.a.createElement("p",{className:"home_text"},"My name is Rados\u0142aw Stan. I have been interested in programming and web development for about 10 years. From 2018 I have started getting commercial experience as a front-end developer by building WordPress based websites and small and medium size projects. I mainly worked on projects based on Laravel, but also I have knowledge how to work with Django and Node.js. I use Linux for web development and Windows for creating graphics and photo editing."))},_=t(52),g=t(53),k=t(3),v=t(5),j=function(){return l.a.createElement("section",{className:"skills"},l.a.createElement("span",{className:"skills_title"},"Front-end"),l.a.createElement("div",{className:"skills_stack"},l.a.createElement(_.a,null,l.a.createElement(g.a,{xs:6,md:4},l.a.createElement(k.a,{icon:v.e,className:"skills_icon"}),l.a.createElement("span",{className:"skills_lang"},"HTML")),l.a.createElement(g.a,{xs:6,md:4},l.a.createElement(k.a,{icon:v.b,className:"skills_icon"}),l.a.createElement("span",{className:"skills_lang"},"CSS")),l.a.createElement(g.a,{xs:6,md:4},l.a.createElement(k.a,{icon:v.k,className:"skills_icon"}),l.a.createElement("span",{className:"skills_lang"},"Sass")),l.a.createElement(g.a,{xs:6,md:4},l.a.createElement(k.a,{icon:v.a,className:"skills_icon"}),l.a.createElement("span",{className:"skills_lang"},"Bootstrap + Bootstrap-React")),l.a.createElement(g.a,{xs:6,md:4},l.a.createElement(k.a,{icon:v.f,className:"skills_icon"}),l.a.createElement("span",{className:"skills_lang"},"JavaScript + jQuery")),l.a.createElement(g.a,{xs:6,md:4},l.a.createElement(k.a,{icon:v.j,className:"skills_icon"}),l.a.createElement("span",{className:"skills_lang"},"React")))),l.a.createElement("span",{className:"skills_title"},"Tools and others"),l.a.createElement("div",{className:"skills_stack"},l.a.createElement(_.a,null,l.a.createElement(g.a,{xs:6,md:3},l.a.createElement(k.a,{icon:v.c,className:"skills_icon"}),l.a.createElement("span",{className:"skills_lang"},"Git - GitKraken")),l.a.createElement(g.a,{xs:6,md:3},l.a.createElement(k.a,{icon:v.i,className:"skills_icon"}),l.a.createElement("span",{className:"skills_lang"},"npm")),l.a.createElement(g.a,{xs:6,md:3},l.a.createElement(k.a,{icon:v.h,className:"skills_icon"}),l.a.createElement("span",{className:"skills_lang"},"Linux")),l.a.createElement(g.a,{xs:6,md:3},l.a.createElement(k.a,{icon:v.l,className:"skills_icon"}),l.a.createElement("span",{className:"skills_lang"},"Slack")))))},w=t(32),x=t.n(w),O=t(33),y=t.n(O),S=function(){return l.a.createElement("section",{className:"projects"},l.a.createElement("span",{className:"projects_title"},"Projects"),l.a.createElement("div",{className:"projects_portfolio"},l.a.createElement(_.a,null,l.a.createElement(g.a,{md:6},l.a.createElement("h2",{className:"projects_name"},"Portfolio"),l.a.createElement("div",{className:"projects_wrapper"},l.a.createElement("img",{src:x.a,alt:"portfolio",className:"projects_project"}),l.a.createElement("div",{className:"projects_middle"},l.a.createElement("a",{className:"projects_button",target:"_blank",rel:"noopener noreferrer",href:"https://rado-st.github.io/"},"Preview"),l.a.createElement("a",{className:"projects_button",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/rado-st/rado-st.github.io/"},"Source Code")))),l.a.createElement(g.a,{md:6},l.a.createElement("p",{className:"projects_desc"},"The current porfolio website. ",l.a.createElement("br",null),"Used technology: ",l.a.createElement("br",null)),l.a.createElement("ul",{className:"projects_list"},l.a.createElement("li",null,"HTML5"),l.a.createElement("li",null,"Sass"),l.a.createElement("li",null,"React"),l.a.createElement("li",null,"React Router"),l.a.createElement("li",null,"Bootstrap-React"),l.a.createElement("li",null,"Fortawesome"),l.a.createElement("li",null,"npm")))),l.a.createElement(_.a,null,l.a.createElement(g.a,{md:6},l.a.createElement("h2",{className:"projects_name"},"Gulvsliping Bergen AS"),l.a.createElement("div",{className:"projects_wrapper"},l.a.createElement("img",{src:y.a,alt:"gulvsliping",className:"projects_project"}),l.a.createElement("div",{className:"projects_middle"},l.a.createElement("a",{className:"projects_button",target:"_blank",rel:"noopener noreferrer",href:"https://www.gulvsliping-bergen.no/"},"Preview")))),l.a.createElement(g.a,{md:6},l.a.createElement("p",{className:"projects_desc"},"Gulvsliping Bergen AS - Commercial Project for a Norwegian company. ",l.a.createElement("br",null),"Used technology: ",l.a.createElement("br",null)),l.a.createElement("ul",{className:"projects_list"},l.a.createElement("li",null,"WordPress"),l.a.createElement("li",null,"Elementor"),l.a.createElement("li",null,"Yoast SEO"),l.a.createElement("li",null,"Custom CSS"))))))},C=t(18),M=function(){return l.a.createElement("section",{className:"contact"},l.a.createElement("span",{className:"contact_title"},"Contact"),l.a.createElement("div",{className:"contact_socials"},l.a.createElement(_.a,null,l.a.createElement(g.a,{md:6},l.a.createElement("a",{className:"contact_social",target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com"},l.a.createElement(k.a,{icon:C.b}),l.a.createElement("span",{className:"contact_name"},"Resume"))),l.a.createElement(g.a,{md:6},l.a.createElement("a",{className:"contact_social",href:"mailto:radoslaw.stan96@gmail.com"},l.a.createElement(k.a,{icon:C.a}),l.a.createElement("span",{className:"contact_name"},"radoslaw.stan96@gmail.com")))),l.a.createElement(_.a,null,l.a.createElement(g.a,{md:6},l.a.createElement("a",{className:"contact_social",target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/radoslaw-stan"},l.a.createElement(k.a,{icon:v.g}),l.a.createElement("span",{className:"contact_name"},"linkedin.com/in/radoslaw-stan"))),l.a.createElement(g.a,{md:6},l.a.createElement("a",{className:"contact_social",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/rado-st"},l.a.createElement(k.a,{icon:v.d}),l.a.createElement("span",{className:"contact_name"},"github.com/rado-st"))))))},R=function(){return l.a.createElement("p",null," 404 ")},P=t(55),L=t(56),H=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={},n}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props.location;return l.a.createElement(P.a,{component:"main",className:"main"},l.a.createElement(L.a,{key:e.key,timeout:{enter:800,exit:400},classNames:"fade",mountOnEnter:!1,unmountOnExit:!0},l.a.createElement("div",{className:"wrapper"},l.a.createElement(p.c,{location:e},l.a.createElement(p.a,{path:"/",exact:!0,component:f}),l.a.createElement(p.a,{path:"/skills",exact:!0,component:j}),l.a.createElement(p.a,{path:"/projects",exact:!0,component:S}),l.a.createElement(p.a,{path:"/contact",exact:!0,component:M}),l.a.createElement(p.a,{component:R})))))}}]),t}(l.a.Component),B=Object(p.g)(H),G=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=[{name:"Home",path:"/",exact:!0},{name:"Skills",path:"/skills"},{name:"Projects",path:"/projects"},{name:"Contact",path:"/contact"}].map((function(e){return l.a.createElement("li",{className:"nav-item",key:e.name},l.a.createElement(u.c,{to:e.path,exact:!!e.exact&&e.exact,className:"nav-link"},e.name))}));return l.a.createElement("div",null,l.a.createElement("nav",{className:"footer_nav"},l.a.createElement("ul",{className:"nav"},e)))}}]),t}(l.a.Component),I=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",{id:"footer",className:"footer"},l.a.createElement("p",{className:"footer_socials"},"\xa9",(new Date).getFullYear()+" ",l.a.createElement("a",{className:"footer_social","aria-label":"GitHub-portfolio",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/rado-st"},"Rados\u0142aw Stan"),l.a.createElement("a",{className:"footer_social","aria-label":"GitHub",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/rado-st"},l.a.createElement(k.a,{icon:v.d})),l.a.createElement("a",{className:"footer_social","aria-label":"Linkedin",target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/radoslaw-stan"},l.a.createElement(k.a,{icon:v.g})),l.a.createElement("a",{className:"footer_social","aria-label":"E-mail",href:"mailto:radoslaw.stan96@gmail.com"},l.a.createElement(k.a,{icon:C.a}))),l.a.createElement(G,null))}}]),t}(l.a.Component);function F(){var e=Object(p.f)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var T=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(u.a,{basename:""},l.a.createElement(E.a,null,l.a.createElement(h,null),l.a.createElement(F,null),l.a.createElement(B,null),l.a.createElement(I,null)))}}]),t}(l.a.Component);t(49);r.a.render(l.a.createElement(T,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.9fddfe3b.chunk.js.map