import React    from "react";
import Template from "./productdetails.jsx";
import Header from '../header/header';
import Footer from '../footer/footer';
import $ from 'jquery'
import {connect} from 'react-redux'
import 'easyzoom'
class productdetails extends React.Component {
   componentDidMount(){
      $('.small-image-slider-single-product-tabstyle-3').slick({
         prevArrow: '<i class="fa fa-angle-left"></i>',
         nextArrow: '<i class="fa fa-angle-right slick-next-btn"></i>',
         arrows: false,
         slidesToShow: 4,
         responsive: [{
             breakpoint: 1200,
             settings: {
                 slidesToShow: 4,
                 slidesToScroll: 1
             }
         },
         {
             breakpoint: 991,
             settings: {
                 slidesToShow: 3,
                 slidesToScroll: 1
             }
         },
         {
             breakpoint: 767,
             settings: {
                 slidesToShow: 3,
                 slidesToScroll: 3
             }
         },
         {
             breakpoint: 480,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2
             }
         }]
     }); 
     $('.small-image-slider-single-product-tabstyle-3 a').on('click', function (e) {
         e.preventDefault();
   
         var $thisParent = $(this).closest('.product-image-slider');
         var $href = $(this).attr('href');
         $thisParent.find('.small-image-slider-single-product-tabstyle-3 a').removeClass('active');
         $(this).addClass('active');
         
         $thisParent.find('.product-large-image-list .tab-pane').removeClass('active show');
         $thisParent.find('.product-large-image-list ' + $href).addClass('active show');
         
     });
 
     var productSlider = $('.product-carousel'); 
     productSlider.slick({
         arrows: true,
         infinite: true,
         slidesToShow: 4,
         prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
         nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
         responsive: [
             {
                 breakpoint: 1200,
                 settings: {
                     slidesToShow: 3,
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
                 }
             }
         ]
     });
     $('.easyzoom').easyZoom();
   }
        

  render() {
    let list = this.props.listItems
      if(list == ""){
         list = {
         image : "assets/img/product/1.jpg"
         }
      }
      
    return (
      <div>
        <Header/>
        <div className="productdetails">
      <div class="breadcrumb-area bg-12 text-center">
         <div class="container">
            <h1>Single Shop</h1>
            <nav aria-label="breadcrumb">
               <ul class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#">Home siddhu</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Single Shop</li>
               </ul>
            </nav>
         </div>
      </div>
       

      <div class="product-detials-area bg-gray pt-110">
         <div class="container">
            <div class="row">
               <div class="col-lg-5 col-md-5">
                  <div class="product-image-slider d-flex flex-column">
                     
                     <div class="tab-content product-large-image-list">
                        <div class="tab-pane fade show active" id="product-slide1" role="tabpanel" aria-labelledby="product-slide-tab-1">
                           <div class="single-product-img easyzoom img-full">
                              <a href={list.image}><img src={list.image} class="img-fluid" alt=""/></a>
                           </div>
                        </div>
                        <div class="tab-pane fade" id="product-slide2" role="tabpanel" aria-labelledby="product-slide-tab-2">
                           <div class="single-product-img easyzoom img-full">
                              <a href="assets/img/product/1.jpg"><img src="assets/img/product/1.jpg" class="img-fluid" alt=""/></a>
                           </div>
                        </div>
                        <div class="tab-pane fade" id="product-slide3" role="tabpanel" aria-labelledby="product-slide-tab-3">
                           <div class="single-product-img easyzoom img-full">
                              <a href="assets/img/product/4.jpg"><img src="assets/img/product/4.jpg" class="img-fluid" alt=""/></a>
                           </div>
                        </div>
                        <div class="tab-pane fade" id="product-slide4" role="tabpanel" aria-labelledby="product-slide-tab-4">
                           <div class="single-product-img easyzoom img-full">
                              <a href="assets/img/product/7.jpg"><img src="assets/img/product/7.jpg" class="img-fluid" alt=""/></a>
                           </div>
                        </div>
                       
                     </div>
                

                     <div class="product-small-image-list">
                        <div class="nav small-image-slider-single-product-tabstyle-3" role="tablist">
                           <div class="single-small-image img-full">
                              <a data-toggle="tab" id="product-slide-tab-1" href="#product-slide1"><img src={list.image} class="img-fluid" alt=""/></a>
                           </div>
                           <div class="single-small-image img-full">
                              <a data-toggle="tab" id="product-slide-tab-2" href="#product-slide2"><img src="assets/img/product/1.jpg" class="img-fluid" alt=""/></a>
                           </div>
                           <div class="single-small-image img-full">
                              <a data-toggle="tab" id="product-slide-tab-3" href="#product-slide3"><img src="assets/img/product/4.jpg" class="img-fluid" alt=""/></a>
                           </div>
                           <div class="single-small-image img-full">
                              <a data-toggle="tab" id="product-slide-tab-4" href="#product-slide4"><img src="assets/img/product/7.jpg" class="img-fluid" alt=""/></a>
                           </div>
                           
                           
                        </div>
                     </div>
                     
                  </div>
               </div>
               <div class="col-lg-7 col-md-7">
                  <div class="product-details-text">
                     <h3>Room Decoration Items</h3>
                     <div class="p-rating-review">
                        <div class="product-rating">
                           <i class="fa fa-star-o color"></i>
                           <i class="fa fa-star-o color"></i>
                           <i class="fa fa-star-o color"></i>
                           <i class="fa fa-star-o"></i>
                           <i class="fa fa-star-o"></i>
                        </div>
                        <a href="#" class="scroll-down">(2 customer reviews)</a>
                     </div>
                     <h4>$98.00<span>$122.00</span></h4>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
                     <h5><i class="fa fa-check"></i>150 in stock</h5>
                     <form action="#" method="post">
                        <div class="add-cart-product">
                           <input type="number" placeholder="1"/>
                           <button type="button" class="default-btn">Add to cart</button>
                           <button type="button"><i class="icon icon-Heart"></i></button>
                           <button type="button"><i class="icon icon-Restart"></i></button>
                        </div>
                        <div class="product-tag-cat">
                           <div class="single-tag-cat">
                              <span class="p-d-title">Categories:</span>  
                              <a href="#">Fashion &amp; clothing</a>,
                              <a href="#">Men</a>
                           </div>
                           <div class="single-tag-cat">
                              <span class="p-d-title">Tag:</span>  
                              <a href="#">women</a>
                           </div>
                        </div>
                        <div class="product-share">
                           <span class="p-d-title">Share this product</span>
                           <ul class="p-social-links">
                              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                              <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                              <li><a href="#"><i class="fa fa-google"></i></a></li>
                              <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                           </ul>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
      
      
      <div class="product-review-tab-area bg-gray pt-90 pb-105">
         <div class="container scroll-area">
            <div class="p-d-tab-container">
               <div class="p-tab-btn">
                  <div class="nav" role="tablist">
                     <a class="active" href="#tab1" data-toggle="tab" role="tab" aria-selected="true" aria-controls="tab1">Description</a>
                     <a href="#tab2" data-toggle="tab" role="tab" aria-selected="false" aria-controls="tab2">Reviews (2)</a>
                  </div>
               </div>
               <div class="p-d-tab tab-content">
                  <div class="tab-pane active show fade" id="tab1" role="tabpanel">
                     <div class="tab-items">
                        <div class="product-desc-text">
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
                           <p>Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.</p>
                        </div>
                     </div>
                  </div>
                  <div class="tab-pane fade scroll-area" id="tab2" role="tabpanel">
                     <div class="tab-items">
                        <div class="p-review-wrapper">
                           <h3>2 reviews for Ornare sed consequat</h3>
                           <div class="single-review-item">
                              <div class="review-logo">
                                 <img src="assets/img/icon/logo.jpg" alt=""/>
                              </div>
                              <div class="p-review-text">
                                 <div class="rating-number">
                                    <i class="fa fa-star color"></i>
                                    <i class="fa fa-star color"></i>
                                    <i class="fa fa-star color"></i>
                                    <i class="fa fa-star color"></i>
                                    <i class="fa fa-star color"></i>
                                 </div>
                                 <span class="p-review-info"><span>admin</span> – March 23, 2018</span>
                                 <p>Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.</p>
                              </div>
                           </div>
                           <div class="single-review-item">
                              <div class="review-logo">
                                 <img src="assets/img/icon/logo.jpg" alt=""/>
                              </div>
                              <div class="p-review-text">
                                 <div class="rating-number">
                                    <i class="fa fa-star color"></i>
                                    <i class="fa fa-star color"></i>
                                    <i class="fa fa-star color"></i>
                                    <i class="fa fa-star color"></i>
                                    <i class="fa fa-star"></i>
                                 </div>
                                 <span class="p-review-info"><span>admin</span> – March 23, 2018</span>
                                 <p>Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.</p>
                              </div>
                           </div>
                        </div>
                        <form action="#" method="post" class="rating-form">
                           <h5>Add your rating</h5>
                           <div class="submit-rating">
                              <i class="fa fa-star-o"></i>
                              <i class="fa fa-star-o"></i>
                              <i class="fa fa-star-o"></i>
                              <i class="fa fa-star-o"></i>
                              <i class="fa fa-star-o"></i>
                           </div>
                           <label for="r-textarea">Your Review</label>
                           <textarea name="review" id="r-textarea" cols="30" rows="10"></textarea>
                           <label for="r-name">Name *</label>
                           <input type="text" placeholder="" id="r-name"/>
                           <label for="r-email">Email *</label>
                           <input type="email" placeholder="" id="r-email"/>
                           <button type="button" class="default-btn">Submit</button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    

      <div class="product-area bg-gray pb-80 mb-95 related-product">
         <div class="container">
            <div class="section-title text-center">
               <div class="section-img d-flex justify-content-center">
                  <img src="assets/img/icon/title.png" alt=""/>
               </div>
               <h2><span>Organic </span>Related products</h2>
            </div>
         </div>
         <div class="container text-center">
            <div class="product-carousel">
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
            </div>
         </div>
      </div>
    </div>
        <Footer/>
      </div>
    )
    
  }
}

const mapStateToProps = state =>{
    return{
        listItems : state.productlist
    }
}

export default connect(mapStateToProps) (productdetails);
