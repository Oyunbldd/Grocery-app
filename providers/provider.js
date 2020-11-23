import React,{createContext,useEffect,useState} from 'react'
import Cart  from '../components/cart'
import Banana from '../components/banana.jpeg'
import Apple from '../components/lol.jpg'
import Kiwi from '../components/kiwi.jpeg'
import Pinapple from '../components/Pinapple.jpeg'
export const GroceryContext=createContext({
 products:[
   { id:0,tailbar:"Banana" ,jin:'7cps Prices' ,une:'$1.75'},
   {  id:1,tailbar:"Alim" ,jin:'7cps Prices' ,une:'$1.2'},
   { id:2, tailbar:"Kiwi" ,jin:'7cps Prices' ,une:'$2'}
 ],
 mungu:0,
 cart:[{}], 
addCart:()=>{},
removeCart:()=>{},
checkoutCart:()=>{} ,
})
export const GroceryProvider=({children})=>{
const [products,setProducts]=useState([
    { id:0,tailbar:"Banana",jin:'7cps Prices',une:'1',quantity:1,image:Banana},
    { id:1, tailbar:"Alim",jin:'7cps Prices',une:'1.2',quantity:1, image:Apple},
    { id:2,tailbar:"Kiwi",jin:'7cps Prices',une:'2' , quantity:1,image:Kiwi},
    { id:3,tailbar:"Pinapple",jin:'1kg Prices',une:'3', quantity:1,image:Pinapple}
])
const [mungu,setMungu]=useState(0);
const[cart,setCart]=useState([])
const [orders,setOrders]=useState([])
const addCart=(index)=>{
let newcard=[],checker=true, a=index;
// console.log(a)
newcard=cart.map((item)=>{
    if(a.tailbar===item.tailbar){
        checker=false
        return {...item,quantity:item.quantity+1}
    }else{
        return {...item,a}
    }
})
if(checker===true){
    setCart([...cart,{...a}])
 }
else{
  setCart(newcard)
}
}
const removeCart=(index)=>{
    let temp=[...cart]
    temp.splice(index,1)
    setCart(temp)
    if(cart[0].quantity===0){
        setMungu(0)
    }
}
const checkoutCart=(a)=>{
    if(a[0]!=undefined){
    setCart([])
    setMungu(0)
    setOrders([...orders,a])
    }
}

return(
    <GroceryContext.Provider value={{
        products,
        mungu,
        cart,
        orders,
        addCart,
        removeCart,
        checkoutCart,
        setMungu,
        setCart,setOrders,
    }}>{children}</GroceryContext.Provider>
   
)
}