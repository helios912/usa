$(function () {
  $(function () {
    $(".burger__menu").on("click", function () {
      $(".menu").addClass("active");
    });
    $(".close-btn").on("click", function () {
      $(".menu").removeClass("active");
    });
  });
  $(".slider__container").slick({
    dots: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,

          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,

          slidesToShow: 1,
        },
      },
    ],
  });
});
