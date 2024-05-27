import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import createSagaMiddleWare from 'redux-saga'
import localforage from 'localforage'
import { rootReducer } from './rootReducer'
import { rootSaga } from './rootSaga'

const persistConfig = {
  key: 'root',
  storage: localforage,
  whitelist: ['auth']
}

const sagaMiddleWare = createSagaMiddleWare()

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({ thunk: false, serializableCheck: false })
      .concat(
        sagaMiddleWare
      )
}
)

const persistor = persistStore(store)
export { persistor, store }

sagaMiddleWare.run(rootSaga)
