import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAndroid, faApple } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer3">
    <div className='social1'>
    <div className='socialleft'>
    <ul>
    <li><h4>Follow Us</h4></li>
    <li>
    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faTwitter} className='red'/>
    </a>
    </li> 
    <li>
    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faFacebook} className='blue'/>
    </a>
    </li>
    <li>
    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faInstagram} className='pink'/>
    </a>
    </li>
    </ul>
    </div>
    <div className='socialright'>
    <ul>
    <li>
    <h4>Mobile App</h4>
    </li>
    <li>
    <FontAwesomeIcon icon={faAndroid} size="2x" className='imgcol black'/>
    </li>
    <li>
    <FontAwesomeIcon icon={faApple} size="2x" className='imgcol white'/>
    </li>
    </ul>
    </div>
    </div>
    <div className='bot'>
    <p>&copy; 2024 Weather-app</p>
    <h2>Terms of service</h2>
    <h2>Privacy policy</h2>
    <h2>Cookie Setting</h2>
    <h2>Accessibility</h2>
    </div>
    </footer>
  )
}

export default Footer
