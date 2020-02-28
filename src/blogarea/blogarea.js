import React    from "react";
import template from "./blogarea.jsx";
import $ from "jquery"

class blogarea extends React.Component {
  constructor(){
    super()
    setTimeout(()=>{
      var blogSlider = $('.blog-carousel'); 
      blogSlider.slick({
          arrows: true,
          autoplay: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScoll: 1,
          prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
          nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
          responsive: [
              {
                  breakpoint: 991,
                  settings: {
                      slidesToShow: 2,
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
                      slidesToShow: 1
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

export default blogarea;
