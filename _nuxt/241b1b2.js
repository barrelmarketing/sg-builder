(window.webpackJsonp=window.webpackJsonp||[]).push([[14,2,3,4,7,8,9,10,11,12,13],{258:function(t,e,o){var content=o(260);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(103).default)("31f41c2c",content,!0,{sourceMap:!1})},259:function(t,e,o){"use strict";o(258)},260:function(t,e,o){var n=o(102)(!1);n.push([t.i,"article img[data-v-3328a983]{max-height:max(500px,18vw);z-index:1}@media (max-width:960px){article img[data-v-3328a983]{margin-top:-2em}}",""]),t.exports=n},261:function(t,e,o){"use strict";o.r(e);var n={props:["section"],computed:{selected:{get:function(){return this.value},set:function(t){this.$emit("input",t),consosle.log(t)}}},mounted:function(){console.log(this.section)}},l=o(45),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-check form-check-inline row d-flex mx-0 px-0"},[o("div",{staticClass:"card col mx-1",attrs:{"data-checked":t.section.Style.Selected}},[o("label",{staticClass:"form-check-label h-100"},[o("div",{staticClass:"card-body h-100"},[o("input",{staticClass:"form-check-input ms-0 me-2",attrs:{type:"radio",name:"LayoutForm",id:"blank_layout",value:""},on:{change:function(e){return t.$emit("input",e.target.value)}}}),t._v(" "),o("h5",{staticClass:"card-title h-100"},[t._v("None")])])])]),t._v(" "),t._l(t.section.Style.Options,(function(option){return o("div",{key:option.value,staticClass:"card col mx-1",attrs:{"data-checked":option.value==t.section.Style.Selected}},[o("label",{staticClass:"form-check-label",attrs:{for:option.value}},[o("div",{staticClass:"card-body"},[o("input",{staticClass:"form-check-input ms-0 me-2",attrs:{type:"radio",name:"LayoutForm",id:option.value},domProps:{value:option.value},on:{change:function(e){return t.$emit("input",e.target.value)}}}),t._v(" "),o("h5",{staticClass:"card-title"},[t._v(t._s(option.label))]),t._v(" "),o("p",{class:"card-text p-3 text-"+option.align},t._l(option.placeholders,(function(t){return o("span",{key:t,class:t})})),0)])])])}))],2)}),[],!1,null,null,null);e.default=component.exports},262:function(t,e,o){"use strict";o.r(e);var n={props:["content","id"],mounted:function(){}},l=o(45),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{staticClass:"hero container-fluid gx-0",attrs:{id:t.id}},[o("div",{staticClass:"row justify-content-md-center gx-0"},[o("div",{staticClass:"col-md-8 col-xl-6 col-12 text-center text-lg-start text-shadow"},[o("h1",{class:t.content.title.size},[t._v(t._s(t.content.title.text))]),t._v(" "),o("h3",{class:"pb-4 "+t.content.subtitle.size},[t._v("\n        "+t._s(t.content.subtitle.text)+"\n      ")]),t._v(" "),o("a",{class:"btn btn-"+t.content.buttonText.size+" btn-success px-4",attrs:{href:t.content.buttonLink.text}},[t._v(t._s(t.content.buttonText.text))])])])])}),[],!1,null,null,null);e.default=component.exports},263:function(t,e,o){"use strict";o.r(e);var n={props:["content","id"],mounted:function(){}},l=o(45),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{staticClass:"hero container-fluid gx-0",attrs:{id:t.id}},[o("div",{staticClass:"row justify-content-md-center text-center gx-0"},[o("div",{staticClass:"col-md-8 col-xl-6 col-12 text-shadow"},[o("h1",{class:t.content.title.size},[t._v(t._s(t.content.title.text))]),t._v(" "),o("h3",{class:"pb-4 "+t.content.subtitle.size},[t._v("\n        "+t._s(t.content.subtitle.text)+"\n      ")]),t._v(" "),o("a",{class:"btn btn-"+t.content.buttonText.size+" btn-success px-4",attrs:{href:t.content.buttonLink.text}},[t._v(t._s(t.content.buttonText.text))])])])])}),[],!1,null,null,null);e.default=component.exports},264:function(t,e,o){"use strict";o.r(e);var n={props:["content","id"]},l=o(45),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{staticClass:"content container-fluid gx-0",attrs:{id:t.id,"data-aos":"fade-in"}},[o("div",{staticClass:"row text-center justify-content-center gx-0"},[o("div",{staticClass:"col col-lg-7 mx-auto text-shadow"},[o("i",{staticClass:"fas fa-carrot fa-4x mb-4 text-danger"}),t._v(" "),o("h2",{staticClass:"pb-2 fw-bold"},[t._v(t._s(t.content.title.text))]),t._v(" "),o("p",[t._v("\n        "+t._s(t.content.bodyText.text)+"\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},265:function(t,e,o){"use strict";o.r(e);var n={props:["content"]},l=(o(259),o(45)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{staticClass:"content container gx-0",attrs:{"data-aos":"fade-in"}},[o("div",{staticClass:"row justify-content-center p-0 gx-sm-5 text-center text-lg-start"},[t._m(0),t._v(" "),o("div",{staticClass:"\n        col col-sm-10 col-lg-6\n        text-shadow\n        align-items-center\n        my-auto\n        p-5\n        ml-xl-5\n      "},[o("i",{staticClass:"fas fa-carrot fa-4x mb-4 text-danger"}),t._v(" "),o("h2",{staticClass:"pb-2 fw-bold"},[t._v(t._s(t.content.title.text))]),t._v(" "),o("p",[t._v("\n        "+t._s(t.content.bodyText.text)+"\n      ")])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"\n        col-12 col-sm-10 col-lg-6\n        p-lg-5 p-xl-3\n        my-auto\n        justify-content-center justify-content-lg-end\n      "},[e("img",{staticClass:"img-fluid shadow rounded mr-lg-3",attrs:{src:"https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"}})])}],!1,null,"3328a983",null);e.default=component.exports},266:function(t,e,o){"use strict";o.r(e);var n={props:["content"],data:function(){return{}},mounted:function(){console.log(this.content.items)}},l=o(45),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{staticClass:"stats container-fluid bg-success gx-0",staticStyle:{height:"300px"}},[o("div",{staticClass:"\n      row\n      h-100\n      align-items-center\n      justify-content-center\n      text-center\n      gx-5\n      px-3\n    "},t._l(t.content.items,(function(e){return o("div",{key:e.text,staticClass:"col-4 col-xl-2"},[o("p",{staticClass:"h1 fw-bold text-light"},[t._v(t._s(e.value))]),t._v(" "),o("p",{staticClass:"h5 text-white"},[t._v(t._s(e.text))])])})),0)])}),[],!1,null,null,null);e.default=component.exports},267:function(t,e,o){"use strict";o.r(e);var n={props:["content"]},l=o(45),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{staticClass:"content container py-5 gx-0",attrs:{"data-aos":"fade-in"}},[t._m(0),t._v(" "),o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-10 col-lg-8 col-xl-8"},[o("form",[o("div",{staticClass:"row"},t._l(t.content.formFields,(function(e){return o("div",{key:e.name,staticClass:"mb-3 sg-form-item",style:"width:"+e.width},[o("label",{staticClass:"form-label",attrs:{for:e.name}},[t._v(t._s(e.label))]),t._v(" "),"textarea"!=e.type?o("input",{staticClass:"form-control",attrs:{type:"text",placeholder:e.placeholder}}):t._e(),t._v(" "),"textarea"==e.type?o("textarea",{staticClass:"form-control",attrs:{type:"text",placeholder:e.placeholder}}):t._e()])})),0),t._v(" "),t._m(1),t._v(" "),o("button",{staticClass:"btn btn-lg btn-success",attrs:{type:"submit"}},[t._v("Submit")])])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row justify-content-center g-5"},[o("div",{staticClass:"col-8 py-3 text-center"},[o("h2",{staticClass:"fw-bold"},[t._v("Contact Us")]),t._v(" "),o("p",[t._v("\n        Et ipsum nostrud id officia do magna nulla elit reprehenderit mollit\n        duis aliqua nisi officia. Id ea voluptate officia reprehenderit est\n        consequat ex consequat. Ut est consectetur eu et nulla aliqua nostrud\n        ad quis consequat.\n      ")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row mb-3"},[o("div",{staticClass:"form-check mb-3"},[o("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"MailingListConfirmation"}}),t._v(" "),o("label",{staticClass:"form-check-label",attrs:{for:"MailingListConfirmation"}},[t._v("I understand that my email address may be used for promotional\n              purposes")])])])}],!1,null,null,null);e.default=component.exports},268:function(t,e,o){"use strict";o.r(e);var n={props:["content"]},l=o(45),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{staticClass:"container-fluid bg-light d-flex align-items-center"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-10 col-lg-8 mx-auto text-center h-100"},[o("h2",{staticClass:"fw-bold"},[t._v(t._s(t.content.title))]),t._v(" "),o("p",{staticClass:"lead"},[t._v(t._s(t.content.bodyText))])])])])}),[],!1,null,null,null);e.default=component.exports},269:function(t,e,o){var content=o(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(103).default)("1b30ee58",content,!0,{sourceMap:!1})},270:function(t,e,o){"use strict";o.r(e);var n={props:["sections"],methods:{saveSection:function(section){this.$emit("save",section)},selectSection:function(section){console.log(section.Style),"collapsed"==section.Style.Collapsed&&this.$emit("select",section)}},mounted:function(){}},l=o(45),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"accordion accordion-flush",attrs:{id:"builderAccordion"}},t._l(t.sections,(function(section){return o("div",{key:section.id,staticClass:"accordion-item"},[o("h2",{staticClass:"accordion-header"},[o("button",{class:"accordion-button  "+section.Style.Collapsed,attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapse"+section.id,"aria-expanded":"false","aria-controls":"collapse"+section.id},on:{click:function(e){return t.selectSection(section)}}},[t._v("\n        "+t._s(section.Style.BuilderText)+"\n      ")])]),t._v(" "),o("div",{class:"accordion-collapse collapse "+section.Style.Show,attrs:{id:"collapse"+section.id,"data-bs-parent":"#builderAccordion"}},[o("div",{staticClass:"accordion-body px-0"},[o("h3",{staticClass:"h4 mt-4"},[t._v("Choose from one of the layouts below:")]),t._v(" "),o("BuilderLayoutSelector",{attrs:{section:section},model:{value:section.Style.Selected,callback:function(e){t.$set(section.Style,"Selected",e)},expression:"section.Style.Selected"}}),t._v(" "),o("h3",{staticClass:"h4 mt-4"},[t._v("Enter your text:")]),t._v(" "),t._l(section.Content,(function(e){return section.Content.items?t._e():o("div",{key:e.label,staticClass:"input-group flex-nowrap mb-3"},[o("span",{staticClass:"font-weight-bold my-auto fw-bold col-6 col-md-3",attrs:{id:section.id+"-"+e.label}},[t._v(t._s(e.label)+":")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"field.text"}],staticClass:"form-control border-0 border-bottom col",attrs:{type:"text",placeholder:e.text,"aria-label":e.label,"aria-describedby":section.id+"-"+e.label},domProps:{value:e.text},on:{input:function(o){o.target.composing||t.$set(e,"text",o.target.value)}}}),t._v(" "),e.options?o("div",{staticClass:"col-2 ms-1"},[o("select",{directives:[{name:"model",rawName:"v-model",value:e.size,expression:"field.size"}],staticClass:"form-select",attrs:{"aria-label":"font size"},on:{change:function(o){var n=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(e,"size",o.target.multiple?n:n[0])}}},[o("option",{attrs:{value:"md",disabled:""}},[t._v("Size")]),t._v(" "),t._l(e.options,(function(option){return o("option",{key:option,domProps:{value:option}},[t._v("\n                "+t._s(option.toUpperCase())+"\n              ")])}))],2)]):t._e()])})),t._v(" "),t._l(section.Content.items,(function(e,n){return section.Content.items?o("div",{key:e.text,staticClass:"input-group flex-nowrap mb-3"},[o("span",{staticClass:"font-weight-bold my-auto fw-bold col-6 col-md-3",attrs:{id:section.id+"-"+e.text}},[t._v("Item "+t._s(n+1)+":")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],staticClass:"form-control border-0 border-bottom col-1 w-25",attrs:{type:"text",placeholder:e.value,"aria-label":e.value,"aria-describedby":section.id+"-"+e.value},domProps:{value:e.value},on:{input:function(o){o.target.composing||t.$set(e,"value",o.target.value)}}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"item.text"}],staticClass:"form-control border-0 border-bottom mx-2 w-50",attrs:{type:"text",placeholder:e.text,"aria-label":e.text,"aria-describedby":section.id+"-"+e.text},domProps:{value:e.text},on:{input:function(o){o.target.composing||t.$set(e,"text",o.target.value)}}}),t._v(" "),e.options?o("div",{staticClass:"col-2 ms-1"},[o("select",{directives:[{name:"model",rawName:"v-model",value:e.size,expression:"item.size"}],staticClass:"form-select",attrs:{"aria-label":"font size"},on:{change:function(o){var n=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(e,"size",o.target.multiple?n:n[0])}}},[o("option",{attrs:{value:"md",disabled:"",selected:""}},[t._v("Size")]),t._v(" "),t._l(e.options,(function(option){return o("option",{key:option,domProps:{value:option}},[t._v("\n                "+t._s(option.toUpperCase())+"\n              ")])}))],2)]):t._e()]):t._e()})),t._v(" "),o("div",{staticClass:"d-flex justify-content-end"},[o("button",{staticClass:"btn btn-success",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapse"+section.id},on:{click:function(e){return t.saveSection(section)}}},[t._v("\n            Save\n          ")])])],2)])])})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BuilderLayoutSelector:o(261).default})},271:function(t,e,o){"use strict";o.r(e);var n={name:"PreviewPage",props:["pagecomponents"],data:function(){return{ContactSection:{title:"Contact Us",bodyText:"We are committed to providing you with the freshest produce from local farmers and producers. We keep costs down through the relationships forged with our suppliers.",formFields:[{label:"First Name",type:"text",name:"FirstName",placeholder:"Enter your name",width:"50%",required:!0},{label:"Last Name",type:"text",name:"LastName",placeholder:"Enter your last name",width:"50%",required:!0},{label:"Email",type:"email",name:"Email",placeholder:"Enter your email",width:"50%",required:!0},{label:"Phone",type:"tel",name:"Phone",placeholder:"Enter your phone number",width:"50%",required:!1},{label:"Message",type:"textarea",name:"Message",placeholder:"Enter your message",width:"100%",required:!1}]},FooterSection:{title:"footer",bodyText:"We are committed to providing you with the freshest produce from local farmers and producers. We keep costs down through the relationships forged with our suppliers."}}},mounted:function(){console.log("loaded preview:",this.pagecomponents)}},l=o(45),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"preview"},["HeroStyle1"==t.pagecomponents.Hero.Style.Selected?o("Hero1",{attrs:{content:t.pagecomponents.Hero.Content}}):t._e(),t._v(" "),"HeroStyle2"==t.pagecomponents.Hero.Style.Selected?o("Hero2",{attrs:{content:t.pagecomponents.Hero.Content}}):t._e(),t._v(" "),"ContentStyle1"==t.pagecomponents.Content1.Style.Selected?o("Content1",{attrs:{content:t.pagecomponents.Content1.Content}}):t._e(),t._v(" "),"ContentStyle2"==t.pagecomponents.Content1.Style.Selected?o("Content2",{attrs:{content:t.pagecomponents.Content1.Content}}):t._e(),t._v(" "),"CounterSection1"==t.pagecomponents.CounterSection.Style.Selected?o("StatCounter",{attrs:{content:t.pagecomponents.CounterSection.Content}}):t._e(),t._v(" "),"ContactSection1"==t.pagecomponents.ContactSection.Style.Selected?o("ContactUs",{attrs:{content:this.ContactSection}}):t._e(),t._v(" "),"FooterSection1"==t.pagecomponents.FooterSection.Style.Selected?o("Footer1",{attrs:{content:this.FooterSection}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Hero1:o(262).default,Hero2:o(263).default,Content1:o(264).default,Content2:o(265).default,StatCounter:o(266).default,ContactUs:o(267).default,Footer1:o(268).default})},272:function(t,e,o){(function(o){var n,l,r;"undefined"!=typeof window&&window,l=[],void 0===(r="function"==typeof(n=function(){var t=function(e,o){"use strict";var n=Object.create(t.prototype),l=0,r=0,c=0,d=0,m=[],h=!0,v=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){return setTimeout(t,1e3/60)},f=null,x=!1;try{var w=Object.defineProperty({},"passive",{get:function(){x=!0}});window.addEventListener("testPassive",null,w),window.removeEventListener("testPassive",null,w)}catch(t){}var y=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,C=window.transformProp||function(){var t=document.createElement("div");if(null===t.style.transform){var e=["Webkit","Moz","ms"];for(var o in e)if(void 0!==t.style[e[o]+"Transform"])return e[o]+"Transform"}return"transform"}();function _(){if(3===n.options.breakpoints.length&&Array.isArray(n.options.breakpoints)){var t,e=!0,o=!0;if(n.options.breakpoints.forEach((function(i){"number"!=typeof i&&(o=!1),null!==t&&i<t&&(e=!1),t=i})),e&&o)return}n.options.breakpoints=[576,768,1201],console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")}n.options={speed:-2,verticalSpeed:null,horizontalSpeed:null,breakpoints:[576,768,1201],center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,verticalScrollAxis:"y",horizontalScrollAxis:"x",callback:function(){}},o&&Object.keys(o).forEach((function(t){n.options[t]=o[t]})),o&&o.breakpoints&&_(),e||(e=".rellax");var S="string"==typeof e?document.querySelectorAll(e):[e];if(S.length>0){if(n.elems=S,n.options.wrapper&&!n.options.wrapper.nodeType){var k=document.querySelector(n.options.wrapper);if(!k)return void console.warn("Rellax: The wrapper you're trying to use doesn't exist.");n.options.wrapper=k}var z,E=function(t){var e=n.options.breakpoints;return t<e[0]?"xs":t>=e[0]&&t<e[1]?"sm":t>=e[1]&&t<e[2]?"md":"lg"},T=function(){for(var i=0;i<n.elems.length;i++){var t=O(n.elems[i]);m.push(t)}},A=function(){for(var i=0;i<m.length;i++)n.elems[i].style.cssText=m[i].style;m=[],r=window.innerHeight,d=window.innerWidth,z=E(d),L(),T(),animate(),h&&(window.addEventListener("resize",A),h=!1,F())},O=function(t){var e,o=t.getAttribute("data-rellax-percentage"),l=t.getAttribute("data-rellax-speed"),c=t.getAttribute("data-rellax-xs-speed"),m=t.getAttribute("data-rellax-mobile-speed"),h=t.getAttribute("data-rellax-tablet-speed"),v=t.getAttribute("data-rellax-desktop-speed"),f=t.getAttribute("data-rellax-vertical-speed"),x=t.getAttribute("data-rellax-horizontal-speed"),w=t.getAttribute("data-rellax-vertical-scroll-axis"),y=t.getAttribute("data-rellax-horizontal-scroll-axis"),C=t.getAttribute("data-rellax-zindex")||0,_=t.getAttribute("data-rellax-min"),S=t.getAttribute("data-rellax-max"),k=t.getAttribute("data-rellax-min-x"),E=t.getAttribute("data-rellax-max-x"),T=t.getAttribute("data-rellax-min-y"),A=t.getAttribute("data-rellax-max-y"),O=!0;c||m||h||v?e={xs:c,sm:m,md:h,lg:v}:O=!1;var L=n.options.wrapper?n.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;n.options.relativeToWrapper&&(L=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)-n.options.wrapper.offsetTop);var j=n.options.vertical&&(o||n.options.center)?L:0,F=n.options.horizontal&&(o||n.options.center)?n.options.wrapper?n.options.wrapper.scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0,$=j+t.getBoundingClientRect().top,H=t.clientHeight||t.offsetHeight||t.scrollHeight,B=F+t.getBoundingClientRect().left,M=t.clientWidth||t.offsetWidth||t.scrollWidth,W=o||(j-$+r)/(H+r),N=o||(F-B+d)/(M+d);n.options.center&&(N=.5,W=.5);var Y=O&&null!==e[z]?Number(e[z]):l||n.options.speed,X=f||n.options.verticalSpeed,R=x||n.options.horizontalSpeed,U=w||n.options.verticalScrollAxis,I=y||n.options.horizontalScrollAxis,D=P(N,W,Y,X,R),style=t.style.cssText,J="",G=/transform\s*:/i.exec(style);if(G){var K=G.index,Q=style.slice(K),V=Q.indexOf(";");J=V?" "+Q.slice(11,V).replace(/\s/g,""):" "+Q.slice(11).replace(/\s/g,"")}return{baseX:D.x,baseY:D.y,top:$,left:B,height:H,width:M,speed:Y,verticalSpeed:X,horizontalSpeed:R,verticalScrollAxis:U,horizontalScrollAxis:I,style:style,transform:J,zindex:C,min:_,max:S,minX:k,maxX:E,minY:T,maxY:A}},L=function(){var t=l,e=c;if(l=n.options.wrapper?n.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,c=n.options.wrapper?n.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset,n.options.relativeToWrapper){var o=(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;l=o-n.options.wrapper.offsetTop}return!(t==l||!n.options.vertical)||!(e==c||!n.options.horizontal)},P=function(t,e,o,l,r){var c={},d=(r||o)*(100*(1-t)),m=(l||o)*(100*(1-e));return c.x=n.options.round?Math.round(d):Math.round(100*d)/100,c.y=n.options.round?Math.round(m):Math.round(100*m)/100,c},j=function(){window.removeEventListener("resize",j),window.removeEventListener("orientationchange",j),(n.options.wrapper?n.options.wrapper:window).removeEventListener("scroll",j),(n.options.wrapper?n.options.wrapper:document).removeEventListener("touchmove",j),f=v(F)},F=function(){L()&&!1===h?(animate(),f=v(F)):(f=null,window.addEventListener("resize",j),window.addEventListener("orientationchange",j),(n.options.wrapper?n.options.wrapper:window).addEventListener("scroll",j,!!x&&{passive:!0}),(n.options.wrapper?n.options.wrapper:document).addEventListener("touchmove",j,!!x&&{passive:!0}))},animate=function(){for(var t,i=0;i<n.elems.length;i++){var e=m[i].verticalScrollAxis.toLowerCase(),o=m[i].horizontalScrollAxis.toLowerCase(),h=-1!=e.indexOf("x")?l:0,v=-1!=e.indexOf("y")?l:0,f=-1!=o.indexOf("x")?c:0,x=(v+(-1!=o.indexOf("y")?c:0)-m[i].top+r)/(m[i].height+r),w=(h+f-m[i].left+d)/(m[i].width+d),y=(t=P(w,x,m[i].speed,m[i].verticalSpeed,m[i].horizontalSpeed)).y-m[i].baseY,_=t.x-m[i].baseX;null!==m[i].min&&(n.options.vertical&&!n.options.horizontal&&(y=y<=m[i].min?m[i].min:y),n.options.horizontal&&!n.options.vertical&&(_=_<=m[i].min?m[i].min:_)),null!=m[i].minY&&(y=y<=m[i].minY?m[i].minY:y),null!=m[i].minX&&(_=_<=m[i].minX?m[i].minX:_),null!==m[i].max&&(n.options.vertical&&!n.options.horizontal&&(y=y>=m[i].max?m[i].max:y),n.options.horizontal&&!n.options.vertical&&(_=_>=m[i].max?m[i].max:_)),null!=m[i].maxY&&(y=y>=m[i].maxY?m[i].maxY:y),null!=m[i].maxX&&(_=_>=m[i].maxX?m[i].maxX:_);var S=m[i].zindex,k="translate3d("+(n.options.horizontal?_:"0")+"px,"+(n.options.vertical?y:"0")+"px,"+S+"px) "+m[i].transform;n.elems[i].style[C]=k}n.options.callback(t)};return n.destroy=function(){for(var i=0;i<n.elems.length;i++)n.elems[i].style.cssText=m[i].style;h||(window.removeEventListener("resize",A),h=!0),y(f),f=null},A(),n.refresh=A,n}console.warn("Rellax: The elements you're trying to select don't exist.")};return t})?n.apply(e,l):n)||(t.exports=r)}).call(this,o(31))},273:function(t,e,o){"use strict";o(269)},274:function(t,e,o){var n=o(102)(!1);n.push([t.i,".navbar-brand{font-size:1.5rem;font-weight:700}.siteExample img{margin-bottom:min(-100px,-3vw);margin-top:max(3vw,150px)}@media (max-width:768px){.siteExample img{margin-bottom:0;margin-top:0}}",""]),t.exports=n},275:function(t,e,o){"use strict";o.r(e);o(40);var n=o(272),l=o.n(n),r={name:"IndexPage",data:function(){return{PageComponents:{Hero:{id:"Hero",Style:{Show:"show",Collapsed:"",Selected:"",BuilderText:"Step 1: Build Your Header",Options:[{value:"HeroStyle1",label:"Left Aligned",align:"start",placeholders:["placeholder col-11","placeholder col-8","placeholder bg-white col-4","placeholder bg-success col-5"]},{value:"HeroStyle2",label:"Centered",align:"center",placeholders:["placeholder col-11","placeholder col-8","placeholder bg-success col-5"]}]},Content:{title:{text:"Fresh and on-time.",label:"Title",size:"h1",options:["h1","h2","h3","h4","h5","h6"]},subtitle:{text:"Get produce delivered today.",label:"Subtitle",size:"h3",options:["h1","h2","h3","h4","h5","h6"]},buttonText:{text:"Tell Me More",label:"Button Text",size:"md",options:["lg","md","sm"]},buttonLink:{text:"#contact",label:"Button Link"}}},Content1:{id:"Content1",Style:{Show:"",Selected:"",Collapsed:"collapsed",BuilderText:"Step 2: Your First Content Section",Options:[{value:"ContentStyle1",label:"Single Column",align:"center ",placeholders:["placeholder col-8","placeholder col-7","placeholder col-6"]},{value:"ContentStyle2",label:"Two Columns",align:"start",placeholders:["placeholder col-5","placeholder bg-white col-1","placeholder col-5 2","placeholder bg-white col-1 2","placeholder col-5 3","placeholder bg-white col-1 3","placeholder col-5 4","placeholder bg-white col-1 4","placeholder col-5 5","placeholder bg-white col-1 5","placeholder col-5 6","placeholder bg-white col-1 6"]}]},Content:{title:{text:"Affordable, Local, Organic",label:"Title",size:"h2",options:["h1","h2","h3","h4","h5","h6"]},bodyText:{text:"We are committed to providing you with the freshest produce from local farmers and producers. We keep costs down through the relationships forged with our suppliers.",label:"Text",size:"h3",options:["h1","h2","h3","h4","h5","h6"]},buttonText:{text:"Tell Me More",label:"Button Text",size:"md",options:["lg","md","sm"]},buttonLink:{text:"#contact",label:"Button Link"}}},CounterSection:{id:"CounterSection",Style:{Show:"",Selected:"",Collapsed:"collapsed",BuilderText:"Step 3: Show Off Your Numbers",Options:[{value:"CounterSection1",label:"Centered",align:"center ",placeholders:["placeholder col-3","placeholder col-1 bg-white","placeholder col-3 2","placeholder col-1 bg-white 2","placeholder col-3 3"]}]},Content:{title:{text:"Affordable, Local, Organic",label:"Title",size:"h2",options:["h1","h2","h3","h4","h5","h6"]},items:[{text:"Deliveries",value:"1000+",size:"h3",options:["h1","h2","h3","h4","h5","h6"]},{text:"Farmers & Producers",value:560,size:"h3",options:["h1","h2","h3","h4","h5","h6"]},{text:"Happy Customers",value:"5000+",size:"h3",options:["h1","h2","h3","h4","h5","h6"]}]}},ContactSection:{id:"ContactSection",Style:{Selected:"",Show:"",Collapsed:"collapsed",BuilderText:"Step 4: How will your customers reach you?",Options:[{value:"ContactSection1",label:"Left Aligned"},{value:"ContactSection2",label:"Centered"}]},Content:{title:"Contact Us",bodyText:"We are committed to providing you with the freshest produce from local farmers and producers. We keep costs down through the relationships forged with our suppliers.",formFields:[{label:"First Name",type:"text",name:"FirstName",placeholder:"Enter your name",width:"50%",required:!0},{label:"Last Name",type:"text",name:"LastName",placeholder:"Enter your last name",width:"50%",required:!0},{label:"Email",type:"email",name:"Email",placeholder:"Enter your email",width:"50%",required:!0},{label:"Phone",type:"tel",name:"Phone",placeholder:"Enter your phone number",width:"50%",required:!1},{label:"Message",type:"textarea",name:"Message",placeholder:"Enter your message",width:"100%",required:!1}]}},FooterSection:{id:"FooterSection",Style:{Show:"",Selected:"",Collapsed:"collapsed",Options:[{value:"FooterSection1",label:"Left Aligned"},{value:"FooterSection2",label:"Centered"}]},Content:{title:"Footer",bodyText:"We are committed to providing you with the freshest produce from local farmers and producers. We keep costs down through the relationships forged with our suppliers."}}}}},methods:{saveSection:function(section){var t=Object.keys(this.PageComponents).indexOf(section.id);this.PageComponents[section.id].Style=Object.assign({},this.PageComponents[section.id].Style,{Show:"",Collapsed:"collapsed"});var e=t+1,o=this.PageComponents[Object.keys(this.PageComponents)[e]];this.PageComponents[Object.keys(this.PageComponents)[e]].Style=Object.assign({},o.Style,{Show:"show",Collapsed:""}),console.log("index:",t,"opening:",e),console.log(this.PageComponents)},selectSection:function(section){Object.keys(this.PageComponents).indexOf(section.id);this.PageComponents[section.id].Style=Object.assign({},this.PageComponents[section.id].Style,{Show:"show",Collapsed:""})}},mounted:function(){if(screen.availWidth<860)t&&t.destroy();else var t=new l.a(".siteExample img",{speed:4,wrapper:null,round:!0,vertical:!0,horizontal:!1})}},c=(o(273),o(45)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),o("main",{staticClass:"builder container content bg-white",attrs:{id:"builderSection","data-aos":"fade-in"}},[o("div",{staticClass:"row py-5 my-5"},[o("div",{staticClass:"col-12 col-md-8 col-xl-6 ms-xl-auto p-5"},[o("BuilderAccordion",{attrs:{sections:t.PageComponents},on:{save:t.saveSection,selected:t.selectSection}})],1),t._v(" "),o("div",{staticClass:"\n          col-12 col-md-4 col-xl-6\n          me-xl-auto\n          bg-light\n          border-left border-dark\n          p-0\n          pb-3\n          position-sticky\n          sticky-top\n        "},[o("BuilderPreview",{staticStyle:{zoom:"45%"},attrs:{pagecomponents:t.PageComponents}})],1)])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",[o("div",{staticClass:"container"},[o("nav",{staticClass:"\n          navbar navbar-expand-lg navbar-light\n          bg-white\n          fixed-top\n          shadow-sm\n          px-4\n        "},[o("a",{staticClass:"navbar-brand h2",attrs:{href:"#"}},[t._v(" Shotgun Sites ")]),t._v(" "),o("ul",{staticClass:"nav mx-auto d-none d-lg-flex"},[o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("How it Works")])]),t._v(" "),o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link"},[t._v("Themes")])]),t._v(" "),o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link"},[t._v("Pricing")])])]),t._v(" "),o("button",{staticClass:"btn btn-success",attrs:{type:"button"}},[t._v("Build a Site")])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{staticClass:"hero px-0 container-fluid content bg-success text-white"},[o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"\n          col-md-5 col-xl-4\n          my-5 my-md-auto\n          pt-5\n          py-md-0\n          text-center text-md-start\n        "},[o("div",{staticClass:"container w-md-75 mx-auto px-0"},[o("h1",{staticClass:"fw-bold"},[t._v("Build your site today.")]),t._v(" "),o("h3",[t._v("It only takes 5 minutes!")]),t._v(" "),o("a",{staticClass:"btn btn-light btn-lg mt-3",attrs:{href:"#builderSection",type:"button"}},[t._v("Build My Site")])])]),t._v(" "),o("div",{staticClass:"col-md-4 col-lg-2 col-lg-3 text-start siteExample",attrs:{"data-aos":"fade-up"}},[o("img",{staticClass:"shadow rounded img-fluid",attrs:{src:"preview-site1.jpg",alt:"","data-rellax-mobile-speed":"1"}})])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BuilderAccordion:o(270).default,BuilderPreview:o(271).default})}}]);