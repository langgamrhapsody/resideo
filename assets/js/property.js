let mapButton = document.getElementById("map-button");
let offcanvasButton = document.getElementById("offcanvas-button");
let propertyItem = document.getElementById("property-item");
let propertyMap = document.getElementById("property-map");
let backdrop = document.getElementById("backdrop");
let desktopWidth = window.matchMedia("(min-width: 992px)");
let tabletWidth = window.matchMedia("(max-width: 991.98px)");

mapButton.addEventListener("click", function () {
  if (currentPage === "/property.html") {
    propertyItem.classList.toggle("less");
    propertyMap.classList.toggle("show-map");
    console.log(backdrop);
    backdrop.classList.toggle("show-backdrop");
    for (let elem of card) {
      if (elem.classList.contains("col-lg-6")) {
        elem.classList.remove("col-lg-6");
        elem.classList.add("col-lg-4");
      } else {
        elem.classList.remove("col-lg-4");
        elem.classList.add("col-lg-6");
      }
    }
  }
});

offcanvasButton.addEventListener("click", function () {
  if (currentPage === "/property.html") {
    propertyItem.classList.toggle("less");
    propertyMap.classList.toggle("show-map");
    backdrop.classList.toggle("show-backdrop");

    for (let item of card) {
      item.classList.remove("col-lg-6");
      item.classList.add("col-lg-4");
    }
  }
});

backdrop.addEventListener("click", function () {
  propertyItem.classList.toggle("less");
  propertyMap.classList.toggle("show-map");
  backdrop.classList.toggle("show-backdrop");
});
