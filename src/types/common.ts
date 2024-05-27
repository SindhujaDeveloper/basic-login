import type { Method } from 'axios'

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
