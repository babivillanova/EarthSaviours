import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import Dashimage from './images/Dashimage.png'; 

function Dash() {
  return (

      <div class='social-media'>
        <div class='social-media-wrap'>
        <img className='footer' src={Dashimage} alt='blas'/> 
        </div>
      </div>

  );
}

export default Dash;
