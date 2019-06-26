/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import realm from './models/realm'
import country from './models/country'
import createRedux from './store'
import Country from './screens/country'
import {Provider} from 'react-redux'
import Home from './screens/Home'
type Props = {};
const store = createRedux()
export default class App extends Component<Props> {
  
  render() {
    return (
      <Provider store= {store}>
        <Home />
      </Provider>
    );
  }
}

