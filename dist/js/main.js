new Swiper("#article-swiper", {
  effect: "flip",
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: "#article-swiper, .swiper-pagination",
    clickable: true,
  },
  lazyLoading: true,
});
