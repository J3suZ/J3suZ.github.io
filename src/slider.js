$(document).ready(function () {
  new Glider(document.querySelector("#sliderContainerList"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: ".indicators",
    arrows: {
      prev: "#slider_prev",
      next: "#slider_next",
    },
    responsive: [
        {
          // screens greater than >= 545px
          breakpoint: 545,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            itemWidth: 150,
            duration: 0.25
          }
        },{
          // screens greater than >= 775px
          breakpoint: 775,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            itemWidth: 150,
            duration: 0.25
          }
        },{
          // screens greater than >= 1024px
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            itemWidth: 150,
            duration: 1
          }
        }
      ]
  });

  /*------------- ¡Slider de recomendaciones! -------------*/

  new Glider(document.querySelector("#sliderRecomendations"),{
    slidesToShow: 1,
    slidesToScroll: 1,
    dragabble: false,
    dots: "#recoIdenticators",
    arrows: {
      prev: "#sliderReco_prev",
      next: "#sliderReco_next",
    },
  })
});