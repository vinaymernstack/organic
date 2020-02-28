import React    from "react";
import Template from "./header.jsx"
import {Link} from 'react-router-dom'
import 'jquery/dist/jquery.slim.min'
import $ from "jquery";
import Loginandreg from '../login$register/login$register'
import { connect } from 'react-redux'
class header extends React.Component {
   componentDidMount(){
      $(".search-wrapper > a").on("click", function() {
         $('.search-form').toggleClass('active');
     });
     
     $(".settings-wrapper").on("click", function() {
         $('.settings-content').toggleClass('active');
     }); 
     
     $(".cart-wrapper > a").on("click", function() {
         $('.cart-item-wrapper').toggleClass('active');
     });

     $(window).on("click",()=>{
      
     })

     let $windows = $(window);
  let sticky = $('.header-sticky');
 $windows.on('scroll', function() {
     var scroll = $windows.scrollTop();
     if (scroll < 300) {
         sticky.removeClass('sticky');
     }else{
         sticky.addClass('sticky');
     }
 });
   }
   
    state = {
       url:"",
    }

    searchitems = (event) => {
      this.data.arrey.map((searchdata,index)=>{
         if(searchdata.name === event.target.value){
            this.setState({
               url:"/productdetails",
            })
            this.props.searchdata(this.data.arrey[index])
         }
      })
      
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
  
  render() {
     let indexnum = this.props.items.length 
     let subvalue = 0
     console.log(this.props.items)
     const loopSelectedData  = this.props.items.map((info,index) =>{
        let getnum = info.newprice.slice(1,3)
        let price = parseInt(getnum)
        subvalue = (info.no_items * price)+subvalue
        console.log(price)
        if(index <= 1){
      return <div class="single-cart-item">
         <div class="cart-img"> 
            <a href="#"><img src={info.image} alt="" className="cartimg"/></a>
         </div>
         <div class="cart-text-btn">
            <div class="cart-text">
               <h5><a href="#">{info.name}</a></h5>
               <span class="cart-qty">×{info.no_items}</span>
               <span class="cart-price">{info.newprice}</span>
            </div>
            <button type="button"><i class="fa fa-close" onClick={this.props.deletitem} ></i></button>
         </div>
      </div>
      }
   })
   let VAT = parseInt(0.2 * subvalue)
   let totalvalue = subvalue + VAT + 4
    return (
      <header class="header-area header-sticky">
         <div class="header-container">
            <div class="row">
               <div class="col-lg-5 display-none-md display-none-xs">
                  <div class="ht-main-menu">
                     <nav>
                        <ul>
                           <li class="active"><Link to="/">home</Link></li>
                           <li>
                              <a href="#">vegetables <i class="fa fa-angle-down"></i></a>
                              <ul class="ht-mega-menu">
                                 <li>
                                    <ul>
                                       <li class="mega-menu-title">Bags</li>
                                       <li><Link to="/errorpage">Crochet</Link></li>
                                       <li><Link to="/errorpage">Sleeveles</Link></li>
                                       <li><Link to="/errorpage">Stripes</Link></li>
                                       <li><Link to="/errorpage">Sweaters</Link></li>
                                       <li><a href="#"><img src="assets/img/banner/menu-1.jpg" alt=""/></a></li>
                                    </ul>
                                 </li>
                                 <li>
                                    <ul>
                                       <li class="mega-menu-title">Bottoms</li>
                                       <li><Link to="/errorpage">Flat sandals</Link></li>
                                       <li><Link to="/errorpage">Heeled sandals</Link></li>
                                       <li><Link to="/errorpage">Polo Short Sleeve</Link></li>
                                       <li><Link to="/errorpage">Short Sleeve</Link></li>
                                       <li><a href="#"><img src="assets/img/banner/menu-2.jpg" alt=""/></a></li>
                                    </ul>
                                 </li>
                                 <li>
                                    <ul>
                                       <li class="mega-menu-title">Shirts</li>
                                       <li id="check"><Link to="/errorpage">Flat sandals</Link></li>
                                       <li><Link to="/errorpage">Heeled sandals</Link></li>
                                       <li><Link to="/errorpage">Polo Short Sleeve</Link></li>
                                       <li><Link to="/errorpage">Short Sleeve</Link></li>
                                       <li><a href="#"><img src="assets/img/banner/menu-3.jpg" alt=""/></a></li>
                                    </ul>
                                 </li>
                              </ul>
                           </li>
                           <li>
                              <a href="#">Shop <i class="fa fa-angle-down"></i></a>
                              <ul>
                                 <li><Link to="/shopfullwidth">shop full Width</Link></li>
                                 <li><Link to="/shoprightsidebar">shop Right Sidebar</Link></li>
                                 <li><Link to="/wishlist">Wishlist Page</Link></li>
                                 <li><Link to="/cart">cart Page</Link></li>
                                 <li><Link to="/checkout">checkout Page</Link></li>
                                 <li><Link to="/errorpage">Single Shop</Link></li>
                              </ul>
                           </li>
                           
                           
                           <li>
                              <a href="#">blog <i class="fa fa-angle-down"></i></a>
                              <ul>
                                 <li><Link to="/blog2column">blog 2 column</Link></li>
                                 <li><Link to="/blog3column">blog 3 column</Link></li>
                                 <li><Link to="/blogleftsidebar">blog Left Sidebar</Link></li>
                                 <li><Link to="/blogdetails">blog details</Link></li>
                                 <li><Link to="/blogdetailsleftsider">blog details left Sidebar</Link></li>
                              </ul>
                           </li>
                           <li><Link to="/contact">contact</Link></li>
                        </ul>
                     </nav>
                  </div>
               </div>
               <div class="col-lg-2 col-sm-4">
                  <div class="logo text-center">
                     <a href="#"><img src="assets/img/logo/logo.png" alt="Organic"/></a>
                  </div>
               </div>
               <div class="col-lg-5 col-sm-8">
                  <div class="header-content d-flex justify-content-end">
                     <div class="search-wrapper">
                        <a href="#"><span class="icon icon-Search"></span></a>
                        <form action="#" class="search-form">
                           <input type="text" placeholder="Search entire store here ..." onChange={this.searchitems.bind(this)}/>
                          <Link to={this.state.url}> <button type="button">Search</button></Link>
                        </form>
                     </div>
                     <div class="settings-wrapper">
                        <a href="#"><i class="icon icon-Settings"></i></a>
                        <div class="settings-content">
                           <h4>My Account <i class="fa fa-angle-down"></i></h4>
                           <ul>
                              <li><a href="#" class="modal-view button" data-toggle="modal" data-target="#register_box">Register</a></li>
                              <li><a href="#" class="modal-view button" data-toggle="modal" data-target="#login_box">login</a></li>
                           </ul>
                           <h4>Currency: USD <i class="fa fa-angle-down"></i></h4>
                           <ul>
                              <li><a href="#">€ Euro</a></li>
                              <li><a href="#">£ Pound Sterling</a></li>
                              <li><a href="#">$ Us Dollar</a></li>
                           </ul>
                           <h4>Language: en-gb <i class="fa fa-angle-down"></i></h4>
                           <ul>
                              <li>
                                 <a href="#"><img src="assets/img/icon/flag-1.png" alt=""/>English</a>
                              </li>
                              <li>
                                 <a href="#"><img src="assets/img/icon/flag-2.png" alt=""/>Germany</a>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div class="cart-wrapper">
                        <a href="#">
                        <i class="icon icon-FullShoppingCart"></i>
                        <span>{indexnum}</span>
                        </a>
                        <div class="cart-item-wrapper" >
                           
                           {loopSelectedData}
                           
                           <div class="cart-price-total">
                              <div class="cart-price-info d-flex justify-content-between">
                                 <span>Sub-Total :</span>
                                 <span>${subvalue}.00</span>
                              </div>
                              <div class="cart-price-info d-flex justify-content-between">
                                 <span>Eco Tax (-2.00) :</span>
                                 <span>$4.00</span>
                              </div>
                              <div class="cart-price-info d-flex justify-content-between">
                                 <span>VAT (20%) :</span>
                                 <span>${VAT}.00</span>
                              </div>
                              <div class="cart-price-info d-flex justify-content-between">
                                 <span>Total :</span>
                                 <span>${totalvalue}.00</span>
                              </div>
                           </div>
                           <div class="cart-links">
                              <Link to="/cart"> View cart </Link>
                              <Link to="/checkout"> Checkout </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         
        
         <div class="mobile-menu-area">
            <div class="mobile-menu container">
               <nav id="mobile-menu-active">
                  <ul class="menu-overflow">
                     <li>
                        <a href="#">HOME</a>
                       
                     </li>
                     <li>
                        <a href="#">Shop</a>
                        <ul>
                           <li><a href="#">shop full Width</a></li>
                           <li><a href="#">shop Right Sidebar</a></li>
                           <li><a href="#">Wishlist Page</a></li>
                           <li><a href="#">cart Page</a></li>
                           <li><a href="#">checkout Page</a></li>
                           <li><a href="#">Single Shop</a></li>
                        </ul>
                     </li>
                     <li>
                        <a href="#">Blog</a>
                        <ul>
                           <li><a href="#">blog 2 column</a></li>
                           <li><a href="#">blog 3 column</a></li>
                           <li><a href="#">blog Left Sidebar</a></li>
                           <li><a href="#">blog details</a></li>
                           <li><a href="#">blog details left Sidebar</a></li>
                        </ul>
                     </li>
                     <li><a href="#">Contact</a></li>
                     <li><a href="#">404</a></li>
                  </ul>
               </nav>
            </div>
         </div>
         <Loginandreg/>        
      </header>
    );
  }
}

let mapStateToProps = state => {
   return {
      items : state.selectedItems
   }
}
 let mapdispatchToProps = dispatch =>{
    return{
       deletitem : (index)=> dispatch({type:"deletItem",val:index}),
       searchdata : (data) => dispatch({type:"searchitem",val:data})
    }
 }

export default connect(mapStateToProps,mapdispatchToProps)(header);
