import {GET_ARTICLES} from '../actions/types'
import realm from '../models/realm'

export function getArticles(){
    return dispatch => {
        realm.get('country', (pais) => {
            const country = Array.from(pais)[0]
            realm.get('article', (data) => {
                let articles = Array.from(data)
                console.log(articles)
                if (articles.length > 1) {
                    dispatch({
                        type: GET_ARTICLES,
                        payload: articles
                    })
                }
                else {
                    console.log('Save News')
                    Api.getRecientes(country.id).then(
                        news => {
                            console.log(news)
                            realm.add('article', news.articles)
                            this.setState({ articles: news.articles })
                            dispatch({
                                type: GET_ARTICLES,
                                payload: news.articles
                            })
                        }
                    ).catch(error => {console.log(error)})
                }
            })
        })
        
    }
}