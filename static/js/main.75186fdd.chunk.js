(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),s=n(2),r=n.n(s),c=n(3),i=n(4),l=n(6),u=n(5),d=n(7),m=(n(14),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),p=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={isGoodsLoaded:!1,goods:[].concat(m)},n.shownClick=function(){n.setState({isGoodsLoaded:!0})},n.reverseClick=function(){n.setState(function(e){return{goods:e.goods.reverse()}})},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.isGoodsLoaded&&this.state.goods.map(function(e){return a.a.createElement("li",null,e)}),t=this.state.isGoodsLoaded||a.a.createElement("button",{type:"button",className:"button",onClick:this.shownClick},"Start"),n=this.state.isGoodsLoaded&&a.a.createElement("button",{type:"button",className:"button button--reverse",onClick:this.reverseClick},"Reverse");return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Goods 1"),t,a.a.createElement("ul",{className:"list"},e),n)}}]),t}(a.a.Component);r.a.render(a.a.createElement(p,{test:123}),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.75186fdd.chunk.js.map