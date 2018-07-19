import {
  createStackNavigator,
} from 'react-navigation';
import Home from '../view/Home';
import Menu from '../view/Menu';
import Address from '../screen/Address';
import TaoDonHang from '../screen/TaoDonHang';
import GooglePlacesAutocomplete from '../screen/GooglePlacesAutocomplete';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Menu: { screen: Menu },
    Address: {screen: Address},
    TaoDonHang: {screen: TaoDonHang},
    GooglePlacesAutocomplete: {screen: GooglePlacesAutocomplete}
  },

  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateX = position.interpolate({

          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],

        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 0.5, 1],
        });

        return { opacity, transform: [{ translateX }] };
      },
    }),
  }
);

export default AppNavigator;
