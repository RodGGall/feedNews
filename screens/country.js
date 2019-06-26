import React from "react";
import {View, Picker} from 'react-native'
import Countrys from '../models/data'
import Realm from '../models/realm'
import country from "../models/country"

type Props = {};
export default class Country extends React.Component<Props> {
    
    selectCountry= (countrySelected) =>{
        this.setState({ country: countrySelected })
        console.log(this.state.country, this.props.navigation)
        Realm.addCountry('country', this.state.country)
        this.props.navigation.push('Main')
    }
    
    state = {
        country: {
            id: 'mx',
            name: 'México',
        },
    }

    render(){
        return(
            <View>
                <Picker
                    selectedValue = {this.state.country}
                    onValueChange = {this.selectCountry}>
                        {
                            Countrys.map((item,i)=>{
                                return <Picker.Item label={item.name} value={item}/>
                            })
                        }
                </Picker>
            </View>
        )
    }
}