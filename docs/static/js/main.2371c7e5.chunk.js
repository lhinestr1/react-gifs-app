(this["webpackJsonp04-gif_pp"]=this["webpackJsonp04-gif_pp"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),s=a(8),o=a(3),i=(a(14),a(4)),u=a.n(i),m=a(7),d=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a,n,r,c,l=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:"cars",e.prev=1,a="SLxKrY6Puqz2EkiTu48zkGyqqepsgoFT",e.next=5,fetch("https://api.giphy.com/v1/gifs/search?api_key=".concat(a,"&q=").concat(t,"&limit=6"));case 5:return n=e.sent,e.next=8,n.json();case 8:return r=e.sent,c=r.data,e.abrupt("return",c);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return","No existe");case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}(),p=function(e){var t=e.title,a=e.img;return console.log(a),r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card-img-top",src:a,alt:t}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t)))},f=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],isLoading:!0}),a=Object(o.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){d(e).then((function(e){c({data:e,isLoading:!1})}))}),[e]),r}(t);return r.a.createElement("div",null,r.a.createElement("div",{className:"alert alert-success text-center p-0 animate__animated animate__fadeInUp",role:"alert"},r.a.createElement("h1",{className:"p-0"},t)),a.isLoading?r.a.createElement("p",null,"Cargando..."):"",r.a.createElement("div",{className:"card-columns animate__animated animate__fadeInUp"},a.data.map((function(e){return r.a.createElement(p,{key:e.id,title:e.title,img:e.images.original.url})})),0===a.data.length?r.a.createElement("p",null,"No se encontraron registros"):""))},g=function(e){var t=e.handlerCategory,a=e.add_category;return r.a.createElement("form",{onSubmit:t,className:"mb-4 p-2"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 col-sm-4 col-md-3"},r.a.createElement("input",{className:"form-control",ref:a,name:"categoria",placeholder:"agregue categoria",autoComplete:"off"})),r.a.createElement("div",{className:"col-6 col-sm-4 col-md-3"},r.a.createElement("button",{type:"submit",className:"btn btn-outline-success btn-block"},"Guardar"))))};var v=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useRef)("");return r.a.createElement("div",null,r.a.createElement("h1",{className:"p-2 text-center"},"Buscador de Gift"),r.a.createElement(g,{handlerCategory:function(e){e.preventDefault();var t,a=l.current.value,n="string"!==typeof(t=a)?"":t.charAt(0).toUpperCase()+t.slice(1);c((function(e){return[n].concat(Object(s.a)(e))})),l.current.value=""},add_category:l}),0===a.length?r.a.createElement("div",{class:"alert alert-warning",role:"alert"},"Agregue una categoria"):"",a.map((function(e){return r.a.createElement(f,{key:e,category:e})})))};l.a.render(r.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.2371c7e5.chunk.js.map