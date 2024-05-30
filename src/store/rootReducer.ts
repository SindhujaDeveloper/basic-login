import { authReducer, menuReducer } from 'reducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  auth: authReducer,
  menu: menuReducer
})
