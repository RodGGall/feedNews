import {COUNTRY_SELECT} from '../actions/types'
import realm from '../models/realm'

export function selectCountry(){
    return dispatch => {
        realm.get('country',(countries)=>{
            let country = Array.from(countries)[0]
            let hasCountry
            if(country){
                hasCountry = country
            } else  {
                hasCountry = false
            }
            dispatch({
                type: COUNTRY_SELECT,
                payload: hasCountry
            })
        })
    }
}