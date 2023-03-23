import React from 'react'
import '../style/contact/contact.css'

const Contacts = () => {
    return (
        <section className='contact' id='contact'>
            <h3>Contact Me</h3>
            <div className='contact_div'>
                <div className='contact_div_social'>

                    <div className='contact_div_social_a hvr-shutter-out-horizontal'>
                        <box-icon name='gmail' type='logo' ></box-icon>
                        <h5>Email</h5>
                        <p>sebasweb2000@gmail.com</p>

                        <a href='mailto:sebasweb2000@gmail.com'>Write me <box-icon type='solid' color='#1b0d99' name='right-arrow-alt'></box-icon></a>
                    </div>


                    <div className='contact_div_social_a hvr-shutter-out-horizontal'>
                        <box-icon type='logo' name='whatsapp'></box-icon>
                        <h5>Whatsapp</h5>
                        <p>+58 412 0169581</p>

                        <a href='https://wa.me/584120169581'>Write me <box-icon type='solid' color='#1b0d99' name='right-arrow-alt'></box-icon></a>
                    </div>


                    <div className='contact_div_social_a hvr-shutter-out-horizontal'>
                        <box-icon name='linkedin-square' type='logo' ></box-icon>
                        <h5>LinkedIn</h5>
                        <p>linkedin.com/in/sebastián-e-díaz-ramírez</p>

                        <a href='https://www.linkedin.com/in/sebasti%C3%A1n-e-d%C3%ADaz-ram%C3%ADrez-3a4960244/'>Write me <box-icon type='solid' color='#1b0d99' name='right-arrow-alt'></box-icon></a>
                    </div>
                </div>

                <div className='contact_div_form'>
                    <h4>Tell Me About Your Idea</h4>
                    <form action="https://formspree.io/f/moqryoll" method="POST" class="contact_form">
                            <div class="contact_form-div">
                                <label for="name" class="contact_form-tag">Name</label>
                                <input type="text" placeholder="Insert your name" class="contact_form-input" name="name"/>
                            </div>

                            <div class="contact_form-div">
                                <label for="email" class="contact_form-tag">Mail</label>
                                <input type="email" placeholder="Insert your email" class="contact_form-input" name="email"/>
                            </div>

                            <div class="contact_form-div contact_form-area">
                                <label for="message" class="contact_form-tag">Idea</label>
                                <textarea name="" id="" cols="30" rows="10" placeholder="Write your idea" class="contact_form-input a" spellcheck="false"></textarea>
                                {/* <grammarly-extension data-grammarly-shadow-root="true" style="position: absolute; top: 0px; left: 0px; pointer-events: none; z-index: 1;" class="dnXmp"></grammarly-extension><grammarly-extension data-grammarly-shadow-root="true" style="position: absolute; top: 0px; left: 0px; pointer-events: none; z-index: 1;" class="dnXmp"></grammarly-extension> */}
                            </div>

                            <button type="submit" class="btn hvr-bounce-to-left">Send</button>
                        </form>
                   
                </div>

            </div>



        </section>
    )
}

export default Contacts