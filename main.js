const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const bodybg = document.querySelector(".nav-menu-body")

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}



