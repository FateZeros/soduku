import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import MainReducer from './reducers'
import './index.scss'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const configureStore = preloadedState => {
  return createStore(
    MainReducer,
    applyMiddleware(...middleware)
  )
}

const store = configureStore()

import Game from './pages/game'

ReactDOM.render(
	<Provider store={store}>
		<Game />
  </Provider>,
document.getElementById('sodu'))