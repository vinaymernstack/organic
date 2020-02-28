import "./wishlist.css";
import React from "react";

function template() {
  return (
    <div className="wishlist">
      <div class="breadcrumb-area bg-12 text-center">
         <div class="container">
            <h1>My Wishlist</h1>
            <nav aria-label="breadcrumb">
               <ul class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Wishlist</li>
               </ul>
            </nav>
         </div>
      </div>
    
      <div class="wishlist-area table-area pt-110 pb-95">
         <div class="container">
            <div class="table-responsive">
               <table class="table product-table text-center">
                  <thead>
                     <tr>
                        <th class="table-remove">remove</th>
                        <th class="table-image">image</th>
                        <th class="table-p-name">Product Name</th>
                        <th class="table-p-price">Unit Price</th>
                        <th class="table-stock">Stock Status</th>
                        <th class="table-add-cart">total</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td class="table-remove"><button><i class="fa fa-trash"></i></button></td>
                        <td class="table-image"><a href="#"><img src="assets/img/product/3.jpg" alt=""/></a></td>
                        <td class="table-p-name"><a href="#">Habitasse dictumst</a></td>
                        <td class="table-p-price">
                           <p><span class="line-through">$85.00</span> $79.00</p>
                        </td>
                        <td class="table-stock"><span>In Stock</span></td>
                        <td class="table-add-cart"><a href="#">Add to cart</a></td>
                     </tr>
                     <tr>
                        <td class="table-remove"><button><i class="fa fa-trash"></i></button></td>
                        <td class="table-image"><a href="#"><img src="assets/img/product/4.jpg" alt=""/></a></td>
                        <td class="table-p-name"><a href="#">Kaoreet lobortis</a></td>
                        <td class="table-p-price">
                           <p>$145.00</p>
                        </td>
                        <td class="table-stock"><span>In Stock</span></td>
                        <td class="table-add-cart"><a href="#">Add to cart</a></td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
    </div>
  );
};

export default template;
