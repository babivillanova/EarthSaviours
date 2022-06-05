import React from 'react';
import '../App.css';
import './Bridge.css';
import { Button } from './Button';


function Bridge() {
  return (
    <div className='bridge'>
    <div className='bridge-container'>
        <div className='bridge-text'>
           <p> IF YOU ARE AN INVESTOR</p>
         </div>
     
        <div className='explain'>
            <div className='explaintext'>Buy an NFT representing partial ownership of the aditional construction area of the building</div>
            <div className='explaintext'>Sponsor a local resident with participatory design voting rights </div>
            <div className='explaintext'>Receive 0,5% Yeild after construction completion and rented</div>
        </div>


    </div>
          
      <Button>BUY NOW</Button>
      </div>


  );
}

export default Bridge;
