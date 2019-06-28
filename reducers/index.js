import {combineReducers} from 'redux'
import appReducer from './app'
import articlesReducer from './articles'
import articleSearchReducer from './search'

const rootReducer = combineReducers({
    app: appReducer,
    articles:articlesReducer,
    searchResults: articleSearchReducer
})

export default rootReducer;