!function(e){function t(t){for(var o,r,c=t[0],i=t[1],s=t[2],u=0,m=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&m.push(a[r][0]),a[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);for(d&&d(t);m.length;)m.shift()();return l.push.apply(l,s||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],o=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(o=!1)}o&&(l.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},a={0:0},l=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var d=i;l.push([123,1]),n()}({123:function(e,t,n){n(124),e.exports=n(322)},310:function(e,t,n){},311:function(e,t,n){var o=n(312),a=new o("SourceSansPro-Regular",{weight:400}),l=new o("urceSansPro-Bold",{weight:500});a.load().then((function(){document.documentElement.className+=" fonts-loaded"}),(function(){document.documentElement.className+=" fonts-unavailable"})),l.load().then((function(){document.documentElement.className+=" fonts-loaded"}),(function(){document.documentElement.className+=" fonts-unavailable"}))},313:function(e,t){a("load",(function(){n=document.getElementsByClassName("lazy2")})),a("load",o),a("scroll",o);var n=[];function o(){for(var e=0;e<n.length;e++)t=n[e],o=void 0,(o=t.getBoundingClientRect()).bottom>=0&&o.right>=0&&o.top<=(window.innerHeight||document.documentElement.clientHeight)&&o.left<=(window.innerWidth||document.documentElement.clientWidth)&&n[e].getAttribute("data-src")&&(n[e].src=n[e].getAttribute("data-src"),n[e].removeAttribute("data-src"));var t,o;n=Array.prototype.filter.call(n,(function(e){return e.getAttribute("data-src")}))}function a(e,t){window.addEventListener?window.addEventListener(e,t):window.attachEvent("on"+e,t)}},314:function(e,t){function n(e,t,n,o,a,l,r){try{var c=e[l](r),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(o,a)}window.addEventListener("load",(function(){for(var e=document.querySelectorAll("svg[data-url]"),t=e.length,n=0;n<t;++n){var a=e[n].getAttribute("data-url");e[n].removeAttribute("data-url"),o(a,e[n])}}));var o=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,n){var o,a,l,r,c,i,s,d,u,m,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return o=e.sent,e.next=5,o.text();case 5:if(a=e.sent,l=new DOMParser,r=l.parseFromString(a,"image/svg+xml"),(c=r.getElementsByTagName("svg")).length){for(c=c[0],i=c.attributes,s=i.length,d=0;d<s;++d)if(i[d].specified)if("class"===i[d].name)for(u=i[d].value.replace(/\s+/g," ").trim().split(" "),m=u.length,f=0;f<m;++f)n.classList.add(u[f]);else n.setAttribute(i[d].name,i[d].value);for(;c.childNodes.length;)n.appendChild(c.childNodes[0])}case 10:case"end":return e.stop()}}),e)})),function(){var t=this,o=arguments;return new Promise((function(a,l){var r=e.apply(t,o);function c(e){n(r,a,l,c,i,"next",e)}function i(e){n(r,a,l,c,i,"throw",e)}c(void 0)}))});return function(e,n){return t.apply(this,arguments)}}()},315:function(e,t){window.$={}},316:function(e,t){function n(){}function o(e){var t=document.createElement("div");return t.classList.add("vmodal"),t.insertAdjacentHTML("afterbegin","\n    ".concat(e.shadow?'<div class="modal-overlay" data-close="true">':'<div class="modal-overlay modal-overlay_shadow_none" data-close="true">','\n      <div class="modal-window" style="max-width: ').concat(e.maxWidth||"600px",'">\n        ').concat(e.headerBlock?'<div class="modal-header modal-header_low-height_none">':'<div style="display: none" class="modal-header modal-header_low-height_none">','\n          <span class="modal-title">').concat(e.title||"","</span>\n          ").concat(e.closable?'<span class="modal-close" data-close="true">&times;</span>':"",'\n        </div>\n        <div class="modal-body" data-content>\n          ').concat(e.content||"","\n        </div>\n      </div>\n    </div>\n  ")),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(0===e.length)return document.createElement("div");var t=document.createElement("div");return t.classList.add("modal-footer"),e.forEach((function(e){var o=document.createElement("button");o.textContent=e.text,o.classList.add("btn-modal"),o.classList.add("btn-modal-".concat(e.type||"secondary")),o.onclick=e.handler||n,t.appendChild(o)})),t}(e.footerButtons).appendAfter(t.querySelector("[data-content]")),document.body.appendChild(t),t}Element.prototype.appendAfter=function(e){e.parentNode.insertBefore(this,e.nextSibling)},$.modal=function(e){var t=o(e),n=!1,a=!1,l={open:function(){if(a)return console.log("Modal is destroyed");!n&&t.classList.add("open")},close:function(){n=!0,t.classList.remove("open"),t.classList.add("hide"),setTimeout((function(){t.classList.remove("hide"),n=!1,"function"==typeof e.onClose&&e.onClose()}),200)}},r=function(e){e.target.dataset.close&&l.close()};return t.addEventListener("click",r,{passive:!0}),Object.assign(l,{destroy:function(){t.parentNode.removeChild(t),t.removeEventListener("click",r),a=!0},setContent:function(e){t.querySelector("[data-content]").innerHTML=e}})}},317:function(e,t){var n=document.querySelectorAll(".header__icon"),o=$.modal({closable:!1,shadow:!1,content:'\n    <a class="header__link">м. Запоріжжя,</a>\n    <a class="header__link">пр-т Соборний, 94</a>\n  ',width:"172px"}),a=$.modal({closable:!1,shadow:!1,content:'\n    <a href="tel:+380635008822" class="header__link">+38 063 500 88 22 </a>\n    <br>\n    <a href="tel:+380955008822" class="header__link">+38 095 500 88 22</a>\n    <br>\n    <a href="tel:+380975008822" class="header__link">+38 097 500 88 22</a>\n  ',width:"172px"}),l=$.modal({closable:!1,shadow:!1,content:'\n   <a href="mailto:info@freshmed.com.ua" aria-label="mail" class="header__link">info@freshmed.com.ua</a>\n  ',width:"172px"}),r=$.modal({closable:!1,shadow:!1,content:'\n    <a class="header__link">пн-пт  8.00 - 19.00</a>\n    <br>\n    <a class="header__link">сб 9.00 - 17.00 </a>\n  ',width:"172px"});window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),n.forEach((function(e){e.addEventListener("click",(function(){"address"===e.getAttribute("data-btn")?o.open():"number"===e.getAttribute("data-btn")?a.open():"email"===e.getAttribute("data-btn")?l.open():"time"===e.getAttribute("data-btn")?r.open():console.log("error")}),{passive:!0})}))},318:function(e,t){var n=document.querySelector(".burger-btn"),o=document.querySelector(".menu__mobile"),a=document.querySelector(".menu__list-wrapper");n.addEventListener("click",(function(){this.classList.toggle("close"),a.classList.toggle("menu_overlay"),o.classList.toggle("menu__mobile_transition_open"),o.style.transition="all 0.3s ease-in-out"}),{passive:!0})},319:function(e,t){var n=document.querySelector(".select-value"),o=document.querySelector(".select"),a=document.querySelector(".select-option"),l=document.querySelector(".select-option .select__item").innerText,r=document.querySelector(".select__icon");n.innerText=l;var c=!1;function i(){c=!c}function s(){a.className="select-option",c&&(a.classList.add("select-option-on"),a.className="select-option select-option-on")}o.addEventListener("click",(function(){r.style.transform="rotate(-58deg)",r.style.top="6px",i(),s()})),document.querySelectorAll(".select-option li").forEach((function(e){e.addEventListener("click",(function(){l=this.innerText,n.innerText=l,i(),s(),r.style.transform="rotate(-124deg)",r.style.top="3px"}))}))},320:function(e,t){var n=document.querySelector(".accordion"),o=document.querySelector(".accordion"),a=document.querySelector(".accordion__content"),l=document.querySelector(".accordion__title_search"),r=n.querySelectorAll(".accordion__item"),c=(document.querySelectorAll(".accordion__title"),document.querySelector(".menu__link_border_active"));o.addEventListener("click",(function(){var e=l.parentNode;r.forEach((function(t){if(e==t)return e.classList.toggle("accordion_active"),c.classList.toggle("accordion_active_border"),void a.classList.toggle("accordion__content_active_style");t.classList.remove("accordion_active"),c.classList.remove("accordion_active_border")}))}))},321:function(e,t){var n=document.querySelector(".call-form"),o=document.querySelector(".call-form__input-fullName"),a=document.querySelector(".call-form__input-tel");document.querySelector(".call-form__input-comment");function l(e,t){var n=e.parentElement,o=n.querySelector("small");n.className="call-form__input-container error",o.innerText=t}function r(e){e.parentElement.className="call-form__input-container success"}n.addEventListener("submit",(function(e){e.preventDefault(),function(){var e=o.value.trim(),t=a.value.trim();""===e?l(o,"Повне ім’я не може бути порожнім"):r(o);""===t?l(a,"пустий номер не може бути"):!function(e){return/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(e)}(t)?l(a,"Недійсне число"):r(a)}()}))},322:function(e,t,n){"use strict";n.r(t);n(310),n(311),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320);var o=n(60);new o.a(".glide",{hoverpause:!0,keyboard:!0}).mount(),new o.a(".glide-cards",{hoverpause:!0,keyboard:!0,perView:1,gap:30,breakpoints:{600:{gap:0}}}).mount();n(321);var a=document.querySelectorAll(".btn__modal"),l=$.modal({closable:!0,headerBlock:!0,shadow:!0,content:'\n   <form id="main-form" method="post" action="/index" class="call-form-modal form__wrapper form__wrapper_padding_top">\n            \x3c!-- header form --\x3e\n            <header class="section-header  section-header_padding_5  services__header">\n                \x3c!--form header title--\x3e\n                <div class="section-header__wrapper-title services__header-title">\n                    <h2 class="section-header__title services__title">\n                        Запис до лікаря онлайн\n                    </h2>\n                </div>\n                \x3c!--form header copy--\x3e\n                <div class="section-header__wrapper-copy services__header-copy">\n                    <p class="section-header__copy services__copy">\n                        Поля, відмічені зірочкою, обов’язкові для заповнення\n                    </p>\n                </div>\n            </header>\n            <div class="call-form-modal__body">\n                \x3c!--full name input--\x3e\n                <div class="call-form-modal__input-container">\n                    <label for="full-name" class="call-form-modal__input-label"><span class="call-form-modal__p" data-tooltip="Введіть своє ім\'я, щоб ми могли зв\'язатися з вами">Введіть Ім’я та фамілію*</span></label>\n                    <input id="full-name" name="name" type="text" class="call-form-modal__input call-form-modal__input-fullName" placeholder="Ірина Сергієнко" >\n                   <i class="fas fa-check-circle">\n                        <svg class="icon-form" viewBox="0 0 512 512"><defs/><path class="icon-form" d="M256 0a256 256 0 101 513 256 256 0 00-1-513zm130 202L247 340a21 21 0 01-30 0l-69-69a21 21 0 1130-30l54 54 124-123a21 21 0 1130 30zm0 0"/></svg>\n                    </i>\n                    <i class="fas fa-exclamation-circle">\n                        <svg class="icon-form" viewBox="0 0 439 439"><defs/><path d="M409 109a218 218 0 00-300-80 218 218 0 00-80 300 218 218 0 00300 80 218 218 0 0080-300zM256 356c0 3-1 5-3 7s-4 2-6 2h-55l-6-2c-2-2-3-5-3-7v-54c0-3 1-5 3-7 1-2 4-3 6-3h55c2 0 5 1 6 3 2 2 3 4 3 7v54zm-1-98c0 2-1 3-3 5l-6 2h-53l-7-2c-2-2-3-3-3-5l-5-177c0-3 1-4 3-6l7-2h63l7 2 2 6-5 177z"/></svg>\n                    </i>\n                    <small>Error message</small>\n                </div>\n                \x3c!-- number input --\x3e\n                <div class="call-form-modal__input-container">\n                    <label for="full-number" class="call-form-modal__input-label"><span class="call-form-modal__p" data-tooltip="Введіть свій номер, щоб ми могли передзвонити вам">Введіть телефон*</span></label>\n                    <input id="full-number" name="tel" type="tel" class="call-form-modal__input call-form-modal__input-tel" placeholder="+380 (67) 345-18-14" >\n                     <i class="fas fa-check-circle">\n                        <svg class="icon-form" viewBox="0 0 512 512"><defs/><path class="icon-form" d="M256 0a256 256 0 101 513 256 256 0 00-1-513zm130 202L247 340a21 21 0 01-30 0l-69-69a21 21 0 1130-30l54 54 124-123a21 21 0 1130 30zm0 0"/></svg>\n                    </i>\n                    <i class="fas fa-exclamation-circle">\n                        <svg class="icon-form" viewBox="0 0 439 439"><defs/><path d="M409 109a218 218 0 00-300-80 218 218 0 00-80 300 218 218 0 00300 80 218 218 0 0080-300zM256 356c0 3-1 5-3 7s-4 2-6 2h-55l-6-2c-2-2-3-5-3-7v-54c0-3 1-5 3-7 1-2 4-3 6-3h55c2 0 5 1 6 3 2 2 3 4 3 7v54zm-1-98c0 2-1 3-3 5l-6 2h-53l-7-2c-2-2-3-3-3-5l-5-177c0-3 1-4 3-6l7-2h63l7 2 2 6-5 177z"/></svg>\n                    </i>\n                    <small>Error message</small>\n                </div>\n                \x3c!-- comment input --\x3e\n                <div class="call-form-modal__input-container">\n                    <label for="input-comments" class="call-form-modal__input-label call-form-modal__input-label_margin_bottom"><span class="call-form-modal__p" data-tooltip="Ви можете залишити уточнююче коментар">Коментар*</span></label>\n                    <textarea id="input-comments" name="comment" type="text" class="call-form-modal__input call-form-modal__comment call-form-modal__input-comment"></textarea>\n                </div>\n            </div>\n            \x3c!-- footer form --\x3e\n            <footer class="call-form-modal__footer">\n                \x3c!-- button submit --\x3e\n                <button class="btn btn__call-form_size">\n                    <span class="btn__body btn__body-call-form__font">\n                        Записатися онлайн\n                </span>\n                </button>\n            </footer>\n        </form>\n  ',maxWidth:"750px"});a.forEach((function(e){e.addEventListener("click",(function(){"btn-modal"===e.getAttribute("data-btn")?l.open():console.log("error")}))}));var r=l,c=document.querySelector(".call-form-modal"),i=document.querySelector(".call-form-modal__input-fullName"),s=document.querySelector(".call-form-modal__input-tel"),d=!1;function u(e,t){var n=e.parentElement,o=n.querySelector("small");n.className="call-form__input-container error",o.innerText=t}function m(e){if(e.parentElement.className="call-form__input-container success",d){r.close();var t=$.modal({closable:!0,headerBlock:!0,title:"Ваша заявка прийнята",shadow:!0,content:"<p>Дякую за запит, ми скоро з вами зв'яжемося!</p>",footerButtons:[{text:"Ок",type:"primary",handler:function(){t.destroy()}},{text:"Cancel",type:"danger",handler:function(){t.destroy()}}],maxWidth:"320px"});t.open()}}c.addEventListener("submit",(function(e){e.preventDefault(),function(){var e=i.value.trim(),t=s.value.trim();""===e?(u(i,"Повне ім’я не може бути порожнім"),d=!1):(m(i),d=!0);""===t?u(s,"пустий номер не може бути"):!function(e){return/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(e)}(t)?(u(s,"Недійсне число"),d=!1):(m(s),d=!0)}()}));var f=n(89),p=n.n(f);new p.a,new p.a({container:document.querySelector(".scrollingPanel")})}});