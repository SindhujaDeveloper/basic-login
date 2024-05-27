import { authReducer } from 'reducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  auth: authReducer
})
