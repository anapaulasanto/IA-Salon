var iconBar = document.querySelector('.menu-icon')
var menuBar = document.querySelector('nav ul')

iconBar.addEventListener("click",function(e) {
    menuBar.classList.toggle('hide');
});