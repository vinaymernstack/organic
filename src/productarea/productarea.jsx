import "./productarea.css";
import React from "react";
import { Link } from "react-router-dom";

function template() { 
  return (
    <div className="productarea">
      <div class="product-area bg-1 pt-110 pb-80">
         <div class="container">
            <div class="section-title text-center">
               <div class="section-img d-flex justify-content-center">
                  <img src="assets/img/icon/title.png" alt=""/>
               </div>
               <h2><span id="organic">Organic </span>featured products</h2>
            </div>
         </div>
         <div class="container">
            <div class="product-tab-list nav" role="tablist">
               <a class="active" href="#tab1" data-toggle="tab" role="tab" aria-selected="true" aria-controls="tab1">vegetables</a>
               <a href="#tab2" data-toggle="tab" role="tab" aria-selected="false" aria-controls="tab2">fruits</a>
               <a href="#tab3" data-toggle="tab" role="tab" aria-selected="false" aria-controls="tab3">juices</a>
               <a href="#tab4" data-toggle="tab" role="tab" aria-selected="false" aria-controls="tab4">bread</a>
            </div>
            <div class="tab-content text-center">
               <div class="tab-pane active show fade" id="tab1" role="tabpanel">
                  <div class="product-carousel">
                     
                     {this.loopdata1}
               </div>
               </div>
               <div class="tab-pane fade" id="tab2" role="tabpanel">
                  <div class="product-carousel">
                     {this.loopdata2}
                  </div>
               </div>
               <div class="tab-pane fade" id="tab3" role="tabpanel">
                  <div class="product-carousel">
                     <div class="custom-col">
                        <div class="single-product-item">
                           <div class="product-image">
                              <a href="#">
                              <img src="assets/img/product/17.jpg" alt=""/>
                              </a>  
                              <div class="product-hover">
                                 <ul class="hover-icon-list">
                                    <li>
                                       <a href="#"><i class="icon icon-Heart"></i></a>
                                    </li>
                                    <li>
                                       <a href="#"><i class="icon icon-Restart"></i></a>
                                    </li>
                                    <li><a href="assets/img/product/17.jpg" data-toggle="modal" data-target="#productModal"><i class="icon icon-Search"></i></a></li>
                                 </ul>
                                 <button type="button" class="p-cart-btn">Add to cart</button>
                              </div>
                           </div>
                           <div class="product-text">
                              <div class="product-rating">
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o"></i>
                                 <i class="fa fa-star-o"></i>
                              </div>
                              <h5><a href="#">Red Beet</a></h5>
                              <div class="pro-price">
                                 <span class="new-price">$34.00</span> 
                                 <span class="old-price">$37.00</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="custom-col">
                        <div class="single-product-item">
                           <div class="product-image">
                              <a href="#">
                              <img src="assets/img/product/18.jpg" alt=""/>
                              </a>  
                              <div class="product-hover">
                                 <ul class="hover-icon-list">
                                    <li>
                                       <a href="#"><i class="icon icon-Heart"></i></a>
                                    </li>
                                    <li>
                                       <a href="#"><i class="icon icon-Restart"></i></a>
                                    </li>
                                    <li><a href="assets/img/product/18.jpg" data-toggle="modal" data-target="#productModal"><i class="icon icon-Search"></i></a></li>
                                 </ul>
                                 <button type="button" class="p-cart-btn">Add to cart</button>
                              </div>
                           </div>
                           <div class="product-text">
                              <div class="product-rating">
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o"></i>
                                 <i class="fa fa-star-o"></i>
                              </div>
                              <h5><a href="#">Spring Onion</a></h5>
                              <div class="pro-price">
                                 <span class="new-price">$20.00</span> 
                                 <span class="old-price">$28.00</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="custom-col">
                        <div class="single-product-item">
                           <div class="product-image">
                              <a href="#">
                              <img src="assets/img/product/19.jpg" alt=""/>
                              </a>  
                              <div class="product-hover">
                                 <ul class="hover-icon-list">
                                    <li>
                                       <a href="#"><i class="icon icon-Heart"></i></a>
                                    </li>
                                    <li>
                                       <a href="#"><i class="icon icon-Restart"></i></a>
                                    </li>
                                    <li><a href="assets/img/product/19.jpg" data-toggle="modal" data-target="#productModal"><i class="icon icon-Search"></i></a></li>
                                 </ul>
                                 <button type="button" class="p-cart-btn">Add to cart</button>
                              </div>
                           </div>
                           <div class="product-text">
                              <div class="product-rating">
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o"></i>
                                 <i class="fa fa-star-o"></i>
                              </div>
                              <h5><a href="#">Fresh Tomato</a></h5>
                              <div class="pro-price">
                                 <span class="new-price">$40.00</span> 
                                 <span class="old-price">$50.00</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="custom-col">
                        <div class="single-product-item">
                           <div class="product-image">
                              <a href="#">
                              <img src="assets/img/product/20.jpg" alt=""/>
                              </a>  
                              <div class="product-hover">
                                 <ul class="hover-icon-list">
                                    <li>
                                       <a href="#"><i class="icon icon-Heart"></i></a>
                                    </li>
                                    <li>
                                       <a href="#"><i class="icon icon-Restart"></i></a>
                                    </li>
                                    <li><a href="assets/img/product/20.jpg" data-toggle="modal" data-target="#productModal"><i class="icon icon-Search"></i></a></li>
                                 </ul>
                                 <button type="button" class="p-cart-btn">Add to cart</button>
                              </div>
                           </div>
                           <div class="product-text">
                              <div class="product-rating">
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o"></i>
                                 <i class="fa fa-star-o"></i>
                              </div>
                              <h5><a href="#">Juicy Watermelon</a></h5>
                              <div class="pro-price">
                                 <span class="new-price">$50.00</span> 
                                 <span class="old-price">$80.00</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="custom-col">
                        <div class="single-product-item">
                           <div class="product-image">
                              <a href="#">
                              <img src="assets/img/product/7.jpg" alt=""/>
                              </a>  
                              <div class="product-hover">
                                 <ul class="hover-icon-list">
                                    <li>
                                       <a href="#"><i class="icon icon-Heart"></i></a>
                                    </li>
                                    <li>
                                       <a href="#"><i class="icon icon-Restart"></i></a>
                                    </li>
                                    <li><a href="assets/img/product/7.jpg" data-toggle="modal" data-target="#productModal"><i class="icon icon-Search"></i></a></li>
                                 </ul>
                                 <button type="button" class="p-cart-btn">Add to cart</button>
                              </div>
                           </div>
                           <div class="product-text">
                              <div class="product-rating">
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o"></i>
                                 <i class="fa fa-star-o"></i>
                              </div>
                              <h5><a href="#">Tangerin Juice</a></h5>
                              <div class="pro-price">
                                 <span class="new-price">$44.00</span> 
                                 <span class="old-price">$47.00</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="custom-col">
                        <div class="single-product-item">
                           <div class="product-image">
                              <a href="#">
                              <img src="assets/img/product/8.jpg" alt=""/>
                              </a>  
                              <div class="product-hover">
                                 <ul class="hover-icon-list">
                                    <li>
                                       <a href="#"><i class="icon icon-Heart"></i></a>
                                    </li>
                                    <li>
                                       <a href="#"><i class="icon icon-Restart"></i></a>
                                    </li>
                                    <li><a href="assets/img/product/8.jpg" data-toggle="modal" data-target="#productModal"><i class="icon icon-Search"></i></a></li>
                                 </ul>
                                 <button type="button" class="p-cart-btn">Add to cart</button>
                              </div>
                           </div>
                           <div class="product-text">
                              <div class="product-rating">
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o"></i>
                                 <i class="fa fa-star-o"></i>
                              </div>
                              <h5><a href="#">Pine Apple</a></h5>
                              <div class="pro-price">
                                 <span class="new-price">$33.00</span> 
                                 <span class="old-price">$37.00</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="custom-col">
                        <div class="single-product-item">
                           <div class="product-image">
                              <a href="#">
                              <img src="assets/img/product/1.jpg" alt=""/>
                              </a>  
                              <div class="product-hover">
                                 <ul class="hover-icon-list">
                                    <li>
                                       <a href="#"><i class="icon icon-Heart"></i></a>
                                    </li>
                                    <li>
                                       <a href="#"><i class="icon icon-Restart"></i></a>
                                    </li>
                                    <li><a href="assets/img/product/1.jpg" data-toggle="modal" data-target="#productModal"><i class="icon icon-Search"></i></a></li>
                                 </ul>
                                 <button type="button" class="p-cart-btn">Add to cart</button>
                              </div>
                           </div>
                           <div class="product-text">
                              <div class="product-rating">
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o"></i>
                                 <i class="fa fa-star-o"></i>
                              </div>
                              <h5><a href="#">Juicy Grapes</a></h5>
                              <div class="pro-price">
                                 <span class="new-price">$86.00</span> 
                                 <span class="old-price">$92.00</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="custom-col">
                        <div class="single-product-item">
                           <div class="product-image">
                              <a href="#">
                              <img src="assets/img/product/2.jpg" alt=""/>
                              </a>  
                              <div class="product-hover">
                                 <ul class="hover-icon-list">
                                    <li>
                                       <a href="#"><i class="icon icon-Heart"></i></a>
                                    </li>
                                    <li>
                                       <a href="#"><i class="icon icon-Restart"></i></a>
                                    </li>
                                    <li><a href="assets/img/product/2.jpg" data-toggle="modal" data-target="#productModal"><i class="icon icon-Search"></i></a></li>
                                 </ul>
                                 <button type="button" class="p-cart-btn">Add to cart</button>
                              </div>
                           </div>
                           <div class="product-text">
                              <div class="product-rating">
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o"></i>
                                 <i class="fa fa-star-o"></i>
                              </div>
                              <h5><a href="#">Fresh Banana</a></h5>
                              <div class="pro-price">
                                 <span class="new-price">$40.00</span> 
                                 <span class="old-price">$43.00</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="tab-pane fade" id="tab4" role="tabpanel">
                  <div class="product-carousel">
                     <div class="custom-col">
                        <div class="single-product-item">
                           <div class="product-image">
                              <a href="#">
                              <img src="assets/img/product/12.jpg" alt=""/>
                              </a>  
                              <div class="product-hover">
                                 <ul class="hover-icon-list">
                                    <li>
                                       <a href="#"><i class="icon icon-Heart"></i></a>
                                    </li>
                                    <li>
                                       <a href="#"><i class="icon icon-Restart"></i></a>
                                    </li>
                                    <li><a href="assets/img/product/12.jpg" data-toggle="modal" data-target="#productModal"><i class="icon icon-Search"></i></a></li>
                                 </ul>
                                 <button type="button" class="p-cart-btn">Add to cart</button>
                              </div>
                           </div>
                           <div class="product-text">
                              <div class="product-rating">
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o"></i>
                                 <i class="fa fa-star-o"></i>
                              </div>
                              <h5><a href="#">Strawberry Juice</a></h5>
                              <div class="pro-price">
                                 <span class="new-price">$20.00</span> 
                                 <span class="old-price">$28.00</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="custom-col">
                        <div class="single-product-item">
                           <div class="product-image">
                              <a href="#">
                              <img src="assets/img/product/13.jpg" alt=""/>
                              </a>  
                              <div class="product-hover">
                                 <ul class="hover-icon-list">
                                    <li>
                                       <a href="#"><i class="icon icon-Heart"></i></a>
                                    </li>
                                    <li>
                                       <a href="#"><i class="icon icon-Restart"></i></a>
                                    </li>
                                    <li><a href="assets/img/product/13.jpg" data-toggle="modal" data-target="#productModal"><i class="icon icon-Search"></i></a></li>
                                 </ul>
                                 <button type="button" class="p-cart-btn">Add to cart</button>
                              </div>
                           </div>
                           <div class="product-text">
                              <div class="product-rating">
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o"></i>
                                 <i class="fa fa-star-o"></i>
                              </div>
                              <h5><a href="#">Green Pee's</a></h5>
                              <div class="pro-price">
                                 <span class="new-price">$40.00</span> 
                                 <span class="old-price">$50.00</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="custom-col">
                        <div class="single-product-item">
                           <div class="product-image">
                              <a href="#">
                              <img src="assets/img/product/14.jpg" alt=""/>
                              </a>  
                              <div class="product-hover">
                                 <ul class="hover-icon-list">
                                    <li>
                                       <a href="#"><i class="icon icon-Heart"></i></a>
                                    </li>
                                    <li>
                                       <a href="#"><i class="icon icon-Restart"></i></a>
                                    </li>
                                    <li><a href="assets/img/product/14.jpg" data-toggle="modal" data-target="#productModal"><i class="icon icon-Search"></i></a></li>
                                 </ul>
                                 <button type="button" class="p-cart-btn">Add to cart</button>
                              </div>
                           </div>
                           <div class="product-text">
                              <div class="product-rating">
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o"></i>
                                 <i class="fa fa-star-o"></i>
                              </div>
                              <h5><a href="#">Fresh Onion</a></h5>
                              <div class="pro-price">
                                 <span class="new-price">$50.00</span> 
                                 <span class="old-price">$80.00</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="custom-col">
                        <div class="single-product-item">
                           <div class="product-image">
                              <a href="#">
                              <img src="assets/img/product/15.jpg" alt=""/>
                              </a>  
                              <div class="product-hover">
                                 <ul class="hover-icon-list">
                                    <li>
                                       <a href="#"><i class="icon icon-Heart"></i></a>
                                    </li>
                                    <li>
                                       <a href="#"><i class="icon icon-Restart"></i></a>
                                    </li>
                                    <li><a href="assets/img/product/15.jpg" data-toggle="modal" data-target="#productModal"><i class="icon icon-Search"></i></a></li>
                                 </ul>
                                 <button type="button" class="p-cart-btn">Add to cart</button>
                              </div>
                           </div>
                           <div class="product-text">
                              <div class="product-rating">
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o"></i>
                                 <i class="fa fa-star-o"></i>
                              </div>
                              <h5><a href="#">Juicy Orange</a></h5>
                              <div class="pro-price">
                                 <span class="new-price">$44.00</span> 
                                 <span class="old-price">$47.00</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="custom-col">
                        <div class="single-product-item">
                           <div class="product-image">
                              <a href="#">
                              <img src="assets/img/product/9.jpg" alt=""/>
                              </a>  
                              <div class="product-hover">
                                 <ul class="hover-icon-list">
                                    <li>
                                       <a href="#"><i class="icon icon-Heart"></i></a>
                                    </li>
                                    <li>
                                       <a href="#"><i class="icon icon-Restart"></i></a>
                                    </li>
                                    <li><a href="assets/img/product/9.jpg" data-toggle="modal" data-target="#productModal"><i class="icon icon-Search"></i></a></li>
                                 </ul>
                                 <button type="button" class="p-cart-btn">Add to cart</button>
                              </div>
                           </div>
                           <div class="product-text">
                              <div class="product-rating">
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o"></i>
                                 <i class="fa fa-star-o"></i>
                              </div>
                              <h5><a href="#">Fresh Cucumber</a></h5>
                              <div class="pro-price">
                                 <span class="new-price">$86.00</span> 
                                 <span class="old-price">$92.00</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="custom-col">
                        <div class="single-product-item">
                           <div class="product-image">
                              <a href="#">
                              <img src="assets/img/product/12.jpg" alt=""/>
                              </a>  
                              <div class="product-hover">
                                 <ul class="hover-icon-list">
                                    <li>
                                       <a href="#"><i class="icon icon-Heart"></i></a>
                                    </li>
                                    <li>
                                       <a href="#"><i class="icon icon-Restart"></i></a>
                                    </li>
                                    <li><a href="assets/img/product/12.jpg" data-toggle="modal" data-target="#productModal"><i class="icon icon-Search"></i></a></li>
                                 </ul>
                                 <button type="button" class="p-cart-btn">Add to cart</button>
                              </div>
                           </div>
                           <div class="product-text">
                              <div class="product-rating">
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o"></i>
                                 <i class="fa fa-star-o"></i>
                              </div>
                              <h5><a href="#">Strawberry Juice</a></h5>
                              <div class="pro-price">
                                 <span class="new-price">$20.00</span> 
                                 <span class="old-price">$28.00</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="custom-col">
                        <div class="single-product-item">
                           <div class="product-image">
                              <a href="#">
                              <img src="assets/img/product/13.jpg" alt=""/>
                              </a>  
                              <div class="product-hover">
                                 <ul class="hover-icon-list">
                                    <li>
                                       <a href="#"><i class="icon icon-Heart"></i></a>
                                    </li>
                                    <li>
                                       <a href="#"><i class="icon icon-Restart"></i></a>
                                    </li>
                                    <li><a href="assets/img/product/13.jpg" data-toggle="modal" data-target="#productModal"><i class="icon icon-Search"></i></a></li>
                                 </ul>
                                 <button type="button" class="p-cart-btn">Add to cart</button>
                              </div>
                           </div>
                           <div class="product-text">
                              <div class="product-rating">
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o"></i>
                                 <i class="fa fa-star-o"></i>
                              </div>
                              <h5><a href="#">Green Pee's</a></h5>
                              <div class="pro-price">
                                 <span class="new-price">$40.00</span> 
                                 <span class="old-price">$50.00</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="custom-col">
                        <div class="single-product-item">
                           <div class="product-image">
                              <a href="#">
                              <img src="assets/img/product/10.jpg" alt=""/>
                              </a>  
                              <div class="product-hover">
                                 <ul class="hover-icon-list">
                                    <li>
                                       <a href="#"><i class="icon icon-Heart"></i></a>
                                    </li>
                                    <li>
                                       <a href="#"><i class="icon icon-Restart"></i></a>
                                    </li>
                                    <li><a href="assets/img/product/10.jpg" data-toggle="modal" data-target="#productModal"><i class="icon icon-Search"></i></a></li>
                                 </ul>
                                 <button type="button" class="p-cart-btn">Add to cart</button>
                              </div>
                           </div>
                           <div class="product-text">
                              <div class="product-rating">
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o"></i>
                                 <i class="fa fa-star-o"></i>
                              </div>
                              <h5><a href="#">Fresh Grape</a></h5>
                              <div class="pro-price">
                                 <span class="new-price">$40.00</span> 
                                 <span class="old-price">$43.00</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="custom-col">
                        <div class="single-product-item">
                           <div class="product-image">
                              <a href="#">
                              <img src="assets/img/product/11.jpg" alt=""/>
                              </a>  
                              <div class="product-hover">
                                 <ul class="hover-icon-list">
                                    <li>
                                       <a href="#"><i class="icon icon-Heart"></i></a>
                                    </li>
                                    <li>
                                       <a href="#"><i class="icon icon-Restart"></i></a>
                                    </li>
                                    <li><a href="assets/img/product/11.jpg" data-toggle="modal" data-target="#productModal"><i class="icon icon-Search"></i></a></li>
                                 </ul>
                                 <button type="button" class="p-cart-btn">Add to cart</button>
                              </div>
                           </div>
                           <div class="product-text">
                              <div class="product-rating">
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o"></i>
                                 <i class="fa fa-star-o"></i>
                              </div>
                              <h5><a href="#">Farm's Cucumber</a></h5>
                              <div class="pro-price">
                                 <span class="new-price">$34.00</span> 
                                 <span class="old-price">$37.00</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="custom-col">
                        <div class="single-product-item">
                           <div class="product-image">
                              <a href="#">
                              <img src="assets/img/product/16.jpg" alt=""/>
                              </a>  
                              <div class="product-hover">
                                 <ul class="hover-icon-list">
                                    <li>
                                       <a href="#"><i class="icon icon-Heart"></i></a>
                                    </li>
                                    <li>
                                       <a href="#"><i class="icon icon-Restart"></i></a>
                                    </li>
                                    <li><a href="assets/img/product/16.jpg" data-toggle="modal" data-target="#productModal"><i class="icon icon-Search"></i></a></li>
                                 </ul>
                                 <button type="button" class="p-cart-btn">Add to cart</button>
                              </div>
                           </div>
                           <div class="product-text">
                              <div class="product-rating">
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o color"></i>
                                 <i class="fa fa-star-o"></i>
                                 <i class="fa fa-star-o"></i>
                              </div>
                              <h5><a href="#">Kiwi Juice</a></h5>
                              <div class="pro-price">
                                 <span class="new-price">$33.00</span> 
                                 <span class="old-price">$37.00</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="modal fade" id="productModal" tabindex="-1" role="dialog">
         <div class="modal-dialog" role="document">
            <div class="modal-content">
               <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="fa fa-times"></i></span></button>
               <div class="quick-view-container">
                  <div class="column-left">
                     <div class="tab-content product-details-large" id="myTabContent">
                        <div class="tab-pane fade show active" id="single-slide1" role="tabpanel" aria-labelledby="single-slide-tab-1">
                           <div class="single-product-img">
                              <img src="assets/img/product/1.jpg" alt=""/>
                           </div>
                        </div>
                        <div class="tab-pane fade" id="single-slide2" role="tabpanel" aria-labelledby="single-slide-tab-2">
                           <div class="single-product-img">
                              <img src="assets/img/product/2.jpg" alt=""/>
                           </div>
                        </div>
                        <div class="tab-pane fade" id="single-slide3" role="tabpanel" aria-labelledby="single-slide-tab-3">
                           <div class="single-product-img">
                              <img src="assets/img/product/3.jpg" alt=""/>
                           </div>
                        </div>
                        <div class="tab-pane fade" id="single-slide4" role="tabpanel" aria-labelledby="single-slide-tab-4">
                           <div class="single-product-img">
                              <img src="assets/img/product/4.jpg" alt=""/>
                           </div>
                        </div>
                        <div class="tab-pane fade" id="single-slide5" role="tabpanel" aria-labelledby="single-slide-tab-5">
                           <div class="single-product-img">
                              <img src="assets/img/product/5.jpg" alt=""/>
                           </div>
                        </div>
                        <div class="tab-pane fade" id="single-slide6" role="tabpanel" aria-labelledby="single-slide-tab-6">
                           <div class="single-product-img">
                              <img src="assets/img/product/6.jpg" alt=""/>
                           </div>
                        </div>
                     </div>
                     <div class="single-product-menu">
                        <div class="nav single-slide-menu" role="tablist">
                           <div class="single-tab-menu">
                              <a class="active" data-toggle="tab" id="single-slide-tab-1" href="#single-slide1"><img src="assets/img/product/1.jpg" alt=""/></a>
                           </div>
                           <div class="single-tab-menu">
                              <a data-toggle="tab" id="single-slide-tab-2" href="#single-slide2"><img src="assets/img/product/2.jpg" alt=""/></a>
                           </div>
                           <div class="single-tab-menu">
                              <a data-toggle="tab" id="single-slide-tab-3" href="#single-slide3"><img src="assets/img/product/3.jpg" alt=""/></a>
                           </div>
                           <div class="single-tab-menu">
                              <a data-toggle="tab" id="single-slide-tab-4" href="#single-slide4"><img src="assets/img/product/4.jpg" alt=""/></a>
                           </div>
                           <div class="single-tab-menu">
                              <a data-toggle="tab" id="single-slide-tab-5" href="#single-slide5"><img src="assets/img/product/5.jpg" alt=""/></a>
                           </div>
                           <div class="single-tab-menu">
                              <a data-toggle="tab" id="single-slide-tab-6" href="#single-slide6"><img src="assets/img/product/6.jpg" alt=""/></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="column-right">
                     <div class="quick-view-text">
                        <h2>Curabitur a purus</h2>
                        <h3 class="q-product-price">$34.00<span class="old-price">$37.00</span></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus</p>
                        <div class="input-cart">
                           <input value="1" type="number"/>
                           <button class="default-btn">Add to cart</button>
                        </div>
                        <div class="share-product">
                           <h4>Share this product</h4>
                           <div class="social-link">
                              <a href="#" target="_blank" class="facebook">
                              <i class="fa fa-facebook"></i>
                              </a>
                              <a href="#" target="_blank" class="twitter">
                              <i class="fa fa-twitter"></i>
                              </a>
                              <a href="#" target="_blank" class="pinterest">
                              <i class="fa fa-pinterest"></i>
                              </a>
                              <a href="#" target="_blank" class="google">
                              <i class="fa fa-google-plus"></i>
                              </a>
                              <a href="#" target="_blank" class="linkedin">
                              <i class="fa fa-linkedin"></i>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
    
  );
};

export default template;
