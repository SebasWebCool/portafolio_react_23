import React from 'react'
import '../../style/sidebar.css'
const Sidebar = () => {
  return (
    <aside>
        <ul className='aside_ul'>
                <li className='aside_ul_li hvr-buzz-out hvr-radial-in'>
                    <a href="https://wa.me/584120169581"><box-icon type='logo' name='whatsapp'></box-icon></a>
                </li>
                <li className='aside_ul_li hvr-buzz-out hvr-radial-in'>
                    <a href="https://www.linkedin.com/in/sebasti%C3%A1n-e-d%C3%ADaz-ram%C3%ADrez-3a4960244/"><box-icon name='linkedin-square' type='logo' ></box-icon></a>
                </li>
                <li className='aside_ul_li hvr-buzz-out hvr-radial-in'>
                    <a href="https://github.com/SebasWebCool"><box-icon name='github' type='logo' ></box-icon></a>
                </li>
                <li className='aside_ul_li hvr-buzz-out hvr-radial-in'>
                    <a href="mailto:sebasweb2000@gmail.com"><box-icon name='gmail' type='logo' ></box-icon></a>
                </li>
                <li className='aside_ul_li hvr-buzz-out hvr-radial-in'>
                    <a href="https://www.instagram.com/sebasdiazram/"><box-icon name='instagram' type='logo' ></box-icon></a>
                </li>
            </ul>
    </aside>
  )
}

export default Sidebar