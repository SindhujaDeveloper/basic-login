import React, { useState, useEffect } from "react";
import { Nav, Navbar, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import logo from "../../assets/images/logo.png";
import type { RootState } from "types";
import { Cart } from "../../container/cart";

import "assets/stylesheets/header.scss";

const Header: React.FC = () => {
  const [showCart, setShowCart] = useState(false);
  const [bump, setBump] = useState(false);
  const menuList = useSelector((state: RootState) => state.menu.menuList);

  const cartItemCount = menuList.filter((item) => item.count > 0).length;

  useEffect(() => {
    if (cartItemCount === 0) {
      return;
    }
    setBump(true);
    const timer = setTimeout(() => {
      setBump(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [cartItemCount]);

  return (
    <div className="header-container">
      <Navbar
        expand="lg"
        className="bg-body-tertiary sticky-top"
        data-bs-theme="dark"
        sticky="top"
      >
        <Navbar.Brand href="#" className="ps-3">
          <div className="logo">
            <img src={logo} width={50} height={50} alt="Logo" />
            <h1>NSP FOODS</h1>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end pe-4"
        >
          <Nav className="auto align-items-center" style={{ gap: "15px" }}>
            <div
              className="order-btn-link"
              style={{ cursor: "pointer" }}
              onClick={() => setShowCart(true)}
            >
              <div className={`order-btn cart-btn-icon ${bump ? 'bump' : ''}`} title="Cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                <span className="ms-1">Cart</span>
                {cartItemCount > 0 && (
                  <Badge bg="danger" className="ms-1">
                    {cartItemCount}
                  </Badge>
                )}
              </div>
            </div>
            <a href="tel:+917868049366" className="order-btn-link">
              <div className="order-btn" title="Call - 7868049366">
                <span>Call Us</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone-fill ms-1" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
              </div>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Cart show={showCart} handleClose={() => setShowCart(false)} />
    </div>
  );
};

export default Header;
