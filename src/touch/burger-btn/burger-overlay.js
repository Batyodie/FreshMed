/* burber btn */
const burgerMenu = document.querySelector('.burger-btn');
const menu = document.querySelector('.menu__mobile');
/* shadow overlay */
const overlay = document.querySelector('.menu__list-wrapper');
burgerMenu.addEventListener('click',function(){
    this.classList.toggle("close");
    overlay.classList.toggle("menu_overlay");
    menu.classList.toggle('menu__mobile_transition_open');
    menu.style.transition = 'all 0.3s ease-in-out';

}, {passive: true});
