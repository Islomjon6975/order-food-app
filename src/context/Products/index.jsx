import { createContext, useContext, useReducer } from "react";
import products from "../../utils/products";
import { reducer } from "./reducer";

const ProductsContext = createContext()

export const useProductsContext = () => useContext(ProductsContext)

const initialState = {
  data: products | [],
  cartItems: [],
  wishlist: []
}


const ProductContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('data')) | initialState)
  localStorage.setItem('data', JSON.stringify(initialState))
  
  return (
    <ProductsContext.Provider value={[state, dispatch]}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductContextProvider;