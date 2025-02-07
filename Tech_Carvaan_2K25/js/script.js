const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("menu-close");
  mobileMenu.classList.add("menu-open");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("menu-open");
  mobileMenu.classList.add("menu-close");
});
