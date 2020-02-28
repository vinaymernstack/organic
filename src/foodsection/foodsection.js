import React    from "react";
import template from "./foodsection.jsx";
import $ from "jquery"

class foodsection extends React.Component {
  constructor(){
    super()
    setTimeout(()=>{
    let  foodSlider = $('.ht-food-slider'); 
  foodSlider.slick({
      infinite: true,
      arrows: false,
      slidesToShow: 5,
      responsive: [
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 4,
              }
          },
          {
              breakpoint: 991,
              settings: {
                  slidesToShow: 3,
              }
          },
          {
              breakpoint: 767,
              settings: {
                  slidesToShow: 2,
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

export default foodsection;
