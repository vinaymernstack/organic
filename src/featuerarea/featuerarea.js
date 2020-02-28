import React    from "react";
import template from "./featuerarea.jsx";
import $ from "jquery"

class featuerarea extends React.Component {
  constructor(){
    super()
    setTimeout(()=>{
      var fetauredSlider = $('.feaured-carousel'); 
    fetauredSlider.slick({
        arrows: true,
        autoplay: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScoll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: false,
                }
            }
        ]
    });
    },10)
    
  }
  render() {
    return template.call(this);
  }
}

export default featuerarea;
