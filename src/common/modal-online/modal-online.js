/* modal window  */
const icon = document.querySelectorAll('.btn__modal')
const modalOnline = $.modal ({
    closable: true,
    headerBlock: true,
    shadow: true,
    content: `
   <form id="main-form" method="post" action="/index" class="call-form-modal form__wrapper form__wrapper_padding_top">
            <!-- header form -->
            <header class="section-header  section-header_padding_5  services__header">
                <!--form header title-->
                <div class="section-header__wrapper-title services__header-title">
                    <h2 class="section-header__title services__title">
                        Запис до лікаря онлайн
                    </h2>
                </div>
                <!--form header copy-->
                <div class="section-header__wrapper-copy services__header-copy">
                    <p class="section-header__copy services__copy">
                        Поля, відмічені зірочкою, обов’язкові для заповнення
                    </p>
                </div>
            </header>
            <div class="call-form-modal__body">
                <!--full name input-->
                <div class="call-form-modal__input-container">
                    <label for="full-name" class="call-form-modal__input-label"><span class="call-form-modal__p" data-tooltip="Введіть своє ім'я, щоб ми могли зв'язатися з вами">Введіть Ім’я та фамілію*</span></label>
                    <input id="full-name" name="name" type="text" class="call-form-modal__input call-form-modal__input-fullName" placeholder="Ірина Сергієнко" >
                   <i class="fas fa-check-circle">
                        <svg class="icon-form" viewBox="0 0 512 512"><defs/><path class="icon-form" d="M256 0a256 256 0 101 513 256 256 0 00-1-513zm130 202L247 340a21 21 0 01-30 0l-69-69a21 21 0 1130-30l54 54 124-123a21 21 0 1130 30zm0 0"/></svg>
                    </i>
                    <i class="fas fa-exclamation-circle">
                        <svg class="icon-form" viewBox="0 0 439 439"><defs/><path d="M409 109a218 218 0 00-300-80 218 218 0 00-80 300 218 218 0 00300 80 218 218 0 0080-300zM256 356c0 3-1 5-3 7s-4 2-6 2h-55l-6-2c-2-2-3-5-3-7v-54c0-3 1-5 3-7 1-2 4-3 6-3h55c2 0 5 1 6 3 2 2 3 4 3 7v54zm-1-98c0 2-1 3-3 5l-6 2h-53l-7-2c-2-2-3-3-3-5l-5-177c0-3 1-4 3-6l7-2h63l7 2 2 6-5 177z"/></svg>
                    </i>
                    <small>Error message</small>
                </div>
                <!-- number input -->
                <div class="call-form-modal__input-container">
                    <label for="full-number" class="call-form-modal__input-label"><span class="call-form-modal__p" data-tooltip="Введіть свій номер, щоб ми могли передзвонити вам">Введіть телефон*</span></label>
                    <input id="full-number" name="tel" type="tel" class="call-form-modal__input call-form-modal__input-tel" placeholder="+380 (67) 345-18-14" >
                     <i class="fas fa-check-circle">
                        <svg class="icon-form" viewBox="0 0 512 512"><defs/><path class="icon-form" d="M256 0a256 256 0 101 513 256 256 0 00-1-513zm130 202L247 340a21 21 0 01-30 0l-69-69a21 21 0 1130-30l54 54 124-123a21 21 0 1130 30zm0 0"/></svg>
                    </i>
                    <i class="fas fa-exclamation-circle">
                        <svg class="icon-form" viewBox="0 0 439 439"><defs/><path d="M409 109a218 218 0 00-300-80 218 218 0 00-80 300 218 218 0 00300 80 218 218 0 0080-300zM256 356c0 3-1 5-3 7s-4 2-6 2h-55l-6-2c-2-2-3-5-3-7v-54c0-3 1-5 3-7 1-2 4-3 6-3h55c2 0 5 1 6 3 2 2 3 4 3 7v54zm-1-98c0 2-1 3-3 5l-6 2h-53l-7-2c-2-2-3-3-3-5l-5-177c0-3 1-4 3-6l7-2h63l7 2 2 6-5 177z"/></svg>
                    </i>
                    <small>Error message</small>
                </div>
                <!-- comment input -->
                <div class="call-form-modal__input-container">
                    <label for="input-comments" class="call-form-modal__input-label call-form-modal__input-label_margin_bottom"><span class="call-form-modal__p" data-tooltip="Ви можете залишити уточнююче коментар">Коментар*</span></label>
                    <textarea id="input-comments" name="comment" type="text" class="call-form-modal__input call-form-modal__comment call-form-modal__input-comment"></textarea>
                </div>
            </div>
            <!-- footer form -->
            <footer class="call-form-modal__footer">
                <!-- button submit -->
                <button class="btn btn__call-form_size">
                    <span class="btn__body btn__body-call-form__font">
                        Записатися онлайн
                </span>
                </button>
            </footer>
        </form>
  `,
    maxWidth: '750px'
})
icon.forEach(function (e) {
    e.addEventListener('click', function () {

        if (e.getAttribute('data-btn') === 'btn-modal') {
            modalOnline.open()
        }
        else {
            console.log('error')
        }
    })
})
export default  modalOnline
