import "./foodsection.css";
import React from "react";

function template() {
  return (
    <div className="foodsection">
      <div class="food-category-area pt-105 pb-70">
         <div class="container text-center">
            <div class="section-title-img">
               <img src="assets/img/banner/text.png" alt=""/>
               <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui</p>
            </div>
         </div>
         <div class="container">
            <div class="ht-food-slider row">
               <div class="col text-center">
                  <div class="single-food-category">
                     <a href="#" class="food-cat-img"><img src="assets/img/icon/tea.png" alt=""/></a>
                     <img src="assets/img/icon/border.png" alt=""/>
                     <h4><a href="#">tea</a></h4>
                     <span>(13 items)</span>
                  </div>
               </div>
               <div class="col text-center">
                  <div class="single-food-category">
                     <a href="#" class="food-cat-img"><img src="assets/img/icon/burger.png" alt=""/></a>
                     <img src="assets/img/icon/border.png" alt=""/>
                     <h4><a href="#">bread</a></h4>
                     <span>(14 items)</span>
                  </div>
               </div>
               <div class="col text-center">
                  <div class="single-food-category">
                     <a href="#" class="food-cat-img"><img src="assets/img/icon/fruit.png" alt=""/></a>
                     <img src="assets/img/icon/border.png" alt=""/>
                     <h4><a href="#">fruits</a></h4>
                     <span>(8 items)</span>
                  </div>
               </div>
               <div class="col text-center">
                  <div class="single-food-category">
                     <a href="#" class="food-cat-img"><img src="assets/img/icon/drinks.png" alt=""/></a>
                     <img src="assets/img/icon/border.png" alt=""/>
                     <h4><a href="#">juices</a></h4>
                     <span>(11 items)</span>
                  </div>
               </div>
               <div class="col text-center">
                  <div class="single-food-category">
                     <a href="#" class="food-cat-img"><img src="assets/img/icon/vegetable.png" alt=""/></a>
                     <img src="assets/img/icon/border.png" alt=""/>
                     <h4><a href="#">vegetables</a></h4>
                     <span>(11 items)</span>
                  </div>
               </div>
               <div class="col text-center">
                  <div class="single-food-category">
                     <a href="#" class="food-cat-img"><img src="assets/img/icon/tea.png" alt=""/></a>
                     <img src="assets/img/icon/border.png" alt=""/>
                     <h4><a href="#">tea</a></h4>
                     <span>(13 items)</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default template;
