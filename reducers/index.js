import {combineReducers} from 'redux'
import appReducer from './app'
import articlesReducer from './articles'

const rootReducer = combineReducers({
    app: appReducer,
    articles:articlesReducer
})

export default rootReducer;