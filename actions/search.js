import { GET_SEARCH } from '../actions/types'
import realm from '../models/realm'
import Api from '../services/api'

export function getSearch(search) {
    return dispatch => {
        console.log('Search News')
        realm.get('country', (pais) => {
            const country = Array.from(pais)[0]
            Api.getSearch(search,country.id).then(
                news => {
                    console.log(news)
                    realm.add('article', news.articles)
                    dispatch({
                        type: GET_SEARCH,
                        payload: news.articles
                    })
                }
            ).catch(error => {
                console.log(error)
            })
        })
    }
}