import { combineReducers } from 'redux'
import createReducer from '../utils/createReducer'
// import * as actions from 'safeList/actions'

const initialState = {
  user: '您好'
}

const actionHandlers = {

}

const soduReducer = createReducer(initialState, actionHandlers)

export default combineReducers({
  soduReducer
})
