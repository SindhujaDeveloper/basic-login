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
            <img src={logo} width={60} height={60} />
            <h1 className='ps-3'>NSP FOODS </h1>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="auto align-items-center nav-title ">
            <h1>NSP FOODS </h1>
          </Nav>
        </Navbar.Collapse> */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end pe-4">
          <Nav className="auto align-items-center">
            <Nav.Link href="tel:+917868049366">
              <span>To Order</span> <span title='Call - 7868049366'><img src={call} width={'30px'} style={{ borderRadius: '50%', backgroundColor: '#FFFFFF' }} /></span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
