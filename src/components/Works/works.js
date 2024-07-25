import React from 'react'
import './works.css'
import portfolio1 from '../../assets/portfolio-1.png'
import portfolio2 from '../../assets/portfolio-2.png'
import portfolio3 from '../../assets/portfolio-3.png'
import portfolio4 from '../../assets/portfolio-4.png'
import portfolio5 from '../../assets/portfolio-5.png'
import portfolio6 from '../../assets/portfolio-6.png'

const Works = () => {
  return (
    <section id="works">
       <h2 className='worksTitle'>My Portfolio</h2>
       <span className='worksDesc'>Here are some of my recent projects.</span>
       <div className='workImgs'>
            <img src={portfolio1} className='workImg' alt='Project 1 description'/>
            <img src={portfolio2} className='workImg' alt='Project 2 description'/>
            <img src={portfolio3} className='workImg' alt='Project 3 description'/>
            <img src={portfolio4} className='workImg' alt='Project 4 description'/>
            <img src={portfolio5} className='workImg' alt='Project 5 description'/>
            <img src={portfolio6} className='workImg' alt='Project 6 description'/>
       </div>
       <button className='workBtn'>See More</button>
    </section>
  )
}

export default Works
