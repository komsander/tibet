const modal = new GraphModal();

var ratingSwiper = new Swiper(".rating__swiper", {
  grabCursor: true,

  
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  breakpoints: {
    300: {
      spaceBetween: 80,
      slidesPerView: 1,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    1165: {
      slidesPerView: 3,
    },
  },
});
var blogSwiper = new Swiper(".blog__swiper", {
  grabCursor: true,
  spaceBetween: 80,
  slidesPerView: 1,
  
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

  
});
var photoSwiper = new Swiper(".photo__swiper", {
  grabCursor: true,
  spaceBetween: 80,
  slidesPerView: 1,
  
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

  
});

const burger = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const body = document.body;
if (burger && menu) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("_active");
    menu.classList.toggle("_active");
    body.classList.toggle("_lock");
  });
}
