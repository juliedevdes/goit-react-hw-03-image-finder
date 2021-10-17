(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),o=n(8),c=n.n(o),r=n(7),s=n(2),l=n(3),u=n(5),h=n(4),p=(n(13),n(0)),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={inputVal:""},e.handleInputChange=function(t){e.setState({inputVal:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.inputVal)},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)("header",{className:"Searchbar",children:Object(p.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(p.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(p.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(p.jsx)("input",{value:this.state.inputVal,onChange:this.handleInputChange,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),n}(i.a.Component),d=(n(15),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).onClick=function(){e.props.onClick(e.props.img)},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)("li",{className:"ImageGalleryItem",children:Object(p.jsx)("img",{src:this.props.img.webformatURL,alt:this.props.img.tags,onClick:this.onClick,className:"ImageGalleryItem-image"})},this.props.img.id)}}]),n}(i.a.Component)),j=(n(16),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)("button",{className:"Button",type:"button",onClick:this.props.onBtnClick,children:"Load More"})}}]),n}(i.a.Component)),b=(n(17),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{children:[Object(p.jsx)("ul",{className:"ImageGallery",children:this.props.imagesArray.map((function(t){return Object(p.jsx)(d,{img:t,onClick:e.props.onImgClick},t.id)}))}),0!==this.props.imagesArray.length&&Object(p.jsx)(j,{onBtnClick:this.props.onBtnClick})]})}}]),n}(i.a.Component)),g=(n(18),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"Loader",children:Object(p.jsx)("svg",{width:"80",height:"80",viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg","aria-label":"audio-loading",children:Object(p.jsxs)("g",{fill:"none",fillRule:"evenodd",strokeWidth:"2",children:[Object(p.jsxs)("circle",{cx:"22",cy:"22",r:"1",children:[Object(p.jsx)("animate",{attributeName:"r",begin:"0s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),Object(p.jsx)("animate",{attributeName:"strokeOpacity",begin:"0s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"})]}),Object(p.jsxs)("circle",{cx:"22",cy:"22",r:"1",children:[Object(p.jsx)("animate",{attributeName:"r",begin:"-0.9s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),Object(p.jsx)("animate",{attributeName:"strokeOpacity",begin:"-0.9s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"})]})]})})})}}]),n}(i.a.Component)),f=(n(19),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).handleKeyDown=function(t){"Escape"===t.code&&e.props.toggleModal()},e.closeModal=function(t){t.target===t.currentTarget&&e.props.toggleModal()},e}return Object(l.a)(n,[{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(p.jsx)("div",{className:"Overlay",onClick:this.closeModal,children:Object(p.jsx)("div",{className:"Modal",children:Object(p.jsx)("img",{src:this.props.img.largeImageURL,alt:this.props.img.tags})})})}}]),n}(i.a.Component)),O=(n(20),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={loading:!1,images:null,pageNum:1,query:"",showModal:!1,modalContent:{}},e.onLoadMoreBtnClick=function(t){t.preventDefault(),e.fetchImgs(e.state.query,e.state.pageNum,e.state.images),e.setState((function(e){return{pageNum:e.pageNum+=1}}))},e.onSubmit=function(t){e.setState({query:t,pageNum:1}),e.fetchImgs(t,1),e.setState((function(e){return{pageNum:e.pageNum+=1}}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onImgClick=function(t){e.setState({modalContent:t}),e.toggleModal()},e}return Object(l.a)(n,[{key:"fetchImgs",value:function(e,t){var n=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];this.setState({loading:!0}),fetch("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(e,"'&page=").concat(t,"&per_page=12&key=23034166-be8967e0ea66b0703121f1d79")).then((function(e){return e.json()})).then((function(e){n.setState({images:[].concat(Object(r.a)(a),Object(r.a)(e.hits)),loading:!1}),0!==a.length&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){return alert("".concat(e))}))}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(m,{onSubmit:this.onSubmit}),this.state.loading&&Object(p.jsx)(g,{}),this.state.images&&Object(p.jsx)(b,{imagesArray:this.state.images,onImgClick:this.onImgClick,onBtnClick:this.onLoadMoreBtnClick}),this.state.showModal&&Object(p.jsx)(f,{img:this.state.modalContent,toggleModal:this.toggleModal})]})}}]),n}(i.a.Component)),y=O;n(21);c.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.f261e13e.chunk.js.map