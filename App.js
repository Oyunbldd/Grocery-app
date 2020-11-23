import './App.css';
import {Products} from './components/products'
import {Cart}from './components/cart'
import {Orders}from './components/orders'
import {GroceryContext, GroceryProvider} from './providers/provider'
import { useContext, useState} from 'react';
function App() {
  return (
    <div className="App">
      <GroceryProvider>
     <div className="Deed-heseg">Nest Students Grocery App</div>
     <input className='input' placeholder="Search Store"/>
     <div className='Container'>
        <Products/>
         <Cart/>
       <Orders/>
      </div>
      </GroceryProvider>
    </div>
  );
}

export default App;
