(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8612)}])},8612:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return k}});var t=n(5893),a=n(7160),r=n.n(a),c=(n(4213),n(7294)),i=n(8177),o=n.n(i),l=n(5794),d=n(9583),m=n(7516),u=n(2146),h=function(e){return function(s){s({type:u.Z,payload:{currentTab:e}})}},f=n(9473),x=function(){var e=(0,c.useState)([]),s=e[0],n=e[1],a=(0,f.I0)();(0,c.useEffect)((function(){fetch("http://localhost:8000/get-contacts").then((function(e){return e.json()})).then((function(e){return n(e)})).catch((function(e){return console.log(e)}))}),[]);var r=function(e,s,n){var t;h("compose")(a),(t={firstName:e,lastName:s,number:n},function(e){e({type:u.Vx,payload:{composeData:{firstName:t.firstName,lastName:t.lastName,number:t.number}}})})(a)};return(0,t.jsxs)("div",{className:"container m-2",children:[(0,t.jsx)("h1",{children:"Contacts"}),(0,t.jsxs)("div",{className:o().contactList,children:[(0,t.jsx)("p",{children:(0,t.jsxs)("b",{children:["List of ",s.length," contacts"]})}),(0,t.jsx)("div",{className:o().contactcard,children:(0,t.jsx)(l.Z,{defaultActiveKey:"",children:s.map((function(e,s){return(0,t.jsxs)(l.Z.Item,{eventKey:s+"",children:[(0,t.jsx)(l.Z.Header,{children:(0,t.jsxs)("div",{className:o().card,children:[(0,t.jsx)(d.m3W,{className:o().cardIcon}),(0,t.jsxs)("span",{className:o().cardContent,children:[null===e||void 0===e?void 0:e.first_name," ",null===e||void 0===e?void 0:e.last_name," "]})]})}),(0,t.jsx)(l.Z.Body,{children:(0,t.jsxs)("b",{children:["First Name: ",null===e||void 0===e?void 0:e.first_name,(0,t.jsx)("br",{}),"Last Name: ",e.last_name,(0,t.jsx)("br",{}),"Number: ",e.number,(0,t.jsx)("br",{}),(0,t.jsxs)("button",{onClick:function(){return r(e.first_name,e.last_name,e.number)},className:"btn btn-md btn-dark",children:["Send Message ",(0,t.jsx)(m.PRb,{})]})]})})]},s)}))})})]})]})},_=n(9514),j=n.n(_),v=n(1872),b=n(8193),p=function(){var e=(0,f.v9)((function(e){return e.menu})).menu,s=(0,f.I0)(),n=function(e){h(e)(s)};return(0,t.jsx)("div",{className:j().leftsidebar,children:(0,t.jsxs)("div",{className:j().sideBarItemRow,children:[(0,t.jsx)("div",{className:j().sideBarTitle,children:(0,t.jsx)("h2",{children:"Menu"})}),(0,t.jsxs)("div",{onClick:function(){return n("contacts")},style:{border:"contacts"===e.currentTab?"3px solid green":"none"},className:j().sideBarItem,children:[(0,t.jsx)(v.efA,{className:j().iconSize}),(0,t.jsx)("span",{children:(0,t.jsx)("b",{children:"Contacts"})})]}),(0,t.jsxs)("div",{onClick:function(){return n("messaging")},style:{border:"messaging"===e.currentTab?"3px solid green":"none"},className:j().sideBarItem,children:[(0,t.jsx)(b.Zs0,{className:j().iconSize}),(0,t.jsx)("span",{children:(0,t.jsx)("b",{children:"Messages"})})]})]})})},N=n(7011),g=n.n(N),I=function(){var e=(0,c.useState)([]),s=e[0],n=e[1];(0,c.useEffect)((function(){fetch("http://localhost:8000/get-messages").then((function(e){return e.json()})).then((function(e){n(e.data)})).catch((function(e){return console.log(e)}))}),[]);return(0,t.jsxs)("div",{className:"container m-2",children:[(0,t.jsx)("h1",{children:"Messaging"}),(0,t.jsxs)("div",{className:g().messageList,children:[(0,t.jsx)("p",{children:(0,t.jsxs)("b",{children:["List of ",s.length," Messages"]})}),(0,t.jsx)("div",{className:g().messagecard,children:(0,t.jsx)(l.Z,{defaultActiveKey:"",children:s.map((function(e,s){return(0,t.jsxs)(l.Z.Item,{eventKey:s+"",children:[(0,t.jsx)(l.Z.Header,{children:(0,t.jsxs)("div",{className:g().card,children:[(0,t.jsx)(b.e$J,{className:g().cardIcon}),(0,t.jsxs)("span",{className:g().cardContent,children:[" To: ",null===e||void 0===e?void 0:e.firstName," ",null===e||void 0===e?void 0:e.lastName," "]}),(0,t.jsx)("br",{}),(n=null===e||void 0===e?void 0:e.createdAt,n=new Date(n).toLocaleString().replace(",",""))]})}),(0,t.jsx)(l.Z.Body,{children:(0,t.jsxs)("b",{children:["Message:",(0,t.jsx)("br",{})," ",null===e||void 0===e?void 0:e.message,(0,t.jsx)("br",{})]})})]},s);var n}))})})]})]})},T=n(4051),C=n.n(T),y=n(4811),w=n.n(y),B=n(782);function S(e,s,n,t,a,r,c){try{var i=e[r](c),o=i.value}catch(l){return void n(l)}i.done?s(o):Promise.resolve(o).then(t,a)}var O=function(){var e=(0,f.I0)(),s=(0,f.v9)((function(e){return e.menu.composeData})).composeData,n=(0,c.useState)(""),a=(n[0],n[1]),r=(0,c.useState)(""),i=r[0],o=r[1],l=(0,c.useState)(""),d=l[0],m=l[1];(0,c.useEffect)((function(){var e=("0".repeat(6)+Math.floor(Math.random()*Math.pow(10,6))).slice(-6);m("Hi. Your OTP is: ".concat(e," \n")),a(e)}),[]);var u=function(){var n,t=(n=C().mark((function n(){var t;return C().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t="".concat(d," ").concat(i),fetch("http://localhost:8000/send-message",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:t,firstName:s.firstName,lastName:s.lastName,number:s.number})}).then((function(s){B.Am.success("Successfully sented !",{position:B.Am.POSITION.TOP_RIGHT,autoClose:3e3}),h("messaging")(e)})).catch((function(e){B.Am.error("Error while senting !",{position:B.Am.POSITION.TOP_RIGHT,autoClose:3e3})}));case 2:case"end":return n.stop()}}),n)})),function(){var e=this,s=arguments;return new Promise((function(t,a){var r=n.apply(e,s);function c(e){S(r,t,a,c,i,"next",e)}function i(e){S(r,t,a,c,i,"throw",e)}c(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,t.jsxs)("div",{className:"container m-3",children:[(0,t.jsx)("h1",{children:"Compose"}),(0,t.jsxs)("div",{className:w().messageBox,children:[(0,t.jsxs)("div",{className:"nameTab",children:[(0,t.jsx)("label",{htmlFor:"from",children:"Name"}),(0,t.jsx)("input",{id:"from",value:s.firstName+" "+s.lastName,type:"text",disabled:!0,className:"form-control"})]}),(0,t.jsxs)("div",{className:"numberTab mt-2",children:[(0,t.jsx)("label",{htmlFor:"number",children:"Number"}),(0,t.jsx)("input",{type:"text",value:s.number,disabled:!0,className:"form-control"})]}),(0,t.jsxs)("div",{className:"otpContent mt-2",children:[(0,t.jsx)("label",{htmlFor:"otpTab",children:"Body"}),(0,t.jsx)("input",{type:"text",value:d,disabled:!0,className:"form-control"})]}),(0,t.jsxs)("div",{className:"messageTab mt-2",children:[(0,t.jsx)("label",{className:w().label,htmlFor:"message",children:"Message"}),(0,t.jsx)("textarea",{onChange:function(e){o(e.target.value)},value:i,id:"message",className:"form-control",rows:5})]}),(0,t.jsx)("div",{className:"sendButtonTab m-2",children:(0,t.jsx)("button",{onClick:u,className:"btn btn-md btn-dark",children:"Send"})})]})]})},k=function(){var e=(0,f.v9)((function(e){return e.menu})).menu;return(0,t.jsxs)("div",{className:r().wrapper,children:[(0,t.jsx)(B.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),(0,t.jsx)(B.Ix,{}),(0,t.jsx)("div",{className:r().leftsidebar,children:(0,t.jsx)(p,{})}),(0,t.jsx)("div",{className:r().home,children:"contacts"===e.currentTab?(0,t.jsx)(x,{}):"messaging"===e.currentTab?(0,t.jsx)(I,{}):"compose"===e.currentTab&&(0,t.jsx)(O,{})})]})}},7160:function(e){e.exports={leftsidebar:"Home_leftsidebar__lJF6s",home:"Home_home__V_V4i",wrapper:"Home_wrapper__kA9A_"}},4811:function(e){e.exports={messageBox:"compose_messageBox__Tsmf0"}},8177:function(e){e.exports={contactList:"contact_contactList__tXI71",contactcard:"contact_contactcard__ylDCN",cardIcon:"contact_cardIcon__NLyiJ",cardContent:"contact_cardContent__3lGWL",card:"contact_card__4s1Bs"}},9514:function(e){e.exports={leftsidebar:"left-sidebar_leftsidebar__i10C3",iconSize:"left-sidebar_iconSize__BMMoW",sideBarItemRow:"left-sidebar_sideBarItemRow__2WrZR",sideBarTitle:"left-sidebar_sideBarTitle__cUtSc",sideBarItem:"left-sidebar_sideBarItem__A6CVp"}},7011:function(e){e.exports={messagingList:"messaging_messagingList__wFiVD",messagecard:"messaging_messagecard__sDXIA",cardIcon:"messaging_cardIcon___sv7O",cardContent:"messaging_cardContent__IS7zC",card:"messaging_card__bim8o"}}},function(e){e.O(0,[994,445,874,617,454,774,888,179],(function(){return s=8312,e(e.s=s);var s}));var s=e.O();_N_E=s}]);