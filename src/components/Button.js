import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primmary', 'btn--secondary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonStyle)
    ? buttonStyle
    : SIZES[0]

    return(
      <Link to='/marketplace' className='btn-mobile'>
          <button
          className={'btn ${checkButtonStyle} ${checkButtonSize}'}
          onClick={onClick}
          type={type}
          >
            {children}
          </button>
      </Link>
    );
};

export const Button2 = ({
  children, 
  type, 
  onClick, 
  buttonStyle
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) 
  ? buttonStyle 
  : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonStyle)
  ? buttonStyle
  : SIZES[0]

  return(
    <Link to="/privacy-police" className='btn-mobile'>
        <button
        className={'btn ${checkButtonStyle} ${checkButtonSize}'}
        onClick={onClick}
        type={type}
        >
          {children}
        </button>
    </Link>
  );
};