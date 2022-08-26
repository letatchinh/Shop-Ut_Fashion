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
  },
  statusLogin: false,
};
const userReducer = (state = initvalue, action) => {
  switch (action.type) {
    case TYPES.FETCH_USER:
      return {
        ...state,
        user: action.payload,
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
          loginSuccess: accLogin,
        };
      } else {
        return {
          ...state,
        };
      }
      case TYPES.LOGOUT:{
          return {
              ...state , statusLogin : false , loginSuccess : {username: "",
              password: "",
              id: "",}
          }
      }
      case TYPES.IS_STATUS_LOGIN : 
      return {
          ...state,statusLogin : true
      }
    default:
      return state;
  }
};
export default userReducer;
