import React from 'react'
import '../../style/navbar.css'

const Navbar = () => {

    // let scrollY = window.scrollY
    // window.onscroll = function () {
    //     let actualScroll = window.scrollY
    //     if (scrollY >= actualScroll) {
    //         document.getElementById('navbar').style.top = '-50px'
    //     } else {
    //         document.getElementById('navbar').style.top = '0'
    //     }
    //     scrollY = actualScroll
    // }


  return (
    <nav className='nav' id='navbar'>
            <ul className='nav_ul' data-aos-duration="800" data-aos="zoom-in">
                <li className='nav_ul_li hvr-hang hvr-radial-out'>
                    <a href="#home"><box-icon type='solid' name='home'></box-icon></a>
                </li>
                <li className='nav_ul_li hvr-hang hvr-radial-out'>
                    <a href="#about_me"><box-icon type='solid' name='user'></box-icon></a>
                </li>
                <li className='nav_ul_li hvr-hang hvr-radial-out'>
                    <a href="#skills"><box-icon name='joystick' type='solid' ></box-icon></a>
                </li>
                <li className='nav_ul_li hvr-hang hvr-radial-out'>
                    <a href="#projects"><box-icon type='solid' name='briefcase'></box-icon></a>
                </li>
                <li className='nav_ul_li hvr-hang hvr-radial-out'>
                    <a href="#contact"><box-icon type='solid' name='message-rounded-dots'></box-icon></a>
                </li>
            </ul>
    </nav>
  )
}

export default Navbar