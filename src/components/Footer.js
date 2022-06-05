import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import Foot from './images/Footer.png'; 

function Footer() {
  return (

      <div class='social-media'>
        <div class='social-media-wrap'>
        <img className='footer' src={Foot} alt='blas'/> 
        </div>
      </div>

  );
}

export default Footer;
