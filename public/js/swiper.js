
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
let thumb = document.querySelector('#thumb');
let slideAtual = document.querySelector('#slide-' + cont);
let textoSlideAtual= "gloriosos";
let textoSlideAtualSingular = "glorioso"

let teste = document.createElement()


next.addEventListener('click', () =>{
    cont ++;
    let slideAtual = document.querySelector('#slide-' + cont);
    textoSlideAtual = slideAtual.innerText;    
    textoSlideAtualSingular = textoSlideAtual.substring(0, textoSlideAtual.length -1).toLowerCase();
    thumb.setAttribute('src', `<%= ${textoSlideAtual}.thumb %>`);
    }
)

prev.addEventListener('click', () =>{
    cont --;
    let slideAtual = document.querySelector('#slide-' + cont);
    textoSlideAtual = slideAtual.innerText;
    thumb.setAttribute('src', `<%= ${textoSlideAtual}.thumb %>`) ;
})



