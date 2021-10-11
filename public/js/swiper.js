
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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

let cont = 0;
let next = document.querySelector('#next');
let prev = document.querySelector('#prev');
let slideAtual = document.querySelector('#slide-' + cont);
let textoSlideAtual= "Gloriosos";

next.addEventListener('click', () =>{
    cont ++
    let slideAtual = document.querySelector('#slide-' + cont)
    textoSlideAtual = slideAtual.innerText    
})

prev.addEventListener('click', () =>{
    cont --
    let slideAtual = document.querySelector('#slide-' + cont)
    textoSlideAtual = slideAtual.innerText
})



