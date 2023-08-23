import React, { createContext, useEffect, useReducer } from 'react'
import { reducer } from './reducer'
 
const getCartData = () =>{
  let cartData = localStorage.getItem('cart')
  if(cartData=='null'){
    return []
  }
  else{
    return JSON.parse(cartData)
  }
}

const initialData = {
  cart : getCartData()
}

export const CartContext = createContext("Initial value")


function CartContextProvider({children}) {
const [cart_state, cart_dispatch] = useReducer(reducer, initialData)
useEffect(() => {
localStorage.setItem('cart', JSON.stringify(cart_state.cart))
}, [cart_state.cart])

  return (
    <CartContext.Provider value={{cart_state, cart_dispatch}} >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider