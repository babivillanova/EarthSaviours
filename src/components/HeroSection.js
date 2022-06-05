import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Button2 } from './Button';
import './HeroSection.css';
 import hero from './images/Hero.png';


function HeroSection() {
  return (
    <div className='hero-container'>
        <div className='onboarding-container'>
         <img src={hero} alt='bla'/> 
        </div>
        

    </div>
  );
}

export default HeroSection;
