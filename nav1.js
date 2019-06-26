import { createStackNavigator, createAppContainer } from 'react-navigation';
import country from './screens/country'
import AppNavigator from './navigation'

const AppNavigator1 = createStackNavigator({
    Country: {
        screen: country,
    },
    Main: {
        screen: AppNavigator
    }
}, {
        initialRouteName: 'Country',
});

export default createAppContainer(AppNavigator1);