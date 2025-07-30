export default function sliders() {
  const teamSlider = document.querySelector(".s-team__slider");

  if (teamSlider) {
    const swiper = new Swiper(teamSlider, {
      speed: 800,
      spaceBetween: 16,
      slidesPerView: 1,
      // autoplay: {
      //   delay: 3000
      // },
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
}
