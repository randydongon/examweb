import React, { useEffect, useState } from 'react'
import '../components/Nav.css';
import smiley from '../image/smiley.png';

const Nav = () => {
  const [show, handleShadow] = useState(false);

  useEffect(() => {

    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShadow(true);
      }
      else {
        handleShadow(false);
      }
    })
    return () => {
      window.removeEventElistener('scroll')
    };
  }, [])

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img

        className='nav_logo'
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="net_logo" />
      <img
        className='nav_avatar'
        src={smiley} alt="smlogo" />

    </div>
  )
}

export default Nav
