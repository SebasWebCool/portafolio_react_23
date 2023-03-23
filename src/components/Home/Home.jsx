import React from 'react'
import '../../style/home.css'
import Header from './Header'

const Home = () => {
  return (
    <section className='home' id='home'>
      <Header/>
      <div className='home_text'>
        <span>Hello I'm</span>
        <h1>Sebastian Diaz</h1>
        <h2>Full Stack Developer</h2>
      </div>

      <div className='home_img'>
        <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1661737598/Portafolio%20Img/yo_mmwevb.png" alt="" />
      </div>

      <div className='home_btn '>
          <a className='hvr-bob hvr-sweep-to-bottom' href="./CV_Sebastian_Diaz_Full-Stack_(2).pdf" download>Download CV</a>
        
          <a className='hvr-bob hvr-sweep-to-bottom' href="#contact">Contact Me</a>
      </div>



    </section>

  )
}

export default Home