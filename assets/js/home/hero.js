var heroTextSwiper = new Swiper(".hero-text-swiper", {
  direction: "horizontal",
  effect: "slides",
  loop: true,
  allowTouchMove: false,
});

var heroImgSwiper = new Swiper(".hero-img-swiper", {
  navigation: {
    nextEl: ".hero__swiper-button-next",
    prevEl: ".hero__swiper-button-prev",
  },

  pagination: {
    el: ".hero__swiper-pagination",
    type: "fraction",
    formatFractionCurrent: function (number) {
      return ("0" + number).slice(-2);
    },
    formatFractionTotal: function (number) {
      return ("0" + number).slice(-2);
    },
    renderFraction: function (currentClass, totalClass) {
      return (
        '<span class="' +
        currentClass +
        '"></span>' +
        " / " +
        '<span class="' +
        totalClass +
        '"></span>'
      );
    },
  },
  loop: true,
  allowTouchMove: true,
  pauseOnMouseEnter: false,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  longSwipesRatio: 0.01,
  followFinger: false,
  grabCursor: true,
  watchSlidesProgress: true,
  parallax: true,
  lazy: {
    loadPrevNext: true,
  },
});

heroImgSwiper.controller.control = this.heroTextSwiper;

const heroImgSwiperWrapper = document.getElementById("heroImgSwiperWrapper");
const heroTextSwiperWrapper = document.getElementById("heroTextSwiperWrapper");

function createImageSlide(property) {
  return `
        <div class="swiper-slide">
          <img class="hero-img-swiper__img" src="${property.img}" alt="${property.name}">
        </div>
    `;
}

function createTextSlide(property) {
  return `
        <div class="swiper-slide">
           <h2 class="hero-text-swiper__title">${property.name}</h2>
                <p class="hero-text-swiper__desc">${property.detail}</p>
                <p class="hero-text-swiper__price">${property.price}</p>
                <a href="/detail.php" class="section-button hero__button">View Details</a>
        </div>
    `;
}

function loopHeroSwiperItem(properties) {
  heroImgSwiperWrapper.innerHTML = properties.map(createImageSlide).join("");
  heroTextSwiperWrapper.innerHTML = properties.map(createTextSlide).join("");
}

loopHeroSwiperItem(properties);
