/* validation modal call form */
import modalOnline from "@/common/modal-online/modal-online";
const callFormModal = document.querySelector('.call-form-modal')
const fullName = document.querySelector('.call-form-modal__input-fullName')
const tel = document.querySelector('.call-form-modal__input-tel')
let flag = false

callFormModal.addEventListener('submit', e => {
    e.preventDefault()

    checkInputs()

})

function checkInputs() {
    // trim to remove the whitespaces
    const fullNameValue = fullName.value.trim()
    const telValue = tel.value.trim()
    if(fullNameValue === '') {
        setErrorFor(fullName, 'Повне ім’я не може бути порожнім')
        flag = false
    } else {
        setSuccessFor(fullName);
        flag = true
    }

    if(telValue === '') {
        setErrorFor(tel, 'пустий номер не може бути')
    } else if (!isTel(telValue)) {
        setErrorFor(tel, 'Недійсне число')
        flag = false
    } else {
        setSuccessFor(tel);
        flag = true
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
   if (flag) {
       modalOnline.close()
       const popUp = $.modal ({
           closable: true,
           headerBlock: true,
           title: 'Ваша заявка прийнята',
           shadow: true,
           content: `<p>Дякую за запит, ми скоро з вами зв'яжемося!</p>`,
           footerButtons: [
               {text: 'Ок', type: 'primary', handler() {
                       popUp.destroy()
                   }},
               {text: 'Cancel', type: 'danger', handler() {
                       popUp.destroy()                  }}
           ],
           maxWidth: '320px'
       })
       popUp.open()
   }
}

function isTel(tel) {
    return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(tel);
}

