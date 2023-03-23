import React from 'react'
import '../style/footer/footer.css'

const Footer = () => {
    return (
        <footer className='footer' data-aos="fade-left" data-aos-duration="800" >
            <h3>Sebastian Diaz</h3>
            <div className='footer_nav'>
                <a href="#home">Home</a>
                <a href="#about_me">About Me</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
            </div>
            <div className='footer_nav'>
                <a href="https://wa.me/584120169581"><box-icon type='logo' name='whatsapp'></box-icon></a>
                <a href="https://www.linkedin.com/in/sebasti%C3%A1n-e-d%C3%ADaz-ram%C3%ADrez-3a4960244/"><box-icon name='linkedin-square' type='logo' ></box-icon></a>
                <a href="https://github.com/SebasWebCool"><box-icon name='github' type='logo' ></box-icon></a>
                <a href="mailto:sebasweb2000@gmail.com"><box-icon name='gmail' type='logo' ></box-icon></a>
            </div>
            <span>© Sebastian Diaz. All rights reserved.</span>
        </footer>
    )
}

export default Footer