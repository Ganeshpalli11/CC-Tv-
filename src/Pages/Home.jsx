import React, { useEffect } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Pages.css';
import ccman from '../images/ccman.png';
import beneCam from '../images/benefits-cam.png';
import cmp1 from '../images/cmp1.jpg';
import cmp2 from '../images/cmp2.png';
import cmp3 from '../images/cmp3.png';
import cmp4 from '../images/cmp4.jpg';
import cmp5 from '../images/cmp5.png';

import { Link } from 'react-router-dom'; 

const HomeContent = () => {
  useEffect(() => {
    window.addEventListener("scroll", parallaxEffect);
    return () => {
      window.removeEventListener("scroll", parallaxEffect);
    };
  }, []);

  const parallaxEffect = () => {
    const scrolled = window.pageYOffset;
    const layers = document.querySelectorAll(".parallax-layer");
    layers.forEach(layer => {
      const speed = layer.getAttribute("data-speed");
      const yPos = -scrolled * speed;
      layer.style.transform = `translateY(${yPos}px)`;
    });
  };

  return (
    <div className="right-container">
      <div className="right-subcontainer">
        <div className="right-img parallax-layer" data-speed="0.5">
          <img src={ccman} className="ccman" alt="ccman"></img>
        </div>
        <div className="right-content">
          <h2>we are Offering</h2>
          <ul>
            <li>Installation Service</li>
            <li>Repair Service</li>
            <li>Sales</li>
          </ul>
          <button className="contact-button">
            <Link to="/Contact" className="contact-link">Contact Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="left-container">
      <div className="left-subcontainer">
        <div className="left-content">
          <h2>Benefits With Us</h2>
          <ul>
            <li>24/7 Fast and Reliable Service</li>
            <li>1 year On-site Service Warranty</li>
            <li>Reasonable Charges</li>
            <li>High Quality Cameras</li>
            <li>Wired and wireless Cams Installation</li>
            <li>100% Secured</li>
          </ul>
        </div>
        <div className="left-img parallax-layer" data-speed="0.3">
          <img src={beneCam} className="ccman camrotate" alt="beneCam"></img>
        </div>
      </div>
    </div>
  );
};

const Companies = () => {
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      autoplay: true,
      centerMode: true, // Center the images
      centerPadding: "5%", // Adjust the padding for centering
  };

  return (
      <div className="companies-main">
          <div className="companies">
              <h2>Cameras Available</h2>
              <Slider {...settings}>
                  <div>
                      <img src={cmp1} className="cmp" alt="Company 1" />
                  </div>
                  <div>
                      <img src={cmp2} className="cmp" alt="Company 2" />
                  </div>
                  <div>
                      <img src={cmp3} className="cmp" alt="Company 3" />
                  </div>
                  <div>
                      <img src={cmp4} className="cmp" alt="Company 4" />
                  </div>
                  <div>
                      <img src={cmp5} className="cmp" alt="Company 5" />
                  </div>
              </Slider>
          </div>
      </div>
  );
}
const Footer=()=>{
  return(
    <div className="Footer">
    <h3>Designed & Developed By Ganesh_Palli</h3>
    </div>
  )
}
const Home = () => {
  return (
    <div>
      <HomeContent />
      <Services />
      <Companies/>
      <Footer/>
    </div>
  );
};

export default Home;
