import React from 'react';
import  './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  return (
    <div className='main-container'>
        <div className='fffff'>
        <h1 className='heading'>BE THE FIRST TO KNOW</h1>
        <p className='para'>Sign up for updates from Metta Muse.</p>
        <div className='input-button'>
        <input type='text' className='input-box'  placeholder='Enter Your E-mail'/>
        <button className='button'>SUBSCRIBE</button>
        </div>
       
        <div className='fffff'>
        <h1 className='heading'>CONTACT US</h1>
        <p className='para'>+44 221 133 5360</p>
        <p className='para'>customercare@mettamuse.com</p>
        <h1 className='heading'>CURRENCY</h1>
        <p className='para-currency'>Transactions will be completed in Euros and <br/> a currency reference is available on hover</p>
        </div>
        </div>

        <div className='inner-down-container'>
        <div className='footer'>
        <h1 className='heading'>Metta Muse</h1>
        <Link to="/about" className='para'>About us</Link>
        <Link to="/stories" className='para'>Stories</Link>
        <Link to="/artisans" className='para'>Artisans</Link>
        <Link to="/boutiques" className='para'>Boutiques</Link>
        <Link to="/contact" className='para'>Contact Us</Link>
        <Link to="/compliances" className='para'>EU Compliances Docs</Link>
      </div>

      <div className='footer'>
        <h1 className='heading'>Quick Links</h1>
        <p className='para'>Orders & Shipping</p>
        <p className='para'>Join/Login as a seller</p>
        <p className='para'>Payment & Pricing</p>
        <p className='para'>Returns & Refunds</p>
        <p className='para'>FAQs</p>
        <p className='para'>Privacy Policy</p>
        <p className='para'>Terms and Conditions</p>
      </div>

      <div>
      <div className='footer'>
        <h1 className='heading'>Follow Us</h1>
        <div className='react-icons'>
        <FaInstagram style={{marginLeft:"20px",marginRight:"20px"}} />
        <FaLinkedin />
        </div>
      </div>
      </div>
        </div>
    </div>
  )
}

export default Footer;
