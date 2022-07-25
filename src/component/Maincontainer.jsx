import React from 'react';
import img from "../img/main-page-2.jpg"

export default function Maincontainer() {
  return (
    <>

      <div className='main-container'>
        <div className='main-images'>
          <img src={img} alt='Loading..' className='hotel-images' />  
        </div>
       

      </div>
    </>
  )
}
