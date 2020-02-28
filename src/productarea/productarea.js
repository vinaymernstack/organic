import React    from "react";
import { connect } from "react-redux"
import template from "./productarea.jsx";
import $ from "jquery"
import Axios from "axios"
import { Link } from "react-router-dom";

class Productarea extends React.Component {
    componentDidMount(){
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
/*-------------------------------------
    Timer Product Carousel Slider
----------------------------------------*/
    var timerSlider = $('.timer-carousel'); 
    timerSlider.slick({
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '0',
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
                    slidesToShow: 2,
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
                }
            }
        ]
    });
/*--------------------------------------
    Product Slider Two
----------------------------------------*/
    var productSliderTwo = $('.product-carousel-two'); 
    productSliderTwo.slick({
        arrows: true,
        infinite: true,
        slidesToShow: 6,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                }
            },
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
                }
            }
        ]
    });
    $("#organic").css({color:"red"})
    $('.single-slide-menu').slick({
        dots: false,
        arrows: false,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
	});
    $('.modal').on('shown.bs.modal', function (e) {
        $('.single-slide-menu').resize();
    })
    $('.single-slide-menu a').on('click',function(e){
        e.preventDefault();
        var $href = $(this).attr('href');
        $('.single-slide-menu a').removeClass('active');
        $(this).addClass('active');
        $('.product-details-large .tab-pane').removeClass('active show');
        $('.product-details-large '+ $href ).addClass('active show');
    });
    }


  data={
    arrey:[{
        image:"assets/img/product/1.jpg",
        name:"Grapes",
        newprice:"$40.00",
        oldprice:"$43.00",
    },{
        image:"assets/img/product/2.jpg",
        name:"Fresh Banana",
        newprice:"$40.00",
        oldprice:"$43.00",
    },{
        image:"assets/img/product/3.jpg",
        name:"Red Capsicum",
        newprice:"$40.00",
        oldprice:"$43.00",
    },{
        image:"assets/img/product/4.jpg",
        name:"Rippen Mango",
        newprice:"$40.00",
        oldprice:"$43.00",
    },{
        image:"assets/img/product/5.jpg",
        name:"Farm's Onion",
        newprice:"$40.00",
        oldprice:"$43.00",
    },{
        image:"assets/img/product/9.jpg",
        name:"Fresh Cucumber",
        newprice:"$86.00",
        oldprice:"$92.00",
    },{
        image:"assets/img/product/10.jpg",
        name:"Fresh Grape",
        newprice:"$40.00",
        oldprice:"$43.00",
    },{
        image:"assets/img/product/11.jpg",
        name:"Farm's Cucumber",
        newprice:"$36.00",
        oldprice:"$43.00",
    },{
        image:"assets/img/product/12.jpg",
        name:"strewberry juice",
        newprice:"$40.00",
        oldprice:"$43.00",
    },{
        image:"assets/img/product/13.jpg",
        name:"Fresh Banana 5",
        newprice:"$40.00",
        oldprice:"$43.00",
    }]
}

state = {
    selectedItems:[],
}


productlistdata=(event)=>{
    let indexNum = event.target.id
    this.props.productlist(this.data.arrey[indexNum])
    
}
addcartdata=(event)=>{
    let indexNum = event.target.id
    this.props.addcart( this.data.arrey[indexNum])
}


 loopdata1  =  this.data.arrey.map((productinfo,index)=>{ 
     if(index <= 4){
    return  <div> 
        <div class="custom-col">
                        <div class="single-product-item">
                           <div class="product-image">
                              <a href="#">
                              <img src={productinfo.image} alt=""/>
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
                                 <button type="button" class="p-cart-btn" id={index} onClick={this.addcartdata}
                                  >Add to cart</button>
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
                            <h5><Link to="/productdetails" onClick={this.productlistdata} id={index} >{productinfo.name}</Link></h5>
                              <div class="pro-price">
                                 <span class="new-price">{productinfo.newprice}</span> 
                                 <span class="old-price">{productinfo.oldprice}</span>
                              </div>
                           </div>
                        </div>
                     </div>
            </div>
              
   }
})

 loopdata2  =  this.data.arrey.map((productinfo,index)=>{ 
   
    if(index > 4){

    return <div> 
        <div class="custom-col">
                        <div class="single-product-item">
                           <div class="product-image">
                              <a href="#">
                              <img src={productinfo.image} alt=""/>
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
                                 <button type="button" class="p-cart-btn" id={index} onClick={this.addcartdata}
                                  >Add to cart</button>
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
                            <h5><Link to="/productdetails" onClick={this.productlistdata} id={index} >{productinfo.name}</Link></h5>
                              <div class="pro-price">
                                 <span class="new-price">{productinfo.newprice}</span> 
                                 <span class="old-price">{productinfo.oldprice}</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     </div>           
   }
})
  
  render() {
    return template.call(this);
    
  }
}
 const mapStateToProps = state =>{
    return {
        ctr : state.selectedItems,
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        addcart : (selectItem)=> dispatch({type:"addcart",val:selectItem}),
        productlist : (selectItem)=> dispatch({type:"productlist",val:selectItem}),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Productarea);
