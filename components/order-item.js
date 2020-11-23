import React,{useContext,useEffect,useState} from 'react'
import {GroceryContext} from '../providers/provider'
const OrderItem=({item})=>{
console.log(item)
    return(
        <div className="p">
         <img  className='togtmol-zurag-utga' src={item.image}/>
         <div className="Ugzui">{item.tailbar}</div>
         <div className='todorhoilolt'>{item.jin}</div>
         <div className='ene-you'>
          <div className='une'>${item.une}</div>
           <div className="oow">{item.quantity}</div>
           </div>
         </div>
     
    )
}
export {OrderItem}