(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[758],{6944:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user-profile/editprofile",function(){return n(8708)}])},1348:function(e,s,n){"use strict";var r=n(828),i=n(5893);n(7294);var t=n(1664),a=n.n(t),o=n(6688),c=n(461),l=function(){var e=function(){s("tgtoken"),s("googlelogin"),s("user-data"),console.log("cookie di delete"),window.location.href="/"},s=function(e){document.cookie=e+"=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"},n=(0,r.Z)((0,c.Z)(),3);return n[0],n[1],n[2],(0,i.jsxs)(o.ZP,{children:[(0,i.jsxs)(o.ZP.Header,{children:[(0,i.jsxs)(o.ZP.Brand,{className:"row logo-profile",children:[(0,i.jsx)(a(),{href:"/",children:(0,i.jsx)("img",{src:"/gaming-logo.png",alt:""})}),(0,i.jsx)(a(),{href:"/",children:(0,i.jsxs)("h2",{children:["GAM",(0,i.jsx)("span",{children:"X"})]})})]}),(0,i.jsx)("hr",{}),(0,i.jsx)("hr",{}),(0,i.jsx)("hr",{})]}),(0,i.jsxs)(o.ZP.Nav,{className:"column menu-profile",children:[(0,i.jsxs)(o.ZP.Nav.Link,{className:"row overview",href:"/user-profile",children:[(0,i.jsx)("img",{src:"/icons8-person-32.png",alt:""}),(0,i.jsx)("h4",{children:"Overview"})]}),(0,i.jsxs)(o.ZP.Nav.Link,{className:"row history",href:"/user-profile/history",children:[(0,i.jsx)("img",{src:"/icons8-history-32.png",alt:""}),(0,i.jsx)("h4",{children:"History"})]}),(0,i.jsxs)(o.ZP.Nav.Link,{className:"row summary",href:"/user-profile/summary",children:[(0,i.jsx)("img",{src:"/icons8-overview-48.png",alt:""}),(0,i.jsx)("h4",{children:"Summary"})]}),(0,i.jsxs)(o.ZP.Nav.Link,{className:"row settings",href:"/user-profile/editprofile",children:[(0,i.jsx)("img",{src:"/icons8-gear-32.png",alt:""}),(0,i.jsx)("h4",{children:"Settings"})]}),(0,i.jsxs)(o.ZP.Nav.Link,{className:"row log-out",onClick:e,children:[(0,i.jsx)("img",{src:"/icons8-logout-48.png",alt:""}),(0,i.jsx)("h4",{children:"Log out"})]})]})]})};s.Z=l},8708:function(e,s,n){"use strict";n.r(s);var r=n(7568),i=n(655),t=n(5893),a=n(1348),o=n(9008),c=n.n(o);n(1664);var l=n(7294),u=n(9417),d=n(9603),f=/^[A-z][A-z0-9-_]{2,23}$/,h=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/,m=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,p=/^\d{11,13}$/,x=/^[a-zA-Z0-9\s,.'-]{3,}$/,j=function(){var e=(0,l.useRef)(),s=(0,l.useRef)(),n=(0,l.useState)(""),o=n[0],j=n[1],v=(0,l.useState)(!1),N=v[0],g=v[1],w=(0,l.useState)(!1),b=w[0],S=w[1],y=(0,l.useState)(""),G=y[0],C=y[1],Z=(0,l.useState)(!1),_=Z[0],E=Z[1],F=(0,l.useState)(!1),P=F[0],k=F[1],L=(0,l.useState)(""),q=L[0],B=L[1],A=(0,l.useState)(!1),z=A[0],T=A[1],M=(0,l.useState)(!1),O=M[0],$=M[1],R=(0,l.useState)(""),U=R[0],X=R[1],D=(0,l.useState)(!1),J=(D[0],D[1]),H=(0,l.useState)(!1);H[0],H[1];var I=(0,l.useState)(""),K=I[0],Q=I[1],V=(0,l.useState)(!1),W=(V[0],V[1]),Y=(0,l.useState)(!1);Y[0],Y[1];var ee,es=(0,l.useState)(""),en=es[0],er=es[1],ei=(0,l.useState)(!1),et=ei[0],ea=ei[1],eo=(0,l.useState)(!1),ec=eo[0],el=eo[1],eu=(0,l.useState)(""),ed=eu[0],ef=eu[1],eh=(0,l.useState)(!1),em=eh[0],ep=eh[1],ex=(0,l.useState)(!1),ej=ex[0],ev=ex[1],eN=(0,l.useState)(""),eg=eN[0],ew=eN[1],eb=(0,l.useState)(!1),eS=eb[0],ey=eb[1],eG=(0,l.useState)(!1),eC=eG[0],eZ=eG[1],e_=(0,l.useState)(""),eE=e_[0],eF=e_[1],eP=(0,l.useState)(!1),ek=(eP[0],eP[1]),eL=(0,l.useState)(""),eq=eL[0],eB=eL[1];(0,l.useEffect)(function(){e.current.focus()},[]),(0,l.useEffect)(function(){ea(f.test(en)),g(f.test(o)),E(f.test(G)),T(m.test(q)),W(p.test(K)),J(x.test(U))},[en,o,G,q,K,U]),(0,l.useEffect)(function(){ep(h.test(ed)),ey(ed===eg)},[ed,eg]),(0,l.useEffect)(function(){eF("")},[en,ed,eg,o,G,K,q,U,eq]);var eA=(ee=(0,r.Z)(function(e){var n,r,t,a,c;return(0,i.__generator)(this,function(i){switch(i.label){case 0:e.preventDefault(),n=document.querySelector("#file").files,(r=new FormData).append("fileData",getFiles[0]),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,axios.post("https://traditionalgame.herokuapp.com/api/user",JSON.stringify({first_name:o,last_name:G,username:en,email:q,password:ed,phone:K,address:U,avatar:n,typeUser:"user"}),{headers:{"Content-Type":"application/json"},withCredentials:!1},{data:r})];case 2:return t=i.sent(),console.log(null==t?void 0:t.data),console.log(null==t?void 0:t.accessToken),console.log(JSON.stringify(t)),ek(!0),er(user.username),ef(user.password),ew(user.matchPwd),j(user.firstname),C(user.lastname),B(user.email),Q(user.phone),X(user.address),eB(""),[3,4];case 3:return(null==(a=i.sent())?void 0:a.response)?(null===(c=a.response)||void 0===c?void 0:c.status)===409?eF("Username Taken"):eF("Registration Failed"):eF("No Server Response"),s.current.focus(),[3,4];case 4:return[2]}})}),function(e){return ee.apply(this,arguments)});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c(),{children:(0,t.jsx)("title",{children:"GAMX | PROFILE"})}),(0,t.jsx)("div",{className:"container",id:"user-profile",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"sidebar-profile col-md-2",children:(0,t.jsx)(a.Z,{})}),(0,t.jsxs)("div",{className:"container col-md-9",id:"overview",children:[(0,t.jsx)("div",{className:"col-md-6",children:(0,t.jsxs)("div",{className:"prf",children:[(0,t.jsxs)("div",{className:"sm-prf",children:[(0,t.jsx)("img",{src:"/icons8-avatar-64.png",alt:""}),(0,t.jsx)("h4",{}),(0,t.jsx)("p",{children:"Member"})]}),(0,t.jsx)("hr",{}),(0,t.jsx)("div",{className:"column details-prf",children:(0,t.jsxs)("section",{className:"sections",children:[(0,t.jsx)("p",{ref:s,className:eE?"errmsg":"offscreen","aria-live":"assertive",children:eE}),(0,t.jsxs)("form",{id:"formedit",className:"forms",onSubmit:eA,children:[(0,t.jsxs)("label",{className:"labeledit",htmlFor:"username",children:[(0,t.jsx)("p",{children:"Username:"}),(0,t.jsx)(d.G,{icon:u.LEp,className:et?"valid":"hide"}),(0,t.jsx)(d.G,{icon:u.NBC,className:et||!en?"hide":"invalid"})]}),(0,t.jsx)("input",{type:"text",id:"username",ref:e,autoComplete:"off",onChange:function(e){return er(e.target.value)},value:en,required:!0,"aria-invalid":et?"false":"true","aria-describedby":"uidnote",onFocus:function(){return el(!0)},onBlur:function(){return el(!1)}}),(0,t.jsxs)("p",{id:"note",className:ec&&en&&!et?"instructions":"offscreen",children:[(0,t.jsx)(d.G,{icon:u.sqG}),"4 to 24 characters.",(0,t.jsx)("br",{}),"Must begin with a letter.",(0,t.jsx)("br",{}),"Letters, numbers, underscores, hyphens allowed."]}),(0,t.jsxs)("label",{htmlFor:"firstname",children:[(0,t.jsx)("p",{children:"Firstname:"}),(0,t.jsx)(d.G,{icon:u.LEp,className:N?"valid":"hide"}),(0,t.jsx)(d.G,{icon:u.NBC,className:N||!o?"hide":"invalid"})]}),(0,t.jsx)("input",{type:"text",id:"firstname",ref:e,autoComplete:"off",onChange:function(e){return j(e.target.value)},value:o,required:!0,"aria-invalid":N?"false":"true","aria-describedby":"fnnote",onFocus:function(){return S(!0)},onBlur:function(){return S(!1)}}),(0,t.jsxs)("p",{id:"note",className:b&&o&&!N?"instructions":"offscreen",children:[(0,t.jsx)(d.G,{icon:u.sqG}),"3 to 10 characters.",(0,t.jsx)("br",{})]}),(0,t.jsxs)("label",{htmlFor:"lastname",children:[(0,t.jsx)("p",{children:"Lastname:"}),(0,t.jsx)(d.G,{icon:u.LEp,className:_?"valid":"hide"}),(0,t.jsx)(d.G,{icon:u.NBC,className:_||!G?"hide":"invalid"})]}),(0,t.jsx)("input",{type:"text",id:"lastname",ref:e,autoComplete:"off",onChange:function(e){return C(e.target.value)},value:G,required:!0,"aria-invalid":G?"false":"true","aria-describedby":"lnnote",onFocus:function(){return k(!0)},onBlur:function(){return k(!1)}}),(0,t.jsxs)("p",{id:"note",className:P&&G&&!_?"instructions":"offscreen",children:[(0,t.jsx)(d.G,{icon:u.sqG}),"3 to 10 characters.",(0,t.jsx)("br",{})]}),(0,t.jsxs)("label",{htmlFor:"email",children:[(0,t.jsx)("p",{children:"Email:"}),(0,t.jsx)(d.G,{icon:u.LEp,className:z?"valid":"hide"}),(0,t.jsx)(d.G,{icon:u.NBC,className:z||!q?"hide":"invalid"})]}),(0,t.jsx)("input",{type:"text",id:"email",ref:e,autoComplete:"off",onChange:function(e){return B(e.target.value)},value:q,required:!0,"aria-invalid":z?"false":"true","aria-describedby":"emailnote",onFocus:function(){return $(!0)},onBlur:function(){return $(!1)}}),(0,t.jsxs)("p",{id:"note",className:O&&q&&!z?"instructions":"offscreen",children:[(0,t.jsx)(d.G,{icon:u.sqG}),"Email is invalid",(0,t.jsx)("br",{})]}),(0,t.jsxs)("label",{htmlFor:"password",children:[(0,t.jsx)("p",{children:"Password:"}),(0,t.jsx)(d.G,{icon:u.LEp,className:em?"valid":"hide"}),(0,t.jsx)(d.G,{icon:u.NBC,className:em||!ed?"hide":"invalid"})]}),(0,t.jsx)("input",{type:"password",id:"password",onChange:function(e){return ef(e.target.value)},value:ed,required:!0,"aria-invalid":em?"false":"true","aria-describedby":"pwdnote",onFocus:function(){return ev(!0)},onBlur:function(){return ev(!1)}}),(0,t.jsxs)("p",{id:"note",className:ej&&!em?"instructions":"offscreen",children:[(0,t.jsx)(d.G,{icon:u.sqG}),"8 to 24 characters. Must include uppercase and lowercase letters, a number and a special character."]}),(0,t.jsxs)("label",{htmlFor:"confirm_pwd",children:[(0,t.jsx)("p",{children:"Confirm Password:"}),(0,t.jsx)(d.G,{icon:u.LEp,className:eS&&eg?"valid":"hide"}),(0,t.jsx)(d.G,{icon:u.NBC,className:eS||!eg?"hide":"invalid"})]}),(0,t.jsx)("input",{type:"password",id:"confirm_pwd",onChange:function(e){return ew(e.target.value)},value:eg,required:!0,"aria-invalid":eS?"false":"true","aria-describedby":"confirmnote",onFocus:function(){return eZ(!0)},onBlur:function(){return eZ(!1)}}),(0,t.jsxs)("p",{id:"note",className:eC&&!eS?"instructions":"offscreen",children:[(0,t.jsx)(d.G,{icon:u.sqG}),"Must match the first password input field."]}),(0,t.jsx)("input",{type:"file",accept:"image/*",id:"file",onChange:eB}),(0,t.jsx)("button",{className:"btn update",disabled:!et||!em||!eS,children:"Update Profile"})]})]})})]})}),(0,t.jsx)("div",{className:"col-md-2"})]})]})})]})};s.default=j},7568:function(e,s,n){"use strict";function r(e,s,n,r,i,t,a){try{var o=e[t](a),c=o.value}catch(l){n(l);return}o.done?s(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var s=this,n=arguments;return new Promise(function(i,t){var a=e.apply(s,n);function o(e){r(a,i,t,o,c,"next",e)}function c(e){r(a,i,t,o,c,"throw",e)}o(void 0)})}}n.d(s,{Z:function(){return i}})}},function(e){e.O(0,[976,664,809,688,603,774,888,179],function(){return e(e.s=6944)}),_N_E=e.O()}]);