import{b as j,ba as $,c as R,ca as W,e as B,ea as C,f as G,g as V,ga as Z,h as z,ha as Y,ia as J,ja as Q,ka as X,la as q,ma as ee,na as te,oa as oe,qa as s,ra as O,sa as E}from"./chunk-QXMOZX6F.js";import{a as U}from"./chunk-TGZG4BG4.js";import{d as N}from"./chunk-VCD2VN45.js";import{$a as F,Ga as w,Ib as y,Va as b,Vb as c,X as H,Xa as L,Z as p,Za as D,Zb as u,ab as k,da as h,fa as m,g as M,ic as K,j as x,ja as I,p as A,xb as a,yb as d,zb as _}from"./chunk-SIKNO6IY.js";var re=(()=>{class t{goTo;static \u0275fac=function(r){return new(r||t)};static \u0275cmp=m({type:t,selectors:[["app-header"]],outputs:{goTo:"goTo"},standalone:!0,features:[u],decls:3,vars:0,consts:[[1,"container"],[1,"container__logo"],["src","./assets/logo_hotel.png","alt","logo"]],template:function(r,n){r&1&&(a(0,"div",0)(1,"div",1),_(2,"img",2),d()())},dependencies:[$,C],styles:[".container[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:space-around;max-height:100px}.container__logo[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{max-width:100px;transform:translateY(-15px)}"]})}return t})();var ne=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=m({type:t,selectors:[["app-root"]],standalone:!0,features:[u],decls:5,vars:0,consts:[[1,"main"],[1,"content"]],template:function(r,n){r&1&&(a(0,"section",0)(1,"header"),_(2,"app-header"),d(),a(3,"div",1),_(4,"router-outlet"),d()())},dependencies:[Z,re],styles:[".main[_ngcontent-%COMP%]{box-sizing:border-box;display:grid;grid-gap:0px 10px;grid-template-columns:repeat(12,1fr);grid-template-rows:100px 1fr;height:100vh;max-width:2000px;padding:0 40px;width:100vw}.main[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:grid;grid-column:1/13}.main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding-top:20px;grid-template-rows:0fr 1fr}.main[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}"]})}return t})();var ie=(()=>{class t{_userRol$=new x;set setUserRol(e){this._userRol$.next(e)}get getUserRol(){return this._userRol$}static \u0275fac=function(r){return new(r||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var se=(()=>{class t{USER_ROLS=oe;_userService=h(ie);_router=h(Y);onSetUserRol(e){this._userService.setUserRol=e,this._router.navigate([e])}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=m({type:t,selectors:[["app-home"]],standalone:!0,features:[u],decls:14,vars:0,consts:[["appearance","outlined",1,"home"],[1,"footer"],["mat-stroked-button","",3,"click"]],template:function(r,n){r&1&&(a(0,"mat-card",0)(1,"mat-card-header")(2,"h1"),c(3,"HOTEL"),d()(),a(4,"mat-card-content")(5,"p"),c(6," Bienvenido a Hotel, puedes crear hoteles y habitaciones, o administrar las reservas desde el rol administrativo. O puedes reservar tu hotel desde el rol de usuario. "),d(),a(7,"p"),c(8,"Selecciona una de las siguientes opciones para emular una sesi\xF3n:"),d()(),a(9,"mat-card-footer",1)(10,"button",2),y("click",function(){return n.onSetUserRol(n.USER_ROLS.CUSTOMER)}),c(11," Usuario "),d(),a(12,"button",2),y("click",function(){return n.onSetUserRol(n.USER_ROLS.ADMIN)}),c(13," Administrador "),d()()())},dependencies:[C,W,te,Q,X,ee,q],styles:[".home[_ngcontent-%COMP%]{align-items:center;display:flex;padding:20px}.home[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{display:flex;gap:20px;justify-content:space-around;width:100%;padding-top:20px}"]})}return t})();var ae=[{path:"",component:se},{path:U.ADMIN.PATH,loadChildren:()=>import("./chunk-ZUH572JC.js").then(t=>t.ADMIN_ROUTES)},{path:U.CUSTOMER.PATH,loadChildren:()=>import("./chunk-IRVVVTBB.js").then(t=>t.CUSTOMER_ROUTES)}];var Te="@",Me=(()=>{let o=class o{constructor(r,n,i,l,g){this.doc=r,this.delegate=n,this.zone=i,this.animationType=l,this.moduleImpl=g,this._rendererFactoryPromise=null,this.scheduler=h(L,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-2OVOOBLY.js").then(n=>n)).catch(n=>{throw new H(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:i})=>{this._engine=n(this.animationType,this.doc);let l=new i(this.delegate,this._engine,this.zone);return this.delegate=l,l})}createRenderer(r,n){let i=this.delegate.createRenderer(r,n);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let l=new P(i);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(g=>{let ve=g.createRenderer(r,n);l.use(ve),this.scheduler?.notify(9)}).catch(g=>{l.use(i)}),l}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};o.\u0275fac=function(n){b()},o.\u0275prov=p({token:o,factory:o.\u0275fac});let t=o;return t})(),P=class{constructor(o){this.delegate=o,this.replay=[],this.\u0275type=1}use(o){if(this.delegate=o,this.replay!==null){for(let e of this.replay)e(o);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(o,e){return this.delegate.createElement(o,e)}createComment(o){return this.delegate.createComment(o)}createText(o){return this.delegate.createText(o)}get destroyNode(){return this.delegate.destroyNode}appendChild(o,e){this.delegate.appendChild(o,e)}insertBefore(o,e,r,n){this.delegate.insertBefore(o,e,r,n)}removeChild(o,e,r){this.delegate.removeChild(o,e,r)}selectRootElement(o,e){return this.delegate.selectRootElement(o,e)}parentNode(o){return this.delegate.parentNode(o)}nextSibling(o){return this.delegate.nextSibling(o)}setAttribute(o,e,r,n){this.delegate.setAttribute(o,e,r,n)}removeAttribute(o,e,r){this.delegate.removeAttribute(o,e,r)}addClass(o,e){this.delegate.addClass(o,e)}removeClass(o,e){this.delegate.removeClass(o,e)}setStyle(o,e,r,n){this.delegate.setStyle(o,e,r,n)}removeStyle(o,e,r){this.delegate.removeStyle(o,e,r)}setProperty(o,e,r){this.shouldReplay(e)&&this.replay.push(n=>n.setProperty(o,e,r)),this.delegate.setProperty(o,e,r)}setValue(o,e){this.delegate.setValue(o,e)}listen(o,e,r){return this.shouldReplay(e)&&this.replay.push(n=>n.listen(o,e,r)),this.delegate.listen(o,e,r)}shouldReplay(o){return this.replay!==null&&o.startsWith(Te)}};function de(t="animations"){return F("NgAsyncAnimations"),I([{provide:D,useFactory:(o,e,r)=>new Me(o,e,r,t),deps:[N,V,k]},{provide:w,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var le={url:s.HOTELS,response:{hotels:[{id:1,name:"Hotel Fake",address:"calle fake 123",phone:"3211231313",active:!0},{id:2,name:"Hotel Falso",address:"123 #12 - 12",phone:"3123445887",active:!0},{id:3,name:"Simpsons Resort",address:"742 de Evergreen Terrace",phone:"3009085672",active:!1},{id:4,name:"Hotel Simpsons",address:"Avenida Siempreviva 742",phone:"3009085672",active:!0},{id:5,name:"Bikini Bottom",address:"Calle concha 124",phone:"3215554443",active:!1},{id:6,name:"Griffin Resort",address:"31 Spooner Street",phone:"3214478936",active:!0}]},method:"GET"},pe={url:s.HOTEL,response:null,method:"POST"},me={url:s.HOTEL,response:null,method:"PUT"},ce={url:s.HOTEL,response:{id:4,name:"Hotel Simpsons",address:"Avenida Siempreviva 742",phone:"3009085672",active:!0,rooms:[{id:1,allowed_guests:5,price:100,size:E.QUADRUPLE,tax:15,type:O.GRAN_SUITE,active:!0},{id:2,allowed_guests:4,price:80,size:E.DOUBLE,tax:12,type:O.SUITE,active:!1},{id:3,allowed_guests:2,price:60,size:E.INDIVIDUAL,tax:10,type:O.JUNIOR_SUITE,active:!0}]},method:"GET"},ue={url:s.HOTEL_ACTIVE,response:null,method:"PUT"};var he={url:s.ROOM,response:null,method:"POST"},_e={url:s.ROOM,response:null,method:"PUT"},fe={url:s.ROOM_ACTIVE,response:null,method:"PUT"};var v=function(t){return t.MALE="hombre",t.FEMALE="mujer",t.OTHER="otro",t}(v||{}),T=function(t){return t.CC="c\xE9dula de ciudadania",t.PASSPORT="pasaporte",t.CE="c\xE9dual de extanger\xEDa",t}(T||{});var Se={url:s.BOOKINGS,response:{bookings:[{id:1,hotel_id:4,hotel_name:"Hotel Simpsons",hotel_address:"Avenida Siempreviva 742",hotel_phone:"3009085672",hotel_active:!0,guest_id:8,guest_birthdate:new Date(22/10/1996),guest_name:"Faber Herrera",guest_gender:v.MALE,guest_document_type:T.CC,guest_document_number:"123123123",guest_email:"faberherrera@gmail.com",guest_phone:"3016616123",date_in:new Date(5/8/2024),date_out:new Date(15/8/2024)},{id:2,hotel_id:4,hotel_name:"Hotel Simpsons",hotel_address:"Avenida Siempreviva 742",hotel_phone:"3009085672",hotel_active:!0,guest_id:9,guest_birthdate:new Date(22/10/1996),guest_name:"Homero Simpson",guest_gender:v.MALE,guest_document_type:T.CC,guest_document_number:"123123123",guest_email:"homerjsimpson@gmail.com",guest_phone:"3016616123",date_in:new Date(5/8/2024),date_out:new Date(15/8/2024)}]},method:"GET"};var ge=[le,pe,me,ce,ue,he,_e,fe,Se];var S={production:!1,testServeWait:0,baseUrl:"https://apiurl.com/"};var Ce=(()=>{class t{request(e){let n=this._getMock(e);return n?n?.status&&n?.status!==200?new M(i=>{setTimeout(()=>{i.error(new R({status:n.status,statusText:"Mock error response",error:n.response,url:e.url})),i.complete()},S.testServeWait)}):new M(i=>{setTimeout(()=>{i.next(new j({status:200,body:n.response})),i.complete()},S.testServeWait)}):A(()=>new R({status:404,statusText:`The route was not found ${e.url}`,url:e.url}))}_getMock(e){return ge.find(r=>{let n=e.url,i=new RegExp(`(^${r.url}$)`,"g").test(n),l=!r?.method||r?.method===e.method;return i&&l})}static \u0275fac=function(r){return new(r||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ye=new Ce;function Re(){return!S.production}function Ue(t){return ye.request(t)}var Oe=(t,o)=>Re()?Ue(t):o(t);var Ee={providers:[K({eventCoalescing:!0}),J(ae),de(),B(G([Oe]))]};z(ne,Ee).catch(t=>console.error(t));
