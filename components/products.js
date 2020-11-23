import React,{useContext,useEffect,useState} from 'react'
import {GroceryContext} from '../providers/provider'
import {ProductItem} from './product-item'
const Products=()=>{
    const {products}=useContext(GroceryContext)
    const {images}=useContext(GroceryContext)
    return(
        <div className='container-of-products'> 
            <div className='ug-bol'>Exclusive Offer</div>
            <div className='overflow'>
                {
                products.map(item=>{
                    return <ProductItem tailbar={item.tailbar} jin={item.jin} une={item.une} id={item.id} image={item.image} item={item}/>
                })
            }
            </div>
        </div>
    )
}
export {Products}