(this["webpackJsonpfeedback-react-hooks"]=this["webpackJsonpfeedback-react-hooks"]||[]).push([[0],[,,function(e,t,n){e.exports={list:"Statistics_list__1dXnF",item:"Statistics_item__3srRQ"}},,,function(e,t,n){e.exports={button:"FeedbackOptions_button__I2Qqg",glowing:"FeedbackOptions_glowing__2Fhld"}},function(e,t,n){e.exports={title:"Section_title__2Opmn"}},,function(e,t,n){e.exports={container:"Container_container__MBra3"}},function(e,t,n){e.exports={container:"FeedbackCard_container__2ChOi",moveGradient:"FeedbackCard_moveGradient__1kBnD"}},,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),s=n(7),r=n.n(s),o=(n(15),n(16),n(3)),l=n(8),d=n.n(l);function b(e){var t=e.children;return Object(c.jsx)("div",{className:d.a.container,children:t})}var u=n(9),j=n.n(u);function O(e){var t=e.children;return Object(c.jsx)("div",{className:j.a.container,children:t})}var h=n(19),x=n(5),m=n.n(x);function f(e){var t=e.options,n=e.onLeaveFeedback;return Object(c.jsx)("div",{className:m.a.buttonBox,children:t.map((function(e){return Object(c.jsx)("button",{className:m.a.button,type:"button",onClick:function(){n(e)},children:"".concat(e.slice(0,1).toUpperCase()).concat(e.slice(1).toLowerCase())},Object(h.a)())}))})}function v(e){var t=e.message;return Object(c.jsx)("p",{children:t})}var _=n(6),p=n.n(_);function k(e){var t=e.title,n=e.children;return Object(c.jsxs)("div",{className:p.a.sectionBlock,children:[Object(c.jsx)("h1",{className:p.a.title,children:t}),n]})}var g=n(2),N=n.n(g);function F(e){var t=e.good,n=e.neutral,a=e.bad,i=e.total,s=e.positivePercentage;return Object(c.jsxs)("ul",{className:N.a.list,children:[Object(c.jsxs)("li",{className:N.a.item,children:["Good: ",t]}),Object(c.jsxs)("li",{className:N.a.item,children:["Neutral: ",n]}),Object(c.jsxs)("li",{className:N.a.item,children:["Bad: ",a]}),Object(c.jsxs)("li",{className:N.a.item,children:["Total: ",i]}),Object(c.jsxs)("li",{className:N.a.item,children:["Pozitive feedback: ",s,"%"]})]})}function S(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)(0),r=Object(o.a)(s,2),l=r[0],d=r[1],u=Object(a.useState)(0),j=Object(o.a)(u,2),h=j[0],x=j[1],m=function(){return n+l+h};return Object(c.jsx)(b,{children:Object(c.jsxs)(O,{children:[Object(c.jsx)(k,{title:"Please leave feedback",children:Object(c.jsx)(f,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e){case"good":i((function(e){return e+1}));break;case"neutral":d((function(e){return e+1}));break;case"bad":x((function(e){return e+1}));break;default:return}}})}),Object(c.jsx)(k,{title:"Statistics",children:0===m()?Object(c.jsx)(v,{message:"No one reported yet"}):Object(c.jsx)(F,{good:n,neutral:l,bad:h,total:m(),positivePercentage:Math.round(100*n/m())||0})})]})})}r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(S,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.65097e50.chunk.js.map