const nav = document.querySelector(".navbar");
const scrollButton = document.getElementById("footer__button");

window.addEventListener("scroll", function () {
  if (window.scrollY > 16) {
    nav.classList.add("navbar__scrolled");
    scrollButton.classList.add("footer__button-appear");
  } else if (window.scrollY < 16) {
    nav.classList.remove("navbar__scrolled");
    scrollButton.classList.remove("footer__button-appear");
  }
});

if (currentPage === "/") {
  nav.classList.remove("custom-nav");
}
