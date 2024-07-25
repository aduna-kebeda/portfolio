import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';  
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft1.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import Twitter from '../../assets/twitter.png';
import Instagram from '../../assets/instagram.png';
import Youtube from '../../assets/youtube.png';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
          .sendForm('service_fzfslrp', 'template_6p6etsh', form.current, 'Ov7VM2I-bez5__fLb')
          .then(
            (result) => {
              console.log('Email successfully sent:', result.text);
              e.target.reset();
              alert('Email Sent!');

            },
            (error) => {
              console.error('Failed to send email:', error);
            }
          );
    };

    return (
        <section id="contactPage">
            <div id='clients'>
                <h1 className='contactPageTitle'>My clients</h1>
                <p className='clientDesc'>Here's what my clients say about our collaboration. Interested in working together? Reach out below!</p>   
                <div className='clientImgs'>
                    <img src={Walmart} alt='Client' className='clientImg'/>
                    <img src={Adobe} alt='Client' className='clientImg'/>
                    <img src={Microsoft} alt='Client' className='clientImg'/>
                    <img src={Facebook} alt='Client' className='clientImg'/>
                </div> 
            </div>
            <div id='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
                <form id='contactForm' ref={form} onSubmit={sendEmail}>
                    <input name='user_name' type='text' placeholder='Your Name' className='name'/>
                    <input name='user_email' type='email' placeholder='Your Email' className='email'/>
                    <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
                    <button type='submit' className='submitBtn' value="Send">Submit</button>
                </form>
                <div className='links'>
                    <img src={FacebookIcon} alt="facebook" className='link'/> 
                    <img src={Twitter} alt="twitter" className='link'/>
                    <img src={Youtube} alt="youtube" className='link'/>
                    <img src={Instagram} alt="instagram" className='link'/>
                </div>
            </div>
        </section>
    );
};

export default Contact;
