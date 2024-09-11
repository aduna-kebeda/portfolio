import React from 'react';
import './skills.css';
import WebDevelopment from '../../assets/website-design.png';
import AppDevelopment from '../../assets/app-design.png';
import FrontendDevelopment from '../../assets/ui-design.png';

const Skills = () => {
  return (
    <section id="skills">
      <h1 className='skillTitle'>What I Do</h1>
      <p className='skillDesc'>
        I am a skilled frontend developer with a passion for building interactive, responsive, and user-friendly web and mobile applications.
        My focus is on creating high-performance applications that provide a seamless user experience.
      </p>
      <div className='skillbars'>
        <div className='skillBar'>
          <img src={WebDevelopment} alt='Web Development' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Website Development</h2>
            <p>
              Specializing in modern web technologies, I build responsive and dynamic websites that meet client needs and ensure smooth user interaction.
            </p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={AppDevelopment} alt='App Development' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>App Development</h2>
            <p>
              I design and develop mobile applications with a focus on intuitive UI and optimal performance, ensuring a high-quality user experience.
            </p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={FrontendDevelopment} alt='Frontend Development' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Frontend Development</h2>
            <p>
              Expert in turning designs into reality using modern frontend frameworks, ensuring the best performance and responsiveness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
