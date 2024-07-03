//navbar and footerbutton

const currentPage = window.location.pathname;
console.log(currentPage);
//body
const body = document.getElementsByTagName("body")[0];
if (currentPage === "/property.html") {
  body.style.overflow = "hidden";
}
