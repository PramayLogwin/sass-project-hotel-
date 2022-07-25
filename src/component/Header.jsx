import React from 'react';

export default function Header() {
    return (
        <>
            
            <nav className='navbar'>
                <a href='/' className='navbar_img'> Hotel Royal Taj </a>
                
                <div className='phone-menu'>
                    <a href='/' className='phone-links'></a>
                    <a href='/Home' className='phone-links'> Home </a>
                    <a href='/Location' className='phone-links'> Location </a>
                    <a href='/About' className='phone-links'> About </a>
                    <a href='/ContactUs' className='phone-links'> Contact Us </a>
                    <a href='/SignIn' className='phone-links'> Sign In </a>
                </div>

                <div className='menu'>
                    <a href='/' className='link'></a>
                    <a href='/Home' className='link'> Home </a>
                    <a href='/Location' className='link'> Location </a>
                    <a href='/About' className='link'> About </a>
                    <a href='/ContactUs' className='link'> Contact Us </a>
                    <a href='/SignIn' className='link'> Sign In </a>
                </div>

              
            </nav>
        </>
    )
}
