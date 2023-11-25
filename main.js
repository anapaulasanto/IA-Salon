var iconBar = document.querySelector('.menu-icon')
var menuBar = document.querySelector('nav ul')

iconBar.addEventListener("click",function(e) {
    menuBar.classList.toggle('hide');
});

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