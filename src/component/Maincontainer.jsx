import React from 'react';
import img from "../img/mainpage.jpg";  

export default function Maincontainer() {
  return (
    <>
      {/* Main section */}
      <div className='main-container'>
        <div className='header-container--left'>
          <h1>Hotel Royal Taj</h1>
          <h2> WELCOME IN TAJ</h2>
        </div>

        <div className='header-container--right'>
          <img src={img} alt='Loading..' className='hotel-images'/>
        </div>
      </div>
    </>
  )
}
