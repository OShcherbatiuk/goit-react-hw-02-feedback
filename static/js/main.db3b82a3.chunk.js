(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(3),i=n.n(r),o=n(4),s=n(5),d=n(6),l=n(8),b=n(7),u=n(0),j=function(e){var t=e.title,n=e.children;return Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{children:t}),n]})},h=function(e){var t=e.message;return Object(u.jsx)("p",{children:t})},v=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(u.jsx)(u.Fragment,{children:a?Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["Good: ",t]}),Object(u.jsxs)("li",{children:["Neutral: ",n]}),Object(u.jsxs)("li",{children:["Bad: ",c]}),Object(u.jsxs)("li",{children:["Total: ",a]}),Object(u.jsxs)("li",{children:["Positive feedback: ",r,"%"]})]}):Object(u.jsx)(h,{message:"No feedback given"})})},O=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(u.jsx)("div",{children:t.map((function(e){return Object(u.jsx)("button",{type:"button",value:e,onClick:n,children:e},e)}))})},g=["good","neutral","bad"],x=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback();return t?Math.round(e.state.good/t*100):0},e.handleFeedback=function(t){var n=t.target.value;e.setState((function(e){return Object(o.a)({},n,e[n]+1)}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,a=this.countTotalFeedback(),r=this.countPositiveFeedbackPercentage();return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(j,{title:"Please leave feedback",children:Object(u.jsx)(O,{options:g,onLeaveFeedback:this.handleFeedback})}),Object(u.jsx)(j,{title:"Statistics",children:Object(u.jsx)(v,{good:t,neutral:n,bad:c,total:a,positivePercentage:r})})]})}}]),n}(c.Component);n(14);i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.db3b82a3.chunk.js.map