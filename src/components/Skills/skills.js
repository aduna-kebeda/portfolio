import React from 'react';
import './skills.css';
import UIdesign from '../../assets/ui-design.png';
import Webdesign from '../../assets/website-design.png';
import Appdesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id="skills">
      <h1 className='skillTitle'>What I Do</h1> {/* Changed to h1 for semantic HTML and better SEO */}
      <p className='skillDesc'>I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites, and a software engineer dedicated to crafting efficient and scalable software solutions.</p>
      <div className='skillbars'>
        <div className='skillBar'>
          <img src={UIdesign} alt='UI Design' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>UI/UX Design</h2> {/* Added title */}
            <p>I am experienced at designing UI/UX that enhances user satisfaction and engagement. </p> {/* Added description */}
          </div>
        </div>
        <div className='skillBar'>
          <img src={Webdesign} alt='Web Design' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Website Design</h2>
            <p> Specializing in creating intuitive and visually compelling user interfaces.</p> {/* Improved description */}
          </div>
        </div>
        <div className='skillBar'>
          <img src={Appdesign} alt='App Design' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>App Design</h2> {/* Added title */}
            <p>Expert in crafting mobile app designs that are both functional and aesthetically pleasing.</p> {/* Added description */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;