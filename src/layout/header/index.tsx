import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import logo from '../../assets/images/logo.png'
import call from '../../assets/images/call.jpg'

import 'assets/stylesheets/header.scss'

const Header: React.FC = () => {
  return (
    <div className='header-container'>
      <Navbar expand="lg" className="bg-body-tertiary sticky-top" data-bs-theme="dark" sticky='top'>
        <Navbar.Brand href="#" className='ps-3'>
          <div className='logo'>
            <img src={logo} width={50} height={50} alt="Logo" />
            <h1>NSP FOODS</h1>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end pe-4">
          <Nav className="auto align-items-center">
            <a href="tel:+917868049366" className="order-btn-link">
              <div className="order-btn" title='Call - 7868049366'>
                <span>Order Now</span>
                <img src={call} width={'26px'} alt="Call" />
              </div>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
