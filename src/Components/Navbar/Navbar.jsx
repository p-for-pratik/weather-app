import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import SignOut from '../SignOut/SignOut';

const Navbar = (props) => {

  return (
    <>
      <div className='nav-container'>
        <div className='nav-left'>
          <h2>Weather-app</h2>
          <ul>
            <li className='shift'>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='nav-right'>
          <ul>
            {props.name ? (
              <>
              <li>
                <SignOut/>
              </li>
              </>
            ) : (
              <>
                <li>
                  <Link to='/login'>
                    <button className='login1'>
                      Login
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to='/signup'>
                    <button className='signup1'>Signup</button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
