
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
          const titleData = currentSlide.getAttribute('data-title')
          
          const gloriosos = document.querySelector('.swiper-slide');
          const dolorosos = document.getElementById('content-1');
          const gozosos = document.getElementById('content-2');
          const luminosos = document.getElementById('content-3');
          
          switch (titleData){
              case 'dolorosos':
                  gloriosos.style.display = 'none';
                  gozosos.style.display = 'none';
                  luminosos.style.display = 'none';

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







