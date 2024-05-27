import { authLoginFailure, authLoginRequest, authLoginResponse } from 'reducer/auth'
import { type ForkEffect, takeLatest, put } from 'redux-saga/effects'

import { API } from 'routes/apiRoutes'
import { apiCall, defaultHeader } from 'utils/helpers'

function * login (requestDetails: any): Generator<any, void, any> {
  try {
    const headers = defaultHeader()
    const response = yield apiCall({ headers, ...API.login, data: requestDetails.payload })
    if (response.status === 200) {
      yield put(authLoginResponse(response.data))
    } else {
      yield put(authLoginFailure("Couldn't retrieve users"))
    }
  } catch (error) {
    console.log(error)
  }
}

export function * takeAuthRequest (): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(authLoginRequest, login)
}
