const btn = document.getElementById("navbar-toggler");

const logo = document.querySelector(".logo");
const menu = document.querySelector(".menu");

btn.addEventListener('click', () => {
    logo.classList.toggle("show");
    menu.classList.toggle("show");    
});
