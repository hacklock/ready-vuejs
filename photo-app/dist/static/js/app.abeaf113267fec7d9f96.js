webpackJsonp([1],[,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(10),s=i(11),n=i.n(s),r=i(9),c=i.n(r);a.a.use(n.a),a.a.config.productionTip=!1;var l=new a.a;e.default=l,new a.a({el:"#app",template:"<App/>",components:{App:c.a}})},,,,,,,,function(t,e,i){i(41);var a=i(2)(i(30),i(56),null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,,,,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(12),s=i.n(a),n=i(1),r=i(48),c=i.n(r),l=i(51),o=i.n(l),u=i(50),d=i.n(u),p=i(47),f=i.n(p),v=i(46),h=i.n(v),m=i(49),x=i.n(m);e.default={filters:{currency:function(t){if(null!==t)return t.toLocaleString("ru-RU",{style:"currency",currency:"RUB",maximumSignificantDigits:4})}},data:function(){return{dialog:!1,nextShow:!0,orderShow:!1,snackbar:!1,warning:"",fixed:!0,current:"step1",active:1,order:{time:{title:null,price:0},service:{title:null,price:0},cert:{title:null,price:0},shipping:{title:null,price:0},greeting:null,sum:null,customer:{name:null,phone:null,email:null}}}},methods:{onNext:function(){return 0===this.order.time.price&&"step1"===this.current?(this.warning="Выберите длительность фотосессии",void(this.snackbar=!0)):0===this.order.service.price&&"step2"===this.current?(this.warning="Выберите дополнительные услуги",void(this.snackbar=!0)):0===this.order.cert.price&&"step3"===this.current?(this.warning="Выберите сертификат",void(this.snackbar=!0)):0===this.order.shipping.price&&"step5"===this.current?(this.warning="Выберите тип доставки",void(this.snackbar=!0)):(this.active<6&&(this.active+=1,this.current="step"+this.active),void(6===this.active&&(this.nextShow=!1,this.orderShow=!0)))},onPrev:function(){6===this.active&&(this.nextShow=!0,this.orderShow=!1),this.active>1&&(this.active-=1,this.current="step"+this.active)},onOrder:function(){if((null===this.order.customer.name||null===this.order.customer.phone)&&"step6"===this.current)return this.warning="Необходимо указать ваши Ф.И.О.",void(this.snackbar=!0);this.dialog=!0},onClean:function(){for(var t in this.order)delete this.order[t]},onSend:function(){var t=this;s.a.post("https://jsonplaceholder.typicode.com/posts",this.order).then(function(t){console.log(t)}).then(function(){t.onClearing()}).then(function(){n.default.$emit("clear"),n.default.$emit("clrCustomer")}).then(function(){t.onBack()}).catch(function(t){console.log(t)})},onClearing:function(){this.order.time.price=0,this.order.service.price=0,this.order.cert.price=0,this.order.shipping.price=0},onBack:function(){this.dialog=!1,this.active=1,this.current="step"+this.active,this.orderShow=!1,this.nextShow=!0},onClose:function(){this.onSend()}},computed:{sum:function(){var t=this.order.time.price+this.order.service.price+this.order.cert.price+this.order.shipping.price;return this.order.sum=t,t}},components:{step1:c.a,step2:o.a,step3:d.a,step4:f.a,step5:h.a,step6:x.a},created:function(){var t=this;n.default.$on("time",function(e){t.order.time.title=e.value,t.order.time.price=e.price}),n.default.$on("service",function(e){t.order.service.title=e.title,t.order.service.price=e.price}),n.default.$on("cert",function(e){t.order.cert.title=e.title,t.order.cert.price=e.price}),n.default.$on("greeting",function(e){t.order.greeting=e}),n.default.$on("shipping",function(e){t.order.shipping.title=e.title,t.order.shipping.price=e.price}),n.default.$on("name",function(e){t.order.customer.name=e}),n.default.$on("phone",function(e){t.order.customer.phone=e}),n.default.$on("email",function(e){t.order.customer.email=e})}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(1);e.default={name:"five",data:function(){return{title:"Как сертификат попадет к вам?",active:"",shippings:[{name:"shipping1",title:"Самовывоз",price:500},{name:"shipping2",title:"Доставка в отделение почты",price:600}]}},methods:{onSelect:function(t){a.default.$emit("shipping",t),this.active=t.name}},created:function(){var t=this;a.default.$on("clear",function(){t.active=""})}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(1);e.default={name:"four",data:function(){return{title:"Индивидуальное поздравление",subtitle:"(мы обязательно напишем его на сертификате)",greeting:null}},watch:{greeting:function(){a.default.$emit("greeting",this.greeting)}},created:function(){var t=this;a.default.$on("clear",function(){t.greeting=""})}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(1);e.default={name:"one",filters:{pluralize:function(t){var e=null;switch(t){case 1:e=t+" час";break;case 1.5:case 2:case 3:e=t+" часа"}return e}},data:function(){return{title:"Сколько будет длиться фотосессия?",active:"",times:[{name:"time1",value:1,price:1300},{name:"time2",value:1.5,price:1900},{name:"time3",value:2,price:2400},{name:"time4",value:3,price:3500}]}},methods:{onSelect:function(t){a.default.$emit("time",t),this.active=t.name}},created:function(){var t=this;a.default.$on("clear",function(){t.active=""})}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(1);e.default={name:"six",data:function(){return{title:"Оформление заказа",name:"",phone:"",email:""}},watch:{name:function(){a.default.$emit("name",this.name)},phone:function(){a.default.$emit("phone",this.phone)},email:function(){a.default.$emit("email",this.email)}},created:function(){var t=this;a.default.$on("clrCustomer",function(){t.name="",t.phone="",t.email=""})}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(1);e.default={name:"three",data:function(){return{title:"Формат сертификата",active:"",certs:[{name:"cert1",title:"желтый кролик",price:1e3},{name:"cert2",title:"классика в рамочке",price:1200}]}},methods:{onSelect:function(t){a.default.$emit("cert",t),this.active=t.name}},created:function(){var t=this;a.default.$on("clear",function(){t.active=""})}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(1);e.default={name:"two",data:function(){return{title:"Добавим дополнительные услуги?",active:"",services:[{name:"service1",title:"макияж",price:200},{name:"service2",title:"аренда платья",price:300},{name:"service3",title:"прическа",price:400},{name:"service4",title:"хаски",price:500}]}},methods:{onSelect:function(t){a.default.$emit("service",t),this.active=t.name}},created:function(){var t=this;a.default.$on("clear",function(){t.active=""})}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,i){i(43);var a=i(2)(i(31),i(58),"data-v-ceaf638e",null);t.exports=a.exports},function(t,e,i){i(39);var a=i(2)(i(32),i(54),"data-v-55dfeaa6",null);t.exports=a.exports},function(t,e,i){i(38);var a=i(2)(i(33),i(53),"data-v-2ef513a2",null);t.exports=a.exports},function(t,e,i){i(42);var a=i(2)(i(34),i(57),"data-v-96bc32aa",null);t.exports=a.exports},function(t,e,i){i(40);var a=i(2)(i(35),i(55),"data-v-5f8bc927",null);t.exports=a.exports},function(t,e,i){i(37);var a=i(2)(i(36),i(52),"data-v-00ed2715",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"two",attrs:{fluid:"fluid","grid-list-sm":"grid-list-sm"}},[i("v-layout",{attrs:{row:"row",wrap:"wrap"}},[i("header",{staticClass:"text-xs-center teal lighten-1 py-3 mb-1 two__header"},[i("h2",{staticClass:"display-1 mb-0 white--text two__title"},[t._v(t._s(t.title))])]),t._l(t.services,function(e){return i("v-flex",{key:e,attrs:{xs12:"xs12",sm6:"sm6"}},[i("v-card",{staticClass:"two__card py-4",class:{"teal lighten-2 white--text":t.active===e.name},on:{click:function(i){t.onSelect(e)}}},[i("v-card-text",{staticClass:"text-xs-center"},[i("div",{staticClass:"headline"},[t._v(t._s(e.title))])])],1)],1)})],2)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"one",attrs:{fluid:"fluid","grid-list-sm":"grid-list-sm"}},[i("v-layout",{attrs:{row:"row",wrap:"wrap"}},[i("header",{staticClass:"text-xs-center teal lighten-1 py-3 mb-2 one__header"},[i("h2",{staticClass:"display-1 mb-0 white--text one__title"},[t._v(t._s(t.title))])]),t._l(t.times,function(e){return i("v-flex",{key:e,attrs:{xs12:"xs12",sm6:"sm6"}},[i("v-card",{staticClass:"one__card py-4",class:{"teal lighten-2 white--text":t.active===e.name},on:{click:function(i){t.onSelect(e)}}},[i("v-card-text",{staticClass:"text-xs-center"},[i("div",{staticClass:"headline"},[t._v(t._s(t._f("pluralize")(e.value)))])])],1)],1)})],2)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"four"},[i("v-layout",{attrs:{row:"row",wrap:"wrap"}},[i("header",{staticClass:"text-xs-center teal lighten-1 py-3 mb-1 four__header"},[i("h2",{staticClass:"four__title display-1 mb-0 white--text"},[t._v(t._s(t.title))]),i("h3",{staticClass:"four__subtitle title mb-0 white--text"},[t._v(t._s(t.subtitle))])]),i("v-flex",{attrs:{xs12:"xs12"}},[i("v-text-field",{attrs:{name:"greeting",label:"Ваше поздравление здесь ...",rows:"7","multi-line":"multi-line","hide-details":"hide-details"},model:{value:t.greeting,callback:function(e){t.greeting=e},expression:"greeting"}})],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"three",attrs:{fluid:"fluid","grid-list-sm":"grid-list-sm"}},[i("v-layout",{attrs:{row:"row",wrap:"wrap"}},[i("header",{staticClass:"text-xs-center teal lighten-1 py-3 mb-1 three__header"},[i("h2",{staticClass:"display-1 mb-0 white--text three__title"},[t._v(t._s(t.title))])]),t._l(t.certs,function(e){return i("v-flex",{key:e,attrs:{xs12:"xs12"}},[i("v-card",{staticClass:"three__card py-4",class:{"teal lighten-2 white--text":t.active===e.name},on:{click:function(i){t.onSelect(e)}}},[i("v-card-text",{staticClass:"text-xs-center"},[i("div",{staticClass:"headline"},[t._v(t._s(e.title))])])],1)],1)})],2)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{staticClass:"app"},[i("v-container",[i("v-layout",{staticClass:"mb-2",attrs:{row:"row",wrap:"wrap"}},t._l(6,function(e){return i("v-flex",{key:e,staticClass:"app__tabs",attrs:{xs2:"xs2"}},[i("v-card",{class:{"teal darken-1 white--text":t.active===e},attrs:{flat:"flat"}},[i("v-card-text",{staticClass:"text-xs-center"},[i("span",{staticClass:"hidden-xs-only app__caption"},[t._v("step "+t._s(e))]),i("span",{staticClass:"hidden-sm-and-up app__caption"},[t._v(t._s(e))])])],1)],1)})),i("v-layout",{attrs:{row:"row",wrap:"wrap"}},[i("v-flex",{staticClass:"mb-2",attrs:{xs12:"xs12",md8:"md8"}},[i("v-slide-x-transition",{attrs:{mode:"out-in"}},[i("keep-alive",[i(t.current,{tag:"component"})],1)],1)],1),i("v-flex",{staticClass:"mb-2",attrs:{xs12:"xs12",md4:"md4"}},[i("v-card",{staticClass:"teal lighten-4 app__output"},[i("v-card-text",{staticClass:"text-xs-center"},[i("h2",{staticClass:"display-2 mb-0"},[t._v(t._s(t._f("currency")(t.sum)))])])],1)],1)],1),i("v-layout",{staticClass:"app__btns",attrs:{row:"row",wrap:"wrap"}},[i("v-flex",{attrs:{xs12:"xs12",sm3:"sm3"}},[i("v-btn",{staticClass:"app__btn teal",attrs:{dark:"dark"},nativeOn:{click:function(e){t.onPrev()}}},[t._v("prev")])],1),t.nextShow?i("v-flex",{staticClass:"text-sm-right",attrs:{xs12:"xs12",sm3:"sm3","offset-sm6":"offset-sm6"}},[i("v-btn",{staticClass:"app__btn teal",attrs:{dark:"dark"},nativeOn:{click:function(e){t.onNext()}}},[t._v("next")])],1):t._e(),t.orderShow?i("v-flex",{staticClass:"text-sm-right",attrs:{xs12:"xs12",sm3:"sm3","offset-sm6":"offset-sm6"}},[i("v-btn",{staticClass:"app__btn indigo",attrs:{dark:"dark"},nativeOn:{click:function(e){e.stopPropagation(),t.onOrder()}}},[t._v("make order")])],1):t._e()],1),i("v-snackbar",{attrs:{top:"top"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(t._s(t.warning)),i("v-btn",{staticClass:"pink--text",attrs:{flat:"flat"},nativeOn:{click:function(e){t.snackbar=!1}}},[t._v("close")])],1),i("v-dialog",{attrs:{persistent:"persistent"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[t._v("Спасибо за Ваш заказ!")]),i("v-card-text",{staticClass:"text-xs-center"},[i("p",{staticClass:"mb-2"},[t._v("Ваш заказ успешно отправлен.")]),i("p",{staticClass:"mb-0"},[t._v("Ожидайте звонок менеджера с подтверждением Вашего заказа.")])]),i("v-card-actions",[i("v-spacer"),i("v-btn",{staticClass:"teal--text darken-1",attrs:{flat:"flat"},nativeOn:{click:function(e){t.onClose()}}},[t._v("назад")])],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"six",attrs:{fluid:"fluid"}},[i("header",{staticClass:"text-xs-center teal lighten-1 py-3 mb-1 six__header"},[i("h2",{staticClass:"display-1 mb-0 white--text six__title"},[t._v(t._s(t.title))])]),i("v-layout",{attrs:{row:"row",wrap:"wrap"}},[i("v-flex",{attrs:{xs12:"xs12",sm4:"sm4"}},[i("v-subheader",[t._v("ФИО")])],1),i("v-flex",{attrs:{xs12:"xs12",sm8:"sm8"}},[i("v-text-field",{attrs:{name:"name",label:"name","prepend-icon":"account_box",required:"required","hide-details":"hide-details"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1),i("v-layout",{attrs:{row:"row",wrap:"wrap"}},[i("v-flex",{attrs:{xs12:"xs12",sm4:"sm4"}},[i("v-subheader",[t._v("Номер телефона")])],1),i("v-flex",{attrs:{xs12:"xs12",sm8:"sm8"}},[i("v-text-field",{attrs:{name:"phone",label:"phone","prepend-icon":"phone",required:"required","hide-details":"hide-details"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1)],1),i("v-layout",{attrs:{row:"row",wrap:"wrap"}},[i("v-flex",{attrs:{xs12:"xs12",sm4:"sm4"}},[i("v-subheader",[t._v("E-mail")])],1),i("v-flex",{attrs:{xs12:"xs12",sm8:"sm8"}},[i("v-text-field",{attrs:{name:"email",label:"email","prepend-icon":"email","hide-details":"hide-details"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"five",attrs:{fluid:"fluid","grid-list-sm":"grid-list-sm"}},[i("v-layout",{attrs:{row:"row",wrap:"wrap"}},[i("header",{staticClass:"text-xs-center teal lighten-1 py-3 mb-1 five__header"},[i("h2",{staticClass:"display-1 mb-0 white--text five__title"},[t._v(t._s(t.title))])]),t._l(t.shippings,function(e){return i("v-flex",{key:e,attrs:{xs12:"xs12"}},[i("v-card",{staticClass:"five__card py-4",class:{"teal lighten-2 white--text":t.active===e.name},on:{click:function(i){t.onSelect(e)}}},[i("v-card-text",{staticClass:"text-xs-center"},[i("div",{staticClass:"headline"},[t._v(t._s(e.title))])])],1)],1)})],2)],1)},staticRenderFns:[]}}],[1]);
//# sourceMappingURL=app.abeaf113267fec7d9f96.js.map