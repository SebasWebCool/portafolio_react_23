import React from 'react'
import '../style/about.css'

const AboutMe = () => {
  return (
    <section id='about_me'>
            <h3 className='about_text__title'>About Me</h3>
      <div className="about_cont_inf">
          <div className='about_img float'>
            <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1679503665/yo2__2_-removebg-preview_fq7kga.png" alt="" />
          </div>
          <div className="about_text float">
            <p>Active, dynamic, with very good analytical skills. I'm a Full Stack developer ready to use my skills and knowledge to add value to the projects and objectives of the company. <br />

              <br />
              Passionate about technology, I'm excited to be a part of an organization where I can gain more experience and allow me to contribute my skills with commitment, effort, and dedication to satisfying the needs of the company.
            </p>
          </div>
      </div>
    </section>
  )
}

export default AboutMe