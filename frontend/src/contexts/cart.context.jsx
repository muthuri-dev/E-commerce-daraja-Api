import { createContext, useState } from "react";


//initializing context and exporting;
export const CartContext= createContext();

const CartContextProvider = (props) => {

    //cart state;
    const[cart, setCart]= useState([]);

    const addToCart=(item)=>{
        setCart([...cart, item]);
        console.log(cart);
    }

    return ( 
        <>
        <CartContext.Provider value={{addToCart,cart}}>
            {props.children}
        </CartContext.Provider>
        </>
     );
}
 
export default CartContextProvider;