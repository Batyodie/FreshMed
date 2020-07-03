import './styles.css'
import './common/optimisation/fontFaceObserver'
import './common/optimisation/laze-load2'
import './common/optimisation/svgLazy-load'
import './common/modal/base'
import './common/modal/modal'
import './touch/promp-modal/promp-modal'
import './touch/burger-btn/burger-overlay'
import './common/select/select'
import './common/accordion/accordion'
import './common/gilide-slider/glide-slider'
import './common/action/action'
import './common/form/validation'
import './common/modal-online/modal-online'
import './common/modal-online/validation'
import LazyLoad from "vanilla-lazyload";

const pageLazyLoad = new LazyLoad

const myLazyLoad = new LazyLoad({
    container: document.querySelector(".scrollingPanel")
});

