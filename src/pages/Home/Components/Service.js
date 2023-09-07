import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import slider1 from '../../../assets/slider1.gif';
import slider2 from '../../../assets/slider2.gif';
import slider3 from '../../../assets/slider3.gif';
import slider4 from '../../../assets/slider4.webp';
import slider5 from '../../../assets/slider5.jpg';
import slider6 from '../../../assets/slider6.jpg';
import slider7 from '../../../assets/slider7.jpg';
import slider8 from '../../../assets/slider8.webp';
import slider9 from '../../../assets/slider9.jpg';

import './Service.css';

const NextArrow = (props) => {
  return <div className="custom-arrow custom-next-arrow" {...props}><span>&gt;</span></div>;
};

const PrevArrow = (props) => {
  return <div className="custom-arrow custom-prev-arrow" {...props}><span>&lt;</span></div>;
};



const Service = () => { 
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3, 
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className='servicemain'>
      <h1>SERVICES</h1>
      <div className='sub-servicemain'>
        <Slider {...settings}>



          
          <div>
            <img src={slider1} alt="slider 1" width={400} height={225} />
          </div>
          <div>
            <img src={slider2} alt="slider 2" width={400} />
          </div>
          <div>
            <img src={slider3} alt="slider 3" width={400} />
          </div>
          <div>
            <img src={slider4} alt="slider 4" width={400} />
          </div>
          <div>
            <img src={slider5} alt="slider 5" width={400} />
          </div>
          <div>
            <img src={slider6} alt="slider 6"  width={400} />
          </div>
          <div>
            <img src={slider7} alt="slider 7" width={400} />
          </div>
          <div>
            <img src={slider8} alt="slider 8" width={400} />
          </div>
          <div>
            <img src={slider9} alt="slider 9" width={400} />
          </div>
          
          
        </Slider>
      </div>
    </div>
  );
}

export default Service;
