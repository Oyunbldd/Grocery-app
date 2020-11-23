import React,{useContext,useEffect,useState} from 'react'
import {GroceryContext} from '../providers/provider'
import {Order} from './order'
const Orders=()=>{
const {orders}=useContext(GroceryContext)
console.log(orders)
    return(
        <div className='gg'>
            <div className="ug">Orders</div>
            <div className="or">
          {orders.map((item,index)=>{
             return <Order index={index}/>
         })
         }
         </div>
        </div>
    )
}
export {Orders}