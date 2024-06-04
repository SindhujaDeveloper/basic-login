import React from 'react'
import { Carousel } from 'react-bootstrap'

import banner1 from '../../assets/images/banner.png'
import banner from '../../assets/images/banner_1.png'

import 'assets/stylesheets/carouselComponent.scss'

const CarouselComponent: React.FC = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item interval={1000} className='banner'>
        <img
          className="d-block carousel-container"
          src={banner}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000} className='banner-1'>
        <img
          className="d-block carousel-container"
          src={banner1}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselComponent
