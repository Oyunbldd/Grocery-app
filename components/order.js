import React,{useContext,useEffect,useState} from 'react'
import {GroceryContext} from '../providers/provider'
import {OrderItem} from './order-item'
const Order=({index})=>{
    const {orders}=useContext(GroceryContext)
    const day=new Date()
    const date=day.getFullYear()+'-'+(day.getMonth()+1)+'-'+day.getDate()+' '+day.getHours()+':'+day.getMinutes()
 
    return(
        <div className="container-of-or">
            <div className="duuslaa">
           {orders[index].map((item,index)=>{
               return <OrderItem item={item}/>
           })
           }
           </div>
           <div className="moun">
               <div>Order status:  order added  </div>
               <div>Created date:  {date} </div>
           </div>
        </div>
    )
}
export {Order}