import React    from "react";
import template from "./tesimonialarea.jsx";
import $ from "jquery"

class tesimonialarea extends React.Component {
  constructor(){
    super()
    setTimeout(()=>{
      $('.text-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        fade: true,
        asNavFor: '.image-carousel',
        responsive: [
            {
              breakpoint: 479,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.image-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.text-carousel',
        arrows: false,
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });
    },10)
  }
  render() {
    return template.call(this);
  }
}

export default tesimonialarea;
