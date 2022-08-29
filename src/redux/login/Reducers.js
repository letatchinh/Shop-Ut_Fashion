import * as TYPES from "./Types";
const initvalue = {
  user: [],
  textLogin: {
    username: "",
    password: "",
  },
  loginSuccess: {
    username: "",
    password: "",
    id: "",
    listCarts: [],
  },
  totalBill : 0,
  
  statusLogin: false,
};
const userReducer = (state = initvalue, action) => {
  switch (action.type) {
    case TYPES.FETCH_USER:
      return {
        ...state,
        user: action.payload,
      };
    case TYPES.FETCH_LOGINSUCCESS:
      return {
        ...state,
        loginSuccess: action.payload,
      };
    case TYPES.ADD_TO_CART:
      return {
        ...state,
        user: state.user.map((e) => {
          if (e.id === action.payload.id) {
            e = { ...action.payload };
          }
          return e;
        }),
        loginSuccess: action.payload,
      };
    case TYPES.REMOVE_ITEM_CART:
      console.log(action.payload);
      return {
        ...state,
        user: state.user.map((e) => {
          if (e.id === action.payload.id) {
            e = { ...action.payload};
          }
          return e;
        }),
        loginSuccess: action.payload,
      };
    case TYPES.INCREASE_ITEM_CART:
      return {
        ...state,
        user: state.user.map((e) => {
          if (e.id === action.payload.id) {
            e = action.payload;
          }
          return e;
        }),
        loginSuccess: action.payload,
      };
    case TYPES.DECREASE_ITEM_CART:
      return {
        ...state,
        user: state.user.map((e) => {
          if (e.id === action.payload.id) {
            e = action.payload;
          }
          return e;
        }),
        loginSuccess: action.payload,
      };
    case TYPES.CAL_TOLTAL_BILL:
      return {
        ...state,
        totalBill: action.payload.reduce(
          (sum, arr) => sum + arr.price * arr.quanlity , 0
        ),
      };
    case TYPES.CHANGE_USERNAME:
      return {
        ...state,
        textLogin: { ...state.textLogin, username: action.payload },
      };
    case TYPES.CHANGE_PASSWORD:
      return {
        ...state,
        textLogin: { ...state.textLogin, password: action.payload },
      };
    case TYPES.CHECK_LOGIN:
      const accLogin = state.user.filter(
        (e) =>
          e.username === action.payload.username &&
          e.password === action.payload.password
      );

      return {
        ...state,
        statusLogin: accLogin.length > 0,
      };
    case TYPES.LOGIN:
      if (state.statusLogin) {
        const accLogin = state.user.filter(
          (e) =>
            e.username === action.payload.username &&
            e.password === action.payload.password
        );
        return {
          ...state,
          loginSuccess: accLogin[0],
        };
      } else {
        return {
          ...state,
        };
      }
    case TYPES.LOGOUT: {
      return {
        ...state,
        statusLogin: false,
        loginSuccess: { username: "", password: "", id: "" , listCarts : []},
        
      };
    }
    case TYPES.IS_STATUS_LOGIN:
      return {
        ...state,
        statusLogin: true,
      };
    default:
      return state;
  }
};
export default userReducer;
