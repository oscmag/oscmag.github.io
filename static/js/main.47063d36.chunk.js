(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},250:function(e,t,n){},251:function(e,t,n){},252:function(e,t,n){},253:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAEX0lEQVR4nO3dz4ocVRzF8VPHILOQIBJEMOgmkSiuxBdIjDtxEXSTjeBK8wAhb+AjqEs3LtSNguuQRRYGXA3kz2SQwAQTBf8km2Ey8ZaL7uikp//XvVXV/ft+oBnoqa6qqXPq1q2eZkYCAAAAAAAAAAAAADRke8P2BdtXbD+wXdves71p+zPbr3S9jyjE9hnbO8PQJz12bV+03fXuIifb523vzwj/4ONzSrAmlgifEqyLBuFTglWXIXxKsKoyhl+8BM8UWWtgts9L+krSkYyrfVvSS1VV/VjXdcbVUoCshmfpF5JeLbD6IiWgABnVda2qqr6T9I6klwtsInsJKEBmdV3vVVX1jVaoBGhgOOG7OOb5o7Z/yjgR5O6gb0Zm+5fGfJ8SrKsJt3pdlODQ6IPCptzn79g+Omb5kiXYdYPfIjJ+LGjKff5dSadTSg9HXzN87l1J1wrs0oakTwusF6NmnPkn5nh9qZFgs42fP7RFw7d9zPbHY54vUYK9do5CUEuGv+kWJ4btHImAGobf1t3Bg3aORjCZwm+jBFfaOSKBZA6/dAkutHNUgigUfqkS7NjeaOfIBFA4/Nwl2Ld9pp0jE0BL4ecqwb4Hb0ohh5bDb1oCws+po/CXLQHh59Rx+IuWgPBz6kn485aA8HPqWfizSnCV8DPqafjTStDOgYmg5+FPLEEpoT4V7Nkf5tgeWf6YpMuS3mxnD/9ztqqq3bqur5beUJixZYXCl6THw/1CDisy7D95MNvPifADI/zACD8wwg+M8AMj/MAIPzDCD4zwAyP8wAg/MMIPjPADI/zACD8wwg+M8AMj/MAIPzDCD4zwAyP8wAg/MMIPjPADI/zACD8wwg+M8AMj/MAIPzDCD4zwAyP8wAg/MMIPzPa5CeH/Qfj9U+LPxF2TdGfM889LOvvUxrv/U2wfpZS+7mDb6832cdu3x5xx/9j+ZLgMZ/66sP2C7WdHnptWgkuEv0Zsf2D7+wVK0NWD8EfkmgOckvS+pG8PliCldFfSaUnbk17YIq75Y+QqwMnh176WgPAnyDkCPNG3EhB+abb/GnO97cOcgGt+abZfnBJAlyUg/DnkuAScmvK9ri4HDPtzylGAQ2/vjmi7BIS/gBwFeH2OZdoqAeEvKEcBXptzudIlIPwu2L6x4OSsxMSQCV8XbB+xvbdEYDlLQPhdsX2iwVmbowSE3yXb7zW8V29SAsLPoOkkcN4J4CTLTgyZ8PWB7S8bjgDLjASc+X1h+3KmAsxbAsLvE9v3MhZgVgkIv088+L/2OcOfVYJzXf2s66xa9oW235L0c8Z9OegHSR+mlB4VWj+GmtwFvJFtLw47dHeAMkb/lfoiTs5eZCF/S9qSdFPS7eHX5yT9mXk7OKBJAaZ9DmCSR5J+0SDoLUk3NLjfv5lS+r3BvmBJTQow7U2g+xqcwVuSbun/M/tOSulxg20isyaTwN8k/aqnh+3rkrZTSg/z7B4AAAAAAAAAAAAAYDn/Apkk0LP9ZS1NAAAAAElFTkSuQmCC"},254:function(e,t,n){},258:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(93),c=n.n(i),u=(n(104),n(8)),o=n(9),s=n(11),l=n(10),b=n(12),d=a.a.createContext(),m=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).componentDidMount=function(){n.updateWindowWidth(),window.addEventListener("resize",n.updateWindowWidth)},n.componentWillUnmount=function(){window.removeEventListener("resize",n.updateWindowWidth)},n.updateWindowWidth=function(){var e=window.innerWidth<=615;n.setState({isMobile:e})},n.state={isMobile:!1},n}return Object(b.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement(d.Provider,{value:this.state},this.props.children)}}]),t}(r.Component),f=(d.Consumer,n(15)),v=(n(105),n(94)),A=n.n(v),g=n(95),p=n.n(g),k=n(40),h=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).componentDidMount=function(){},n.toggleMenu=function(){n.setState({menuOpen:!n.state.menuOpen})},n.state={menuOpen:!1},n}return Object(b.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.context.isMobile,t=this.state.menuOpen;return a.a.createElement("div",{className:"navbar-container"},a.a.createElement("div",{className:"navbar-content ".concat(t&&"menu-open")},a.a.createElement("div",{className:"mobile-navbar-layout"},a.a.createElement("div",{className:"navbar-logo"},a.a.createElement(k.a,{to:"/"},"Playground")),e&&a.a.createElement("img",{id:"menu-icon",onClick:this.toggleMenu,src:t?p.a:A.a,alt:"menu-icon"})),(!e||t)&&a.a.createElement("div",{className:"navbar-links"},a.a.createElement(k.a,{to:"/sudoku",onClick:this.toggleMenu},"Sudoku"))))}}]),t}(r.Component);h.contextType=d;var w=h,S=n(3),x=n.n(S),O=n(7),E=n(14),N=n(218).default,j=n(224).default,C=Object(E.DragDropContext)(N(j)),D=(n(250),"card,"),P=(n(251),{drop:function(e){e.handleClick(e.number,e.i,e.j)},canDrop:function(e){return t=e.grid,n=e.i,r=e.j,"number"!==typeof t[n][r];var t,n,r}});var y=Object(E.DropTarget)(D,P,function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver(),canDrop:t.canDrop()}})(function(e){var t=e.grid,n=e.cell,r=e.selectedValue,i=e.selectedSquare,c=e.invalidNumber,u=e.handleClick,o=e.i,s=e.j,l=e.connectDropTarget;return e.isOver,l(a.a.createElement("div",{className:"\n        cell\n        ".concat(t[o][s]===r?" selected-value":"","\n        ").concat(c===t[o][s]&&void 0!==c?"invalid-number":"","\n        ").concat(i.row===o&&i.column===s?" selected-square":"","\n      "),onClick:function(){return u(t[o][s],o,s)},key:s},n))});n(252);var B=Object(E.DragSource)(D,{beginDrag:function(e){var t=e.number,n=e.numberGrabbed;return(0,e.handleNumPick)(t),{number:t,numberGrabbed:n}}},function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}})(function(e){var t=e.connectDragSource,n=e.isDragging,r=e.number,i=e.numberGrabbed,c=e.handleNumPick;return t(a.a.createElement("div",{className:"cell ".concat(i===r?"grabbed-number":""," ").concat(n?"is-dragging":""),onClick:function(){return c(r)},key:r},r))}),M=function(e,t,n,r){for(var a=0;a<9;a++)if(e[t][a]===r)return!1;return!0},V=function(e,t,n,r){for(var a=0;a<9;a++)if(e[a][n]===r)return!1;return!0},z=function(){var e=Object(O.a)(x.a.mark(function e(t,n,r,a){var i,c,u;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:i=3;case 1:if(!(i<10)){e.next=20;break}if(!(n<i)){e.next=17;break}c=3;case 4:if(!(c<10)){e.next=17;break}return e.next=7,G(t,n,r,a,i,c);case 7:u=e.sent,e.t0=u,e.next="true"===e.t0?11:"false"===e.t0?12:13;break;case 11:return e.abrupt("return",!0);case 12:return e.abrupt("return",!1);case 13:return e.abrupt("continue",14);case 14:c+=3,e.next=4;break;case 17:i+=3,e.next=1;break;case 20:return e.abrupt("return",!1);case 21:case"end":return e.stop()}},e)}));return function(t,n,r,a){return e.apply(this,arguments)}}(),G=function(e,t,n,r,a,i){if(n<i){for(var c=a-3;c<a;c++)for(var u=i-3;u<i;u++)if(e[c][u]===r)return"false";return"true"}},I={isAvailable:function(e,t,n,r){return M(e,t,n,r)&&V(e,t,n,r)&&z(e,t,n,r)},checkSquare:function(e,t){var n="";return e<3?(n+="T",n+=t<3?"L":t<6?"M":"R"):e<6?(n+="M",n+=t<3?"L":t<6?"M":"R"):(n+="B",n+=t<3?"L":t<6?"M":"R"),n}},L=C(function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).componentWillMount=function(){n.createGrid()},n.createGrid=function(){for(var e=[],t=0;t<9;t++)e.push(["","","","","","","","",""]);n.setState({grid:e,scribbleGrid:Array.from(e),selectedValue:void 0,processingTime:0})},n.fillGrid=Object(O.a)(x.a.mark(function e(){var t,r,a,i,c,u,o=arguments;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t=!(o.length>0&&void 0!==o[0])||o[0],r=[],a=0;a<9;a++)r.push(["","","","","","","","",""]);return i=Date.now(),e.next=6,n.fillNextCell(r,0,0,[1,2,3,4,5,6,7,8,9],t);case 6:c=Date.now(),u=(c-i)/1e3,n.setState({processingTime:u}),n.setState({counter:0});case 10:case"end":return e.stop()}},e)})),n.fillNextCell=function(){var e=Object(O.a)(x.a.mark(function e(t){var r,a,i,c,u,o,s,l,b,d=arguments;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=d.length>1&&void 0!==d[1]?d[1]:0,a=d.length>2&&void 0!==d[2]?d[2]:0,i=d.length>3&&void 0!==d[3]?d[3]:[1,2,3,4,5,6,7,8,9],c=d.length>4?d[4]:void 0,n.setState({counter:n.state.counter+1}),"number"!==typeof(u=JSON.parse(JSON.stringify(t)))[r][a]){e.next=10;break}if(i.splice(i.indexOf(u[r][a]),1),!(i.length<1)){e.next=10;break}return e.abrupt("return","none");case 10:return e.next=12,n.getAvailableNum(u,r,a,i);case 12:if("none"!==(o=e.sent)){e.next=15;break}return e.abrupt("return","none");case 15:if(t[r][a]=o,u=JSON.parse(JSON.stringify(t)),!c){e.next=22;break}return e.next=20,setTimeout(function(){n.setState({grid:u})},100*n.state.counter);case 20:e.next=23;break;case 22:n.setState({grid:u});case 23:if(l=r,!((s=a+1)>8)){e.next=30;break}if(8!==r){e.next=28;break}return e.abrupt("return");case 28:l++,s=0;case 30:return e.next=32,n.fillNextCell(u,l,s,[1,2,3,4,5,6,7,8,9],c);case 32:if("none"!==(b=e.sent)){e.next=37;break}return e.abrupt("return","redo");case 37:if("redo"!==b){e.next=41;break}return e.next=40,n.fillNextCell(u,r,a,i,c);case 40:return e.abrupt("return",e.sent);case 41:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.getAvailableNum=function(){var e=Object(O.a)(x.a.mark(function e(t,r,a,i){var c,u,o;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(c=Math.floor(Math.random()*i.length),u=i[c],0!==r||0!==a){e.next=4;break}return e.abrupt("return",u);case 4:return e.next=7,I.isAvailable(t,r,a,u);case 7:if(o=e.sent,console.log(r,a,o,u),!o){e.next=13;break}return e.abrupt("return",u);case 13:if(i.splice(i.indexOf(u),1),!(i.length<1)){e.next=16;break}return e.abrupt("return","none");case 16:return e.next=18,n.getAvailableNum(t,r,a,i);case 18:return e.abrupt("return",e.sent);case 19:case"end":return e.stop()}},e)}));return function(t,n,r,a){return e.apply(this,arguments)}}(),n.createPuzzle=Object(O.a)(x.a.mark(function e(){return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.fillGrid(!1);case 2:n.removeNumbers();case 3:case"end":return e.stop()}},e)})),n.removeNumbers=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:25,t=Array.from(n.state.grid),r=[],a=function(){var e=Math.floor(9*Math.random()),t=Math.floor(9*Math.random());r.find(function(n){return n.x===e&&n.y===t})||r.push({x:e,y:t})};r.length<e;)a();for(var i=r,c=0;c<i.length;c++){var u=i[c];t[u.x][u.y]=void 0}n.setState({grid:t})},n.handleClick=function(){var e=Object(O.a)(x.a.mark(function e(t,r,a){var i,c,u,o,s,l,b;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("11111",t,r,a),i=n.state,c=i.numberGrabbed,u=i.grid,o=i.selectedValue,s=i.selectedSquare,n.setState({selectedSquare:s.row===r&&s.column===a?{}:{row:r,column:a}}),void 0!==t&&""!==t||void 0===c){e.next=10;break}return e.next=6,I.isAvailable(u,r,a,c);case 6:e.sent?((l=u.slice())[r][a]=c,n.setState({grid:l,numberGrabbed:void 0})):n.setState({invalidNumber:c,numberGrabbed:void 0}),e.next=12;break;case 10:b=o!==t,n.setState({selectedValue:b?t:void 0,invalidNumber:void 0});case 12:case"end":return e.stop()}},e)}));return function(t,n,r){return e.apply(this,arguments)}}(),n.handleNumPick=function(){var e=Object(O.a)(x.a.mark(function e(t){var r,a,i,c,u,o;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.state,a=r.selectedSquare,i=r.grid,c=a.row,u=a.column,!c||"number"===typeof i[c][u]){e.next=7;break}return e.next=5,I.isAvailable(i,c,u,t);case 5:e.sent?((o=i.slice())[c][u]=t,n.setState({grid:o,numberGrabbed:void 0})):n.setState({invalidNumber:t,numberGrabbed:void 0});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.toggleScribble=function(){n.setState({scribble:!n.state.scribble})},n.createBoxes=function(){for(var e=n.state,t=e.grid,r=e.selectedValue,i=e.selectedSquare,c=e.invalidNumber,u=[],o=0;o<9;o+=3)for(var s=0;s<9;s+=3){for(var l=[],b=o;b<o+3;b++)for(var d=s;d<s+3;d++)l.push(a.a.createElement(y,{grid:t,cell:t[b][d],i:b,j:d,selectedSquare:i,selectedValue:r,invalidNumber:c,handleClick:n.handleClick,key:b+""+d}));u.push(l)}return u},n.state={grid:[],counter:0,availableNumbers:[1,2,3,4,5,6,7,8,9],selectedSquare:{},scribble:!1},n}return Object(b.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state,r=t.availableNumbers,i=t.numberGrabbed,c=t.processingTime,u=t.scribble;return a.a.createElement("div",{className:"wrapper"},a.a.createElement("div",{className:"sudoku-menu"},a.a.createElement("div",{className:"s-button",onClick:this.createPuzzle},"Create Sudoku"),a.a.createElement("div",{className:"s-button",onClick:this.fillGrid},"Fill Grid"),a.a.createElement("div",{className:"s-button",onClick:this.createGrid},"Empty Grid"),a.a.createElement("div",{className:"s-button",onClick:function(){return e.removeNumbers()}},"Remove numbers"),a.a.createElement("div",{className:"s-button"},"Time: ".concat(c+"s"))),a.a.createElement("div",{className:"grid"},this.createBoxes().map(function(e,t){return a.a.createElement("div",{key:t,className:"box"},e.map(function(e){return e}))})),a.a.createElement("div",{className:"bottom-area"},a.a.createElement("img",{className:"scribble-button",onClick:this.toggleScribble,src:n(253),alt:""}),u?a.a.createElement("div",{className:"scribble-numbers"},r.map(function(t){return a.a.createElement(B,{number:t,numberGrabbed:i,handleNumPick:e.handleNumPick,key:t})})):a.a.createElement("div",{className:"available-numbers"},r.map(function(t){return a.a.createElement(B,{number:t,numberGrabbed:i,handleNumPick:e.handleNumPick,key:t})}))))}}]),t}(r.Component)),q=(n(254),n(98)),X=n.n(q)()(),W=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement(f.b,{history:X},a.a.createElement("div",{className:"App"},a.a.createElement(m,null,a.a.createElement(w,null),a.a.createElement("div",{className:"app-body"},a.a.createElement(f.a,{exact:!0,path:"/",component:L}),a.a.createElement(f.a,{exact:!0,path:"/Sudoku",component:L})))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},94:function(e,t,n){e.exports=n.p+"static/media/menu-icon.d87f95fd.svg"},95:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABfAAAAXwBsrqMZwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADXSURBVEiJ7ZTRCoJAEEWXviAxw7QPLPvTEiSFUr+lOj000GQio1b04AUfXGfOYWV2nZvylwE2QNCjfglsrMU7HimApRFeSE9iEcyBgzRUQNxRGwO11O6BuXUXWlK3SRrwgxmuAB6Qtkka8LQ3XIEWwFFLgHUD7g2CK0kInAV4kgdZC0fBlSQAcp7JrWM8Mzpuzrmrer/I2vgAPpC1/KIM8MfCI6BUo+g1pqsEVh+Dq2+eOiclEI2Fv835YInAK2nsPP68nnibBEikYchlt7Xu4nvX9ZSf5w7m4cN48Oln+gAAAABJRU5ErkJggg=="},99:function(e,t,n){e.exports=n(258)}},[[99,1,2]]]);
//# sourceMappingURL=main.47063d36.chunk.js.map