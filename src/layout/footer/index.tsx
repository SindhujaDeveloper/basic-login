import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import logo from '../../assets/images/logo192.png'
import googleMap from '../../assets/images/googlemap.png'

import 'assets/stylesheets/footer.scss'

const Footer: React.FC = () => {
  return (
    <footer className='footer-container'>
      <Container>
        <h2 className='footer-title'>Contact Us</h2>
        <Row>
          <Col xs={12} md={6} lg={3} className='footer-col company-info'>
            <h5>Company Info</h5>
            <p><strong>NSP FOODS</strong></p>
            <p>Mobile: 8428949366</p>
            <p>WhatsApp: 7868049366</p>
            <p>NSP Foods<br />Veeriyampalayam,<br />Coimbatore - 641048</p>
          </Col>
          <Col xs={12} md={6} lg={3} className='footer-col'>
            <h5>Location</h5>
            <a
              href='https://www.google.com/maps/place/NSP+Foods/@11.0534664,77.0400058,15z/data=!4m2!3m1!1s0x0:0x1a13c28ba093fbba?sa=X&ved=1t:2428&ictx=111'
              rel='noreferrer'
              target='_blank'
              className='location-map'
              style={{ display: 'block' }}
            >
              <img src={googleMap} alt='Google Map Location' />
            </a>
          </Col>
          <Col xs={12} md={6} lg={3} className='footer-col'>
            <h5>Policy</h5>
            <p>Orders should be placed before <b>1 hour</b>.</p>
          </Col>
          <Col xs={12} md={6} lg={3} className='footer-col'>
            <h5>Follow us on</h5>
            <div className='social-media-icons'>
              <img src={logo} width={45} alt="Social Logo 1" className='social-media-icon' />
              <img src={logo} width={45} alt="Social Logo 2" className='social-media-icon' />
            </div>
          </Col>
        </Row>
        <div className='footer-bottom'>
          <p className='copyright'>&copy; {new Date().getFullYear()} NSP FOODS. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
