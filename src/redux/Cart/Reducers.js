import * as TYPES from "./Types";

const initvalue = {
  listCart: [],
};
const cartReducer = (state = initvalue, action) => {
  switch (action.type) {
    case TYPES.CALL_API_CART:
      return {
        ...state,
        listCart: action.payload,
      };
    case TYPES.ADD_CART:
      return {
        ...state,
        listCart: [...state.listCart,{...action.payload , quanlity : 1}]
      };
      case TYPES.DELETE_CART:
          const newListCart = state.listCart.filter(e => e.id !== action.payload)
        console.log(action.payload);
          return {
              ...state ,
              listCart : newListCart
          }
    default:
      return state;
  }
};
export default cartReducer;
