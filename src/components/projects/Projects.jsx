import React from 'react'
import '../../style/projects/projects.css'

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <h3 data-aos="zoom-in-down">Projects</h3>
      <div className='pro-cont' >
                <div className='pro-cont-title' data-aos="fade-down">
                    <h4>Wobble</h4>
                    <div className="a-cont"  >
                        <div className="pro-cont-img">
                            <div className="pro-cont-description">
                                <p>
                                    Similar to google. Search for web page links. Search and display images, videos and news. You can switch it to dark mode. {'(React, React-Redux, RapidApi, JS, Tailwind)'}
                                </p>
                                <span>Description <box-icon color='#ffffff' name='down-arrow-alt'></box-icon></span>
                            </div>
                            <a href="https://sebascool-search.netlify.app/" target="_blank">
                                <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1667972145/Portafolio%20Img/Wobble-search_xgkofm.png" alt="Project 5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='pro-cont-title' data-aos="fade-down">
                    <h4>Pokedex</h4>
                    <div className="a-cont"  >
                        <div className="pro-cont-img">
                            <div className="pro-cont-description">
                                <p>
                                    Show all pokemon. You can search them by type and by name. It also shows the data of each pokemon. {'(React, React-Redux, React-Router, Res Api, JS, CSS)'}
                                </p>
                                <span>Description <box-icon color='#ffffff' name='down-arrow-alt'></box-icon></span>
                            </div>
                            <a href="https://pokedex-sd.netlify.app/" target="_blank">
                                <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1663912837/Portafolio%20Img/pokedex_ganwij.png" alt="Project 5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='pro-cont-title' data-aos="fade-down">
                    <h4>Users CRUD</h4>
                    <div className="a-cont"  >
                        <div className="pro-cont-img">
                            <div className="pro-cont-description" >
                                <p>
                                    Full Stack app, create multiple users with personal data and display them
                                    in the page. You can also edit data and delete the
                                    user. {'(Express, Jwt, Node, Postgres, Sequelize, CSS, Hook-Forms, Html, React, Rest Api)'}
                                </p>
                                <span>Description <box-icon color='#ffffff' name='down-arrow-alt'></box-icon></span>
                            </div>
                            <a href="https://enchanting-gelato-c05688.netlify.app/" target="_blank">
                                <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1664155148/Portafolio%20Img/Users_CRUD_bbwp1d.png" alt="Project 4" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='pro-cont-title' data-aos="fade-down">
                    <h4>Rick and Morty</h4>
                    <div className="a-cont"  >
                        <div className="pro-cont-img">
                            <div className="pro-cont-description" >
                                <p>
                                    Search the characters of each planet. Show the data
                                    of the characters how many chapters they appear and if they are
                                    alive or dead. {'React, React-Redux, Res Api, JS, CSS, Html)'}
                                </p>
                                <span>Description <box-icon color='#ffffff' name='down-arrow-alt'></box-icon></span>
                            </div>
                            <a href="https://mellow-donut-27d12e.netlify.app/" target="_blank">
                                <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1661737514/Portafolio%20Img/Rick_And_Morty_t29jc3.png" alt="Project 1" />
                            </a>
                        </div>
                    </div>
                </div>


                <div className='pro-cont-title' data-aos="fade-down">
                    <h4>Quote Box</h4>
                    <div className="a-cont"  >
                        <div className="pro-cont-img">
                            <div className="pro-cont-description">
                                <p>
                                    Shows quotas of some important person, every time you click the button or reload the page changes the quota and the color.{'(CSS, Html, React, Rest Api)'}
                                </p>
                                <span>Description <box-icon color='#ffffff' name='down-arrow-alt'></box-icon></span>
                            </div>
                            <a href="https://heroic-gnome-d4ece6.netlify.app/" target="_blank">
                                <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1661737514/Portafolio%20Img/Quote_Box_hewref.png" alt="Project 2" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='pro-cont-title' data-aos="fade-down">
                    <h4>Weather Search</h4>
                    <div className="a-cont"  >
                        <div className="pro-cont-img">
                            <div className="pro-cont-description" >
                                <p>
                                    Shows the weather of any city that you search. Change the temperature from Celsius to Farenheit. Show the weather of your current location {'(CSS, Html, TypeScript, React, Rest Api)'}
                                </p>
                                <span>Description <box-icon color='#ffffff' name='down-arrow-alt'></box-icon></span>
                            </div>
                            <a href="https://weather-app-sdr.netlify.app/" target="_blank">
                                <img src="https://res.cloudinary.com/ddict5xw3/image/upload/v1679856661/Portafolio%20Img/Weather_Search_wljo70.png" alt="Project 3" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Projects