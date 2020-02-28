import React    from "react";
import template from "./slider.jsx";
import "jquery/dist/jquery.min"
import $ from "jquery"
import 'slick-carousel/slick/slick.min'

class slider extends React.Component {
  constructor(){
    super()
    setTimeout(()=>{
      this.slider()
    },1)
  }
  slider=()=>{
  let heroSlider = $('.ht-hero-slider');
    heroSlider.slick({
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev'><i class='fa fa-angle-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next'><i class='fa fa-angle-right'></i></button>",
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                  arrows: false
              }
            },
            {
                breakpoint: 479,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    heroSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var sliderTitle = $('.ht-hero-slider h1');
        var currentTitle = $('.slick-current h1');
        sliderTitle.removeClass('cssanimation leDoorCloseLeft sequence');
        currentTitle.addClass('cssanimation leDoorCloseLeft sequence');
    });
    heroSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
        var sliderTitle = $('.ht-hero-slider h1');
        var currentTitle = $('.slick-current h1');
        sliderTitle.removeClass('cssanimation leDoorCloseLeft sequence');
        currentTitle.addClass('cssanimation leDoorCloseLeft sequence');
    });
  }
  
  render() {
    return(
      <div class="ht-hero-section fix">
         <div class="ht-hero-slider">
            
            <div class="ht-single-slide" style={{backgroundImage: "url(assets/img/slider/1.jpg)"}}>
               <div class="ht-hero-content-one container">
                  <h3>Cold Process Organic</h3>
                  <h1 class="cssanimation leDoorCloseLeft sequence">Savon Stories</h1>
                  <p>We believe that healthy eating, clean air, and gentle character is the best start to genuine wellbeing.</p>
                  <a href="#" class="default-btn large circle blue hover-blue uppercase"
                  onClick={this.slider}>Shop now</a>
               </div>
            </div>
            
            
            <div class="ht-single-slide" style={{backgroundImage: "url(assets/img/slider/2.jpg)"}}>
               <div class="ht-hero-content-one container">
                  <h3>Healthy life with</h3>
                  <h1 class="cssanimation leDoorCloseLeft sequence">Nature Organic</h1>
                  <p>Vegetables are the edible parts of a plant that is used in cooking or can be eaten raw.</p>
                  <a href="#" class="default-btn">Shop now</a>
               </div>
            </div>
            
         </div>
      </div>
    )
  }
}

export default slider;




