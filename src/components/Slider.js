import React from 'react';
import images1 from './images/ecomblog.jpg';
import images2 from './images/ecommerce-store.png';
import images3 from './images/2.jpg';
import './slider.css';



const Slider = () => {
 return (
  <>
  <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={images1} className="d-block w-100 height-500" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={images2} className="d-block w-100 height-500" alt="..." />
    </div>
    <div className="carousel-item">
      <img src= {images3} className="d-block w-100 height-500" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


  </>
 );
}

export default Slider;
