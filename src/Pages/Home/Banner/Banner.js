import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from '../../../images/bmw.jpg'

const Banner = () => {
    return (
        <>
 <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 h-25"
      src={banner}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-25"
      src={banner}
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-25"
      src={banner}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;