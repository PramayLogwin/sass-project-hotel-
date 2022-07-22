import React from 'react';

export default function Header() {
    return (
        <>
            {/* navbar section */}
            <nav className='navbar'>
                <a href='/' className='navbar_img'> Hotel Royal Taj </a>
                <div className='bar'>
                    <i className='fas fa-bars'></i>
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
