(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(10),s=a.n(c),i=a(2),o=a(3),l=a(5),d=a(4),u=(a(15),a(0)),j=function(){return Object(u.jsxs)("header",{className:"app__header",children:[Object(u.jsx)("h1",{className:"app__title",children:Object(u.jsxs)("a",{href:"#",children:[Object(u.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(u.jsx)("nav",{className:"app__menu",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Characters"})}),"/",Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Comics"})})]})})]})},h=a(6),m=a.n(h),b=a(7),f=function e(){var t=this;Object(i.a)(this,e),this._apiBase="https://gateway.marvel.com:443/v1/public",this._apiKey="apikey=8826ffc58611993cdd7dc1c1dfc83c2a",this._baseOffset=210,this.getResource=function(){var e=Object(b.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}throw Error("Could not fetch ".concat(t,", status ").concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllCharacters=Object(b.a)(m.a.mark((function e(){var a,r,n=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.length>0&&void 0!==n[0]?n[0]:t._baseOffset,e.next=3,t.getResource("".concat(t._apiBase,"/characters?limit=9&offset=").concat(a,"&").concat(t._apiKey));case 3:return r=e.sent,e.abrupt("return",r.data.results.map(t._transformCharacter));case 5:case"end":return e.stop()}}),e)}))),this.getCharacter=function(){var e=Object(b.a)(m.a.mark((function e(a){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(t._apiBase,"/characters/").concat(a,"?").concat(t._apiKey));case 2:return r=e.sent,e.abrupt("return",t._transformCharacter(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformCharacter=function(e){var t=e.id,a=e.name,r=e.description,n=e.thumbnail,c=e.comics;return{id:t,name:a,description:r?"".concat(r.slice(0,200),"..."):"Description not found.",thumbnail:n.path+"."+n.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:c.items}}},O=function(){return Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(u.jsx)("g",{transform:"translate(80,50)",children:Object(u.jsx)("g",{transform:"rotate(0)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#9F0013",fillOpacity:"1",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(u.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(u.jsx)("g",{transform:"rotate(45)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#9F0013",fillOpacity:"0.875",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(u.jsx)("g",{transform:"translate(50,80)",children:Object(u.jsx)("g",{transform:"rotate(90)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#9F0013",fillOpacity:"0.75",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(u.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(u.jsx)("g",{transform:"rotate(135)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#9F0013",fillOpacity:"0.625",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(u.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(u.jsx)("g",{transform:"rotate(180)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#9F0013",fillOpacity:"0.5",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(u.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(u.jsx)("g",{transform:"rotate(225)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#9F0013",fillOpacity:"0.375",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(u.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(u.jsx)("g",{transform:"rotate(270)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#9F0013",fillOpacity:"0.25",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(u.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(u.jsx)("g",{transform:"rotate(315)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#9F0013",fillOpacity:"0.125",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})},p=a.p+"static/media/error.42292aa1.gif",x=function(){return Object(u.jsx)("img",{style:{display:"block",width:"250px",height:"250px",margin:"0 auto",objectFit:"contain"},src:p,alt:"Error 403"})},v=(a(18),a.p+"static/media/mjolnir.61f31e18.png"),g=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={char:{},loading:!0,error:!1},e.marvelService=new f,e.onCharLoaded=function(t){e.setState({char:t,loading:!1,error:!1})},e.onCharLoading=function(){e.setState({loading:!0,error:!1})},e.onError=function(){e.setState({loading:!1,error:!0})},e.updateChar=function(){var t=Math.floor(400*Math.random()+1011e3);e.onCharLoading(),e.marvelService.getCharacter(t).then(e.onCharLoaded).catch(e.onError)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"render",value:function(){var e=this,t=this.state,a=t.char,r=t.loading,n=t.error,c=n?Object(u.jsx)(x,{}):null,s=r?Object(u.jsx)(O,{}):null,i=r||n?null:Object(u.jsx)(_,{char:a});return Object(u.jsxs)("div",{className:"randomchar",children:[c,s,i,Object(u.jsxs)("div",{className:"randomchar__static",children:[Object(u.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(u.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(u.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(u.jsx)("button",{className:"button button__main",onClick:function(){return e.updateChar()},children:Object(u.jsx)("div",{className:"inner",children:"try it"})}),Object(u.jsx)("img",{src:v,alt:"mjolnir",className:"randomchar__decoration"})]})]})}}]),a}(r.Component),_=function(e){var t=e.char,a=t.name,r=t.description,n=t.thumbnail,c=t.homepage,s=t.wiki;return Object(u.jsxs)("div",{className:"randomchar__block",children:[Object(u.jsx)("img",{src:n,style:/image_not_available/.test(n)?{objectFit:"contain"}:null,alt:a,className:"randomchar__img"}),Object(u.jsxs)("div",{className:"randomchar__info",children:[Object(u.jsx)("p",{className:"randomchar__name",children:a}),Object(u.jsx)("p",{className:"randomchar__descr",children:r}),Object(u.jsxs)("div",{className:"randomchar__btns",children:[Object(u.jsx)("a",{href:c,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"homepage"})}),Object(u.jsx)("a",{href:s,className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},y=g,C=a(9),N=(a(19),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={chars:[],loading:!0,newItemLoading:!1,error:!1,charsOffset:210,charsEnded:!1},e.marvelService=new f,e.onCharsLoaded=function(t){var a=!1;t.length<9&&(a=!0),e.setState((function(e){return{chars:[].concat(Object(C.a)(e.chars),Object(C.a)(t)),loading:!1,error:!1,newItemLoading:!1,charsOffset:e.charsOffset+9,charsEnded:a}}))},e.onCharsLoading=function(){e.setState({newItemLoading:!0,error:!1})},e.onError=function(){e.setState({loading:!1,error:!0})},e.onRequestChars=function(t){e.onCharsLoading(),e.marvelService.getAllCharacters(t).then(e.onCharsLoaded).catch(e.onError)},e.refsArray=[],e.setRefs=function(t){e.refsArray.push(t)},e.focusItem=function(t){e.refsArray.forEach((function(e){return e.classList.remove("char__item_selected")})),e.refsArray[t].classList.add("char__item_selected"),e.refsArray[t].focus()},e.drawChars=function(t){var a=t.map((function(t,a){var r=t.thumbnail,n=t.name,c=t.id;return Object(u.jsxs)("li",{ref:e.setRefs,className:"char__item",onClick:function(){e.props.onCharSelected(c),e.focusItem(a)},onKeyPress:function(t){" "!==t.key&&"Enter"!==t.key||(e.props.onCharSelected(c),e.focusItem(a))},tabIndex:"0",children:[Object(u.jsx)("img",{src:r,style:/image_not_available/.test(r)?{objectFit:"contain"}:null,alt:n}),Object(u.jsx)("div",{className:"char__name",children:n})]},c)}));return Object(u.jsx)("ul",{className:"char__grid",children:a})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.onRequestChars()}},{key:"render",value:function(){var e=this,t=this.state,a=t.chars,r=t.loading,n=t.error,c=t.charsOffset,s=t.newItemLoading,i=t.charsEnded,o=n?Object(u.jsx)(x,{}):null,l=r?Object(u.jsx)(O,{}):null,d=r||n?null:this.drawChars(a);return Object(u.jsxs)("div",{className:"char__list",children:[o,l,d,Object(u.jsx)("button",{className:"button button__main button__long",onClick:function(){return e.onRequestChars(c)},disabled:s||i,children:Object(u.jsx)("div",{className:"inner",children:"load more"})})]})}}]),a}(r.Component)),k=(a(20),function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(u.jsxs)("div",{className:"skeleton",children:[Object(u.jsxs)("div",{className:"pulse skeleton__header",children:[Object(u.jsx)("div",{className:"pulse skeleton__circle"}),Object(u.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(u.jsx)("div",{className:"pulse skeleton__block"}),Object(u.jsx)("div",{className:"pulse skeleton__block"}),Object(u.jsx)("div",{className:"pulse skeleton__block"})]})]})}),w=(a(21),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={char:null,loading:!1,error:!1},e.marvelService=new f,e.onCharLoaded=function(t){e.setState({char:t,loading:!1,error:!1})},e.onCharLoading=function(){e.setState({loading:!0})},e.onError=function(){e.setState({loading:!1,error:!0})},e.updateChar=function(){var t=e.props.charId;t&&(e.onCharLoading(),e.marvelService.getCharacter(t).then(e.onCharLoaded).catch(e.onError))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"componentDidUpdate",value:function(e,t){this.props.charId!==e.charId&&this.updateChar()}},{key:"render",value:function(){var e=this.state,t=e.char,a=e.loading,r=e.error,n=t||a||r?null:Object(u.jsx)(k,{}),c=r?Object(u.jsx)(x,{}):null,s=a?Object(u.jsx)(O,{}):null,i=a||r||!t?null:Object(u.jsx)(T,{char:t});return Object(u.jsxs)("div",{className:"char__info",children:[n,c,s,i]})}}]),a}(r.Component)),T=function(e){var t=e.char,a=t.name,r=t.description,n=t.thumbnail,c=t.homepage,s=t.wiki,i=t.comics;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"char__basics",children:[Object(u.jsx)("img",{src:n,style:/image_not_available/.test(n)?{objectFit:"contain"}:null,alt:a}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"char__info-name",children:a}),Object(u.jsxs)("div",{className:"char__btns",children:[Object(u.jsx)("a",{href:c,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"homepage"})}),Object(u.jsx)("a",{href:s,className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(u.jsx)("div",{className:"char__descr",children:r}),Object(u.jsx)("div",{className:"char__comics",children:"Comics:"}),function(e){if("undefined"!==typeof e){if(0===e.length)return"Comics of this character is not found.";var t=e.map((function(e,t){if(!(t>9))return Object(u.jsx)("li",{className:"char__comics-item",children:Object(u.jsx)("a",{href:e.resourceURI,children:e.name})},t)}));return Object(u.jsx)("ul",{className:"char__comics-list",children:t})}}(i)]})},S=w,L=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={error:!1},e}return Object(o.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(u.jsx)(x,{}):this.props.children}}]),a}(r.Component),E=a.p+"static/media/vision.067d4ae1.png",F=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={selectedChar:null},e.onCharSelected=function(t){e.setState((function(e){return{selectedChar:t}}))},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(j,{}),Object(u.jsxs)("main",{children:[Object(u.jsx)(L,{children:Object(u.jsx)(y,{})}),Object(u.jsxs)("div",{className:"char__content",children:[Object(u.jsx)(L,{children:Object(u.jsx)(N,{onCharSelected:this.onCharSelected})}),Object(u.jsx)(L,{children:Object(u.jsx)(S,{charId:this.state.selectedChar})})]}),Object(u.jsx)("img",{className:"bg-decoration",src:E,alt:"vision"})]})]})}}]),a}(r.Component);a(22);s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(F,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.08c7b11a.chunk.js.map