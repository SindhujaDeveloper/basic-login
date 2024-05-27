import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Dashboard from 'container/dashboard'
import LoginForm from 'container/loginForm'

const RouterData = (): any => {
  const strictRoute = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '/login',
      element: <LoginForm />
    }
  ])

  return strictRoute
}

export default RouterData
