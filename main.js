var iconBar = document.querySelector('.menu-icon')
var menuBar = document.querySelector('nav ul')

iconBar.addEventListener("click",function(e) {
    menuBar.classList.toggle('hide');
    document.querySelector('.fechaMenu').classList.toggle('isClose');
});

//Fechar o menuBar quando clicar fora da tela//

document.querySelector('.fechaMenu').addEventListener('click', (e) => {
    menuBar.classList.toggle('hide');
    document.querySelector('.fechaMenu').classList.toggle('isClose');
})

//Carousel//

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 10,
        nav: true,
        autoWidth: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
});

//Voltar ao topo quando tiver rolagem//

var botao = document.querySelector('.fa-arrow-up')
window.addEventListener("scroll", function (event) {
    if (this.window.scrollY == 0) {
        botao.classList.remove("visible");
    } else {
        botao.classList.add("visible");
    }
});

