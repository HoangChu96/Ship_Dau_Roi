import { Provider } from 'react-redux';
import React, { Component } from 'react';
import AppNavigator from './src/navigator/AppNavigator';
// import reducer from "./src/redux/reducer";

// const store = createStore(
//   reducer
// );

export default class App extends Component {
  render() {
    return (
        <AppNavigator  />
    );
  }
}
