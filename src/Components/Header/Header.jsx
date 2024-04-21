import React from 'react';
import './Header.css';
import logo from "../Images/looogoo.png"
const Header = () => {
  
  return (
      <div className='main-head-container'>
        <div className='first-one'>
          <img src={logo} alt="Logo" className='logo'/>
          <h1 className='logo-head'>LOGO</h1>
        </div>

        <div className='second-one'>
          <h1 className='heading'>SHOP</h1>
          <h1 className='heading'>SKILLS</h1>
          <h1 className='heading'>STORIES</h1>
          <h1 className='heading'>ABOUT</h1>
          <h1 className='heading'>CONTACT US</h1>
        </div>

        <div className='third-one'>
          <h1 className='heading2'>DISCOVER OUR PRODUCTS</h1>
          <p className='C'>Loerum ipsum dolor sit amet consecterur.Amet est posuere rhoncus scelerisque. Dlor integer scelerisque nibh amet mi ut elementum dolor.</p>
        </div>
      </div>
  );
}

export default Header;