(function(){"use strict";var e={3718:function(e,n,t){var i=t(9242),r=t(3396);const o={class:"app"},a={id:"header",ref:"header"},s=(0,r._)("div",{class:"header-view-center-image"},[(0,r._)("div",{class:"header-view-center-container"},[(0,r._)("h1",null,"Wo die Kreativität zu Hause ist"),(0,r._)("span",null,"Point Design, Grafiksedign, Gutes Design"),(0,r._)("button",{class:"btn"},"Mehr lesen")])],-1),l=[s],c={id:"motivation",ref:"motivation"},u=(0,r._)("div",{class:"motivation-frame"},[(0,r._)("div",{class:"motivation-frame-inner"},[(0,r._)("h4",null,"Meine Motivation"),(0,r._)("span",null,"Meine Arbeit ist meine Leidenschaft und ein positiver Antrieb für jeden Tag fpr Sie mich dazu an jeder neuen Herausforderung zu wachsen und so neue Ziele zu erreichen."),(0,r._)("button",{class:"btn"},"Mehr lesen")])],-1),f=[u],d={id:"termine",ref:"termine"},v=(0,r._)("div",{class:"termine-frame"},[(0,r._)("div",{class:"termine-frame-inner"},[(0,r._)("h4",null,"Termine"),(0,r._)("span",null,"Schneller, stressiger Alltag! Es ist erstaunlich, wie gerade die kleinen Dinge manchmal besonders viel Zeit in Anspruch nehmen. Was nicht zu .... "),(0,r._)("button",{class:"btn"},"Alle Termine")])],-1),m=[v],h=(0,r._)("footer",null,[(0,r._)("a",{href:"#impressum"},"Impressum"),(0,r._)("a",{href:"#impressum"},"Datenschutz")],-1);function _(e,n,t,i,s,u){const v=(0,r.up)("NavBar");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r.Wm)(v,{onId:u.scrollToElement},null,8,["onId"]),(0,r._)("section",a,l,512),(0,r._)("section",c,f,512),(0,r._)("section",d,m,512),h])}const p=e=>((0,r.dD)("data-v-5e368721"),e=e(),(0,r.Cn)(),e),b={class:"nav-bar-container"},g={class:"nav-toggle"},w=p((()=>(0,r._)("div",{class:"right"},[(0,r._)("a",{href:"#"},"Julia Zasada Fotografie & Design")],-1))),k={class:"left"},T={class:"nav-bar"},O=p((()=>(0,r._)("div",{class:"left"},[(0,r._)("a",{href:"#"},"Julia Zasada Fotografie & Design")],-1))),j={class:"right"},z=p((()=>(0,r._)("button",{class:"nav-item active"},"Home",-1))),D=p((()=>(0,r._)("button",{class:"btn"},"Jetzt Buchen",-1)));function y(e,n,t,i,o,a){const s=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)("div",b,[(0,r._)("div",g,[w,(0,r._)("div",k,[(0,r.Wm)(s,{icon:"fa-solid fa-bars"})])]),(0,r._)("nav",T,[O,(0,r._)("div",j,[z,(0,r._)("button",{class:"nav-item",onClick:n[0]||(n[0]=e=>a.scrollToElement(e)),id:"termine"},"Termine"),(0,r._)("button",{class:"nav-item",onClick:n[1]||(n[1]=e=>a.scrollToElement(e)),id:"kontakte"},"Kontakt"),(0,r._)("button",{class:"nav-item",onClick:n[2]||(n[2]=e=>a.scrollToElement(e)),id:"leistungen"},"Meine Leistungen"),D])])])}var E={methods:{scrollToElement(e){var n=e["target"].id;this.$emit("id",n)}}},M=t(89);const A=(0,M.Z)(E,[["render",y],["__scopeId","data-v-5e368721"]]);var C=A,I={name:"App",components:{NavBar:C},methods:{scrollToElement(e){console.log(e);const n=this.$refs[e];n&&n.scrollIntoView({behavior:"smooth"})}}};const Z=(0,M.Z)(I,[["render",_]]);var x=Z,G=t(3494),W=t(7749),B=t(8539);G.vI.add(B.xiG),(0,i.ri)(x).component("font-awesome-icon",W.GN).mount("#app")}},n={};function t(i){var r=n[i];if(void 0!==r)return r.exports;var o=n[i]={exports:{}};return e[i](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,i,r,o){if(!i){var a=1/0;for(u=0;u<e.length;u++){i=e[u][0],r=e[u][1],o=e[u][2];for(var s=!0,l=0;l<i.length;l++)(!1&o||a>=o)&&Object.keys(t.O).every((function(e){return t.O[e](i[l])}))?i.splice(l--,1):(s=!1,o<a&&(a=o));if(s){e.splice(u--,1);var c=r();void 0!==c&&(n=c)}}return n}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[i,r,o]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,i){var r,o,a=i[0],s=i[1],l=i[2],c=0;if(a.some((function(n){return 0!==e[n]}))){for(r in s)t.o(s,r)&&(t.m[r]=s[r]);if(l)var u=l(t)}for(n&&n(i);c<a.length;c++)o=a[c],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(u)},i=self["webpackChunkjz_photo"]=self["webpackChunkjz_photo"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(3718)}));i=t.O(i)})();
//# sourceMappingURL=app.00f175c3.js.map