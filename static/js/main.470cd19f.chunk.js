(this["webpackJsonpchat-test-app"]=this["webpackJsonpchat-test-app"]||[]).push([[0],{42:function(e,t,n){e.exports=n(64)},52:function(e,t,n){e.exports=n.p+"static/media/Brown-Regular.123c7e67.ttf"},53:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),i=n.n(o),c=n(6),s=(n(52),n(53),n(2)),l=n(26),u=n(8),d=n(5),m=n(28),f=n(29),g=n.n(f),h=n(22),p=n(30),b=n.n(p),v=n(31),w=n(20),E=function e(t){if(e.cache||(e.cache={}),!e.cache[t]){var n=new Date(1e3*t),a=n.getDate()<10?"0".concat(n.getDate()):n.getDate(),r=["January","February","March","April","May","June","July","August","September","October","November","December"][n.getMonth()],o=n.getFullYear(),i=n.getMinutes()<10?"0".concat(n.getMinutes()):n.getMinutes(),c=n.getHours()<10?"0".concat(n.getHours()):n.getHours();return e.cache[t]={date:"".concat(r," ").concat(a,",").concat(o),time:"".concat(c,":").concat(i)},e.cache[t]}return e.cache[t]},x=function(e,t){var n=Math.floor(Date.now()/1e3).toString();return E(n).date===E(e).date?"Today":E(n).date===E(e).date-1?"Yesterday":t},D="CONVERT_TO_DATE",O="UPDATE_READ_MESSAGES",j="ADD_NEW_MESSAGES",S="HIDE_SCROLL_BUTTON",I="REQUEST_DATA_PENDING",y="REQUEST_DATA_SUCCESS",M="REQUEST_DATA_FAILED",T="DEFAULTS",N={requestedData:[],isPending:!1,error:"",scrollDownEnable:!0},A={setUpdatedTimeStampData:function(){return function(e,t){for(var n=t().chat,a=k(n),r=Object(w.a)(a),o=[],i=0,c=r.length;i<c;i+=1){var s=r[i].timestamp;r[i].date=E(s).date,r[i].time=E(s).time,o.push(r[i])}e({type:D,convertedData:o})}},setDefault:function(){return{type:T}},setReadMessages:function(e){return function(t,n){for(var a=n().chat,r=k(a),o=[],i=r.slice(e,r.length),c=0,s=e;c<s;c+=1)"in"===r[c].direction&&(r[c].status="read"),o.push(r[c]);var l=o.concat(i);t({type:O,readMessages:l})}},setAddNewMessages:function(e){return function(t,n){var a=n().chat,r=k(a),o=r[r.length-1].id+1,i=Math.floor(Date.now()/1e3).toString(),c={};c.id=o,c.direction="out",c.status="sent",c.timestamp=i,c.text=e,c.date=E(i).date,c.time=E(i).time,t({type:j,updatedMessages:c})}},setToggleScrollDownDisable:function(){return function(e){e({type:S,scrollDownEnable:!1})}},setToggleScrollDownEnable:function(){return function(e){e({type:S,scrollDownEnable:!0})}},setRequestedData:function(){return function(e){e({type:I,isPending:!0}),fetch("https://raw.githubusercontent.com/OzkanAbdullahoglu/chat-test-app/master/src/data/messageData.json").then((function(e){return e.json()})).then((function(t){return e({type:y,isPending:!1,requestedData:t})})).catch((function(t){return e({type:M,isPending:!1,error:t})}))}}},k=function(e){return e.requestedData},R={getRequestedData:k,getShowTimeStampBool:function(e,t){return 1===t||e.requestedData[t-2].date!==e.requestedData[t-1].date},getUnreadMessages:function(e){for(var t=[],n=e.requestedData,a=0,r=n.length;a<r;a+=1)"in"===n[a].direction&&"received"===n[a].status&&t.push(n[a].id);return{count:t.length,firstUnreadId:t[0]||"none"}},getScrollDownVisibilityStatus:function(e){return e.scrollDownEnable},getPendingStatus:function(e){return e.isPending}},U="SET_LAST_MESSAGE_REF",B={messagesEndRef:""},P={setLastMessageRef:function(e){return function(t){t({type:U,messagesEndRef:e})}}},q=function(e){return e.messagesEndRef},_=Object(d.combineReducers)({chat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(s.a)(Object(s.a)({},e),{},{isPending:t.isPending});case y:return e.requestedData.length>0?Object(s.a)(Object(s.a)({},e),{},{isPending:!1,requestedData:Object(w.a)(e.requestedData)}):Object(s.a)(Object(s.a)({},e),{},{isPending:t.isPending,requestedData:t.requestedData});case M:return Object(s.a)(Object(s.a)({},e),{},{isPending:t.isPending,error:t.error});case D:return Object(s.a)(Object(s.a)({},e),{},{requestedData:t.convertedData});case O:return Object(s.a)(Object(s.a)({},e),{},{requestedData:t.readMessages});case j:return Object(s.a)(Object(s.a)({},e),{},{requestedData:[].concat(Object(w.a)(e.requestedData),[t.updatedMessages])});case S:return Object(s.a)(Object(s.a)({},e),{},{scrollDownEnable:t.scrollDownEnable});case T:return N;default:return e}},message:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(s.a)(Object(s.a)({},e),{},{messagesEndRef:t.messagesEndRef});default:return e}},version:function(){return{number:"0.0.1"}}}),z=function(e){return R.getRequestedData(e.chat)},C=function(e){return R.getUnreadMessages(e.chat)},L=function(e){return R.getScrollDownVisibilityStatus(e.chat)},V=function(e){return R.getPendingStatus(e.chat)},F=function(e){return function(t){return R.getShowTimeStampBool(e.chat,t)}},H=function(e){return q(e.message)},J=_,W=[m.a],G={key:"root",storage:g.a,timeout:0,stateReconciler:b.a,blacklist:["message"]},K=Object(h.a)(G,J),Q=Object(d.createStore)(K,Object(v.composeWithDevTools)(d.applyMiddleware.apply(void 0,W))),Y=Object(h.b)(Q),$=(n(56),n(39)),X=n(11),Z=n(12);function ee(){var e=Object(X.a)(["\n  width: ",";\n  height: ",";\n  display: flex;\n  opacity: ",";\n  transition-property: opacity;\n  transition-duration: 0.5s;\n  transition-timing-function: linear;\n  transition-delay: 0.1s;\n  position: ",";\n  border-radius: 50%;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  background-color: ",";\n  border: ",";\n  cursor: ",";\n  margin: ",";\n  right: ",";\n  bottom: ",";\n  top: ",";\n  left: ",";\n  box-shadow: 0.1em 0.1em rgba(0, 0, 0, 0.12);\n  -moz-box-shadow: 0.1em 0.1em rgba(0, 0, 0, 0.12);\n  -webkit-box-shadow: 0.1em 0.1em rgba(0, 0, 0, 0.12);\n  -o-box-shadow: 0.1em 0.1em rgba(0, 0, 0, 0.12);\n  z-index: 2;\n  &:hover {\n    background: ",";\n    color: #fff;\n  }\n  &:focus {\n    outline: '1px solid black';\n    outline-offset: -4px;\n  }\n\n  @media (max-height: 1370px) and (max-width: 1024px) {\n    top: ",";\n    left: ",";\n  }\n\n  @media (max-height: 1024px) and (max-width: 770px) {\n    top: ",";\n    left: ",";\n  }\n  @media (max-height: 823px) and (max-width: 415px) {\n    top: ",";\n    left: ",";\n  }\n  @media (max-height: 670px) and (max-width: 375px) {\n    top: ",";\n    left: ",";\n  }\n  @media (max-height: 640px) and (max-width: 360px) {\n    top: ",";\n    left: ",";\n  }\n\n  @media (max-height: 570px) and (max-width: 320px) {\n    top: ",";\n    left: ",";\n  }\n"]);return ee=function(){return e},e}var te=Z.a.div(ee(),(function(e){return e.incomingIcon||e.incomingAvatar||e.sendIcon?"40px":"20px"}),(function(e){return e.incomingIcon||e.incomingAvatar||e.sendIcon?"40px":"20px"}),(function(e){return e.hideButton?0:1}),(function(e){return e.sendIcon?"absolute":e.scrollDown?"sticky":"relative"}),(function(e){return e.incomingIcon?" #fff":"#00bcd4"}),(function(e){return e.incomingIcon?"1px solid #00bcd4":"none"}),(function(e){return e.scrollDown||e.incomingIcon||e.sendIcon?"pointer":"auto"}),(function(e){return e.scrollDown?"0 10px 0 0":"0 7px 0 10px"}),(function(e){return e.sendIcon||e.scrollDown?"0":"inherit"}),(function(e){return e.sendIcon?"10px":"inherit"}),(function(e){return e.scrollDown?"625px":e.sendIcon?"10px":"0"}),(function(e){return e.scrollDown?"410px":"inherit"}),(function(e){return e.scrollDown||e.incomingIcon,"#00bcd4"}),(function(e){return e.scrollDown?"1250px":e.sendIcon?"10px":"0"}),(function(e){return e.scrollDown?"390px":"inherit"}),(function(e){return e.scrollDown?"900px":e.sendIcon?"10px":"0"}),(function(e){return e.scrollDown?"380px":"inherit"}),(function(e){return e.scrollDown?"600px":e.sendIcon?"10px":"0"}),(function(e){return e.scrollDown?"310px":"inherit"}),(function(e){return e.scrollDown?"550px":e.sendIcon?"10px":"0"}),(function(e){return e.scrollDown?"300px":"inherit"}),(function(e){return e.scrollDown?"500px":e.sendIcon?"10px":"0"}),(function(e){return e.scrollDown?"300px":"inherit"}),(function(e){return e.scrollDown?"440px":e.sendIcon?"10px":"0"}),(function(e){return e.scrollDown?"250px":"inherit"}));function ne(){var e=Object(X.a)(["\n  fill: currentColor;\n  width: ",";\n  height: ",";\n  font-size: ",";\n  color: ",";\n  margin-right: ",";\n  position: ",";\n  transform: ",";\n\n   ",":hover & {\n    color: #fff\n  };\n"]);return ne=function(){return e},e}var ae=Z.a.svg(ne(),(function(e){return e.sendIcon?"1.5em":"2em"}),(function(e){return e.sendIcon?"1.5em":"2em"}),(function(e){return e.incomingAvatar?"1.5rem":"1rem"}),(function(e){return e.incomingIcon?"#00bcd4":"#fff"}),(function(e){return e.incomingIcon?"0.1rem":0}),(function(e){return e.sendIcon?"absolute":"relative"}),(function(e){return e.scrollDown?"rotate(90deg)":e.incomingIcon?"rotate(180deg)":"rotate(0)"}),te),re=n(35),oe=n(36),ie=n(40),ce=n(37),se=(n(58),function(e){Object(ie.a)(n,e);var t=Object(ce.a)(n);function n(e){var a;return Object(re.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState({value:e.target.value})},a.handleSubmit=function(e){var t=a.props,n=t.setAddNewMessages,r=t.scrollToBottom,o=t.scrollToFirstUnread,i=t.unreadMesssages.firstUnreadId;""!==a.state.value&&(n(a.state.value),"none"!==i?o():r(),a.setState({value:""}),e.preventDefault())},a.handleKeyPress=function(e){var t=document.getElementById("standard-basic").value;13===e.nativeEvent.keyCode&&""===t&&e.preventDefault()},a.state={value:""},a}return Object(oe.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{className:"form-main",onSubmit:this.handleSubmit,autoComplete:"off"},r.a.createElement("div",{className:"form-control-root"},r.a.createElement("input",{placeholder:"Sending Message...",id:"standard-basic",type:"text",className:"base-input",onChange:this.handleChange,onKeyPress:this.handleKeyPress,value:this.state.value}),r.a.createElement(te,{sendIcon:!0,"aria-label":"Click to send a message",tabIndex:"0"},r.a.createElement(ae,{sendIcon:!0,viewBox:"0 0 24 24",onClick:this.handleSubmit,"data-test":"svg-icon"},r.a.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})))))}}]),n}(r.a.Component)),le=Object(c.b)((function(e){return{unreadMesssages:C(e)}}),Object(s.a)({},A)),ue=Object(u.a)(le)(se),de=n(76),me=(n(59),function(e){var t=e.pack;return r.a.createElement("div",{className:"list-item-root"},r.a.createElement("div",{className:"list-item-text-root"},"out"===t.direction?r.a.createElement("div",{className:"list-item-text-primary message-out"},r.a.createElement("span",{"data-test":"item-text"},t.text),r.a.createElement("span",{className:"time-inline"},t.time),"sent"===t.status?r.a.createElement(de.a,{style:{fontSize:"1rem",color:"gray",padding:0,float:"right",alignSelf:"center"},"data-test":"sent-icon"},"done"):r.a.createElement(de.a,{style:{fontSize:"1rem",padding:0,float:"right",alignSelf:"center",color:"read"===t.status?"blue":"#777"},"data-test":"read-icon"},"done_all")):r.a.createElement("div",{className:"list-item-text-primary"},r.a.createElement("span",{"data-test":"item-text"},t.text),r.a.createElement("span",{className:"time-inline"},t.time))))}),fe=(n(60),n(61),function(e){var t=e.pack;return r.a.createElement("div",{className:"list-item-date-root"},r.a.createElement("div",{className:"list-item-date-text-primary timestamp","aria-label":"Date"},r.a.createElement("span",null,x(t.timestamp,t.date))))}),ge=Object(c.b)((function(e){return{updatedInitialData:z(e),showTimeStampBool:F(e)}}),Object(s.a)({},P),null,{forwardRef:!0}),he=Object(u.a)(ge)((function(e){var t=e.index,n=e.style,o=e.showTimeStampBool,i=e.updatedInitialData,c=e.setLastMessageRef,s=i,l=Object(a.useRef)();return Object(a.useEffect)((function(){t===s.length-1&&c(l)}),[]),o(s[t].id)?r.a.createElement("div",{style:n,className:"list-item-container ".concat(t),key:s[t].id},r.a.createElement(fe,{pack:s[t]}),r.a.createElement(me,{pack:s[t]}),t===s.length-1?r.a.createElement("div",{className:"list-end-message list-item-container",ref:l}):null):r.a.createElement("div",{style:n,className:"list-item-container ".concat(t),key:s[t].id},r.a.createElement(me,{pack:s[t]}),t===s.length-1?r.a.createElement("div",{className:"list-end-message list-item-container",ref:l}):null)})),pe=(n(62),Object(c.b)((function(e){return{initialData:z(e),showTimeStampBool:F(e),unreadMesssages:C(e),isScrollDownVisible:L(e),endOfTheList:H(e)}}),Object(s.a)({},A))),be=Object(u.a)(pe)((function(e){var t=e.initialData,n=e.setUpdatedTimeStampData,o=e.showTimeStampBool,i=e.unreadMesssages,c=e.setReadMessages,s=e.setToggleScrollDownDisable,l=e.setToggleScrollDownEnable,u=e.isScrollDownVisible,d=e.endOfTheList,m=e.height,f=e.width;Object(a.useEffect)((function(){n()}),[]),Object(a.useEffect)((function(){if("none"===i.firstUnreadId)return b()}),[]);var g=Object(a.useRef)(),h=t,p=function(){null===d.current||void 0===d.current?b():d.current.scrollIntoView({behavior:"smooth",block:"end"})},b=function(){null===g.current&&void 0===g.current||g.current.scrollToItem(h[h.length-1].id+2,{behavior:"smooth",block:"end"})},v=function(){var e=i.firstUnreadId;"none"!==e?g.current.scrollToItem(e,{behavior:"smooth",block:"end"}):p()};return r.a.createElement("div",{className:"main-list"},r.a.createElement(te,{incomingIcon:!0,scrollDown:!0,hideButton:!u,"data-test":"wrapper","aria-label":"Scroll down to the first unread message",tabIndex:"0"},r.a.createElement(ae,{incomingIcon:!0,scrollDown:!0,viewBox:"0 0 48 48",onClick:v,"data-test":"svg-icon"},r.a.createElement("path",{xmlns:"http://www.w3.org/2000/svg",d:"M20 12l-2.83 2.83 9.17 9.17-9.17 9.17 2.83 2.83 12-12z"}),r.a.createElement("path",{xmlns:"http://www.w3.org/2000/svg",d:"M0 0h48v48h-48z",fill:"none"}))),r.a.createElement($.a,{ref:g,height:m-180,width:f,itemSize:function(e){return o(h[e].id)?90:45},itemCount:h.length,className:"list-root",overscanCount:5,onItemsRendered:function(e){var t=i.firstUnreadId,n=e.visibleStopIndex+1;n>=t&&c(n),"none"===t&&h.length-n<10?s():l()}},he),r.a.createElement(ue,{scrollToBottom:p,scrollToFirstUnread:v}))})),ve=(n(63),Object(c.b)((function(e){return{unreadMessages:C(e)}}),Object(s.a)({},A))),we=Object(u.a)(ve)((function(e){var t=e.unreadMessages,n=(e.incomingIcon,e.incomingAvatar);return r.a.createElement("div",{className:"container-root"},n?r.a.createElement("div",{className:"header-root incoming-user"},r.a.createElement(te,{"data-test":"wrapper",incomingIcon:!0,"aria-label":"Back to chat screen",tabIndex:"0"},r.a.createElement(ae,{incomingIcon:!0,viewBox:"0 0 48 48"},r.a.createElement("path",{xmlns:"http://www.w3.org/2000/svg",d:"M20 12l-2.83 2.83 9.17 9.17-9.17 9.17 2.83 2.83 12-12z"}),r.a.createElement("path",{xmlns:"http://www.w3.org/2000/svg",d:"M0 0h48v48h-48z",fill:"none"}))),r.a.createElement(te,{incomingAvatar:!0,"aria-label":"View User 2 profile",tabIndex:"0"},r.a.createElement(ae,{incomingAvatar:!0,viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}))),r.a.createElement("div",{className:"header-content",tabIndex:"0"},r.a.createElement("span",{className:"header-text"},"User 2"))):r.a.createElement("div",{className:"header-root"},r.a.createElement(te,{"data-test":"wrapper",incomingAvatar:!1,"aria-label":"View User 1 profile",tabIndex:"0"},r.a.createElement(ae,{incomingAvatar:!1,viewBox:"0 0 24 24","data-test":"icon"},r.a.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}))),r.a.createElement("div",{className:"header-content",tabIndex:"0"},r.a.createElement("span",{className:"header-text"},"User 1 (",t.count," new messages)"))))}));function Ee(){var e=Object(X.a)(["\n  border: 0.2em solid rgba(0, 0, 0, 0.1);\n  border-top: 0.2em solid #00bcd4;\n  border-radius: 50%;\n  width: 2.2rem;\n  height: 2.2rem;\n  animation: "," 0.6s linear infinite;\n  position: fixed;\n  top: 50%;\n  bottom: 50%;\n  left: 50%;\n"]);return Ee=function(){return e},e}function xe(){var e=Object(X.a)(["\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n"]);return xe=function(){return e},e}var De=Object(Z.b)(xe()),Oe=Z.a.div(Ee(),De),je=n(38);function Se(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var Ie=Object(c.b)((function(e){return{isPending:V(e)}}),Object(s.a)({},A)),ye=Object(u.a)(Ie)((function(e){var t=e.setRequestedData,n=e.isPending;Object(a.useEffect)((function(){t()}),[]);var o=function(){var e=Object(a.useState)(Se()),t=Object(je.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){function e(){r(Se())}return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n}(),i=o.height,c=o.width;return r.a.createElement(l.a,{loading:null,persistor:Y},r.a.createElement(we,{incomingIcon:!1,incomingAvatar:!1}),r.a.createElement(we,{incomingIcon:!0,incomingAvatar:!0}),n?r.a.createElement(Oe,{"data-test":"spinner"}):r.a.createElement(be,{width:c,height:i}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,{store:Q},r.a.createElement(ye,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.470cd19f.chunk.js.map