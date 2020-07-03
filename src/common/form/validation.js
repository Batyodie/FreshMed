/* validation  form */
const form = document.querySelector('.call-form')
const fullName = document.querySelector('.call-form__input-fullName')
const tel = document.querySelector('.call-form__input-tel')
const comment = document.querySelector('.call-form__input-comment')

form.addEventListener('submit', e => {
    e.preventDefault()

    checkInputs()

})

function checkInputs() {
    // trim to remove the whitespaces
    const fullNameValue = fullName.value.trim()
    const telValue = tel.value.trim()
    if(fullNameValue === '') {
        setErrorFor(fullName, 'Повне ім’я не може бути порожнім')
    } else {
        setSuccessFor(fullName);
    }

    if(telValue === '') {
        setErrorFor(tel, 'пустий номер не може бути')
    } else if (!isTel(telValue)) {
        setErrorFor(tel, 'Недійсне число')
    } else {
        setSuccessFor(tel);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'call-form__input-container error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'call-form__input-container success';
}

function isTel(tel) {
    return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(tel);
}

