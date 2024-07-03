var chooseSwiper = new Swiper(".choose-us__swiper-container", {
  // Default parameters
  loop: false,
  allowTouchMove: true,
  pauseOnMouseEnter: false,

  autoplay: false,

  longSwipesRatio: 0.01,
  followFinger: false,
  grabCursor: true,
  watchSlidesProgress: true,
  parallax: true,
  lazy: {
    loadPrevNext: true,
  },

  spaceBetween: 50,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    // when window width is >= 575.98px
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

function createChooseUsCard(feature) {
  return `
            <div class="swiper-slide">
                <div class="choose-us__swiper-card">
                    <img src="${feature.img}" class="choose-us__swiper-card-svg" alt="${feature.name}">
                    <h3 class="choose-us__swiper-card-title">${feature.name}</h3>
                    <p class="choose-us__swiper-card-desc">${feature.desc}</p>
                </div>
            </div>
        `;
}

function renderCard(features) {
  const row = document.getElementById("chooseUsRow");
  row.innerHTML = features.map(createChooseUsCard).join("");
}

renderCard(features);
