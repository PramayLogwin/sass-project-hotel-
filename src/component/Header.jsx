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

                <div className='navbae_menu'>
                    <a href='/' className='navbar_menu'></a>
                    <a href='/Home' className='navbar_menu'> Home </a>
                    <a href='/Home' className='navbar_menu'> Product</a>
                    <a href='/About' className='navbar_menu'> About </a>
                    <a href='/ContactUs' className='navbar_menu'> Contact Us </a>
                    <a href='/SignIn' className='navbar_menu'> Sign In </a>
                </div>
            </nav>
        </>
    )
}
