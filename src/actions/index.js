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
export const setDemographicInformation=information=>{
    return{
        type:C.SET_DEMOGRAPHIC_INFORMATION,
        payload:information
    }
}
export const setObserverDemographicInformation=information=>{
    return{
        type:C.SET_OBSERVER_DEMOGRAPHIC_INFORMATION,
        payload:information
    }
}
export const setNumberOfPeopleInvolved=people=>{
    return{
        type:C.SET_NUMBER_OF_PEOPLE_INVOLVED,
        payload:people
    }
}
export const setInvolvedPeopleInformation=information=>{
    return{
        type:C.SET_INVOLVED_PEOPLE_INFORMATION,
        payload:information
    }
}
