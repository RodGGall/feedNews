import {COUNTRY_SELECT} from '../actions/types'


const INITIAL_STATE = {
    isSelected: false,
}

export default function (state= INITIAL_STATE, action){
    switch(action.type) {
        case COUNTRY_SELECT:
            return {
                ...state,isSelected:action.payload,
            }
            break
        default:
                return state
    }
} 