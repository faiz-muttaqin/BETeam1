(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[542],{6245:function(e,r,s){"use strict";function n(e){this.message=e}n.prototype=Error(),n.prototype.name="InvalidCharacterError";var i="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var r=String(e).replace(/=+$/,"");if(r.length%4==1)throw new n("'atob' failed: The string to be decoded is not correctly encoded.");for(var s,i,a=0,t=0,c="";i=r.charAt(t++);~i&&(s=a%4?64*s+i:i,a++%4)&&(c+=String.fromCharCode(255&s>>(-2*a&6))))i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(i);return c};function a(e){this.message=e}a.prototype=Error(),a.prototype.name="InvalidTokenError",r.Z=function(e,r){if("string"!=typeof e)throw new a("Invalid token specified");var s=!0===(r=r||{}).header?0:1;try{return JSON.parse(function(e){var r,s=e.replace(/-/g,"+").replace(/_/g,"/");switch(s.length%4){case 0:break;case 2:s+="==";break;case 3:s+="=";break;default:throw"Illegal base64url string!"}try{return r=s,decodeURIComponent(i(r).replace(/(.)/g,function(e,r){var s=r.charCodeAt(0).toString(16).toUpperCase();return s.length<2&&(s="0"+s),"%"+s}))}catch(n){return i(s)}}(e.split(".")[s]))}catch(n){throw new a("Invalid token specified: "+n.message)}}},6229:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user-profile",function(){return s(6046)}])},1348:function(e,r,s){"use strict";var n=s(828),i=s(5893);s(7294);var a=s(1664),t=s.n(a),c=s(6688),l=s(461),o=function(){var e=function(){s("tgtoken"),s("googlelogin"),s("user-data"),window.location.href="/"},r=(0,n.Z)((0,l.Z)(),3),s=(r[0],r[1],r[2]);return(0,i.jsxs)(c.ZP,{children:[(0,i.jsxs)(c.ZP.Header,{children:[(0,i.jsxs)(c.ZP.Brand,{className:"row logo-profile",children:[(0,i.jsx)(t(),{href:"/",children:(0,i.jsx)("img",{src:"/gaming-logo.png",alt:""})}),(0,i.jsx)(t(),{href:"/",children:(0,i.jsxs)("h2",{children:["GAM",(0,i.jsx)("span",{children:"X"})]})})]}),(0,i.jsx)("hr",{}),(0,i.jsx)("hr",{}),(0,i.jsx)("hr",{})]}),(0,i.jsxs)(c.ZP.Nav,{className:"column menu-profile",children:[(0,i.jsxs)(c.ZP.Nav.Link,{className:"row overview",href:"/user-profile",children:[(0,i.jsx)("img",{src:"/icons8-person-32.png",alt:""}),(0,i.jsx)("h4",{children:"Overview"})]}),(0,i.jsxs)(c.ZP.Nav.Link,{className:"row history",href:"/user-profile/history",children:[(0,i.jsx)("img",{src:"/icons8-history-32.png",alt:""}),(0,i.jsx)("h4",{children:"History"})]}),(0,i.jsxs)(c.ZP.Nav.Link,{className:"row summary",href:"/user-profile/summary",children:[(0,i.jsx)("img",{src:"/icons8-overview-48.png",alt:""}),(0,i.jsx)("h4",{children:"Summary"})]}),(0,i.jsxs)(c.ZP.Nav.Link,{className:"row settings",href:"/user-profile/editprofile",children:[(0,i.jsx)("img",{src:"/icons8-gear-32.png",alt:""}),(0,i.jsx)("h4",{children:"Settings"})]}),(0,i.jsxs)(c.ZP.Nav.Link,{className:"row log-out",onClick:e,children:[(0,i.jsx)("img",{src:"/icons8-logout-48.png",alt:""}),(0,i.jsx)("h4",{children:"Log out"})]})]})]})};r.Z=o},6046:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return f}});var n=s(5893),i=s(9008),a=s.n(i),t=s(7568),c=s(828),l=s(655),o=s(1348),d=s(1664),h=s.n(d),x=s(7294),u=s(196),j=s(6245),p=s(461),m=function(){var e=(0,c.Z)((0,p.Z)(),2),r=e[0];e[1];var s,i=(0,x.useState)(""),d=i[0],m=i[1],f=(0,x.useState)(""),g=f[0],v=f[1],w=(0,x.useState)(""),N=w[0],k=w[1],y=(0,x.useState)(""),Z=y[0],b=y[1],P=(0,x.useState)(""),_=P[0],E=P[1],S=(0,x.useState)(""),C=S[0],L=S[1],I=(0,x.useState)(""),O=I[0],A=I[1],G=(s=(0,t.Z)(function(){var e,s,n,i;return(0,l.__generator)(this,function(s){switch(s.label){case 0:return e=r.tgtoken,n=(0,j.Z)(e).id,[4,u.ZP.get("http://localhost:7070/api/user/".concat(n),{withCredentials:!1})];case 1:return i=s.sent(),console.log(i.data),m(i.data.first_name),v(i.data.username),k(i.data.email),b(i.data.phone),E(i.data.birth),L(i.data.gender),A(i.data.address),[2]}})}),function(){return s.apply(this,arguments)});return(0,x.useEffect)(function(){G()},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a(),{children:(0,n.jsx)("title",{children:"GAMX | PROFILE"})}),(0,n.jsx)("div",{className:"container",id:"user-profile",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"sidebar-profile col-md-2",children:(0,n.jsx)(o.Z,{})}),(0,n.jsxs)("div",{className:"container col-md-9",id:"overview",children:[(0,n.jsxs)("div",{className:"col-md-6",children:[(0,n.jsx)("h1",{children:"Overview"}),(0,n.jsx)("p",{className:"p-col-md-6",children:"Welcome back, name! Lets play the games"}),(0,n.jsxs)("div",{className:"box-img",children:[(0,n.jsx)("img",{src:"/gamebox.png",alt:""}),(0,n.jsx)("img",{className:"rps-img",src:"/rockpaperstrategy-1600.jpg",alt:""})]}),(0,n.jsxs)("div",{className:"featured-games",children:[(0,n.jsx)("h4",{children:"Featured Games"}),(0,n.jsx)("p",{children:"Games List"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)(h(),{href:"/",children:(0,n.jsx)("li",{children:"Tic tac toe"})}),(0,n.jsx)(h(),{href:"/",children:(0,n.jsx)("li",{children:"Matching images"})}),(0,n.jsx)(h(),{href:"/",children:(0,n.jsx)("li",{children:"Rock paper scissors"})})]})]})]}),(0,n.jsx)("div",{className:"col-md-2",children:(0,n.jsxs)("div",{className:"prf",children:[(0,n.jsxs)("div",{className:"sm-prf",children:[(0,n.jsx)("img",{src:"/icons8-avatar-64.png",alt:""}),(0,n.jsx)("h4",{children:d}),(0,n.jsx)("p",{children:"Member"})]}),(0,n.jsx)("hr",{}),(0,n.jsxs)("div",{className:"column details-prf",children:[(0,n.jsx)("p",{children:"Username"}),(0,n.jsx)("span",{children:g}),(0,n.jsx)("p",{children:"Email"}),(0,n.jsx)("span",{children:N}),(0,n.jsx)("p",{children:"Phone"}),(0,n.jsx)("span",{children:Z}),(0,n.jsx)("p",{children:"Date of Birth"}),(0,n.jsx)("span",{children:_}),(0,n.jsx)("p",{children:"Gender"}),(0,n.jsx)("span",{children:C}),(0,n.jsx)("p",{children:"Address"}),(0,n.jsx)("span",{children:O})]})]})})]})]})})]})},f=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a(),{children:(0,n.jsx)("title",{children:"GAMX | PROFILE"})}),(0,n.jsx)(m,{})]})}}},function(e){e.O(0,[664,183,196,809,688,774,888,179],function(){return e(e.s=6229)}),_N_E=e.O()}]);