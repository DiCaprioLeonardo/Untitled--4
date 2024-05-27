const btn = document.getElementById("navbar-toggler"); 
const logo = document.querySelector(".logo"); 
const menu = document.querySelector(".menu"); 
const menuWrapper = document.getElementById('menu__wrapper'); 
const maxWidth = 1200+1;


if (window.innerWidth < maxWidth) {
    logo.classList.add("show");
    menu.classList.add("show");
    menuWrapper.classList.add("transorm");
    btn.classList.add("burger");
}

btn.addEventListener('click', () => {
    if (window.innerWidth < maxWidth) {
        logo.classList.toggle("show");
        menu.classList.toggle("show");
        menuWrapper.classList.toggle("transorm");
        btn.classList.toggle("burger");
    }
});
