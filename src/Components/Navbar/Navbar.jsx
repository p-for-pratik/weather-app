import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import SignOut from '../SignOut/SignOut';


const Navbar = (props) => {
  // const history = useHistory();
  const [isLoginUsersClicked, setIsLoginUsersClicked] = useState(false);

  const handleLoginUsersClick = () => {
    setIsLoginUsersClicked((prev) => !prev);
  };
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
                  <SignOut />
                </li>

                <li>
                <Link onClick={handleLoginUsersClick}  to={isLoginUsersClicked ? '/' : '/loginusers'} >
          <button className='loginUsers'>
            {isLoginUsersClicked ? 'Home' : 'Login users'}
          </button>
        </Link>
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
