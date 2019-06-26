import { createStackNavigator, createAppContainer } from 'react-navigation';
import Feed from './screens/feed'
import App from './App'
import country from './screens/country'
import Category from './screens/category'

const AppNavigator = createStackNavigator({
  PantallaPrincipal: {
    screen: Feed,
  },
  Category: {
    screen: Category,
  }
}, {
    initialRouteName: 'PantallaPrincipal',
});



export default createAppContainer(AppNavigator);