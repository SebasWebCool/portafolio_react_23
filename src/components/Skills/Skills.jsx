import React from 'react'
import '../../style/skills/skills.css'

const Skills = () => {
    return (
        <section className='skills' id='skills'>
            <h3 data-aos="fade-up">My Skills</h3>

            <div className='skills_div'>
                <div className='skill_div_cont hvr-outline-in' data-aos="fade-down-right">
                    <h3>Front End</h3>
                    <ul className='skill_div_cont_ul'>
                        <li>
                             <h4><box-icon name='check' color='#3dc1d3'></box-icon> React</h4>
                            <span>Advanced</span>
                        </li>
                        <li>
                             <h4><box-icon name='check' color='#3dc1d3' ></box-icon> 
                             GitHub</h4> 
                            <span>Advanced</span>
                        </li>
                        <li>
                             <h4><box-icon name='check' color='#3dc1d3' ></box-icon> 
                             HTML</h4> 
                            <span>Advanced</span>
                        </li>
                        <li>
                             <h4><box-icon name='check' color='#3dc1d3' ></box-icon> 
                             CSS</h4> 
                            <span>Advanced</span>
                        </li>
                        <li>
                             <h4><box-icon name='check' color='#3dc1d3' ></box-icon> 
                             TypeScript</h4> 
                            <span>Advanced</span>
                        </li>
                        <li>
                             <h4><box-icon name='check' color='#3dc1d3' ></box-icon> 
                             Tailwind</h4> 
                            <span>Advanced</span>
                        </li>
                        <li>
                             <h4><box-icon name='check' color='#3dc1d3' ></box-icon> Bootstrap</h4> 
                            <span>Advanced</span>
                        </li>
                    </ul>
                </div>


                <div className='skill_div_cont hvr-outline-in' data-aos="fade-down-left">
                    <h3>Back End</h3>
                    <ul className='skill_div_cont_ul'>
                        <li>
                             <h4><box-icon name='check' color='#3dc1d3' ></box-icon> 
                             Node JS</h4> 
                            <span>Advanced</span>
                        </li>
                        <li className='hvr-icon-fade hvr-icon'>
                             <h4><box-icon name='check' color='#3dc1d3' ></box-icon> 
                             Express</h4> 
                            <span>Advanced</span>
                        </li>
                        <li>
                             <h4><box-icon name='check' color='#3dc1d3' ></box-icon> 
                             Postgres</h4> 
                            <span>Advanced</span>
                        </li>
                        <li>
                             <h4><box-icon name='check' color='#3dc1d3' ></box-icon> 
                             Jwt</h4> 
                            <span>Advanced</span>
                        </li>
                        <li>
                             <h4><box-icon name='check' color='#3dc1d3' ></box-icon> 
                             Django</h4> 
                            <span>Mediun</span>
                        </li>
                        <li>
                             <h4><box-icon name='check' color='#3dc1d3' ></box-icon> 
                             Sanity</h4> 
                            <span>Advanced</span>
                        </li>
                    </ul>
                </div>

                <div className='skill_div_cont_img hvr-outline-in' data-aos="flip-down">
                        <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1679592813/Portafolio%20Img/JavaScript-Logo_np87fe.png" alt="Javascript logo" />
                        <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1679510421/Portafolio%20Img/logo_react-removebg-preview_zioqml.png" alt="react logo" />
                        <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1679510079/Portafolio%20Img/nodeJs_logo-removebg-preview_ypkx3c.png" alt="node JS logo" />
                        <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1679857345/Portafolio%20Img/typescript1-removebg-preview_mardzk.png" alt="typescript logo" />
                        <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1661737600/Portafolio%20Img/html_t9rcrd.png" alt="html logo" />
                        <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1679510079/Portafolio%20Img/logo_github-removebg-preview_z4orwz.png" alt="Github logo" />
                        <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1679510079/Portafolio%20Img/css_logo-removebg-preview_dfsrhf.png" alt="css logo" />
                        <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1679507824/Portafolio%20Img/logo_python_ip1pr4.png" alt="Python logo" />
                        <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1679510079/Portafolio%20Img/bootstrap-removebg-preview_vuam6v.png" alt="bootstrap" />
                        <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1679510494/Portafolio%20Img/logo_tailwind_jx64z2.png" alt="Tailwind CSS" />
                </div>

            </div>

        </section>
    )
}

export default Skills