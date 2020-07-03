const icon = document.querySelectorAll('.header__icon')
const modalAddress = $.modal({
    closable: false,
    shadow: false,
    content: `
    <a class="header__link">м. Запоріжжя,</a>
    <a class="header__link">пр-т Соборний, 94</a>
  `,
    width: '172px'
})
const modalNumber = $.modal({
    closable: false,
    shadow: false,
    content: `
    <a href="tel:+380635008822" class="header__link">+38 063 500 88 22 </a>
    <br>
    <a href="tel:+380955008822" class="header__link">+38 095 500 88 22</a>
    <br>
    <a href="tel:+380975008822" class="header__link">+38 097 500 88 22</a>
  `,
    width: '172px'
})
const modalEmail = $.modal({
    closable: false,
    shadow: false,
    content: `
   <a href="mailto:info@freshmed.com.ua" aria-label="mail" class="header__link">info@freshmed.com.ua</a>
  `,
    width: '172px'
})
const modalTime = $.modal({
    closable: false,
    shadow: false,
    content: `
    <a class="header__link">пн-пт  8.00 - 19.00</a>
    <br>
    <a class="header__link">сб 9.00 - 17.00 </a>
  `,
    width: '172px'
})
/* polifil forEach */
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}
icon.forEach(function (e) {
    e.addEventListener('click', function ()  {

        if ( e.getAttribute('data-btn') === 'address' ) {
            modalAddress.open()
        }  else if (e.getAttribute('data-btn') === 'number' ) {
            modalNumber.open()
        }
        else if (e.getAttribute('data-btn') === 'email' ) {
            modalEmail.open()
        }
        else if (e.getAttribute('data-btn') === 'time' ) {
            modalTime.open()
        }
        else {
            console.log('error')
        }

    }, {passive: true})
})
