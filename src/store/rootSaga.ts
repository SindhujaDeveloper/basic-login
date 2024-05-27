import { type AllEffect, type ForkEffect, all, fork } from 'redux-saga/effects'
import { takeAuthRequest } from 'saga/auth'

function * rootSaga (): Generator<AllEffect<ForkEffect<void>>, void, unknown> {
  yield all([
    fork(takeAuthRequest)
  ])
}

export { rootSaga }
