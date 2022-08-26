import CartApi from "../../apis/CartApi"
import * as TYPES from './Types'

export const fetchCartRequest = () => {
    return (dispatch) => {
       (async () => {
           try {
               const res =await CartApi.getAll();
            dispatch(fetchCart(res.data))
           } catch (error) {
               console.log(error);
           }
       })()
    }
}
export const fetchCart = (items) => {
    return {
        type : TYPES.CALL_API_CART , 
        payload : items
    }
}
export const addCartRequest = (item) => {
return (dispatch) => {
    (async () => {
        try {
            const res =await CartApi.addCart(item);
            dispatch(addCart(res.data))
        } catch (error) {
            console.log(error);
        }
    })()
}
}
export const DeleteCartRequest = (item) => {
    return (dispatch) => {
        (async () => {
            try {
                 await CartApi.deleteCart(item);
                dispatch(deleteCart(item))
            } catch (error) {
                console.log(error);
            }
        })()
    }
    }
export const addCart = (item) => {
    return {
        type : TYPES.ADD_CART,
        payload : item
    }
}
export const deleteCart = (item) => {
    return {
        type : TYPES.DELETE_CART,
        payload : item
    }
}