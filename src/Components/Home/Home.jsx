import React from 'react'
import Home1 from './Home1'
import Home2 from './Home2'
import Navbar from '../Navbar/Navbar'

const Home = (props) => {
  return (
    <div className='main-home'>
    <Navbar name={props.name} />
     {props.name ? <Home1/>: <Home2/>}
    </div>
  )
}

export default Home;
