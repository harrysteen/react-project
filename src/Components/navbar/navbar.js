import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from "react-icons/fa"
import "./navbar.css";


const Navbar = () => {

  const [click,setclick]= useState(false);


  const happy=()=>{

    setclick(!click)
  }
  return (
    <nav className='navmain'> 
      <div className='logo'>
        <h1>INKPROG</h1>
      </div>

      <div className={click ? "menu active" : "active"} >

        <Link to="/" style={{color:'white'}}>Home</Link>
        <Link to="/Contact" style={{color:'white'}}>Contact</Link>
        <Link to="/Traning" style={{color:'white'}}>Traning</Link>
      </div> 



      <div className='hamburger' onClick={happy}>
        {
          click ? ( <FaBars/>) : (<FaTimes/>)
        }
      </div>
    </nav>


    
  );
}

export default Navbar;
