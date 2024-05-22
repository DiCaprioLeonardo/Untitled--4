const btn = document.getElementById("navbar-toggler");

const logo = document.querySelector(".logo");
const menu = document.querySelector(".menu");

const menuWrapper = document.getElementById('menu__wrapper');

btn.addEventListener('click', () => {
    logo.classList.toggle("show");
    menu.classList.toggle("show");
    menuWrapper.classList.toggle("transorm");

    btn.classList.toggle("burger");
});
