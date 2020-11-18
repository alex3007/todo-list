(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{10:function(e,t,n){e.exports={bgWhite:"Item_bgWhite__1NDlI",markingIcon:"Item_markingIcon__x0DB-",dropIcon:"Item_dropIcon__2aEg5",editIcon:"Item_editIcon__2OTEK"}},23:function(e,t,n){e.exports={filterContainer:"Filter_filterContainer__11fcb",switcher:"Filter_switcher__KdgDW"}},38:function(e,t,n){e.exports={header:"Header_header__1M8dn"}},39:function(e,t,n){e.exports={addIcon:"Creator_addIcon__1j88e"}},49:function(e,t,n){},50:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),i=n.n(r),s=n(9),c=n.n(s),o=(n(49),n(50),n(8)),u=n(7),l=n.n(u),d=n(14),p=n(40),b=n(2),f=function(e,t,n){return e.map((function(e){return e.id===t?Object(b.a)(Object(b.a)({},e),n):e}))},j=n(15),h="https://todoalexserver.herokuapp.com/",O=function(){return j.get(h)},m=function(e,t){return j.post(h,{id:e,text:t})},x=function(e){return j.delete(h,{data:{id:e}})},g=function(e,t){return j.put(h,{id:e,text:t})},T=function(e,t){return j.put(h,{id:e,filterLabel:t})},I=n(77),v={items:[],isFetching:!0},k=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},_=function(e){return{type:"DELETE_ITEM",id:e}},E=function(e,t){return{type:"TOGGLE_MARK_DONE",id:e,filterLabel:t}},D=function(e,t){return{type:"TEXT_UPDATE",id:e,text:t}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ITEMS":return Object(b.a)(Object(b.a)({},e),{},{items:t.items});case"TOGGLE_IS_FETCHING":return Object(b.a)(Object(b.a)({},e),{},{isFetching:t.isFetching});case"ADD_ITEM":return Object(b.a)(Object(b.a)({},e),{},{items:[t.item].concat(Object(p.a)(e.items))});case"DELETE_ITEM":return Object(b.a)(Object(b.a)({},e),{},{items:e.items.filter((function(e){return e.id!==t.id}))});case"TOGGLE_MARK_DONE":return Object(b.a)(Object(b.a)({},e),{},{items:f(e.items,t.id,{filterLabel:["all",t.filterLabel]})});case"TEXT_UPDATE":return Object(b.a)(Object(b.a)({},e),{},{items:f(e.items,t.id,{task:t.text})});default:return e}},y={filterLabels:[{label:"all",isChecked:!0},{label:"todo",isChecked:!1},{label:"done",isChecked:!1}]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USE_FILTER":return Object(b.a)(Object(b.a)({},e),{},{filterLabels:e.filterLabels.map((function(e){return e.label===t.label?Object(b.a)(Object(b.a)({},e),{},{isChecked:!0}):Object(b.a)(Object(b.a)({},e),{},{isChecked:!1})}))});default:return e}},L=n(36),M=Object(o.c)({body:F,filters:C}),N=Object(o.e)(M,Object(o.a)(L.a)),w=n(12),U=n(38),S=n.n(U),G=n.p+"static/media/three-dots.de1cde9d.svg",A=n(78),R=n(76),W=function(e){return Object(a.jsxs)("div",{className:S.a.header,children:[Object(a.jsx)(A.a,{children:e.isFetching?Object(a.jsx)(R.a,{timeout:1e3,classNames:"item",children:Object(a.jsx)("img",{src:G})}):null}),Object(a.jsx)("h1",{children:"ToDo list"})]})},K=Object(o.d)(Object(w.b)((function(e){return{isFetching:e.body.isFetching}})))((function(e){return Object(a.jsx)(W,{isFetching:e.isFetching})})),H=n(19),B=n(20),J=n(22),P=n(21),X=n(10),q=n.n(X),z=n(6),Q=function(e){Object(J.a)(n,e);var t=Object(P.a)(n);function n(e){var a;return Object(H.a)(this,n),(a=t.call(this,e)).onToggleMarkDone=function(){a.props.toggleMarkDone(a.props.id,a.props.filterLabel)},a.onDeleteItem=function(){a.props.deleteItem(a.props.id)},a.onStartTexUpdating=function(e){a.setState(Object(b.a)(Object(b.a)({},a.state),{},{isEnabled:!0}))},a.onTextUpdating=function(e){a.props.updateText(a.props.id,e.target.value)},a.onFinishTexUpdating=function(){a.props.saveUpdatedText(a.props.id,a.props.task),a.setState(Object(b.a)(Object(b.a)({},a.state),{},{isEnabled:!1}))},a.itemWrapper=i.a.createRef(),a.state={isEnabled:!1},a}return Object(B.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{children:["todo"===this.props.filterLabel?Object(a.jsx)(z.e,{onClick:this.onToggleMarkDone,className:q.a.markingIcon}):Object(a.jsx)(z.d,{onClick:this.onToggleMarkDone,className:q.a.markingIcon}),Object(a.jsx)("textarea",{onChange:this.onTextUpdating,value:this.props.task,disabled:!this.state.isEnabled,className:"".concat("done"===this.props.filterLabel?q.a.bgWhite:q.a.bgTransparent),ref:this.itemWrapper,placeholder:"Todo"}),this.state.isEnabled?Object(a.jsx)(z.a,{onClick:this.onFinishTexUpdating,className:q.a.editIcon}):Object(a.jsx)(z.b,{onClick:this.onStartTexUpdating,className:q.a.editIcon}),Object(a.jsx)(z.f,{onClick:this.onDeleteItem,className:q.a.dropIcon})]})}}]),n}(i.a.Component),V=function(e){var t=e.filters.find((function(e){return!0===e.isChecked})),n=e.items.filter((function(e){return-1!==e.filterLabel.indexOf(t.label)}));return Object(a.jsx)(A.a,{children:n.map((function(t){return Object(a.jsx)(R.a,{timeout:500,classNames:"item",children:Object(a.jsx)(Q,{id:t.id,task:t.task,filterLabel:t.filterLabel[1],toggleMarkDone:e.toggleMarkDone,deleteItem:e.deleteItem,updateText:e.updateText,saveUpdatedText:e.saveUpdatedText})},t.id)}))})},Y=n(23),Z=n.n(Y),$=function(e){return Object(a.jsx)("div",{className:Z.a.filterContainer,children:e.filters.map((function(t){return Object(a.jsxs)("label",{htmlFor:t.label,id:t.label,onClick:function(){e.useFilter(t.label)},children:[t.isChecked?Object(a.jsx)(z.h,{className:Z.a.switcher}):Object(a.jsx)(z.g,{className:Z.a.switcher}),t.label]},"".concat(t.label,"_key"))}))})},ee=n(41),te=n(39),ne=n.n(te),ae=function(e){var t=i.a.createRef(),n=Object(r.useState)(""),s=Object(ee.a)(n,2),c=s[0],o=s[1],u=function(t){t.preventDefault(),""!==c&&e.addItem(c),o("")};return Object(a.jsxs)("form",{onSubmit:u,children:[Object(a.jsx)("input",{placeholder:"Enter todo...",onChange:function(){o(t.current.value)},ref:t,value:c}),Object(a.jsx)(z.c,{className:ne.a.addIcon,onClick:u})]})},re=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)(ae,{addItem:e.addItem}),Object(a.jsx)($,{filters:e.filters,useFilter:e.useFilter}),Object(a.jsx)(V,{filters:e.filters,items:e.items,toggleMarkDone:e.toggleMarkDone,deleteItem:e.deleteItem,updateText:e.updateText,saveUpdatedText:e.saveUpdatedText})]})},ie=function(e){Object(J.a)(n,e);var t=Object(P.a)(n);function n(){return Object(H.a)(this,n),t.apply(this,arguments)}return Object(B.a)(n,[{key:"componentDidMount",value:function(){this.props.getItems()}},{key:"render",value:function(){return Object(a.jsx)(re,{items:this.props.items,isFetching:this.props.isFetching,filters:this.props.filters,addItem:this.props.addItem,toggleMarkDone:this.props.toggleMarkDone,deleteItem:this.props.deleteItem,updateText:this.props.updateText,saveUpdatedText:this.props.saveUpdatedText,useFilter:this.props.useFilter})}}]),n}(i.a.Component),se=Object(o.d)(Object(w.b)((function(e){return{items:e.body.items,isFetching:e.body.isFetching,filters:e.filters.filterLabels}}),{getItems:function(){return function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(k(!0)),e.next=3,O();case 3:n=e.sent,t({type:"SET_ITEMS",items:n.data}),t(k(!1));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},addItem:function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){var a,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(k(!0)),a=Object(I.a)(),t.next=4,m(a,e);case 4:(r=t.sent).data.result&&(n({type:"ADD_ITEM",item:r.data.item}),n(k(!1)));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},deleteItem:function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(k(!0)),t.next=3,x(e);case 3:(a=t.sent).data.result&&(n(_(a.data.id)),n(k(!1)));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},toggleMarkDone:function(e,t){return function(){var n=Object(d.a)(l.a.mark((function n(a){var r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(k(!0)),n.next=3,T(e,t);case 3:(r=n.sent).data.result&&(a(E(r.data.id,r.data.filterLabel)),a(k(!1)));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},updateText:D,saveUpdatedText:function(e,t){return function(){var n=Object(d.a)(l.a.mark((function n(a){var r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(k(!0)),n.next=3,g(e,t);case 3:(r=n.sent).data.result&&(a(D(r.data.id,r.data.text)),a(k(!1)));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},useFilter:function(e){return{type:"USE_FILTER",label:e}}}))(ie),ce=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(K,{}),Object(a.jsx)(se,{})]})},oe=function(){return Object(a.jsx)(w.a,{store:N,children:Object(a.jsx)(ce,{})})};c.a.render(Object(a.jsx)(oe,{}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.1efbd641.chunk.js.map