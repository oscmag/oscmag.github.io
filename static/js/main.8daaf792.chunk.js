(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n.p+"static/media/menu-icon.d87f95fd.svg"},23:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABfAAAAXwBsrqMZwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADXSURBVEiJ7ZTRCoJAEEWXviAxw7QPLPvTEiSFUr+lOj000GQio1b04AUfXGfOYWV2nZvylwE2QNCjfglsrMU7HimApRFeSE9iEcyBgzRUQNxRGwO11O6BuXUXWlK3SRrwgxmuAB6Qtkka8LQ3XIEWwFFLgHUD7g2CK0kInAV4kgdZC0fBlSQAcp7JrWM8Mzpuzrmrer/I2vgAPpC1/KIM8MfCI6BUo+g1pqsEVh+Dq2+eOiclEI2Fv835YInAK2nsPP68nnibBEikYchlt7Xu4nvX9ZSf5w7m4cN48Oln+gAAAABJRU5ErkJggg=="},26:function(e,t,n){e.exports=n(45)},31:function(e,t,n){},32:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(21),i=n.n(c),u=(n(31),n(6)),o=n(7),s=n(9),l=n(8),f=n(10),d=a.a.createContext(),m=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).componentDidMount=function(){n.updateWindowWidth(),window.addEventListener("resize",n.updateWindowWidth)},n.componentWillUnmount=function(){window.removeEventListener("resize",n.updateWindowWidth)},n.updateWindowWidth=function(){var e=window.innerWidth<=615;n.setState({isMobile:e})},n.state={isMobile:!1},n}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement(d.Provider,{value:this.state},this.props.children)}}]),t}(r.Component),p=(d.Consumer,n(13)),b=n(11),v=(n(32),n(22)),h=n.n(v),A=n(23),k=n.n(A),g=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).componentDidMount=function(){},n.toggleMenu=function(){n.setState({menuOpen:!n.state.menuOpen})},n.state={menuOpen:!1},n}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.context.isMobile,t=this.state.menuOpen;return a.a.createElement("div",{className:"navbar-container"},a.a.createElement("div",{className:"navbar-content ".concat(t&&"menu-open")},a.a.createElement("div",{className:"mobile-navbar-layout"},a.a.createElement("div",{className:"navbar-logo"},a.a.createElement(p.b,{to:"/"},"Playground")),e&&a.a.createElement("img",{id:"menu-icon",onClick:this.toggleMenu,src:t?k.a:h.a,alt:"menu-icon"})),(!e||t)&&a.a.createElement("div",{className:"navbar-links"},a.a.createElement(p.b,{to:"/sudoku",onClick:this.toggleMenu},"Sudoku"))))}}]),t}(r.Component);g.contextType=d;var x=g,w=n(5),O=n.n(w),E=n(14),N=(n(43),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).componentDidMount=function(){n.createGrid()},n.createGrid=function(){for(var e=[],t=0;t<9;t++)e.push(["","","","","","","","",""]);n.setState({grid:e})},n.fillGrid=Object(E.a)(O.a.mark(function e(){var t,r,a,c,i,u;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t=setInterval(function(){n.setState({duration:n.state.duration+1})},1e3),r=[],a=0;a<9;a++)r.push(["","","","","","","","",""]);return c=Date.now(),e.next=6,n.fillNextCell(r);case 6:clearInterval(t),i=Date.now(),u=(i-c)/1e3,console.log("processing time:",u+"s");case 10:case"end":return e.stop()}},e)})),n.fillNextCell=function(){var e=Object(E.a)(O.a.mark(function e(t){var r,a,c,i,u,o,s,l,f=arguments;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=f.length>1&&void 0!==f[1]?f[1]:0,a=f.length>2&&void 0!==f[2]?f[2]:0,c=f.length>3&&void 0!==f[3]?f[3]:[1,2,3,4,5,6,7,8,9],n.setState({counter:n.state.counter+1}),"number"!==typeof(i=JSON.parse(JSON.stringify(t)))[r][a]){e.next=9;break}if(c.splice(c.indexOf(i[r][a]),1),!(c.length<1)){e.next=9;break}return e.abrupt("return","none");case 9:return e.next=11,n.getAvailableNum(i,r,a,c);case 11:if("none"!==(u=e.sent)){e.next=14;break}return e.abrupt("return","none");case 14:return t[r][a]=u,i=JSON.parse(JSON.stringify(t)),e.next=18,setTimeout(function(){n.setState({grid:i})},100*n.state.counter);case 18:if(s=r,!((o=a+1)>8)){e.next=25;break}if(8!==r){e.next=23;break}return e.abrupt("return");case 23:s++,o=0;case 25:return e.next=27,n.fillNextCell(i,s,o);case 27:if("none"!==(l=e.sent)){e.next=32;break}return e.abrupt("return","redo");case 32:if("redo"!==l){e.next=36;break}return e.next=35,n.fillNextCell(i,r,a,c);case 35:return e.abrupt("return",e.sent);case 36:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.getAvailableNum=function(){var e=Object(E.a)(O.a.mark(function e(t,r,a,c){var i,u,o;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i=Math.floor(Math.random()*c.length),u=c[i],0!==r||0!==a){e.next=4;break}return e.abrupt("return",u);case 4:return e.next=7,n.checkRow(t,r,a,u);case 7:if(e.t1=e.sent,!e.t1){e.next=12;break}return e.next=11,n.checkColumn(t,r,a,u);case 11:e.t1=e.sent;case 12:if(e.t0=e.t1,!e.t0){e.next=17;break}return e.next=16,n.checkBox(t,r,a,u);case 16:e.t0=e.sent;case 17:if(o=e.t0,console.log(r,a,o,u),!o){e.next=23;break}return e.abrupt("return",u);case 23:if(c.splice(c.indexOf(u),1),!(c.length<1)){e.next=26;break}return e.abrupt("return","none");case 26:return e.next=28,n.getAvailableNum(t,r,a,c);case 28:return e.abrupt("return",e.sent);case 29:case"end":return e.stop()}},e)}));return function(t,n,r,a){return e.apply(this,arguments)}}(),n.checkRow=function(e,t,n,r){for(var a=0;a<9;a++)if(e[t][a]===r)return!1;return!0},n.checkColumn=function(e,t,n,r){for(var a=0;a<9;a++)if(e[a][n]===r)return!1;return!0},n.checkBox=function(){var e=Object(E.a)(O.a.mark(function e(t,r,a,c){var i,u,o;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:i=3;case 1:if(!(i<10)){e.next=20;break}if(!(r<i)){e.next=17;break}u=3;case 4:if(!(u<10)){e.next=17;break}return e.next=7,n.innerFunc(t,r,a,c,i,u);case 7:o=e.sent,e.t0=o,e.next="true"===e.t0?11:"false"===e.t0?12:13;break;case 11:return e.abrupt("return",!0);case 12:return e.abrupt("return",!1);case 13:return e.abrupt("continue",14);case 14:u+=3,e.next=4;break;case 17:i+=3,e.next=1;break;case 20:return e.abrupt("return",!1);case 21:case"end":return e.stop()}},e)}));return function(t,n,r,a){return e.apply(this,arguments)}}(),n.innerFunc=function(e,t,n,r,a,c){if(n<c){for(var i=a-3;i<a;i++)for(var u=c-3;u<c;u++)if(e[i][u]===r)return"false";return"true"}},n.checkSquare=function(e,t){var n="";return e<3?(n+="T",n+=t<3?"L":t<6?"M":"R"):e<6?(n+="M",n+=t<3?"L":t<6?"M":"R"):(n+="B",n+=t<3?"L":t<6?"M":"R"),n},n.state={grid:[],counter:0,duration:0},n}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.grid;e.duration;return a.a.createElement("div",{className:"wrapper"},a.a.createElement("div",{className:"sudoku-menu"},a.a.createElement("div",{className:"s-button",onClick:this.fillGrid},"Fill Grid"),a.a.createElement("div",{className:"s-button",onClick:this.createGrid},"Empty Grid")),a.a.createElement("div",{className:"grid"},t&&t.map(function(e,t){return e.map(function(e,t){return a.a.createElement("div",{className:"cell",key:t},e)})})))}}]),t}(r.Component)),j=(n(44),function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement(p.a,null,a.a.createElement("div",{className:"App"},a.a.createElement(m,null,a.a.createElement(x,null),a.a.createElement("div",{className:"app-body"},a.a.createElement(b.a,{exact:!0,path:"/",component:N}),a.a.createElement(b.a,{exact:!0,path:"/Sudoku",component:N})))))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.8daaf792.chunk.js.map