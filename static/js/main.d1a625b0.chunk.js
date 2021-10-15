(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),c=n(7),i=n.n(c),r=n(2),s=n(3),l=n(5),u=n(4),h=n(0),p=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={inputVal:""},t.handleInputChange=function(e){t.setState({inputVal:e.currentTarget.value})},t.reset=function(){t.setState({inputVal:""})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.inputVal),t.reset()},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)("header",{className:"Searchbar",children:Object(h.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(h.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(h.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(h.jsx)("input",{value:this.state.inputVal,onChange:this.handleInputChange,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),n}(o.a.Component),m=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).onClick=function(){t.props.onClick(t.props.img)},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)("li",{className:"ImageGalleryItem",children:Object(h.jsx)("img",{src:this.props.img.webformatURL,alt:this.props.img.tags,onClick:this.onClick,className:"ImageGalleryItem-image"})},this.props.img.id)}}]),n}(o.a.Component),j=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"onClick",value:function(){console.log("click"),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){return Object(h.jsx)("button",{className:"Button",type:"button",onClick:this.onClick,children:"Load More"})}}]),n}(o.a.Component),b=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return Object(h.jsxs)("div",{children:[" ",Object(h.jsx)("ul",{className:"ImageGallery",children:this.props.imagesArray.map((function(e){return Object(h.jsx)(m,{img:e,onClick:t.props.onImgClick},e.id)}))}),Object(h.jsx)(j,{})]})}}]),n}(o.a.Component),g=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)("p",{children:"Loading..."})}}]),n}(o.a.Component),d=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"Overlay",onClick:this.props.toggleModal,children:Object(h.jsx)("div",{className:"Modal",children:Object(h.jsx)("img",{src:this.props.img.largeImageURL,alt:this.props.img.tags})})})}}]),n}(o.a.Component),O=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={images:null,pageNum:1,loading:!1,showModal:!1,modalContent:{}},t.toggleModal=function(e){t.setState((function(t){return{showModal:!t.showModal}}))},t.onImgClick=function(e){t.setState({modalContent:e}),t.toggleModal()},t.onSubmit=function(e){t.setState({loading:!0}),fetch("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(e,"'&page=").concat(t.state.pageNum,"&per_page=12&key=23034166-be8967e0ea66b0703121f1d79")).then((function(t){return t.json()})).then((function(e){t.setState({images:e.hits})})).finally((function(){return t.setState({loading:!1})})).catch(console.log)},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(p,{onSubmit:this.onSubmit}),this.state.loading&&Object(h.jsx)(g,{}),this.state.images&&Object(h.jsx)(b,{imagesArray:this.state.images,onImgClick:this.onImgClick}),this.state.showModal&&Object(h.jsx)(d,{img:this.state.modalContent,toggleModal:this.toggleModal})]})}}]),n}(o.a.Component),f=O;n(13);i.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d1a625b0.chunk.js.map