import { userApi } from '../../apis/usersApi'
import * as TYPES from './Types'
export const changeText = (type,payload) => {
    return {
        type : type ,
        payload : payload
    }
}
export const fetchCheckLogin = (user) => {
    return {
        type : TYPES.CHECK_LOGIN , 
        payload : user
    }
}
export const fectchLogin = (user) => {
    return {
        type : TYPES.LOGIN , 
        payload : user
    }
}
export const fectchLogout = () => {
    return {
        type : TYPES.LOGOUT ,
        payload : ""
    }
}
export const fecthUserRequest = () => {
    return (dispatch) => {
        (async () => {
            try {
                const res = await userApi.getAllUser()
                dispatch(fecthUser(res.data))
            } catch (error) {
                console.log(error);
            }
        })()
    }
}
export const fetchLogginSuccessRequest = () => {
    return (dispatch) => {
        ( async() => {
            try {
                const res = await JSON.parse(localStorage.getItem('user'))
                dispatch(fecthLogginSuccess(res))
            } catch (error) {
                console.log(error);
            }
        })()
    }
}
export const fetchAddToCartRequest = (item) => {
    return (dispatch) => {
        ( async() => {
            try {   
                const list = JSON.parse(localStorage.getItem('user'))
               const newList = {...list , listCarts : [...list.listCarts,{...item,id : list.listCarts.length , quanlity : 1}]}
                localStorage.setItem('user',JSON.stringify(newList));
                dispatch(fecthAddToCart(newList))
                userApi.editUser(newList,list.id)
            } catch (error) {
                console.log(error);
            }
        })()
    }
}
export const featchRemoveItemCartRequest = (item) => {
    return (dispatch) => {
        (async ()=>{
            try {
                const list = JSON.parse(localStorage.getItem('user'))
                list.listCarts = list.listCarts.filter(e => e.id !== item.id)
                localStorage.setItem('user',JSON.stringify(list));
                dispatch(fecthRemoveItemCart(list))
                userApi.editUser(list,list.id)
            } catch (error) {
                console.log(error);
            }
        })()
    }
}
export const featchIncreaseItemRequest = (item) => {
    return (dispatch) => {
        (async () => {
            try {
                const list = JSON.parse(localStorage.getItem('user'))
                list.listCarts.map(e => {
                    if(e.id === item.id){
                        e.quanlity++;
                    }
                    return e
                })
                localStorage.setItem('user',JSON.stringify(list))
                dispatch(fecthIncreaseItemCart(list))
                userApi.editUser(list,list.id)
            } catch (error) {
                console.log(error);
            }
        })()
    }
}
export const fecthIncreaseItemCart = (user) => {
    return {
        type : TYPES.INCREASE_ITEM_CART ,
        payload : user
    }
}
export const featchDecreaseItemRequest = (item) => {
    return (dispatch) => {
        (async () => {
            try {
                const list = JSON.parse(localStorage.getItem('user'))
                list.listCarts.map(e => {
                    if(e.id === item.id){
                        e.quanlity--;
                    }
                    return e
                })
                localStorage.setItem('user',JSON.stringify(list))
                dispatch(fecthDecreaseItemCart(list))
                userApi.editUser(list,list.id)
            } catch (error) {
                console.log(error);
            }
        })()
    }
}
export const calTotalBill = (cart) => {
    return {
        type : TYPES.CAL_TOLTAL_BILL,
        payload : cart
    }
}
export const fecthDecreaseItemCart = (user) => {
    return {
        type : TYPES.DECREASE_ITEM_CART ,
        payload : user
    }
}
export const fecthRemoveItemCart = (user) => {
    return {
        type : TYPES.REMOVE_ITEM_CART ,
        payload : user
    }
}
export const fecthAddToCart = (user) => {
    return {
        type : TYPES.ADD_TO_CART ,
        payload : user
    }
}
export const fecthLogginSuccess= (user) => {
    return {
        type : TYPES.FETCH_LOGINSUCCESS ,
        payload : user
    }
}
export const fecthUser = (user) => {
    return {
        type : TYPES.FETCH_USER ,
        payload : user
    }
}
