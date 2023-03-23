import React from 'react'
import '../../style/navbar.css'

const Navbar = () => {
  return (
    <nav className='nav'>
            <ul className='nav_ul'>
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