import React from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import { selectCountry } from '../actions/app'
import Nav from '../navigation'
import Nav1 from '../nav1'

type Props = {};
class Home extends React.Component<Props> {

    state = {
        isContrySelected : false
      }

    componentDidMount(){
        this.props.selectCountry()
      }

    renderContent = () => {
        if(this.props.isSelected) {
            return(
            <Nav />
            )
        } else {
            return(
            <Nav1 />
            )
        }
    }
    render(){
        return(
            <>
                {this.renderContent()}
            </>
        )
    }
}

function mapStateToProps(state) {
     return(
         {
             isSelected: state.app.isSelected
         }
     )
}

export default connect(mapStateToProps,{
    selectCountry
})(Home)

