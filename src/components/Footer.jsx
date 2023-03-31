import React from 'react'
import '../style/footer/footer.css'

const Footer = () => {
    return (
        <footer className='footer' data-aos="zoom-in-up">
            <h3 >Sebastian Diaz R</h3>
            <div  className='footer_nav'>
                <a className='hvr-bounce-to-top' href="#home">Home</a>
                <a className='hvr-bounce-to-top' href="#about_me">About Me</a>
                <a className='hvr-bounce-to-top' href="#skills">Skills</a>
                <a className='hvr-bounce-to-top' href="#projects">Projects</a>
            </div>
            <div  className='footer_nav'>
                <a target={'_blank'} className='hvr-radial-in' href="https://wa.me/584120169581"><box-icon type='logo' name='whatsapp'></box-icon></a>
                <a target={'_blank'} className='hvr-radial-in' href="https://www.linkedin.com/in/sebasti%C3%A1n-e-d%C3%ADaz-ram%C3%ADrez-3a4960244/"><box-icon name='linkedin-square' type='logo' ></box-icon></a>
                <a target={'_blank'} className='hvr-radial-in' href="https://github.com/SebasWebCool"><box-icon name='github' type='logo' ></box-icon></a>
                <a target={'_blank'} className='hvr-radial-in' href="mailto:sebasweb2000@gmail.com"><box-icon name='gmail' type='logo' ></box-icon></a>
            </div>
            <span >© Sebastian Diaz R. All rights reserved.</span>
        </footer>
    )
}

export default Footer