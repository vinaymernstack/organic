import React    from "react";
import Header from '../header/header';
import Footer from '../footer/footer';
import './cart.css'
import { connect } from 'react-redux'
import $ from 'jquery'
import {Link} from "react-router-dom"
class cart extends React.Component {
   state = {
      no_items : [],
      price:[],
      coupan : 0
   }
   applycoupen=()=>{
      if($("#coupan").val()==="vinay"){
         this.setState({
            coupan : 0.3
         })
         this.props.coupan(0.3)
      }else{
         $("#coupanMsg").show()
         setTimeout(()=>{$("#coupanMsg").hide()},3000)
         this.props.coupan(0)
      }
   }
   changeNum=(event)=>{
      if(event.target.value >= 0){
      let id = event.target.id
      let value = event.target.value
      this.state.no_items[id] = value
      this.props.onChangeCount(id,value)
      }
   }
  render() {
     let total = 0
    let loopdata = this.props.addedItems.map((data,index)=>{
      let getnum = data.newprice.slice(1,3)
      let price = parseInt(getnum)
     let  subvalue = (data.no_items * price)
     total = total + subvalue
       this.state.no_items.push(data.no_items)
      return <tr> 
      <td class="table-remove"><button><i class="fa fa-trash"></i></button></td>
      <td class="table-image"><a href="#"><img src={data.image} alt=""/></a></td>
      <td class="table-p-name"><a href="#">{data.name}</a></td>
      <td class="table-p-price">
         <p>{data.newprice}</p>
      </td>
      <td class="table-p-qty"><input value={this.state.no_items[index]} name="cart-qty" type="number" id={index} onChange={this.changeNum.bind(this)}/></td>
      <td class="table-total">
         <p>${subvalue}.00</p>
      </td>
   </tr>
    })
    let vat = total * 0.2
    let totalcost = total+9+vat
     let coupanDiscount = total*this.state.coupan
      totalcost = totalcost-coupanDiscount
    return (
      <div>
        <Header/>
        <div className="cart">
      <div class="breadcrumb-area bg-12 text-center">
         <div class="container">
            <h1>My Cart</h1>
            <nav aria-label="breadcrumb">
               <ul class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Cart</li>
               </ul>
            </nav>
         </div>
      </div>
      

      <div class="cart-area table-area pt-110 pb-95">
         <div class="container">
            <div class="table-responsive">
               <table class="table product-table text-center">
                  <thead>
                     <tr>
                        <th class="table-remove">remove</th>
                        <th class="table-image">image</th>
                        <th class="table-p-name">product</th>
                        <th class="table-p-price">price</th>
                        <th class="table-p-qty">quantity</th>
                        <th class="table-total">total</th>
                     </tr>
                  </thead>
                  <tbody>
                    {loopdata}
                  </tbody>
               </table>
            </div>
            <div class="table-bottom-wrapper">
               <div class="table-coupon d-flex fix justify-content-start">
                  <input type="text" placeholder="Coupon code" id="coupan"/>
                  <button type="submit" onClick = {this.applycoupen}>Apply coupon</button>
                   
               </div>
               <div id="coupanMsg"> ** coupan not valid</div> 
               <div class="table-update d-flex justify-content-end">
                  <button type="button" disabled>Update cart</button>
               </div>
            </div>
         </div>
         <div class="container">
            <div class="table-total-wrapper d-flex justify-content-end pt-60">
               <div class="table-total-content">
                  <h2>Cart totals</h2>
                  <div class="table-total-amount">
                     <div class="single-total-content d-flex justify-content-between">
                        <span>Subtotal</span>
                        <span class="c-total-price">${total}.00</span>
                     </div>
                     <div class="single-total-content d-flex justify-content-between">
                        <span>Shipping</span>
                        <span class="c-total-price"><span>Flat Rate:</span> $5.00</span>
                     </div>
                     <div class="single-total-content d-flex justify-content-end">
                        <a href="#">Calculate shipping</a>
                     </div>
                     <div class="single-total-content d-flex justify-content-between">
                        <span>ECO TAX</span>
                        <span class="c-total-price">$4.00</span>
                     </div>
                     <div class="single-total-content d-flex justify-content-between">
                        <span>VAT(20%)</span>
                        <span class="c-total-price">${vat}.00</span>
                     </div>
                     <div class="single-total-content d-flex justify-content-between">
                        <span>COUPAN DISCOUNT</span>
                        <span class="c-total-price">- ${coupanDiscount}.00</span>
                     </div>
                     <div class="single-total-content d-flex justify-content-between">
                        <span>Total</span>
                        <span class="c-total-price">${totalcost}.00</span>
                     </div>
                     <Link to="/checkout">Proceed to checkout</Link>
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

let mapStateToProps = state => {
  return {
    addedItems : state.selectedItems,
    
  }
}

let mapDispatchToProps = dispatch =>{
   return{
      onChangeCount : (id,value) => dispatch({type:"onChange",index:id,val:value}),
      coupan : (value) => dispatch({type:"coupan",val:value})
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(cart);
