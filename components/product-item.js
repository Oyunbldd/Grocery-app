import React,{useContext,useEffect,useState} from 'react'
import {GroceryContext} from '../providers/provider'
const ProductItem=({tailbar,jin,une,jims,id,image,item})=>{
    const {products}=useContext(GroceryContext)
    const {cart}=useContext(GroceryContext)
    const {setCart}=useContext(GroceryContext)
    const {setMungu}=useContext(GroceryContext)
    const {mungu}=useContext(GroceryContext)
    const {images}=useContext(GroceryContext)
    const {addCart}=useContext(GroceryContext)
    const darsan=(id)=>{
     addCart(item)  
}
    return(
        <div>
         <div className='container-of-product-item'>
         <img  className='togtmol-zurag-utga' src={image}/>
         <div className="Ugzui">{tailbar}</div>
         <div className='todorhoilolt'>{jin}</div>
         <div className='ene-you'>
          <div className='une'>${une}</div>
          <button className="butt" onClick={()=>darsan(id)}>+</button>
           </div>
         </div>
    </div>

    )
}
export {ProductItem}