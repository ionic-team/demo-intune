(this["webpackJsonpreact-test-app"]=this["webpackJsonpreact-test-app"]||[]).push([[1],{35:function(e,n,t){},56:function(e,n,t){var r={"./ion-action-sheet.entry.js":[80,5],"./ion-alert.entry.js":[81,6],"./ion-app_8.entry.js":[82,7],"./ion-avatar_3.entry.js":[83,17],"./ion-back-button.entry.js":[84,18],"./ion-backdrop.entry.js":[85,43],"./ion-button_2.entry.js":[86,19],"./ion-card_5.entry.js":[87,20],"./ion-checkbox.entry.js":[88,21],"./ion-chip.entry.js":[89,22],"./ion-col_3.entry.js":[90,44],"./ion-datetime_3.entry.js":[91,10],"./ion-fab_3.entry.js":[92,23],"./ion-img.entry.js":[93,45],"./ion-infinite-scroll_2.entry.js":[94,46],"./ion-input.entry.js":[95,24],"./ion-item-option_3.entry.js":[96,25],"./ion-item_8.entry.js":[97,26],"./ion-loading.entry.js":[98,27],"./ion-menu_3.entry.js":[99,28],"./ion-modal.entry.js":[100,8],"./ion-nav_2.entry.js":[101,14],"./ion-popover.entry.js":[102,9],"./ion-progress-bar.entry.js":[103,29],"./ion-radio_2.entry.js":[104,30],"./ion-range.entry.js":[105,31],"./ion-refresher_2.entry.js":[106,11],"./ion-reorder_2.entry.js":[107,16],"./ion-ripple-effect.entry.js":[108,47],"./ion-route_4.entry.js":[109,32],"./ion-searchbar.entry.js":[110,33],"./ion-segment_2.entry.js":[111,34],"./ion-select_3.entry.js":[112,35],"./ion-slide_2.entry.js":[113,48],"./ion-spinner.entry.js":[114,13],"./ion-split-pane.entry.js":[115,49],"./ion-tab-bar_2.entry.js":[116,36],"./ion-tab_2.entry.js":[117,15],"./ion-text.entry.js":[118,37],"./ion-textarea.entry.js":[119,38],"./ion-toast.entry.js":[120,39],"./ion-toggle.entry.js":[121,12],"./ion-virtual-scroll.entry.js":[122,50]};function c(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],c=n[0];return t.e(n[1]).then((function(){return t(c)}))}c.keys=function(){return Object.keys(r)},c.id=56,e.exports=c},58:function(e,n,t){var r={"./ion-icon.entry.js":[123,57]};function c(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],c=n[0];return t.e(n[1]).then((function(){return t(c)}))}c.keys=function(){return Object.keys(r)},c.id=58,e.exports=c},77:function(e,n,t){},78:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t.n(r),o=t(26),s=t.n(o),i=t(14),a=t(4),u=t(43),l=t(46),j=t(2),d=t.n(j),p=t(7),h=t(20),b=(t(35),t(3)),f=function(){var e=Object(i.e)(),n=Object(r.useState)(null),t=Object(h.a)(n,2),c=t[0],o=t[1],s=Object(r.useState)(null),u=Object(h.a)(s,2),j=u[0],f=u[1],O=Object(r.useState)(null),x=Object(h.a)(O,2),y=x[0],v=x[1],w=Object(r.useState)(null),g=Object(h.a)(w,2),m=g[0],k=g[1],M=Object(r.useState)(null),_=Object(h.a)(M,2),A=_[0],C=_[1],E=Object(r.useState)(null),S=Object(h.a)(E,2),L=S[0],I=S[1];Object(r.useEffect)((function(){function e(){return n.apply(this,arguments)}function n(){return(n=Object(p.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=window.IntuneMAM,e.t0=v,e.next=4,n.sdkVersion();case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}document.addEventListener("deviceready",Object(p.a)(d.a.mark((function n(){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e();case 1:case"end":return n.stop()}}),n)}))),!1)}),[]),Object(r.useEffect)((function(){function e(){return n.apply(this,arguments)}function n(){return(n=Object(p.a)(d.a.mark((function e(){var n,t,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=window.IntuneMAM,!j||!j.upn){e.next=17;break}return e.prev=2,e.next=5,n.acquireTokenSilent(Object(l.a)({scopes:["https://graph.microsoft.com/.default"]},j));case 5:t=e.sent,o(t),console.log("Got token info",t),e.next=17;break;case 10:return e.prev=10,e.t0=e.catch(2),console.error("Unable to silently acquire token, getting interactive"),e.next=15,n.acquireToken({scopes:["https://graph.microsoft.com/.default"]});case 15:r=e.sent,o(r);case 17:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}document.addEventListener("deviceready",Object(p.a)(d.a.mark((function n(){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e();case 1:case"end":return n.stop()}}),n)}))),!1)}),[j]),Object(r.useEffect)((function(){function e(){return(e=Object(p.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=window.IntuneMAM,!j||!j.upn){e.next=17;break}return e.t0=C,e.next=5,n.appConfig(j);case 5:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=k,e.next=10,n.groupName(j);case 10:return e.t3=e.sent,(0,e.t2)(e.t3),e.t4=I,e.next=15,n.getPolicy(j);case 15:e.t5=e.sent,(0,e.t4)(e.t5);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[j]),Object(a.r)(Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:document.addEventListener("deviceready",Object(p.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=window.IntuneMAM,e.t0=f,e.next=4,n.enrolledAccount();case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)}))),!1);case 1:case"end":return e.stop()}}),e)}))));var N=Object(r.useCallback)(Object(p.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=window.IntuneMAM,e.next=3,n.displayDiagnosticConsole();case 3:case"end":return e.stop()}}),e)}))),[]),T=Object(r.useCallback)(Object(p.a)(d.a.mark((function n(){var t;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!j){n.next=4;break}return t=window.IntuneMAM,n.next=4,t.deRegisterAndUnenrollAccount(j);case 4:e.replace("/");case 5:case"end":return n.stop()}}),n)}))),[j]);return Object(b.jsxs)(a.e,{children:[Object(b.jsx)(a.d,{children:Object(b.jsx)(a.i,{children:Object(b.jsx)(a.h,{children:"Blank"})})}),Object(b.jsxs)(a.c,{fullscreen:!0,children:[Object(b.jsx)(a.d,{collapse:"condense",children:Object(b.jsx)(a.i,{children:Object(b.jsx)(a.h,{size:"large",children:"Blank"})})}),Object(b.jsx)("h2",{children:(null===j||void 0===j?void 0:j.upn)||"No user"}),Object(b.jsx)("h5",{children:"Token info:"}),Object(b.jsx)("textarea",{style:{height:"200px",width:"100%",display:"block"},value:JSON.stringify(null!==c&&void 0!==c?c:{},null,2)}),Object(b.jsxs)("h5",{children:["Intune MAM Version: ",(null===y||void 0===y?void 0:y.version)||"No version"]}),Object(b.jsxs)("h5",{children:["Group name: ",(null===m||void 0===m?void 0:m.value)||"No group name"]}),Object(b.jsx)("h5",{children:"Policy:"}),Object(b.jsx)("textarea",{style:{height:"200px",width:"100%",display:"block"},value:JSON.stringify(null!==L&&void 0!==L?L:{},null,2)}),Object(b.jsx)("h5",{children:"App Config:"}),Object(b.jsx)("textarea",{style:{height:"200px",width:"100%",display:"block"},value:JSON.stringify(null!==A&&void 0!==A?A:{},null,2)}),Object(b.jsx)(a.b,{onClick:N,children:"Show Diagnostics Console"}),Object(b.jsx)(a.b,{onClick:T,children:"Log out"})]})]})},O=(t(67),t(68),t(69),t(70),t(71),t(72),t(73),t(74),t(75),t(76),t(77),function(){var e=Object(i.e)(),n=Object(r.useState)(null),t=Object(h.a)(n,2),c=t[0],o=t[1];Object(r.useEffect)((function(){function e(){return n.apply(this,arguments)}function n(){return(n=Object(p.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=window.IntuneMAM,e.t0=o,e.next=4,n.sdkVersion();case 4:e.t1=e.sent.version,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}document.addEventListener("deviceready",Object(p.a)(d.a.mark((function n(){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e();case 1:case"end":return n.stop()}}),n)}))),!1)}));var s=Object(r.useCallback)(Object(p.a)(d.a.mark((function n(){var t,r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=window.IntuneMAM,n.next=3,t.acquireToken({scopes:["https://graph.microsoft.com/.default"]});case 3:return r=n.sent,console.log("Got auth info",r),n.next=7,t.registerAndEnrollAccount({upn:r.upn});case 7:return n.next=9,t.enrolledAccount();case 9:n.sent.upn?(console.log("Got user, going home"),setTimeout((function(){return e.replace("/home")}),500)):(console.log("No user, logging in"),setTimeout((function(){return e.replace("/login")}),500));case 11:case"end":return n.stop()}}),n)}))),[]),u=Object(r.useCallback)(Object(p.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=window.IntuneMAM,e.next=3,n.displayDiagnosticConsole();case 3:case"end":return e.stop()}}),e)}))),[]);return Object(b.jsxs)(a.e,{children:[Object(b.jsx)(a.d,{children:Object(b.jsx)(a.i,{children:Object(b.jsx)(a.h,{children:"Login"})})}),Object(b.jsxs)(a.c,{fullscreen:!0,children:[Object(b.jsx)(a.d,{collapse:"condense",children:Object(b.jsx)(a.i,{children:Object(b.jsx)(a.h,{size:"large",children:"Login"})})}),Object(b.jsx)(a.b,{onClick:s,children:"Log in"}),Object(b.jsx)(a.b,{onClick:u,children:"Show Console"}),c&&Object(b.jsxs)("p",{children:["SDK Version: ",c]})]})]})}),x=function(){var e=Object(i.e)();return Object(r.useEffect)((function(){function n(){return t.apply(this,arguments)}function t(){return(t=Object(p.a)(d.a.mark((function n(){var t;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=window.IntuneMAM,console.log("DeviceReady, Loaded intune",t),n.next=4,t.enrolledAccount();case 4:n.sent.upn?(console.log("Got user, going home"),setTimeout((function(){return e.replace("/home")}),500)):(console.log("No user, logging in"),setTimeout((function(){return e.replace("/login")}),500));case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}document.addEventListener("deviceready",Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n();case 1:case"end":return e.stop()}}),e)}))),!1)}),[]),Object(b.jsxs)(a.e,{children:[Object(b.jsx)(a.d,{children:Object(b.jsx)(a.i,{children:Object(b.jsx)(a.h,{children:"Welcome"})})}),Object(b.jsx)(a.c,{fullscreen:!0,children:Object(b.jsx)(a.d,{collapse:"condense",children:Object(b.jsx)(a.i,{children:Object(b.jsx)(a.h,{size:"large",children:"Welcome"})})})})]})},y=function(){return Object(b.jsx)(a.a,{children:Object(b.jsx)(u.a,{children:Object(b.jsxs)(a.g,{children:[Object(b.jsx)(i.b,{exact:!0,path:"/splash",children:Object(b.jsx)(x,{})}),Object(b.jsx)(i.b,{exact:!0,path:"/home",children:Object(b.jsx)(f,{})}),Object(b.jsx)(i.b,{exact:!0,path:"/login",children:Object(b.jsx)(O,{})}),Object(b.jsx)(i.b,{exact:!0,path:"/",children:Object(b.jsx)(i.a,{to:"/splash"})})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=function(e){e&&e instanceof Function&&t.e(58).then(t.bind(null,141)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,o=n.getLCP,s=n.getTTFB;t(e),r(e),c(e),o(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),v()}},[[78,3,4]]]);
//# sourceMappingURL=main.aa4ca4f8.chunk.js.map