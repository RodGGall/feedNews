import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class Article extends Component {
    state = {
        url: ''
    }
    componentDidMount(){
        const urlArt = this.props.navigation.getParam('url')
        this.setState({url: urlArt})
    }
  render() {
    return (
      <WebView
        source={{uri: this.state.url}}
        style={{marginTop: 20}}
      />
    );
  }
}