import {
  createStore, applyMiddleware, combineReducers,
} from 'redux';
import {
  reduxifyNavigator, createReactNavigationReduxMiddleware, createNavigationReducer,
} from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';
import React from 'react';
import AppNavigator from './src/redux/navigate';

const navReducer = createNavigationReducer(AppNavigator);
const appReducer = combineReducers({
  nav: navReducer,
});

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const middleware = createReactNavigationReduxMiddleware(
  "app",
  state => state.nav,
);

const AppNav = reduxifyNavigator(AppNavigator, "app");
const mapStateToProps = (state) => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(AppNav);

const store = createStore(
  appReducer,
  applyMiddleware(middleware),
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}