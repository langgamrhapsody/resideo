let card = document.querySelectorAll("div.property-card__container");

if (currentPage === "/") {
  for (let elem of card) {
    elem.classList.add("col-10", "col-sm-6", "col-lg-4");
  }
} else if (currentPage === "/property.html") {
  for (let elem of card) {
    elem.classList.add("col-12", "col-sm-6", "col-md-4");
  }
}
