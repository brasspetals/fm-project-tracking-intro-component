const btn = document.querySelector(".btn--menu");
const iconOpen = document.querySelector(".btn--menu--open");
const iconClose = document.querySelector(".btn--menu--close");
const nav = document.querySelector(".nav");

function toggleMenu() {
  iconOpen.classList.toggle("hide");
  iconClose.classList.toggle("hide");
  nav.classList.toggle("nav-toggle");
} 

btn.addEventListener('click', toggleMenu);