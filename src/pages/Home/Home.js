import React from 'react';
import Navbar from '../../Components/navbar/navbar'
 import Hero from './Components/Hero';
import State from './Components/State';
import Introduction from './Components/Introduction';
import History from './Components/History';
import Service from './Components/Service';
import Faqs from './Components/Faqs';

 

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <State/>
      <Introduction/>
      <History/>
      <Service/>
      <Faqs/>
     
      
           
       
       
    </div>
  );
};

export default Home;
