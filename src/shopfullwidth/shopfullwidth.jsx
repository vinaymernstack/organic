import "./shopfullwidth.css";
import React from "react";

function template() {
  return (
    <div className="shopfullwidth">
      <div class="breadcrumb-area bg-12 text-center">
         <div class="container">
            <h1>Shop Full Width</h1>
            <nav aria-label="breadcrumb">
               <ul class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Shop Full Width</li>
               </ul>
            </nav>
         </div>
      </div>
      

      <div class="shop-area pt-110 pb-100 bg-gray mb-95 shop-full-width">
         <div class="container">
            <div class="ht-product-tab">
               <div class="ht-tab-content">
                  <div class="nav" role="tablist">
                     <a class="active grid" href="#grid" data-toggle="tab" role="tab" aria-selected="true" aria-controls="grid"><i class="fa fa-th"></i></a>
                     <a class="list" href="#list" data-toggle="tab" role="tab" aria-selected="false" aria-controls="list"><i class="fa fa-list"></i></a>
                  </div>
                  <div class="shop-items">
                     <span>Showing 1 to 9 of 11 (2 Pages) </span>
                  </div>
               </div>
               <div class="shop-results-wrapper">
                  <div class="shop-results">
                     <span>Show:</span>
                     <div class="shop-select">
                        <select name="number" id="number">
                           <option value="9">9</option>
                           <option value="25">25</option>
                           <option value="50">50</option>
                           <option value="75">75</option>
                           <option value="100">100</option>
                        </select>
                     </div>
                  </div>
                  <div class="shop-results">
                     <span>Sort By:</span>
                     <div class="shop-select">
                        <select name="sort" id="sort">
                           <option value="position">Default sorting</option>
                           <option value="p-name">Sort By Popularity</option>
                           <option value="p-price">Sort By Price</option>
                        </select>
                     </div>
                  </div>
               </div>
            </div>
            <div class="ht-product-shop tab-content text-center">
               <div class="tab-pane active show fade" id="grid" role="tabpanel">
                  <div class="custom-row">
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
                     <div class="custom-col">
                        <div class="single-product-item">
                           <div class="product-image">
                              <a href="#">
                              <img src="assets/img/product/3.jpg" alt=""/>
                              </a>  
                              <div class="product-hover">
                                 <ul class="hover-icon-list">
                                    <li>
                                       <a href="#"><i class="icon icon-Heart"></i></a>
                                    </li>
                                    <li>
                                       <a href="#"><i class="icon icon-Restart"></i></a>
                                    </li>
                                    <li><a href="assets/img/product/3.jpg" data-toggle="modal" data-target="#productModal"><i class="icon icon-Search"></i></a></li>
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
                              <h5><a href="#">Red Capsicum</a></h5>
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
                              <img src="assets/img/product/4.jpg" alt=""/>
                              </a>  
                              <div class="product-hover">
                                 <ul class="hover-icon-list">
                                    <li>
                                       <a href="#"><i class="icon icon-Heart"></i></a>
                                    </li>
                                    <li>
                                       <a href="#"><i class="icon icon-Restart"></i></a>
                                    </li>
                                    <li><a href="assets/img/product/4.jpg" data-toggle="modal" data-target="#productModal"><i class="icon icon-Search"></i></a></li>
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
                              <h5><a href="#">Rippen Mango</a></h5>
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
                              <img src="assets/img/product/5.jpg" alt=""/>
                              </a>  
                              <div class="product-hover">
                                 <ul class="hover-icon-list">
                                    <li>
                                       <a href="#"><i class="icon icon-Heart"></i></a>
                                    </li>
                                    <li>
                                       <a href="#"><i class="icon icon-Restart"></i></a>
                                    </li>
                                    <li><a href="assets/img/product/5.jpg" data-toggle="modal" data-target="#productModal"><i class="icon icon-Search"></i></a></li>
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
                              <h5><a href="#">Farm's Onion</a></h5>
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
                              <img src="assets/img/product/6.jpg" alt=""/>
                              </a>  
                              <div class="product-hover">
                                 <ul class="hover-icon-list">
                                    <li>
                                       <a href="#"><i class="icon icon-Heart"></i></a>
                                    </li>
                                    <li>
                                       <a href="#"><i class="icon icon-Restart"></i></a>
                                    </li>
                                    <li><a href="assets/img/product/6.jpg" data-toggle="modal" data-target="#productModal"><i class="icon icon-Search"></i></a></li>
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
                              <h5><a href="#">Fresh Coconut</a></h5>
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
                              <h5><a href="#">Fresh Banana</a></h5>
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
                              <h5><a href="#">Red Capsicum</a></h5>
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
                              <h5><a href="#">Rippen Mango</a></h5>
                              <div class="pro-price">
                                 <span class="new-price">$20.00</span> 
                                 <span class="old-price">$28.00</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="tab-pane fade text-left" id="list" role="tabpanel">
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
                        </div>
                     </div>
                     <div class="product-text">
                        <h5><a href="#">Farm Fresh Black Grape</a></h5>
                        <div class="product-rating">
                           <i class="fa fa-star-o color"></i>
                           <i class="fa fa-star-o color"></i>
                           <i class="fa fa-star-o color"></i>
                           <i class="fa fa-star-o"></i>
                           <i class="fa fa-star-o"></i>
                        </div>
                        <div class="pro-price">
                           <span class="new-price">$110.00</span> 
                           <span class="old-price">$122.00</span>
                        </div>
                        <p>Go for bananas with very small patches of black and used to make banana bread or served with single cream and sugar.</p>
                        <button type="button" class="p-cart-btn default-btn">Add to cart</button>
                     </div>
                  </div>
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
                        </div>
                     </div>
                     <div class="product-text">
                        <h5><a href="#">Wonderfully Sweet Banana</a></h5>
                        <div class="product-rating">
                           <i class="fa fa-star-o color"></i>
                           <i class="fa fa-star-o color"></i>
                           <i class="fa fa-star-o color"></i>
                           <i class="fa fa-star-o"></i>
                           <i class="fa fa-star-o"></i>
                        </div>
                        <div class="pro-price">
                           <span class="new-price">$90.00</span> 
                           <span class="old-price">$99.00</span>
                        </div>
                        <p>To eat straight away, go for bananas with very small patches of black on the ... Mashed and used to make banana bread.</p>
                        <button type="button" class="p-cart-btn default-btn">Add to cart</button>
                     </div>
                  </div>
                  <div class="single-product-item">
                     <div class="product-image">
                        <a href="#">
                        <img src="assets/img/product/3.jpg" alt=""/>
                        </a>  
                        <div class="product-hover">
                           <ul class="hover-icon-list">
                              <li>
                                 <a href="#"><i class="icon icon-Heart"></i></a>
                              </li>
                              <li>
                                 <a href="#"><i class="icon icon-Restart"></i></a>
                              </li>
                              <li><a href="assets/img/product/3.jpg" data-toggle="modal" data-target="#productModal"><i class="icon icon-Search"></i></a></li>
                           </ul>
                        </div>
                     </div>
                     <div class="product-text">
                        <h5><a href="#">Fresh Red Capcicum</a></h5>
                        <div class="product-rating">
                           <i class="fa fa-star-o color"></i>
                           <i class="fa fa-star-o color"></i>
                           <i class="fa fa-star-o color"></i>
                           <i class="fa fa-star-o"></i>
                           <i class="fa fa-star-o"></i>
                        </div>
                        <div class="pro-price">
                           <span class="new-price">$190.00</span> 
                           <span class="old-price">$120.00</span>
                        </div>
                        <p>The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed specifically fo..</p>
                        <button type="button" class="p-cart-btn default-btn">Add to cart</button>
                     </div>
                  </div>
                  <div class="single-product-item">
                     <div class="product-image">
                        <a href="#">
                        <img src="assets/img/product/4.jpg" alt=""/>
                        </a>  
                        <div class="product-hover">
                           <ul class="hover-icon-list">
                              <li>
                                 <a href="#"><i class="icon icon-Heart"></i></a>
                              </li>
                              <li>
                                 <a href="#"><i class="icon icon-Restart"></i></a>
                              </li>
                              <li><a href="assets/img/product/4.jpg" data-toggle="modal" data-target="#productModal"><i class="icon icon-Search"></i></a></li>
                           </ul>
                        </div>
                     </div>
                     <div class="product-text">
                        <h5><a href="#">Healthy Juicy Mango</a></h5>
                        <div class="product-rating">
                           <i class="fa fa-star-o color"></i>
                           <i class="fa fa-star-o color"></i>
                           <i class="fa fa-star-o color"></i>
                           <i class="fa fa-star-o"></i>
                           <i class="fa fa-star-o"></i>
                        </div>
                        <div class="pro-price">
                           <span class="new-price">$80.00</span> 
                           <span class="old-price">$70.00</span>
                        </div>
                        <p>The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed specifically fo..</p>
                        <button type="button" class="p-cart-btn default-btn">Add to cart</button>
                     </div>
                  </div>
                  <div class="single-product-item">
                     <div class="product-image">
                        <a href="#">
                        <img src="assets/img/product/6.jpg" alt=""/>
                        </a>  
                        <div class="product-hover">
                           <ul class="hover-icon-list">
                              <li>
                                 <a href="#"><i class="icon icon-Heart"></i></a>
                              </li>
                              <li>
                                 <a href="#"><i class="icon icon-Restart"></i></a>
                              </li>
                              <li><a href="assets/img/product/6.jpg" data-toggle="modal" data-target="#productModal"><i class="icon icon-Search"></i></a></li>
                           </ul>
                        </div>
                     </div>
                     <div class="product-text">
                        <h5><a href="#">Fresh Large Coconut</a></h5>
                        <div class="product-rating">
                           <i class="fa fa-star-o color"></i>
                           <i class="fa fa-star-o color"></i>
                           <i class="fa fa-star-o color"></i>
                           <i class="fa fa-star-o"></i>
                           <i class="fa fa-star-o"></i>
                        </div>
                        <div class="pro-price">
                           <span class="new-price">$70.00</span> 
                           <span class="old-price">$50.00</span>
                        </div>
                        <p>The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed specifically fo..</p>
                        <button type="button" class="p-cart-btn default-btn">Add to cart</button>
                     </div>
                  </div>
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
                        </div>
                     </div>
                     <div class="product-text">
                        <h5><a href="#">Chemical Free Fresh Juice</a></h5>
                        <div class="product-rating">
                           <i class="fa fa-star-o color"></i>
                           <i class="fa fa-star-o color"></i>
                           <i class="fa fa-star-o color"></i>
                           <i class="fa fa-star-o"></i>
                           <i class="fa fa-star-o"></i>
                        </div>
                        <div class="pro-price">
                           <span class="new-price">$200.00</span> 
                           <span class="old-price">$100.00</span>
                        </div>
                        <p>The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed specifically fo..</p>
                        <button type="button" class="p-cart-btn default-btn">Add to cart</button>
                     </div>
                  </div>
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
                        </div>
                     </div>
                     <div class="product-text">
                        <h5><a href="#">Fresh Pineapple</a></h5>
                        <div class="product-rating">
                           <i class="fa fa-star-o color"></i>
                           <i class="fa fa-star-o color"></i>
                           <i class="fa fa-star-o color"></i>
                           <i class="fa fa-star-o"></i>
                           <i class="fa fa-star-o"></i>
                        </div>
                        <div class="pro-price">
                           <span class="new-price">$190.00</span> 
                           <span class="old-price">$120.00</span>
                        </div>
                        <p>The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed specifically fo..</p>
                        <button type="button" class="p-cart-btn default-btn">Add to cart</button>
                     </div>
                  </div>
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
                        </div>
                     </div>
                     <div class="product-text">
                        <h5><a href="#">Farm's Fresh Cucumber</a></h5>
                        <div class="product-rating">
                           <i class="fa fa-star-o color"></i>
                           <i class="fa fa-star-o color"></i>
                           <i class="fa fa-star-o color"></i>
                           <i class="fa fa-star-o"></i>
                           <i class="fa fa-star-o"></i>
                        </div>
                        <div class="pro-price">
                           <span class="new-price">$190.00</span> 
                           <span class="old-price">$120.00</span>
                        </div>
                        <p>The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed specifically fo..</p>
                        <button type="button" class="p-cart-btn default-btn">Add to cart</button>
                     </div>
                  </div>
               </div>
            </div>
            <div class="pagination-wrapper">
               <p>Showing 1 to 9 of 11 (2 Pages)</p>
               <nav aria-label="navigation">
                  <ul class="pagination">
                     <li class="page-item active"><a class="page-link" href="#">1</a></li>
                     <li class="page-item"><a class="page-link" href="#">2</a></li>
                     <li class="page-item"><a class="page-link" href="#">></a></li>
                     <li class="page-item"><a class="page-link" href="#">>|</a></li>
                  </ul>
               </nav>
            </div>
         </div>
      </div>
    </div>
  );
};

export default template;
