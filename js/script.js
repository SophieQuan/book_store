console.log('Welcome to Giant Online Book Store !')

$(document).ready(function(){
  
  $('.slider').slick({
    // centerMode: true,
    // centerPadding: '80px',
    slidesToShow: 5,
    adaptiveHeight: true,
    dots: true,
		arrows: true,
		infinite: true,
    speed: 3000,
    responsive: [
      {
        breakpoint: 920,
        settings: {
          arrows: true,
          // centerMode: true,
          centerPadding: '40px',
          slidesToShow: 4,
          slidesToScroll: 4,
          adaptiveHeight: true,

        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          // centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
          slidesToScroll: 3,
          adaptiveHeight: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          // centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
          dots: false,
        }
      }
    ]
   
  });
});
