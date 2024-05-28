const btn = document.getElementById("navbar-toggler"); 
const logo = document.querySelector(".logo"); 
const menu = document.querySelector(".menu"); 
const menuWrapper = document.getElementById('menu__wrapper'); 
const maxWidth = 1200+1;

if (window.innerWidth < maxWidth) {
    logo.classList.remove('show');
    menu.classList.remove('show');
    menuWrapper.classList.add('transorm');
    btn.classList.add('burger');
} else {
    logo.classList.add('show');
    menu.classList.add('show');
    menuWrapper.classList.remove('transorm');
    btn.classList.remove('burger');
}

btn.addEventListener('click', () => {
    if (window.innerWidth < maxWidth) {
        logo.classList.toggle("show");
        menu.classList.toggle("show");
        menuWrapper.classList.toggle("transorm");
        btn.classList.toggle("burger");
    }
});

function toggleMobileMenu() {
    if (window.innerWidth < maxWidth) {
        logo.classList.remove('show');
        menu.classList.remove('show');
        menuWrapper.classList.add('transorm');
        btn.classList.add('burger');
    } else {
        logo.classList.add('show');
        menu.classList.add('show');
        menuWrapper.classList.remove('transorm');
        btn.classList.remove('burger');
    }
}
window.addEventListener('resize', toggleMobileMenu);
