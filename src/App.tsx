import React from 'react'
import { RouterProvider } from 'react-router-dom'
import RouterData from 'routes/appRoutes'
import Footer from 'layout/footer'
import Header from 'layout/header'
import 'assets/stylesheets/common.scss'

const App: React.FC = () => {
  const router = RouterData()
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  )
}

export default App
