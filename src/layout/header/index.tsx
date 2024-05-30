import React, { useState } from 'react'
import 'assets/stylesheets/header.scss'
import { Nav, Navbar, Offcanvas } from 'react-bootstrap'
import logo from '../../assets/images/logo192.png'

const Header: React.FC = () => {
  const [show, setShow] = useState(true)
  return (
    <div className='header-container'>
      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" sticky='top'>
        <Navbar.Brand href="#home" className='ps-3'>
          <img src={logo} alt='profile' width={'60px'} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="auto align-items-center">
            <Nav.Link href="#home">Home </Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href='#profile'><img src={logo} alt='profile' width={'40px'} /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Offcanvas
        show={show}
        scroll={true}
        keyboard={false}
        enforceFocus={false}
        onHide={() => {
          setShow(false)
        }}
      >
        <Offcanvas.Header closeButton>
          Offcanvas Open
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h1>Offcanvas Content</h1>
          <code>Trail</code>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Header
