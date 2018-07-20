import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import AppReducer from './src/redux/reducer';
import { AppNavigator, middleware } from './src/redux/AppNavigator';


const store = createStore(AppReducer, applyMiddleware(middleware));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}