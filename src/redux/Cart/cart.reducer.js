import cartTypes from "./cart.types";
import { handleAddToCart } from "./cart.helpers";
const INIT_STATE = {
  cartItems: [],
};

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case cartTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: handleAddToCart({
          prevCartItems: state.cartItems,
          nextCartItem: action.payload,
        }),
      };
    default:
      return state;
  }
};

export default cartReducer;
