const header = document.querySelector("header");
window.addEventListener("scroll",function() {
    header.classList.toggle("sticky", window.scrollY > 60)
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};