import * as C from './Constants'
export const setRole=role=>{
    return {
        type:C.SET_ROLE,
        payload:role
    }
}
export const getRole=()=>{
    return{
        type:C.getRole
    }
}