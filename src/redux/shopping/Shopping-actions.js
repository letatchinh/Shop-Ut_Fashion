import productApi from "../../apis/productApi"
import * as TYPES from './Shopping-types'
export const fecthProductRequest = () => {
    return (dispatch) => {
        (async () => {
            try {
                const res = await productApi.getAll()
                dispatch(fecthProduct(res.data))
            } catch (error) {
                console.log(error);
            }
        })()
    }
}
export const fecthProduct = (product) => {
    return {
        type : TYPES.CALL_API_PRODUCT ,
        payload : product
    }
}
export const addProduct = (type , payload) => {
    return {
        type : type ,
        payload : payload
    }
}
export const fetchAddProductRequest = (item) => {
    return (dispatch) => {
        (async () => {
            try {
                const res = await productApi.addItem(item)
                dispatch(fetchAddProduct(res.data))
            } catch (error) {
                console.log(error);
            }
        })()
    }
}
export const fetchAddProduct = (product) => {
    return {
        type : TYPES.ADD_NEW_PRODUCT,
        payload : product
    }
}