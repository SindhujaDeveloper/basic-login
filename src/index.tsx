import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'

import App from './App'
import { persistor, store } from 'store'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'

const rootElement = document.getElementById('root')
if (rootElement !== null) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <Provider store={store}>
      <PersistGate loading={<Spinner />} persistor={persistor}>
        <App />
      </PersistGate>
      <ToastContainer autoClose={2000} />
    </ Provider>
  )
} else {
  console.error('Root element not found')
}
