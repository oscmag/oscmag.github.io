(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,t,r){},146:function(e,t,r){},147:function(e,t,r){},148:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAEX0lEQVR4nO3dz4ocVRzF8VPHILOQIBJEMOgmkSiuxBdIjDtxEXSTjeBK8wAhb+AjqEs3LtSNguuQRRYGXA3kz2SQwAQTBf8km2Ey8ZaL7uikp//XvVXV/ft+oBnoqa6qqXPq1q2eZkYCAAAAAAAAAAAAADRke8P2BdtXbD+wXdves71p+zPbr3S9jyjE9hnbO8PQJz12bV+03fXuIifb523vzwj/4ONzSrAmlgifEqyLBuFTglWXIXxKsKoyhl+8BM8UWWtgts9L+krSkYyrfVvSS1VV/VjXdcbVUoCshmfpF5JeLbD6IiWgABnVda2qqr6T9I6klwtsInsJKEBmdV3vVVX1jVaoBGhgOOG7OOb5o7Z/yjgR5O6gb0Zm+5fGfJ8SrKsJt3pdlODQ6IPCptzn79g+Omb5kiXYdYPfIjJ+LGjKff5dSadTSg9HXzN87l1J1wrs0oakTwusF6NmnPkn5nh9qZFgs42fP7RFw7d9zPbHY54vUYK9do5CUEuGv+kWJ4btHImAGobf1t3Bg3aORjCZwm+jBFfaOSKBZA6/dAkutHNUgigUfqkS7NjeaOfIBFA4/Nwl2Ld9pp0jE0BL4ecqwb4Hb0ohh5bDb1oCws+po/CXLQHh59Rx+IuWgPBz6kn485aA8HPqWfizSnCV8DPqafjTStDOgYmg5+FPLEEpoT4V7Nkf5tgeWf6YpMuS3mxnD/9ztqqq3bqur5beUJixZYXCl6THw/1CDisy7D95MNvPifADI/zACD8wwg+M8AMj/MAIPzDCD4zwAyP8wAg/MMIPjPADI/zACD8wwg+M8AMj/MAIPzDCD4zwAyP8wAg/MMIPjPADI/zACD8wwg+M8AMj/MAIPzDCD4zwAyP8wAg/MMIPzPa5CeH/Qfj9U+LPxF2TdGfM889LOvvUxrv/U2wfpZS+7mDb6832cdu3x5xx/9j+ZLgMZ/66sP2C7WdHnptWgkuEv0Zsf2D7+wVK0NWD8EfkmgOckvS+pG8PliCldFfSaUnbk17YIq75Y+QqwMnh176WgPAnyDkCPNG3EhB+abb/GnO97cOcgGt+abZfnBJAlyUg/DnkuAScmvK9ri4HDPtzylGAQ2/vjmi7BIS/gBwFeH2OZdoqAeEvKEcBXptzudIlIPwu2L6x4OSsxMSQCV8XbB+xvbdEYDlLQPhdsX2iwVmbowSE3yXb7zW8V29SAsLPoOkkcN4J4CTLTgyZ8PWB7S8bjgDLjASc+X1h+3KmAsxbAsLvE9v3MhZgVgkIv088+L/2OcOfVYJzXf2s66xa9oW235L0c8Z9OegHSR+mlB4VWj+GmtwFvJFtLw47dHeAMkb/lfoiTs5eZCF/S9qSdFPS7eHX5yT9mXk7OKBJAaZ9DmCSR5J+0SDoLUk3NLjfv5lS+r3BvmBJTQow7U2g+xqcwVuSbun/M/tOSulxg20isyaTwN8k/aqnh+3rkrZTSg/z7B4AAAAAAAAAAAAAYDn/Apkk0LP9ZS1NAAAAAElFTkSuQmCC"},166:function(e,t,r){},167:function(e,t,r){},168:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(59),i=r.n(o),c=(r(72),r(8)),u=r(9),s=r(11),l=r(10),m=r(12),f=a.a.createContext(),b=function(e){function t(e){var r;return Object(c.a)(this,t),(r=Object(s.a)(this,Object(l.a)(t).call(this,e))).componentDidMount=function(){r.updateWindowWidth(),window.addEventListener("resize",r.updateWindowWidth)},r.componentWillUnmount=function(){window.removeEventListener("resize",r.updateWindowWidth)},r.updateWindowWidth=function(){var e=window.innerWidth<=615;r.setState({isMobile:e})},r.state={isMobile:!1},r}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(f.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),d=(f.Consumer,r(16)),p=(r(73),r(60)),v=r.n(p),g=r(61),h=r.n(g),k=r(19),E=function(e){function t(e){var r;return Object(c.a)(this,t),(r=Object(s.a)(this,Object(l.a)(t).call(this,e))).componentDidMount=function(){},r.toggleMenu=function(){r.setState({menuOpen:!r.state.menuOpen})},r.state={menuOpen:!1},r}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.context.isMobile,t=this.state.menuOpen;return a.a.createElement("div",{className:"navbar-container"},a.a.createElement("div",{className:"navbar-content ".concat(t&&"menu-open")},a.a.createElement("div",{className:"mobile-navbar-layout"},a.a.createElement("div",{className:"navbar-logo"},a.a.createElement(k.a,{to:"/"},"Playground")),e&&a.a.createElement("img",{id:"menu-icon",onClick:this.toggleMenu,src:t?h.a:v.a,alt:"menu-icon"})),(!e||t)&&a.a.createElement("div",{className:"navbar-links"},a.a.createElement(k.a,{to:"/sudoku",onClick:this.toggleMenu},"Sudoku"),a.a.createElement(k.a,{to:"/rubiks",onClick:this.toggleMenu},"Rubik's Cube"))))}}]),t}(n.Component);E.contextType=f;var A=E,S=r(1),N=r.n(S),y=r(4),w=r(15),x=r(126).default,C=r(132).default,O=Object(w.DragDropContext)(x(C)),M=r(64),D=r.n(M),j=r(23),P=r.n(j),B=(r(145),"card,"),z=(r(146),{drop:function(e){e.handleClick(e.number,e.i,e.j)},canDrop:function(e){return t=e.grid,r=e.i,n=e.j,"number"!==typeof t[r][n];var t,r,n}});var L=Object(w.DropTarget)(B,z,function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver(),canDrop:t.canDrop()}})(function(e){var t=e.grid,r=e.cell,n=e.selectedValue,o=e.selectedSquare,i=e.invalidNumber,c=e.handleClick,u=e.i,s=e.j,l=e.connectDropTarget;return e.isOver,l(a.a.createElement("div",{className:"\n        cell\n        ".concat(t[u][s]===n?" selected-value":"","\n        ").concat(i===t[u][s]&&void 0!==i?"invalid-number":"","\n        ").concat(o.row===u&&o.column===s?" selected-square":"","\n      "),onClick:function(){return c(t[u][s],u,s)},key:s},r))});r(147);var R=Object(w.DragSource)(B,{beginDrag:function(e){var t=e.number,r=e.numberGrabbed;return(0,e.setNumberGrabbed)(t),{number:t,numberGrabbed:r}}},function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}})(function(e){var t=e.connectDragSource,r=e.isDragging,n=e.number,o=e.numberGrabbed,i=e.handleNumPick;return t(a.a.createElement("div",{className:"cell ".concat(o===n?"grabbed-number":""," ").concat(r?"is-dragging":""),onClick:function(){return i(n)},key:n},n))}),U=function(e,t,r,n){for(var a=0;a<9;a++)if(e[t][a]===n)return!1;return!0},F=function(e,t,r,n){for(var a=0;a<9;a++)if(e[a][r]===n)return!1;return!0},G=function(){var e=Object(y.a)(N.a.mark(function e(t,r,n,a){var o,i,c;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o=3;case 1:if(!(o<10)){e.next=20;break}if(!(r<o)){e.next=17;break}i=3;case 4:if(!(i<10)){e.next=17;break}return e.next=7,T(t,r,n,a,o,i);case 7:c=e.sent,e.t0=c,e.next="true"===e.t0?11:"false"===e.t0?12:13;break;case 11:return e.abrupt("return",!0);case 12:return e.abrupt("return",!1);case 13:return e.abrupt("continue",14);case 14:i+=3,e.next=4;break;case 17:o+=3,e.next=1;break;case 20:return e.abrupt("return",!1);case 21:case"end":return e.stop()}},e)}));return function(t,r,n,a){return e.apply(this,arguments)}}(),T=function(e,t,r,n,a,o){if(r<o){for(var i=a-3;i<a;i++)for(var c=o-3;c<o;c++)if(e[i][c]===n)return"false";return"true"}},X={isAvailable:function(e,t,r,n){return U(e,t,r,n)&&F(e,t,r,n)&&G(e,t,r,n)},checkSquare:function(e,t){var r="";return e<3?(r+="T",r+=t<3?"L":t<6?"M":"R"):e<6?(r+="M",r+=t<3?"L":t<6?"M":"R"):(r+="B",r+=t<3?"L":t<6?"M":"R"),r}},V=O(function(e){function t(e){var r;return Object(c.a)(this,t),(r=Object(s.a)(this,Object(l.a)(t).call(this,e))).componentWillMount=function(){r.createGrid()},r.createGrid=function(){for(var e=[],t=0;t<9;t++)e.push(["","","","","","","","",""]);r.setState({grid:e,scribbleGrid:Array.from(e),selectedValue:void 0,processingTime:0})},r.fillGrid=Object(y.a)(N.a.mark(function e(){var t,n,a,o,i,c,u=arguments;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t=!(u.length>0&&void 0!==u[0])||u[0],n=[],a=0;a<9;a++)n.push(["","","","","","","","",""]);return o=P()(),e.next=6,r.fillNextCell(n,0,0,[1,2,3,4,5,6,7,8,9],t);case 6:i=P()(),c=(i-o)/1e3,r.setState({processingTime:c,counter:0});case 9:case"end":return e.stop()}},e)})),r.fillNextCell=function(){var e=Object(y.a)(N.a.mark(function e(t){var n,a,o,i,c,u,s,l,m,f=arguments;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=f.length>1&&void 0!==f[1]?f[1]:0,a=f.length>2&&void 0!==f[2]?f[2]:0,o=f.length>3&&void 0!==f[3]?f[3]:[1,2,3,4,5,6,7,8,9],i=f.length>4?f[4]:void 0,r.setState({counter:r.state.counter+1}),"number"!==typeof(c=JSON.parse(JSON.stringify(t)))[n][a]){e.next=10;break}if(o.splice(o.indexOf(c[n][a]),1),!(o.length<1)){e.next=10;break}return e.abrupt("return","none");case 10:return e.next=12,r.getAvailableNum(c,n,a,o);case 12:if("none"!==(u=e.sent)){e.next=15;break}return e.abrupt("return","none");case 15:if(t[n][a]=u,c=JSON.parse(JSON.stringify(t)),!i){e.next=22;break}return e.next=20,setTimeout(function(){r.setState({grid:c})},100*r.state.counter);case 20:e.next=23;break;case 22:r.setState({grid:c});case 23:if(l=n,!((s=a+1)>8)){e.next=30;break}if(8!==n){e.next=28;break}return e.abrupt("return");case 28:l++,s=0;case 30:return e.next=32,r.fillNextCell(c,l,s,[1,2,3,4,5,6,7,8,9],i);case 32:if("none"!==(m=e.sent)){e.next=37;break}return e.abrupt("return","redo");case 37:if("redo"!==m){e.next=41;break}return e.next=40,r.fillNextCell(c,n,a,o,i);case 40:return e.abrupt("return",e.sent);case 41:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),r.getAvailableNum=function(){var e=Object(y.a)(N.a.mark(function e(t,n,a,o){var i,c;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i=Math.floor(Math.random()*o.length),c=o[i],0!==n||0!==a){e.next=4;break}return e.abrupt("return",c);case 4:return e.next=7,X.isAvailable(t,n,a,c);case 7:if(!e.sent){e.next=12;break}return e.abrupt("return",c);case 12:if(o.splice(o.indexOf(c),1),!(o.length<1)){e.next=15;break}return e.abrupt("return","none");case 15:return e.next=17,r.getAvailableNum(t,n,a,o);case 17:return e.abrupt("return",e.sent);case 18:case"end":return e.stop()}},e)}));return function(t,r,n,a){return e.apply(this,arguments)}}(),r.createPuzzle=Object(y.a)(N.a.mark(function e(){var t,n;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=P()(),e.next=3,r.fillGrid(!1);case 3:r.removeNumbers(),n=P()(),console.log("Created Sudoku in ".concat(n-t,"ms"));case 6:case"end":return e.stop()}},e)})),r.removeNumbers=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:25,t=Array.from(r.state.grid),n=[],a=function(){var e=Math.floor(9*Math.random()),t=Math.floor(9*Math.random());n.find(function(r){return r.x===e&&r.y===t})||n.push({x:e,y:t})};n.length<e;)a();for(var o=n,i=0;i<o.length;i++){var c=o[i];t[c.x][c.y]=void 0}r.setState({grid:t})},r.handleClick=function(){var e=Object(y.a)(N.a.mark(function e(t,n,a){var o,i,c,u,s,l,m;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o=r.state,i=o.numberGrabbed,c=o.grid,u=o.selectedValue,s=o.selectedSquare,r.setState({selectedSquare:s.row===n&&s.column===a?{}:{row:n,column:a}}),void 0!==t&&""!==t||void 0===i){e.next=9;break}return e.next=5,X.isAvailable(c,n,a,i);case 5:e.sent?((l=c.slice())[n][a]=i,r.setState({grid:l,numberGrabbed:void 0})):r.setState({invalidNumber:i,numberGrabbed:void 0}),e.next=11;break;case 9:m=u!==t,r.setState({selectedValue:m?t:void 0,invalidNumber:void 0});case 11:case"end":return e.stop()}},e)}));return function(t,r,n){return e.apply(this,arguments)}}(),r.handleNumPick=function(){var e=Object(y.a)(N.a.mark(function e(t){var n,a,o,i,c,u;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.state,a=n.selectedSquare,o=n.grid,i=a.row,c=a.column,"number"!==typeof i||"number"===typeof o[i][c]){e.next=7;break}return e.next=5,X.isAvailable(o,i,c,t);case 5:e.sent?((u=o.slice())[i][c]=t,r.setState({grid:u,numberGrabbed:void 0})):r.setState({invalidNumber:t,numberGrabbed:void 0});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),r.toggleScribble=function(){r.setState({scribble:!r.state.scribble})},r.createBoxes=function(){for(var e=r.state,t=e.grid,n=e.selectedValue,o=e.selectedSquare,i=e.invalidNumber,c=[],u=0;u<9;u+=3)for(var s=0;s<9;s+=3){for(var l=[],m=u;m<u+3;m++)for(var f=s;f<s+3;f++)l.push(a.a.createElement(L,{grid:t,cell:t[m][f],i:m,j:f,selectedSquare:o,selectedValue:n,invalidNumber:i,handleClick:r.handleClick,key:m+""+f}));c.push(l)}return c},r.setNumberGrabbed=function(e){r.setState({numberGrabbed:e})},r.state={grid:[],counter:0,availableNumbers:[1,2,3,4,5,6,7,8,9],selectedSquare:{},scribble:!1},r}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.availableNumbers,o=t.numberGrabbed,i=t.processingTime,c=t.scribble;return a.a.createElement("div",{className:"wrapper"},a.a.createElement("div",{className:"sudoku-menu"},a.a.createElement("div",{className:"s-button",onClick:this.createPuzzle},"Create Sudoku"),a.a.createElement("div",{className:"s-button",onClick:this.fillGrid},"Fill Grid"),a.a.createElement("div",{className:"s-button",onClick:this.createGrid},"Empty Grid"),a.a.createElement("div",{className:"s-button",onClick:function(){return e.removeNumbers()}},"Remove numbers"),a.a.createElement("div",{className:"s-button"},"Time: ".concat(i+"s"))),a.a.createElement("div",{className:"grid"},this.createBoxes().map(function(e,t){return a.a.createElement("div",{key:t,className:"box"},e.map(function(e){return e}))})),a.a.createElement("div",{className:"bottom-area"},a.a.createElement("img",{className:"scribble-button",onClick:this.toggleScribble,src:r(148),alt:""}),c?a.a.createElement("div",{className:"scribble-numbers"},n.map(function(t){return a.a.createElement(R,{number:t,numberGrabbed:o,handleNumPick:e.handleNumPick,key:t})})):a.a.createElement("div",{className:"available-numbers"},n.map(function(t){return a.a.createElement(R,{number:t,numberGrabbed:o,setNumberGrabbed:e.setNumberGrabbed,handleNumPick:e.handleNumPick,key:t})}))),a.a.createElement(D.a,{handleKeys:["1","2","3","4","5","6","7","8","9"],onKeyEvent:function(t,r){return e.handleNumPick(t)}}))}}]),t}(n.Component)),I=r(65),q=r.n(I);r(66);var J=function(e){var t=e.side,r=e.piece,n=Object.keys(r).find(function(e){return r[e]===t});return a.a.createElement("div",{className:"cube-face cube-face--".concat(t," ").concat(n||"black")},!1)};var W=function(e){var t=e.rotate,r=e.shuffle,n=e.reset,o=e.solve;return a.a.createElement("div",{className:"rubik-nav"},a.a.createElement("div",null,a.a.createElement("div",{className:"r-button",onClick:function(){return t("R")}},"R"),a.a.createElement("div",{className:"r-button",onClick:function(){return t("F")}},"F"),a.a.createElement("div",{className:"r-button",onClick:function(){return t("L")}},"L"),a.a.createElement("div",{className:"r-button",onClick:function(){return t("B")}},"B"),a.a.createElement("div",{className:"r-button",onClick:function(){return t("U")}},"U"),a.a.createElement("div",{className:"r-button",onClick:function(){return t("D")}},"D"),a.a.createElement("div",{className:"r-button",onClick:function(){return t("M")}},"M"),a.a.createElement("div",{className:"r-button",onClick:function(){return t("E")}},"E"),a.a.createElement("div",{className:"r-button",onClick:function(){return t("S")}},"S")),a.a.createElement("div",null,a.a.createElement("div",{className:"r-button",onClick:function(){return t("Rprime")}},"R'"),a.a.createElement("div",{className:"r-button",onClick:function(){return t("Fprime")}},"F'"),a.a.createElement("div",{className:"r-button",onClick:function(){return t("Lprime")}},"L'"),a.a.createElement("div",{className:"r-button",onClick:function(){return t("Bprime")}},"B'"),a.a.createElement("div",{className:"r-button",onClick:function(){return t("Uprime")}},"U'"),a.a.createElement("div",{className:"r-button",onClick:function(){return t("Dprime")}},"D'"),a.a.createElement("div",{className:"r-button",onClick:function(){return t("Mprime")}},"M'"),a.a.createElement("div",{className:"r-button",onClick:function(){return t("Eprime")}},"E'"),a.a.createElement("div",{className:"r-button",onClick:function(){return t("Sprime")}},"S'")),a.a.createElement("div",{className:"main-buttons"},a.a.createElement("div",{className:"r-button",onClick:r},"Shuffle"),a.a.createElement("div",{className:"r-button",onClick:o},"Solve"),a.a.createElement("div",{className:"r-button",onClick:n},"Reset")))},Y=r(29),Z=function(e,t,r){var n=!1;2===e.length&&(e=e[0],n=!0);var a=JSON.parse(JSON.stringify(t)),o={F:"front",R:"right",U:"top",L:"left",B:"back",D:"bottom",Fprime:"front",Rprime:"right",Uprime:"top",Lprime:"left",Bprime:"back",Dprime:"bottom",M:"middleM",E:"middleE",S:"middleS",Mprime:"middleM",Eprime:"middleE",Sprime:"middleS"}[e],i={R:["x",2,"z","y","inc","decr"],U:["y",0,"x","z","decr","decr"],D:["y",2,"x","z","inc","decr"],F:["z",0,"x","y","inc","decr"],B:["z",2,"x","y","inc","inc"],L:["x",0,"z","y","inc","inc"],M:["x",1,"z","y","inc","inc"],S:["z",1,"x","y","inc","decr"],E:["y",1,"x","z","inc","decr"],Rprime:["x",2,"z","y","decr","inc"],Uprime:["y",0,"x","z","inc","inc"],Dprime:["y",2,"x","z","decr","inc"],Fprime:["z",0,"x","y","decr","inc"],Bprime:["z",2,"x","y","decr","decr"],Lprime:["x",0,"z","y","decr","decr"],Mprime:["x",1,"z","y","decr","decr"],Sprime:["z",1,"x","y","decr","inc"],Eprime:["y",1,"x","z","decr","inc"]},c={staticAxis:i[e][0],staticValue:i[e][1],threeStepAxis:i[e][2],oneStepAxis:i[e][3],oneStepDirection:i[e][4],threeStepDirection:i[e][5]},u=H(c);return r[o].forEach(function(t,r){var n=JSON.parse(JSON.stringify(t));n=Q(n,e),a[u[r].y][u[r].x][u[r].z]=n}),n&&r[o].forEach(function(t,r){var n=JSON.parse(JSON.stringify(t));n=Q(n,e),a[u[r].y][u[r].x][u[r].z]=n}),a},Q=function(e,t){var r=JSON.parse(JSON.stringify(e)),n={F:{top:"right",bottom:"left",right:"bottom",left:"top",front:"front"},R:{top:"back",bottom:"front",front:"top",back:"bottom",right:"right"},U:{front:"left",left:"back",back:"right",right:"front",top:"top"},L:{front:"bottom",bottom:"back",back:"top",top:"front",left:"left"},B:{top:"left",left:"bottom",bottom:"right",right:"top",back:"back"},D:{front:"right",right:"back",back:"left",left:"front",bottom:"bottom"},M:{front:"bottom",bottom:"back",back:"top",top:"front"},E:{front:"right",right:"back",back:"left",left:"front"},S:{top:"right",bottom:"left",right:"bottom",left:"top"},Fprime:{right:"top",left:"bottom",bottom:"right",top:"left",front:"front"},Rprime:{back:"top",front:"bottom",top:"front",bottom:"back",right:"right"},Uprime:{left:"front",back:"left",right:"back",front:"right",top:"top"},Lprime:{bottom:"front",back:"bottom",top:"back",front:"top",left:"left"},Bprime:{left:"top",bottom:"left",right:"bottom",top:"right",back:"back"},Dprime:{right:"front",back:"right",left:"back",front:"left",bottom:"bottom"},Mprime:{top:"back",bottom:"front",front:"top",back:"bottom"},Eprime:{front:"left",left:"back",back:"right",right:"front"},Sprime:{right:"top",left:"bottom",bottom:"right",top:"left"}};for(var a in e)r[a]=n[t][e[a]];return r},H=function(e){for(var t=e.staticAxis,r=e.staticValue,n=e.threeStepAxis,a=e.oneStepAxis,o=e.oneStepDirection,i=e.threeStepDirection,c=[],u="inc"===i?0:2,s="inc"===o?0:2,l=0;l<9;l++){var m;l%3===0&&0!==l&&("inc"===i?u=2===u?0:u+1:"decr"===i&&(u=0===u?2:u-1)),c.push((m={},Object(Y.a)(m,a,s),Object(Y.a)(m,t,r),Object(Y.a)(m,n,u),m)),"inc"===o?s=2===s?0:s+1:"decr"===o&&(s=0===s?2:s-1)}return c},K=(r(166),function(e){function t(e){var r;return Object(c.a)(this,t),(r=Object(s.a)(this,Object(l.a)(t).call(this,e))).componentDidMount=function(){var e=[[[{white:"top",green:"front",orange:"left"},{white:"top",orange:"left"},{white:"top",blue:"back",orange:"left"}],[{white:"top",green:"front"},{white:"top"},{white:"top",blue:"back"}],[{white:"top",green:"front",red:"right"},{white:"top",red:"right"},{white:"top",blue:"back",red:"right"}]],[[{green:"front",orange:"left"},{orange:"left"},{blue:"back",orange:"left"}],[{green:"front"},{},{blue:"back"}],[{green:"front",red:"right"},{red:"right"},{blue:"back",red:"right"}]],[[{yellow:"bottom",green:"front",orange:"left"},{yellow:"bottom",orange:"left"},{yellow:"bottom",blue:"back",orange:"left"}],[{yellow:"bottom",green:"front"},{yellow:"bottom"},{yellow:"bottom",blue:"back"}],[{yellow:"bottom",green:"front",red:"right"},{yellow:"bottom",red:"right"},{yellow:"bottom",blue:"back",red:"right"}]]];r.setSides(e),r.setState({solutionCube:e,cube:e})},r.setSides=function(e,t){var n={front:[e[0][0][0],e[0][1][0],e[0][2][0],e[1][0][0],e[1][1][0],e[1][2][0],e[2][0][0],e[2][1][0],e[2][2][0]],back:[e[0][2][2],e[0][1][2],e[0][0][2],e[1][2][2],e[1][1][2],e[1][0][2],e[2][2][2],e[2][1][2],e[2][0][2]],left:[e[0][0][2],e[0][0][1],e[0][0][0],e[1][0][2],e[1][0][1],e[1][0][0],e[2][0][2],e[2][0][1],e[2][0][0]],right:[e[0][2][0],e[0][2][1],e[0][2][2],e[1][2][0],e[1][2][1],e[1][2][2],e[2][2][0],e[2][2][1],e[2][2][2]],top:[e[0][0][2],e[0][1][2],e[0][2][2],e[0][0][1],e[0][1][1],e[0][2][1],e[0][0][0],e[0][1][0],e[0][2][0]],bottom:[e[2][0][0],e[2][1][0],e[2][2][0],e[2][0][1],e[2][1][1],e[2][2][1],e[2][0][2],e[2][1][2],e[2][2][2]],middleM:[e[0][1][2],e[0][1][1],e[0][1][0],e[1][1][2],e[1][1][1],e[1][1][0],e[2][1][2],e[2][1][1],e[2][1][0]],middleE:[e[1][0][0],e[1][1][0],e[1][2][0],e[1][0][1],e[1][1][1],e[1][2][1],e[1][0][2],e[1][1][2],e[1][2][2]],middleS:[e[0][0][1],e[0][1][1],e[0][2][1],e[1][0][1],e[1][1][1],e[1][2][1],e[2][0][1],e[2][1][1],e[2][2][1]]};if(t)return n;r.setState({sides:n})},r.shuffle=Object(y.a)(N.a.mark(function e(){var t,n,a,o,i,c,u;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t=["D","F","B","L","R","U","Dprime","Fprime","Bprime","Lprime","Rprime","Uprime","M","E","S","Mprime","Eprime","Sprime"],n=[],a={D:"Dprime",F:"Fprime",B:"Bprime",L:"Lprime",R:"Rprime",U:"Uprime",Dprime:"D",Fprime:"F",Bprime:"B",Lprime:"L",Rprime:"R",Uprime:"U",M:"Mprime",E:"Eprime",S:"Sprime",Mprime:"M",Eprime:"E",Sprime:"S"},i=0;i<20;i++){for(c=Math.floor(Math.random()*t.length);i>0&&t[c]===a[o];)c=Math.floor(Math.random()*t.length);n.push(t[c]),o=t[c]}u=0,n.forEach(function(){var e=Object(y.a)(N.a.mark(function e(t,n){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n>0)){e.next=4;break}return u+=200,e.next=4,r.sleep(u);case 4:r.rotate(t,!0);case 5:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}());case 6:case"end":return e.stop()}},e)})),r.reset=function(){var e=r.state.solutionCube;r.setSides(e),r.setState({cube:r.state.solutionCube,rotateX:0,rotateY:0,rott:!r.state.rott})},r.rotate=function(){var e=Object(y.a)(N.a.mark(function e(t,n){var a,o;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=["R","L","Rprime","Lprime","M","Mprime"].includes(t)?"vertical":["F","B","Fprime","Bprime","S","Sprime"].includes(t)?"depth":"horizontal",o=n?110:200,r.setState({levels:a}),e.next=5,r.sleep(100);case 5:r.setState({rotate:t}),setTimeout(function(){var e=r.state,n=e.cube,a=e.sides,o=Z(t,n,a);r.setSides(o),r.setState({cube:o,rotate:void 0})},o);case 7:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}(),r.solve=function(){var e=r.state.sides,t=r.parseCubeToString(e),n=q()(t);n=n.split(" ");var a=0;n.forEach(function(){var e=Object(y.a)(N.a.mark(function e(t,n){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n>0)){e.next=4;break}return a+=200,e.next=4,r.sleep(a);case 4:r.rotate(t,!0);case 5:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}()),console.log("cube string:",t),console.log("solve moves:",n)},r.parseCubeToString=function(e){var t={green:"F",white:"U",yellow:"D",orange:"L",red:"R",blue:"B"},r="";return["front","right","top","bottom","left","back"].forEach(function(n){e[n].forEach(function(e){for(var a in e)e[a]===n&&(r+=t[a])})}),r},r.isSolved=function(){for(var e=r.state,t=e.cube,n=e.solutionCube,a=0;a<3;a++)for(var o=0;o<3;o++)for(var i=0;i<3;i++)for(var c in t[a][o][i])if(t[a][o][i][c]!==n[a][o][i][c])return!1;return!0},r.onMouseDown=function(e){r.setState({mouseDown:!0})},r.onMouseUp=function(){r.setState({mouseDown:!1})},r.onMouseMove=function(e){r.setState({testing2:r.state.testing2+1}),r.state.mouseDown&&r.visuallyRotate(e.movementX,e.movementY)},r.onTouchMove=function(e){var t=e.touches[0].clientX,n=e.touches[0].clientY,a=n-(r.state.offsets[1]||0),o=t-(r.state.offsets[0]||0);r.visuallyRotate(o,a),r.setState({offsets:[t,n]})},r.onTouchStart=function(e){r.setState({offsets:[e.touches[0].clientX,e.touches[0].clientY]})},r.onTouchEnd=function(){r.setState({offsets:[0,0]})},r.getClasses=function(e,t,r){var n="";return 2===t&&(n+=" rightPiece"),1===t&&(n+=" midVertPiece"),0===t&&(n+=" leftPiece"),2===e&&(n+=" bottomPiece"),1===e&&(n+=" midHorPiece"),0===e&&(n+=" topPiece"),2===r&&(n+=" backPiece"),1===r&&(n+=" midDepthPiece"),0===r&&(n+=" frontPiece"),n},r.sleep=function(e){return new Promise(function(t){return setTimeout(t,e)})},r.visuallyRotate=function(e,t){var n=r.state.rotateY+e,a=r.state.rotateX-t;(n>=360||n<=-360)&&(n=0),(a>=360||a<=-360)&&(a=0),r.setState({rotateX:a,rotateY:n})},r.state={rotateX:0,rotateY:0,rotate:void 0,levels:"horizontal",offsets:[0,0]},r}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,r=t.cube,n=t.rotateX,o=t.rotateY,i=t.mouseDown,c=t.rotate,u=t.levels;return r?a.a.createElement("div",{className:"settings",onMouseMove:this.onMouseMove,onTouchMove:this.onTouchMove,onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onMouseUp:this.onMouseUp},a.a.createElement("div",{className:"cube ".concat(i?"dragging":""),onMouseDown:this.onMouseDown,style:{transform:"translateZ(-80px) rotateY(".concat(o,"deg) rotateX(").concat(n,"deg")}},r.map(function(t,r){return"horizontal"===u?0===r?a.a.createElement("div",{className:"first-level ".concat("U"===c?"rotateU":"Uprime"===c?"rotateUPrime":""),key:r},t.map(function(t,n){return t.map(function(t,o){var i=e.getClasses(r,n,o);return a.a.createElement("div",{className:"piece-3d ".concat(i),key:o},["front","back","right","left","top","bottom"].map(function(e,r){return a.a.createElement(J,{side:e,key:r,piece:t})}))})})):1===r?a.a.createElement("div",{className:"second-level ".concat("E"===c?"rotateE":"Eprime"===c?"rotateEPrime":""),key:r},t.map(function(t,n){return t.map(function(t,o){var i=e.getClasses(r,n,o);return a.a.createElement("div",{className:"piece-3d ".concat(i),key:o},["front","back","right","left","top","bottom"].map(function(e,r){return a.a.createElement(J,{side:e,key:r,piece:t})}))})})):2===r?a.a.createElement("div",{className:"third-level ".concat("D"===c?"rotateD":"Dprime"===c?"rotateDPrime":""),key:r},t.map(function(t,n){return t.map(function(t,o){var i=e.getClasses(r,n,o);return a.a.createElement("div",{className:"piece-3d ".concat(i),key:o},["front","back","right","left","top","bottom"].map(function(e,r){return a.a.createElement(J,{side:e,key:r,piece:t})}))})})):null:"vertical"===u?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"first-level ".concat("L"===c?"rotateL":"Lprime"===c?"rotateLPrime":""),key:"1"},t.map(function(t,n){return 0===n?t.map(function(t,o){var i=e.getClasses(r,n,o);return a.a.createElement("div",{className:"piece-3d ".concat(i),key:o},["front","back","right","left","top","bottom"].map(function(e,r){return a.a.createElement(J,{side:e,key:r,piece:t})}))}):null})),a.a.createElement("div",{className:"second-level ".concat("M"===c?"rotateM":"Mprime"===c?"rotateMPrime":""),key:"2"},t.map(function(t,n){return 1===n?t.map(function(t,o){var i=e.getClasses(r,n,o);return a.a.createElement("div",{className:"piece-3d ".concat(i),key:o},["front","back","right","left","top","bottom"].map(function(e,r){return a.a.createElement(J,{side:e,key:r,piece:t})}))}):null})),a.a.createElement("div",{className:"third-level ".concat("R"===c?"rotateR":"Rprime"===c?"rotateRPrime":""),key:"3"},t.map(function(t,n){return 2===n?t.map(function(t,o){var i=e.getClasses(r,n,o);return a.a.createElement("div",{className:"piece-3d ".concat(i),key:o},["front","back","right","left","top","bottom"].map(function(e,r){return a.a.createElement(J,{side:e,key:r,piece:t})}))}):null}))):"depth"===u?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"first-level ".concat("F"===c?"rotateF":"Fprime"===c?"rotateFPrime":""),key:"1"},t.map(function(t,n){return t.map(function(t,o){if(0===o){var i=e.getClasses(r,n,o);return a.a.createElement("div",{className:"piece-3d ".concat(i),key:r},["front","back","right","left","top","bottom"].map(function(e,r){return a.a.createElement(J,{side:e,key:r,piece:t})}))}return null})})),a.a.createElement("div",{className:"second-level ".concat("S"===c?"rotateS":"Sprime"===c?"rotateSPrime":""),key:"2"},t.map(function(t,n){return t.map(function(t,o){if(1===o){var i=e.getClasses(r,n,o);return a.a.createElement("div",{className:"piece-3d ".concat(i),key:r},["front","back","right","left","top","bottom"].map(function(e,r){return a.a.createElement(J,{side:e,key:r,piece:t})}))}return null})})),a.a.createElement("div",{className:"third-level ".concat("B"===c?"rotateB":"Bprime"===c?"rotateBPrime":""),key:"3"},t.map(function(t,n){return t.map(function(t,o){if(2===o){var i=e.getClasses(r,n,o);return a.a.createElement("div",{className:"piece-3d ".concat(i),key:r},["front","back","right","left","top","bottom"].map(function(e,r){return a.a.createElement(J,{side:e,key:r,piece:t})}))}return null})}))):null})),a.a.createElement(W,{rotate:this.rotate,shuffle:this.shuffle,reset:this.reset,solve:this.solve}),a.a.createElement("p",{className:"solved"},"Solved: ",a.a.createElement("b",{className:this.isSolved()?"solved-text":"unsolved-text"},this.isSolved()?"true":"false"))):a.a.createElement("p",null,"No cube")}}]),t}(a.a.Component)),_=Object(d.d)(K),$=(r(167),r(5)),ee=Object($.a)(),te=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(d.b,{history:ee},a.a.createElement("div",{className:"App"},a.a.createElement(b,null,a.a.createElement(A,null),a.a.createElement("div",{className:"app-body"},a.a.createElement(d.a,{exact:!0,path:"/",component:V}),a.a.createElement(d.a,{exact:!0,path:"/Sudoku",component:V}),a.a.createElement(d.a,{exact:!0,path:"/Rubiks",component:_})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},60:function(e,t,r){e.exports=r.p+"static/media/menu-icon.d87f95fd.svg"},61:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABfAAAAXwBsrqMZwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADXSURBVEiJ7ZTRCoJAEEWXviAxw7QPLPvTEiSFUr+lOj000GQio1b04AUfXGfOYWV2nZvylwE2QNCjfglsrMU7HimApRFeSE9iEcyBgzRUQNxRGwO11O6BuXUXWlK3SRrwgxmuAB6Qtkka8LQ3XIEWwFFLgHUD7g2CK0kInAV4kgdZC0fBlSQAcp7JrWM8Mzpuzrmrer/I2vgAPpC1/KIM8MfCI6BUo+g1pqsEVh+Dq2+eOiclEI2Fv835YInAK2nsPP68nnibBEikYchlt7Xu4nvX9ZSf5w7m4cN48Oln+gAAAABJRU5ErkJggg=="},66:function(e,t,r){e.exports=r.p+"static/media/rubiks_cube_logo.3e51c3ba.png"},67:function(e,t,r){e.exports=r(168)},72:function(e,t,r){},73:function(e,t,r){}},[[67,1,2]]]);
//# sourceMappingURL=main.b1d3aeae.chunk.js.map