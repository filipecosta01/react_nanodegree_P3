import React from 'react'

import thunk from 'redux-thunk'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducers'
import MainNavigator from './components/MainNavigator'

const middlewares = [thunk]
const enhancer = composeWithDevTools(
  {

  }
)(applyMiddleware(...middlewares))

const store = createStore(
  reducer, 
  enhancer
)

export default class App extends React.Component {
  
  render() {

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
