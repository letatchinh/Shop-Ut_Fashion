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
export const fecthUser = (user) => {
    return {
        type : TYPES.FETCH_USER ,
        payload : user
    }
}