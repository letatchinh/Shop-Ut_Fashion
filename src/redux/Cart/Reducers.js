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
        listCart: [...state.listCart, { ...action.payload, quanlity: 1 }],
      };
    case TYPES.DELETE_CART:
      const newListCart = state.listCart.filter((e) => e.id !== action.payload);
      console.log(action.payload);
      return {
        ...state,
        listCart: newListCart,
      };
    case TYPES.INCREASE_ITEM_CART:
      const newListCart2 = state.listCart.map((e) => {
        if (e.id === action.payload.id) {
          e.quanlity++;
        }
        return e;
      });
      return {
        ...state,
        listCart: newListCart2,
      };
    case TYPES.DECREASE_ITEM_CART:
        const newListCart3 = state.listCart.map((e) => {
            if (e.id === action.payload.id) {
              e.quanlity--;
            }
            return e;
          });
          return {
            ...state,
            listCart: newListCart3,
          };
    default:
      return state;
  }
};
export default cartReducer;
