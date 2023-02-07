
export const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TO_CART': {
      let addToCart = {...state, cartItems: [...state.cartItems, action.payload.product]}
      return addToCart
    }
    case 'ADD_TO_WISHLIST': {
      let addToCart = {...state, wishlist: [...state.wishlist, action.payload.product]}
      return addToCart
    }

    default: return state
  }
}