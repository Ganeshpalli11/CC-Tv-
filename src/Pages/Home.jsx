import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Pages.css';
import cc1 from '../images/cc1.jpeg'; 
import cc2 from '../images/cc2.jpeg'; 
import cc3 from '../images/cc3.jpeg'; 

const corosel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, // Enable autoplay
      autoplaySpeed: 5000, // Set autoplay speed to 3000 milliseconds (3 seconds)
    };
  
    return (
      <div className="carousel-container">
        <Slider {...settings}>
          <div>
            <img src={cc1} alt="Image 1" className="cr1"/>
          </div>
          <div>
            <img src={cc2} alt="Image 2" className="cr1"/>
          </div>
          <div>
            <img src={cc3} alt="Image 3" className="cr1"/>
          </div>
        </Slider>
      </div>
    );
  };
  
  const HomeContent = () => {
    return (
        <div>
        <h2>OurServices:</h2>

      <div className="home-content-container">
        <div className="article">
          <h2>Article 1</h2>
          <p>Content for Article 1</p>
        </div>
        <div className="article">
          <h2>Article 2</h2>
          <p>Content for Article 2</p>
        </div>
        <div className="article">
          <h2>Article 3</h2>
          <p>Content for Article 3</p>
        </div>
      </div>
      </div>
    );
  };
  
const Home = () => {
  return (
    <div>
      {corosel()} 
      {HomeContent()}
    </div>
  );
};

export default Home;
