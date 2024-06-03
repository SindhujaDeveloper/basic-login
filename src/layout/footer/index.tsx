import React from 'react'
import 'assets/stylesheets/footer.scss'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../../assets/images/logo192.png'
import googleMap from '../../assets/images/googlemap.png'

const Footer: React.FC = () => {
  return (
    <div className='footer-container'>
      <Container>
        <h5 className='footer-title'>Contact Us</h5>
        <Row>
          <Col className='company-info-col'>
            <h5 className='ps-5 pb-2'>Company Info</h5>
            <h6>Name: React</h6>
            <h6>Mobile Number: 8428949366</h6>
            <h6>Whatsapp Number: 8098949366</h6>
            <h6>Addess: 123 React Street, JavaScript City</h6>
          </Col>
          <Col>
            <h4 className='ps-5 pb-2'>Location</h4>
            <a
              href='https://www.google.com/maps/place/NSP+Foods/@11.0534664,77.0400058,15z/data=!4m2!3m1!1s0x0:0x1a13c28ba093fbba?sa=X&ved=1t:2428&ictx=111'
              rel='noreferrer'
              target='_blank'
            >
              <img src={googleMap} width={300} height={180} />
            </a>
          </Col>
          <Col className='text-center w-100'>
            <h5 className='ps-5 pb-2'>Follow us on</h5>
            <img src={logo} width={'70px'} alt="Logo 1" className='social-media-1' />
            <img src={logo} width={'70px'} alt="Logo 2" className='social-media-2' />
          </Col>
          <Col>
            <h5 className='ps-5 pb-2'>Policy</h5>
            <p>Orders should be placed before <b>1hour</b></p>
          </Col>
        </Row>
      </Container>
      <p className='copyright'>&copy;2024 React. All rights reserved</p>
    </div>
  )
}

export default Footer
