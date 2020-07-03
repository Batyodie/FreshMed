let select = document.querySelector('.select-value')
let selectBlock = document.querySelector('.select')
let option = document.querySelector('.select-option')
let value = document.querySelector('.select-option .select__item').innerText
let icon = document.querySelector('.select__icon')

select.innerText = value;
let optionVisiblity = false;

function toggle() {
    optionVisiblity = !optionVisiblity;
}

function setOptionClass() {
    option.className = "select-option";

    if(optionVisiblity) {
        option.classList.add('select-option-on')
        option.className = "select-option select-option-on"
    }
}

selectBlock.addEventListener('click', function() {
    icon.style.transform = 'rotate(-58deg)'
    icon.style.top = '6px'
    toggle();
    setOptionClass();
})

let optionListItem = document.querySelectorAll('.select-option li');

optionListItem.forEach(function(o) {
    o.addEventListener('click', function() {
        value = this.innerText;
        select.innerText = value;
        toggle();
        setOptionClass();
        icon.style.transform = 'rotate(-124deg)'
        icon.style.top = '3px'
    })
})
