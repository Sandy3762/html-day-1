$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      responsiveClass: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: false,
      autoplaySpeed: 1000,
      autoplay: true,

      responsive: {
        0: {
          items: 1,
          nav: true,
          autoHeight: true,
        },
        400: {
          items: 1,
          nav: true,
          autoHeight: true,
        },
        600: {
          items: 1,
          nav: true,
          autoHeight: true,
        },
        1000: {
          items: 1,
          nav: true,
          loop: true,
        },
      },
    });
  });