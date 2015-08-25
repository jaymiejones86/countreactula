import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import Calculator from './calculator';

import { sums } from './reducers';
let store = createStore(sums);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <Calculator />}
      </Provider>
    );
  }
}
