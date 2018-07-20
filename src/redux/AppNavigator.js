import {
  createStackNavigator,
} from 'react-navigation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import Home from '../view/Home';
import Menu from '../view/Menu';
import Address from '../screen/Address';
import TaoDonHang from '../screen/TaoDonHang';
import GooglePlacesAutocomplete from '../screen/GooglePlacesAutocomplete';
import SearchOrder from '../screen/SearchOrder';
import Comment from '../screen/Comment';
import Manual from '../screen/Manual';
import Notify from '../screen/Notify';
import Profile from '../screen/Profile';
import ReceiveOrder from '../screen/ReceiveOrder';
import Setting from '../screen/Setting';
import Wallet from '../screen/Wallet';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const RootNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Menu: { screen: Menu },
    Address: {screen: Address},
    TaoDonHang: {screen: TaoDonHang},
    GooglePlacesAutocomplete: {screen: GooglePlacesAutocomplete},
    SearchOrder: {screen: SearchOrder},
    Comment: {screen: Comment},
    Manual: {screen: Manual},
    Notify: {screen: Notify},
    Profile: {screen: Profile},
    ReceiveOrder: {screen: ReceiveOrder},
    Setting: {screen: Setting},
    Wallet: {screen: Wallet},
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

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };