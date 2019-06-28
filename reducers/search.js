import {GET_SEARCH} from '../actions/types'


const INITIAL_STATE = {
    articles: [],
}

export default function (state= INITIAL_STATE, action){
    switch(action.type) {
        case GET_SEARCH:
            return {
                ...state,
                articles:action.payload,
            }
            break
        default:
                return state
    }
} 