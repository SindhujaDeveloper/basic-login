import { createSlice } from '@reduxjs/toolkit'
import type { IAuthReducer, IActionWithPayload } from 'types'

const initialState: IAuthReducer = {
  isFetching: false,
  error: '',
  token: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authLoginRequest: (state: IAuthReducer, action: IActionWithPayload<any>) => {
      state.isFetching = true
      state.error = ''
    },
    authLoginResponse: (state: IAuthReducer, action: IActionWithPayload<any>) => {
      state.isFetching = false
    },
    authLoginFailure: (state: IAuthReducer, action: IActionWithPayload<any>) => {
      state.isFetching = false
      state.error = action.payload.error
    }
  }
})

export const {
  authLoginRequest,
  authLoginResponse,
  authLoginFailure
} = authSlice.actions

export const authReducer = authSlice.reducer
