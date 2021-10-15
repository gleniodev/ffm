const pai = document.getElementById('swiper-wrapper');
const buttonNext = document.getElementById('next');
const luminosos = document.querySelector('#slide-3')

luminosos.classList.add('swiper-active');

function hideMisterios() {
    let filhos = pai.children.length
    alert(filhos)

    // for (var i = 0; i < pai.children.length; i++) {
    //     if (pai.children[i].classList.contains('gloriosos')) {
    //         alert(i)
    //         // pai.children[i].remove();
    //     }
    // }
    // return alert(i);
}

buttonNext.addEventListener('click', hideMisterios);
