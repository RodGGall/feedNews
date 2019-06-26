import {GET_ARTICLES} from '../actions/types'


const INITIAL_STATE = {
    articles: [],
}

export default function (state= INITIAL_STATE, action){
    switch(action.type) {
        case GET_ARTICLES:
            return {
                ...state,
                articles:action.payload,
            }
            break
        default:
                return state
    }
} 