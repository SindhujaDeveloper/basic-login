import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import logo from '../../assets/images/logo192.png'
import googleMap from '../../assets/images/googlemap.png'

import 'assets/stylesheets/footer.scss'

const Footer: React.FC = () => {
  return (
    <div className='footer-container'>
      <Container>
        <h5 className='footer-title'>CONTACT US</h5>
        <Row>
          <Col xs={12} md={6} lg={3} className='company-info-col'>
            <h5>Company Info</h5>
            <h6>Name: NSP FOODS</h6>
            <h6>Mobile Number: 8428949366</h6>
            <h6>Whatsapp Number: 8098949366</h6>
            <h6>Address: 51,Periyar Nagar,<br />Nehru Nagar West,<br />Coimbatore - 641014</h6>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <h4>Location</h4>
            <a
              href='https://www.google.com/maps/place/NSP+Foods/@11.0534664,77.0400058,15z/data=!4m2!3m1!1s0x0:0x1a13c28ba093fbba?sa=X&ved=1t:2428&ictx=111'
              rel='noreferrer'
              target='_blank'
            >
              <img src={googleMap} width={300} height={180} alt='Google Map' />
            </a>
          </Col>
          <Col xs={12} md={6} lg={3} className='policy'>
            <h5>Policy</h5>
            <p>Orders should be placed before <b>1hour</b></p>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <h5>Follow us on</h5>
            <div className='social-media-icons'>
              <img src={logo} width={50} alt="Logo 1" className='social-media-icon' />
              <img src={logo} width={50} alt="Logo 2" className='social-media-icon' />
            </div>
          </Col>
        </Row>
      </Container>
      <p className='copyright'>&copy;2024 React. All rights reserved</p>
    </div>
  )
}

export default Footer
