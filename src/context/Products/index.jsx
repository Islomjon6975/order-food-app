import { createContext, useContext, useReducer } from "react";
import products from "../../utils/products";
import { reducer } from "./reducer";

const ProductsContext = createContext()

export const useProductsContext = () => useContext(ProductsContext);

const initialState = JSON.parse(localStorage.getItem('data')) || {
  data: products,
  cartItems: [],
  wishlist: []
}


const ProductContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  localStorage.setItem('data', JSON.stringify(state))
  
  return (
    <ProductsContext.Provider value={[state, dispatch]}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductContextProvider;