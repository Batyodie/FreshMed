let accordion = document.querySelector('.accordion');
let accordionSingle = document.querySelector('.accordion');
let contentStyle = document.querySelector('.accordion__content');
let titleSearch = document.querySelector('.accordion__title_search');
let items = accordion.querySelectorAll('.accordion__item');
let title = document.querySelectorAll('.accordion__title');
let border = document.querySelector('.menu__link_border_active')

function toggleAccordion() {
    let thisItem = titleSearch.parentNode;
    items.forEach(item => {
        if (thisItem == item ) {
            // if this item is equal to the clicked item, open it.
            thisItem.classList.toggle('accordion_active');
            border.classList.toggle('accordion_active_border');
            contentStyle.classList.toggle('accordion__content_active_style')
            return;
        }
        // otherwise, remove the open class
        item.classList.remove('accordion_active');
        border.classList.remove('accordion_active_border');

    });
}
accordionSingle.addEventListener('click', toggleAccordion)
