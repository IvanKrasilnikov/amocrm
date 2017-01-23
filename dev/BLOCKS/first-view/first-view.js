$(function(){
  $('#first-view-phone').mask('+375(99) 999-99-99');
  
  $('.first-view__partners > .wrapper').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 767,
        settings: {
          autoplay: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 479,
        settings: {
          autoplay: false,
          slidesToShow: 2
        }
      }
    ]
  });
});
