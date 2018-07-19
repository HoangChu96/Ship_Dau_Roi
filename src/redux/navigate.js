import {
    createStackNavigator,
} from 'react-navigation';
import Home from '../view/Home';
import Menu from '../view/Menu';

const defaultState = {
    
  };
  
const AppNavigator = (state= defaultState, action) => {

}

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Menu: {screen: Menu}
  });
  
export default AppNavigator;
  