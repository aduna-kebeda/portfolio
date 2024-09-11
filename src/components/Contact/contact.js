import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';  
import Safaricom from '../../assets/safari.png';
import Telecom from '../../assets/tele.jpg';
import A2sv from '../../assets/a2sv.jpg';
import Insa from '../../assets/insa.png';
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
                    <img src={Safaricom} alt='Client' className='clientImg'/>
                    <img src={Telecom} alt='Client' className='clientImg'/>
                    <img src={A2sv} alt='Client' className='clientImg'/>
                    <img src={Insa} alt='Client' className='clientImg'/>
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
