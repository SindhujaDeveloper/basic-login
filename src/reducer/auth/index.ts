import { createSlice } from '@reduxjs/toolkit'
import { type IActionWithPayload } from 'types'

const initialState: any = {
  isFetching: false,
  error: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authLoginRequest: (state: any, action: IActionWithPayload<any>) => {
      state.isFetching = true
      state.error = ''
    },
    authLoginResponse: (state: any, action: IActionWithPayload<any>) => {
      state.isFetching = false
    },
    authLoginFailure: (state: any, action: IActionWithPayload<any>) => {
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
