(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[902],{6245:function(e,r,t){"use strict";function n(e){this.message=e}n.prototype=Error(),n.prototype.name="InvalidCharacterError";var s="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var r=String(e).replace(/=+$/,"");if(r.length%4==1)throw new n("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,s,i=0,o=0,c="";s=r.charAt(o++);~s&&(t=i%4?64*t+s:s,i++%4)&&(c+=String.fromCharCode(255&t>>(-2*i&6))))s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(s);return c};function i(e){this.message=e}i.prototype=Error(),i.prototype.name="InvalidTokenError",r.Z=function(e,r){if("string"!=typeof e)throw new i("Invalid token specified");var t=!0===(r=r||{}).header?0:1;try{return JSON.parse(function(e){var r,t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return r=t,decodeURIComponent(s(r).replace(/(.)/g,function(e,r){var t=r.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t}))}catch(n){return s(t)}}(e.split(".")[t]))}catch(n){throw new i("Invalid token specified: "+n.message)}}},527:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user-profile/history",function(){return t(6357)}])},1348:function(e,r,t){"use strict";var n=t(828),s=t(5893);t(7294);var i=t(1664),o=t.n(i),c=t(6688),a=t(461),l=function(){var e=function(){r("tgtoken"),r("googlelogin"),r("user-data"),console.log("cookie di delete"),window.location.href="/"},r=function(e){document.cookie=e+"=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"},t=(0,n.Z)((0,a.Z)(),3);return t[0],t[1],t[2],(0,s.jsxs)(c.ZP,{children:[(0,s.jsxs)(c.ZP.Header,{children:[(0,s.jsxs)(c.ZP.Brand,{className:"row logo-profile",children:[(0,s.jsx)(o(),{href:"/",children:(0,s.jsx)("img",{src:"/gaming-logo.png",alt:""})}),(0,s.jsx)(o(),{href:"/",children:(0,s.jsxs)("h2",{children:["GAM",(0,s.jsx)("span",{children:"X"})]})})]}),(0,s.jsx)("hr",{}),(0,s.jsx)("hr",{}),(0,s.jsx)("hr",{})]}),(0,s.jsxs)(c.ZP.Nav,{className:"column menu-profile",children:[(0,s.jsxs)(c.ZP.Nav.Link,{className:"row overview",href:"/user-profile",children:[(0,s.jsx)("img",{src:"/icons8-person-32.png",alt:""}),(0,s.jsx)("h4",{children:"Overview"})]}),(0,s.jsxs)(c.ZP.Nav.Link,{className:"row history",href:"/user-profile/history",children:[(0,s.jsx)("img",{src:"/icons8-history-32.png",alt:""}),(0,s.jsx)("h4",{children:"History"})]}),(0,s.jsxs)(c.ZP.Nav.Link,{className:"row summary",href:"/user-profile/summary",children:[(0,s.jsx)("img",{src:"/icons8-overview-48.png",alt:""}),(0,s.jsx)("h4",{children:"Summary"})]}),(0,s.jsxs)(c.ZP.Nav.Link,{className:"row settings",href:"/user-profile/editprofile",children:[(0,s.jsx)("img",{src:"/icons8-gear-32.png",alt:""}),(0,s.jsx)("h4",{children:"Settings"})]}),(0,s.jsxs)(c.ZP.Nav.Link,{className:"row log-out",onClick:e,children:[(0,s.jsx)("img",{src:"/icons8-logout-48.png",alt:""}),(0,s.jsx)("h4",{children:"Log out"})]})]})]})};r.Z=l},6357:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return m}});var n=t(5893),s=t(7568),i=t(828),o=t(655),c=t(1348),a=t(9008),l=t.n(a),d=t(7294),h=t(196),u=t(6245),f=t(461),x=t(5147),j=function(){var e=(0,i.Z)((0,f.Z)(),2),r=e[0];e[1];var t,a=(0,d.useState)([]),j=a[0],m=a[1],p=(t=(0,s.Z)(function(){var e,t,n,s,i,c;return(0,o.__generator)(this,function(s){switch(s.label){case 0:return e=r.tgtoken,t=r.googlelogin,n="",n=e?(0,u.Z)(e).id:t.uid,[4,h.ZP.get("".concat("https://traditionalgame.herokuapp.com","/api/history/").concat(n),{withCredentials:!1})];case 1:if(i=s.sent(),console.log("History message :"+i.data.message),i.data.result)for(console.log(i.data.result),m(i.data.result),c=0;c<i.data.result.length;c++)console.log("test",[c]);return[2]}})}),function(){return t.apply(this,arguments)});return(0,d.useEffect)(function(){p()},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l(),{children:(0,n.jsx)("title",{children:"GAMX | PROFILE"})}),(0,n.jsx)("div",{className:"container",id:"user-profile",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"sidebar-profile col-md-2",children:(0,n.jsx)(c.Z,{})}),(0,n.jsxs)("div",{className:"container col-md-9",id:"history",children:[(0,n.jsx)("h1",{children:"History Games"}),(0,n.jsx)("p",{className:"p-col-md-6",children:"If you log in to the same account to play games on more than one device, you can see all the games you have played."}),(0,n.jsxs)(x.Z,{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{className:"justify-content-center text-center",children:[(0,n.jsx)("th",{children:"User"}),(0,n.jsx)("th",{children:"Win"}),(0,n.jsx)("th",{className:"justify-content-center text-center",children:"Draw"}),(0,n.jsx)("th",{className:"justify-content-center text-center",children:"Lose"}),(0,n.jsx)("th",{className:"justify-content-center text-center",children:"Scheme"}),(0,n.jsx)("th",{className:"justify-content-center text-center",children:"Openent"}),(0,n.jsx)("th",{className:"justify-content-center text-center",children:"Time Stamp"})]})}),(0,n.jsx)("tbody",{children:j.map(function(e,r){return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e.username}),(0,n.jsx)("td",{children:e.win}),(0,n.jsx)("td",{children:e.draw}),(0,n.jsx)("td",{children:e.lose}),(0,n.jsx)("td",{children:e.scheme}),(0,n.jsx)("td",{children:e.oponent}),(0,n.jsx)("td",{children:e.timestamp})]},r)})})]})]})]})})]})},m=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(j,{})})}},5147:function(e,r,t){"use strict";var n=t(4184),s=t.n(n),i=t(7294),o=t(6792),c=t(5893);let a=i.forwardRef(({bsPrefix:e,className:r,striped:t,bordered:n,borderless:i,hover:a,size:l,variant:d,responsive:h,...u},f)=>{let x=(0,o.vE)(e,"table"),j=s()(r,x,d&&`${x}-${d}`,l&&`${x}-${l}`,t&&`${x}-${"string"==typeof t?`striped-${t}`:"striped"}`,n&&`${x}-bordered`,i&&`${x}-borderless`,a&&`${x}-hover`),m=(0,c.jsx)("table",{...u,className:j,ref:f});if(h){let p=`${x}-responsive`;return"string"==typeof h&&(p=`${p}-${h}`),(0,c.jsx)("div",{className:p,children:m})}return m});r.Z=a}},function(e){e.O(0,[664,183,196,809,688,774,888,179],function(){return e(e.s=527)}),_N_E=e.O()}]);