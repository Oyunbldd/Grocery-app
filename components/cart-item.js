import React,{useContext,useEffect,useState} from 'react'
import {GroceryContext} from '../providers/provider'
const CartItem=({tailbar,jin,heed,image,une,item,index})=>{
    const {cart}=useContext(GroceryContext)
    const {setMungu}=useContext(GroceryContext)
    const [counter, setCounter]=useState(1);
    const {removeCart}=useContext(GroceryContext)
    useEffect(()=>{
        setCounter(cart[index].quantity)
            
      },[cart])
    const nemegduuleh=()=>{
         cart[index].quantity++;
        setCounter(cart[index].quantity)
    }
    const hasagduulah=()=>{
        if(cart[index].quantity>1){
            cart[index].quantity--
        setCounter(cart[index].quantity)
        }else{
            removeCart(index)
        }
    }
    const hasah=()=>{
        cart[index].quantity=0;
        removeCart(index)
    }
    let lol=0;
    cart.forEach(index=>{
        if(index.quantity>0){
         lol+=Number(index.une)*Number(index.quantity)
        setMungu(lol.toFixed(2))
        }
    })
    return(
        <div className='Cart-of-item-container'>
            <div >
                <img className="zurag" src={image}/>
            </div>
            <div className="Hajuu-heseg">
               <div className="Haj-utga">{tailbar}</div>
                <div className="tail">{jin}</div>
                 <div className="container-shirheg">
                     <button className='goy-butt' onClick={hasagduulah}>-</button>
                        <div className="nemegdeh">{counter}</div>
                     <button className='goy-butt' onClick={nemegduuleh}>+</button>
                     <div className='Tusdaa-une'>${une}</div>
                 </div>
            </div>
            <button className="Hasanshuu" onClick={hasah}>X</button>
        </div>
    )
}
export {CartItem}