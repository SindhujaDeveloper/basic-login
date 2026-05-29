import React from "react";
import { Container, Button } from "react-bootstrap";

import "assets/stylesheets/carouselComponent.scss";

const CarouselComponent: React.FC = () => {
  return (
    <div className="hero-banner">
      <Container className="hero-content">
        <h2>Welcome to NSP FOODS</h2>
        <p>Authentic South Indian Snacks Delivered to You!</p>
        <Button
          variant="light"
          size="lg"
          className="hero-btn"
          onClick={() => {
            window.scrollTo({
              top:
                document
                  .querySelector(".menu-container")
                  ?.getBoundingClientRect().top ?? 500,
              behavior: "smooth",
            });
          }}
        >
          View Menu
        </Button>
      </Container>
    </div>
  );
};

export default CarouselComponent;
