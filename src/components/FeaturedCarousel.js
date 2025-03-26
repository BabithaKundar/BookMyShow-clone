import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FeaturedCarousel = ({ items }) => {
  return (
    <Carousel 
      interval={5000} 
      pause="hover" 
      className="featured-carousel"
      indicators={true}
      controls={true}
    >
      {items.map((item, index) => (
        <Carousel.Item key={index}>
          <div className="carousel-item-container">
            <img
              className="d-block w-100"
              src={item.image}
              alt={item.title}
            />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link to={item.link} className="btn btn-primary">
                {item.buttonText}
              </Link>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default FeaturedCarousel; 