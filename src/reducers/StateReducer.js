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
            };
        case C.SET_DEMOGRAPHIC_INFORMATION:
            let newState={...state}
            newState.demographicInformation=action.payload
            return newState;
        case C.SET_OBSERVER_DEMOGRAPHIC_INFORMATION:
                let observerState={...state}
                observerState.ObserverDemographicInformation=action.payload
                return observerState;
        case C.SET_NUMBER_OF_PEOPLE_INVOLVED:
            return {...state,peopleInvolved:action.payload}
        case C.SET_INVOLVED_PEOPLE_INFORMATION:
            let infostate={...state}
            infostate.involvedPeopleInformation=action.payload;
            return infostate;
        default:
            return {...state};
    }
}