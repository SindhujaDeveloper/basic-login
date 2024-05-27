import axios from 'axios'
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { store } from 'store'
import { type IAPIParams, type IDefaultHeader } from 'types'

export const apiCall = async (apiParams: IAPIParams): Promise<IAPIParams> => {
  try {
    const url = apiParams.apiPath
    const requestParams: AxiosRequestConfig = {
      url,
      method: apiParams.action,
      data: apiParams.data,
      headers: apiParams.headers,
      params: apiParams.params
    }
    const response: any = await axios(requestParams)
      .then((res: AxiosResponse<any>) => res)
      .catch((error: AxiosError<any>) => handleErrors(error))

    return response
  } catch (error) {
    throw Error(JSON.stringify(error))
  }
}

export const defaultHeader = (): IDefaultHeader => {
  const token: string = store.getState().auth?.token
  const headers: IDefaultHeader = {
    'Content-Type': 'application/json'
  }
  if (token !== '') {
    headers.Authorization = `Bearer ${token}`
  }
  return headers
}

const handleErrors = (error: any): Error => {
  if (error !== null && error !== undefined) {
    console.log(error.response.data)
    console.log(error.response.status)
    console.log(error.response.headers)
  } else {
    console.log('Error', error.message)
  }

  if (error.status === undefined) {
    console.log('Failed to load resource')
  }

  switch (error.status) {
    case 401: // unauthorised
    case 403: // forbidden
    case 400: // bad request
      break
    default:
      return error
  }
  return error
}
