"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9703],{9703:(m,a,i)=>{i.r(a),i.d(a,{ProfilePageModule:()=>v});var f=i(6895),d=i(433),n=i(4556),p=i(1407),h=i(5861),u=i(4948),e=i(8256),c=i(6568),g=i(5860);const P=[{path:"",children:[{path:"",component:(()=>{var o;class s{constructor(r,t){this.profile=r,this.fidjService=t,this.appVersion=u.i,this.errors=[],this.results=[],this.apiVersion="NA",this.apiUrl="NA"}get defaultEndpointUrl(){return this.profile.defaultUrlForAPI}get endpointUrl(){return this._endpoints&&this._endpoints.length>0?this._endpoints[0]:null}ngOnInit(){this.refresh()}refresh(){var r=this;return(0,h.Z)(function*(){r._endpoints=yield r.fidjService.getEndpoints()})()}}return(o=s).\u0275fac=function(r){return new(r||o)(e.Y36(c.H),e.Y36(g.DR))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-profile"]],decls:18,vars:5,consts:[["slot","start"],["src","assets/icon/favicon.ico",2,"height","30px","padding-left","20px"],["slot","fixed",3,"ionRefresh"],[2,"float","right","font-size","10px"]],template:function(r,t){1&r&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e._UZ(3,"ion-menu-button")(4,"ion-img",1),e.qZA(),e.TgZ(5,"ion-title"),e._uU(6," Profile "),e.qZA()()(),e.TgZ(7,"ion-content")(8,"ion-refresher",2),e.NdJ("ionRefresh",function(){return t.refresh()}),e._UZ(9,"ion-refresher-content"),e.qZA(),e.TgZ(10,"ion-card")(11,"ion-card-header")(12,"ion-card-title"),e._uU(13,"Profile"),e.qZA()(),e.TgZ(14,"ion-card-content"),e._uU(15),e.qZA()(),e.TgZ(16,"span",3),e._uU(17),e.qZA()()),2&r&&(e.xp6(15),e.AsE(" ",t.defaultEndpointUrl," / ",t.endpointUrl," "),e.xp6(2),e.lnq("version: ",t.appVersion," : ",t.apiVersion," (",t.apiUrl,")"))},dependencies:[n.Sm,n.PM,n.FN,n.Zi,n.Dq,n.W2,n.Gu,n.Xz,n.fG,n.nJ,n.Wo,n.wd,n.sr]}),s})()}]}];let v=(()=>{var o;class s{}return(o=s).\u0275fac=function(r){return new(r||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[f.ez,d.u5,n.Pc,p.Bz.forChild(P)]}),s})()}}]);