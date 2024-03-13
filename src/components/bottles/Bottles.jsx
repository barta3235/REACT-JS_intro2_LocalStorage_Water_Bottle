import { useEffect } from "react";
import { useState } from "react";
import Bottle from '../bottle/Bottle'
import './Bottles.css'
import { addToLS, getStoredCart, removeFromLS } from "../utilities/localstorage";
import Cart from "../cart/Cart";
import bottle from "../bottle/Bottle";


const Bottles = () => {

    //for the grid
    const [bottles,setBottles]=useState([]);

    //for the cart
    const [cart,setCart]=useState([])
    
    

    const handleAddToCart= (bottle)=>{
        const newCart= [...cart,bottle];
        setCart(newCart);
        addToLS(bottle.id); 
    }

    const handleRemoveFromCart = (id)=>{
        // visual cart theke remove
        const remaining= cart.filter((item)=> item.id!==id);
        setCart(remaining);
        // remove from LS
        removeFromLS(id);
    }


    useEffect(()=>{
        fetch('bottles.json')
        .then(res=>res.json())
        .then(data=>setBottles(data));        
    },[])




    //load cart from local storage
    useEffect(()=>{
        if(bottles.length){
            const storedCartId= getStoredCart();
            console.log(storedCartId,bottles);

            const savedCart=[];
            for(const id of storedCartId){
            console.log(id);
            const bottle=bottles.find((bottle)=>bottle.id=id)
            if(bottle){
                savedCart.push(bottle);
            }
          }
          console.log(savedCart);
          setCart(savedCart);
        }
        

    },[bottles])

    


    return (
        <div>
            <h2>Bottles Here:  {bottles.length}</h2>
           
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
    
            <div className="bottle-container">
            {
                bottles.map((bottle)=> <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle> )
            }
            </div>
        </div>
    );
};

export default Bottles;