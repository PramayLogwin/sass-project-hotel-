import React from 'react';
import img from "../img/main-page-2.jpg"

export default function Maincontainer() {
  return (
    <>
      {/* Main section */}
      <div className='main-container'>
        <div className='header-container--left'>
          
        </div>

        <div className='header-container--right'>
          <img src={img} alt='Loading..' className='hotel-images' />
        </div>
      </div>
    </>
  )
}
