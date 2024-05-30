import React from 'react'
import CarouselComponent from 'container/carouselComponent'

import 'assets/stylesheets/dashboard.scss'
import { MenuList } from 'container/menu'
import { useSelector } from 'react-redux'

const Dashboard: React.FC = () => {
  const menuList = useSelector((state: any) => state.menu.menuList)
  console.log(menuList)
  return (
    <div className='dashboard-container'>
      <CarouselComponent />
      <MenuList />
    </div>
  )
}

export default Dashboard
