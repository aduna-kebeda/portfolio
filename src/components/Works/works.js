import React from 'react';
import './works.css';
import portfolio1 from '../../assets/dashboard.png';
import portfolio2 from '../../assets/job-listing.png';
import portfolio3 from '../../assets/blog.png';
import portfolio4 from '../../assets/todo.png';

const Works = () => {
  return (
    <section id="works">
       <h2 className='worksTitle'>My Portfolio</h2>
       <span className='worksDesc'>Here are some of my recent projects.</span>
       <div className='workImgs'>
           <div className='workCard'> 
            <img src={portfolio1} className='workImg' alt='Bank Dashboard Project'/>
            <div className='workCardText'>
              <p>Bank Dashboard</p>
            </div>
           </div>

           <div className='workCard'> 
            <img src={portfolio3} className='workImg' alt='Blog Project'/>
            <div className='workCardText'>
              <p>Blog</p>
            </div>
           </div>

           <div className='workCard'> 
            <img src={portfolio2} className='workImg' alt='Job Listing App'/>
            <div className='workCardText'>
              <p>Job Listing App</p>
            </div>
           </div>

           
            
           <div className='workCard'> 
            <img src={portfolio4} className='workImg' alt='Todo App'/>
            <div className='workCardText'>
              <p>Todo App</p>
            </div>
           </div>
       </div>
       <button className='workBtn'>See More</button>
    </section>
  )
}

export default Works;
