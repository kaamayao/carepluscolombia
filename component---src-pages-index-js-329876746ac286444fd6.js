(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{IMw7:function(e,a,t){e.exports=t.p+"static/First-888126e2d713c12b2c88063a70b8b8ac.png"},KOTU:function(e,a,t){},RXBc:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),s=t.n(n),r=t("Bl7J"),c=t("vrFN"),i=(t("VNdk"),t("aT6C"),t("dMuJ")),o=t.n(i),l=t("Wbzz");var m=function(e){var a,t;function n(a){return e.call(this,a)||this}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){return s.a.createElement("div",{className:"indexBanner"},s.a.createElement("div",{className:"indexBanner__content-wrap"},s.a.createElement("h1",{className:"indexBanner__title"},"Ofrecemos a la comunidad colombiana productos relacionados con la salud, el cuidado y el bienestar"),s.a.createElement("div",{className:"indexBanner__info-wrap"},s.a.createElement("p",{className:"indexBanner__content"},"CarePlus es una empresa colombiana 100% a la vanguardia y dispuesta a ofrecer lo mejor a todos sus clientes tanto en el ámbito de la prestación de servicios de salud, como en la distribución de productos para el cuidado y bienestar, enseñanza y educación continuada. Nos ponemos en los zapatos de otro para que nuestra razón de ser, siempre sea de calidad superior."),s.a.createElement("p",{className:"indexBanner__content"},"Estamos comprometidos con la satisfacción permanente de las necesidades y expectativas de las partes interesadas cumpliendo con calidad, puntualidad y oportunidad a las necesidades de nuestros pacientes y clientes en el marco de los requisitos legales aplicables.")),s.a.createElement(l.Link,{className:"indexBanner__learn-more-btn",to:"/sobre-nosotros/",activeClassName:"green"},"Contáctanos")),s.a.createElement("img",{src:o.a,className:"indexBanner__img"}),s.a.createElement("div",{className:"indexBanner__banner-img-wrap"}))},n}(s.a.Component),d=(t("KOTU"),t("IMw7")),u=t.n(d),p=t("WSZw"),_=t.n(p),v=t("wmCt"),h=t.n(v);var f=function(e){var a,t;function n(a){return e.call(this,a)||this}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){return s.a.createElement("div",{className:"IndexServices"},s.a.createElement("div",{className:"IndexServices__service-wrap IndexServices__service-wrap-regular"},s.a.createElement("div",{className:"IndexServices__service-wrap-img"},s.a.createElement("img",{src:u.a,className:"IndexServices__service-img"})),s.a.createElement("div",{className:"IndexServices__service-content IndexServices__service-border-blue"},s.a.createElement("h3",{className:"IndexServices__service-title"},"SERVICIOS"),s.a.createElement("p",{className:"IndexServices__service-description"},"Contamos con una gran variedad de servicios diseñados a tu medida, dirigidos a toda tu familia."),s.a.createElement(l.Link,{className:"IndexServices__btn IndexServices__btn-blue",to:"/servicios/"},"Conóce nuestros servicios"))),s.a.createElement("div",{className:"IndexServices__service-wrap IndexServices__service-wrap-reverse"},s.a.createElement("div",{className:"IndexServices__service-wrap-img"},s.a.createElement("img",{src:_.a,className:"IndexServices__service-img"})),s.a.createElement("div",{className:"IndexServices__service-content IndexServices__service-border-green"},s.a.createElement("h3",{className:"IndexServices__service-title-green"},"ENTÉRATE DE NUESTROS CURSOS"),s.a.createElement("p",{className:"IndexServices__service-description"},"Te ofrecemos una gran variedad de cursos y talleres para padres de familia, población general y profesionales de la salud. Podrás aprender junto con nosotros un poco más de alimentación complementaria, higiene de sueño en niños, alimentación durante el embarazo y la lactancia, alimentación en la vejez, anestesia regional guiada por ecografía, entre otros."))),s.a.createElement("div",{className:"IndexServices__service-wrap"},s.a.createElement("div",{className:"IndexServices__service-wrap-img"},s.a.createElement("img",{src:h.a,className:"IndexServices__service-img"})),s.a.createElement("div",{className:"IndexServices__service-content IndexServices__service-border-blue"},s.a.createElement("h3",{className:"IndexServices__service-title"},"COMPRA Y VENTA DE EQUIPOS"),s.a.createElement("p",{className:"IndexServices__service-description"},"Te ofrecemos productos y accesorios para todos los miembros del hogar, revisa nuestra tienda virtual y elige el producto que más se adapte a tus necesidades."),s.a.createElement(l.Link,{className:"IndexServices__btn IndexServices__btn-blue-sm",to:"/contactanos/"}," compra"))))},n}(s.a.Component),E=t("TdUE");a.default=function(){return s.a.createElement(r.a,null,s.a.createElement(c.a,{title:"Inicio"}),s.a.createElement(m,null),s.a.createElement(f,null),s.a.createElement(E.a,null))}},TdUE:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));t("6kNP"),t("8npG");var n=t("o0o1"),s=t.n(n),r=(t("ls82"),t("pJf4"),t("q1tI")),c=t.n(r),i=(t("Vlhl"),t("Wqda")),o=t.n(i),l=t("0UsM");function m(e,a,t,n,s,r,c){try{var i=e[r](c),o=i.value}catch(l){return void t(l)}i.done?a(o):Promise.resolve(o).then(n,s)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=function(e){var a,t;function n(a){var t;return(t=e.call(this,a)||this).state={form:{name:"",email:"",message:"",phone:"",surname:"Deja este espacio en blanco",address:"Deja este espacio en blanco"},errors:{name:"",email:"",phone:""},display:!1,formStatus:"input"},t.handleFormChange=t.handleFormChange.bind(d(t)),t.sendForm=t.sendForm.bind(d(t)),t.mailService=new l.a,t}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var r=n.prototype;return r.handleFormChange=function(){var e=this.state.form;e[event.target.name]=event.target.value,e.errors=this.mailService.checkErrors(event.target,this.state),this.setState({form:e})},r.changeStatus=function(e){this.setState({formStatus:e})},r.sendForm=function(){var e,a=(e=s.a.mark((function e(){var a,t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.mailService.formIsValid(this.state),t=a.isValid,n=a.errors,this.setState({errors:n}),!t){e.next=7;break}return this.changeStatus("loading"),e.next=6,this.mailService.sendForm("Desde el formulario de contacto.",this.state.form);case 6:this.changeStatus("sent");case 7:case"end":return e.stop()}}),e,this)})),function(){var a=this,t=arguments;return new Promise((function(n,s){var r=e.apply(a,t);function c(e){m(r,n,s,c,i,"next",e)}function i(e){m(r,n,s,c,i,"throw",e)}c(void 0)}))});return function(){return a.apply(this,arguments)}}(),r.render=function(){return c.a.createElement("div",{className:"contactus"},c.a.createElement("div",{className:"sent"==this.state.formStatus?"contactus__sucess":"hide"},c.a.createElement("div",{className:"contactus__sucess-wrap"},c.a.createElement("div",{className:"contactus__sucess-content"},c.a.createElement("h1",{className:"contactus__sucess-title"},"¡Gracias por contactarnos!"),c.a.createElement("p",{className:"contactus__sucess-description"},"Nos comunicaremos lo más pronto posible con usted.")))),c.a.createElement("div",{className:"loading"==this.state.formStatus?"contactus__loading":"hide"},c.a.createElement("div",{className:"contactus__loading-wrap"},c.a.createElement("img",{className:"contactus__loading-img",src:o.a,alt:""}))),c.a.createElement("div",{className:"input"==this.state.formStatus?"contactus__wrap":"hide"},c.a.createElement("h3",{className:"contactus__title"},"CONTÁCTANOS"),c.a.createElement("form",{className:"contactus__form"},c.a.createElement("label",{className:"contactus__label"},"Nombre"),c.a.createElement("input",{className:"contactus__input",type:"text",name:"name",value:this.state.form.name,onChange:this.handleFormChange,required:!0}),c.a.createElement("p",{className:""!=this.state.errors.name?"contactus__error-msg":"hide"},this.state.errors.name),c.a.createElement("label",{className:"contactus__label"},"Email"),c.a.createElement("input",{className:"contactus__input",type:"email",name:"email",value:this.state.form.email,onChange:this.handleFormChange,required:!0}),c.a.createElement("p",{className:""!=this.state.errors.email?"contactus__error-msg":"hide"},this.state.errors.email),c.a.createElement("label",{className:"contactus__label"},"Teléfono"),c.a.createElement("input",{className:"contactus__input",type:"text",name:"phone",value:this.state.form.phone,onChange:this.handleFormChange,required:!0}),c.a.createElement("p",{className:""!=this.state.errors.phone?"contactus__error-msg":"hide"},this.state.errors.phone),c.a.createElement("label",{className:"contactus__label"},"Mensaje"),c.a.createElement("textarea",{className:"contactus__textarea",name:"message",value:this.state.form.message,onChange:this.handleFormChange}),c.a.createElement("input",{className:"contactus__phone",value:this.state.form.address,onChange:this.handleFormChange}),c.a.createElement("input",{onChange:this.handleFormChange,value:this.state.form.surname,style:this.state.display?{}:{display:"none"}}),c.a.createElement("button",{type:"button",className:"contactus__btn",onClick:this.sendForm},"Enviar"))))},n}(c.a.Component)},VNdk:function(e,a,t){},Vlhl:function(e,a,t){},WSZw:function(e,a,t){e.exports=t.p+"static/secondBanner-0489858f9db56c0f8d9d390c05bfde7a.png"},aT6C:function(e,a,t){},dMuJ:function(e,a,t){e.exports=t.p+"static/banner-ae6b5f84b390dd2605fa076f27affb04.png"},wmCt:function(e,a,t){e.exports=t.p+"static/thirdBanner-10c8e18626ee2f12b880e8dad071b163.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-329876746ac286444fd6.js.map