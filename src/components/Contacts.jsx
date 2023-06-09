import React from 'react'
import '../style/contact/contact.css'
import { useForm, ValidationError } from '@formspree/react';

const Contacts = () => {
    const [state, handleSubmit] = useForm("mgeblqgj");
    if (state.succeeded) {
        return <p className='sumited'>Thanks for text me!</p>;
    }

    return (
        <section className='contact' id='contact'>
            <h3>Contact Me</h3>
            <div className='contact_div'>
                <div className='contact_div_social'>

                    <div className='contact_div_social_a ' data-aos="fade-down-right" data-aos-duration="800">
                        <box-icon name='gmail' type='logo' ></box-icon>
                        <h5>Email</h5>
                        <p>sebasweb2000@gmail.com</p>

                        <a href='mailto:sebasweb2000@gmail.com'>Text me <box-icon type='solid' color='#1b0d99' name='right-arrow-alt'></box-icon></a>
                    </div>


                    <div className='contact_div_social_a ' data-aos="fade-right" data-aos-duration="800">
                        <box-icon type='logo' name='whatsapp'></box-icon>
                        <h5>Whatsapp</h5>
                        <p>+58 412 0169581</p>

                        <a href='https://wa.me/584120169581'>Text me <box-icon type='solid' color='#1b0d99' name='right-arrow-alt'></box-icon></a>
                    </div>


                    <div className='contact_div_social_a ' data-aos="fade-up-right" data-aos-duration="800">
                        <box-icon name='linkedin-square' type='logo' ></box-icon>
                        <h5>LinkedIn</h5>
                        <p>linkedin.com/in/sebastián-e-díaz-ramírez</p>

                        <a href='https://www.linkedin.com/in/sebasti%C3%A1n-e-d%C3%ADaz-ram%C3%ADrez-3a4960244/'>Text me <box-icon type='solid' color='#1b0d99' name='right-arrow-alt'></box-icon></a>
                    </div>
                </div>

                <div className='contact_div_form' data-aos="fade-up" data-aos-duration="800">
                    <h4>Tell Me About Your Idea</h4>
                    <form class="contact_form" onSubmit={handleSubmit}>
                        <div class="contact_form-div">
                            <label for="name" class="contact_form-tag">Name</label>
                            <input type="text" placeholder="Insert your name" class="contact_form-input" name="name" />
                        </div>
                        <div class="contact_form-div">
                            <label for="email" htmlFor='email' class="contact_form-tag">Mail</label>
                            <input type="email" id='email' placeholder="Insert your email" class="contact_form-input" name="email" />
                        </div>
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <div class="contact_form-div contact_form-area">
                            <label for="message" class="contact_form-tag">Idea</label>
                            <textarea name="message" id="message" cols="30" rows="10" placeholder="Write your idea" class="contact_form-input a" spellcheck="false"></textarea>
                        </div>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                        <button class="btn hvr-bounce-to-left" type="submit" disabled={state.submitting}>
                            Submit
                        </button>
                    </form>
                </div>

            </div>



        </section>
    )
}

export default Contacts