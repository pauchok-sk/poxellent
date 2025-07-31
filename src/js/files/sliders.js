export default function sliders() {
  const teamSlider = document.querySelector(".s-team__slider");

  if (teamSlider) {
    const swiper = new Swiper(teamSlider, {
      speed: 800,
      spaceBetween: 16,
      slidesPerView: 1,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".s-team .slider-pagination",
        clickable: true,
      },
      breakpoints: {
        992: {
          spaceBetween: 24,
          slidesPerView: 3,
        },
        630: {
          spaceBetween: 16,
          slidesPerView: 2,
        },
      },
    });
  }

  const reviewsSlider = document.querySelector(".s-reviews__slider");

  if (reviewsSlider) {
    const swiper = new Swiper(reviewsSlider, {
      speed: 800,
      spaceBetween: 24,
      slidesPerView: "auto",
      // autoplay: {
      //   delay: 3200,
      // },
      pagination: {
        el: ".s-reviews .slider-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          spaceBetween: 32,
          slidesPerView: "auto",
        },
      },
    });
  }
}
