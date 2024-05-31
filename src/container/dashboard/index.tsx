import React from 'react'
import { useSelector } from 'react-redux'
import ReactWhatsapp from 'react-whatsapp'
import type { RootState } from 'types'
import whatsapp from '../../assets/images/whatsapp.png'

import CarouselComponent from 'container/carouselComponent'
import { MenuList } from 'container/menu'

import 'assets/stylesheets/dashboard.scss'

const Dashboard: React.FC = () => {
  const menuList = useSelector((state: RootState) => state.menu.menuList)
  const message = menuList.filter(it => it.count > 0).map(it => ({ [it.name]: it.count }))
  const msgResult = JSON.stringify(message)?.replaceAll('{', '').replaceAll('},', ',\n').replaceAll('[', '').replaceAll('}]', '').replaceAll(/"/g, '')

  return (
    <div className='dashboard-container'>
      <CarouselComponent />
      <div className="marquee">
        <h5>{'ORDERS SHOULD BE PLACED BEFORE 1HOUR'}</h5>
      </div>
      <MenuList />
      <ReactWhatsapp number={'+918098949366'} message={message.length > 0 ? `${msgResult}\n\nWant to order these` : 'Hi,want to know more about your products?'} element={'div'} className='whatsapp'>
        <div className="whatsapp-image-container">
          <img src={whatsapp} width={60} className='whatsapp-image' />
        </div>
      </ReactWhatsapp>
    </div>
  )
}

export default Dashboard
