import React from 'react';
import './intro.css';
import bg from '../../assets/image1.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';
const Intro = () => {
  return (
    <section id="intro">
      <div className="intro-content">
         <span className='hello'>Hello</span>
         <span className='introText'>I'm <span className='introName'>Aduna</span><br/>Website Designer</span>
         <p className='introPara'>I'm a software engineer specializing in developing innovative solutions<br/> and writing code to solve complex problem.</p>
         <Link to="contact"><button  className='btn'><img src={btnImg}  alt='Hire me'className='btnImg'/> Hire me</button></Link>
      </div> 
      <img src={bg} alt='profile' className='bg' />
    </section>
  )
}

export default Intro;
