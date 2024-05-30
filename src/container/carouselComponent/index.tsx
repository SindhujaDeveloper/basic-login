import React from 'react'
import { Carousel } from 'react-bootstrap'
import logo from '../../assets/images/logo192.png'

import 'assets/stylesheets/carouselComponent.scss'

const CarouselComponent: React.FC = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 carousel-container"
          src={logo}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 carousel-container"
          src={logo}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselComponent
