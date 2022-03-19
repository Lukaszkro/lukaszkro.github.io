$.js = function (el) {
    return $('[data-js=' + el + ']')
};

function carousel() {
  $.js('timeline-carousel').slick({
    infinite: false,
    arrows: false,
    dots: false,
    autoplay: false,
    speed: 1000,
    slidesToShow: 1.5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint:420,
        settings:{
          
          slidesToShow:1,
          slidesToScroll:1
        }
      }
    ]
  });
}

carousel();