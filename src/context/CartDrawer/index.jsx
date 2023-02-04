import React, { createContext, useContext, useState } from 'react'

const CartDrawerContext = createContext();
export const useCartDrawer = () => useContext(CartDrawerContext)


export const CartDrawerContextProvider = ({children}) => {
  const [openCartDrawer, setOpenCartDrawer] = useState(false);

  return (
    <CartDrawerContext.Provider value={[openCartDrawer, setOpenCartDrawer]}>{children}</CartDrawerContext.Provider>
  )
}


export default CartDrawerContextProvider