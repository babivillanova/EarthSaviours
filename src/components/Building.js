import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import Building from './images/building.png'; 

function Build() {
  return (

      <div class='social-media'>
        <div class='social-media-wrap'>
        <img className='build' src={Building} alt='blas'/> 
        </div>
      </div>

  );
}

export default Build;
