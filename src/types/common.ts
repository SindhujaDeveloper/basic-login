import type { Method } from 'axios'
import { type IMenuReducer } from './menu'
import { type IAuthReducer } from './auth'

export interface IActionWithPayload<T> {
  payload: T
  type: string
}

export interface IAPIParams {
  apiPath: string
  headers: IDefaultHeader
  action: Method
  data?: any
  params?: any
}

export interface IDefaultHeader {
  'Content-Type': string
  [key: string]: string
}
export interface IPromisePayload<T> {
  data?: T
}

export interface RootState {
  auth: IAuthReducer
  menu: IMenuReducer
}
