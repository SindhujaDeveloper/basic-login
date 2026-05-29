import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import googleMap from "../../assets/images/googlemap.png";

import "assets/stylesheets/footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <Container>
        <h2 className="footer-title">Contact Us</h2>
        <Row>
          <Col xs={12} md={6} lg={3} className="footer-col company-info">
            <h5>Company Info</h5>
            <p>
              <strong>NSP FOODS</strong>
            </p>
            <p>Mobile: 8428949366</p>
            <p>WhatsApp: 7868049366</p>
            <p>
              NSP Foods
              <br />
              Veeriyampalayam,
              <br />
              Coimbatore - 641048
            </p>
          </Col>
          <Col xs={12} md={6} lg={3} className="footer-col">
            <h5>Location</h5>
            <a
              href="https://www.google.com/maps/place/NSP+Foods/@11.0534664,77.0400058,15z/data=!4m2!3m1!1s0x0:0x1a13c28ba093fbba?sa=X&ved=1t:2428&ictx=111"
              rel="noreferrer"
              target="_blank"
              className="location-map"
              style={{ display: "block" }}
            >
              <img src={googleMap} alt="Google Map Location" />
            </a>
          </Col>
          <Col xs={12} md={6} lg={3} className="footer-col">
            <h5>Policy</h5>
            <p>
              Orders should be placed before <b>1 hour</b>.
            </p>
          </Col>
          <Col xs={12} md={6} lg={3} className="footer-col">
            <h5>Follow us on</h5>
            <div className='social-media-icons d-flex align-items-center gap-3'>
              <a href="https://www.instagram.com/@nsp-foods_" target="_blank" rel="noreferrer" className='social-media-icon' title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@nsp-foods" target="_blank" rel="noreferrer" className='social-media-icon' title="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.052-.072 1.96l-.008.103-.022.26-.01.104c-.048.519-.119 1.023-.22 1.402a2.01 2.01 0 0 1-1.415 1.42c-1.123.302-5.288.332-6.11.335h-.089c-.822-.003-4.987-.033-6.11-.335a2.01 2.01 0 0 1-1.415-1.42c-.101-.38-.172-.883-.22-1.402l-.01-.104-.022-.26-.008-.104c-.065-.914-.073-1.77-.074-1.957v-.075c.001-.194.01-1.052.072-1.96l.008-.103.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c1.123-.302 5.288-.332 6.11-.335zm-3.21 4.093v5.816L11.5 8l-6.659-2.09z"/>
                </svg>
              </a>
            </div>
          </Col>
        </Row>
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} NSP FOODS. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
