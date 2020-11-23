import React,{useContext,useEffect,useState} from 'react'
import {GroceryContext} from '../providers/provider'
import {CartItem} from './cart-item'
const Cart=()=>{
    const {cart}=useContext(GroceryContext)
    const {images}=useContext(GroceryContext)
     const {shirheg}=useContext(GroceryContext)
     const {mungu}=useContext(GroceryContext)
  const {checkoutCart}=useContext(GroceryContext)
    return(
        <div className='hemjee'>
            <div className='Cart'>Cart</div>
            <div className='container-of-cart'>
            <div className="Doosho-scroll">
             { 
                 cart.map((item,index)=>{
                     return<CartItem tailbar={item.tailbar} jin={item.jin} heed={item.quantity} image={item.image} une={item.une} item={item} index={index}/>
                 })
             }
         </div>
         </div>
          <div className='Container-of-Checkout'>
            <button className='urt' onClick={()=>checkoutCart(cart)}>Go to Checkout ${mungu}</button>
           </div>
        </div>
    )
}
export {Cart}