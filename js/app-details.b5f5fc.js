(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{72:function(e,a,t){},76:function(e,a,t){"use strict";t.r(a);var n=t(25),r=t.n(n),l=t(14),i=t.n(l),s=t(0),c=t.n(s),m=t(10),o=function(e){var a=e.rating;function t(e){return e<=Math.floor(a)?"star_fill":e>Math.ceil(a)?"star":"star_lefthalf_fill"}return(c.a.createElement("div",{className:"rating-stars"},[1,2,3,4,5].map((function(e){return c.a.createElement(m.h,{key:e,f7:t(e)})}))))},p=t(17),u=function(e){var a=e.src,t=e.onClick,n=e.alt,l=Object(s.useState)(!1),i=r()(l,2),m=i[0],o=i[1];return c.a.createElement("img",{style:{opacity:m?1:0,transitionDuration:"600ms"},onLoad:function(){return o(!0)},onClick:t,src:a,alt:n})},d=t(16);t(72);a.default=function(e){var a,t=e.id,n=e.backText,l=function(e){return[].concat(i()(d.a),i()(d.b)).find((function(a){return a.id===parseInt(e,10)}))}(t),E=Object(s.useRef)(null),v=Object(s.useState)(!1),h=r()(v,2),g=h[0],f=h[1],b={5:500,4:100,3:80,2:50,1:200},N=Object.values(b).reduce((function(e,a){return e+a}));return c.a.createElement(m.n,{onPageInit:function(){E.current=m.w.photoBrowser.create({photos:i()(l.screenshots),toolbar:!1,navbarShowCount:!1})},onPageBeforeRemove:function(){E.current&&E.current.destroy()}},c.a.createElement(m.m,{transparent:!0,backLink:n||"Back",className:"app-navbar"},c.a.createElement("div",{className:"app-navbar-icon",slot:"title"},c.a.createElement("img",{src:l.icon,alt:l.title})),c.a.createElement("div",{className:"app-navbar-button",slot:"right"},c.a.createElement(m.d,{external:!0,target:"_blank",href:"https://apps.apple.com/app/id".concat(l.id),round:!0,fill:!0},"GET"))),c.a.createElement("div",{className:"block app-header"},c.a.createElement("img",{src:l.icon,alt:l.title,className:"app-header-icon"}),c.a.createElement("div",{className:"app-header-content"},c.a.createElement("div",{className:"app-header-title"},l.title),c.a.createElement("div",{className:"app-header-subtitle"},l.subtitle),c.a.createElement("div",{className:"app-header-actions"},c.a.createElement(m.d,{external:!0,target:"_blank",href:"https://apps.apple.com/app/id".concat(l.id),round:!0,fill:!0},"GET"),c.a.createElement(m.i,{iconF7:"square_arrow_up"})),c.a.createElement("div",{className:"app-header-ratings"},c.a.createElement("div",{className:"app-header-rating"},c.a.createElement("div",{className:"app-header-rating-value"},l.rating),c.a.createElement(o,{rating:l.rating}),c.a.createElement("div",{className:"app-header-rating-sub"},"930 Ratings"))))),c.a.createElement("div",{className:"block app-screenshots"},l.screenshotsThumbs.map((function(e,a){return c.a.createElement(u,{onClick:function(){return function(e){E.current&&E.current.open(e)}(a)},src:e,key:a,alt:"Screenshot"})}))),c.a.createElement("div",{className:"block app-description ".concat(g?"app-description-full":"")},c.a.createElement("div",{className:"app-description-content"},c.a.createElement("div",{className:"app-description-text",dangerouslySetInnerHTML:{__html:(l.description||"").replace(/\n/g,"<br>")}}),c.a.createElement(m.i,{onClick:function(){return f(!0)}},"more"))),c.a.createElement(p.a,{title:"Ratings & Reviews"},c.a.createElement(m.i,null,"See All")),c.a.createElement("div",{className:"block app-ratings"},c.a.createElement("div",{className:"app-ratings-number"},c.a.createElement("b",null,l.rating),c.a.createElement("span",null,"out of 5")),c.a.createElement("div",{className:"app-ratings-votes"},[5,4,3,2,1].map((function(e){return c.a.createElement("div",{className:"app-ratings-votes-row",key:e},c.a.createElement("div",{className:"app-ratings-votes-stars"},Array.from({length:e}).map((function(e,a){return c.a.createElement(m.h,{key:a,f7:"star_fill"})}))),c.a.createElement("div",{className:"app-ratings-votes-progress"},c.a.createElement("span",{style:{width:"".concat(b[e]/N*100,"%")}})))})),c.a.createElement("div",{className:"app-ratings-votes-total"},N," Ratings"))),c.a.createElement("div",{className:"block app-reviews"},c.a.createElement("div",{className:"app-review"},c.a.createElement("div",{className:"app-review-header"},c.a.createElement("span",null,c.a.createElement("b",null,"John")),c.a.createElement("span",null,"2d ago")),c.a.createElement("div",{className:"app-review-header"},c.a.createElement(o,{rating:5}),c.a.createElement("span",null,"johndoe")),c.a.createElement("div",{className:"app-review-text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laborum debitis natus cum quae est rerum cupiditate cumque delectus eaque ipsa, accusamus facilis deleniti consequuntur, aliquam soluta minima, eos exercitationem.")),c.a.createElement("div",{className:"app-review"},c.a.createElement("div",{className:"app-review-header"},c.a.createElement("span",null,c.a.createElement("b",null,"Mike")),c.a.createElement("span",null,"3d ago")),c.a.createElement("div",{className:"app-review-header"},c.a.createElement(o,{rating:3}),c.a.createElement("span",null,"johndoe")),c.a.createElement("div",{className:"app-review-text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat pariatur laudantium, laborum sunt adipisci magni in doloremque neque error earum fugiat! Nihil molestias rem tenetur laboriosam illo similique nobis adipisci?")),c.a.createElement("div",{className:"app-review"},c.a.createElement("div",{className:"app-review-header"},c.a.createElement("span",null,c.a.createElement("b",null,"Vladimir")),c.a.createElement("span",null,"3d ago")),c.a.createElement("div",{className:"app-review-header"},c.a.createElement(o,{rating:2}),c.a.createElement("span",null,"johndoe")),c.a.createElement("div",{className:"app-review-text"},"Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, repudiandae minima? Reprehenderit ab placeat delectus necessitatibus suscipit cumque laborum modi, eaque, a consequuntur, pariatur et itaque. Vitae odio necessitatibus amet.")),c.a.createElement("div",{className:"app-review"},c.a.createElement("div",{className:"app-review-header"},c.a.createElement("span",null,c.a.createElement("b",null,"Karoly")),c.a.createElement("span",null,"4d ago")),c.a.createElement("div",{className:"app-review-header"},c.a.createElement(o,{rating:4}),c.a.createElement("span",null,"johndoe")),c.a.createElement("div",{className:"app-review-text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ab ex! Architecto alias delectus, optio eos nostrum obcaecati repellat distinctio, ab, quam dolores voluptatem ex inventore facere expedita exercitationem repudiandae?")),c.a.createElement("div",{className:"app-review"},c.a.createElement("div",{className:"app-review-header"},c.a.createElement("span",null,c.a.createElement("b",null,"Peter")),c.a.createElement("span",null,"4d ago")),c.a.createElement("div",{className:"app-review-header"},c.a.createElement(o,{rating:5}),c.a.createElement("span",null,"johndoe")),c.a.createElement("div",{className:"app-review-text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illo odit exercitationem eligendi maiores rerum quo, quos ullam quam! Quia facilis consequatur vitae cupiditate molestias maiores odit magnam quo itaque.")),c.a.createElement("div",{className:"app-review"},c.a.createElement("div",{className:"app-review-header"},c.a.createElement("span",null,c.a.createElement("b",null,"Alim")),c.a.createElement("span",null,"5d ago")),c.a.createElement("div",{className:"app-review-header"},c.a.createElement(o,{rating:1}),c.a.createElement("span",null,"johndoe")),c.a.createElement("div",{className:"app-review-text"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque ipsa accusantium qui praesentium, obcaecati quae illum, tempora molestias similique nihil sunt in tempore ipsam laborum illo maxime amet quos consectetur!"))),l.versions&&l.versions.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{title:"What's New"}),c.a.createElement("div",{className:"block"},c.a.createElement("p",{className:"display-flex justify-content-space-between",style:{opacity:.55}},c.a.createElement("span",null,"Version ",l.versions[l.versions.length-1].version),c.a.createElement("span",null,(a=l.versions[l.versions.length-1].release_date,new Intl.DateTimeFormat("en",{year:"numeric",month:"short",day:"numeric"}).format(new Date(a))))),c.a.createElement("p",null,l.versions[l.versions.length-1].release_notes||""))),c.a.createElement(p.a,{title:"Information"}),c.a.createElement(m.j,{noHairlines:!0,noChevron:!0,className:"safe-areas-inset app-information-list"},c.a.createElement(m.l,{title:"Provider",after:l.developer.name}),c.a.createElement(m.l,{title:"Size",after:"".concat(Math.floor(l.size/1e6)," MB")}),c.a.createElement(m.l,{title:"Compatibility",after:"Works on this iPhone"}),c.a.createElement(m.l,{title:"Languages",after:"English"}),c.a.createElement(m.l,{title:"Age Rating",after:"12+"}),c.a.createElement(m.l,{title:"In-App Purchases",after:"Yes"}),c.a.createElement(m.l,{title:"Copyright",after:"© ".concat(l.developer.name)}),c.a.createElement(m.l,{link:"https://apps.apple.com/developer/id".concat(l.developer.id),external:!0,target:"_blank",title:"Developer Website"},c.a.createElement(m.h,{slot:"after",f7:"compass"})),c.a.createElement(m.l,{link:"https://apps.apple.com/developer/id".concat(l.developer.id),external:!0,target:"_blank",title:"Privacy Policy"},c.a.createElement(m.h,{slot:"after",f7:"hand_raised_fill"}))))}}}]);
//# sourceMappingURL=app-details.b5f5fc.js.map