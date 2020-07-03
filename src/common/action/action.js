import Glide from '@glidejs/glide'

new Glide('.glide-cards', {
    hoverpause: true,
    keyboard: true,
    perView: 1,
    gap: 30,
    breakpoints: {

        600: {
            gap: 0,
        }
    }
}).mount()
