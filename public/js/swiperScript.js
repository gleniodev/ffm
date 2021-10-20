
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    on: {
        slideChange: function () {
            const index_currentSlide = swiper.realIndex;
            const currentSlide = swiper.slides[index_currentSlide]
            const targetData = currentSlide.getAttribute('data-target')

            const gloriosos = document.getElementById('wrapper-0');
            const dolorosos = document.getElementById('wrapper-1');
            const gozosos = document.getElementById('wrapper-2');
            const luminosos = document.getElementById('wrapper-3');

            switch (targetData) {
                case 'wrapper-0':
                    gloriosos.style.display = 'flex';
                    dolorosos.style.display = 'none';
                    gozosos.style.display = 'none';
                    luminosos.style.display = 'none';
                    gloriosos.scrollTo(0,0);
                    break;

                case 'wrapper-1':
                    gloriosos.style.display = 'none';
                    dolorosos.style.display = 'flex';
                    gozosos.style.display = 'none';
                    luminosos.style.display = 'none';
                    dolorosos.scrollTo(0,0);
                    break;

                case 'wrapper-2':
                    gloriosos.style.display = 'none';
                    dolorosos.style.display = 'none';
                    gozosos.style.display = 'flex';
                    luminosos.style.display = 'none';
                    gozosos.scrollTo(0,0);
                    break;

                case 'wrapper-3':
                    gloriosos.style.display = 'none';
                    gozosos.style.display = 'none';
                    dolorosos.style.display = 'none';
                    luminosos.style.display = 'flex';
                    luminosos.scrollTo(0,0);
                    break;

            }

        },
    },
});

const swiper2 = new Swiper('.swiper-2', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // Navigation arrows
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: false
    },
});







