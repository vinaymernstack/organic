import React from 'react';
import './App.css';

import Homepage from './homepage/homepage'
import Errorpage from './errorpage/errorpage'
import Blog2colomn from './blog2column/blog2column'
import Blog3colomn from './blog3column/blog3column'
import Blogdetails from './blogdetails/blogdetails'
import Blogleftsidebar from './blogleftsidebar/blogleftsidebar'
import Blogdetailsleftsider from './blogdetailsleftsider/blogdetailsleftsider'
import Cart from './cart/cart'
import Checkout from './checkout/checkout'
import Contact from './contact/contact'
import Shop from './shop/shop'
import Shopfullwidth from './shopfullwidth/shopfullwidth'
import Shoprightsidebar from './shoprightsidebar/shoprightsidebar'
import Wishlist from './wishlist/wishlist'
import productdetails from './productdetails/productdetails'
import {Route,BrowserRouter as Router} from "react-router-dom"


function App() {
  return (
    <div>
      <Router>
        <Route path='/' exact strict component={Homepage}/>
        <Route path="/errorpage" component={Errorpage}/>
        <Route path='/home' component={Homepage}/>
        <Route path='/blog2column' component={Blog2colomn}/>
        <Route path='/blog3column' component={Blog3colomn}/>
        <Route path='/blogdetails' component={Blogdetails}/>
        <Route path='/blogleftsidebar' component={Blogleftsidebar}/>
        <Route path='/blogdetailsleftsider' component={Blogdetailsleftsider}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/checkout' component={Checkout}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/shopfullwidth' component={Shopfullwidth}/>
        <Route path='/shoprightsidebar' component={Shoprightsidebar}/>
        <Route path='/wishlist' component={Wishlist}/>
        <Route path='/productdetails' component={productdetails}/>
    </Router>
    </div>
  );
}

export default App;
