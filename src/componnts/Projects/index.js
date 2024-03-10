import React from 'react';
import { FaPlay, FaShoppingCart, FaBriefcase } from 'react-icons/fa';
import './index.css';




const Project = () => {
  return(
    <div id ='projects' className='project-container'>
    <h2 className='heading-secondary'>MY PROJECTS</h2>
    
      <div className='work'>
       <div className='work__content'>
       <h3 className='work__header-three'><FaPlay /> Nxt Watch</h3> 
         <p className='work__paragraph'>Developed the Nxt Watch platform, a YouTube-inspired application where users
can access various video categories, such as Trending, Gaming, and Saved videos,</p>
         <div className='btn-container'>
          <a href='https://omprkashnxt63.ccbp.tech/' target='__blank' className='work__btn btn buttons'>View Project</a>
         </div>
       </div>
    
     
      
       <div className='work__content'>
       <h3 className='work__header-three'><FaShoppingCart /> Nxt Trendz ( ECommerce Clone - Amazon,
Flipkart)
</h3> 
         <p className='work__paragraph'>Implemented Nxt Trendz application which is a clone for ECommerce applications
like Amazon, Flipkart.</p>
         <div className='btn-container'>
          <a href='https://prakashtrendz.ccbp.tech/' target='__blank' className='work__btn btn buttons'>View Project</a>
         </div>
       </div>
     
       
       <div className='work__content'>
       <h3 className='work__header-three'><FaBriefcase /> Jobby App</h3>
         <p className='work__paragraph'>Implemented Jobby App where users can log in and can see a list of jobs with
search by Job title, filters based on Salary range and Employment type, etc</p>
         <div className='btn-container'>
          <a href='https://prakashjobby1.ccbp.tech/' target='__blank' className='work__btn btn buttons'>View Project</a>
         </div>
       </div>
     </div>
     
</div>
  )
}

export default Project;