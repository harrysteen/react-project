import React from 'react';
import braine from '../../../assets/brain.webp';  
import bk from '../../../assets/alexey.gif';
import './Hero.css'; 

const Hero = () => {
  return (
    <div>
      

      <div className='images' style={{display:'flex'}}> 
        <img src={braine} alt="Braine" width={600} />
        <img src={bk} alt='bktys' width={400} /> 
      </div>
    </div>
  );
};

export default Hero;
