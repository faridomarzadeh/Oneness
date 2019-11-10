import State from './State.json';
import * as C from '../actions/Constants'

const initialState = State

export default (state=initialState,action)=>{
    switch(action.type)
    {
        case C.SET_ROLE:
            return {...state,role:action.payload};
        case C.GET_ROLE:
            return {
                ...state
            }
        default:
            return {...state};
    }
}