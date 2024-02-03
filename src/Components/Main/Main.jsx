import React from 'react';
import video from "../../Assets/main-video.mp4";
import "./main.css";
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Main = () => {
  return (
    <section className="outter option2">
    <section className="video-container">
      <video src={video} autoPlay loop playsInline muted></video>
      <div className="callout">
        <h1>Weather-app</h1>
        <div className="desc">A weather app is a software application designed to provide users with real-time or forecasted meteorological information for a specific location or a set of locations.</div>
        <div className="button">
        <Link to='/login'><div className="inner">Get Started</div></Link>
        </div>
      </div>
    </section>
    <Footer/>
  </section>
  )
}

export default Main
